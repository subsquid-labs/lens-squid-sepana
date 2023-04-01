import {Store, TypeormDatabase} from '@subsquid/typeorm-store'
import {BlockHandlerContext, CommonHandlerContext, EvmBatchProcessor, EvmBlock} from '@subsquid/evm-processor'
import {lookupArchive} from '@subsquid/archive-registry'
import {events} from './abi/events'
import {Profile, Post, Comment} from './model'
import {In} from 'typeorm'
import {SepanaClient} from './sepana'
import {HttpClient} from '@subsquid/util-internal-http-client'
import assert from 'assert'

const lensContractAddress = '0xDb46d1Dc155634FbC732f92E853b10B288AD5a1d'.toLowerCase()

assert(process.env.SEPANA_API_KEY, 'SEPANA_API_KEY env varibale must be set')
assert(process.env.SEPANA_ENGINE_ID, 'SEPANA_ENGINE_ID env variable must be set')

const engineID = process.env.SEPANA_ENGINE_ID

const processor = new EvmBatchProcessor()
    .setDataSource({
        archive: lookupArchive('polygon'),
    })
    .addLog(lensContractAddress, {
        filter: [[events.ProfileCreated.topic, events.PostCreated.topic, events.CommentCreated.topic]],
        data: {
            evmLog: {
                topics: true,
                data: true,
            },
            transaction: {
                hash: true,
            },
        },
    })

function formatPostId(profileId: number, pubId: number) {
    return `${profileId - pubId}`
}

type ProfileCreated = {
    handle: string
    imageURI: string
    profileId: number
    to: string
    timestamp: Date
}

type PostCreated = {
    profileId: number
    pubId: number
    contentURI: string
    timestamp: Date
}

type CommentCreated = {
    profileId: number
    pubId: number
    profileIdPointed: number
    pubIdPointed: number
    contentURI: string
    timestamp: Date
}

processor.run(new TypeormDatabase(), async (ctx) => {
    const profiles: ProfileCreated[] = []
    const posts: PostCreated[] = []
    const comments: CommentCreated[] = []

    for (let c of ctx.blocks) {
        for (let i of c.items) {
            if (i.address === lensContractAddress && i.kind === 'evmLog') {
                if (i.evmLog.topics[0] === events.ProfileCreated.topic) {
                    const {handle, imageURI, profileId, to, timestamp} = events.ProfileCreated.decode(i.evmLog)
                    profiles.push({
                        handle,
                        imageURI,
                        profileId: profileId.toNumber(),
                        to,
                        timestamp: new Date(timestamp.toNumber() * 1000),
                    })
                }
                if (i.evmLog.topics[0] === events.PostCreated.topic) {
                    try {
                        const {profileId, pubId, contentURI, timestamp} = events.PostCreated.decode(i.evmLog)
                        posts.push({
                            profileId: profileId.toNumber(),
                            pubId: pubId.toNumber(),
                            contentURI,
                            timestamp: new Date(timestamp.toNumber() * 1000),
                        })
                    } catch (error) {
                        ctx.log.error({error}, `Failed to decode PostCreated event.`)
                    }
                }
                if (i.evmLog.topics[0] === events.CommentCreated.topic) {
                    try {
                        const {profileId, pubId, profileIdPointed, pubIdPointed, contentURI, timestamp} =
                            events.CommentCreated.decode(i.evmLog)
                        comments.push({
                            profileId: profileId.toNumber(),
                            pubId: pubId.toNumber(),
                            profileIdPointed: profileIdPointed.toNumber(),
                            pubIdPointed: pubIdPointed.toNumber(),
                            contentURI,
                            timestamp: new Date(timestamp.toNumber() * 1000),
                        })
                    } catch (error) {
                        ctx.log.error({error}, `Failed to decode PostCreated event.`)
                    }
                }
            }
        }
    }

    let entities = await saveLensData(ctx, {profiles, posts, comments})

    await indexLensData(ctx, entities)
})

