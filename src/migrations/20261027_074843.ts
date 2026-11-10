import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_registration_submissions_status" AS ENUM('pending', 'approved', 'rejected');
  CREATE TABLE IF NOT EXISTS "eb_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_expanding_brand_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"main_title" varchar DEFAULT 'Expanding the Brand',
  	"sub_title" varchar DEFAULT 'Beyond salons, Kumaravel has launched',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_eb_items_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_expanding_brand_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"main_title" varchar DEFAULT 'Expanding the Brand',
  	"sub_title" varchar DEFAULT 'Beyond salons, Kumaravel has launched',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "registration_submissions_attachments" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"file_id" integer NOT NULL,
  	"field_name" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "registration_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"event_name" varchar,
  	"event_id" varchar,
  	"event_slug" varchar,
  	"registration_settings_id" integer NOT NULL,
  	"values" jsonb NOT NULL,
  	"status" "enum_registration_submissions_status" DEFAULT 'pending',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "event_registration_submissions_attachments" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "event_registration_submissions" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "event_registration_submissions_attachments" CASCADE;
  DROP TABLE "event_registration_submissions" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_event_registration_submissions_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_event_registration_submissions_id_idx";
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "registration_submissions_id" integer;
  DO $$ BEGIN
   ALTER TABLE "eb_items" ADD CONSTRAINT "eb_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_expanding_brand_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_expanding_brand_block" ADD CONSTRAINT "pages_blocks_expanding_brand_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_eb_items_v" ADD CONSTRAINT "_eb_items_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_expanding_brand_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_expanding_brand_block" ADD CONSTRAINT "_pages_v_blocks_expanding_brand_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "registration_submissions_attachments" ADD CONSTRAINT "registration_submissions_attachments_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "registration_submissions_attachments" ADD CONSTRAINT "registration_submissions_attachments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."registration_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "registration_submissions" ADD CONSTRAINT "registration_submissions_registration_settings_id_registration_settings_id_fk" FOREIGN KEY ("registration_settings_id") REFERENCES "public"."registration_settings"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "eb_items_order_idx" ON "eb_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "eb_items_parent_id_idx" ON "eb_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_expanding_brand_block_order_idx" ON "pages_blocks_expanding_brand_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_expanding_brand_block_parent_id_idx" ON "pages_blocks_expanding_brand_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_expanding_brand_block_path_idx" ON "pages_blocks_expanding_brand_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_eb_items_v_order_idx" ON "_eb_items_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_eb_items_v_parent_id_idx" ON "_eb_items_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_expanding_brand_block_order_idx" ON "_pages_v_blocks_expanding_brand_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_expanding_brand_block_parent_id_idx" ON "_pages_v_blocks_expanding_brand_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_expanding_brand_block_path_idx" ON "_pages_v_blocks_expanding_brand_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "registration_submissions_attachments_order_idx" ON "registration_submissions_attachments" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "registration_submissions_attachments_parent_id_idx" ON "registration_submissions_attachments" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "registration_submissions_attachments_file_idx" ON "registration_submissions_attachments" USING btree ("file_id");
  CREATE INDEX IF NOT EXISTS "registration_submissions_registration_settings_idx" ON "registration_submissions" USING btree ("registration_settings_id");
  CREATE INDEX IF NOT EXISTS "registration_submissions_updated_at_idx" ON "registration_submissions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "registration_submissions_created_at_idx" ON "registration_submissions" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_registration_submissions_fk" FOREIGN KEY ("registration_submissions_id") REFERENCES "public"."registration_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_registration_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("registration_submissions_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "event_registration_submissions_id";
  DROP TYPE "public"."enum_event_registration_submissions_status";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_event_registration_submissions_status" AS ENUM('pending', 'approved', 'rejected');
  CREATE TABLE IF NOT EXISTS "event_registration_submissions_attachments" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"file_id" integer NOT NULL,
  	"field_name" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "event_registration_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"event_name" varchar,
  	"event_id" varchar,
  	"event_slug" varchar,
  	"registration_settings_id" integer NOT NULL,
  	"values" jsonb NOT NULL,
  	"status" "enum_event_registration_submissions_status" DEFAULT 'pending',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "eb_items" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_blocks_expanding_brand_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_eb_items_v" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_blocks_expanding_brand_block" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "registration_submissions_attachments" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "registration_submissions" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "eb_items" CASCADE;
  DROP TABLE "pages_blocks_expanding_brand_block" CASCADE;
  DROP TABLE "_eb_items_v" CASCADE;
  DROP TABLE "_pages_v_blocks_expanding_brand_block" CASCADE;
  DROP TABLE "registration_submissions_attachments" CASCADE;
  DROP TABLE "registration_submissions" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_registration_submissions_fk";
  
  DROP INDEX IF EXISTS "payload_locked_documents_rels_registration_submissions_id_idx";
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "event_registration_submissions_id" integer;
  DO $$ BEGIN
   ALTER TABLE "event_registration_submissions_attachments" ADD CONSTRAINT "event_registration_submissions_attachments_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "event_registration_submissions_attachments" ADD CONSTRAINT "event_registration_submissions_attachments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."event_registration_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "event_registration_submissions" ADD CONSTRAINT "event_registration_submissions_registration_settings_id_registration_settings_id_fk" FOREIGN KEY ("registration_settings_id") REFERENCES "public"."registration_settings"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "event_registration_submissions_attachments_order_idx" ON "event_registration_submissions_attachments" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "event_registration_submissions_attachments_parent_id_idx" ON "event_registration_submissions_attachments" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "event_registration_submissions_attachments_file_idx" ON "event_registration_submissions_attachments" USING btree ("file_id");
  CREATE INDEX IF NOT EXISTS "event_registration_submissions_registration_settings_idx" ON "event_registration_submissions" USING btree ("registration_settings_id");
  CREATE INDEX IF NOT EXISTS "event_registration_submissions_updated_at_idx" ON "event_registration_submissions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "event_registration_submissions_created_at_idx" ON "event_registration_submissions" USING btree ("created_at");
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_event_registration_submissions_fk" FOREIGN KEY ("event_registration_submissions_id") REFERENCES "public"."event_registration_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_event_registration_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("event_registration_submissions_id");
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "registration_submissions_id";
  DROP TYPE "public"."enum_registration_submissions_status";`)
}
