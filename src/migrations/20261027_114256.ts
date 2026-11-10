import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "am_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_awards_milestones_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"awards_title" varchar DEFAULT 'AWARDS & MILESTONES',
  	"awards_subtitle" varchar DEFAULT 'Kumaravel’s journey is marked by bold bets, social impact, and global recognition',
  	"awards_image_id" integer,
  	"awards_note" varchar DEFAULT 'He’s a sought-after speaker at leadership forums including TechSparks, TiE, CII, and South India Talks OOH (2025 Keynote Speaker).',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "sl_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "sl_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_social_leadership_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_am_items_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_awards_milestones_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"awards_title" varchar DEFAULT 'AWARDS & MILESTONES',
  	"awards_subtitle" varchar DEFAULT 'Kumaravel’s journey is marked by bold bets, social impact, and global recognition',
  	"awards_image_id" integer,
  	"awards_note" varchar DEFAULT 'He’s a sought-after speaker at leadership forums including TechSparks, TiE, CII, and South India Talks OOH (2025 Keynote Speaker).',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_sl_content_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"item_text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_sl_categories_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_social_leadership_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  ALTER TABLE "pages_blocks_expanding_brand_block" ALTER COLUMN "main_title" SET DEFAULT 'Expanding <br /> the Brand';
  ALTER TABLE "_pages_v_blocks_expanding_brand_block" ALTER COLUMN "main_title" SET DEFAULT 'Expanding <br /> the Brand';
  DO $$ BEGIN
   ALTER TABLE "am_items" ADD CONSTRAINT "am_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_awards_milestones_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_awards_milestones_block" ADD CONSTRAINT "pages_blocks_awards_milestones_block_awards_image_id_media_id_fk" FOREIGN KEY ("awards_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_awards_milestones_block" ADD CONSTRAINT "pages_blocks_awards_milestones_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sl_content" ADD CONSTRAINT "sl_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."sl_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sl_categories" ADD CONSTRAINT "sl_categories_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sl_categories" ADD CONSTRAINT "sl_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_social_leadership_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_social_leadership_block" ADD CONSTRAINT "pages_blocks_social_leadership_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_am_items_v" ADD CONSTRAINT "_am_items_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_awards_milestones_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_awards_milestones_block" ADD CONSTRAINT "_pages_v_blocks_awards_milestones_block_awards_image_id_media_id_fk" FOREIGN KEY ("awards_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_awards_milestones_block" ADD CONSTRAINT "_pages_v_blocks_awards_milestones_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_sl_content_v" ADD CONSTRAINT "_sl_content_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_sl_categories_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_sl_categories_v" ADD CONSTRAINT "_sl_categories_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_sl_categories_v" ADD CONSTRAINT "_sl_categories_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_social_leadership_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_social_leadership_block" ADD CONSTRAINT "_pages_v_blocks_social_leadership_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "am_items_order_idx" ON "am_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "am_items_parent_id_idx" ON "am_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_awards_milestones_block_order_idx" ON "pages_blocks_awards_milestones_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_awards_milestones_block_parent_id_idx" ON "pages_blocks_awards_milestones_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_awards_milestones_block_path_idx" ON "pages_blocks_awards_milestones_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_awards_milestones_block_awards_image_idx" ON "pages_blocks_awards_milestones_block" USING btree ("awards_image_id");
  CREATE INDEX IF NOT EXISTS "sl_content_order_idx" ON "sl_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "sl_content_parent_id_idx" ON "sl_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "sl_categories_order_idx" ON "sl_categories" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "sl_categories_parent_id_idx" ON "sl_categories" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "sl_categories_image_idx" ON "sl_categories" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_social_leadership_block_order_idx" ON "pages_blocks_social_leadership_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_social_leadership_block_parent_id_idx" ON "pages_blocks_social_leadership_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_social_leadership_block_path_idx" ON "pages_blocks_social_leadership_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_am_items_v_order_idx" ON "_am_items_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_am_items_v_parent_id_idx" ON "_am_items_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_awards_milestones_block_order_idx" ON "_pages_v_blocks_awards_milestones_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_awards_milestones_block_parent_id_idx" ON "_pages_v_blocks_awards_milestones_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_awards_milestones_block_path_idx" ON "_pages_v_blocks_awards_milestones_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_awards_milestones_block_awards_image_idx" ON "_pages_v_blocks_awards_milestones_block" USING btree ("awards_image_id");
  CREATE INDEX IF NOT EXISTS "_sl_content_v_order_idx" ON "_sl_content_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_sl_content_v_parent_id_idx" ON "_sl_content_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_sl_categories_v_order_idx" ON "_sl_categories_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_sl_categories_v_parent_id_idx" ON "_sl_categories_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_sl_categories_v_image_idx" ON "_sl_categories_v" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_social_leadership_block_order_idx" ON "_pages_v_blocks_social_leadership_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_social_leadership_block_parent_id_idx" ON "_pages_v_blocks_social_leadership_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_social_leadership_block_path_idx" ON "_pages_v_blocks_social_leadership_block" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "am_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_awards_milestones_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "sl_content" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "sl_categories" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_social_leadership_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_am_items_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_awards_milestones_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_sl_content_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_sl_categories_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_social_leadership_block" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "am_items" CASCADE;
  DROP TABLE "pages_blocks_awards_milestones_block" CASCADE;
  DROP TABLE "sl_content" CASCADE;
  DROP TABLE "sl_categories" CASCADE;
  DROP TABLE "pages_blocks_social_leadership_block" CASCADE;
  DROP TABLE "_am_items_v" CASCADE;
  DROP TABLE "_pages_v_blocks_awards_milestones_block" CASCADE;
  DROP TABLE "_sl_content_v" CASCADE;
  DROP TABLE "_sl_categories_v" CASCADE;
  DROP TABLE "_pages_v_blocks_social_leadership_block" CASCADE;
  ALTER TABLE "pages_blocks_expanding_brand_block" ALTER COLUMN "main_title" SET DEFAULT 'Expanding the Brand';
  ALTER TABLE "_pages_v_blocks_expanding_brand_block" ALTER COLUMN "main_title" SET DEFAULT 'Expanding the Brand';`)
}