async function saveLensData(
    ctx: CommonHandlerContext<Store>,
    data: {
        profiles: ProfileCreated[]
        posts: PostCreated[]
        comments: CommentCreated[]
    }
) {
    const profileIds: Set<number> = new Set()
    const postIds: Set<string> = new Set()
    const commentIds: Set<string> = new Set()

    for (const profile of data.profiles) {
        profileIds.add(profile.profileId)
    }

    for (const post of data.posts) {
        postIds.add(formatPostId(post.profileId, post.pubId))
        profileIds.add(post.profileId)
    }

    for (const comment of data.comments) {
        postIds.add(formatPostId(comment.profileId, comment.pubId))
        postIds.add(formatPostId(comment.profileIdPointed, comment.pubIdPointed))
        commentIds.add(formatPostId(comment.profileId, comment.pubId))
        commentIds.add(formatPostId(comment.profileIdPointed, comment.pubIdPointed))
        profileIds.add(comment.profileId)
        profileIds.add(comment.profileIdPointed)
    }

    const profileModels: Map<string, Profile> = new Map(
        (await ctx.store.findBy(Profile, {id: In([...profileIds])})).map((profile) => [
            profile.profileId.toString(),
            profile,
        ])
    )

    const postModels: Map<string, Post> = new Map(
        (await ctx.store.findBy(Post, {id: In([...postIds])})).map((post) => [
            formatPostId(post.profileId, post.postId),
            post,
        ])
    )

    const commentModels: Map<string, Comment> = new Map(
        (await ctx.store.findBy(Comment, {id: In([...commentIds])})).map((comment) => [
            formatPostId(comment.profileId, comment.commentId),
            comment,
        ])
    )

    for (const profile of data.profiles) {
        const {handle, imageURI, profileId, timestamp, to} = profile
        let profileModel = profileModels.get(profileId.toString())
        if (profileModel == null) {
            profileModel = new Profile({
                id: profileId.toString(),
                profileId,
                timestamp,
            })
            profileModel.address = to
            profileModel.handle = handle
            profileModel.imageURI = imageURI
            profileModels.set(profileModel.profileId.toString(), profileModel)
        }
    }

    for (const post of data.posts) {
        const {pubId, profileId, timestamp, contentURI} = post
        // collect poster profile
        let profileModel = profileModels.get(profileId.toString())
        if (profileModel == null) {
            ctx.log.debug(`Missing profile with ID ${profileId} for post ${pubId}, creating it`)
            profileModel = new Profile({
                id: profileId.toString(),
                profileId,
                timestamp,
            })
            profileModels.set(profileId.toString(), profileModel)
        }
        let postModel = postModels.get(formatPostId(profileId, pubId))
        if (postModel == null) {
            postModel = new Post({
                id: formatPostId(profileId, pubId),
                contentURI,
                postId: pubId,
                profileId,
                creatorProfile: profileModel,
                timestamp,
            })
            postModels.set(formatPostId(profileId, pubId), postModel)
        }
    }

    for (const comment of data.comments) {
        const {pubId, profileId, timestamp, contentURI, profileIdPointed, pubIdPointed} = comment
        // collect pointed profile and pubblication
        let profilePointedModel = profileModels.get(profileIdPointed.toString())
        let postPointedModel = postModels.get(formatPostId(profileIdPointed, pubIdPointed))
        if (profilePointedModel == null) {
            ctx.log.debug(
                `Profile ID ${profileIdPointed} for comment ${profileId}-${pubId} could not be found, creating it`
            )
            profilePointedModel = new Profile({
                id: profileIdPointed.toString(),
                profileId: profileIdPointed,
                timestamp,
            })
            profileModels.set(profileIdPointed.toString(), profilePointedModel)
        }
        if (postPointedModel == null) {
            ctx.log.debug(
                `Post ${profileIdPointed}-${pubIdPointed} for comment ${profileId}-${pubId} could not be found, creating it`
            )
            postPointedModel = new Post({
                id: formatPostId(profileIdPointed, pubIdPointed),
                postId: pubIdPointed,
                profileId: profileIdPointed,
                creatorProfile: profilePointedModel,
                timestamp,
            })
            postModels.set(formatPostId(profileIdPointed, pubIdPointed), postPointedModel)
        }
        // collect commenter profile
        let profileModel = profileModels.get(profileId.toString())
        if (profileModel == null) {
            ctx.log.debug(`Missing profile with ID ${profileId} for comment ${pubId}, creating it`)
            profileModel = new Profile({
                id: profileId.toString(),
                profileId,
                timestamp,
            })
            profileModels.set(profileId.toString(), profileModel)
        }
        // verify the post does not exist.
        let postModel = postModels.get(formatPostId(profileId, pubId))
        if (postModel == null) {
            ctx.log.debug(`Missing post for comment ${pubId}, creating it`)
            postModel = new Post({
                id: formatPostId(profileId, pubId),
                contentURI,
                postId: pubId,
                profileId,
                creatorProfile: profileModel,
                timestamp,
            })
            postModels.set(formatPostId(profileId, pubId), postModel)
        }
        let commentModel = commentModels.get(formatPostId(profileId, pubId))
        if (commentModel == null) {
            commentModel = new Comment({
                id: formatPostId(profileId, pubId),
                contentURI,
                commentId: pubId,
                profileId,
                profile: profileModel,
                originalPostId: pubIdPointed,
                originalPost: postPointedModel,
                originalProfileId: profileIdPointed,
                originalProfile: profilePointedModel,
                timestamp,
            })
            commentModels.set(formatPostId(profileId, pubId), commentModel)
        }
    }

    let profiles = [...profileModels.values()]
    let posts = [...postModels.values()]
    let comments = [...commentModels.values()]

    await ctx.store.save(profiles)
    await ctx.store.save(posts)
    await ctx.store.save(comments)

    return {
        posts,
        profiles,
        comments,
    }
}

