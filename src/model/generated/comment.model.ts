import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import {Profile} from "./profile.model"
import {Post} from "./post.model"

@Entity_()
export class Comment {
    constructor(props?: Partial<Comment>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Column_("text", {nullable: false})
    contentURI!: string

    @Column_("int4", {nullable: false})
    commentId!: number

    @Column_("int4", {nullable: false})
    profileId!: number

    @Index_()
    @ManyToOne_(() => Profile, {nullable: true})
    profile!: Profile

    @Column_("int4", {nullable: false})
    originalPostId!: number

    @Index_()
    @ManyToOne_(() => Post, {nullable: true})
    originalPost!: Post

    @Column_("int4", {nullable: false})
    originalProfileId!: number

    @Index_()
    @ManyToOne_(() => Profile, {nullable: true})
    originalProfile!: Profile

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date
}
