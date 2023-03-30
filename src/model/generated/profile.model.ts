import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import {Post} from "./post.model"
import {Comment} from "./comment.model"

@Entity_()
export class Profile {
    constructor(props?: Partial<Profile>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("text", {nullable: true})
    address!: string | undefined | null

    @Index_()
    @Column_("text", {nullable: true})
    handle!: string | undefined | null

    @Column_("text", {nullable: true})
    imageURI!: string | undefined | null

    @Column_("int4", {nullable: false})
    profileId!: number

    @OneToMany_(() => Post, e => e.creatorProfile)
    posts!: Post[]

    @OneToMany_(() => Comment, e => e.profile)
    comments!: Comment[]

    @Index_()
    @Column_("timestamp with time zone", {nullable: false})
    timestamp!: Date
}