const sepanaClient = new SepanaClient({
    baseUrl: 'https://api.sepana.io',
    retryAttempts: 5,
})

async function indexLensData(
    ctx: CommonHandlerContext<Store>,
    data: {
        profiles: Profile[]
        posts: Post[]
        comments: Comment[]
    }
) {
    ctx.log.debug(`Fetching metadata for ${data.posts.length} posts...`)
    let postsMetadata = await fetchMetadata(data.posts)
    ctx.log.debug(`Saving metadata for ${data.posts.length} posts...`)
    await sepanaClient.insert(
        engineID,
        postsMetadata.filter((m) => m != null)
    )

    ctx.log.debug(`Fetching metadata for ${data.comments.length} comments...`)
    let commentsMetadata = await fetchMetadata(data.comments)
    ctx.log.debug(`Saving metadata for ${data.comments.length} comments...`)
    await sepanaClient.insert(
        engineID,
        commentsMetadata.filter((m) => m != null)
    )
}

const ipfsClient = new HttpClient({
    baseUrl: 'https://subsquid.myfilebase.com/',
    headers: {
        'content-type': 'application/json',
    },
    retryAttempts: 5,
})

const httpClient = new HttpClient({
    headers: {
        'content-type': 'application/json',
    },
    retryAttempts: 5,
})

const ipfsRegExp = /^ipfs:\/\/(.+)$/

const IPFS_BATCH_SIZE = 100

async function fetchMetadata(items: {id: string; contentURI: string | undefined | null}[]) {
    let itemsMetadata: any[] = []
    for (let i = 0; i < items.length; i += IPFS_BATCH_SIZE) {
        let res = await Promise.all(
            items.slice(i, IPFS_BATCH_SIZE).map(async (p) => {
                if (!p.contentURI) {
                    return undefined
                } else {
                    let url = p.contentURI
                    let metadata: any
                    if (url.startsWith('ipfs://')) {
                        metadata = await ipfsClient.get('ipfs/' + ipfsRegExp.exec(url)![1])
                    } else if (url.startsWith('/ipfs')) {
                        metadata = await ipfsClient.get(url)
                    } else if (url.startsWith('http://') || url.startsWith('https://')) {
                        if (url.includes('ipfs/')) {
                            let parsed = new URL(url)
                            metadata = await ipfsClient.get(parsed.pathname)
                        } else {
                            metadata = await httpClient.get(url).catch(() => undefined)
                        }
                    } else if (/^[a-zA-Z0-9]+$/.test(url)) {
                        metadata = await ipfsClient.get('ipfs/' + url)
                    } else {
                        throw new Error(`Unexpected url "${url}"`)
                    }

                    return metadata == null
                        ? undefined
                        : {
                              _id: p.id,
                              ...metadata,
                          }
                }
            })
        )
        itemsMetadata.push(...res)
    }

    return itemsMetadata
}
