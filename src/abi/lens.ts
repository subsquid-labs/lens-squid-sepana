import * as ethers from 'ethers'
import {LogEvent, Func, ContractBase} from './abi.support'
import {ABI_JSON} from './lens.abi'

export const abi = new ethers.utils.Interface(ABI_JSON);

export const events = {
    Approval: new LogEvent<([owner: string, approved: string, tokenId: ethers.BigNumber] & {owner: string, approved: string, tokenId: ethers.BigNumber})>(
        abi, '0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925'
    ),
    ApprovalForAll: new LogEvent<([owner: string, operator: string, approved: boolean] & {owner: string, operator: string, approved: boolean})>(
        abi, '0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31'
    ),
    Transfer: new LogEvent<([from: string, to: string, tokenId: ethers.BigNumber] & {from: string, to: string, tokenId: ethers.BigNumber})>(
        abi, '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ),
}

export const functions = {
    approve: new Func<[to: string, tokenId: ethers.BigNumber], {to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x095ea7b3'
    ),
    balanceOf: new Func<[owner: string], {owner: string}, ethers.BigNumber>(
        abi, '0x70a08231'
    ),
    burn: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, []>(
        abi, '0x42966c68'
    ),
    burnWithSig: new Func<[tokenId: ethers.BigNumber, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})], {tokenId: ethers.BigNumber, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})}, []>(
        abi, '0xdd69cdb1'
    ),
    collect: new Func<[profileId: ethers.BigNumber, pubId: ethers.BigNumber, data: string], {profileId: ethers.BigNumber, pubId: ethers.BigNumber, data: string}, ethers.BigNumber>(
        abi, '0x84114ad4'
    ),
    collectWithSig: new Func<[vars: ([collector: string, profileId: ethers.BigNumber, pubId: ethers.BigNumber, data: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {collector: string, profileId: ethers.BigNumber, pubId: ethers.BigNumber, data: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})], {vars: ([collector: string, profileId: ethers.BigNumber, pubId: ethers.BigNumber, data: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {collector: string, profileId: ethers.BigNumber, pubId: ethers.BigNumber, data: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})}, ethers.BigNumber>(
        abi, '0xb48951e4'
    ),
    comment: new Func<[vars: ([profileId: ethers.BigNumber, contentURI: string, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, collectModule: string, collectModuleInitData: string, referenceModule: string, referenceModuleInitData: string] & {profileId: ethers.BigNumber, contentURI: string, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, collectModule: string, collectModuleInitData: string, referenceModule: string, referenceModuleInitData: string})], {vars: ([profileId: ethers.BigNumber, contentURI: string, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, collectModule: string, collectModuleInitData: string, referenceModule: string, referenceModuleInitData: string] & {profileId: ethers.BigNumber, contentURI: string, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, collectModule: string, collectModuleInitData: string, referenceModule: string, referenceModuleInitData: string})}, ethers.BigNumber>(
        abi, '0xb6f32d2b'
    ),
    commentWithSig: new Func<[vars: ([profileId: ethers.BigNumber, contentURI: string, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, collectModule: string, collectModuleInitData: string, referenceModule: string, referenceModuleInitData: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {profileId: ethers.BigNumber, contentURI: string, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, collectModule: string, collectModuleInitData: string, referenceModule: string, referenceModuleInitData: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})], {vars: ([profileId: ethers.BigNumber, contentURI: string, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, collectModule: string, collectModuleInitData: string, referenceModule: string, referenceModuleInitData: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {profileId: ethers.BigNumber, contentURI: string, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, collectModule: string, collectModuleInitData: string, referenceModule: string, referenceModuleInitData: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})}, ethers.BigNumber>(
        abi, '0x7a375716'
    ),
    createProfile: new Func<[vars: ([to: string, handle: string, imageURI: string, followModule: string, followModuleInitData: string, followNFTURI: string] & {to: string, handle: string, imageURI: string, followModule: string, followModuleInitData: string, followNFTURI: string})], {vars: ([to: string, handle: string, imageURI: string, followModule: string, followModuleInitData: string, followNFTURI: string] & {to: string, handle: string, imageURI: string, followModule: string, followModuleInitData: string, followNFTURI: string})}, ethers.BigNumber>(
        abi, '0xffea138e'
    ),
    defaultProfile: new Func<[wallet: string], {wallet: string}, ethers.BigNumber>(
        abi, '0x92254a62'
    ),
    emitCollectNFTTransferEvent: new Func<[profileId: ethers.BigNumber, pubId: ethers.BigNumber, collectNFTId: ethers.BigNumber, from: string, to: string], {profileId: ethers.BigNumber, pubId: ethers.BigNumber, collectNFTId: ethers.BigNumber, from: string, to: string}, []>(
        abi, '0x86e2947b'
    ),
    emitFollowNFTTransferEvent: new Func<[profileId: ethers.BigNumber, followNFTId: ethers.BigNumber, from: string, to: string], {profileId: ethers.BigNumber, followNFTId: ethers.BigNumber, from: string, to: string}, []>(
        abi, '0xbdfdd4bc'
    ),
    exists: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, boolean>(
        abi, '0x4f558e79'
    ),
    follow: new Func<[profileIds: Array<ethers.BigNumber>, datas: Array<string>], {profileIds: Array<ethers.BigNumber>, datas: Array<string>}, Array<ethers.BigNumber>>(
        abi, '0xfb78ae6c'
    ),
    followWithSig: new Func<[vars: ([follower: string, profileIds: Array<ethers.BigNumber>, datas: Array<string>, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {follower: string, profileIds: Array<ethers.BigNumber>, datas: Array<string>, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})], {vars: ([follower: string, profileIds: Array<ethers.BigNumber>, datas: Array<string>, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {follower: string, profileIds: Array<ethers.BigNumber>, datas: Array<string>, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})}, Array<ethers.BigNumber>>(
        abi, '0x8e4fd6a9'
    ),
    getApproved: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x081812fc'
    ),
    getCollectModule: new Func<[profileId: ethers.BigNumber, pubId: ethers.BigNumber], {profileId: ethers.BigNumber, pubId: ethers.BigNumber}, string>(
        abi, '0x57ff49f6'
    ),
    getCollectNFT: new Func<[profileId: ethers.BigNumber, pubId: ethers.BigNumber], {profileId: ethers.BigNumber, pubId: ethers.BigNumber}, string>(
        abi, '0x52aaef55'
    ),
    getCollectNFTImpl: new Func<[], {}, string>(
        abi, '0x77349a5f'
    ),
    getContentURI: new Func<[profileId: ethers.BigNumber, pubId: ethers.BigNumber], {profileId: ethers.BigNumber, pubId: ethers.BigNumber}, string>(
        abi, '0xb5a31496'
    ),
    getDispatcher: new Func<[profileId: ethers.BigNumber], {profileId: ethers.BigNumber}, string>(
        abi, '0x540528b9'
    ),
    getDomainSeparator: new Func<[], {}, string>(
        abi, '0xed24911d'
    ),
    getFollowModule: new Func<[profileId: ethers.BigNumber], {profileId: ethers.BigNumber}, string>(
        abi, '0xd923d20c'
    ),
    getFollowNFT: new Func<[profileId: ethers.BigNumber], {profileId: ethers.BigNumber}, string>(
        abi, '0xa9ec6563'
    ),
    getFollowNFTImpl: new Func<[], {}, string>(
        abi, '0x3502ac4b'
    ),
    getFollowNFTURI: new Func<[profileId: ethers.BigNumber], {profileId: ethers.BigNumber}, string>(
        abi, '0x374c9473'
    ),
    getGovernance: new Func<[], {}, string>(
        abi, '0x289b3c0d'
    ),
    getHandle: new Func<[profileId: ethers.BigNumber], {profileId: ethers.BigNumber}, string>(
        abi, '0xec81d194'
    ),
    getProfile: new Func<[profileId: ethers.BigNumber], {profileId: ethers.BigNumber}, ([pubCount: ethers.BigNumber, followModule: string, followNFT: string, handle: string, imageURI: string, followNFTURI: string] & {pubCount: ethers.BigNumber, followModule: string, followNFT: string, handle: string, imageURI: string, followNFTURI: string})>(
        abi, '0xf08f4f64'
    ),
    getProfileIdByHandle: new Func<[handle: string], {handle: string}, ethers.BigNumber>(
        abi, '0x20fa728a'
    ),
    getPub: new Func<[profileId: ethers.BigNumber, pubId: ethers.BigNumber], {profileId: ethers.BigNumber, pubId: ethers.BigNumber}, ([profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, contentURI: string, referenceModule: string, collectModule: string, collectNFT: string] & {profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, contentURI: string, referenceModule: string, collectModule: string, collectNFT: string})>(
        abi, '0xc736c990'
    ),
    getPubCount: new Func<[profileId: ethers.BigNumber], {profileId: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x3a15ff07'
    ),
    getPubPointer: new Func<[profileId: ethers.BigNumber, pubId: ethers.BigNumber], {profileId: ethers.BigNumber, pubId: ethers.BigNumber}, [_: ethers.BigNumber, _: ethers.BigNumber]>(
        abi, '0x5ca3eebf'
    ),
    getPubType: new Func<[profileId: ethers.BigNumber, pubId: ethers.BigNumber], {profileId: ethers.BigNumber, pubId: ethers.BigNumber}, number>(
        abi, '0x31fff07c'
    ),
    getReferenceModule: new Func<[profileId: ethers.BigNumber, pubId: ethers.BigNumber], {profileId: ethers.BigNumber, pubId: ethers.BigNumber}, string>(
        abi, '0xb7984c05'
    ),
    getState: new Func<[], {}, number>(
        abi, '0x1865c57d'
    ),
    initialize: new Func<[name: string, symbol: string, newGovernance: string], {name: string, symbol: string, newGovernance: string}, []>(
        abi, '0x077f224a'
    ),
    isApprovedForAll: new Func<[owner: string, operator: string], {owner: string, operator: string}, boolean>(
        abi, '0xe985e9c5'
    ),
    isCollectModuleWhitelisted: new Func<[collectModule: string], {collectModule: string}, boolean>(
        abi, '0xad3e72bf'
    ),
    isFollowModuleWhitelisted: new Func<[followModule: string], {followModule: string}, boolean>(
        abi, '0x1cbb2620'
    ),
    isProfileCreatorWhitelisted: new Func<[profileCreator: string], {profileCreator: string}, boolean>(
        abi, '0xaf05dd22'
    ),
    isReferenceModuleWhitelisted: new Func<[referenceModule: string], {referenceModule: string}, boolean>(
        abi, '0x8e204fb4'
    ),
    mintTimestampOf: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x50ddf35c'
    ),
    mirror: new Func<[vars: ([profileId: ethers.BigNumber, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, referenceModule: string, referenceModuleInitData: string] & {profileId: ethers.BigNumber, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, referenceModule: string, referenceModuleInitData: string})], {vars: ([profileId: ethers.BigNumber, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, referenceModule: string, referenceModuleInitData: string] & {profileId: ethers.BigNumber, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, referenceModule: string, referenceModuleInitData: string})}, ethers.BigNumber>(
        abi, '0x2faeed81'
    ),
    mirrorWithSig: new Func<[vars: ([profileId: ethers.BigNumber, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, referenceModule: string, referenceModuleInitData: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {profileId: ethers.BigNumber, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, referenceModule: string, referenceModuleInitData: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})], {vars: ([profileId: ethers.BigNumber, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, referenceModule: string, referenceModuleInitData: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {profileId: ethers.BigNumber, profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, referenceModuleData: string, referenceModule: string, referenceModuleInitData: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})}, ethers.BigNumber>(
        abi, '0xdf457c34'
    ),
    name: new Func<[], {}, string>(
        abi, '0x06fdde03'
    ),
    ownerOf: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0x6352211e'
    ),
    permit: new Func<[spender: string, tokenId: ethers.BigNumber, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})], {spender: string, tokenId: ethers.BigNumber, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})}, []>(
        abi, '0x7ef67f99'
    ),
    permitForAll: new Func<[owner: string, operator: string, approved: boolean, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})], {owner: string, operator: string, approved: boolean, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})}, []>(
        abi, '0x89028a13'
    ),
    post: new Func<[vars: ([profileId: ethers.BigNumber, contentURI: string, collectModule: string, collectModuleInitData: string, referenceModule: string, referenceModuleInitData: string] & {profileId: ethers.BigNumber, contentURI: string, collectModule: string, collectModuleInitData: string, referenceModule: string, referenceModuleInitData: string})], {vars: ([profileId: ethers.BigNumber, contentURI: string, collectModule: string, collectModuleInitData: string, referenceModule: string, referenceModuleInitData: string] & {profileId: ethers.BigNumber, contentURI: string, collectModule: string, collectModuleInitData: string, referenceModule: string, referenceModuleInitData: string})}, ethers.BigNumber>(
        abi, '0x963ff141'
    ),
    postWithSig: new Func<[vars: ([profileId: ethers.BigNumber, contentURI: string, collectModule: string, collectModuleInitData: string, referenceModule: string, referenceModuleInitData: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {profileId: ethers.BigNumber, contentURI: string, collectModule: string, collectModuleInitData: string, referenceModule: string, referenceModuleInitData: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})], {vars: ([profileId: ethers.BigNumber, contentURI: string, collectModule: string, collectModuleInitData: string, referenceModule: string, referenceModuleInitData: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {profileId: ethers.BigNumber, contentURI: string, collectModule: string, collectModuleInitData: string, referenceModule: string, referenceModuleInitData: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})}, ethers.BigNumber>(
        abi, '0x3b508132'
    ),
    'safeTransferFrom(address,address,uint256)': new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x42842e0e'
    ),
    'safeTransferFrom(address,address,uint256,bytes)': new Func<[from: string, to: string, tokenId: ethers.BigNumber, _data: string], {from: string, to: string, tokenId: ethers.BigNumber, _data: string}, []>(
        abi, '0xb88d4fde'
    ),
    setApprovalForAll: new Func<[operator: string, approved: boolean], {operator: string, approved: boolean}, []>(
        abi, '0xa22cb465'
    ),
    setDefaultProfile: new Func<[profileId: ethers.BigNumber], {profileId: ethers.BigNumber}, []>(
        abi, '0xf1b2f8bc'
    ),
    setDefaultProfileWithSig: new Func<[vars: ([wallet: string, profileId: ethers.BigNumber, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {wallet: string, profileId: ethers.BigNumber, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})], {vars: ([wallet: string, profileId: ethers.BigNumber, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {wallet: string, profileId: ethers.BigNumber, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})}, []>(
        abi, '0xdc217253'
    ),
    setDispatcher: new Func<[profileId: ethers.BigNumber, dispatcher: string], {profileId: ethers.BigNumber, dispatcher: string}, []>(
        abi, '0xbfd24f47'
    ),
    setDispatcherWithSig: new Func<[vars: ([profileId: ethers.BigNumber, dispatcher: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {profileId: ethers.BigNumber, dispatcher: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})], {vars: ([profileId: ethers.BigNumber, dispatcher: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {profileId: ethers.BigNumber, dispatcher: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})}, []>(
        abi, '0xbfbf0b4b'
    ),
    setEmergencyAdmin: new Func<[newEmergencyAdmin: string], {newEmergencyAdmin: string}, []>(
        abi, '0x35da3394'
    ),
    setFollowModule: new Func<[profileId: ethers.BigNumber, followModule: string, followModuleInitData: string], {profileId: ethers.BigNumber, followModule: string, followModuleInitData: string}, []>(
        abi, '0x6dea40b3'
    ),
    setFollowModuleWithSig: new Func<[vars: ([profileId: ethers.BigNumber, followModule: string, followModuleInitData: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {profileId: ethers.BigNumber, followModule: string, followModuleInitData: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})], {vars: ([profileId: ethers.BigNumber, followModule: string, followModuleInitData: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {profileId: ethers.BigNumber, followModule: string, followModuleInitData: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})}, []>(
        abi, '0x3b28b89f'
    ),
    setFollowNFTURI: new Func<[profileId: ethers.BigNumber, followNFTURI: string], {profileId: ethers.BigNumber, followNFTURI: string}, []>(
        abi, '0xc6b5d06c'
    ),
    setFollowNFTURIWithSig: new Func<[vars: ([profileId: ethers.BigNumber, followNFTURI: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {profileId: ethers.BigNumber, followNFTURI: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})], {vars: ([profileId: ethers.BigNumber, followNFTURI: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {profileId: ethers.BigNumber, followNFTURI: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})}, []>(
        abi, '0xbd12d3f0'
    ),
    setGovernance: new Func<[newGovernance: string], {newGovernance: string}, []>(
        abi, '0xab033ea9'
    ),
    setProfileImageURI: new Func<[profileId: ethers.BigNumber, imageURI: string], {profileId: ethers.BigNumber, imageURI: string}, []>(
        abi, '0x054871b8'
    ),
    setProfileImageURIWithSig: new Func<[vars: ([profileId: ethers.BigNumber, imageURI: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {profileId: ethers.BigNumber, imageURI: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})], {vars: ([profileId: ethers.BigNumber, imageURI: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})] & {profileId: ethers.BigNumber, imageURI: string, sig: ([v: number, r: string, s: string, deadline: ethers.BigNumber] & {v: number, r: string, s: string, deadline: ethers.BigNumber})})}, []>(
        abi, '0x9b84a14c'
    ),
    setState: new Func<[newState: number], {newState: number}, []>(
        abi, '0x56de96db'
    ),
    sigNonces: new Func<[_: string], {}, ethers.BigNumber>(
        abi, '0xf990ccd7'
    ),
    supportsInterface: new Func<[interfaceId: string], {interfaceId: string}, boolean>(
        abi, '0x01ffc9a7'
    ),
    symbol: new Func<[], {}, string>(
        abi, '0x95d89b41'
    ),
    tokenByIndex: new Func<[index: ethers.BigNumber], {index: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x4f6ccce7'
    ),
    tokenDataOf: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, ([owner: string, mintTimestamp: ethers.BigNumber] & {owner: string, mintTimestamp: ethers.BigNumber})>(
        abi, '0xc0da9bcd'
    ),
    tokenOfOwnerByIndex: new Func<[owner: string, index: ethers.BigNumber], {owner: string, index: ethers.BigNumber}, ethers.BigNumber>(
        abi, '0x2f745c59'
    ),
    tokenURI: new Func<[tokenId: ethers.BigNumber], {tokenId: ethers.BigNumber}, string>(
        abi, '0xc87b56dd'
    ),
    totalSupply: new Func<[], {}, ethers.BigNumber>(
        abi, '0x18160ddd'
    ),
    transferFrom: new Func<[from: string, to: string, tokenId: ethers.BigNumber], {from: string, to: string, tokenId: ethers.BigNumber}, []>(
        abi, '0x23b872dd'
    ),
    whitelistCollectModule: new Func<[collectModule: string, whitelist: boolean], {collectModule: string, whitelist: boolean}, []>(
        abi, '0x31dcebe3'
    ),
    whitelistFollowModule: new Func<[followModule: string, whitelist: boolean], {followModule: string, whitelist: boolean}, []>(
        abi, '0xa6d8e1e4'
    ),
    whitelistProfileCreator: new Func<[profileCreator: string, whitelist: boolean], {profileCreator: string, whitelist: boolean}, []>(
        abi, '0x20905506'
    ),
    whitelistReferenceModule: new Func<[referenceModule: string, whitelist: boolean], {referenceModule: string, whitelist: boolean}, []>(
        abi, '0x4187e4c5'
    ),
}

export class Contract extends ContractBase {

    balanceOf(owner: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.balanceOf, [owner])
    }

    defaultProfile(wallet: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.defaultProfile, [wallet])
    }

    exists(tokenId: ethers.BigNumber): Promise<boolean> {
        return this.eth_call(functions.exists, [tokenId])
    }

    getApproved(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getApproved, [tokenId])
    }

    getCollectModule(profileId: ethers.BigNumber, pubId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getCollectModule, [profileId, pubId])
    }

    getCollectNFT(profileId: ethers.BigNumber, pubId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getCollectNFT, [profileId, pubId])
    }

    getCollectNFTImpl(): Promise<string> {
        return this.eth_call(functions.getCollectNFTImpl, [])
    }

    getContentURI(profileId: ethers.BigNumber, pubId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getContentURI, [profileId, pubId])
    }

    getDispatcher(profileId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getDispatcher, [profileId])
    }

    getDomainSeparator(): Promise<string> {
        return this.eth_call(functions.getDomainSeparator, [])
    }

    getFollowModule(profileId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getFollowModule, [profileId])
    }

    getFollowNFT(profileId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getFollowNFT, [profileId])
    }

    getFollowNFTImpl(): Promise<string> {
        return this.eth_call(functions.getFollowNFTImpl, [])
    }

    getFollowNFTURI(profileId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getFollowNFTURI, [profileId])
    }

    getGovernance(): Promise<string> {
        return this.eth_call(functions.getGovernance, [])
    }

    getHandle(profileId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getHandle, [profileId])
    }

    getProfile(profileId: ethers.BigNumber): Promise<([pubCount: ethers.BigNumber, followModule: string, followNFT: string, handle: string, imageURI: string, followNFTURI: string] & {pubCount: ethers.BigNumber, followModule: string, followNFT: string, handle: string, imageURI: string, followNFTURI: string})> {
        return this.eth_call(functions.getProfile, [profileId])
    }

    getProfileIdByHandle(handle: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getProfileIdByHandle, [handle])
    }

    getPub(profileId: ethers.BigNumber, pubId: ethers.BigNumber): Promise<([profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, contentURI: string, referenceModule: string, collectModule: string, collectNFT: string] & {profileIdPointed: ethers.BigNumber, pubIdPointed: ethers.BigNumber, contentURI: string, referenceModule: string, collectModule: string, collectNFT: string})> {
        return this.eth_call(functions.getPub, [profileId, pubId])
    }

    getPubCount(profileId: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.getPubCount, [profileId])
    }

    getPubPointer(profileId: ethers.BigNumber, pubId: ethers.BigNumber): Promise<[_: ethers.BigNumber, _: ethers.BigNumber]> {
        return this.eth_call(functions.getPubPointer, [profileId, pubId])
    }

    getPubType(profileId: ethers.BigNumber, pubId: ethers.BigNumber): Promise<number> {
        return this.eth_call(functions.getPubType, [profileId, pubId])
    }

    getReferenceModule(profileId: ethers.BigNumber, pubId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.getReferenceModule, [profileId, pubId])
    }

    getState(): Promise<number> {
        return this.eth_call(functions.getState, [])
    }

    isApprovedForAll(owner: string, operator: string): Promise<boolean> {
        return this.eth_call(functions.isApprovedForAll, [owner, operator])
    }

    isCollectModuleWhitelisted(collectModule: string): Promise<boolean> {
        return this.eth_call(functions.isCollectModuleWhitelisted, [collectModule])
    }

    isFollowModuleWhitelisted(followModule: string): Promise<boolean> {
        return this.eth_call(functions.isFollowModuleWhitelisted, [followModule])
    }

    isProfileCreatorWhitelisted(profileCreator: string): Promise<boolean> {
        return this.eth_call(functions.isProfileCreatorWhitelisted, [profileCreator])
    }

    isReferenceModuleWhitelisted(referenceModule: string): Promise<boolean> {
        return this.eth_call(functions.isReferenceModuleWhitelisted, [referenceModule])
    }

    mintTimestampOf(tokenId: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.mintTimestampOf, [tokenId])
    }

    name(): Promise<string> {
        return this.eth_call(functions.name, [])
    }

    ownerOf(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.ownerOf, [tokenId])
    }

    sigNonces(arg0: string): Promise<ethers.BigNumber> {
        return this.eth_call(functions.sigNonces, [arg0])
    }

    supportsInterface(interfaceId: string): Promise<boolean> {
        return this.eth_call(functions.supportsInterface, [interfaceId])
    }

    symbol(): Promise<string> {
        return this.eth_call(functions.symbol, [])
    }

    tokenByIndex(index: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.tokenByIndex, [index])
    }

    tokenDataOf(tokenId: ethers.BigNumber): Promise<([owner: string, mintTimestamp: ethers.BigNumber] & {owner: string, mintTimestamp: ethers.BigNumber})> {
        return this.eth_call(functions.tokenDataOf, [tokenId])
    }

    tokenOfOwnerByIndex(owner: string, index: ethers.BigNumber): Promise<ethers.BigNumber> {
        return this.eth_call(functions.tokenOfOwnerByIndex, [owner, index])
    }

    tokenURI(tokenId: ethers.BigNumber): Promise<string> {
        return this.eth_call(functions.tokenURI, [tokenId])
    }

    totalSupply(): Promise<ethers.BigNumber> {
        return this.eth_call(functions.totalSupply, [])
    }
}
