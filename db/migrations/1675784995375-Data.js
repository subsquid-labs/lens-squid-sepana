module.exports = class Data1675784995375 {
    name = 'Data1675784995375'

    async up(db) {
        await db.query(`CREATE TABLE "post" ("id" character varying NOT NULL, "content_uri" text, "post_id" integer NOT NULL, "profile_id" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "creator_profile_id" character varying, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_2f07aa7ab77334870ef3653e19" ON "post" ("creator_profile_id") `)
        await db.query(`CREATE INDEX "IDX_1f469063a68c898f81186c0c11" ON "post" ("timestamp") `)
        await db.query(`CREATE TABLE "comment" ("id" character varying NOT NULL, "content_uri" text NOT NULL, "comment_id" integer NOT NULL, "profile_id" character varying NOT NULL, "original_post_id" character varying NOT NULL, "original_profile_id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_46a19537464c5ffd948efda8a0" ON "comment" ("profile_id") `)
        await db.query(`CREATE INDEX "IDX_fb09b5a01c899f6a164c00015b" ON "comment" ("original_post_id") `)
        await db.query(`CREATE INDEX "IDX_3a2f986fe3346c0a251951c332" ON "comment" ("original_profile_id") `)
        await db.query(`CREATE INDEX "IDX_16e0a07027172478f5cbf53056" ON "comment" ("timestamp") `)
        await db.query(`CREATE TABLE "profile" ("id" character varying NOT NULL, "address" text, "handle" text, "image_uri" text, "profile_id" integer NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_486591528fda0f35f22560c47f" ON "profile" ("address") `)
        await db.query(`CREATE INDEX "IDX_e1eea55c5dc00feee13279e4cc" ON "profile" ("handle") `)
        await db.query(`CREATE INDEX "IDX_8fa96ed7b90e90f8b6dceb289b" ON "profile" ("timestamp") `)
        await db.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_2f07aa7ab77334870ef3653e19c" FOREIGN KEY ("creator_profile_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_46a19537464c5ffd948efda8a0e" FOREIGN KEY ("profile_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_fb09b5a01c899f6a164c00015bd" FOREIGN KEY ("original_post_id") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_3a2f986fe3346c0a251951c3322" FOREIGN KEY ("original_profile_id") REFERENCES "profile"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "post"`)
        await db.query(`DROP INDEX "public"."IDX_2f07aa7ab77334870ef3653e19"`)
        await db.query(`DROP INDEX "public"."IDX_1f469063a68c898f81186c0c11"`)
        await db.query(`DROP TABLE "comment"`)
        await db.query(`DROP INDEX "public"."IDX_46a19537464c5ffd948efda8a0"`)
        await db.query(`DROP INDEX "public"."IDX_fb09b5a01c899f6a164c00015b"`)
        await db.query(`DROP INDEX "public"."IDX_3a2f986fe3346c0a251951c332"`)
        await db.query(`DROP INDEX "public"."IDX_16e0a07027172478f5cbf53056"`)
        await db.query(`DROP TABLE "profile"`)
        await db.query(`DROP INDEX "public"."IDX_486591528fda0f35f22560c47f"`)
        await db.query(`DROP INDEX "public"."IDX_e1eea55c5dc00feee13279e4cc"`)
        await db.query(`DROP INDEX "public"."IDX_8fa96ed7b90e90f8b6dceb289b"`)
        await db.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_2f07aa7ab77334870ef3653e19c"`)
        await db.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_46a19537464c5ffd948efda8a0e"`)
        await db.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_fb09b5a01c899f6a164c00015bd"`)
        await db.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_3a2f986fe3346c0a251951c3322"`)
    }
}
