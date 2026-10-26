import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_pages_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum_pages_blocks_social_reel_slider_content_type" AS ENUM('video', 'image');
  CREATE TYPE "public"."enum_pages_blocks_main_page_banner_background_color" AS ENUM('gradient-1', 'gradient-2', 'gradient-3', 'gradient-4', 'gradient-5', 'gradient-6');
  CREATE TYPE "public"."enum_pages_blocks_intro_text_block_marquee_text_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_intro_text_block_background_type" AS ENUM('none', 'background');
  CREATE TYPE "public"."enum_pages_blocks_live_intror_section_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_pages_blocks_live_intror_section_marquee_text_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum_pages_blocks_innovate_info_section_block_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum_iwc_cb_type" AS ENUM('paragraph', 'list');
  CREATE TYPE "public"."theme_ptrn" AS ENUM('pattern-a', 'pattern-b');
  CREATE TYPE "public"."enum_pages_blocks_metro_madras_block_features_icon_type" AS ENUM('music', 'train', 'clock', 'location', 'star');
  CREATE TYPE "public"."enum_pages_blocks_metro_the_details_block_details_icon_type" AS ENUM('calendar', 'clock', 'location', 'ticket', 'users');
  CREATE TYPE "public"."enum_pages_blocks_metro_registration_block_status" AS ENUM('closed', 'open');
  CREATE TYPE "public"."enum_pages_hero_type" AS ENUM('none', 'Defult');
  CREATE TYPE "public"."enum_pages_hero_background_color" AS ENUM('gradient-1', 'gradient-2', 'gradient-3', 'gradient-4', 'gradient-5', 'gradient-6', 'gradient-7');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum__pages_v_version_hero_links_link_appearance" AS ENUM('default', 'outline');
  CREATE TYPE "public"."enum__pages_v_blocks_social_reel_slider_content_type" AS ENUM('video', 'image');
  CREATE TYPE "public"."enum__pages_v_blocks_main_page_banner_background_color" AS ENUM('gradient-1', 'gradient-2', 'gradient-3', 'gradient-4', 'gradient-5', 'gradient-6');
  CREATE TYPE "public"."enum__pages_v_blocks_intro_text_block_marquee_text_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_intro_text_block_background_type" AS ENUM('none', 'background');
  CREATE TYPE "public"."enum__pages_v_blocks_live_intror_section_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__pages_v_blocks_live_intror_section_marquee_text_size" AS ENUM('sm', 'lg');
  CREATE TYPE "public"."enum__pages_v_blocks_innovate_info_section_block_image_position" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__iwc_cb_v_type" AS ENUM('paragraph', 'list');
  CREATE TYPE "public"."enum__pages_v_blocks_metro_madras_block_features_icon_type" AS ENUM('music', 'train', 'clock', 'location', 'star');
  CREATE TYPE "public"."enum__pages_v_blocks_metro_the_details_block_details_icon_type" AS ENUM('calendar', 'clock', 'location', 'ticket', 'users');
  CREATE TYPE "public"."enum__pages_v_blocks_metro_registration_block_status" AS ENUM('closed', 'open');
  CREATE TYPE "public"."enum__pages_v_version_hero_type" AS ENUM('none', 'Defult');
  CREATE TYPE "public"."enum__pages_v_version_hero_background_color" AS ENUM('gradient-1', 'gradient-2', 'gradient-3', 'gradient-4', 'gradient-5', 'gradient-6', 'gradient-7');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_posts_blog_category" AS ENUM('technology', 'health', 'travel', 'education', 'finance', 'business', 'lifestyle', 'food', 'fitness', 'parenting', 'personal-development', 'fashion', 'beauty', 'gaming', 'entertainment', 'culture', 'politics', 'science', 'environment', 'real-estate', 'career', 'news', 'photography', 'spirituality', 'writing', 'diy', 'pets', 'automotive', 'home-garden', 'productivity');
  CREATE TYPE "public"."enum_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__posts_v_version_blog_category" AS ENUM('technology', 'health', 'travel', 'education', 'finance', 'business', 'lifestyle', 'food', 'fitness', 'parenting', 'personal-development', 'fashion', 'beauty', 'gaming', 'entertainment', 'culture', 'politics', 'science', 'environment', 'real-estate', 'career', 'news', 'photography', 'spirituality', 'writing', 'diy', 'pets', 'automotive', 'home-garden', 'productivity');
  CREATE TYPE "public"."enum__posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'client', 'user');
  CREATE TYPE "public"."enum_visits_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__visits_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_work_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__work_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_events_event_details_language" AS ENUM('tamil', 'telugu', 'malayalam', 'kannada', 'hindi', 'bengali', 'marathi', 'gujarati', 'punjabi', 'odia', 'urdu', 'sanskrit', 'english', 'spanish', 'french', 'german', 'italian', 'portuguese', 'russian', 'chinese', 'japanese', 'korean', 'arabic', 'turkish', 'persian', 'hebrew', 'thai', 'vietnamese', 'indonesian', 'filipino', 'malay', 'swahili', 'dutch', 'greek', 'polish', 'swedish', 'norwegian', 'finnish', 'danish', 'czech', 'hungarian', 'romanian', 'ukrainian', 'bulgarian', 'serbian', 'croatian', 'slovak', 'slovenian', 'latvian', 'lithuanian', 'estonian', 'icelandic', 'irish', 'welsh', 'scottish_gaelic', 'albanian', 'bosnian', 'macedonian', 'armenian', 'georgian', 'kazakh', 'uzbek', 'turkmen', 'tajik', 'nepali', 'sinhala', 'burmese', 'khmer', 'lao', 'mongolian', 'pashto', 'somali', 'amharic', 'yoruba', 'hausa', 'zulu', 'afrikaans', 'maori', 'samoan', 'tongan', 'fijian');
  CREATE TYPE "public"."enum_events_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__events_v_version_event_details_language" AS ENUM('tamil', 'telugu', 'malayalam', 'kannada', 'hindi', 'bengali', 'marathi', 'gujarati', 'punjabi', 'odia', 'urdu', 'sanskrit', 'english', 'spanish', 'french', 'german', 'italian', 'portuguese', 'russian', 'chinese', 'japanese', 'korean', 'arabic', 'turkish', 'persian', 'hebrew', 'thai', 'vietnamese', 'indonesian', 'filipino', 'malay', 'swahili', 'dutch', 'greek', 'polish', 'swedish', 'norwegian', 'finnish', 'danish', 'czech', 'hungarian', 'romanian', 'ukrainian', 'bulgarian', 'serbian', 'croatian', 'slovak', 'slovenian', 'latvian', 'lithuanian', 'estonian', 'icelandic', 'irish', 'welsh', 'scottish_gaelic', 'albanian', 'bosnian', 'macedonian', 'armenian', 'georgian', 'kazakh', 'uzbek', 'turkmen', 'tajik', 'nepali', 'sinhala', 'burmese', 'khmer', 'lao', 'mongolian', 'pashto', 'somali', 'amharic', 'yoruba', 'hausa', 'zulu', 'afrikaans', 'maori', 'samoan', 'tongan', 'fijian');
  CREATE TYPE "public"."enum__events_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_investments_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__investments_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_live_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__live_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_volunteer_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__volunteer_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_innovate_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__innovate_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_visit_details_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__visit_details_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_properties_rent_details_preferred_tenants" AS ENUM('family', 'bachelors', 'company');
  CREATE TYPE "public"."enum_properties_purpose" AS ENUM('sale', 'rent', 'lease', 'pg');
  CREATE TYPE "public"."enum_properties_ownership" AS ENUM('freehold', 'leasehold', 'society', 'poa');
  CREATE TYPE "public"."enum_properties_age_of_property" AS ENUM('new', '0-5', '5-10', '10plus');
  CREATE TYPE "public"."enum_properties_transaction_type" AS ENUM('new_booking', 'resale', 'pre_launch', 'new_launch');
  CREATE TYPE "public"."enum_properties_society_possession_status" AS ENUM('ready_move', 'under_construction', 'ongoing_progress', 'pre_launched', 'launched', 'launching');
  CREATE TYPE "public"."enum_properties_furnishing" AS ENUM('fully', 'semi', 'unfurnished');
  CREATE TYPE "public"."enum_properties_facing_direction" AS ENUM('north', 'south', 'east', 'west');
  CREATE TYPE "public"."enum_properties_parking" AS ENUM('covered', 'open', 'none');
  CREATE TYPE "public"."enum_properties_water_supply" AS ENUM('corporation', 'borewell', 'both');
  CREATE TYPE "public"."enum_properties_commercial_type" AS ENUM('office', 'shop', 'warehouse', 'industrial');
  CREATE TYPE "public"."enum_properties_listed_by" AS ENUM('owner', 'agent', 'builder');
  CREATE TYPE "public"."enum_properties_interiors_door_type" AS ENUM('sliding', 'wooden', 'glass', 'other');
  CREATE TYPE "public"."enum_properties_availability_status" AS ENUM('available', 'booked', 'sold');
  CREATE TYPE "public"."enum_properties_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__properties_v_version_rent_details_preferred_tenants" AS ENUM('family', 'bachelors', 'company');
  CREATE TYPE "public"."enum__properties_v_version_purpose" AS ENUM('sale', 'rent', 'lease', 'pg');
  CREATE TYPE "public"."enum__properties_v_version_ownership" AS ENUM('freehold', 'leasehold', 'society', 'poa');
  CREATE TYPE "public"."enum__properties_v_version_age_of_property" AS ENUM('new', '0-5', '5-10', '10plus');
  CREATE TYPE "public"."enum__properties_v_version_transaction_type" AS ENUM('new_booking', 'resale', 'pre_launch', 'new_launch');
  CREATE TYPE "public"."enum__properties_v_version_society_possession_status" AS ENUM('ready_move', 'under_construction', 'ongoing_progress', 'pre_launched', 'launched', 'launching');
  CREATE TYPE "public"."enum__properties_v_version_furnishing" AS ENUM('fully', 'semi', 'unfurnished');
  CREATE TYPE "public"."enum__properties_v_version_facing_direction" AS ENUM('north', 'south', 'east', 'west');
  CREATE TYPE "public"."enum__properties_v_version_parking" AS ENUM('covered', 'open', 'none');
  CREATE TYPE "public"."enum__properties_v_version_water_supply" AS ENUM('corporation', 'borewell', 'both');
  CREATE TYPE "public"."enum__properties_v_version_commercial_type" AS ENUM('office', 'shop', 'warehouse', 'industrial');
  CREATE TYPE "public"."enum__properties_v_version_listed_by" AS ENUM('owner', 'agent', 'builder');
  CREATE TYPE "public"."enum__properties_v_version_interiors_door_type" AS ENUM('sliding', 'wooden', 'glass', 'other');
  CREATE TYPE "public"."enum__properties_v_version_availability_status" AS ENUM('available', 'booked', 'sold');
  CREATE TYPE "public"."enum__properties_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_property_types_value" AS ENUM('apartment', 'villa', 'builder_floor', 'studio', 'penthouse', 'shop', 'office', 'coworking', 'warehouse', 'industrial_shed', 'factory', 'plot', 'agriculture_land', 'farmhouse', 'hotel', 'pg_coliving', 'serviced_apartment');
  CREATE TYPE "public"."enum_superchennai_contests_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__superchennai_contests_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_contest_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__contest_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_organizers_venue" AS ENUM('dr-nalli-gana-vihar', 'kamakoti-hall', 'multiple');
  CREATE TYPE "public"."enum_sabha_foods_type" AS ENUM('canteen', 'snacks', 'restaurant');
  CREATE TYPE "public"."enum_articles_thumbnail_type" AS ENUM('image', 'video', 'gif', 'none');
  CREATE TYPE "public"."enum_articles_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__articles_v_version_thumbnail_type" AS ENUM('image', 'video', 'gif', 'none');
  CREATE TYPE "public"."enum__articles_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_ads_adsstatus" AS ENUM('active', 'inactive', 'draft');
  CREATE TYPE "public"."enum_ads_media_type" AS ENUM('image', 'gif', 'video', 'html');
  CREATE TYPE "public"."enum_ads_mobile_settings_mobile_media_type" AS ENUM('image', 'gif', 'video', 'html');
  CREATE TYPE "public"."enum_ads_device_target" AS ENUM('all', 'mobile', 'desktop');
  CREATE TYPE "public"."enum_ads_show_priority" AS ENUM('primary', 'secondary', 'tertiary');
  CREATE TYPE "public"."enum_ads_position" AS ENUM('inline', 'left', 'right', 'top', 'bottom');
  CREATE TYPE "public"."enum_ads_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__ads_v_version_adsstatus" AS ENUM('active', 'inactive', 'draft');
  CREATE TYPE "public"."enum__ads_v_version_media_type" AS ENUM('image', 'gif', 'video', 'html');
  CREATE TYPE "public"."enum__ads_v_version_mobile_settings_mobile_media_type" AS ENUM('image', 'gif', 'video', 'html');
  CREATE TYPE "public"."enum__ads_v_version_device_target" AS ENUM('all', 'mobile', 'desktop');
  CREATE TYPE "public"."enum__ads_v_version_show_priority" AS ENUM('primary', 'secondary', 'tertiary');
  CREATE TYPE "public"."enum__ads_v_version_position" AS ENUM('inline', 'left', 'right', 'top', 'bottom');
  CREATE TYPE "public"."enum__ads_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_languages_direction" AS ENUM('ltr', 'rtl');
  CREATE TYPE "public"."enum_neighbourhood_business_hours_day" AS ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
  CREATE TYPE "public"."enum_neighbourhood_listing_type" AS ENUM('free', 'premium', 'sponsored');
  CREATE TYPE "public"."enum_neighbourhood_price_info_price_range" AS ENUM('₹', '₹₹', '₹₹₹');
  CREATE TYPE "public"."enum_neighbourhood_structured_data_schema_type" AS ENUM('LocalBusiness', 'Restaurant', 'GasStation', 'Hotel', 'Hospital', 'Store', 'Event', 'FAQPage', 'Custom');
  CREATE TYPE "public"."enum_neighbourhood_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__neighbourhood_v_version_business_hours_day" AS ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
  CREATE TYPE "public"."enum__neighbourhood_v_version_listing_type" AS ENUM('free', 'premium', 'sponsored');
  CREATE TYPE "public"."enum__neighbourhood_v_version_price_info_price_range" AS ENUM('₹', '₹₹', '₹₹₹');
  CREATE TYPE "public"."enum__neighbourhood_v_version_structured_data_schema_type" AS ENUM('LocalBusiness', 'Restaurant', 'GasStation', 'Hotel', 'Hospital', 'Store', 'Event', 'FAQPage', 'Custom');
  CREATE TYPE "public"."enum__neighbourhood_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_trending_chennai_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__trending_chennai_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_trending_languages_region" AS ENUM('india', 'asia', 'europe', 'africa', 'global');
  CREATE TYPE "public"."enum_cricket_score_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__cricket_score_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_ipl_languages_region" AS ENUM('india', 'asia', 'europe', 'africa', 'global');
  CREATE TYPE "public"."enum_icon_of_month_month" AS ENUM('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december');
  CREATE TYPE "public"."enum_icon_of_month_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__icon_of_month_v_version_month" AS ENUM('january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december');
  CREATE TYPE "public"."enum__icon_of_month_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_whats_ap_chennai_details_language" AS ENUM('tamil', 'telugu', 'malayalam', 'kannada', 'hindi', 'bengali', 'marathi', 'gujarati', 'punjabi', 'odia', 'urdu', 'sanskrit', 'english', 'spanish', 'french', 'german', 'italian', 'portuguese', 'russian', 'chinese', 'japanese', 'korean', 'arabic', 'turkish', 'persian', 'hebrew', 'thai', 'vietnamese', 'indonesian', 'filipino', 'malay', 'swahili', 'dutch', 'greek', 'polish', 'swedish', 'norwegian', 'finnish', 'danish', 'czech', 'hungarian', 'romanian', 'ukrainian', 'bulgarian', 'serbian', 'croatian', 'slovak', 'slovenian', 'latvian', 'lithuanian', 'estonian', 'icelandic', 'irish', 'welsh', 'scottish_gaelic', 'albanian', 'bosnian', 'macedonian', 'armenian', 'georgian', 'kazakh', 'uzbek', 'turkmen', 'tajik', 'nepali', 'sinhala', 'burmese', 'khmer', 'lao', 'mongolian', 'pashto', 'somali', 'amharic', 'yoruba', 'hausa', 'zulu', 'afrikaans', 'maori', 'samoan', 'tongan', 'fijian');
  CREATE TYPE "public"."enum_whats_ap_chennai_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__whats_ap_chennai_v_version_details_language" AS ENUM('tamil', 'telugu', 'malayalam', 'kannada', 'hindi', 'bengali', 'marathi', 'gujarati', 'punjabi', 'odia', 'urdu', 'sanskrit', 'english', 'spanish', 'french', 'german', 'italian', 'portuguese', 'russian', 'chinese', 'japanese', 'korean', 'arabic', 'turkish', 'persian', 'hebrew', 'thai', 'vietnamese', 'indonesian', 'filipino', 'malay', 'swahili', 'dutch', 'greek', 'polish', 'swedish', 'norwegian', 'finnish', 'danish', 'czech', 'hungarian', 'romanian', 'ukrainian', 'bulgarian', 'serbian', 'croatian', 'slovak', 'slovenian', 'latvian', 'lithuanian', 'estonian', 'icelandic', 'irish', 'welsh', 'scottish_gaelic', 'albanian', 'bosnian', 'macedonian', 'armenian', 'georgian', 'kazakh', 'uzbek', 'turkmen', 'tajik', 'nepali', 'sinhala', 'burmese', 'khmer', 'lao', 'mongolian', 'pashto', 'somali', 'amharic', 'yoruba', 'hausa', 'zulu', 'afrikaans', 'maori', 'samoan', 'tongan', 'fijian');
  CREATE TYPE "public"."enum__whats_ap_chennai_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_golu_submissions_status" AS ENUM('pendingReview', 'approved', 'rejected', 'shortlisted', 'finalist', 'winner');
  CREATE TYPE "public"."enum_golu_contest_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__golu_contest_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_event_form_fields_type" AS ENUM('text', 'email', 'number', 'textarea', 'select', 'radio', 'checkbox', 'file');
  CREATE TYPE "public"."enum_event_registration_submissions_status" AS ENUM('pending', 'approved', 'rejected');
  CREATE TYPE "public"."enum_redirects_to_type" AS ENUM('reference', 'custom');
  CREATE TYPE "public"."enum_forms_confirmation_type" AS ENUM('message', 'redirect');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_header_nav_items_link_type" AS ENUM('reference', 'custom');
  CREATE TABLE IF NOT EXISTS "pages_hero_links_link_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_hero_links_link_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_content_image_id" integer,
  	"link_type" "enum_pages_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum_pages_hero_links_link_appearance" DEFAULT 'default'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_explore_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"place" varchar,
  	"image_id" integer,
  	"page_id" integer,
  	"custom_link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_explore" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_fun_chennai_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"place" varchar,
  	"image_id" integer,
  	"page_id" integer,
  	"custom_link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_fun_chennai" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_startup_chennai_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"page_id" integer,
  	"custom_link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_startup_chennai" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_chennai_investments" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_social_reel_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Social Chennai',
  	"description" varchar DEFAULT '  Make connections, participate, and add to Chennai s lively social events and community projects',
  	"content_type" "enum_pages_blocks_social_reel_slider_content_type" DEFAULT 'video',
  	"show_video_thumbnail_only" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_became_a_volunteer" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Become a',
  	"title" varchar DEFAULT 'Volunteer',
  	"description" varchar DEFAULT 'Change things! Contribute your time and expertise to worthwhile causes in Chennai.',
  	"page_id" integer,
  	"custom_link" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_events_calendar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"page_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_hero_slider_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_hero_slider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_visitcategory_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"page_id" integer,
  	"custom_link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_visitcategory" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_zig_zag_content_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"link_url" varchar,
  	"link_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_zig_zag_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_volunteer_became_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"section_description" varchar,
  	"button_text" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_main_page_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"image_id" integer,
  	"background_color" "enum_pages_blocks_main_page_banner_background_color" DEFAULT 'gradient-1',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_intro_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"show_marquee" boolean DEFAULT true,
  	"marquee_text" varchar,
  	"marquee_text_size" "enum_pages_blocks_intro_text_block_marquee_text_size" DEFAULT 'sm',
  	"title" varchar,
  	"highlighted_text" varchar,
  	"description" varchar,
  	"background_type" "enum_pages_blocks_intro_text_block_background_type" DEFAULT 'none',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_global_search_filters_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_global_search_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_global_search" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"placeholder_text" varchar DEFAULT 'Experience Chennai',
  	"button_text" varchar DEFAULT 'Search',
  	"enable_filters" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_form_popup" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"button_text" varchar DEFAULT 'Enquire Now',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_infography_food_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"page_id" integer,
  	"food_section_title" varchar,
  	"custom_link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_infography" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"heading_span" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_two_column_feature_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tech_image_id" integer,
  	"tech_title" varchar,
  	"tech_description" varchar,
  	"edu_image_id" integer,
  	"edu_title" varchar,
  	"edu_description" varchar,
  	"tech_link_url" varchar,
  	"tech_link_page_id" integer,
  	"edu_link_url" varchar,
  	"edu_link_page_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_utilities_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_title" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_utilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_content_zone_carousel_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"url" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_content_zone_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_allevents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_live_intror_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"image_position" "enum_pages_blocks_live_intror_section_image_position" DEFAULT 'right',
  	"image_id" integer,
  	"para_zero_live_section" varchar,
  	"paraone_live_section" varchar,
  	"para_two_live_section" varchar,
  	"show_marquee" boolean DEFAULT true,
  	"marquee_text" varchar,
  	"marquee_text_size" "enum_pages_blocks_live_intror_section_marquee_text_size" DEFAULT 'sm',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_chennai_life_essentials_essentials" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"page_id" integer,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_chennai_life_essentials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_investment_category_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_investment_category_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_innovate_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_text_hover_image_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"page_id" integer,
  	"custom_link" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_text_hover_image_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_trending_chennai_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Trending Chennai',
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_second_section_first_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"highlight" varchar,
  	"content" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_second_section_second_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"highlight" varchar,
  	"content" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_second_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Welcome to Super Chennai',
  	"sub_heading" varchar DEFAULT 'Chennai is India’s healthcare capital, SaaS capital, fintech capital, and automobile capital. Home to 7.5 million people, it is a 386-year-old city alive with heritage and vibing to the march of the future.',
  	"button_text" varchar DEFAULT 'Explore More',
  	"button_link" varchar DEFAULT '/about-us',
  	"icon_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_popup_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"enable_popup" boolean DEFAULT true,
  	"is_global" boolean DEFAULT false,
  	"popup_image_id" integer,
  	"redirect_link" varchar DEFAULT '/',
  	"open_in_new_tab" boolean DEFAULT false,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cricket_score_block_points_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"team_name" varchar,
  	"team_logo_id" integer,
  	"played" numeric DEFAULT 0,
  	"won" numeric DEFAULT 0,
  	"loss" numeric DEFAULT 0,
  	"no_result" numeric DEFAULT 0,
  	"net_run_rate" varchar DEFAULT '+0.000',
  	"points" numeric DEFAULT 0
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_cricket_score_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'IPL Cricket Updates',
  	"description" varchar,
  	"i_p_limage_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_conclave_super_chennai_block_meta_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_conclave_super_chennai_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Super Chennai Conclave',
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_conclave_about_block_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_conclave_about_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_ticker_text" varchar DEFAULT 'CONCLAVE -',
  	"image_id" integer,
  	"title" varchar DEFAULT 'Chennai CONCLAVE',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_conclave_agenda_block_agenda_items_speakers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_conclave_agenda_block_agenda_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"display_id" varchar,
  	"start_time" varchar,
  	"end_time" varchar,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_conclave_agenda_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_heading" varchar DEFAULT 'OUR AGENDA',
  	"initial_visible_rows" numeric DEFAULT 4,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_conclave_speakers_block_speakers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"designation" varchar,
  	"image_id" integer,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_conclave_speakers_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_heading" varchar DEFAULT 'Speakers',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_conclave_five_pillars_block_pillars_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_conclave_five_pillars_block_pillars" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_conclave_five_pillars_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_heading" varchar DEFAULT 'FIVE PILLARS OF SUPER CHENNAI',
  	"section_subheading" varchar DEFAULT 'The conclave is anchored around five interconnected pillars that define a truly world-class city.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_conclave_cta_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_image_id" integer,
  	"logo_image_id" integer,
  	"date_text" varchar DEFAULT 'Feb 19, 2026',
  	"time_text" varchar DEFAULT 'Time: 09:30 AM Onwards',
  	"venue_text" varchar,
  	"enable_register_button" boolean DEFAULT false,
  	"button_text" varchar DEFAULT 'Register Now',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_conclave_partners_block_partners" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"description_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_conclave_partners_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_heading" varchar DEFAULT 'Partner',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_conclave_gallery_block_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_conclave_gallery_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"marquee_text" varchar DEFAULT 'Gallery',
  	"section_title" varchar DEFAULT 'Chennai Conclave 2026',
  	"section_description" varchar DEFAULT 'A collection of stage highlights, speaker sessions, interactions, and memento-giving moments from the conclave.',
  	"featured_event_link_url" varchar DEFAULT 'https://youtube.com/live/D8hBf-lK57c?feature=share',
  	"featured_event_image_id" integer,
  	"featured_event_date_number" varchar DEFAULT '19',
  	"featured_event_day_name" varchar DEFAULT 'Wednesday',
  	"featured_event_title" varchar DEFAULT 'Super Chennai Conclave 2026',
  	"featured_event_description" varchar,
  	"featured_event_tag" varchar DEFAULT 'Conclave',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_inner_page_hero_banner_block_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"small_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_inner_page_hero_banner_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"banner_image_id" integer,
  	"mobile_banner_image_id" integer,
  	"title" varchar DEFAULT '',
  	"small_title_text" varchar DEFAULT '',
  	"banner_link" varchar,
  	"open_in_new_tab" boolean DEFAULT false,
  	"enable_search" boolean DEFAULT true,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_faq_section_block_faq_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_faq_section_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'FAQ',
  	"small_title_text" varchar DEFAULT 's',
  	"description" varchar DEFAULT 'Learn everything about Super Chennai and how it''''s shaping the city''''s future.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_about_intro_block_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_about_intro_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'About Chennai City',
  	"marquee_text" varchar DEFAULT 'Super Chennai',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "wsc_cols" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"paragraphs" varchar DEFAULT ''
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_about_welcome_super_chennai_block_new" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT '',
  	"subheading" varchar DEFAULT '',
  	"image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "vis_mis_c" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_vision_mission_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "fnd_pts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_about_foundations_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Foundations of Modern Chennai',
  	"image_id" integer,
  	"paragraph1" varchar DEFAULT 'The modern foundations of Chennai were laid on August 22, 1639, a date now proudly celebrated as Chennai Day. This moment marked the formal recognition of the region’s growth into an organized urban centre with expanding civic and economic importance.',
  	"paragraph2" varchar DEFAULT 'By 1640, key developments had begun to shape the city''''s layout and identity. Chennai steadily grew by integrating nearby villages, evolving into a connected and planned cityscape.',
  	"highlight_text" varchar DEFAULT 'In the decades that followed, the city laid the groundwork for many firsts',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_about_namma_chennai_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_id" varchar DEFAULT 'NumChennaiSec',
  	"main_header" varchar DEFAULT 'Chennai''''s',
  	"sub_header" varchar DEFAULT 'Soundtrack pulses with <br>kuthu, gaana, hip-hop <br>and indie beats.',
  	"paragraph1" varchar DEFAULT 'Its food scene is just as dynamic, from sushi bars to taco joints, <br>Korean cafés to soulful biryanis, where every meal is a mix of flavors as diverse as its people.',
  	"paragraph2" varchar DEFAULT 'Whether it’s skaters carving through the streets, surfers riding the waves, <br>or storytellers capturing moments, Chennai is a city in motion-always evolving, always alive. <br>This is Chennai redefined-bold, vibrant, and unapologetically modern. <br>Super Chennai isn’t just a place to live-it’s where the <br>future is being shaped,',
  	"tagline" varchar DEFAULT 'one beat, one bite, & <br>one breakthrough at a time.',
  	"footer_heading" varchar DEFAULT 'It’s hot. <br>It’s happening. <br>And it’s home.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "wc_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_prefix" varchar DEFAULT '',
  	"tab_title" varchar DEFAULT '',
  	"image_id" integer,
  	"points" varchar DEFAULT ''
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_about_why_chennai_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT '',
  	"subheading" varchar DEFAULT '',
  	"description" varchar DEFAULT '',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "t_pts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "t_info_secs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_image_id" integer,
  	"img_alt" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_invest_page_border_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "ut_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_title" varchar,
  	"icon_id" integer,
  	"heading" varchar,
  	"description" varchar,
  	"button_text" varchar DEFAULT 'Explore More',
  	"button_link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_invest_page_tab_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "inv_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"category" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"img_alt" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_invest_page_slider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "inn_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" varchar,
  	"image_id" integer,
  	"img_alt" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_innovate_page_slider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "info_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_innovate_info_section_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"main_image_id" integer,
  	"img_alt" varchar DEFAULT 'smart city chennai',
  	"image_position" "enum_pages_blocks_innovate_info_section_block_image_position" DEFAULT 'left',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "iwc_li" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "iwc_cb" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"type" "enum_iwc_cb_type" DEFAULT 'paragraph',
  	"paragraph_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_imagewith_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Key Highlights',
  	"main_image_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "tp_p" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "tp_bp" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"point_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "tp_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"card_title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_image_without_content_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"main_title" varchar DEFAULT 'CHENNAI’S TECH PUZZLE: THE KEY PIECES',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "ev_h" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "ev_c" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "ev_r" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_table_section_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"main_title" varchar DEFAULT 'EV ZONES & SMART CORRIDORS',
  	"sub_title" varchar DEFAULT 'These companies have made Chennai their technology fortress:',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "in_sld_c" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_inner_page_slider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"main_title" varchar DEFAULT 'Chennai’s tech pulse',
  	"sub_title" varchar DEFAULT 'Chennai''''s software development industry is drawing individuals from all over the world for work and business. With a knowledgeable staff, it positions itself as a major center for a range of IT solutions.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_gallery_slider_with_popup_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Gallery',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "l_img_r_sec" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT '',
  	"description" varchar DEFAULT '',
  	"image_id" integer,
  	"image_alt" varchar DEFAULT '',
  	"theme_pattern" "theme_ptrn" DEFAULT 'pattern-a',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "bs_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"para" varchar,
  	"imgs_id" integer,
  	"link_url" varchar DEFAULT '#'
  );
  
  CREATE TABLE IF NOT EXISTS "bs_sec" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title_line1" varchar DEFAULT 'For a',
  	"section_title_line2" varchar DEFAULT 'Spinster',
  	"section_desc" varchar,
  	"label" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_benefit_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "wi_paras" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_intro_pink_text_with_content_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"background_watermark_text" varchar DEFAULT 'Work   in Chennai   Work   in Chennai',
  	"title" varchar DEFAULT 'Working in Chennai',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "vils_p" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"para" varchar,
  	"imgs_id" integer,
  	"img_alt" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "vils_t" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "vils_s" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"section_desc" varchar,
  	"image_id" integer,
  	"img_alt" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "vils_b" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "nc_locs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "nc_plcs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "nc_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_work_network_section_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"main_title" varchar DEFAULT 'Networking & Communities',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "wpis_bp" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"point" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "wpis_p" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"imgs_id" integer,
  	"img_alt" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "wpis_s" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"section_desc" varchar,
  	"image_id" integer,
  	"img_alt" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "wpis_b" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "hch_loc" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "hch_plc" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "hch_cat" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category" varchar,
  	"category_para_graph" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_health_care_hospitals_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"main_title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cl_tpts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"para" varchar,
  	"imgs_id" integer,
  	"alt_title" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cl_tnt" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "cl_img" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"section_desc" varchar,
  	"image_id" integer,
  	"image_alt" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cl_dpts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" varchar,
  	"sub_description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cl_dtl" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "clb" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "ttd_pts" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"para" varchar,
  	"imgs_id" integer,
  	"img_alt" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "ttd_tnt" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "ttd_sec" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"section_desc" varchar,
  	"image_id" integer,
  	"img_alt" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "ttd_blk" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cn_nbh" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"para" varchar,
  	"imgs_id" integer,
  	"img_alt" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cn_sec" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"section_desc" varchar,
  	"image_id" integer,
  	"img_alt" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cnb" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "qol_sec" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"title1" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"img_alt" varchar,
  	"button_text" varchar,
  	"button_link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "qol_blk" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "vwl" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"bold_text" varchar,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "vwp" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"imgs_id" integer,
  	"img_alt" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "vwt" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "vws" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"section_desc" varchar,
  	"image_id" integer,
  	"img_alt" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "vw_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cnt_add" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"line" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cnt_blk" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Contact Us',
  	"description" varchar,
  	"logo_id" integer,
  	"logo_alt" varchar,
  	"email" varchar,
  	"map_link" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cn_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_label" varchar,
  	"tab_icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "cn_asgn_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"assigned_tab_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cn_feats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature_item" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cn_svcs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"service_item" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cn_apps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"company" varchar,
  	"app_description" varchar,
  	"app_image_id" integer,
  	"app_image_alt" varchar,
  	"website_link" varchar,
  	"android_link" varchar,
  	"ios_link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cn_apps_blk" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "loc_arr" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "plc_arr" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cat_arr" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category_name" varchar,
  	"category_desc" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "reg_arr" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"region_name" varchar,
  	"hero_image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "plc_sec_blk" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_image_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"image_id" integer,
  	"img_alt" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_info_section_block_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"point" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_info_section_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_id" integer,
  	"description" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_table_block_headers" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"header_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_table_block_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_table_block_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_table_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"table_title" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_category_block_items_locations" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_category_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"desc" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_category_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category_name" varchar,
  	"category_desc" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_llp_block_main_tabs_regions" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"region_name" varchar,
  	"hero_image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_llp_block_main_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tab_title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_llp_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"card_title" varchar,
  	"card_description" varchar,
  	"card_media_id" integer,
  	"card_media_alt_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cats" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category_tab_label" varchar,
  	"category_heading_title" varchar,
  	"category_summary_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "chenz_inv_2026" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "ev_lst_2026_events_cards2026" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_url" varchar,
  	"card_media_id" integer,
  	"alt_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "ev_lst_2026" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "infra_boom_2026" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Chennai Infrastructure Boom 2026',
  	"description" varchar DEFAULT 'Chennai is undergoing a massive transformation with ₹90,000+ crore infrastructure projects across metro, roads, and smart city developments. From mobility to water security, the city is rapidly evolving into a future-ready urban hub.',
  	"button_text" varchar DEFAULT 'Chennai Infrastructure Intelligence Report',
  	"pdf_file_id" integer,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_manifesto_section_block_slider_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt_text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_manifesto_section_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"top_header_title" varchar DEFAULT 'Manifesto in Your Hands',
  	"main_heading" varchar DEFAULT 'DELIVERING THE MANIFESTO IS NOW IN YOUR HANDS',
  	"paragraph1" varchar DEFAULT 'The future of Chennai is shaped by the aspirations of its people. Reason why, Super Chennai organised a day-long Conclave that brought together industry leaders, urban planners, administrators, thought leaders and citizens. The Conclave discussed and curated ideas across five defining pillars: Live, Work, Visit, Innovate and Invest.',
  	"sub_heading" varchar DEFAULT 'Live, Work, Visit, Innovate and Invest',
  	"paragraph2" varchar DEFAULT 'Suffice to say, incredible insights were collated. And they have been put together as a Manifesto on what the people wish for, from Super Chennai.',
  	"highlight_text" varchar DEFAULT 'Register your details to access and download the full manifesto.',
  	"button_text" varchar DEFAULT 'Download',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "tvc_2026_tvc_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"company" varchar DEFAULT 'Published On: July 21, 2025',
  	"events_calendar_title" varchar,
  	"image_id" integer,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "tvc_2026" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_heading" varchar DEFAULT 'TV Commercials',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "media_coverage_main_page_news_article" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"company" varchar,
  	"events_calendar_title" varchar,
  	"image_id" integer,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "media_coverage_main_page_news_photos" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"company" varchar,
  	"events_calendar_title" varchar,
  	"title" varchar,
  	"image_id" integer,
  	"image1_id" integer,
  	"description" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "media_coverage_main_page_youtube_channel" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"company" varchar,
  	"events_calendar_title" varchar,
  	"title" varchar,
  	"image_id" integer,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "media_coverage_main_page" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'MEDIA COVERAGE',
  	"section_description" varchar DEFAULT 'Stay updated with the latest images, videos, and highlights from SuperChennai’s events, announcements, and developments.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_metro_madras_block_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_metro_madras_block_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_type" "enum_pages_blocks_metro_madras_block_features_icon_type" DEFAULT 'music',
  	"custom_icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_metro_madras_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"featured_image_id" integer,
  	"title" varchar DEFAULT 'METRO-VIL MADRAS DAY',
  	"subtitle" varchar DEFAULT 'Chennai’s First Midnight Musical Ride',
  	"quote_text" varchar DEFAULT '“Somewhere between the last Metro train and the first light of Madras Day, Chennai came together and sang.”',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_metro_the_details_block_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"icon_type" "enum_pages_blocks_metro_the_details_block_details_icon_type" DEFAULT 'calendar',
  	"custom_icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_metro_the_details_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'THE DETAILS',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_metro_experience_block_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_metro_experience_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"left_title" varchar DEFAULT 'THE EXPERIENCE',
  	"check_svg_code" varchar,
  	"right_title" varchar DEFAULT 'WHO CAN JOIN?',
  	"who_can_join_paragraph1" varchar DEFAULT 'Anyone who loves Chennai, music and a good sing-along!',
  	"who_can_join_paragraph2" varchar DEFAULT 'Limited Slots only, REGISTER NOW and don''''t miss the chance to be part of this exclusive Madras Day celebration',
  	"enable_button" boolean DEFAULT false,
  	"button_text" varchar DEFAULT 'REGISTER NOW',
  	"button_target_id" varchar DEFAULT 'registration-form',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_metro_guidelines_block_guidelines" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_metro_guidelines_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'IMPORTANT INFORMATION',
  	"check_svg_code" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_metro_registration_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_id" varchar DEFAULT 'registration-form',
  	"featured_image_id" integer,
  	"status" "enum_pages_blocks_metro_registration_block_status" DEFAULT 'closed',
  	"badge_text" varchar DEFAULT 'Closed',
  	"title" varchar DEFAULT 'REGISTRATION IS CLOSED',
  	"description" varchar DEFAULT 'Thank you for the overwhelming response! All available slots for Sing Along Metro have been completely filled.',
  	"info_box_title" varchar DEFAULT 'Missed your spot?',
  	"info_box_description" varchar DEFAULT 'Stay tuned to our social media channels for updates on upcoming slots, next editions, and live event announcements!',
  	"button_text" varchar DEFAULT 'REGISTRATIONS FULL',
  	"status_svg_code" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "kf_hero_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"announcement_text" varchar DEFAULT 'Official Event Announcement • August 2026',
  	"location_subtitle" varchar DEFAULT 'TTDC Ocean View, East Coast Road (ECR)',
  	"top_badge" varchar DEFAULT '5th Edition • Annual Coastal Celebration',
  	"main_heading" varchar DEFAULT 'Kite Festival 2026',
  	"description" varchar DEFAULT 'When Mamallapuram takes to the skies. Experience three days of grand airborne art, international master flyers, giant inflatables, and coastal food carnivals.',
  	"date_text" varchar DEFAULT '14 – 16 August 2026',
  	"location_text" varchar DEFAULT 'TTDC Ocean View, Mamallapuram ECR',
  	"primary_cta_text" varchar DEFAULT 'Explore Event Highlights',
  	"primary_cta_url" varchar DEFAULT '#highlights',
  	"secondary_cta_text" varchar DEFAULT 'About The Festival',
  	"secondary_cta_url" varchar DEFAULT '#about',
  	"card_badge" varchar DEFAULT 'ECR Grand Weekend',
  	"nations_text" varchar DEFAULT 'Thailand, Vietnam, Singapore, Malaysia, Indonesia & India',
  	"stat1_number" varchar DEFAULT '3 Days',
  	"stat1_label" varchar DEFAULT 'Non-Stop Sky Displays',
  	"stat2_number" varchar DEFAULT '100+',
  	"stat2_label" varchar DEFAULT 'Giant & Inflatable Kites',
  	"venue_box_title" varchar DEFAULT 'Venue Location',
  	"venue_box_subtitle" varchar DEFAULT 'TTDC Beach Grounds, ECR',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_kite_festival_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"featured_image_id" integer,
  	"tag_text" varchar DEFAULT 'About The Event',
  	"main_heading" varchar DEFAULT 'A Weekend of Kites, Colours & International Artistry',
  	"paragraph1" varchar DEFAULT 'For three days in August, the skies above Mamallapuram ECR will turn into a colorful spectacle as the <strong class="text-[#100f9a] font-semibold">5th Tamil Nadu International Kite Festival 2026</strong> brings together breathtaking kite creations, master flyers, giant installations, and vibrant family entertainment.',
  	"paragraph2" varchar DEFAULT 'Taking place at <strong class="text-[#100f9a]">TTDC Ocean View, Mamallapuram ECR</strong>, the festival features renowned participants from Thailand, Vietnam, Singapore, Malaysia, Indonesia, India, and beyond, creating an energetic international celebration along the coastline.',
  	"paragraph3" varchar DEFAULT 'With the open coastline of Mamallapuram as the backdrop, these larger-than-life kites create countless memorable moments for families, sightseers, and photography enthusiasts. The <strong class="text-[#100f9a]">World of Inflatable Show Kites</strong> further transforms the skyline into an airborne fantasy.',
  	"box_title" varchar DEFAULT 'A Perfect ECR Day Out',
  	"box_description" varchar DEFAULT 'Located along Mamallapuram''''s popular East Coast Road (ECR), the drive itself forms a pleasant weekend getaway for residents of Chennai and neighboring areas.',
  	"box_svg_code" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_kite_festival_highlights_highlights_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"svg_code" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages_blocks_kite_festival_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag_text" varchar DEFAULT 'Festival Attractions',
  	"main_heading" varchar DEFAULT 'More Than Just A Kite Show',
  	"description" varchar DEFAULT 'Explore the array of entertainment, culinary delights, and artistic exhibits planned across the three-day carnival.',
  	"banner_title" varchar DEFAULT 'Ready to experience Mamallapuram''''s sky?',
  	"banner_description" varchar DEFAULT 'Plan your family outing from 14 to 16 August at TTDC Ocean View grounds, ECR.',
  	"badge_text" varchar DEFAULT '14–16 August',
  	"badge_svg_code" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "kf_new_faqs_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "kf_new_faq_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tag_text" varchar DEFAULT 'Got Questions?',
  	"main_heading" varchar DEFAULT 'Frequently Asked Questions',
  	"description" varchar DEFAULT 'Everything you need to know before heading to the 5th Tamil Nadu International Kite Festival 2026.',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_type" "enum_pages_hero_type" DEFAULT 'Defult',
  	"hero_heading" varchar,
  	"hero_image_id" integer,
  	"hero_background_color" "enum_pages_hero_background_color" DEFAULT 'gradient-1',
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_links_link_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_links_link_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_version_hero_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"link_content_image_id" integer,
  	"link_type" "enum__pages_v_version_hero_links_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar,
  	"link_appearance" "enum__pages_v_version_hero_links_link_appearance" DEFAULT 'default',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_explore_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"place" varchar,
  	"image_id" integer,
  	"page_id" integer,
  	"custom_link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_explore" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_fun_chennai_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"place" varchar,
  	"image_id" integer,
  	"page_id" integer,
  	"custom_link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_fun_chennai" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_startup_chennai_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"page_id" integer,
  	"custom_link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_startup_chennai" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_chennai_investments" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_social_reel_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Social Chennai',
  	"description" varchar DEFAULT '  Make connections, participate, and add to Chennai s lively social events and community projects',
  	"content_type" "enum__pages_v_blocks_social_reel_slider_content_type" DEFAULT 'video',
  	"show_video_thumbnail_only" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_became_a_volunteer" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Become a',
  	"title" varchar DEFAULT 'Volunteer',
  	"description" varchar DEFAULT 'Change things! Contribute your time and expertise to worthwhile causes in Chennai.',
  	"page_id" integer,
  	"custom_link" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_events_calendar" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"page_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_slider_block_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_hero_slider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_visitcategory_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"page_id" integer,
  	"custom_link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_visitcategory" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_zig_zag_content_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"link_url" varchar,
  	"link_text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_zig_zag_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_volunteer_became_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"section_description" varchar,
  	"button_text" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_main_page_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"image_id" integer,
  	"background_color" "enum__pages_v_blocks_main_page_banner_background_color" DEFAULT 'gradient-1',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_intro_text_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"show_marquee" boolean DEFAULT true,
  	"marquee_text" varchar,
  	"marquee_text_size" "enum__pages_v_blocks_intro_text_block_marquee_text_size" DEFAULT 'sm',
  	"title" varchar,
  	"highlighted_text" varchar,
  	"description" varchar,
  	"background_type" "enum__pages_v_blocks_intro_text_block_background_type" DEFAULT 'none',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_global_search_filters_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_global_search_filters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_global_search" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"placeholder_text" varchar DEFAULT 'Experience Chennai',
  	"button_text" varchar DEFAULT 'Search',
  	"enable_filters" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_form_popup" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"button_text" varchar DEFAULT 'Enquire Now',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_infography_food_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"page_id" integer,
  	"food_section_title" varchar,
  	"custom_link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_infography" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"heading_span" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_two_column_feature_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tech_image_id" integer,
  	"tech_title" varchar,
  	"tech_description" varchar,
  	"edu_image_id" integer,
  	"edu_title" varchar,
  	"edu_description" varchar,
  	"tech_link_url" varchar,
  	"tech_link_page_id" integer,
  	"edu_link_url" varchar,
  	"edu_link_page_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_utilities_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tab_title" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_utilities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content_zone_carousel_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_content_zone_carousel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"subheading" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_allevents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_live_intror_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"image_position" "enum__pages_v_blocks_live_intror_section_image_position" DEFAULT 'right',
  	"image_id" integer,
  	"para_zero_live_section" varchar,
  	"paraone_live_section" varchar,
  	"para_two_live_section" varchar,
  	"show_marquee" boolean DEFAULT true,
  	"marquee_text" varchar,
  	"marquee_text_size" "enum__pages_v_blocks_live_intror_section_marquee_text_size" DEFAULT 'sm',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_chennai_life_essentials_essentials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"page_id" integer,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_chennai_life_essentials" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_investment_category_list_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"subtitle" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_investment_category_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"background_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_innovate_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_hover_image_section_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"page_id" integer,
  	"custom_link" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_text_hover_image_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_trending_chennai_slider" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Trending Chennai',
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_second_section_first_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"highlight" varchar,
  	"content" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_second_section_second_column" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"highlight" varchar,
  	"content" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_second_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Welcome to Super Chennai',
  	"sub_heading" varchar DEFAULT 'Chennai is India’s healthcare capital, SaaS capital, fintech capital, and automobile capital. Home to 7.5 million people, it is a 386-year-old city alive with heritage and vibing to the march of the future.',
  	"button_text" varchar DEFAULT 'Explore More',
  	"button_link" varchar DEFAULT '/about-us',
  	"icon_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_popup_banner" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"enable_popup" boolean DEFAULT true,
  	"is_global" boolean DEFAULT false,
  	"popup_image_id" integer,
  	"redirect_link" varchar DEFAULT '/',
  	"open_in_new_tab" boolean DEFAULT false,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cricket_score_block_points_table" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"team_name" varchar,
  	"team_logo_id" integer,
  	"played" numeric DEFAULT 0,
  	"won" numeric DEFAULT 0,
  	"loss" numeric DEFAULT 0,
  	"no_result" numeric DEFAULT 0,
  	"net_run_rate" varchar DEFAULT '+0.000',
  	"points" numeric DEFAULT 0,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_cricket_score_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'IPL Cricket Updates',
  	"description" varchar,
  	"i_p_limage_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_conclave_super_chennai_block_meta_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_conclave_super_chennai_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Super Chennai Conclave',
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_conclave_about_block_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_conclave_about_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"background_ticker_text" varchar DEFAULT 'CONCLAVE -',
  	"image_id" integer,
  	"title" varchar DEFAULT 'Chennai CONCLAVE',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_conclave_agenda_block_agenda_items_speakers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_conclave_agenda_block_agenda_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"display_id" varchar,
  	"start_time" varchar,
  	"end_time" varchar,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_conclave_agenda_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_heading" varchar DEFAULT 'OUR AGENDA',
  	"initial_visible_rows" numeric DEFAULT 4,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_conclave_speakers_block_speakers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"designation" varchar,
  	"image_id" integer,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_conclave_speakers_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_heading" varchar DEFAULT 'Speakers',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_conclave_five_pillars_block_pillars_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_conclave_five_pillars_block_pillars" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"icon_id" integer,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_conclave_five_pillars_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_heading" varchar DEFAULT 'FIVE PILLARS OF SUPER CHENNAI',
  	"section_subheading" varchar DEFAULT 'The conclave is anchored around five interconnected pillars that define a truly world-class city.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_conclave_cta_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"background_image_id" integer,
  	"logo_image_id" integer,
  	"date_text" varchar DEFAULT 'Feb 19, 2026',
  	"time_text" varchar DEFAULT 'Time: 09:30 AM Onwards',
  	"venue_text" varchar,
  	"enable_register_button" boolean DEFAULT false,
  	"button_text" varchar DEFAULT 'Register Now',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_conclave_partners_block_partners" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"description_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_conclave_partners_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_heading" varchar DEFAULT 'Partner',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_conclave_gallery_block_gallery_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_conclave_gallery_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"marquee_text" varchar DEFAULT 'Gallery',
  	"section_title" varchar DEFAULT 'Chennai Conclave 2026',
  	"section_description" varchar DEFAULT 'A collection of stage highlights, speaker sessions, interactions, and memento-giving moments from the conclave.',
  	"featured_event_link_url" varchar DEFAULT 'https://youtube.com/live/D8hBf-lK57c?feature=share',
  	"featured_event_image_id" integer,
  	"featured_event_date_number" varchar DEFAULT '19',
  	"featured_event_day_name" varchar DEFAULT 'Wednesday',
  	"featured_event_title" varchar DEFAULT 'Super Chennai Conclave 2026',
  	"featured_event_description" varchar,
  	"featured_event_tag" varchar DEFAULT 'Conclave',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_inner_page_hero_banner_block_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"url" varchar,
  	"small_text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_inner_page_hero_banner_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"banner_image_id" integer,
  	"mobile_banner_image_id" integer,
  	"title" varchar DEFAULT '',
  	"small_title_text" varchar DEFAULT '',
  	"banner_link" varchar,
  	"open_in_new_tab" boolean DEFAULT false,
  	"enable_search" boolean DEFAULT true,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_section_block_faq_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_faq_section_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'FAQ',
  	"small_title_text" varchar DEFAULT 's',
  	"description" varchar DEFAULT 'Learn everything about Super Chennai and how it''''s shaping the city''''s future.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_about_intro_block_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_about_intro_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'About Chennai City',
  	"marquee_text" varchar DEFAULT 'Super Chennai',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_wsc_cols_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"paragraphs" varchar DEFAULT '',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_about_welcome_super_chennai_block_new" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT '',
  	"subheading" varchar DEFAULT '',
  	"image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_vis_mis_c_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_vision_mission_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_fnd_pts_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_about_foundations_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Foundations of Modern Chennai',
  	"image_id" integer,
  	"paragraph1" varchar DEFAULT 'The modern foundations of Chennai were laid on August 22, 1639, a date now proudly celebrated as Chennai Day. This moment marked the formal recognition of the region’s growth into an organized urban centre with expanding civic and economic importance.',
  	"paragraph2" varchar DEFAULT 'By 1640, key developments had begun to shape the city''''s layout and identity. Chennai steadily grew by integrating nearby villages, evolving into a connected and planned cityscape.',
  	"highlight_text" varchar DEFAULT 'In the decades that followed, the city laid the groundwork for many firsts',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_about_namma_chennai_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_id" varchar DEFAULT 'NumChennaiSec',
  	"main_header" varchar DEFAULT 'Chennai''''s',
  	"sub_header" varchar DEFAULT 'Soundtrack pulses with <br>kuthu, gaana, hip-hop <br>and indie beats.',
  	"paragraph1" varchar DEFAULT 'Its food scene is just as dynamic, from sushi bars to taco joints, <br>Korean cafés to soulful biryanis, where every meal is a mix of flavors as diverse as its people.',
  	"paragraph2" varchar DEFAULT 'Whether it’s skaters carving through the streets, surfers riding the waves, <br>or storytellers capturing moments, Chennai is a city in motion-always evolving, always alive. <br>This is Chennai redefined-bold, vibrant, and unapologetically modern. <br>Super Chennai isn’t just a place to live-it’s where the <br>future is being shaped,',
  	"tagline" varchar DEFAULT 'one beat, one bite, & <br>one breakthrough at a time.',
  	"footer_heading" varchar DEFAULT 'It’s hot. <br>It’s happening. <br>And it’s home.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_wc_tabs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tab_prefix" varchar DEFAULT '',
  	"tab_title" varchar DEFAULT '',
  	"image_id" integer,
  	"points" varchar DEFAULT '',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_about_why_chennai_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT '',
  	"subheading" varchar DEFAULT '',
  	"description" varchar DEFAULT '',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_t_pts_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_t_info_secs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_image_id" integer,
  	"img_alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_invest_page_border_section" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_ut_tabs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tab_title" varchar,
  	"icon_id" integer,
  	"heading" varchar,
  	"description" varchar,
  	"button_text" varchar DEFAULT 'Explore More',
  	"button_link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_invest_page_tab_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_inv_slides_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"category" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"img_alt" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_invest_page_slider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_inn_slides_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"content" varchar,
  	"image_id" integer,
  	"img_alt" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_innovate_page_slider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_info_items_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_innovate_info_section_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"main_image_id" integer,
  	"img_alt" varchar DEFAULT 'smart city chennai',
  	"image_position" "enum__pages_v_blocks_innovate_info_section_block_image_position" DEFAULT 'left',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_iwc_li_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"item_text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_iwc_cb_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"type" "enum__iwc_cb_v_type" DEFAULT 'paragraph',
  	"paragraph_text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_imagewith_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'Key Highlights',
  	"main_image_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_tp_p_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_tp_bp_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"point_text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_tp_cards_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"card_title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_image_without_content_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"main_title" varchar DEFAULT 'CHENNAI’S TECH PUZZLE: THE KEY PIECES',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_ev_h_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_ev_c_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_ev_r_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_table_section_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"main_title" varchar DEFAULT 'EV ZONES & SMART CORRIDORS',
  	"sub_title" varchar DEFAULT 'These companies have made Chennai their technology fortress:',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_in_sld_c_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_inner_page_slider_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"main_title" varchar DEFAULT 'Chennai’s tech pulse',
  	"sub_title" varchar DEFAULT 'Chennai''''s software development industry is drawing individuals from all over the world for work and business. With a knowledgeable staff, it positions itself as a major center for a range of IT solutions.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_gallery_slider_with_popup_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading" varchar DEFAULT 'Gallery',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_l_img_r_sec_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT '',
  	"description" varchar DEFAULT '',
  	"image_id" integer,
  	"image_alt" varchar DEFAULT '',
  	"theme_pattern" "theme_ptrn" DEFAULT 'pattern-a',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_bs_items_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"para" varchar,
  	"imgs_id" integer,
  	"link_url" varchar DEFAULT '#',
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_bs_sec_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title_line1" varchar DEFAULT 'For a',
  	"section_title_line2" varchar DEFAULT 'Spinster',
  	"section_desc" varchar,
  	"label" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_benefit_sections_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_wi_paras_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_intro_pink_text_with_content_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"background_watermark_text" varchar DEFAULT 'Work   in Chennai   Work   in Chennai',
  	"title" varchar DEFAULT 'Working in Chennai',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_vils_p_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"para" varchar,
  	"imgs_id" integer,
  	"img_alt" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_vils_t_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_vils_s_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"section_desc" varchar,
  	"image_id" integer,
  	"img_alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_vils_b_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_nc_locs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_nc_plcs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"desc" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_nc_data_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"category" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_work_network_section_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"main_title" varchar DEFAULT 'Networking & Communities',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_wpis_bp_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"point" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_wpis_p_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"imgs_id" integer,
  	"img_alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_wpis_s_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"section_desc" varchar,
  	"image_id" integer,
  	"img_alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_wpis_b_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_hch_loc_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_hch_plc_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"desc" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_hch_cat_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"category" varchar,
  	"category_para_graph" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_health_care_hospitals_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"main_title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cl_tpts_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"para" varchar,
  	"imgs_id" integer,
  	"alt_title" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cl_tnt_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cl_img_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"section_desc" varchar,
  	"image_id" integer,
  	"image_alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cl_dpts_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"description" varchar,
  	"sub_description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cl_dtl_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_clb_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_ttd_pts_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"para" varchar,
  	"imgs_id" integer,
  	"img_alt" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_ttd_tnt_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_ttd_sec_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"section_desc" varchar,
  	"image_id" integer,
  	"img_alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_ttd_blk_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cn_nbh_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"para" varchar,
  	"imgs_id" integer,
  	"img_alt" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cn_sec_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"section_desc" varchar,
  	"image_id" integer,
  	"img_alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cnb_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_qol_sec_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"title1" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"img_alt" varchar,
  	"button_text" varchar,
  	"button_link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_qol_blk_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_vwl_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"bold_text" varchar,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_vwp_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"imgs_id" integer,
  	"img_alt" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_vwt_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_vws_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"section_desc" varchar,
  	"image_id" integer,
  	"img_alt" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_vw_block_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cnt_add_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"line" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cnt_blk_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Contact Us',
  	"description" varchar,
  	"logo_id" integer,
  	"logo_alt" varchar,
  	"email" varchar,
  	"map_link" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cn_tabs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tab_label" varchar,
  	"tab_icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cn_asgn_tabs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"assigned_tab_name" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cn_feats_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature_item" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cn_svcs_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"service_item" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cn_apps_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"company" varchar,
  	"app_description" varchar,
  	"app_image_id" integer,
  	"app_image_alt" varchar,
  	"website_link" varchar,
  	"android_link" varchar,
  	"ios_link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cn_apps_blk_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_loc_arr_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_plc_arr_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"desc" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cat_arr_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"category_name" varchar,
  	"category_desc" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_reg_arr_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"region_name" varchar,
  	"hero_image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_plc_sec_blk_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_image_title_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"image_id" integer,
  	"img_alt" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_info_section_block_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"point" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_info_section_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_id" integer,
  	"description" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_table_block_headers" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_name" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_table_block_rows_cells" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_table_block_rows" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_table_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"table_title" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_category_block_items_locations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_category_block_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"desc" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_category_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"category_name" varchar,
  	"category_desc" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_llp_block_main_tabs_regions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"region_name" varchar,
  	"hero_image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_llp_block_main_tabs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tab_title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_llp_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cards_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"card_title" varchar,
  	"card_description" varchar,
  	"card_media_id" integer,
  	"card_media_alt_text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cats_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"category_tab_label" varchar,
  	"category_heading_title" varchar,
  	"category_summary_text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_chenz_inv_2026_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_ev_lst_2026_v_events_cards2026" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"link_url" varchar,
  	"card_media_id" integer,
  	"alt_text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_ev_lst_2026_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_infra_boom_2026_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Chennai Infrastructure Boom 2026',
  	"description" varchar DEFAULT 'Chennai is undergoing a massive transformation with ₹90,000+ crore infrastructure projects across metro, roads, and smart city developments. From mobility to water security, the city is rapidly evolving into a future-ready urban hub.',
  	"button_text" varchar DEFAULT 'Chennai Infrastructure Intelligence Report',
  	"pdf_file_id" integer,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_manifesto_section_block_slider_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt_text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_manifesto_section_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"top_header_title" varchar DEFAULT 'Manifesto in Your Hands',
  	"main_heading" varchar DEFAULT 'DELIVERING THE MANIFESTO IS NOW IN YOUR HANDS',
  	"paragraph1" varchar DEFAULT 'The future of Chennai is shaped by the aspirations of its people. Reason why, Super Chennai organised a day-long Conclave that brought together industry leaders, urban planners, administrators, thought leaders and citizens. The Conclave discussed and curated ideas across five defining pillars: Live, Work, Visit, Innovate and Invest.',
  	"sub_heading" varchar DEFAULT 'Live, Work, Visit, Innovate and Invest',
  	"paragraph2" varchar DEFAULT 'Suffice to say, incredible insights were collated. And they have been put together as a Manifesto on what the people wish for, from Super Chennai.',
  	"highlight_text" varchar DEFAULT 'Register your details to access and download the full manifesto.',
  	"button_text" varchar DEFAULT 'Download',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_tvc_2026_v_tvc_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"company" varchar DEFAULT 'Published On: July 21, 2025',
  	"events_calendar_title" varchar,
  	"image_id" integer,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_tvc_2026_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_heading" varchar DEFAULT 'TV Commercials',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_media_coverage_main_page_v_news_article" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"company" varchar,
  	"events_calendar_title" varchar,
  	"image_id" integer,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_media_coverage_main_page_v_news_photos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"company" varchar,
  	"events_calendar_title" varchar,
  	"title" varchar,
  	"image_id" integer,
  	"image1_id" integer,
  	"description" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_media_coverage_main_page_v_youtube_channel" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"company" varchar,
  	"events_calendar_title" varchar,
  	"title" varchar,
  	"image_id" integer,
  	"link" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_media_coverage_main_page_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'MEDIA COVERAGE',
  	"section_description" varchar DEFAULT 'Stay updated with the latest images, videos, and highlights from SuperChennai’s events, announcements, and developments.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_metro_madras_block_paragraphs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_metro_madras_block_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"icon_type" "enum__pages_v_blocks_metro_madras_block_features_icon_type" DEFAULT 'music',
  	"custom_icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_metro_madras_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"featured_image_id" integer,
  	"title" varchar DEFAULT 'METRO-VIL MADRAS DAY',
  	"subtitle" varchar DEFAULT 'Chennai’s First Midnight Musical Ride',
  	"quote_text" varchar DEFAULT '“Somewhere between the last Metro train and the first light of Madras Day, Chennai came together and sang.”',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_metro_the_details_block_details" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"icon_type" "enum__pages_v_blocks_metro_the_details_block_details_icon_type" DEFAULT 'calendar',
  	"custom_icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_metro_the_details_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'THE DETAILS',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_metro_experience_block_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_metro_experience_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"left_title" varchar DEFAULT 'THE EXPERIENCE',
  	"check_svg_code" varchar,
  	"right_title" varchar DEFAULT 'WHO CAN JOIN?',
  	"who_can_join_paragraph1" varchar DEFAULT 'Anyone who loves Chennai, music and a good sing-along!',
  	"who_can_join_paragraph2" varchar DEFAULT 'Limited Slots only, REGISTER NOW and don''''t miss the chance to be part of this exclusive Madras Day celebration',
  	"enable_button" boolean DEFAULT false,
  	"button_text" varchar DEFAULT 'REGISTER NOW',
  	"button_target_id" varchar DEFAULT 'registration-form',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_metro_guidelines_block_guidelines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_metro_guidelines_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar DEFAULT 'IMPORTANT INFORMATION',
  	"check_svg_code" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_metro_registration_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_id" varchar DEFAULT 'registration-form',
  	"featured_image_id" integer,
  	"status" "enum__pages_v_blocks_metro_registration_block_status" DEFAULT 'closed',
  	"badge_text" varchar DEFAULT 'Closed',
  	"title" varchar DEFAULT 'REGISTRATION IS CLOSED',
  	"description" varchar DEFAULT 'Thank you for the overwhelming response! All available slots for Sing Along Metro have been completely filled.',
  	"info_box_title" varchar DEFAULT 'Missed your spot?',
  	"info_box_description" varchar DEFAULT 'Stay tuned to our social media channels for updates on upcoming slots, next editions, and live event announcements!',
  	"button_text" varchar DEFAULT 'REGISTRATIONS FULL',
  	"status_svg_code" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_kf_hero_block_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"announcement_text" varchar DEFAULT 'Official Event Announcement • August 2026',
  	"location_subtitle" varchar DEFAULT 'TTDC Ocean View, East Coast Road (ECR)',
  	"top_badge" varchar DEFAULT '5th Edition • Annual Coastal Celebration',
  	"main_heading" varchar DEFAULT 'Kite Festival 2026',
  	"description" varchar DEFAULT 'When Mamallapuram takes to the skies. Experience three days of grand airborne art, international master flyers, giant inflatables, and coastal food carnivals.',
  	"date_text" varchar DEFAULT '14 – 16 August 2026',
  	"location_text" varchar DEFAULT 'TTDC Ocean View, Mamallapuram ECR',
  	"primary_cta_text" varchar DEFAULT 'Explore Event Highlights',
  	"primary_cta_url" varchar DEFAULT '#highlights',
  	"secondary_cta_text" varchar DEFAULT 'About The Festival',
  	"secondary_cta_url" varchar DEFAULT '#about',
  	"card_badge" varchar DEFAULT 'ECR Grand Weekend',
  	"nations_text" varchar DEFAULT 'Thailand, Vietnam, Singapore, Malaysia, Indonesia & India',
  	"stat1_number" varchar DEFAULT '3 Days',
  	"stat1_label" varchar DEFAULT 'Non-Stop Sky Displays',
  	"stat2_number" varchar DEFAULT '100+',
  	"stat2_label" varchar DEFAULT 'Giant & Inflatable Kites',
  	"venue_box_title" varchar DEFAULT 'Venue Location',
  	"venue_box_subtitle" varchar DEFAULT 'TTDC Beach Grounds, ECR',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_kite_festival_about" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"featured_image_id" integer,
  	"tag_text" varchar DEFAULT 'About The Event',
  	"main_heading" varchar DEFAULT 'A Weekend of Kites, Colours & International Artistry',
  	"paragraph1" varchar DEFAULT 'For three days in August, the skies above Mamallapuram ECR will turn into a colorful spectacle as the <strong class="text-[#100f9a] font-semibold">5th Tamil Nadu International Kite Festival 2026</strong> brings together breathtaking kite creations, master flyers, giant installations, and vibrant family entertainment.',
  	"paragraph2" varchar DEFAULT 'Taking place at <strong class="text-[#100f9a]">TTDC Ocean View, Mamallapuram ECR</strong>, the festival features renowned participants from Thailand, Vietnam, Singapore, Malaysia, Indonesia, India, and beyond, creating an energetic international celebration along the coastline.',
  	"paragraph3" varchar DEFAULT 'With the open coastline of Mamallapuram as the backdrop, these larger-than-life kites create countless memorable moments for families, sightseers, and photography enthusiasts. The <strong class="text-[#100f9a]">World of Inflatable Show Kites</strong> further transforms the skyline into an airborne fantasy.',
  	"box_title" varchar DEFAULT 'A Perfect ECR Day Out',
  	"box_description" varchar DEFAULT 'Located along Mamallapuram''''s popular East Coast Road (ECR), the drive itself forms a pleasant weekend getaway for residents of Chennai and neighboring areas.',
  	"box_svg_code" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_kite_festival_highlights_highlights_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"svg_code" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_blocks_kite_festival_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag_text" varchar DEFAULT 'Festival Attractions',
  	"main_heading" varchar DEFAULT 'More Than Just A Kite Show',
  	"description" varchar DEFAULT 'Explore the array of entertainment, culinary delights, and artistic exhibits planned across the three-day carnival.',
  	"banner_title" varchar DEFAULT 'Ready to experience Mamallapuram''''s sky?',
  	"banner_description" varchar DEFAULT 'Plan your family outing from 14 to 16 August at TTDC Ocean View grounds, ECR.',
  	"badge_text" varchar DEFAULT '14–16 August',
  	"badge_svg_code" varchar,
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_kf_new_faqs_list_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_kf_new_faq_block_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tag_text" varchar DEFAULT 'Got Questions?',
  	"main_heading" varchar DEFAULT 'Frequently Asked Questions',
  	"description" varchar DEFAULT 'Everything you need to know before heading to the 5th Tamil Nadu International Kite Festival 2026.',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_type" "enum__pages_v_version_hero_type" DEFAULT 'Defult',
  	"version_hero_heading" varchar,
  	"version_hero_image_id" integer,
  	"version_hero_background_color" "enum__pages_v_version_hero_background_color" DEFAULT 'gradient-1',
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"media_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "posts_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"views" numeric DEFAULT 0,
  	"likes" numeric DEFAULT 0,
  	"published_at" timestamp(3) with time zone,
  	"blog_category" "enum_posts_blog_category",
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "posts_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_views" numeric DEFAULT 0,
  	"version_likes" numeric DEFAULT 0,
  	"version_published_at" timestamp(3) with time zone,
  	"version_blog_category" "enum__posts_v_version_blog_category",
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_posts_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar,
  	"caption" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_square_url" varchar,
  	"sizes_square_width" numeric,
  	"sizes_square_height" numeric,
  	"sizes_square_mime_type" varchar,
  	"sizes_square_filesize" numeric,
  	"sizes_square_filename" varchar,
  	"sizes_small_url" varchar,
  	"sizes_small_width" numeric,
  	"sizes_small_height" numeric,
  	"sizes_small_mime_type" varchar,
  	"sizes_small_filesize" numeric,
  	"sizes_small_filename" varchar,
  	"sizes_medium_url" varchar,
  	"sizes_medium_width" numeric,
  	"sizes_medium_height" numeric,
  	"sizes_medium_mime_type" varchar,
  	"sizes_medium_filesize" numeric,
  	"sizes_medium_filename" varchar,
  	"sizes_large_url" varchar,
  	"sizes_large_width" numeric,
  	"sizes_large_height" numeric,
  	"sizes_large_mime_type" varchar,
  	"sizes_large_filesize" numeric,
  	"sizes_large_filename" varchar,
  	"sizes_xlarge_url" varchar,
  	"sizes_xlarge_width" numeric,
  	"sizes_xlarge_height" numeric,
  	"sizes_xlarge_mime_type" varchar,
  	"sizes_xlarge_filesize" numeric,
  	"sizes_xlarge_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "categories_breadcrumbs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"doc_id" integer,
  	"url" varchar,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"parent_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"role" "enum_users_role" DEFAULT 'user' NOT NULL,
  	"name" varchar,
  	"phone" varchar,
  	"location" varchar,
  	"profile_image_id" integer,
  	"phone_verified" boolean DEFAULT false,
  	"otp" varchar,
  	"otp_expires" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "visits_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "visits" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"featured_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_visits_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "visits_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"visits_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_visits_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_visits_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_featured_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__visits_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_visits_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"visits_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "work_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "work" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"featured_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_work_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "work_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"work_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_work_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_work_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_featured_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__work_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_work_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"work_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "events_event_event_dates" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"date" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "events_event_details_language" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_events_event_details_language",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "events_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "events" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"is_featured" boolean,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"event_image_id" integer,
  	"event_singer_name" varchar,
  	"event_artist_designation" varchar,
  	"event_title" varchar,
  	"event_description" varchar,
  	"event_performer_role" varchar,
  	"event_details_duration" varchar,
  	"event_details_event_time" timestamp(3) with time zone,
  	"event_details_age_limit" varchar,
  	"event_details_genre" varchar,
  	"event_details_location_id" integer,
  	"event_details_is_free" boolean DEFAULT false,
  	"event_details_family_friendly" boolean DEFAULT false,
  	"event_link" varchar,
  	"event_linkbutton" varchar,
  	"event_address" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"meta_schema" jsonb,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_events_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "events_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"events_categories_id" integer,
  	"events_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_events_v_version_event_event_dates" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"date" timestamp(3) with time zone,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_events_v_version_event_details_language" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__events_v_version_event_details_language",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_events_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_events_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_is_featured" boolean,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_event_image_id" integer,
  	"version_event_singer_name" varchar,
  	"version_event_artist_designation" varchar,
  	"version_event_title" varchar,
  	"version_event_description" varchar,
  	"version_event_performer_role" varchar,
  	"version_event_details_duration" varchar,
  	"version_event_details_event_time" timestamp(3) with time zone,
  	"version_event_details_age_limit" varchar,
  	"version_event_details_genre" varchar,
  	"version_event_details_location_id" integer,
  	"version_event_details_is_free" boolean DEFAULT false,
  	"version_event_details_family_friendly" boolean DEFAULT false,
  	"version_event_link" varchar,
  	"version_event_linkbutton" varchar,
  	"version_event_address" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_meta_schema" jsonb,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__events_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_events_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"events_categories_id" integer,
  	"events_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "investments_investments_investment_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "investments_investments" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"section_description" varchar,
  	"section_image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "investments_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "investments" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"featured_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_investments_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "investments_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"investments_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_investments_v_version_investments_investment_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"description" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_investments_v_version_investments" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section_title" varchar,
  	"section_description" varchar,
  	"section_image_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_investments_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_investments_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_featured_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__investments_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_investments_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"investments_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "live_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "live" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"featured_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_live_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "live_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"live_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_live_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_live_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_featured_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__live_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_live_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"live_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "volunteer_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "volunteer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"image_id" integer,
  	"voluenteer_title" varchar,
  	"subtitle" varchar,
  	"description" varchar,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_volunteer_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "volunteer_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"volunteer_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_volunteer_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_volunteer_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_image_id" integer,
  	"version_voluenteer_title" varchar,
  	"version_subtitle" varchar,
  	"version_description" varchar,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__volunteer_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_volunteer_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"volunteer_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "innovate_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "innovate" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"featured_image_id" integer,
  	"content" jsonb,
  	"innovation_title" varchar,
  	"innovation_description" varchar,
  	"innovation_image_id" integer,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_innovate_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "innovate_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"innovate_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_innovate_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_innovate_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_featured_image_id" integer,
  	"version_content" jsonb,
  	"version_innovation_title" varchar,
  	"version_innovation_description" varchar,
  	"version_innovation_image_id" integer,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__innovate_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_innovate_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"innovate_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "visit_details_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "visit_details" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"parent_id" integer,
  	"hero_image_id" integer,
  	"featured_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_visit_details_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "visit_details_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"visit_details_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_visit_details_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_visit_details_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_parent_id" integer,
  	"version_hero_image_id" integer,
  	"version_featured_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__visit_details_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_visit_details_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"visit_details_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "volunteer_slides_slides_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "volunteer_slides_slides" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"slug" varchar NOT NULL,
  	"image_id" integer NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar,
  	"description" varchar,
  	"detailed_content" jsonb,
  	"video" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "volunteer_slides" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"content" varchar,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"seo_meta_keywords" varchar,
  	"seo_canonical_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "social_reels_reels" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"thumbnail_id" integer NOT NULL,
  	"link" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "social_reels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "investment_categories_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "investment_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "visit_groups_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"description" varchar,
  	"image_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "visit_groups" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "properties_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "properties_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "properties_nearby" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"place" varchar,
  	"distance" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "properties_floor_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"file_id" integer,
  	"caption" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "properties_route_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"file_id" integer,
  	"caption" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "properties_green_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "properties_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"feature" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "properties_more_amenities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "properties_specifications" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "properties_rent_details_preferred_tenants" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_properties_rent_details_preferred_tenants",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "properties_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "properties" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"map_view_latitude" numeric,
  	"map_view_longitude" numeric,
  	"map_view_map_embed" varchar,
  	"walkthrough_video" varchar,
  	"home_tour_video" varchar,
  	"top_reasons_to_buy_video" varchar,
  	"model_house_explanation_video" varchar,
  	"experience_centre_video" varchar,
  	"other_video" varchar,
  	"total_units" numeric,
  	"floor" numeric,
  	"purpose" "enum_properties_purpose",
  	"ownership" "enum_properties_ownership",
  	"age_of_property" "enum_properties_age_of_property",
  	"transaction_type" "enum_properties_transaction_type",
  	"agent_rera_id" varchar,
  	"agent_cmda_id" varchar,
  	"society_name" varchar,
  	"society_builder" varchar,
  	"society_possession_status" "enum_properties_society_possession_status",
  	"society_external_url" varchar,
  	"property_location_id" integer,
  	"furnishing" "enum_properties_furnishing",
  	"bedrooms" numeric,
  	"semi_rooms_study_room" boolean,
  	"semi_rooms_servant_room" boolean,
  	"semi_rooms_pooja_room" boolean,
  	"semi_rooms_store_room" boolean,
  	"balconies" numeric,
  	"area_min_sqft" numeric,
  	"area_max_sqft" numeric,
  	"area_aker" varchar,
  	"square_feet_range_min_sqft" numeric,
  	"square_feet_range_max_sqft" numeric,
  	"square_feet_range_acres" varchar,
  	"facing_direction" "enum_properties_facing_direction",
  	"parking" "enum_properties_parking",
  	"water_supply" "enum_properties_water_supply",
  	"parking_outdoor_covered_parking" numeric,
  	"parking_outdoor_open_parking" numeric,
  	"parking_outdoor_visitor_parking" boolean,
  	"parking_outdoor_ev_charging" boolean,
  	"commercial_type" "enum_properties_commercial_type",
  	"seating_capacity" numeric,
  	"washrooms" numeric,
  	"plot_area" numeric,
  	"dimensions_length" numeric,
  	"dimensions_width" numeric,
  	"road_width" numeric,
  	"corner_plot" boolean,
  	"price" numeric,
  	"price_per_sqft" numeric,
  	"maintenance_charges" numeric,
  	"booking_amount" numeric,
  	"negotiable" boolean,
  	"listed_by" "enum_properties_listed_by",
  	"contact_info_name" varchar,
  	"contact_info_phone" varchar,
  	"contact_info_email" varchar,
  	"interiors_door_type" "enum_properties_interiors_door_type",
  	"interiors_door_type_description" varchar,
  	"interiors_wardrobes" numeric,
  	"interiors_curtains" boolean,
  	"interiors_modular_kitchen" boolean,
  	"interiors_chimney" boolean,
  	"interiors_false_ceiling" boolean,
  	"interiors_lighting" numeric,
  	"appliances_ac_units" numeric,
  	"appliances_fridge_count" numeric,
  	"appliances_microwave_count" numeric,
  	"appliances_water_purifier" numeric,
  	"appliances_washing_machine" boolean,
  	"appliances_dishwasher" boolean,
  	"appliances_tv_count" numeric,
  	"appliances_geyser_count" numeric,
  	"appliances_power_backup" boolean,
  	"appliances_solar" boolean,
  	"bathroom_features_bathtubs" numeric,
  	"bathroom_features_jacuzzi" boolean,
  	"bathroom_features_heated_flooring" boolean,
  	"building_amenities_elevator" boolean,
  	"building_amenities_security" boolean,
  	"building_amenities_intercom" boolean,
  	"building_amenities_fire_safety" boolean,
  	"building_amenities_clubhouse" boolean,
  	"building_amenities_swimming_pool" boolean,
  	"building_amenities_gym" boolean,
  	"building_amenities_play_area" boolean,
  	"building_amenities_garden" boolean,
  	"building_amenities_yoga_area" boolean,
  	"building_amenities_club_house" boolean,
  	"building_amenities_mini_theatre" boolean,
  	"building_amenities_indoor_games" boolean,
  	"building_amenities_herb_garden" boolean,
  	"building_amenities_multipurpose_hall" boolean,
  	"building_amenities_lift_lobby" boolean,
  	"building_amenities_amphitheatre" boolean,
  	"building_amenities_creche" boolean,
  	"building_amenities_lobby" boolean,
  	"building_amenities_reflexology" boolean,
  	"building_amenities_seating_plaza" boolean,
  	"building_amenities_drop_off" boolean,
  	"building_amenities_retreat_terrace" boolean,
  	"building_amenities_mandate" boolean,
  	"building_amenities_tranquil_deck" boolean,
  	"building_amenities_ai_fresco" boolean,
  	"building_amenities_the_lounge" boolean,
  	"building_amenities_fairview_deck" boolean,
  	"building_amenities_wellness_patio" boolean,
  	"building_amenities_aerobics_zumba" boolean,
  	"building_amenities_basement_parking" boolean,
  	"building_amenities_ev_charging_point" boolean,
  	"building_amenities_kids_play_area" boolean,
  	"building_amenities_pergola_seating" boolean,
  	"building_amenities_tennis_court" boolean,
  	"building_amenities_chess_board" boolean,
  	"building_amenities_cricket_practice_pitch" boolean,
  	"building_amenities_futsal_court" boolean,
  	"building_amenities_half_basketball_court" boolean,
  	"building_amenities_hopscotch" boolean,
  	"building_amenities_mounds_play_area" boolean,
  	"building_amenities_snakes_and_ladder" boolean,
  	"building_amenities_co_working" boolean,
  	"building_amenities_party_hall" boolean,
  	"building_amenities_skating_rink" boolean,
  	"building_amenities_mini_golf" boolean,
  	"building_amenities_basketball_court" boolean,
  	"building_amenities_soccer_field" boolean,
  	"building_amenities_bocce_court" boolean,
  	"building_amenities_cycling_track" boolean,
  	"building_amenities_rock_climbing_wall" boolean,
  	"building_amenities_zip_line" boolean,
  	"building_amenities_trampoline_park" boolean,
  	"building_amenities_pet_park" boolean,
  	"building_amenities_amphitheater_stage" boolean,
  	"building_amenities_community_garden" boolean,
  	"building_amenities_reading_lounge" boolean,
  	"building_amenities_multipurpose_play_area" boolean,
  	"building_amenities_basketball_half_court" boolean,
  	"building_amenities_board_games_room" boolean,
  	"building_amenities_meditation_deck" boolean,
  	"building_amenities_outdoor_fitness_zone" boolean,
  	"building_amenities_hammock_lounge" boolean,
  	"building_amenities_fire_pit" boolean,
  	"rent_details_monthly_rent" numeric,
  	"rent_details_security_deposit" numeric,
  	"rent_details_maintenance_included" boolean,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"availability_status" "enum_properties_availability_status",
  	"featured" boolean,
  	"urgent_sale" boolean,
  	"security" boolean,
  	"lift_available" boolean,
  	"official_view" boolean,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_properties_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "properties_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"property_types_id" integer,
  	"bhk_types_id" integer,
  	"properties_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v_version_images" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v_version_faq" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v_version_nearby" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"place" varchar,
  	"distance" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v_version_floor_plans" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"file_id" integer,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v_version_route_map" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"file_id" integer,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v_version_green_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v_version_features" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"feature" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v_version_more_amenities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v_version_specifications" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v_version_rent_details_preferred_tenants" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__properties_v_version_rent_details_preferred_tenants",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_map_view_latitude" numeric,
  	"version_map_view_longitude" numeric,
  	"version_map_view_map_embed" varchar,
  	"version_walkthrough_video" varchar,
  	"version_home_tour_video" varchar,
  	"version_top_reasons_to_buy_video" varchar,
  	"version_model_house_explanation_video" varchar,
  	"version_experience_centre_video" varchar,
  	"version_other_video" varchar,
  	"version_total_units" numeric,
  	"version_floor" numeric,
  	"version_purpose" "enum__properties_v_version_purpose",
  	"version_ownership" "enum__properties_v_version_ownership",
  	"version_age_of_property" "enum__properties_v_version_age_of_property",
  	"version_transaction_type" "enum__properties_v_version_transaction_type",
  	"version_agent_rera_id" varchar,
  	"version_agent_cmda_id" varchar,
  	"version_society_name" varchar,
  	"version_society_builder" varchar,
  	"version_society_possession_status" "enum__properties_v_version_society_possession_status",
  	"version_society_external_url" varchar,
  	"version_property_location_id" integer,
  	"version_furnishing" "enum__properties_v_version_furnishing",
  	"version_bedrooms" numeric,
  	"version_semi_rooms_study_room" boolean,
  	"version_semi_rooms_servant_room" boolean,
  	"version_semi_rooms_pooja_room" boolean,
  	"version_semi_rooms_store_room" boolean,
  	"version_balconies" numeric,
  	"version_area_min_sqft" numeric,
  	"version_area_max_sqft" numeric,
  	"version_area_aker" varchar,
  	"version_square_feet_range_min_sqft" numeric,
  	"version_square_feet_range_max_sqft" numeric,
  	"version_square_feet_range_acres" varchar,
  	"version_facing_direction" "enum__properties_v_version_facing_direction",
  	"version_parking" "enum__properties_v_version_parking",
  	"version_water_supply" "enum__properties_v_version_water_supply",
  	"version_parking_outdoor_covered_parking" numeric,
  	"version_parking_outdoor_open_parking" numeric,
  	"version_parking_outdoor_visitor_parking" boolean,
  	"version_parking_outdoor_ev_charging" boolean,
  	"version_commercial_type" "enum__properties_v_version_commercial_type",
  	"version_seating_capacity" numeric,
  	"version_washrooms" numeric,
  	"version_plot_area" numeric,
  	"version_dimensions_length" numeric,
  	"version_dimensions_width" numeric,
  	"version_road_width" numeric,
  	"version_corner_plot" boolean,
  	"version_price" numeric,
  	"version_price_per_sqft" numeric,
  	"version_maintenance_charges" numeric,
  	"version_booking_amount" numeric,
  	"version_negotiable" boolean,
  	"version_listed_by" "enum__properties_v_version_listed_by",
  	"version_contact_info_name" varchar,
  	"version_contact_info_phone" varchar,
  	"version_contact_info_email" varchar,
  	"version_interiors_door_type" "enum__properties_v_version_interiors_door_type",
  	"version_interiors_door_type_description" varchar,
  	"version_interiors_wardrobes" numeric,
  	"version_interiors_curtains" boolean,
  	"version_interiors_modular_kitchen" boolean,
  	"version_interiors_chimney" boolean,
  	"version_interiors_false_ceiling" boolean,
  	"version_interiors_lighting" numeric,
  	"version_appliances_ac_units" numeric,
  	"version_appliances_fridge_count" numeric,
  	"version_appliances_microwave_count" numeric,
  	"version_appliances_water_purifier" numeric,
  	"version_appliances_washing_machine" boolean,
  	"version_appliances_dishwasher" boolean,
  	"version_appliances_tv_count" numeric,
  	"version_appliances_geyser_count" numeric,
  	"version_appliances_power_backup" boolean,
  	"version_appliances_solar" boolean,
  	"version_bathroom_features_bathtubs" numeric,
  	"version_bathroom_features_jacuzzi" boolean,
  	"version_bathroom_features_heated_flooring" boolean,
  	"version_building_amenities_elevator" boolean,
  	"version_building_amenities_security" boolean,
  	"version_building_amenities_intercom" boolean,
  	"version_building_amenities_fire_safety" boolean,
  	"version_building_amenities_clubhouse" boolean,
  	"version_building_amenities_swimming_pool" boolean,
  	"version_building_amenities_gym" boolean,
  	"version_building_amenities_play_area" boolean,
  	"version_building_amenities_garden" boolean,
  	"version_building_amenities_yoga_area" boolean,
  	"version_building_amenities_club_house" boolean,
  	"version_building_amenities_mini_theatre" boolean,
  	"version_building_amenities_indoor_games" boolean,
  	"version_building_amenities_herb_garden" boolean,
  	"version_building_amenities_multipurpose_hall" boolean,
  	"version_building_amenities_lift_lobby" boolean,
  	"version_building_amenities_amphitheatre" boolean,
  	"version_building_amenities_creche" boolean,
  	"version_building_amenities_lobby" boolean,
  	"version_building_amenities_reflexology" boolean,
  	"version_building_amenities_seating_plaza" boolean,
  	"version_building_amenities_drop_off" boolean,
  	"version_building_amenities_retreat_terrace" boolean,
  	"version_building_amenities_mandate" boolean,
  	"version_building_amenities_tranquil_deck" boolean,
  	"version_building_amenities_ai_fresco" boolean,
  	"version_building_amenities_the_lounge" boolean,
  	"version_building_amenities_fairview_deck" boolean,
  	"version_building_amenities_wellness_patio" boolean,
  	"version_building_amenities_aerobics_zumba" boolean,
  	"version_building_amenities_basement_parking" boolean,
  	"version_building_amenities_ev_charging_point" boolean,
  	"version_building_amenities_kids_play_area" boolean,
  	"version_building_amenities_pergola_seating" boolean,
  	"version_building_amenities_tennis_court" boolean,
  	"version_building_amenities_chess_board" boolean,
  	"version_building_amenities_cricket_practice_pitch" boolean,
  	"version_building_amenities_futsal_court" boolean,
  	"version_building_amenities_half_basketball_court" boolean,
  	"version_building_amenities_hopscotch" boolean,
  	"version_building_amenities_mounds_play_area" boolean,
  	"version_building_amenities_snakes_and_ladder" boolean,
  	"version_building_amenities_co_working" boolean,
  	"version_building_amenities_party_hall" boolean,
  	"version_building_amenities_skating_rink" boolean,
  	"version_building_amenities_mini_golf" boolean,
  	"version_building_amenities_basketball_court" boolean,
  	"version_building_amenities_soccer_field" boolean,
  	"version_building_amenities_bocce_court" boolean,
  	"version_building_amenities_cycling_track" boolean,
  	"version_building_amenities_rock_climbing_wall" boolean,
  	"version_building_amenities_zip_line" boolean,
  	"version_building_amenities_trampoline_park" boolean,
  	"version_building_amenities_pet_park" boolean,
  	"version_building_amenities_amphitheater_stage" boolean,
  	"version_building_amenities_community_garden" boolean,
  	"version_building_amenities_reading_lounge" boolean,
  	"version_building_amenities_multipurpose_play_area" boolean,
  	"version_building_amenities_basketball_half_court" boolean,
  	"version_building_amenities_board_games_room" boolean,
  	"version_building_amenities_meditation_deck" boolean,
  	"version_building_amenities_outdoor_fitness_zone" boolean,
  	"version_building_amenities_hammock_lounge" boolean,
  	"version_building_amenities_fire_pit" boolean,
  	"version_rent_details_monthly_rent" numeric,
  	"version_rent_details_security_deposit" numeric,
  	"version_rent_details_maintenance_included" boolean,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_availability_status" "enum__properties_v_version_availability_status",
  	"version_featured" boolean,
  	"version_urgent_sale" boolean,
  	"version_security" boolean,
  	"version_lift_available" boolean,
  	"version_official_view" boolean,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__properties_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_properties_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"property_types_id" integer,
  	"bhk_types_id" integer,
  	"properties_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "bhk_types" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "property_types" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" "enum_property_types_value" NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "locations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"state" varchar NOT NULL,
  	"city" varchar NOT NULL,
  	"locality" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "amenities" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"icon_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "contact_messages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"message" varchar NOT NULL,
  	"property_id" varchar,
  	"property_type" varchar,
  	"slug" varchar,
  	"title" varchar,
  	"society_name" varchar,
  	"builder_name" varchar,
  	"buildercontact_email" varchar,
  	"published_at" timestamp(3) with time zone,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "propertylocations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"state" varchar NOT NULL,
  	"city" varchar NOT NULL,
  	"locality" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "events_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "superchennai_contests_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "superchennai_contests" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_superchennai_contests_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "superchennai_contests_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_superchennai_contests_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_superchennai_contests_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__superchennai_contests_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_superchennai_contests_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "contest_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "contest" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_contest_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "contest_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_contest_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_contest_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__contest_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_contest_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "organizers" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar,
  	"image_id" integer,
  	"icon" varchar,
  	"venue" "enum_organizers_venue",
  	"website" varchar,
  	"description" varchar,
  	"order" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "venues" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"location" varchar,
  	"notes" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "margazhi_contest_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"icon" varchar,
  	"order" numeric,
  	"notes" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "sabha_foods" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"subtitle" varchar,
  	"image_id" integer,
  	"icon" varchar,
  	"type" "enum_sabha_foods_type" DEFAULT 'canteen' NOT NULL,
  	"order" numeric,
  	"avail_date_from" timestamp(3) with time zone,
  	"avail_date_to" timestamp(3) with time zone,
  	"timings" varchar,
  	"place_name" varchar,
  	"place_map_url" varchar,
  	"food_details" varchar,
  	"sabha_name" varchar,
  	"organizer" varchar,
  	"other_details" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "articles_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "articles" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"excerpt" varchar,
  	"articlecategory_id" integer,
  	"language_id" integer,
  	"thumbnail_type" "enum_articles_thumbnail_type",
  	"thumbnail_image_id" integer,
  	"thumbnail_video_url" varchar,
  	"thumbnail_gif_url" varchar,
  	"thumbnail_alt" varchar,
  	"featured" boolean DEFAULT false,
  	"pinned" boolean DEFAULT false,
  	"reading_time" numeric,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"meta_structured_data" jsonb,
  	"views" numeric DEFAULT 0,
  	"likes" numeric DEFAULT 0,
  	"is_featured" boolean,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_articles_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "articles_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"article_types_id" integer,
  	"articlelocations_id" integer,
  	"articles_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_articles_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_articles_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_excerpt" varchar,
  	"version_articlecategory_id" integer,
  	"version_language_id" integer,
  	"version_thumbnail_type" "enum__articles_v_version_thumbnail_type",
  	"version_thumbnail_image_id" integer,
  	"version_thumbnail_video_url" varchar,
  	"version_thumbnail_gif_url" varchar,
  	"version_thumbnail_alt" varchar,
  	"version_featured" boolean DEFAULT false,
  	"version_pinned" boolean DEFAULT false,
  	"version_reading_time" numeric,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_meta_structured_data" jsonb,
  	"version_views" numeric DEFAULT 0,
  	"version_likes" numeric DEFAULT 0,
  	"version_is_featured" boolean,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__articles_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_articles_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"article_types_id" integer,
  	"articlelocations_id" integer,
  	"articles_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "ads_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "ads" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"adstitle" varchar,
  	"adsstatus" "enum_ads_adsstatus" DEFAULT 'draft',
  	"media_type" "enum_ads_media_type",
  	"media_id" integer,
  	"media_url" varchar,
  	"alt_text" varchar,
  	"caption" varchar,
  	"video_duration" numeric,
  	"priority" numeric DEFAULT 0,
  	"target_url" varchar,
  	"start_date" timestamp(3) with time zone,
  	"end_date" timestamp(3) with time zone,
  	"mobile_settings_mobile_media_type" "enum_ads_mobile_settings_mobile_media_type",
  	"mobile_settings_mobile_media_id" integer,
  	"mobile_settings_mobile_media_url" varchar,
  	"mobile_settings_mobile_alt_text" varchar,
  	"mobile_settings_mobile_caption" varchar,
  	"device_target" "enum_ads_device_target" DEFAULT 'all',
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"show_on_articles" boolean DEFAULT false,
  	"show_priority" "enum_ads_show_priority" DEFAULT 'secondary',
  	"position" "enum_ads_position",
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_ads_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "ads_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_ads_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_ads_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_adstitle" varchar,
  	"version_adsstatus" "enum__ads_v_version_adsstatus" DEFAULT 'draft',
  	"version_media_type" "enum__ads_v_version_media_type",
  	"version_media_id" integer,
  	"version_media_url" varchar,
  	"version_alt_text" varchar,
  	"version_caption" varchar,
  	"version_video_duration" numeric,
  	"version_priority" numeric DEFAULT 0,
  	"version_target_url" varchar,
  	"version_start_date" timestamp(3) with time zone,
  	"version_end_date" timestamp(3) with time zone,
  	"version_mobile_settings_mobile_media_type" "enum__ads_v_version_mobile_settings_mobile_media_type",
  	"version_mobile_settings_mobile_media_id" integer,
  	"version_mobile_settings_mobile_media_url" varchar,
  	"version_mobile_settings_mobile_alt_text" varchar,
  	"version_mobile_settings_mobile_caption" varchar,
  	"version_device_target" "enum__ads_v_version_device_target" DEFAULT 'all',
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_show_on_articles" boolean DEFAULT false,
  	"version_show_priority" "enum__ads_v_version_show_priority" DEFAULT 'secondary',
  	"version_position" "enum__ads_v_version_position",
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__ads_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_ads_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"posts_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "article_types" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"description" varchar,
  	"icon_id" integer,
  	"order" numeric DEFAULT 0,
  	"active" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "articlelocations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"state" varchar NOT NULL,
  	"city" varchar NOT NULL,
  	"locality" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "articlecategory" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"description" varchar,
  	"icon_id" integer,
  	"cover_image_id" integer,
  	"color" varchar,
  	"order" numeric DEFAULT 0,
  	"active" boolean DEFAULT true,
  	"seo_meta_title" varchar,
  	"seo_meta_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "languages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"code" varchar NOT NULL,
  	"native_label" varchar,
  	"direction" "enum_languages_direction" DEFAULT 'ltr',
  	"active" boolean DEFAULT true,
  	"order" numeric DEFAULT 0,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"caption" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_branches" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"branch_name" varchar,
  	"address" varchar,
  	"area" varchar,
  	"phone" varchar,
  	"latitude" numeric,
  	"longitude" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"document_name" varchar,
  	"file_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_business_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"day" "enum_neighbourhood_business_hours_day",
  	"open_time" varchar,
  	"close_time" varchar,
  	"is_closed" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_service_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_menu_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"item_name" varchar,
  	"price" numeric,
  	"is_veg" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_fuel_types" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"fuel_name" varchar,
  	"price_per_litre" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_amenities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_awards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_quick_access_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"sub" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_neighborhood_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_structured_data_faq_schema" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_structured_data_event_schema" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"event_name" varchar,
  	"start_date" timestamp(3) with time zone,
  	"end_date" timestamp(3) with time zone,
  	"location_name" varchar,
  	"ticket_price" numeric
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"featured_image_id" integer,
  	"content" jsonb,
  	"name" varchar,
  	"description" varchar,
  	"category_id" integer,
  	"listing_type" "enum_neighbourhood_listing_type" DEFAULT 'free',
  	"priority_rank" numeric,
  	"subscription_expiry" timestamp(3) with time zone,
  	"is24_hours" boolean DEFAULT false,
  	"temporarily_closed" boolean DEFAULT false,
  	"search_keywords" varchar,
  	"normalized_name" varchar,
  	"is_verified" boolean DEFAULT false,
  	"is_sponsored" boolean DEFAULT false,
  	"contact_info_primary_phone" varchar,
  	"contact_info_secondary_phone" varchar,
  	"contact_info_whatsapp" varchar,
  	"contact_info_email" varchar,
  	"contact_info_website" varchar,
  	"price_info_price_range" "enum_neighbourhood_price_info_price_range",
  	"price_info_average_cost" numeric,
  	"social_media_facebook" varchar,
  	"social_media_instagram" varchar,
  	"social_media_youtube" varchar,
  	"social_media_twitter" varchar,
  	"company_info_owner_name" varchar,
  	"company_info_founded_year" numeric,
  	"company_info_gst_number" varchar,
  	"icon_id" integer,
  	"locations_id" integer,
  	"google_data_place_id" varchar,
  	"google_data_google_rating" numeric,
  	"google_data_total_google_reviews" numeric,
  	"location_latitude" numeric,
  	"location_longitude" numeric,
  	"google_place_id" varchar,
  	"rating" numeric,
  	"total_reviews" numeric DEFAULT 0,
  	"established_year" numeric,
  	"is_featured" boolean DEFAULT false,
  	"is_active" boolean DEFAULT true,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"meta_schema" jsonb,
  	"structured_data_schema_type" "enum_neighbourhood_structured_data_schema_type",
  	"structured_data_custom_schema" jsonb,
  	"structured_data_view_count" numeric DEFAULT 0,
  	"structured_data_call_click_count" numeric DEFAULT 0,
  	"structured_data_whatsapp_click_count" numeric DEFAULT 0,
  	"structured_data_website_click_count" numeric DEFAULT 0,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_neighbourhood_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"neighbourhood_subcategories_id" integer,
  	"neighbourhood_tags_id" integer,
  	"chennai_neighbourhoodlocations_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_neighbourhood_v_version_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"alt" varchar,
  	"caption" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_neighbourhood_v_version_branches" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"branch_name" varchar,
  	"address" varchar,
  	"area" varchar,
  	"phone" varchar,
  	"latitude" numeric,
  	"longitude" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_neighbourhood_v_version_documents" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"document_name" varchar,
  	"file_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_neighbourhood_v_version_business_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"day" "enum__neighbourhood_v_version_business_hours_day",
  	"open_time" varchar,
  	"close_time" varchar,
  	"is_closed" boolean,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_neighbourhood_v_version_service_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_neighbourhood_v_version_menu_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"item_name" varchar,
  	"price" numeric,
  	"is_veg" boolean,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_neighbourhood_v_version_fuel_types" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"fuel_name" varchar,
  	"price_per_litre" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_neighbourhood_v_version_amenities" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_neighbourhood_v_version_awards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_neighbourhood_v_version_quick_access_highlights" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"sub" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_neighbourhood_v_version_neighborhood_stats" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"value" varchar,
  	"label" varchar,
  	"icon_id" integer,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_neighbourhood_v_version_structured_data_faq_schema" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"question" varchar,
  	"answer" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_neighbourhood_v_version_structured_data_event_schema" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"event_name" varchar,
  	"start_date" timestamp(3) with time zone,
  	"end_date" timestamp(3) with time zone,
  	"location_name" varchar,
  	"ticket_price" numeric,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_neighbourhood_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_neighbourhood_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_featured_image_id" integer,
  	"version_content" jsonb,
  	"version_name" varchar,
  	"version_description" varchar,
  	"version_category_id" integer,
  	"version_listing_type" "enum__neighbourhood_v_version_listing_type" DEFAULT 'free',
  	"version_priority_rank" numeric,
  	"version_subscription_expiry" timestamp(3) with time zone,
  	"version_is24_hours" boolean DEFAULT false,
  	"version_temporarily_closed" boolean DEFAULT false,
  	"version_search_keywords" varchar,
  	"version_normalized_name" varchar,
  	"version_is_verified" boolean DEFAULT false,
  	"version_is_sponsored" boolean DEFAULT false,
  	"version_contact_info_primary_phone" varchar,
  	"version_contact_info_secondary_phone" varchar,
  	"version_contact_info_whatsapp" varchar,
  	"version_contact_info_email" varchar,
  	"version_contact_info_website" varchar,
  	"version_price_info_price_range" "enum__neighbourhood_v_version_price_info_price_range",
  	"version_price_info_average_cost" numeric,
  	"version_social_media_facebook" varchar,
  	"version_social_media_instagram" varchar,
  	"version_social_media_youtube" varchar,
  	"version_social_media_twitter" varchar,
  	"version_company_info_owner_name" varchar,
  	"version_company_info_founded_year" numeric,
  	"version_company_info_gst_number" varchar,
  	"version_icon_id" integer,
  	"version_locations_id" integer,
  	"version_google_data_place_id" varchar,
  	"version_google_data_google_rating" numeric,
  	"version_google_data_total_google_reviews" numeric,
  	"version_location_latitude" numeric,
  	"version_location_longitude" numeric,
  	"version_google_place_id" varchar,
  	"version_rating" numeric,
  	"version_total_reviews" numeric DEFAULT 0,
  	"version_established_year" numeric,
  	"version_is_featured" boolean DEFAULT false,
  	"version_is_active" boolean DEFAULT true,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_meta_schema" jsonb,
  	"version_structured_data_schema_type" "enum__neighbourhood_v_version_structured_data_schema_type",
  	"version_structured_data_custom_schema" jsonb,
  	"version_structured_data_view_count" numeric DEFAULT 0,
  	"version_structured_data_call_click_count" numeric DEFAULT 0,
  	"version_structured_data_whatsapp_click_count" numeric DEFAULT 0,
  	"version_structured_data_website_click_count" numeric DEFAULT 0,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__neighbourhood_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_neighbourhood_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"neighbourhood_subcategories_id" integer,
  	"neighbourhood_tags_id" integer,
  	"chennai_neighbourhoodlocations_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"icon_id" integer,
  	"description" varchar,
  	"has_menu" boolean,
  	"has_fuel" boolean,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_subcategories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"parent_category_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "neighbourhood_tags" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "chennai_neighbourhoodlocations_overview_points" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"point" varchar NOT NULL,
  	"icon_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "chennai_neighbourhoodlocations_quick_access" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"detail" varchar NOT NULL,
  	"icon_id" integer,
  	"fallback_emoji" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "chennai_neighbourhoodlocations_why_choose" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"reason" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "chennai_neighbourhoodlocations_lifestyle_scores" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"score" numeric NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "chennai_neighbourhoodlocations_faq_section_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "chennai_neighbourhoodlocations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"state" varchar NOT NULL,
  	"city" varchar NOT NULL,
  	"locality" varchar NOT NULL,
  	"pincode" varchar,
  	"about" varchar,
  	"purpose" varchar,
  	"location_url" varchar,
  	"open_in_new_tab" boolean DEFAULT true,
  	"image_id" integer,
  	"icon_svg_id" integer,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"school_count" varchar DEFAULT '10+',
  	"hospital_count" varchar DEFAULT '5+',
  	"has_metro" boolean DEFAULT false,
  	"overview_description" varchar,
  	"faq_section_sub_heading" varchar DEFAULT 'Frequently Asked Questions',
  	"faq_section_heading" varchar,
  	"faq_section_description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "trending_chennai_trending_chennai_event_dates" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"date" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "trending_chennai_meta_seo_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"keyword" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "trending_chennai_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "trending_chennai" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"is_featured" boolean,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"trending_chennai_image_id" integer,
  	"trending_chennai_singer_name" varchar,
  	"trending_chennai_artist_designation" varchar,
  	"trending_chennai_title" varchar,
  	"trending_chennai_description" varchar,
  	"trending_chennai_performer_role" varchar,
  	"trending_chennai_details_duration" varchar,
  	"trending_chennai_details_event_time" timestamp(3) with time zone,
  	"trending_chennai_details_age_limit" varchar,
  	"trending_chennai_details_genre" varchar,
  	"trending_chennai_details_location_id" integer,
  	"trending_chennai_details_is_free" boolean DEFAULT false,
  	"trending_chennai_details_family_friendly" boolean DEFAULT false,
  	"trending_chennai_link" varchar,
  	"trending_chennai_linkbutton" varchar,
  	"trending_chennai_address" varchar,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"meta_schema" jsonb,
  	"meta_seo_title" varchar,
  	"meta_seo_description" varchar,
  	"meta_seo_canonical_u_r_l" varchar,
  	"meta_seo_og_image_id" integer,
  	"meta_seo_structured_data" jsonb,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_trending_chennai_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "trending_chennai_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"trending_languages_id" integer,
  	"trending_events_categories_id" integer,
  	"events_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_trending_chennai_v_version_trending_chennai_event_dates" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"date" timestamp(3) with time zone,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_trending_chennai_v_version_meta_seo_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"keyword" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_trending_chennai_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_trending_chennai_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_is_featured" boolean,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_trending_chennai_image_id" integer,
  	"version_trending_chennai_singer_name" varchar,
  	"version_trending_chennai_artist_designation" varchar,
  	"version_trending_chennai_title" varchar,
  	"version_trending_chennai_description" varchar,
  	"version_trending_chennai_performer_role" varchar,
  	"version_trending_chennai_details_duration" varchar,
  	"version_trending_chennai_details_event_time" timestamp(3) with time zone,
  	"version_trending_chennai_details_age_limit" varchar,
  	"version_trending_chennai_details_genre" varchar,
  	"version_trending_chennai_details_location_id" integer,
  	"version_trending_chennai_details_is_free" boolean DEFAULT false,
  	"version_trending_chennai_details_family_friendly" boolean DEFAULT false,
  	"version_trending_chennai_link" varchar,
  	"version_trending_chennai_linkbutton" varchar,
  	"version_trending_chennai_address" varchar,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_meta_schema" jsonb,
  	"version_meta_seo_title" varchar,
  	"version_meta_seo_description" varchar,
  	"version_meta_seo_canonical_u_r_l" varchar,
  	"version_meta_seo_og_image_id" integer,
  	"version_meta_seo_structured_data" jsonb,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__trending_chennai_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_trending_chennai_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"trending_languages_id" integer,
  	"trending_events_categories_id" integer,
  	"events_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "trendinglocations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"state" varchar NOT NULL,
  	"city" varchar NOT NULL,
  	"locality" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "trending_events_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "trending_languages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"code" varchar NOT NULL,
  	"native_name" varchar,
  	"region" "enum_trending_languages_region",
  	"flag_id" integer,
  	"is_active" boolean DEFAULT true,
  	"sort_order" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "cricket_score_meta_seo_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"keyword" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cricket_score_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "cricket_score" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"cricket_score_title" varchar,
  	"cricket_score_description" varchar,
  	"cricket_score_i_p_limage_id" integer,
  	"cricket_score_match_details_duration" varchar,
  	"cricket_score_match_details_match_time" timestamp(3) with time zone,
  	"cricket_score_match_details_age_limit" varchar,
  	"cricket_score_match_details_match_type" varchar,
  	"cricket_score_match_details_stadium_location_id" integer,
  	"cricket_score_match_details_free_streaming" boolean DEFAULT false,
  	"cricket_score_match_details_family_friendly" boolean DEFAULT false,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"meta_schema" jsonb,
  	"meta_seo_title" varchar,
  	"meta_seo_description" varchar,
  	"meta_seo_canonical_u_r_l" varchar,
  	"meta_seo_og_image_id" integer,
  	"meta_seo_structured_data" jsonb,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_cricket_score_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "cricket_score_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"ipl_languages_id" integer,
  	"events_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_cricket_score_v_version_meta_seo_keywords" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"keyword" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cricket_score_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_cricket_score_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_cricket_score_title" varchar,
  	"version_cricket_score_description" varchar,
  	"version_cricket_score_i_p_limage_id" integer,
  	"version_cricket_score_match_details_duration" varchar,
  	"version_cricket_score_match_details_match_time" timestamp(3) with time zone,
  	"version_cricket_score_match_details_age_limit" varchar,
  	"version_cricket_score_match_details_match_type" varchar,
  	"version_cricket_score_match_details_stadium_location_id" integer,
  	"version_cricket_score_match_details_free_streaming" boolean DEFAULT false,
  	"version_cricket_score_match_details_family_friendly" boolean DEFAULT false,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_meta_schema" jsonb,
  	"version_meta_seo_title" varchar,
  	"version_meta_seo_description" varchar,
  	"version_meta_seo_canonical_u_r_l" varchar,
  	"version_meta_seo_og_image_id" integer,
  	"version_meta_seo_structured_data" jsonb,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__cricket_score_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_cricket_score_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"ipl_languages_id" integer,
  	"events_id" integer,
  	"categories_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "ipl_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"description" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "ipl_locations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"state" varchar NOT NULL,
  	"city" varchar NOT NULL,
  	"locality" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "ipl_languages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"code" varchar NOT NULL,
  	"native_name" varchar,
  	"region" "enum_ipl_languages_region",
  	"flag_id" integer,
  	"is_active" boolean DEFAULT true,
  	"sort_order" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "icon_of_month_achievements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"achievement" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "icon_of_month_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "icon_of_month" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"content" jsonb,
  	"person_name" varchar,
  	"designation" varchar,
  	"profile_image_id" integer,
  	"cover_image_id" integer,
  	"month" "enum_icon_of_month_month",
  	"year" numeric,
  	"category_id" integer,
  	"short_description" varchar,
  	"quote" varchar,
  	"social_links_website" varchar,
  	"social_links_linkedin" varchar,
  	"social_links_twitter" varchar,
  	"social_links_instagram" varchar,
  	"featured" boolean DEFAULT false,
  	"ranking" numeric DEFAULT 1,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_icon_of_month_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "icon_of_month_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_icon_of_month_v_version_achievements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"achievement" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_icon_of_month_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_icon_of_month_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_content" jsonb,
  	"version_person_name" varchar,
  	"version_designation" varchar,
  	"version_profile_image_id" integer,
  	"version_cover_image_id" integer,
  	"version_month" "enum__icon_of_month_v_version_month",
  	"version_year" numeric,
  	"version_category_id" integer,
  	"version_short_description" varchar,
  	"version_quote" varchar,
  	"version_social_links_website" varchar,
  	"version_social_links_linkedin" varchar,
  	"version_social_links_twitter" varchar,
  	"version_social_links_instagram" varchar,
  	"version_featured" boolean DEFAULT false,
  	"version_ranking" numeric DEFAULT 1,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__icon_of_month_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_icon_of_month_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "icon_month_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"slug" varchar NOT NULL,
  	"description" varchar,
  	"icon_id" integer,
  	"color" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "whats_ap_chennai_details_language" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_whats_ap_chennai_details_language",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "whats_ap_chennai_details_event_dates" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"date" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "whats_ap_chennai_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "whats_ap_chennai" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"featured_image_id" integer,
  	"mobile_image_id" integer,
  	"content" jsonb,
  	"details_duration" varchar,
  	"details_event_time" timestamp(3) with time zone,
  	"details_age_limit" varchar,
  	"details_location_id" integer,
  	"details_is_free" boolean DEFAULT false,
  	"details_family_friendly" boolean DEFAULT false,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"meta_schema" jsonb,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_whats_ap_chennai_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "whats_ap_chennai_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_whats_ap_chennai_v_version_details_language" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__whats_ap_chennai_v_version_details_language",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "_whats_ap_chennai_v_version_details_event_dates" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"date" timestamp(3) with time zone,
  	"_uuid" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_whats_ap_chennai_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_whats_ap_chennai_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_featured_image_id" integer,
  	"version_mobile_image_id" integer,
  	"version_content" jsonb,
  	"version_details_duration" varchar,
  	"version_details_event_time" timestamp(3) with time zone,
  	"version_details_age_limit" varchar,
  	"version_details_location_id" integer,
  	"version_details_is_free" boolean DEFAULT false,
  	"version_details_family_friendly" boolean DEFAULT false,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_meta_schema" jsonb,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__whats_ap_chennai_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_whats_ap_chennai_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "whatsapp_chennai_locations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"state" varchar DEFAULT 'Tamil Nadu' NOT NULL,
  	"city" varchar DEFAULT 'Chennai' NOT NULL,
  	"locality" varchar NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "golu_submissions_golu_photographs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"sort_order" numeric DEFAULT 0
  );
  
  CREATE TABLE IF NOT EXISTS "golu_submissions_super_chennai_corner_photographs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"sort_order" numeric DEFAULT 0
  );
  
  CREATE TABLE IF NOT EXISTS "golu_submissions_action_history" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"action" varchar NOT NULL,
  	"performed_by" varchar NOT NULL,
  	"performed_at" timestamp(3) with time zone NOT NULL,
  	"notes" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "golu_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"participant_id" integer NOT NULL,
  	"golu_video_id" integer,
  	"photo_drive_link" varchar,
  	"about_your_golu" jsonb,
  	"status" "enum_golu_submissions_status" DEFAULT 'pendingReview',
  	"internal_notes" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "golu_users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"full_name" varchar NOT NULL,
  	"mobile_number" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"locality_area" varchar NOT NULL,
  	"instagram_handle" varchar,
  	"registration_date" timestamp(3) with time zone,
  	"terms_accepted" boolean DEFAULT false NOT NULL,
  	"terms_accepted_at" timestamp(3) with time zone,
  	"is_verified" boolean DEFAULT true,
  	"submission_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "participants" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"full_name" varchar NOT NULL,
  	"mobile_number" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"locality_area" varchar NOT NULL,
  	"instagram_handle" varchar,
  	"registration_date" timestamp(3) with time zone,
  	"terms_accepted" boolean DEFAULT false NOT NULL,
  	"terms_accepted_at" timestamp(3) with time zone,
  	"is_verified" boolean DEFAULT true,
  	"submission_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "golu_dashboard_view" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "golu_contest_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "golu_contest" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"hero_image_id" integer,
  	"featured_image_id" integer,
  	"mobile_image_id" integer,
  	"content" jsonb,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"meta_schema" jsonb,
  	"published_at" timestamp(3) with time zone,
  	"slug" varchar,
  	"slug_lock" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_golu_contest_status" DEFAULT 'draft'
  );
  
  CREATE TABLE IF NOT EXISTS "golu_contest_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_golu_contest_v_version_populated_authors" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar,
  	"name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_golu_contest_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_title" varchar,
  	"version_hero_image_id" integer,
  	"version_featured_image_id" integer,
  	"version_mobile_image_id" integer,
  	"version_content" jsonb,
  	"version_meta_title" varchar,
  	"version_meta_image_id" integer,
  	"version_meta_description" varchar,
  	"version_meta_schema" jsonb,
  	"version_published_at" timestamp(3) with time zone,
  	"version_slug" varchar,
  	"version_slug_lock" boolean DEFAULT true,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__golu_contest_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE IF NOT EXISTS "_golu_contest_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "registration_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"is_registration_open" boolean DEFAULT true,
  	"enable_o_t_p" boolean DEFAULT true,
  	"max_registrations" numeric,
  	"show_organisation_field" boolean DEFAULT true,
  	"thank_you_message" varchar DEFAULT 'Thank you for registering. We will contact you soon.',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "event_form_fields_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"value" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "event_form_fields" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"name" varchar NOT NULL,
  	"type" "enum_event_form_fields_type",
  	"placeholder" varchar,
  	"required" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
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
  
  CREATE TABLE IF NOT EXISTS "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from" varchar NOT NULL,
  	"to_type" "enum_redirects_to_type" DEFAULT 'reference',
  	"to_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "redirects_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_checkbox" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"default_value" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_country" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_email" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_message" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"message" jsonb,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_number" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_select" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"placeholder" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_state" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_text" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_blocks_textarea" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"label" varchar,
  	"width" numeric,
  	"default_value" varchar,
  	"required" boolean,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "forms_emails" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"email_to" varchar,
  	"cc" varchar,
  	"bcc" varchar,
  	"reply_to" varchar,
  	"email_from" varchar,
  	"subject" varchar DEFAULT 'You''''ve received a new message.' NOT NULL,
  	"message" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "forms" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"submit_button_label" varchar,
  	"confirmation_type" "enum_forms_confirmation_type" DEFAULT 'message',
  	"confirmation_message" jsonb,
  	"redirect_url" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions_submission_data" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"field" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "form_submissions" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"form_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "search_categories" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"relation_to" varchar,
  	"title" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "search" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"priority" numeric,
  	"slug" varchar,
  	"meta_title" varchar,
  	"meta_description" varchar,
  	"meta_image_id" integer,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "search_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE IF NOT EXISTS "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer,
  	"media_id" integer,
  	"categories_id" integer,
  	"users_id" integer,
  	"visits_id" integer,
  	"work_id" integer,
  	"events_id" integer,
  	"investments_id" integer,
  	"live_id" integer,
  	"volunteer_id" integer,
  	"innovate_id" integer,
  	"visit_details_id" integer,
  	"volunteer_slides_id" integer,
  	"social_reels_id" integer,
  	"investment_categories_id" integer,
  	"visit_groups_id" integer,
  	"properties_id" integer,
  	"bhk_types_id" integer,
  	"property_types_id" integer,
  	"locations_id" integer,
  	"amenities_id" integer,
  	"contact_messages_id" integer,
  	"propertylocations_id" integer,
  	"events_categories_id" integer,
  	"superchennai_contests_id" integer,
  	"contest_id" integer,
  	"organizers_id" integer,
  	"venues_id" integer,
  	"margazhi_contest_categories_id" integer,
  	"sabha_foods_id" integer,
  	"articles_id" integer,
  	"ads_id" integer,
  	"article_types_id" integer,
  	"articlelocations_id" integer,
  	"articlecategory_id" integer,
  	"languages_id" integer,
  	"neighbourhood_id" integer,
  	"neighbourhood_categories_id" integer,
  	"neighbourhood_subcategories_id" integer,
  	"neighbourhood_tags_id" integer,
  	"chennai_neighbourhoodlocations_id" integer,
  	"trending_chennai_id" integer,
  	"trendinglocations_id" integer,
  	"trending_events_categories_id" integer,
  	"trending_languages_id" integer,
  	"cricket_score_id" integer,
  	"ipl_categories_id" integer,
  	"ipl_locations_id" integer,
  	"ipl_languages_id" integer,
  	"icon_of_month_id" integer,
  	"icon_month_categories_id" integer,
  	"whats_ap_chennai_id" integer,
  	"whatsapp_chennai_locations_id" integer,
  	"golu_submissions_id" integer,
  	"golu_users_id" integer,
  	"participants_id" integer,
  	"golu_dashboard_view_id" integer,
  	"golu_contest_id" integer,
  	"registration_settings_id" integer,
  	"event_form_fields_id" integer,
  	"event_registration_submissions_id" integer,
  	"redirects_id" integer,
  	"forms_id" integer,
  	"form_submissions_id" integer,
  	"search_id" integer,
  	"payload_jobs_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_nav_items_link_content" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"desc" varchar,
  	"link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "header_nav_items_link_gallery" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer NOT NULL,
  	"caption" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "header_nav_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"link_content_image_id" integer,
  	"link_type" "enum_header_nav_items_link_type" DEFAULT 'reference',
  	"link_new_tab" boolean,
  	"link_url" varchar,
  	"link_label" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" varchar NOT NULL,
  	"url" varchar NOT NULL,
  	"icon_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header_drawer_menu" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"link" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"logo_id" integer,
  	"point_cast_image_id" integer,
  	"point_cast_url" varchar,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "header_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"pages_id" integer,
  	"posts_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "footer_footer_sections_top_section_links_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"link" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_footer_sections_top_section_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"category" varchar NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_footer_sections_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" varchar NOT NULL,
  	"link" varchar NOT NULL,
  	"icon_id" integer NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS "footer_footer_sections_bottom_right_logos" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"logo_image_id" integer NOT NULL,
  	"website_link" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "footer_footer_sections_floating_action_widgets" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"link" varchar NOT NULL,
  	"icon_image_id" integer NOT NULL,
  	"open_in_new_tab" boolean DEFAULT true
  );
  
  CREATE TABLE IF NOT EXISTS "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"footer_sections_partners_logo_id" integer,
  	"footer_sections_main_footer_logo_id" integer,
  	"footer_sections_design_by_logo_id" integer NOT NULL,
  	"footer_sections_footer_text" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "icon_of_month_landing_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"desktop_image_id" integer,
  	"mobile_image_id" integer,
  	"content" jsonb DEFAULT '{"root":{"type":"root","format":"","indent":0,"version":1,"children":[{"type":"paragraph","format":"","indent":0,"version":1,"children":[],"direction":null}],"direction":null}}'::jsonb,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "articles_landing_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Guides & Stories' NOT NULL,
  	"desktop_image_id" integer NOT NULL,
  	"mobile_image_id" integer NOT NULL,
  	"content" jsonb,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"facebook_page_id" varchar NOT NULL,
  	"instagram_access_token" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "golu_contest_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"contest_name" varchar DEFAULT 'Super Chennai Golu Contest 2026',
  	"contest_slug" varchar DEFAULT 'golu-contest-2026',
  	"contest_year" numeric DEFAULT 2026,
  	"hero_title" varchar DEFAULT 'Super Chennai Golu Contest',
  	"hero_subtitle" varchar DEFAULT 'Celebrate Navratri & Win Grand Prizes!',
  	"hero_description" varchar DEFAULT 'Share your traditional Golu display with Chennai. Show your passion, artistic decorations, and special Super Chennai element!',
  	"hero_image_id" integer,
  	"registration_start_date" timestamp(3) with time zone,
  	"registration_end_date" timestamp(3) with time zone,
  	"submission_start_date" timestamp(3) with time zone,
  	"submission_end_date" timestamp(3) with time zone,
  	"golu_min_images" numeric DEFAULT 2,
  	"golu_max_images" numeric DEFAULT 5,
  	"super_chennai_min_images" numeric DEFAULT 1,
  	"super_chennai_max_images" numeric DEFAULT 3,
  	"max_image_size_m_b" numeric DEFAULT 10,
  	"terms_and_conditions" jsonb,
  	"contest_rules" jsonb,
  	"registration_success_message" jsonb,
  	"submission_success_message" jsonb,
  	"registration_enabled" boolean DEFAULT true,
  	"submission_enabled" boolean DEFAULT true,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE IF NOT EXISTS "golu_landing_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT 'Super Chennai Golu Contest 2026' NOT NULL,
  	"desktop_image_id" integer,
  	"mobile_image_id" integer,
  	"content" jsonb NOT NULL,
  	"meta_title" varchar,
  	"meta_image_id" integer,
  	"meta_description" varchar,
  	"meta_schema" jsonb,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_links_link_content" ADD CONSTRAINT "pages_hero_links_link_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_hero_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_links_link_gallery" ADD CONSTRAINT "pages_hero_links_link_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_links_link_gallery" ADD CONSTRAINT "pages_hero_links_link_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_hero_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_links" ADD CONSTRAINT "pages_hero_links_link_content_image_id_media_id_fk" FOREIGN KEY ("link_content_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_hero_links" ADD CONSTRAINT "pages_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_explore_cards" ADD CONSTRAINT "pages_blocks_explore_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_explore_cards" ADD CONSTRAINT "pages_blocks_explore_cards_page_id_visits_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."visits"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_explore_cards" ADD CONSTRAINT "pages_blocks_explore_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_explore"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_explore" ADD CONSTRAINT "pages_blocks_explore_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_fun_chennai_cards" ADD CONSTRAINT "pages_blocks_fun_chennai_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_fun_chennai_cards" ADD CONSTRAINT "pages_blocks_fun_chennai_cards_page_id_visits_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."visits"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_fun_chennai_cards" ADD CONSTRAINT "pages_blocks_fun_chennai_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_fun_chennai"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_fun_chennai" ADD CONSTRAINT "pages_blocks_fun_chennai_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_startup_chennai_images" ADD CONSTRAINT "pages_blocks_startup_chennai_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_startup_chennai_images" ADD CONSTRAINT "pages_blocks_startup_chennai_images_page_id_investments_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."investments"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_startup_chennai_images" ADD CONSTRAINT "pages_blocks_startup_chennai_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_startup_chennai"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_startup_chennai" ADD CONSTRAINT "pages_blocks_startup_chennai_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_chennai_investments" ADD CONSTRAINT "pages_blocks_chennai_investments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_social_reel_slider" ADD CONSTRAINT "pages_blocks_social_reel_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_became_a_volunteer" ADD CONSTRAINT "pages_blocks_became_a_volunteer_page_id_pages_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_became_a_volunteer" ADD CONSTRAINT "pages_blocks_became_a_volunteer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_events_calendar" ADD CONSTRAINT "pages_blocks_events_calendar_page_id_pages_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_events_calendar" ADD CONSTRAINT "pages_blocks_events_calendar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_slider_block_slides" ADD CONSTRAINT "pages_blocks_hero_slider_block_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_slider_block_slides" ADD CONSTRAINT "pages_blocks_hero_slider_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_hero_slider_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_hero_slider_block" ADD CONSTRAINT "pages_blocks_hero_slider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_visitcategory_items" ADD CONSTRAINT "pages_blocks_visitcategory_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_visitcategory_items" ADD CONSTRAINT "pages_blocks_visitcategory_items_page_id_visits_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."visits"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_visitcategory_items" ADD CONSTRAINT "pages_blocks_visitcategory_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_visitcategory"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_visitcategory" ADD CONSTRAINT "pages_blocks_visitcategory_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_zig_zag_content_sections" ADD CONSTRAINT "pages_blocks_zig_zag_content_sections_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_zig_zag_content_sections" ADD CONSTRAINT "pages_blocks_zig_zag_content_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_zig_zag_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_zig_zag_content" ADD CONSTRAINT "pages_blocks_zig_zag_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_volunteer_became_section" ADD CONSTRAINT "pages_blocks_volunteer_became_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_main_page_banner" ADD CONSTRAINT "pages_blocks_main_page_banner_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_main_page_banner" ADD CONSTRAINT "pages_blocks_main_page_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_intro_text_block" ADD CONSTRAINT "pages_blocks_intro_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_global_search_filters_options" ADD CONSTRAINT "pages_blocks_global_search_filters_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_global_search_filters"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_global_search_filters" ADD CONSTRAINT "pages_blocks_global_search_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_global_search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_global_search" ADD CONSTRAINT "pages_blocks_global_search_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_form_popup" ADD CONSTRAINT "pages_blocks_form_popup_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_infography_food_items" ADD CONSTRAINT "pages_blocks_infography_food_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_infography_food_items" ADD CONSTRAINT "pages_blocks_infography_food_items_page_id_visits_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."visits"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_infography_food_items" ADD CONSTRAINT "pages_blocks_infography_food_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_infography"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_infography" ADD CONSTRAINT "pages_blocks_infography_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_two_column_feature_block" ADD CONSTRAINT "pages_blocks_two_column_feature_block_tech_image_id_media_id_fk" FOREIGN KEY ("tech_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_two_column_feature_block" ADD CONSTRAINT "pages_blocks_two_column_feature_block_edu_image_id_media_id_fk" FOREIGN KEY ("edu_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_two_column_feature_block" ADD CONSTRAINT "pages_blocks_two_column_feature_block_tech_link_page_id_pages_id_fk" FOREIGN KEY ("tech_link_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_two_column_feature_block" ADD CONSTRAINT "pages_blocks_two_column_feature_block_edu_link_page_id_pages_id_fk" FOREIGN KEY ("edu_link_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_two_column_feature_block" ADD CONSTRAINT "pages_blocks_two_column_feature_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_utilities_tabs" ADD CONSTRAINT "pages_blocks_utilities_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_utilities_tabs" ADD CONSTRAINT "pages_blocks_utilities_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_utilities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_utilities" ADD CONSTRAINT "pages_blocks_utilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content_zone_carousel_cards" ADD CONSTRAINT "pages_blocks_content_zone_carousel_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content_zone_carousel_cards" ADD CONSTRAINT "pages_blocks_content_zone_carousel_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_content_zone_carousel"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_content_zone_carousel" ADD CONSTRAINT "pages_blocks_content_zone_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_allevents" ADD CONSTRAINT "pages_blocks_allevents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_live_intror_section" ADD CONSTRAINT "pages_blocks_live_intror_section_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_live_intror_section" ADD CONSTRAINT "pages_blocks_live_intror_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_chennai_life_essentials_essentials" ADD CONSTRAINT "pages_blocks_chennai_life_essentials_essentials_page_id_live_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."live"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_chennai_life_essentials_essentials" ADD CONSTRAINT "pages_blocks_chennai_life_essentials_essentials_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_chennai_life_essentials_essentials" ADD CONSTRAINT "pages_blocks_chennai_life_essentials_essentials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_chennai_life_essentials"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_chennai_life_essentials" ADD CONSTRAINT "pages_blocks_chennai_life_essentials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_investment_category_list_items" ADD CONSTRAINT "pages_blocks_investment_category_list_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_investment_category_list_items" ADD CONSTRAINT "pages_blocks_investment_category_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_investment_category_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_investment_category_list" ADD CONSTRAINT "pages_blocks_investment_category_list_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_investment_category_list" ADD CONSTRAINT "pages_blocks_investment_category_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_innovate_slider" ADD CONSTRAINT "pages_blocks_innovate_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_hover_image_section_items" ADD CONSTRAINT "pages_blocks_text_hover_image_section_items_page_id_work_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."work"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_hover_image_section_items" ADD CONSTRAINT "pages_blocks_text_hover_image_section_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_hover_image_section_items" ADD CONSTRAINT "pages_blocks_text_hover_image_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_text_hover_image_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_text_hover_image_section" ADD CONSTRAINT "pages_blocks_text_hover_image_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_trending_chennai_slider" ADD CONSTRAINT "pages_blocks_trending_chennai_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_second_section_first_column" ADD CONSTRAINT "pages_blocks_second_section_first_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_second_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_second_section_second_column" ADD CONSTRAINT "pages_blocks_second_section_second_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_second_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_second_section" ADD CONSTRAINT "pages_blocks_second_section_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_second_section" ADD CONSTRAINT "pages_blocks_second_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_popup_banner" ADD CONSTRAINT "pages_blocks_popup_banner_popup_image_id_media_id_fk" FOREIGN KEY ("popup_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_popup_banner" ADD CONSTRAINT "pages_blocks_popup_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cricket_score_block_points_table" ADD CONSTRAINT "pages_blocks_cricket_score_block_points_table_team_logo_id_media_id_fk" FOREIGN KEY ("team_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cricket_score_block_points_table" ADD CONSTRAINT "pages_blocks_cricket_score_block_points_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_cricket_score_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cricket_score_block" ADD CONSTRAINT "pages_blocks_cricket_score_block_i_p_limage_id_media_id_fk" FOREIGN KEY ("i_p_limage_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_cricket_score_block" ADD CONSTRAINT "pages_blocks_cricket_score_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_super_chennai_block_meta_items" ADD CONSTRAINT "pages_blocks_conclave_super_chennai_block_meta_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_super_chennai_block_meta_items" ADD CONSTRAINT "pages_blocks_conclave_super_chennai_block_meta_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_conclave_super_chennai_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_super_chennai_block" ADD CONSTRAINT "pages_blocks_conclave_super_chennai_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_about_block_paragraphs" ADD CONSTRAINT "pages_blocks_conclave_about_block_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_conclave_about_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_about_block" ADD CONSTRAINT "pages_blocks_conclave_about_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_about_block" ADD CONSTRAINT "pages_blocks_conclave_about_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_agenda_block_agenda_items_speakers" ADD CONSTRAINT "pages_blocks_conclave_agenda_block_agenda_items_speakers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_conclave_agenda_block_agenda_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_agenda_block_agenda_items" ADD CONSTRAINT "pages_blocks_conclave_agenda_block_agenda_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_conclave_agenda_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_agenda_block" ADD CONSTRAINT "pages_blocks_conclave_agenda_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_speakers_block_speakers" ADD CONSTRAINT "pages_blocks_conclave_speakers_block_speakers_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_speakers_block_speakers" ADD CONSTRAINT "pages_blocks_conclave_speakers_block_speakers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_conclave_speakers_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_speakers_block" ADD CONSTRAINT "pages_blocks_conclave_speakers_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_five_pillars_block_pillars_paragraphs" ADD CONSTRAINT "pages_blocks_conclave_five_pillars_block_pillars_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_conclave_five_pillars_block_pillars"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_five_pillars_block_pillars" ADD CONSTRAINT "pages_blocks_conclave_five_pillars_block_pillars_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_five_pillars_block_pillars" ADD CONSTRAINT "pages_blocks_conclave_five_pillars_block_pillars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_conclave_five_pillars_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_five_pillars_block" ADD CONSTRAINT "pages_blocks_conclave_five_pillars_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_cta_block" ADD CONSTRAINT "pages_blocks_conclave_cta_block_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_cta_block" ADD CONSTRAINT "pages_blocks_conclave_cta_block_logo_image_id_media_id_fk" FOREIGN KEY ("logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_cta_block" ADD CONSTRAINT "pages_blocks_conclave_cta_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_partners_block_partners" ADD CONSTRAINT "pages_blocks_conclave_partners_block_partners_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_partners_block_partners" ADD CONSTRAINT "pages_blocks_conclave_partners_block_partners_description_id_media_id_fk" FOREIGN KEY ("description_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_partners_block_partners" ADD CONSTRAINT "pages_blocks_conclave_partners_block_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_conclave_partners_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_partners_block" ADD CONSTRAINT "pages_blocks_conclave_partners_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_gallery_block_gallery_items" ADD CONSTRAINT "pages_blocks_conclave_gallery_block_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_gallery_block_gallery_items" ADD CONSTRAINT "pages_blocks_conclave_gallery_block_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_conclave_gallery_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_gallery_block" ADD CONSTRAINT "pages_blocks_conclave_gallery_block_featured_event_image_id_media_id_fk" FOREIGN KEY ("featured_event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_conclave_gallery_block" ADD CONSTRAINT "pages_blocks_conclave_gallery_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_inner_page_hero_banner_block_breadcrumbs" ADD CONSTRAINT "pages_blocks_inner_page_hero_banner_block_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_inner_page_hero_banner_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_inner_page_hero_banner_block" ADD CONSTRAINT "pages_blocks_inner_page_hero_banner_block_banner_image_id_media_id_fk" FOREIGN KEY ("banner_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_inner_page_hero_banner_block" ADD CONSTRAINT "pages_blocks_inner_page_hero_banner_block_mobile_banner_image_id_media_id_fk" FOREIGN KEY ("mobile_banner_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_inner_page_hero_banner_block" ADD CONSTRAINT "pages_blocks_inner_page_hero_banner_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_faq_section_block_faq_list" ADD CONSTRAINT "pages_blocks_faq_section_block_faq_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_faq_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_faq_section_block" ADD CONSTRAINT "pages_blocks_faq_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_about_intro_block_paragraphs" ADD CONSTRAINT "pages_blocks_about_intro_block_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about_intro_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_about_intro_block" ADD CONSTRAINT "pages_blocks_about_intro_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "wsc_cols" ADD CONSTRAINT "wsc_cols_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about_welcome_super_chennai_block_new"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_about_welcome_super_chennai_block_new" ADD CONSTRAINT "pages_blocks_about_welcome_super_chennai_block_new_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_about_welcome_super_chennai_block_new" ADD CONSTRAINT "pages_blocks_about_welcome_super_chennai_block_new_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "vis_mis_c" ADD CONSTRAINT "vis_mis_c_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "vis_mis_c" ADD CONSTRAINT "vis_mis_c_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_vision_mission_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_vision_mission_block" ADD CONSTRAINT "pages_blocks_vision_mission_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "fnd_pts" ADD CONSTRAINT "fnd_pts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about_foundations_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_about_foundations_block" ADD CONSTRAINT "pages_blocks_about_foundations_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_about_foundations_block" ADD CONSTRAINT "pages_blocks_about_foundations_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_about_namma_chennai_block" ADD CONSTRAINT "pages_blocks_about_namma_chennai_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "wc_tabs" ADD CONSTRAINT "wc_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "wc_tabs" ADD CONSTRAINT "wc_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_about_why_chennai_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_about_why_chennai_block" ADD CONSTRAINT "pages_blocks_about_why_chennai_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "t_pts" ADD CONSTRAINT "t_pts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."t_info_secs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "t_info_secs" ADD CONSTRAINT "t_info_secs_icon_image_id_media_id_fk" FOREIGN KEY ("icon_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "t_info_secs" ADD CONSTRAINT "t_info_secs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_invest_page_border_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_invest_page_border_section" ADD CONSTRAINT "pages_blocks_invest_page_border_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ut_tabs" ADD CONSTRAINT "ut_tabs_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ut_tabs" ADD CONSTRAINT "ut_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_invest_page_tab_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_invest_page_tab_block" ADD CONSTRAINT "pages_blocks_invest_page_tab_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "inv_slides" ADD CONSTRAINT "inv_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "inv_slides" ADD CONSTRAINT "inv_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_invest_page_slider_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_invest_page_slider_block" ADD CONSTRAINT "pages_blocks_invest_page_slider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "inn_slides" ADD CONSTRAINT "inn_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "inn_slides" ADD CONSTRAINT "inn_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_innovate_page_slider_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_innovate_page_slider_block" ADD CONSTRAINT "pages_blocks_innovate_page_slider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "info_items" ADD CONSTRAINT "info_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "info_items" ADD CONSTRAINT "info_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_innovate_info_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_innovate_info_section_block" ADD CONSTRAINT "pages_blocks_innovate_info_section_block_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_innovate_info_section_block" ADD CONSTRAINT "pages_blocks_innovate_info_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "iwc_li" ADD CONSTRAINT "iwc_li_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."iwc_cb"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "iwc_cb" ADD CONSTRAINT "iwc_cb_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_imagewith_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_imagewith_content" ADD CONSTRAINT "pages_blocks_imagewith_content_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_imagewith_content" ADD CONSTRAINT "pages_blocks_imagewith_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tp_p" ADD CONSTRAINT "tp_p_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image_without_content_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tp_bp" ADD CONSTRAINT "tp_bp_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tp_cards"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tp_cards" ADD CONSTRAINT "tp_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_image_without_content_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image_without_content_block" ADD CONSTRAINT "pages_blocks_image_without_content_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ev_h" ADD CONSTRAINT "ev_h_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_table_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ev_c" ADD CONSTRAINT "ev_c_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ev_r"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ev_r" ADD CONSTRAINT "ev_r_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_table_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_table_section_block" ADD CONSTRAINT "pages_blocks_table_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "in_sld_c" ADD CONSTRAINT "in_sld_c_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "in_sld_c" ADD CONSTRAINT "in_sld_c_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_inner_page_slider_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_inner_page_slider_block" ADD CONSTRAINT "pages_blocks_inner_page_slider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_gallery_slider_with_popup_block" ADD CONSTRAINT "pages_blocks_gallery_slider_with_popup_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "l_img_r_sec" ADD CONSTRAINT "l_img_r_sec_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "l_img_r_sec" ADD CONSTRAINT "l_img_r_sec_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "bs_items" ADD CONSTRAINT "bs_items_imgs_id_media_id_fk" FOREIGN KEY ("imgs_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "bs_items" ADD CONSTRAINT "bs_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."bs_sec"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "bs_sec" ADD CONSTRAINT "bs_sec_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "bs_sec" ADD CONSTRAINT "bs_sec_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_benefit_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_benefit_sections_block" ADD CONSTRAINT "pages_blocks_benefit_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "wi_paras" ADD CONSTRAINT "wi_paras_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_intro_pink_text_with_content_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_intro_pink_text_with_content_block" ADD CONSTRAINT "pages_blocks_intro_pink_text_with_content_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "vils_p" ADD CONSTRAINT "vils_p_imgs_id_media_id_fk" FOREIGN KEY ("imgs_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "vils_p" ADD CONSTRAINT "vils_p_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."vils_t"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "vils_t" ADD CONSTRAINT "vils_t_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."vils_s"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "vils_s" ADD CONSTRAINT "vils_s_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "vils_s" ADD CONSTRAINT "vils_s_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."vils_b"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "vils_b" ADD CONSTRAINT "vils_b_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nc_locs" ADD CONSTRAINT "nc_locs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nc_plcs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nc_plcs" ADD CONSTRAINT "nc_plcs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."nc_data"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "nc_data" ADD CONSTRAINT "nc_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_work_network_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_work_network_section_block" ADD CONSTRAINT "pages_blocks_work_network_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "wpis_bp" ADD CONSTRAINT "wpis_bp_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."wpis_p"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "wpis_p" ADD CONSTRAINT "wpis_p_imgs_id_media_id_fk" FOREIGN KEY ("imgs_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "wpis_p" ADD CONSTRAINT "wpis_p_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."wpis_s"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "wpis_s" ADD CONSTRAINT "wpis_s_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "wpis_s" ADD CONSTRAINT "wpis_s_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."wpis_b"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "wpis_b" ADD CONSTRAINT "wpis_b_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hch_loc" ADD CONSTRAINT "hch_loc_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hch_plc"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hch_plc" ADD CONSTRAINT "hch_plc_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hch_cat"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "hch_cat" ADD CONSTRAINT "hch_cat_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_health_care_hospitals_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_health_care_hospitals_block" ADD CONSTRAINT "pages_blocks_health_care_hospitals_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cl_tpts" ADD CONSTRAINT "cl_tpts_imgs_id_media_id_fk" FOREIGN KEY ("imgs_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cl_tpts" ADD CONSTRAINT "cl_tpts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cl_tnt"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cl_tnt" ADD CONSTRAINT "cl_tnt_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cl_img"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cl_img" ADD CONSTRAINT "cl_img_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cl_img" ADD CONSTRAINT "cl_img_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."clb"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cl_dpts" ADD CONSTRAINT "cl_dpts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cl_dtl"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cl_dtl" ADD CONSTRAINT "cl_dtl_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."clb"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "clb" ADD CONSTRAINT "clb_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ttd_pts" ADD CONSTRAINT "ttd_pts_imgs_id_media_id_fk" FOREIGN KEY ("imgs_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ttd_pts" ADD CONSTRAINT "ttd_pts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ttd_tnt"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ttd_tnt" ADD CONSTRAINT "ttd_tnt_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ttd_sec"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ttd_sec" ADD CONSTRAINT "ttd_sec_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ttd_sec" ADD CONSTRAINT "ttd_sec_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ttd_blk"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ttd_blk" ADD CONSTRAINT "ttd_blk_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cn_nbh" ADD CONSTRAINT "cn_nbh_imgs_id_media_id_fk" FOREIGN KEY ("imgs_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cn_nbh" ADD CONSTRAINT "cn_nbh_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cn_sec"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cn_sec" ADD CONSTRAINT "cn_sec_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cn_sec" ADD CONSTRAINT "cn_sec_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cnb"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cnb" ADD CONSTRAINT "cnb_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "qol_sec" ADD CONSTRAINT "qol_sec_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "qol_sec" ADD CONSTRAINT "qol_sec_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."qol_blk"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "qol_blk" ADD CONSTRAINT "qol_blk_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "vwl" ADD CONSTRAINT "vwl_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."vwp"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "vwp" ADD CONSTRAINT "vwp_imgs_id_media_id_fk" FOREIGN KEY ("imgs_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "vwp" ADD CONSTRAINT "vwp_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."vwt"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "vwt" ADD CONSTRAINT "vwt_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."vws"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "vws" ADD CONSTRAINT "vws_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "vws" ADD CONSTRAINT "vws_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."vw_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "vw_block" ADD CONSTRAINT "vw_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cnt_add" ADD CONSTRAINT "cnt_add_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cnt_blk"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cnt_blk" ADD CONSTRAINT "cnt_blk_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cnt_blk" ADD CONSTRAINT "cnt_blk_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cn_tabs" ADD CONSTRAINT "cn_tabs_tab_icon_id_media_id_fk" FOREIGN KEY ("tab_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cn_tabs" ADD CONSTRAINT "cn_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cn_apps_blk"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cn_asgn_tabs" ADD CONSTRAINT "cn_asgn_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cn_apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cn_feats" ADD CONSTRAINT "cn_feats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cn_apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cn_svcs" ADD CONSTRAINT "cn_svcs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cn_apps"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cn_apps" ADD CONSTRAINT "cn_apps_app_image_id_media_id_fk" FOREIGN KEY ("app_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cn_apps" ADD CONSTRAINT "cn_apps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cn_apps_blk"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cn_apps_blk" ADD CONSTRAINT "cn_apps_blk_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "loc_arr" ADD CONSTRAINT "loc_arr_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plc_arr"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "plc_arr" ADD CONSTRAINT "plc_arr_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cat_arr"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cat_arr" ADD CONSTRAINT "cat_arr_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reg_arr"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "reg_arr" ADD CONSTRAINT "reg_arr_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "reg_arr" ADD CONSTRAINT "reg_arr_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."plc_sec_blk"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "plc_sec_blk" ADD CONSTRAINT "plc_sec_blk_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image_title_block" ADD CONSTRAINT "pages_blocks_image_title_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_image_title_block" ADD CONSTRAINT "pages_blocks_image_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_info_section_block_points" ADD CONSTRAINT "pages_blocks_info_section_block_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_info_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_info_section_block" ADD CONSTRAINT "pages_blocks_info_section_block_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_info_section_block" ADD CONSTRAINT "pages_blocks_info_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_table_block_headers" ADD CONSTRAINT "pages_blocks_table_block_headers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_table_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_table_block_rows_cells" ADD CONSTRAINT "pages_blocks_table_block_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_table_block_rows"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_table_block_rows" ADD CONSTRAINT "pages_blocks_table_block_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_table_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_table_block" ADD CONSTRAINT "pages_blocks_table_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_category_block_items_locations" ADD CONSTRAINT "pages_blocks_category_block_items_locations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_category_block_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_category_block_items" ADD CONSTRAINT "pages_blocks_category_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_category_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_category_block" ADD CONSTRAINT "pages_blocks_category_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_llp_block_main_tabs_regions" ADD CONSTRAINT "pages_blocks_llp_block_main_tabs_regions_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_llp_block_main_tabs_regions" ADD CONSTRAINT "pages_blocks_llp_block_main_tabs_regions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_llp_block_main_tabs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_llp_block_main_tabs" ADD CONSTRAINT "pages_blocks_llp_block_main_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_llp_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_llp_block" ADD CONSTRAINT "pages_blocks_llp_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cards" ADD CONSTRAINT "cards_card_media_id_media_id_fk" FOREIGN KEY ("card_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cards" ADD CONSTRAINT "cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cats"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cats" ADD CONSTRAINT "cats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."chenz_inv_2026"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "chenz_inv_2026" ADD CONSTRAINT "chenz_inv_2026_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ev_lst_2026_events_cards2026" ADD CONSTRAINT "ev_lst_2026_events_cards2026_card_media_id_media_id_fk" FOREIGN KEY ("card_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ev_lst_2026_events_cards2026" ADD CONSTRAINT "ev_lst_2026_events_cards2026_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ev_lst_2026"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ev_lst_2026" ADD CONSTRAINT "ev_lst_2026_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "infra_boom_2026" ADD CONSTRAINT "infra_boom_2026_pdf_file_id_media_id_fk" FOREIGN KEY ("pdf_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "infra_boom_2026" ADD CONSTRAINT "infra_boom_2026_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_manifesto_section_block_slider_images" ADD CONSTRAINT "pages_blocks_manifesto_section_block_slider_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_manifesto_section_block_slider_images" ADD CONSTRAINT "pages_blocks_manifesto_section_block_slider_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_manifesto_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_manifesto_section_block" ADD CONSTRAINT "pages_blocks_manifesto_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tvc_2026_tvc_cards" ADD CONSTRAINT "tvc_2026_tvc_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tvc_2026_tvc_cards" ADD CONSTRAINT "tvc_2026_tvc_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."tvc_2026"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "tvc_2026" ADD CONSTRAINT "tvc_2026_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media_coverage_main_page_news_article" ADD CONSTRAINT "media_coverage_main_page_news_article_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media_coverage_main_page_news_article" ADD CONSTRAINT "media_coverage_main_page_news_article_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media_coverage_main_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media_coverage_main_page_news_photos" ADD CONSTRAINT "media_coverage_main_page_news_photos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media_coverage_main_page_news_photos" ADD CONSTRAINT "media_coverage_main_page_news_photos_image1_id_media_id_fk" FOREIGN KEY ("image1_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media_coverage_main_page_news_photos" ADD CONSTRAINT "media_coverage_main_page_news_photos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media_coverage_main_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media_coverage_main_page_youtube_channel" ADD CONSTRAINT "media_coverage_main_page_youtube_channel_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media_coverage_main_page_youtube_channel" ADD CONSTRAINT "media_coverage_main_page_youtube_channel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media_coverage_main_page"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "media_coverage_main_page" ADD CONSTRAINT "media_coverage_main_page_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_metro_madras_block_paragraphs" ADD CONSTRAINT "pages_blocks_metro_madras_block_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_metro_madras_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_metro_madras_block_features" ADD CONSTRAINT "pages_blocks_metro_madras_block_features_custom_icon_id_media_id_fk" FOREIGN KEY ("custom_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_metro_madras_block_features" ADD CONSTRAINT "pages_blocks_metro_madras_block_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_metro_madras_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_metro_madras_block" ADD CONSTRAINT "pages_blocks_metro_madras_block_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_metro_madras_block" ADD CONSTRAINT "pages_blocks_metro_madras_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_metro_the_details_block_details" ADD CONSTRAINT "pages_blocks_metro_the_details_block_details_custom_icon_id_media_id_fk" FOREIGN KEY ("custom_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_metro_the_details_block_details" ADD CONSTRAINT "pages_blocks_metro_the_details_block_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_metro_the_details_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_metro_the_details_block" ADD CONSTRAINT "pages_blocks_metro_the_details_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_metro_experience_block_highlights" ADD CONSTRAINT "pages_blocks_metro_experience_block_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_metro_experience_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_metro_experience_block" ADD CONSTRAINT "pages_blocks_metro_experience_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_metro_guidelines_block_guidelines" ADD CONSTRAINT "pages_blocks_metro_guidelines_block_guidelines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_metro_guidelines_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_metro_guidelines_block" ADD CONSTRAINT "pages_blocks_metro_guidelines_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_metro_registration_block" ADD CONSTRAINT "pages_blocks_metro_registration_block_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_metro_registration_block" ADD CONSTRAINT "pages_blocks_metro_registration_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "kf_hero_block" ADD CONSTRAINT "kf_hero_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_kite_festival_about" ADD CONSTRAINT "pages_blocks_kite_festival_about_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_kite_festival_about" ADD CONSTRAINT "pages_blocks_kite_festival_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_kite_festival_highlights_highlights_list" ADD CONSTRAINT "pages_blocks_kite_festival_highlights_highlights_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_blocks_kite_festival_highlights"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_blocks_kite_festival_highlights" ADD CONSTRAINT "pages_blocks_kite_festival_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "kf_new_faqs_list" ADD CONSTRAINT "kf_new_faqs_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."kf_new_faq_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "kf_new_faq_block" ADD CONSTRAINT "kf_new_faq_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages" ADD CONSTRAINT "pages_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_links_link_content" ADD CONSTRAINT "_pages_v_version_hero_links_link_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_hero_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_links_link_gallery" ADD CONSTRAINT "_pages_v_version_hero_links_link_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_links_link_gallery" ADD CONSTRAINT "_pages_v_version_hero_links_link_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_hero_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_links" ADD CONSTRAINT "_pages_v_version_hero_links_link_content_image_id_media_id_fk" FOREIGN KEY ("link_content_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_version_hero_links" ADD CONSTRAINT "_pages_v_version_hero_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_explore_cards" ADD CONSTRAINT "_pages_v_blocks_explore_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_explore_cards" ADD CONSTRAINT "_pages_v_blocks_explore_cards_page_id_visits_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."visits"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_explore_cards" ADD CONSTRAINT "_pages_v_blocks_explore_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_explore"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_explore" ADD CONSTRAINT "_pages_v_blocks_explore_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_fun_chennai_cards" ADD CONSTRAINT "_pages_v_blocks_fun_chennai_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_fun_chennai_cards" ADD CONSTRAINT "_pages_v_blocks_fun_chennai_cards_page_id_visits_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."visits"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_fun_chennai_cards" ADD CONSTRAINT "_pages_v_blocks_fun_chennai_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_fun_chennai"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_fun_chennai" ADD CONSTRAINT "_pages_v_blocks_fun_chennai_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_startup_chennai_images" ADD CONSTRAINT "_pages_v_blocks_startup_chennai_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_startup_chennai_images" ADD CONSTRAINT "_pages_v_blocks_startup_chennai_images_page_id_investments_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."investments"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_startup_chennai_images" ADD CONSTRAINT "_pages_v_blocks_startup_chennai_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_startup_chennai"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_startup_chennai" ADD CONSTRAINT "_pages_v_blocks_startup_chennai_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_chennai_investments" ADD CONSTRAINT "_pages_v_blocks_chennai_investments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_social_reel_slider" ADD CONSTRAINT "_pages_v_blocks_social_reel_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_became_a_volunteer" ADD CONSTRAINT "_pages_v_blocks_became_a_volunteer_page_id_pages_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_became_a_volunteer" ADD CONSTRAINT "_pages_v_blocks_became_a_volunteer_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_events_calendar" ADD CONSTRAINT "_pages_v_blocks_events_calendar_page_id_pages_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_events_calendar" ADD CONSTRAINT "_pages_v_blocks_events_calendar_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_slider_block_slides" ADD CONSTRAINT "_pages_v_blocks_hero_slider_block_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_slider_block_slides" ADD CONSTRAINT "_pages_v_blocks_hero_slider_block_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_hero_slider_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_hero_slider_block" ADD CONSTRAINT "_pages_v_blocks_hero_slider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_visitcategory_items" ADD CONSTRAINT "_pages_v_blocks_visitcategory_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_visitcategory_items" ADD CONSTRAINT "_pages_v_blocks_visitcategory_items_page_id_visits_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."visits"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_visitcategory_items" ADD CONSTRAINT "_pages_v_blocks_visitcategory_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_visitcategory"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_visitcategory" ADD CONSTRAINT "_pages_v_blocks_visitcategory_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_zig_zag_content_sections" ADD CONSTRAINT "_pages_v_blocks_zig_zag_content_sections_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_zig_zag_content_sections" ADD CONSTRAINT "_pages_v_blocks_zig_zag_content_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_zig_zag_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_zig_zag_content" ADD CONSTRAINT "_pages_v_blocks_zig_zag_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_volunteer_became_section" ADD CONSTRAINT "_pages_v_blocks_volunteer_became_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_main_page_banner" ADD CONSTRAINT "_pages_v_blocks_main_page_banner_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_main_page_banner" ADD CONSTRAINT "_pages_v_blocks_main_page_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_intro_text_block" ADD CONSTRAINT "_pages_v_blocks_intro_text_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_global_search_filters_options" ADD CONSTRAINT "_pages_v_blocks_global_search_filters_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_global_search_filters"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_global_search_filters" ADD CONSTRAINT "_pages_v_blocks_global_search_filters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_global_search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_global_search" ADD CONSTRAINT "_pages_v_blocks_global_search_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_form_popup" ADD CONSTRAINT "_pages_v_blocks_form_popup_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_infography_food_items" ADD CONSTRAINT "_pages_v_blocks_infography_food_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_infography_food_items" ADD CONSTRAINT "_pages_v_blocks_infography_food_items_page_id_visits_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."visits"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_infography_food_items" ADD CONSTRAINT "_pages_v_blocks_infography_food_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_infography"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_infography" ADD CONSTRAINT "_pages_v_blocks_infography_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_two_column_feature_block" ADD CONSTRAINT "_pages_v_blocks_two_column_feature_block_tech_image_id_media_id_fk" FOREIGN KEY ("tech_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_two_column_feature_block" ADD CONSTRAINT "_pages_v_blocks_two_column_feature_block_edu_image_id_media_id_fk" FOREIGN KEY ("edu_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_two_column_feature_block" ADD CONSTRAINT "_pages_v_blocks_two_column_feature_block_tech_link_page_id_pages_id_fk" FOREIGN KEY ("tech_link_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_two_column_feature_block" ADD CONSTRAINT "_pages_v_blocks_two_column_feature_block_edu_link_page_id_pages_id_fk" FOREIGN KEY ("edu_link_page_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_two_column_feature_block" ADD CONSTRAINT "_pages_v_blocks_two_column_feature_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_utilities_tabs" ADD CONSTRAINT "_pages_v_blocks_utilities_tabs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_utilities_tabs" ADD CONSTRAINT "_pages_v_blocks_utilities_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_utilities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_utilities" ADD CONSTRAINT "_pages_v_blocks_utilities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content_zone_carousel_cards" ADD CONSTRAINT "_pages_v_blocks_content_zone_carousel_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content_zone_carousel_cards" ADD CONSTRAINT "_pages_v_blocks_content_zone_carousel_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_content_zone_carousel"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_content_zone_carousel" ADD CONSTRAINT "_pages_v_blocks_content_zone_carousel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_allevents" ADD CONSTRAINT "_pages_v_blocks_allevents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_live_intror_section" ADD CONSTRAINT "_pages_v_blocks_live_intror_section_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_live_intror_section" ADD CONSTRAINT "_pages_v_blocks_live_intror_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_chennai_life_essentials_essentials" ADD CONSTRAINT "_pages_v_blocks_chennai_life_essentials_essentials_page_id_live_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."live"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_chennai_life_essentials_essentials" ADD CONSTRAINT "_pages_v_blocks_chennai_life_essentials_essentials_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_chennai_life_essentials_essentials" ADD CONSTRAINT "_pages_v_blocks_chennai_life_essentials_essentials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_chennai_life_essentials"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_chennai_life_essentials" ADD CONSTRAINT "_pages_v_blocks_chennai_life_essentials_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_investment_category_list_items" ADD CONSTRAINT "_pages_v_blocks_investment_category_list_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_investment_category_list_items" ADD CONSTRAINT "_pages_v_blocks_investment_category_list_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_investment_category_list"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_investment_category_list" ADD CONSTRAINT "_pages_v_blocks_investment_category_list_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_investment_category_list" ADD CONSTRAINT "_pages_v_blocks_investment_category_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_innovate_slider" ADD CONSTRAINT "_pages_v_blocks_innovate_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_hover_image_section_items" ADD CONSTRAINT "_pages_v_blocks_text_hover_image_section_items_page_id_work_id_fk" FOREIGN KEY ("page_id") REFERENCES "public"."work"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_hover_image_section_items" ADD CONSTRAINT "_pages_v_blocks_text_hover_image_section_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_hover_image_section_items" ADD CONSTRAINT "_pages_v_blocks_text_hover_image_section_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_text_hover_image_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_text_hover_image_section" ADD CONSTRAINT "_pages_v_blocks_text_hover_image_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_trending_chennai_slider" ADD CONSTRAINT "_pages_v_blocks_trending_chennai_slider_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_second_section_first_column" ADD CONSTRAINT "_pages_v_blocks_second_section_first_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_second_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_second_section_second_column" ADD CONSTRAINT "_pages_v_blocks_second_section_second_column_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_second_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_second_section" ADD CONSTRAINT "_pages_v_blocks_second_section_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_second_section" ADD CONSTRAINT "_pages_v_blocks_second_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_popup_banner" ADD CONSTRAINT "_pages_v_blocks_popup_banner_popup_image_id_media_id_fk" FOREIGN KEY ("popup_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_popup_banner" ADD CONSTRAINT "_pages_v_blocks_popup_banner_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cricket_score_block_points_table" ADD CONSTRAINT "_pages_v_blocks_cricket_score_block_points_table_team_logo_id_media_id_fk" FOREIGN KEY ("team_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cricket_score_block_points_table" ADD CONSTRAINT "_pages_v_blocks_cricket_score_block_points_table_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_cricket_score_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cricket_score_block" ADD CONSTRAINT "_pages_v_blocks_cricket_score_block_i_p_limage_id_media_id_fk" FOREIGN KEY ("i_p_limage_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_cricket_score_block" ADD CONSTRAINT "_pages_v_blocks_cricket_score_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_super_chennai_block_meta_items" ADD CONSTRAINT "_pages_v_blocks_conclave_super_chennai_block_meta_items_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_super_chennai_block_meta_items" ADD CONSTRAINT "_pages_v_blocks_conclave_super_chennai_block_meta_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_conclave_super_chennai_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_super_chennai_block" ADD CONSTRAINT "_pages_v_blocks_conclave_super_chennai_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_about_block_paragraphs" ADD CONSTRAINT "_pages_v_blocks_conclave_about_block_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_conclave_about_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_about_block" ADD CONSTRAINT "_pages_v_blocks_conclave_about_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_about_block" ADD CONSTRAINT "_pages_v_blocks_conclave_about_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_agenda_block_agenda_items_speakers" ADD CONSTRAINT "_pages_v_blocks_conclave_agenda_block_agenda_items_speakers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_conclave_agenda_block_agenda_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_agenda_block_agenda_items" ADD CONSTRAINT "_pages_v_blocks_conclave_agenda_block_agenda_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_conclave_agenda_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_agenda_block" ADD CONSTRAINT "_pages_v_blocks_conclave_agenda_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_speakers_block_speakers" ADD CONSTRAINT "_pages_v_blocks_conclave_speakers_block_speakers_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_speakers_block_speakers" ADD CONSTRAINT "_pages_v_blocks_conclave_speakers_block_speakers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_conclave_speakers_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_speakers_block" ADD CONSTRAINT "_pages_v_blocks_conclave_speakers_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_five_pillars_block_pillars_paragraphs" ADD CONSTRAINT "_pages_v_blocks_conclave_five_pillars_block_pillars_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_conclave_five_pillars_block_pillars"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_five_pillars_block_pillars" ADD CONSTRAINT "_pages_v_blocks_conclave_five_pillars_block_pillars_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_five_pillars_block_pillars" ADD CONSTRAINT "_pages_v_blocks_conclave_five_pillars_block_pillars_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_conclave_five_pillars_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_five_pillars_block" ADD CONSTRAINT "_pages_v_blocks_conclave_five_pillars_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_cta_block" ADD CONSTRAINT "_pages_v_blocks_conclave_cta_block_background_image_id_media_id_fk" FOREIGN KEY ("background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_cta_block" ADD CONSTRAINT "_pages_v_blocks_conclave_cta_block_logo_image_id_media_id_fk" FOREIGN KEY ("logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_cta_block" ADD CONSTRAINT "_pages_v_blocks_conclave_cta_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_partners_block_partners" ADD CONSTRAINT "_pages_v_blocks_conclave_partners_block_partners_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_partners_block_partners" ADD CONSTRAINT "_pages_v_blocks_conclave_partners_block_partners_description_id_media_id_fk" FOREIGN KEY ("description_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_partners_block_partners" ADD CONSTRAINT "_pages_v_blocks_conclave_partners_block_partners_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_conclave_partners_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_partners_block" ADD CONSTRAINT "_pages_v_blocks_conclave_partners_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_gallery_block_gallery_items" ADD CONSTRAINT "_pages_v_blocks_conclave_gallery_block_gallery_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_gallery_block_gallery_items" ADD CONSTRAINT "_pages_v_blocks_conclave_gallery_block_gallery_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_conclave_gallery_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_gallery_block" ADD CONSTRAINT "_pages_v_blocks_conclave_gallery_block_featured_event_image_id_media_id_fk" FOREIGN KEY ("featured_event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_conclave_gallery_block" ADD CONSTRAINT "_pages_v_blocks_conclave_gallery_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_inner_page_hero_banner_block_breadcrumbs" ADD CONSTRAINT "_pages_v_blocks_inner_page_hero_banner_block_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_inner_page_hero_banner_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_inner_page_hero_banner_block" ADD CONSTRAINT "_pages_v_blocks_inner_page_hero_banner_block_banner_image_id_media_id_fk" FOREIGN KEY ("banner_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_inner_page_hero_banner_block" ADD CONSTRAINT "_pages_v_blocks_inner_page_hero_banner_block_mobile_banner_image_id_media_id_fk" FOREIGN KEY ("mobile_banner_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_inner_page_hero_banner_block" ADD CONSTRAINT "_pages_v_blocks_inner_page_hero_banner_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_faq_section_block_faq_list" ADD CONSTRAINT "_pages_v_blocks_faq_section_block_faq_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_faq_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_faq_section_block" ADD CONSTRAINT "_pages_v_blocks_faq_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_about_intro_block_paragraphs" ADD CONSTRAINT "_pages_v_blocks_about_intro_block_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_about_intro_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_about_intro_block" ADD CONSTRAINT "_pages_v_blocks_about_intro_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_wsc_cols_v" ADD CONSTRAINT "_wsc_cols_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_about_welcome_super_chennai_block_new"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_about_welcome_super_chennai_block_new" ADD CONSTRAINT "_pages_v_blocks_about_welcome_super_chennai_block_new_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_about_welcome_super_chennai_block_new" ADD CONSTRAINT "_pages_v_blocks_about_welcome_super_chennai_block_new_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_vis_mis_c_v" ADD CONSTRAINT "_vis_mis_c_v_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_vis_mis_c_v" ADD CONSTRAINT "_vis_mis_c_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_vision_mission_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_vision_mission_block" ADD CONSTRAINT "_pages_v_blocks_vision_mission_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_fnd_pts_v" ADD CONSTRAINT "_fnd_pts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_about_foundations_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_about_foundations_block" ADD CONSTRAINT "_pages_v_blocks_about_foundations_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_about_foundations_block" ADD CONSTRAINT "_pages_v_blocks_about_foundations_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_about_namma_chennai_block" ADD CONSTRAINT "_pages_v_blocks_about_namma_chennai_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_wc_tabs_v" ADD CONSTRAINT "_wc_tabs_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_wc_tabs_v" ADD CONSTRAINT "_wc_tabs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_about_why_chennai_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_about_why_chennai_block" ADD CONSTRAINT "_pages_v_blocks_about_why_chennai_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_t_pts_v" ADD CONSTRAINT "_t_pts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_t_info_secs_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_t_info_secs_v" ADD CONSTRAINT "_t_info_secs_v_icon_image_id_media_id_fk" FOREIGN KEY ("icon_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_t_info_secs_v" ADD CONSTRAINT "_t_info_secs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_invest_page_border_section"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_invest_page_border_section" ADD CONSTRAINT "_pages_v_blocks_invest_page_border_section_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ut_tabs_v" ADD CONSTRAINT "_ut_tabs_v_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ut_tabs_v" ADD CONSTRAINT "_ut_tabs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_invest_page_tab_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_invest_page_tab_block" ADD CONSTRAINT "_pages_v_blocks_invest_page_tab_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_inv_slides_v" ADD CONSTRAINT "_inv_slides_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_inv_slides_v" ADD CONSTRAINT "_inv_slides_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_invest_page_slider_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_invest_page_slider_block" ADD CONSTRAINT "_pages_v_blocks_invest_page_slider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_inn_slides_v" ADD CONSTRAINT "_inn_slides_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_inn_slides_v" ADD CONSTRAINT "_inn_slides_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_innovate_page_slider_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_innovate_page_slider_block" ADD CONSTRAINT "_pages_v_blocks_innovate_page_slider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_info_items_v" ADD CONSTRAINT "_info_items_v_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_info_items_v" ADD CONSTRAINT "_info_items_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_innovate_info_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_innovate_info_section_block" ADD CONSTRAINT "_pages_v_blocks_innovate_info_section_block_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_innovate_info_section_block" ADD CONSTRAINT "_pages_v_blocks_innovate_info_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_iwc_li_v" ADD CONSTRAINT "_iwc_li_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_iwc_cb_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_iwc_cb_v" ADD CONSTRAINT "_iwc_cb_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_imagewith_content"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_imagewith_content" ADD CONSTRAINT "_pages_v_blocks_imagewith_content_main_image_id_media_id_fk" FOREIGN KEY ("main_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_imagewith_content" ADD CONSTRAINT "_pages_v_blocks_imagewith_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_tp_p_v" ADD CONSTRAINT "_tp_p_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image_without_content_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_tp_bp_v" ADD CONSTRAINT "_tp_bp_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_tp_cards_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_tp_cards_v" ADD CONSTRAINT "_tp_cards_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_image_without_content_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_image_without_content_block" ADD CONSTRAINT "_pages_v_blocks_image_without_content_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ev_h_v" ADD CONSTRAINT "_ev_h_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_table_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ev_c_v" ADD CONSTRAINT "_ev_c_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ev_r_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ev_r_v" ADD CONSTRAINT "_ev_r_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_table_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_table_section_block" ADD CONSTRAINT "_pages_v_blocks_table_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_in_sld_c_v" ADD CONSTRAINT "_in_sld_c_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_in_sld_c_v" ADD CONSTRAINT "_in_sld_c_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_inner_page_slider_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_inner_page_slider_block" ADD CONSTRAINT "_pages_v_blocks_inner_page_slider_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_gallery_slider_with_popup_block" ADD CONSTRAINT "_pages_v_blocks_gallery_slider_with_popup_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_l_img_r_sec_v" ADD CONSTRAINT "_l_img_r_sec_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_l_img_r_sec_v" ADD CONSTRAINT "_l_img_r_sec_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_bs_items_v" ADD CONSTRAINT "_bs_items_v_imgs_id_media_id_fk" FOREIGN KEY ("imgs_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_bs_items_v" ADD CONSTRAINT "_bs_items_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_bs_sec_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_bs_sec_v" ADD CONSTRAINT "_bs_sec_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_bs_sec_v" ADD CONSTRAINT "_bs_sec_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_benefit_sections_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_benefit_sections_block" ADD CONSTRAINT "_pages_v_blocks_benefit_sections_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_wi_paras_v" ADD CONSTRAINT "_wi_paras_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_intro_pink_text_with_content_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_intro_pink_text_with_content_block" ADD CONSTRAINT "_pages_v_blocks_intro_pink_text_with_content_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_vils_p_v" ADD CONSTRAINT "_vils_p_v_imgs_id_media_id_fk" FOREIGN KEY ("imgs_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_vils_p_v" ADD CONSTRAINT "_vils_p_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_vils_t_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_vils_t_v" ADD CONSTRAINT "_vils_t_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_vils_s_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_vils_s_v" ADD CONSTRAINT "_vils_s_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_vils_s_v" ADD CONSTRAINT "_vils_s_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_vils_b_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_vils_b_v" ADD CONSTRAINT "_vils_b_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_nc_locs_v" ADD CONSTRAINT "_nc_locs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_nc_plcs_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_nc_plcs_v" ADD CONSTRAINT "_nc_plcs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_nc_data_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_nc_data_v" ADD CONSTRAINT "_nc_data_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_work_network_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_work_network_section_block" ADD CONSTRAINT "_pages_v_blocks_work_network_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_wpis_bp_v" ADD CONSTRAINT "_wpis_bp_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_wpis_p_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_wpis_p_v" ADD CONSTRAINT "_wpis_p_v_imgs_id_media_id_fk" FOREIGN KEY ("imgs_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_wpis_p_v" ADD CONSTRAINT "_wpis_p_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_wpis_s_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_wpis_s_v" ADD CONSTRAINT "_wpis_s_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_wpis_s_v" ADD CONSTRAINT "_wpis_s_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_wpis_b_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_wpis_b_v" ADD CONSTRAINT "_wpis_b_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_hch_loc_v" ADD CONSTRAINT "_hch_loc_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hch_plc_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_hch_plc_v" ADD CONSTRAINT "_hch_plc_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hch_cat_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_hch_cat_v" ADD CONSTRAINT "_hch_cat_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_health_care_hospitals_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_health_care_hospitals_block" ADD CONSTRAINT "_pages_v_blocks_health_care_hospitals_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cl_tpts_v" ADD CONSTRAINT "_cl_tpts_v_imgs_id_media_id_fk" FOREIGN KEY ("imgs_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cl_tpts_v" ADD CONSTRAINT "_cl_tpts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cl_tnt_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cl_tnt_v" ADD CONSTRAINT "_cl_tnt_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cl_img_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cl_img_v" ADD CONSTRAINT "_cl_img_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cl_img_v" ADD CONSTRAINT "_cl_img_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_clb_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cl_dpts_v" ADD CONSTRAINT "_cl_dpts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cl_dtl_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cl_dtl_v" ADD CONSTRAINT "_cl_dtl_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_clb_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_clb_v" ADD CONSTRAINT "_clb_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ttd_pts_v" ADD CONSTRAINT "_ttd_pts_v_imgs_id_media_id_fk" FOREIGN KEY ("imgs_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ttd_pts_v" ADD CONSTRAINT "_ttd_pts_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ttd_tnt_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ttd_tnt_v" ADD CONSTRAINT "_ttd_tnt_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ttd_sec_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ttd_sec_v" ADD CONSTRAINT "_ttd_sec_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ttd_sec_v" ADD CONSTRAINT "_ttd_sec_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ttd_blk_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ttd_blk_v" ADD CONSTRAINT "_ttd_blk_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cn_nbh_v" ADD CONSTRAINT "_cn_nbh_v_imgs_id_media_id_fk" FOREIGN KEY ("imgs_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cn_nbh_v" ADD CONSTRAINT "_cn_nbh_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cn_sec_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cn_sec_v" ADD CONSTRAINT "_cn_sec_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cn_sec_v" ADD CONSTRAINT "_cn_sec_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cnb_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cnb_v" ADD CONSTRAINT "_cnb_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_qol_sec_v" ADD CONSTRAINT "_qol_sec_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_qol_sec_v" ADD CONSTRAINT "_qol_sec_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_qol_blk_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_qol_blk_v" ADD CONSTRAINT "_qol_blk_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_vwl_v" ADD CONSTRAINT "_vwl_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_vwp_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_vwp_v" ADD CONSTRAINT "_vwp_v_imgs_id_media_id_fk" FOREIGN KEY ("imgs_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_vwp_v" ADD CONSTRAINT "_vwp_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_vwt_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_vwt_v" ADD CONSTRAINT "_vwt_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_vws_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_vws_v" ADD CONSTRAINT "_vws_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_vws_v" ADD CONSTRAINT "_vws_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_vw_block_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_vw_block_v" ADD CONSTRAINT "_vw_block_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cnt_add_v" ADD CONSTRAINT "_cnt_add_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cnt_blk_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cnt_blk_v" ADD CONSTRAINT "_cnt_blk_v_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cnt_blk_v" ADD CONSTRAINT "_cnt_blk_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cn_tabs_v" ADD CONSTRAINT "_cn_tabs_v_tab_icon_id_media_id_fk" FOREIGN KEY ("tab_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cn_tabs_v" ADD CONSTRAINT "_cn_tabs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cn_apps_blk_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cn_asgn_tabs_v" ADD CONSTRAINT "_cn_asgn_tabs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cn_apps_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cn_feats_v" ADD CONSTRAINT "_cn_feats_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cn_apps_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cn_svcs_v" ADD CONSTRAINT "_cn_svcs_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cn_apps_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cn_apps_v" ADD CONSTRAINT "_cn_apps_v_app_image_id_media_id_fk" FOREIGN KEY ("app_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cn_apps_v" ADD CONSTRAINT "_cn_apps_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cn_apps_blk_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cn_apps_blk_v" ADD CONSTRAINT "_cn_apps_blk_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_loc_arr_v" ADD CONSTRAINT "_loc_arr_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plc_arr_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_plc_arr_v" ADD CONSTRAINT "_plc_arr_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cat_arr_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cat_arr_v" ADD CONSTRAINT "_cat_arr_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reg_arr_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_reg_arr_v" ADD CONSTRAINT "_reg_arr_v_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_reg_arr_v" ADD CONSTRAINT "_reg_arr_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_plc_sec_blk_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_plc_sec_blk_v" ADD CONSTRAINT "_plc_sec_blk_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_image_title_block" ADD CONSTRAINT "_pages_v_blocks_image_title_block_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_image_title_block" ADD CONSTRAINT "_pages_v_blocks_image_title_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_info_section_block_points" ADD CONSTRAINT "_pages_v_blocks_info_section_block_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_info_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_info_section_block" ADD CONSTRAINT "_pages_v_blocks_info_section_block_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_info_section_block" ADD CONSTRAINT "_pages_v_blocks_info_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_table_block_headers" ADD CONSTRAINT "_pages_v_blocks_table_block_headers_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_table_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_table_block_rows_cells" ADD CONSTRAINT "_pages_v_blocks_table_block_rows_cells_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_table_block_rows"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_table_block_rows" ADD CONSTRAINT "_pages_v_blocks_table_block_rows_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_table_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_table_block" ADD CONSTRAINT "_pages_v_blocks_table_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_category_block_items_locations" ADD CONSTRAINT "_pages_v_blocks_category_block_items_locations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_category_block_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_category_block_items" ADD CONSTRAINT "_pages_v_blocks_category_block_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_category_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_category_block" ADD CONSTRAINT "_pages_v_blocks_category_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_llp_block_main_tabs_regions" ADD CONSTRAINT "_pages_v_blocks_llp_block_main_tabs_regions_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_llp_block_main_tabs_regions" ADD CONSTRAINT "_pages_v_blocks_llp_block_main_tabs_regions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_llp_block_main_tabs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_llp_block_main_tabs" ADD CONSTRAINT "_pages_v_blocks_llp_block_main_tabs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_llp_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_llp_block" ADD CONSTRAINT "_pages_v_blocks_llp_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cards_v" ADD CONSTRAINT "_cards_v_card_media_id_media_id_fk" FOREIGN KEY ("card_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cards_v" ADD CONSTRAINT "_cards_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cats_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cats_v" ADD CONSTRAINT "_cats_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_chenz_inv_2026_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_chenz_inv_2026_v" ADD CONSTRAINT "_chenz_inv_2026_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ev_lst_2026_v_events_cards2026" ADD CONSTRAINT "_ev_lst_2026_v_events_cards2026_card_media_id_media_id_fk" FOREIGN KEY ("card_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ev_lst_2026_v_events_cards2026" ADD CONSTRAINT "_ev_lst_2026_v_events_cards2026_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ev_lst_2026_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ev_lst_2026_v" ADD CONSTRAINT "_ev_lst_2026_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_infra_boom_2026_v" ADD CONSTRAINT "_infra_boom_2026_v_pdf_file_id_media_id_fk" FOREIGN KEY ("pdf_file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_infra_boom_2026_v" ADD CONSTRAINT "_infra_boom_2026_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_manifesto_section_block_slider_images" ADD CONSTRAINT "_pages_v_blocks_manifesto_section_block_slider_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_manifesto_section_block_slider_images" ADD CONSTRAINT "_pages_v_blocks_manifesto_section_block_slider_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_manifesto_section_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_manifesto_section_block" ADD CONSTRAINT "_pages_v_blocks_manifesto_section_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_tvc_2026_v_tvc_cards" ADD CONSTRAINT "_tvc_2026_v_tvc_cards_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_tvc_2026_v_tvc_cards" ADD CONSTRAINT "_tvc_2026_v_tvc_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_tvc_2026_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_tvc_2026_v" ADD CONSTRAINT "_tvc_2026_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_media_coverage_main_page_v_news_article" ADD CONSTRAINT "_media_coverage_main_page_v_news_article_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_media_coverage_main_page_v_news_article" ADD CONSTRAINT "_media_coverage_main_page_v_news_article_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_media_coverage_main_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_media_coverage_main_page_v_news_photos" ADD CONSTRAINT "_media_coverage_main_page_v_news_photos_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_media_coverage_main_page_v_news_photos" ADD CONSTRAINT "_media_coverage_main_page_v_news_photos_image1_id_media_id_fk" FOREIGN KEY ("image1_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_media_coverage_main_page_v_news_photos" ADD CONSTRAINT "_media_coverage_main_page_v_news_photos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_media_coverage_main_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_media_coverage_main_page_v_youtube_channel" ADD CONSTRAINT "_media_coverage_main_page_v_youtube_channel_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_media_coverage_main_page_v_youtube_channel" ADD CONSTRAINT "_media_coverage_main_page_v_youtube_channel_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_media_coverage_main_page_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_media_coverage_main_page_v" ADD CONSTRAINT "_media_coverage_main_page_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_metro_madras_block_paragraphs" ADD CONSTRAINT "_pages_v_blocks_metro_madras_block_paragraphs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_metro_madras_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_metro_madras_block_features" ADD CONSTRAINT "_pages_v_blocks_metro_madras_block_features_custom_icon_id_media_id_fk" FOREIGN KEY ("custom_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_metro_madras_block_features" ADD CONSTRAINT "_pages_v_blocks_metro_madras_block_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_metro_madras_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_metro_madras_block" ADD CONSTRAINT "_pages_v_blocks_metro_madras_block_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_metro_madras_block" ADD CONSTRAINT "_pages_v_blocks_metro_madras_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_metro_the_details_block_details" ADD CONSTRAINT "_pages_v_blocks_metro_the_details_block_details_custom_icon_id_media_id_fk" FOREIGN KEY ("custom_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_metro_the_details_block_details" ADD CONSTRAINT "_pages_v_blocks_metro_the_details_block_details_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_metro_the_details_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_metro_the_details_block" ADD CONSTRAINT "_pages_v_blocks_metro_the_details_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_metro_experience_block_highlights" ADD CONSTRAINT "_pages_v_blocks_metro_experience_block_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_metro_experience_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_metro_experience_block" ADD CONSTRAINT "_pages_v_blocks_metro_experience_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_metro_guidelines_block_guidelines" ADD CONSTRAINT "_pages_v_blocks_metro_guidelines_block_guidelines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_metro_guidelines_block"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_metro_guidelines_block" ADD CONSTRAINT "_pages_v_blocks_metro_guidelines_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_metro_registration_block" ADD CONSTRAINT "_pages_v_blocks_metro_registration_block_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_metro_registration_block" ADD CONSTRAINT "_pages_v_blocks_metro_registration_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_kf_hero_block_v" ADD CONSTRAINT "_kf_hero_block_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_kite_festival_about" ADD CONSTRAINT "_pages_v_blocks_kite_festival_about_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_kite_festival_about" ADD CONSTRAINT "_pages_v_blocks_kite_festival_about_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_kite_festival_highlights_highlights_list" ADD CONSTRAINT "_pages_v_blocks_kite_festival_highlights_highlights_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_blocks_kite_festival_highlights"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_blocks_kite_festival_highlights" ADD CONSTRAINT "_pages_v_blocks_kite_festival_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_kf_new_faqs_list_v" ADD CONSTRAINT "_kf_new_faqs_list_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_kf_new_faq_block_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_kf_new_faq_block_v" ADD CONSTRAINT "_kf_new_faq_block_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_populated_authors" ADD CONSTRAINT "posts_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts" ADD CONSTRAINT "posts_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "posts_rels" ADD CONSTRAINT "posts_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_version_populated_authors" ADD CONSTRAINT "_posts_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_parent_id_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."posts"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v" ADD CONSTRAINT "_posts_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_posts_v_rels" ADD CONSTRAINT "_posts_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_doc_id_categories_id_fk" FOREIGN KEY ("doc_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "categories_breadcrumbs" ADD CONSTRAINT "categories_breadcrumbs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "users" ADD CONSTRAINT "users_profile_image_id_media_id_fk" FOREIGN KEY ("profile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visits_populated_authors" ADD CONSTRAINT "visits_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."visits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visits" ADD CONSTRAINT "visits_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visits" ADD CONSTRAINT "visits_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visits" ADD CONSTRAINT "visits_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visits_rels" ADD CONSTRAINT "visits_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."visits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visits_rels" ADD CONSTRAINT "visits_rels_visits_fk" FOREIGN KEY ("visits_id") REFERENCES "public"."visits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visits_rels" ADD CONSTRAINT "visits_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visits_rels" ADD CONSTRAINT "visits_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visits_v_version_populated_authors" ADD CONSTRAINT "_visits_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_visits_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visits_v" ADD CONSTRAINT "_visits_v_parent_id_visits_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."visits"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visits_v" ADD CONSTRAINT "_visits_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visits_v" ADD CONSTRAINT "_visits_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visits_v" ADD CONSTRAINT "_visits_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visits_v_rels" ADD CONSTRAINT "_visits_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_visits_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visits_v_rels" ADD CONSTRAINT "_visits_v_rels_visits_fk" FOREIGN KEY ("visits_id") REFERENCES "public"."visits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visits_v_rels" ADD CONSTRAINT "_visits_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visits_v_rels" ADD CONSTRAINT "_visits_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "work_populated_authors" ADD CONSTRAINT "work_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "work" ADD CONSTRAINT "work_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "work" ADD CONSTRAINT "work_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "work" ADD CONSTRAINT "work_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "work_rels" ADD CONSTRAINT "work_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "work_rels" ADD CONSTRAINT "work_rels_work_fk" FOREIGN KEY ("work_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "work_rels" ADD CONSTRAINT "work_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "work_rels" ADD CONSTRAINT "work_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v_version_populated_authors" ADD CONSTRAINT "_work_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_work_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v" ADD CONSTRAINT "_work_v_parent_id_work_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."work"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v" ADD CONSTRAINT "_work_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v" ADD CONSTRAINT "_work_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v" ADD CONSTRAINT "_work_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v_rels" ADD CONSTRAINT "_work_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_work_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v_rels" ADD CONSTRAINT "_work_v_rels_work_fk" FOREIGN KEY ("work_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v_rels" ADD CONSTRAINT "_work_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_work_v_rels" ADD CONSTRAINT "_work_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_event_event_dates" ADD CONSTRAINT "events_event_event_dates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_event_details_language" ADD CONSTRAINT "events_event_details_language_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_populated_authors" ADD CONSTRAINT "events_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events" ADD CONSTRAINT "events_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events" ADD CONSTRAINT "events_event_image_id_media_id_fk" FOREIGN KEY ("event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events" ADD CONSTRAINT "events_event_details_location_id_locations_id_fk" FOREIGN KEY ("event_details_location_id") REFERENCES "public"."locations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events" ADD CONSTRAINT "events_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_events_categories_fk" FOREIGN KEY ("events_categories_id") REFERENCES "public"."events_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_events_v_version_event_event_dates" ADD CONSTRAINT "_events_v_version_event_event_dates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_events_v_version_event_details_language" ADD CONSTRAINT "_events_v_version_event_details_language_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_events_v_version_populated_authors" ADD CONSTRAINT "_events_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_parent_id_events_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_version_event_image_id_media_id_fk" FOREIGN KEY ("version_event_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_version_event_details_location_id_locations_id_fk" FOREIGN KEY ("version_event_details_location_id") REFERENCES "public"."locations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_events_categories_fk" FOREIGN KEY ("events_categories_id") REFERENCES "public"."events_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "investments_investments_investment_items" ADD CONSTRAINT "investments_investments_investment_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "investments_investments_investment_items" ADD CONSTRAINT "investments_investments_investment_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."investments_investments"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "investments_investments" ADD CONSTRAINT "investments_investments_section_image_id_media_id_fk" FOREIGN KEY ("section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "investments_investments" ADD CONSTRAINT "investments_investments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."investments"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "investments_populated_authors" ADD CONSTRAINT "investments_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."investments"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "investments" ADD CONSTRAINT "investments_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "investments" ADD CONSTRAINT "investments_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "investments" ADD CONSTRAINT "investments_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "investments_rels" ADD CONSTRAINT "investments_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."investments"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "investments_rels" ADD CONSTRAINT "investments_rels_investments_fk" FOREIGN KEY ("investments_id") REFERENCES "public"."investments"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "investments_rels" ADD CONSTRAINT "investments_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "investments_rels" ADD CONSTRAINT "investments_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_investments_v_version_investments_investment_items" ADD CONSTRAINT "_investments_v_version_investments_investment_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_investments_v_version_investments_investment_items" ADD CONSTRAINT "_investments_v_version_investments_investment_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_investments_v_version_investments"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_investments_v_version_investments" ADD CONSTRAINT "_investments_v_version_investments_section_image_id_media_id_fk" FOREIGN KEY ("section_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_investments_v_version_investments" ADD CONSTRAINT "_investments_v_version_investments_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_investments_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_investments_v_version_populated_authors" ADD CONSTRAINT "_investments_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_investments_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_investments_v" ADD CONSTRAINT "_investments_v_parent_id_investments_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."investments"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_investments_v" ADD CONSTRAINT "_investments_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_investments_v" ADD CONSTRAINT "_investments_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_investments_v" ADD CONSTRAINT "_investments_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_investments_v_rels" ADD CONSTRAINT "_investments_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_investments_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_investments_v_rels" ADD CONSTRAINT "_investments_v_rels_investments_fk" FOREIGN KEY ("investments_id") REFERENCES "public"."investments"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_investments_v_rels" ADD CONSTRAINT "_investments_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_investments_v_rels" ADD CONSTRAINT "_investments_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "live_populated_authors" ADD CONSTRAINT "live_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."live"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "live" ADD CONSTRAINT "live_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "live" ADD CONSTRAINT "live_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "live" ADD CONSTRAINT "live_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "live_rels" ADD CONSTRAINT "live_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."live"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "live_rels" ADD CONSTRAINT "live_rels_live_fk" FOREIGN KEY ("live_id") REFERENCES "public"."live"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "live_rels" ADD CONSTRAINT "live_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "live_rels" ADD CONSTRAINT "live_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_live_v_version_populated_authors" ADD CONSTRAINT "_live_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_live_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_live_v" ADD CONSTRAINT "_live_v_parent_id_live_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."live"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_live_v" ADD CONSTRAINT "_live_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_live_v" ADD CONSTRAINT "_live_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_live_v" ADD CONSTRAINT "_live_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_live_v_rels" ADD CONSTRAINT "_live_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_live_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_live_v_rels" ADD CONSTRAINT "_live_v_rels_live_fk" FOREIGN KEY ("live_id") REFERENCES "public"."live"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_live_v_rels" ADD CONSTRAINT "_live_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_live_v_rels" ADD CONSTRAINT "_live_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "volunteer_populated_authors" ADD CONSTRAINT "volunteer_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."volunteer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "volunteer" ADD CONSTRAINT "volunteer_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "volunteer" ADD CONSTRAINT "volunteer_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "volunteer" ADD CONSTRAINT "volunteer_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "volunteer_rels" ADD CONSTRAINT "volunteer_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."volunteer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "volunteer_rels" ADD CONSTRAINT "volunteer_rels_volunteer_fk" FOREIGN KEY ("volunteer_id") REFERENCES "public"."volunteer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "volunteer_rels" ADD CONSTRAINT "volunteer_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "volunteer_rels" ADD CONSTRAINT "volunteer_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_volunteer_v_version_populated_authors" ADD CONSTRAINT "_volunteer_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_volunteer_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_volunteer_v" ADD CONSTRAINT "_volunteer_v_parent_id_volunteer_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."volunteer"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_volunteer_v" ADD CONSTRAINT "_volunteer_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_volunteer_v" ADD CONSTRAINT "_volunteer_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_volunteer_v" ADD CONSTRAINT "_volunteer_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_volunteer_v_rels" ADD CONSTRAINT "_volunteer_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_volunteer_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_volunteer_v_rels" ADD CONSTRAINT "_volunteer_v_rels_volunteer_fk" FOREIGN KEY ("volunteer_id") REFERENCES "public"."volunteer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_volunteer_v_rels" ADD CONSTRAINT "_volunteer_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_volunteer_v_rels" ADD CONSTRAINT "_volunteer_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "innovate_populated_authors" ADD CONSTRAINT "innovate_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."innovate"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "innovate" ADD CONSTRAINT "innovate_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "innovate" ADD CONSTRAINT "innovate_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "innovate" ADD CONSTRAINT "innovate_innovation_image_id_media_id_fk" FOREIGN KEY ("innovation_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "innovate" ADD CONSTRAINT "innovate_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "innovate_rels" ADD CONSTRAINT "innovate_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."innovate"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "innovate_rels" ADD CONSTRAINT "innovate_rels_innovate_fk" FOREIGN KEY ("innovate_id") REFERENCES "public"."innovate"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "innovate_rels" ADD CONSTRAINT "innovate_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "innovate_rels" ADD CONSTRAINT "innovate_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_innovate_v_version_populated_authors" ADD CONSTRAINT "_innovate_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_innovate_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_innovate_v" ADD CONSTRAINT "_innovate_v_parent_id_innovate_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."innovate"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_innovate_v" ADD CONSTRAINT "_innovate_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_innovate_v" ADD CONSTRAINT "_innovate_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_innovate_v" ADD CONSTRAINT "_innovate_v_version_innovation_image_id_media_id_fk" FOREIGN KEY ("version_innovation_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_innovate_v" ADD CONSTRAINT "_innovate_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_innovate_v_rels" ADD CONSTRAINT "_innovate_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_innovate_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_innovate_v_rels" ADD CONSTRAINT "_innovate_v_rels_innovate_fk" FOREIGN KEY ("innovate_id") REFERENCES "public"."innovate"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_innovate_v_rels" ADD CONSTRAINT "_innovate_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_innovate_v_rels" ADD CONSTRAINT "_innovate_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visit_details_populated_authors" ADD CONSTRAINT "visit_details_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."visit_details"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visit_details" ADD CONSTRAINT "visit_details_parent_id_visits_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."visits"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visit_details" ADD CONSTRAINT "visit_details_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visit_details" ADD CONSTRAINT "visit_details_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visit_details" ADD CONSTRAINT "visit_details_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visit_details_rels" ADD CONSTRAINT "visit_details_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."visit_details"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visit_details_rels" ADD CONSTRAINT "visit_details_rels_visit_details_fk" FOREIGN KEY ("visit_details_id") REFERENCES "public"."visit_details"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visit_details_rels" ADD CONSTRAINT "visit_details_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visit_details_rels" ADD CONSTRAINT "visit_details_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visit_details_v_version_populated_authors" ADD CONSTRAINT "_visit_details_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_visit_details_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visit_details_v" ADD CONSTRAINT "_visit_details_v_parent_id_visit_details_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."visit_details"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visit_details_v" ADD CONSTRAINT "_visit_details_v_version_parent_id_visits_id_fk" FOREIGN KEY ("version_parent_id") REFERENCES "public"."visits"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visit_details_v" ADD CONSTRAINT "_visit_details_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visit_details_v" ADD CONSTRAINT "_visit_details_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visit_details_v" ADD CONSTRAINT "_visit_details_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visit_details_v_rels" ADD CONSTRAINT "_visit_details_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_visit_details_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visit_details_v_rels" ADD CONSTRAINT "_visit_details_v_rels_visit_details_fk" FOREIGN KEY ("visit_details_id") REFERENCES "public"."visit_details"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visit_details_v_rels" ADD CONSTRAINT "_visit_details_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_visit_details_v_rels" ADD CONSTRAINT "_visit_details_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "volunteer_slides_slides_faq" ADD CONSTRAINT "volunteer_slides_slides_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."volunteer_slides_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "volunteer_slides_slides" ADD CONSTRAINT "volunteer_slides_slides_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "volunteer_slides_slides" ADD CONSTRAINT "volunteer_slides_slides_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."volunteer_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "social_reels_reels" ADD CONSTRAINT "social_reels_reels_thumbnail_id_media_id_fk" FOREIGN KEY ("thumbnail_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "social_reels_reels" ADD CONSTRAINT "social_reels_reels_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."social_reels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "investment_categories_items" ADD CONSTRAINT "investment_categories_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "investment_categories_items" ADD CONSTRAINT "investment_categories_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."investment_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visit_groups_items" ADD CONSTRAINT "visit_groups_items_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "visit_groups_items" ADD CONSTRAINT "visit_groups_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."visit_groups"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_images" ADD CONSTRAINT "properties_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_images" ADD CONSTRAINT "properties_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_faq" ADD CONSTRAINT "properties_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_nearby" ADD CONSTRAINT "properties_nearby_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_floor_plans" ADD CONSTRAINT "properties_floor_plans_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_floor_plans" ADD CONSTRAINT "properties_floor_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_route_map" ADD CONSTRAINT "properties_route_map_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_route_map" ADD CONSTRAINT "properties_route_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_green_features" ADD CONSTRAINT "properties_green_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_features" ADD CONSTRAINT "properties_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_more_amenities" ADD CONSTRAINT "properties_more_amenities_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_more_amenities" ADD CONSTRAINT "properties_more_amenities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_specifications" ADD CONSTRAINT "properties_specifications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rent_details_preferred_tenants" ADD CONSTRAINT "properties_rent_details_preferred_tenants_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_populated_authors" ADD CONSTRAINT "properties_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties" ADD CONSTRAINT "properties_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties" ADD CONSTRAINT "properties_property_location_id_propertylocations_id_fk" FOREIGN KEY ("property_location_id") REFERENCES "public"."propertylocations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties" ADD CONSTRAINT "properties_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_property_types_fk" FOREIGN KEY ("property_types_id") REFERENCES "public"."property_types"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_bhk_types_fk" FOREIGN KEY ("bhk_types_id") REFERENCES "public"."bhk_types"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_properties_fk" FOREIGN KEY ("properties_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "properties_rels" ADD CONSTRAINT "properties_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_version_images" ADD CONSTRAINT "_properties_v_version_images_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_version_images" ADD CONSTRAINT "_properties_v_version_images_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_properties_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_version_faq" ADD CONSTRAINT "_properties_v_version_faq_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_properties_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_version_nearby" ADD CONSTRAINT "_properties_v_version_nearby_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_properties_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_version_floor_plans" ADD CONSTRAINT "_properties_v_version_floor_plans_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_version_floor_plans" ADD CONSTRAINT "_properties_v_version_floor_plans_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_properties_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_version_route_map" ADD CONSTRAINT "_properties_v_version_route_map_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_version_route_map" ADD CONSTRAINT "_properties_v_version_route_map_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_properties_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_version_green_features" ADD CONSTRAINT "_properties_v_version_green_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_properties_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_version_features" ADD CONSTRAINT "_properties_v_version_features_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_properties_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_version_more_amenities" ADD CONSTRAINT "_properties_v_version_more_amenities_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_version_more_amenities" ADD CONSTRAINT "_properties_v_version_more_amenities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_properties_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_version_specifications" ADD CONSTRAINT "_properties_v_version_specifications_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_properties_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_version_rent_details_preferred_tenants" ADD CONSTRAINT "_properties_v_version_rent_details_preferred_tenants_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_properties_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_version_populated_authors" ADD CONSTRAINT "_properties_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_properties_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v" ADD CONSTRAINT "_properties_v_parent_id_properties_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."properties"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v" ADD CONSTRAINT "_properties_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v" ADD CONSTRAINT "_properties_v_version_property_location_id_propertylocations_id_fk" FOREIGN KEY ("version_property_location_id") REFERENCES "public"."propertylocations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v" ADD CONSTRAINT "_properties_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_properties_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_property_types_fk" FOREIGN KEY ("property_types_id") REFERENCES "public"."property_types"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_bhk_types_fk" FOREIGN KEY ("bhk_types_id") REFERENCES "public"."bhk_types"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_properties_fk" FOREIGN KEY ("properties_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_properties_v_rels" ADD CONSTRAINT "_properties_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "amenities" ADD CONSTRAINT "amenities_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "superchennai_contests_populated_authors" ADD CONSTRAINT "superchennai_contests_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."superchennai_contests"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "superchennai_contests" ADD CONSTRAINT "superchennai_contests_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "superchennai_contests" ADD CONSTRAINT "superchennai_contests_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "superchennai_contests_rels" ADD CONSTRAINT "superchennai_contests_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."superchennai_contests"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "superchennai_contests_rels" ADD CONSTRAINT "superchennai_contests_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_superchennai_contests_v_version_populated_authors" ADD CONSTRAINT "_superchennai_contests_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_superchennai_contests_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_superchennai_contests_v" ADD CONSTRAINT "_superchennai_contests_v_parent_id_superchennai_contests_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."superchennai_contests"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_superchennai_contests_v" ADD CONSTRAINT "_superchennai_contests_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_superchennai_contests_v" ADD CONSTRAINT "_superchennai_contests_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_superchennai_contests_v_rels" ADD CONSTRAINT "_superchennai_contests_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_superchennai_contests_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_superchennai_contests_v_rels" ADD CONSTRAINT "_superchennai_contests_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "contest_populated_authors" ADD CONSTRAINT "contest_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contest"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "contest" ADD CONSTRAINT "contest_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "contest" ADD CONSTRAINT "contest_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "contest_rels" ADD CONSTRAINT "contest_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."contest"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "contest_rels" ADD CONSTRAINT "contest_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_contest_v_version_populated_authors" ADD CONSTRAINT "_contest_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_contest_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_contest_v" ADD CONSTRAINT "_contest_v_parent_id_contest_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."contest"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_contest_v" ADD CONSTRAINT "_contest_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_contest_v" ADD CONSTRAINT "_contest_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_contest_v_rels" ADD CONSTRAINT "_contest_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_contest_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_contest_v_rels" ADD CONSTRAINT "_contest_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "organizers" ADD CONSTRAINT "organizers_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "sabha_foods" ADD CONSTRAINT "sabha_foods_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "articles_populated_authors" ADD CONSTRAINT "articles_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "articles" ADD CONSTRAINT "articles_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "articles" ADD CONSTRAINT "articles_articlecategory_id_articlecategory_id_fk" FOREIGN KEY ("articlecategory_id") REFERENCES "public"."articlecategory"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "articles" ADD CONSTRAINT "articles_language_id_languages_id_fk" FOREIGN KEY ("language_id") REFERENCES "public"."languages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "articles" ADD CONSTRAINT "articles_thumbnail_image_id_media_id_fk" FOREIGN KEY ("thumbnail_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "articles" ADD CONSTRAINT "articles_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_article_types_fk" FOREIGN KEY ("article_types_id") REFERENCES "public"."article_types"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_articlelocations_fk" FOREIGN KEY ("articlelocations_id") REFERENCES "public"."articlelocations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "articles_rels" ADD CONSTRAINT "articles_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_articles_v_version_populated_authors" ADD CONSTRAINT "_articles_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_articles_v" ADD CONSTRAINT "_articles_v_parent_id_articles_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."articles"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_articles_v" ADD CONSTRAINT "_articles_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_articles_v" ADD CONSTRAINT "_articles_v_version_articlecategory_id_articlecategory_id_fk" FOREIGN KEY ("version_articlecategory_id") REFERENCES "public"."articlecategory"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_articles_v" ADD CONSTRAINT "_articles_v_version_language_id_languages_id_fk" FOREIGN KEY ("version_language_id") REFERENCES "public"."languages"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_articles_v" ADD CONSTRAINT "_articles_v_version_thumbnail_image_id_media_id_fk" FOREIGN KEY ("version_thumbnail_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_articles_v" ADD CONSTRAINT "_articles_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_articles_v_rels" ADD CONSTRAINT "_articles_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_articles_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_articles_v_rels" ADD CONSTRAINT "_articles_v_rels_article_types_fk" FOREIGN KEY ("article_types_id") REFERENCES "public"."article_types"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_articles_v_rels" ADD CONSTRAINT "_articles_v_rels_articlelocations_fk" FOREIGN KEY ("articlelocations_id") REFERENCES "public"."articlelocations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_articles_v_rels" ADD CONSTRAINT "_articles_v_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_articles_v_rels" ADD CONSTRAINT "_articles_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_articles_v_rels" ADD CONSTRAINT "_articles_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ads_populated_authors" ADD CONSTRAINT "ads_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."ads"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ads" ADD CONSTRAINT "ads_media_id_media_id_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ads" ADD CONSTRAINT "ads_mobile_settings_mobile_media_id_media_id_fk" FOREIGN KEY ("mobile_settings_mobile_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ads" ADD CONSTRAINT "ads_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ads_rels" ADD CONSTRAINT "ads_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."ads"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ads_rels" ADD CONSTRAINT "ads_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ads_rels" ADD CONSTRAINT "ads_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ads_rels" ADD CONSTRAINT "ads_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ads_v_version_populated_authors" ADD CONSTRAINT "_ads_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_ads_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ads_v" ADD CONSTRAINT "_ads_v_parent_id_ads_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."ads"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ads_v" ADD CONSTRAINT "_ads_v_version_media_id_media_id_fk" FOREIGN KEY ("version_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ads_v" ADD CONSTRAINT "_ads_v_version_mobile_settings_mobile_media_id_media_id_fk" FOREIGN KEY ("version_mobile_settings_mobile_media_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ads_v" ADD CONSTRAINT "_ads_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ads_v_rels" ADD CONSTRAINT "_ads_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_ads_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ads_v_rels" ADD CONSTRAINT "_ads_v_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ads_v_rels" ADD CONSTRAINT "_ads_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_ads_v_rels" ADD CONSTRAINT "_ads_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "article_types" ADD CONSTRAINT "article_types_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "articlecategory" ADD CONSTRAINT "articlecategory_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "articlecategory" ADD CONSTRAINT "articlecategory_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_gallery" ADD CONSTRAINT "neighbourhood_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_gallery" ADD CONSTRAINT "neighbourhood_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."neighbourhood"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_branches" ADD CONSTRAINT "neighbourhood_branches_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."neighbourhood"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_documents" ADD CONSTRAINT "neighbourhood_documents_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_documents" ADD CONSTRAINT "neighbourhood_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."neighbourhood"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_business_hours" ADD CONSTRAINT "neighbourhood_business_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."neighbourhood"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_service_options" ADD CONSTRAINT "neighbourhood_service_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."neighbourhood"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_menu_items" ADD CONSTRAINT "neighbourhood_menu_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."neighbourhood"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_fuel_types" ADD CONSTRAINT "neighbourhood_fuel_types_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."neighbourhood"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_amenities" ADD CONSTRAINT "neighbourhood_amenities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."neighbourhood"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_awards" ADD CONSTRAINT "neighbourhood_awards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."neighbourhood"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_quick_access_highlights" ADD CONSTRAINT "neighbourhood_quick_access_highlights_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_quick_access_highlights" ADD CONSTRAINT "neighbourhood_quick_access_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."neighbourhood"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_neighborhood_stats" ADD CONSTRAINT "neighbourhood_neighborhood_stats_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_neighborhood_stats" ADD CONSTRAINT "neighbourhood_neighborhood_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."neighbourhood"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_structured_data_faq_schema" ADD CONSTRAINT "neighbourhood_structured_data_faq_schema_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."neighbourhood"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_structured_data_event_schema" ADD CONSTRAINT "neighbourhood_structured_data_event_schema_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."neighbourhood"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_populated_authors" ADD CONSTRAINT "neighbourhood_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."neighbourhood"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood" ADD CONSTRAINT "neighbourhood_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood" ADD CONSTRAINT "neighbourhood_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood" ADD CONSTRAINT "neighbourhood_category_id_neighbourhood_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."neighbourhood_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood" ADD CONSTRAINT "neighbourhood_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood" ADD CONSTRAINT "neighbourhood_locations_id_chennai_neighbourhoodlocations_id_fk" FOREIGN KEY ("locations_id") REFERENCES "public"."chennai_neighbourhoodlocations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood" ADD CONSTRAINT "neighbourhood_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_rels" ADD CONSTRAINT "neighbourhood_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."neighbourhood"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_rels" ADD CONSTRAINT "neighbourhood_rels_neighbourhood_subcategories_fk" FOREIGN KEY ("neighbourhood_subcategories_id") REFERENCES "public"."neighbourhood_subcategories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_rels" ADD CONSTRAINT "neighbourhood_rels_neighbourhood_tags_fk" FOREIGN KEY ("neighbourhood_tags_id") REFERENCES "public"."neighbourhood_tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_rels" ADD CONSTRAINT "neighbourhood_rels_chennai_neighbourhoodlocations_fk" FOREIGN KEY ("chennai_neighbourhoodlocations_id") REFERENCES "public"."chennai_neighbourhoodlocations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_rels" ADD CONSTRAINT "neighbourhood_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_gallery" ADD CONSTRAINT "_neighbourhood_v_version_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_gallery" ADD CONSTRAINT "_neighbourhood_v_version_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_neighbourhood_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_branches" ADD CONSTRAINT "_neighbourhood_v_version_branches_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_neighbourhood_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_documents" ADD CONSTRAINT "_neighbourhood_v_version_documents_file_id_media_id_fk" FOREIGN KEY ("file_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_documents" ADD CONSTRAINT "_neighbourhood_v_version_documents_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_neighbourhood_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_business_hours" ADD CONSTRAINT "_neighbourhood_v_version_business_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_neighbourhood_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_service_options" ADD CONSTRAINT "_neighbourhood_v_version_service_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_neighbourhood_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_menu_items" ADD CONSTRAINT "_neighbourhood_v_version_menu_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_neighbourhood_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_fuel_types" ADD CONSTRAINT "_neighbourhood_v_version_fuel_types_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_neighbourhood_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_amenities" ADD CONSTRAINT "_neighbourhood_v_version_amenities_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_neighbourhood_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_awards" ADD CONSTRAINT "_neighbourhood_v_version_awards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_neighbourhood_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_quick_access_highlights" ADD CONSTRAINT "_neighbourhood_v_version_quick_access_highlights_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_quick_access_highlights" ADD CONSTRAINT "_neighbourhood_v_version_quick_access_highlights_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_neighbourhood_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_neighborhood_stats" ADD CONSTRAINT "_neighbourhood_v_version_neighborhood_stats_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_neighborhood_stats" ADD CONSTRAINT "_neighbourhood_v_version_neighborhood_stats_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_neighbourhood_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_structured_data_faq_schema" ADD CONSTRAINT "_neighbourhood_v_version_structured_data_faq_schema_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_neighbourhood_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_structured_data_event_schema" ADD CONSTRAINT "_neighbourhood_v_version_structured_data_event_schema_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_neighbourhood_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_version_populated_authors" ADD CONSTRAINT "_neighbourhood_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_neighbourhood_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v" ADD CONSTRAINT "_neighbourhood_v_parent_id_neighbourhood_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."neighbourhood"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v" ADD CONSTRAINT "_neighbourhood_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v" ADD CONSTRAINT "_neighbourhood_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v" ADD CONSTRAINT "_neighbourhood_v_version_category_id_neighbourhood_categories_id_fk" FOREIGN KEY ("version_category_id") REFERENCES "public"."neighbourhood_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v" ADD CONSTRAINT "_neighbourhood_v_version_icon_id_media_id_fk" FOREIGN KEY ("version_icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v" ADD CONSTRAINT "_neighbourhood_v_version_locations_id_chennai_neighbourhoodlocations_id_fk" FOREIGN KEY ("version_locations_id") REFERENCES "public"."chennai_neighbourhoodlocations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v" ADD CONSTRAINT "_neighbourhood_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_rels" ADD CONSTRAINT "_neighbourhood_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_neighbourhood_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_rels" ADD CONSTRAINT "_neighbourhood_v_rels_neighbourhood_subcategories_fk" FOREIGN KEY ("neighbourhood_subcategories_id") REFERENCES "public"."neighbourhood_subcategories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_rels" ADD CONSTRAINT "_neighbourhood_v_rels_neighbourhood_tags_fk" FOREIGN KEY ("neighbourhood_tags_id") REFERENCES "public"."neighbourhood_tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_rels" ADD CONSTRAINT "_neighbourhood_v_rels_chennai_neighbourhoodlocations_fk" FOREIGN KEY ("chennai_neighbourhoodlocations_id") REFERENCES "public"."chennai_neighbourhoodlocations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_neighbourhood_v_rels" ADD CONSTRAINT "_neighbourhood_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_categories" ADD CONSTRAINT "neighbourhood_categories_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "neighbourhood_subcategories" ADD CONSTRAINT "neighbourhood_subcategories_parent_category_id_neighbourhood_categories_id_fk" FOREIGN KEY ("parent_category_id") REFERENCES "public"."neighbourhood_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "chennai_neighbourhoodlocations_overview_points" ADD CONSTRAINT "chennai_neighbourhoodlocations_overview_points_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "chennai_neighbourhoodlocations_overview_points" ADD CONSTRAINT "chennai_neighbourhoodlocations_overview_points_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."chennai_neighbourhoodlocations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "chennai_neighbourhoodlocations_quick_access" ADD CONSTRAINT "chennai_neighbourhoodlocations_quick_access_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "chennai_neighbourhoodlocations_quick_access" ADD CONSTRAINT "chennai_neighbourhoodlocations_quick_access_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."chennai_neighbourhoodlocations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "chennai_neighbourhoodlocations_why_choose" ADD CONSTRAINT "chennai_neighbourhoodlocations_why_choose_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."chennai_neighbourhoodlocations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "chennai_neighbourhoodlocations_lifestyle_scores" ADD CONSTRAINT "chennai_neighbourhoodlocations_lifestyle_scores_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."chennai_neighbourhoodlocations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "chennai_neighbourhoodlocations_faq_section_faqs" ADD CONSTRAINT "chennai_neighbourhoodlocations_faq_section_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."chennai_neighbourhoodlocations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "chennai_neighbourhoodlocations" ADD CONSTRAINT "chennai_neighbourhoodlocations_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "chennai_neighbourhoodlocations" ADD CONSTRAINT "chennai_neighbourhoodlocations_icon_svg_id_media_id_fk" FOREIGN KEY ("icon_svg_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "trending_chennai_trending_chennai_event_dates" ADD CONSTRAINT "trending_chennai_trending_chennai_event_dates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trending_chennai"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "trending_chennai_meta_seo_keywords" ADD CONSTRAINT "trending_chennai_meta_seo_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trending_chennai"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "trending_chennai_populated_authors" ADD CONSTRAINT "trending_chennai_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."trending_chennai"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "trending_chennai" ADD CONSTRAINT "trending_chennai_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "trending_chennai" ADD CONSTRAINT "trending_chennai_trending_chennai_image_id_media_id_fk" FOREIGN KEY ("trending_chennai_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "trending_chennai" ADD CONSTRAINT "trending_chennai_trending_chennai_details_location_id_trendinglocations_id_fk" FOREIGN KEY ("trending_chennai_details_location_id") REFERENCES "public"."trendinglocations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "trending_chennai" ADD CONSTRAINT "trending_chennai_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "trending_chennai" ADD CONSTRAINT "trending_chennai_meta_seo_og_image_id_media_id_fk" FOREIGN KEY ("meta_seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "trending_chennai_rels" ADD CONSTRAINT "trending_chennai_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."trending_chennai"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "trending_chennai_rels" ADD CONSTRAINT "trending_chennai_rels_trending_languages_fk" FOREIGN KEY ("trending_languages_id") REFERENCES "public"."trending_languages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "trending_chennai_rels" ADD CONSTRAINT "trending_chennai_rels_trending_events_categories_fk" FOREIGN KEY ("trending_events_categories_id") REFERENCES "public"."trending_events_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "trending_chennai_rels" ADD CONSTRAINT "trending_chennai_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "trending_chennai_rels" ADD CONSTRAINT "trending_chennai_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "trending_chennai_rels" ADD CONSTRAINT "trending_chennai_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_trending_chennai_v_version_trending_chennai_event_dates" ADD CONSTRAINT "_trending_chennai_v_version_trending_chennai_event_dates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_trending_chennai_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_trending_chennai_v_version_meta_seo_keywords" ADD CONSTRAINT "_trending_chennai_v_version_meta_seo_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_trending_chennai_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_trending_chennai_v_version_populated_authors" ADD CONSTRAINT "_trending_chennai_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_trending_chennai_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_trending_chennai_v" ADD CONSTRAINT "_trending_chennai_v_parent_id_trending_chennai_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."trending_chennai"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_trending_chennai_v" ADD CONSTRAINT "_trending_chennai_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_trending_chennai_v" ADD CONSTRAINT "_trending_chennai_v_version_trending_chennai_image_id_media_id_fk" FOREIGN KEY ("version_trending_chennai_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_trending_chennai_v" ADD CONSTRAINT "_trending_chennai_v_version_trending_chennai_details_location_id_trendinglocations_id_fk" FOREIGN KEY ("version_trending_chennai_details_location_id") REFERENCES "public"."trendinglocations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_trending_chennai_v" ADD CONSTRAINT "_trending_chennai_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_trending_chennai_v" ADD CONSTRAINT "_trending_chennai_v_version_meta_seo_og_image_id_media_id_fk" FOREIGN KEY ("version_meta_seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_trending_chennai_v_rels" ADD CONSTRAINT "_trending_chennai_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_trending_chennai_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_trending_chennai_v_rels" ADD CONSTRAINT "_trending_chennai_v_rels_trending_languages_fk" FOREIGN KEY ("trending_languages_id") REFERENCES "public"."trending_languages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_trending_chennai_v_rels" ADD CONSTRAINT "_trending_chennai_v_rels_trending_events_categories_fk" FOREIGN KEY ("trending_events_categories_id") REFERENCES "public"."trending_events_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_trending_chennai_v_rels" ADD CONSTRAINT "_trending_chennai_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_trending_chennai_v_rels" ADD CONSTRAINT "_trending_chennai_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_trending_chennai_v_rels" ADD CONSTRAINT "_trending_chennai_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "trending_languages" ADD CONSTRAINT "trending_languages_flag_id_media_id_fk" FOREIGN KEY ("flag_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cricket_score_meta_seo_keywords" ADD CONSTRAINT "cricket_score_meta_seo_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cricket_score"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cricket_score_populated_authors" ADD CONSTRAINT "cricket_score_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cricket_score"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cricket_score" ADD CONSTRAINT "cricket_score_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cricket_score" ADD CONSTRAINT "cricket_score_cricket_score_i_p_limage_id_media_id_fk" FOREIGN KEY ("cricket_score_i_p_limage_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cricket_score" ADD CONSTRAINT "cricket_score_cricket_score_match_details_stadium_location_id_ipl_locations_id_fk" FOREIGN KEY ("cricket_score_match_details_stadium_location_id") REFERENCES "public"."ipl_locations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cricket_score" ADD CONSTRAINT "cricket_score_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cricket_score" ADD CONSTRAINT "cricket_score_meta_seo_og_image_id_media_id_fk" FOREIGN KEY ("meta_seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cricket_score_rels" ADD CONSTRAINT "cricket_score_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cricket_score"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cricket_score_rels" ADD CONSTRAINT "cricket_score_rels_ipl_languages_fk" FOREIGN KEY ("ipl_languages_id") REFERENCES "public"."ipl_languages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cricket_score_rels" ADD CONSTRAINT "cricket_score_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cricket_score_rels" ADD CONSTRAINT "cricket_score_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "cricket_score_rels" ADD CONSTRAINT "cricket_score_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cricket_score_v_version_meta_seo_keywords" ADD CONSTRAINT "_cricket_score_v_version_meta_seo_keywords_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cricket_score_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cricket_score_v_version_populated_authors" ADD CONSTRAINT "_cricket_score_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cricket_score_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cricket_score_v" ADD CONSTRAINT "_cricket_score_v_parent_id_cricket_score_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."cricket_score"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cricket_score_v" ADD CONSTRAINT "_cricket_score_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cricket_score_v" ADD CONSTRAINT "_cricket_score_v_version_cricket_score_i_p_limage_id_media_id_fk" FOREIGN KEY ("version_cricket_score_i_p_limage_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cricket_score_v" ADD CONSTRAINT "_cricket_score_v_version_cricket_score_match_details_stadium_location_id_ipl_locations_id_fk" FOREIGN KEY ("version_cricket_score_match_details_stadium_location_id") REFERENCES "public"."ipl_locations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cricket_score_v" ADD CONSTRAINT "_cricket_score_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cricket_score_v" ADD CONSTRAINT "_cricket_score_v_version_meta_seo_og_image_id_media_id_fk" FOREIGN KEY ("version_meta_seo_og_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cricket_score_v_rels" ADD CONSTRAINT "_cricket_score_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_cricket_score_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cricket_score_v_rels" ADD CONSTRAINT "_cricket_score_v_rels_ipl_languages_fk" FOREIGN KEY ("ipl_languages_id") REFERENCES "public"."ipl_languages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cricket_score_v_rels" ADD CONSTRAINT "_cricket_score_v_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cricket_score_v_rels" ADD CONSTRAINT "_cricket_score_v_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_cricket_score_v_rels" ADD CONSTRAINT "_cricket_score_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "ipl_languages" ADD CONSTRAINT "ipl_languages_flag_id_media_id_fk" FOREIGN KEY ("flag_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "icon_of_month_achievements" ADD CONSTRAINT "icon_of_month_achievements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."icon_of_month"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "icon_of_month_populated_authors" ADD CONSTRAINT "icon_of_month_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."icon_of_month"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "icon_of_month" ADD CONSTRAINT "icon_of_month_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "icon_of_month" ADD CONSTRAINT "icon_of_month_profile_image_id_media_id_fk" FOREIGN KEY ("profile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "icon_of_month" ADD CONSTRAINT "icon_of_month_cover_image_id_media_id_fk" FOREIGN KEY ("cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "icon_of_month" ADD CONSTRAINT "icon_of_month_category_id_icon_month_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."icon_month_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "icon_of_month" ADD CONSTRAINT "icon_of_month_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "icon_of_month_rels" ADD CONSTRAINT "icon_of_month_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."icon_of_month"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "icon_of_month_rels" ADD CONSTRAINT "icon_of_month_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_icon_of_month_v_version_achievements" ADD CONSTRAINT "_icon_of_month_v_version_achievements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_icon_of_month_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_icon_of_month_v_version_populated_authors" ADD CONSTRAINT "_icon_of_month_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_icon_of_month_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_icon_of_month_v" ADD CONSTRAINT "_icon_of_month_v_parent_id_icon_of_month_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."icon_of_month"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_icon_of_month_v" ADD CONSTRAINT "_icon_of_month_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_icon_of_month_v" ADD CONSTRAINT "_icon_of_month_v_version_profile_image_id_media_id_fk" FOREIGN KEY ("version_profile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_icon_of_month_v" ADD CONSTRAINT "_icon_of_month_v_version_cover_image_id_media_id_fk" FOREIGN KEY ("version_cover_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_icon_of_month_v" ADD CONSTRAINT "_icon_of_month_v_version_category_id_icon_month_categories_id_fk" FOREIGN KEY ("version_category_id") REFERENCES "public"."icon_month_categories"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_icon_of_month_v" ADD CONSTRAINT "_icon_of_month_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_icon_of_month_v_rels" ADD CONSTRAINT "_icon_of_month_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_icon_of_month_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_icon_of_month_v_rels" ADD CONSTRAINT "_icon_of_month_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "icon_month_categories" ADD CONSTRAINT "icon_month_categories_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "whats_ap_chennai_details_language" ADD CONSTRAINT "whats_ap_chennai_details_language_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."whats_ap_chennai"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "whats_ap_chennai_details_event_dates" ADD CONSTRAINT "whats_ap_chennai_details_event_dates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."whats_ap_chennai"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "whats_ap_chennai_populated_authors" ADD CONSTRAINT "whats_ap_chennai_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."whats_ap_chennai"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "whats_ap_chennai" ADD CONSTRAINT "whats_ap_chennai_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "whats_ap_chennai" ADD CONSTRAINT "whats_ap_chennai_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "whats_ap_chennai" ADD CONSTRAINT "whats_ap_chennai_mobile_image_id_media_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "whats_ap_chennai" ADD CONSTRAINT "whats_ap_chennai_details_location_id_whatsapp_chennai_locations_id_fk" FOREIGN KEY ("details_location_id") REFERENCES "public"."whatsapp_chennai_locations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "whats_ap_chennai" ADD CONSTRAINT "whats_ap_chennai_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "whats_ap_chennai_rels" ADD CONSTRAINT "whats_ap_chennai_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."whats_ap_chennai"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "whats_ap_chennai_rels" ADD CONSTRAINT "whats_ap_chennai_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_whats_ap_chennai_v_version_details_language" ADD CONSTRAINT "_whats_ap_chennai_v_version_details_language_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_whats_ap_chennai_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_whats_ap_chennai_v_version_details_event_dates" ADD CONSTRAINT "_whats_ap_chennai_v_version_details_event_dates_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_whats_ap_chennai_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_whats_ap_chennai_v_version_populated_authors" ADD CONSTRAINT "_whats_ap_chennai_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_whats_ap_chennai_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_whats_ap_chennai_v" ADD CONSTRAINT "_whats_ap_chennai_v_parent_id_whats_ap_chennai_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."whats_ap_chennai"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_whats_ap_chennai_v" ADD CONSTRAINT "_whats_ap_chennai_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_whats_ap_chennai_v" ADD CONSTRAINT "_whats_ap_chennai_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_whats_ap_chennai_v" ADD CONSTRAINT "_whats_ap_chennai_v_version_mobile_image_id_media_id_fk" FOREIGN KEY ("version_mobile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_whats_ap_chennai_v" ADD CONSTRAINT "_whats_ap_chennai_v_version_details_location_id_whatsapp_chennai_locations_id_fk" FOREIGN KEY ("version_details_location_id") REFERENCES "public"."whatsapp_chennai_locations"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_whats_ap_chennai_v" ADD CONSTRAINT "_whats_ap_chennai_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_whats_ap_chennai_v_rels" ADD CONSTRAINT "_whats_ap_chennai_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_whats_ap_chennai_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_whats_ap_chennai_v_rels" ADD CONSTRAINT "_whats_ap_chennai_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_submissions_golu_photographs" ADD CONSTRAINT "golu_submissions_golu_photographs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_submissions_golu_photographs" ADD CONSTRAINT "golu_submissions_golu_photographs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."golu_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_submissions_super_chennai_corner_photographs" ADD CONSTRAINT "golu_submissions_super_chennai_corner_photographs_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_submissions_super_chennai_corner_photographs" ADD CONSTRAINT "golu_submissions_super_chennai_corner_photographs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."golu_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_submissions_action_history" ADD CONSTRAINT "golu_submissions_action_history_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."golu_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_submissions" ADD CONSTRAINT "golu_submissions_participant_id_golu_users_id_fk" FOREIGN KEY ("participant_id") REFERENCES "public"."golu_users"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_submissions" ADD CONSTRAINT "golu_submissions_golu_video_id_media_id_fk" FOREIGN KEY ("golu_video_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_users" ADD CONSTRAINT "golu_users_submission_id_golu_submissions_id_fk" FOREIGN KEY ("submission_id") REFERENCES "public"."golu_submissions"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "participants" ADD CONSTRAINT "participants_submission_id_golu_submissions_id_fk" FOREIGN KEY ("submission_id") REFERENCES "public"."golu_submissions"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_contest_populated_authors" ADD CONSTRAINT "golu_contest_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."golu_contest"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_contest" ADD CONSTRAINT "golu_contest_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_contest" ADD CONSTRAINT "golu_contest_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_contest" ADD CONSTRAINT "golu_contest_mobile_image_id_media_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_contest" ADD CONSTRAINT "golu_contest_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_contest_rels" ADD CONSTRAINT "golu_contest_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."golu_contest"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_contest_rels" ADD CONSTRAINT "golu_contest_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_golu_contest_v_version_populated_authors" ADD CONSTRAINT "_golu_contest_v_version_populated_authors_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_golu_contest_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_golu_contest_v" ADD CONSTRAINT "_golu_contest_v_parent_id_golu_contest_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."golu_contest"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_golu_contest_v" ADD CONSTRAINT "_golu_contest_v_version_hero_image_id_media_id_fk" FOREIGN KEY ("version_hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_golu_contest_v" ADD CONSTRAINT "_golu_contest_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_golu_contest_v" ADD CONSTRAINT "_golu_contest_v_version_mobile_image_id_media_id_fk" FOREIGN KEY ("version_mobile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_golu_contest_v" ADD CONSTRAINT "_golu_contest_v_version_meta_image_id_media_id_fk" FOREIGN KEY ("version_meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_golu_contest_v_rels" ADD CONSTRAINT "_golu_contest_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_golu_contest_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_golu_contest_v_rels" ADD CONSTRAINT "_golu_contest_v_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "event_form_fields_options" ADD CONSTRAINT "event_form_fields_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."event_form_fields"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
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
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "redirects_rels" ADD CONSTRAINT "redirects_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_checkbox" ADD CONSTRAINT "forms_blocks_checkbox_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_country" ADD CONSTRAINT "forms_blocks_country_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_email" ADD CONSTRAINT "forms_blocks_email_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_message" ADD CONSTRAINT "forms_blocks_message_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_number" ADD CONSTRAINT "forms_blocks_number_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select_options" ADD CONSTRAINT "forms_blocks_select_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms_blocks_select"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_select" ADD CONSTRAINT "forms_blocks_select_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_state" ADD CONSTRAINT "forms_blocks_state_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_text" ADD CONSTRAINT "forms_blocks_text_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_blocks_textarea" ADD CONSTRAINT "forms_blocks_textarea_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "forms_emails" ADD CONSTRAINT "forms_emails_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions_submission_data" ADD CONSTRAINT "form_submissions_submission_data_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "form_submissions" ADD CONSTRAINT "form_submissions_form_id_forms_id_fk" FOREIGN KEY ("form_id") REFERENCES "public"."forms"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_categories" ADD CONSTRAINT "search_categories_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search" ADD CONSTRAINT "search_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "search_rels" ADD CONSTRAINT "search_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_categories_fk" FOREIGN KEY ("categories_id") REFERENCES "public"."categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_visits_fk" FOREIGN KEY ("visits_id") REFERENCES "public"."visits"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_work_fk" FOREIGN KEY ("work_id") REFERENCES "public"."work"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_investments_fk" FOREIGN KEY ("investments_id") REFERENCES "public"."investments"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_live_fk" FOREIGN KEY ("live_id") REFERENCES "public"."live"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_volunteer_fk" FOREIGN KEY ("volunteer_id") REFERENCES "public"."volunteer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_innovate_fk" FOREIGN KEY ("innovate_id") REFERENCES "public"."innovate"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_visit_details_fk" FOREIGN KEY ("visit_details_id") REFERENCES "public"."visit_details"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_volunteer_slides_fk" FOREIGN KEY ("volunteer_slides_id") REFERENCES "public"."volunteer_slides"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_social_reels_fk" FOREIGN KEY ("social_reels_id") REFERENCES "public"."social_reels"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_investment_categories_fk" FOREIGN KEY ("investment_categories_id") REFERENCES "public"."investment_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_visit_groups_fk" FOREIGN KEY ("visit_groups_id") REFERENCES "public"."visit_groups"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_properties_fk" FOREIGN KEY ("properties_id") REFERENCES "public"."properties"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_bhk_types_fk" FOREIGN KEY ("bhk_types_id") REFERENCES "public"."bhk_types"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_property_types_fk" FOREIGN KEY ("property_types_id") REFERENCES "public"."property_types"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_locations_fk" FOREIGN KEY ("locations_id") REFERENCES "public"."locations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_amenities_fk" FOREIGN KEY ("amenities_id") REFERENCES "public"."amenities"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contact_messages_fk" FOREIGN KEY ("contact_messages_id") REFERENCES "public"."contact_messages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_propertylocations_fk" FOREIGN KEY ("propertylocations_id") REFERENCES "public"."propertylocations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_categories_fk" FOREIGN KEY ("events_categories_id") REFERENCES "public"."events_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_superchennai_contests_fk" FOREIGN KEY ("superchennai_contests_id") REFERENCES "public"."superchennai_contests"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_contest_fk" FOREIGN KEY ("contest_id") REFERENCES "public"."contest"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_organizers_fk" FOREIGN KEY ("organizers_id") REFERENCES "public"."organizers"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_venues_fk" FOREIGN KEY ("venues_id") REFERENCES "public"."venues"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_margazhi_contest_categories_fk" FOREIGN KEY ("margazhi_contest_categories_id") REFERENCES "public"."margazhi_contest_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_sabha_foods_fk" FOREIGN KEY ("sabha_foods_id") REFERENCES "public"."sabha_foods"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_articles_fk" FOREIGN KEY ("articles_id") REFERENCES "public"."articles"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_ads_fk" FOREIGN KEY ("ads_id") REFERENCES "public"."ads"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_article_types_fk" FOREIGN KEY ("article_types_id") REFERENCES "public"."article_types"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_articlelocations_fk" FOREIGN KEY ("articlelocations_id") REFERENCES "public"."articlelocations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_articlecategory_fk" FOREIGN KEY ("articlecategory_id") REFERENCES "public"."articlecategory"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_languages_fk" FOREIGN KEY ("languages_id") REFERENCES "public"."languages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_neighbourhood_fk" FOREIGN KEY ("neighbourhood_id") REFERENCES "public"."neighbourhood"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_neighbourhood_categories_fk" FOREIGN KEY ("neighbourhood_categories_id") REFERENCES "public"."neighbourhood_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_neighbourhood_subcategories_fk" FOREIGN KEY ("neighbourhood_subcategories_id") REFERENCES "public"."neighbourhood_subcategories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_neighbourhood_tags_fk" FOREIGN KEY ("neighbourhood_tags_id") REFERENCES "public"."neighbourhood_tags"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_chennai_neighbourhoodlocations_fk" FOREIGN KEY ("chennai_neighbourhoodlocations_id") REFERENCES "public"."chennai_neighbourhoodlocations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_trending_chennai_fk" FOREIGN KEY ("trending_chennai_id") REFERENCES "public"."trending_chennai"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_trendinglocations_fk" FOREIGN KEY ("trendinglocations_id") REFERENCES "public"."trendinglocations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_trending_events_categories_fk" FOREIGN KEY ("trending_events_categories_id") REFERENCES "public"."trending_events_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_trending_languages_fk" FOREIGN KEY ("trending_languages_id") REFERENCES "public"."trending_languages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_cricket_score_fk" FOREIGN KEY ("cricket_score_id") REFERENCES "public"."cricket_score"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_ipl_categories_fk" FOREIGN KEY ("ipl_categories_id") REFERENCES "public"."ipl_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_ipl_locations_fk" FOREIGN KEY ("ipl_locations_id") REFERENCES "public"."ipl_locations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_ipl_languages_fk" FOREIGN KEY ("ipl_languages_id") REFERENCES "public"."ipl_languages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_icon_of_month_fk" FOREIGN KEY ("icon_of_month_id") REFERENCES "public"."icon_of_month"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_icon_month_categories_fk" FOREIGN KEY ("icon_month_categories_id") REFERENCES "public"."icon_month_categories"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_whats_ap_chennai_fk" FOREIGN KEY ("whats_ap_chennai_id") REFERENCES "public"."whats_ap_chennai"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_whatsapp_chennai_locations_fk" FOREIGN KEY ("whatsapp_chennai_locations_id") REFERENCES "public"."whatsapp_chennai_locations"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_golu_submissions_fk" FOREIGN KEY ("golu_submissions_id") REFERENCES "public"."golu_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_golu_users_fk" FOREIGN KEY ("golu_users_id") REFERENCES "public"."golu_users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_participants_fk" FOREIGN KEY ("participants_id") REFERENCES "public"."participants"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_golu_dashboard_view_fk" FOREIGN KEY ("golu_dashboard_view_id") REFERENCES "public"."golu_dashboard_view"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_golu_contest_fk" FOREIGN KEY ("golu_contest_id") REFERENCES "public"."golu_contest"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_registration_settings_fk" FOREIGN KEY ("registration_settings_id") REFERENCES "public"."registration_settings"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_event_form_fields_fk" FOREIGN KEY ("event_form_fields_id") REFERENCES "public"."event_form_fields"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_event_registration_submissions_fk" FOREIGN KEY ("event_registration_submissions_id") REFERENCES "public"."event_registration_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_forms_fk" FOREIGN KEY ("forms_id") REFERENCES "public"."forms"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_form_submissions_fk" FOREIGN KEY ("form_submissions_id") REFERENCES "public"."form_submissions"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_search_fk" FOREIGN KEY ("search_id") REFERENCES "public"."search"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_payload_jobs_fk" FOREIGN KEY ("payload_jobs_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_nav_items_link_content" ADD CONSTRAINT "header_nav_items_link_content_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_nav_items_link_gallery" ADD CONSTRAINT "header_nav_items_link_gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_nav_items_link_gallery" ADD CONSTRAINT "header_nav_items_link_gallery_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_nav_items"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_link_content_image_id_media_id_fk" FOREIGN KEY ("link_content_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_nav_items" ADD CONSTRAINT "header_nav_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_social_links" ADD CONSTRAINT "header_social_links_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_social_links" ADD CONSTRAINT "header_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_drawer_menu" ADD CONSTRAINT "header_drawer_menu_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header" ADD CONSTRAINT "header_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header" ADD CONSTRAINT "header_point_cast_image_id_media_id_fk" FOREIGN KEY ("point_cast_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "header_rels" ADD CONSTRAINT "header_rels_posts_fk" FOREIGN KEY ("posts_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_footer_sections_top_section_links_links" ADD CONSTRAINT "footer_footer_sections_top_section_links_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_footer_sections_top_section_links"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_footer_sections_top_section_links" ADD CONSTRAINT "footer_footer_sections_top_section_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_footer_sections_social_links" ADD CONSTRAINT "footer_footer_sections_social_links_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_footer_sections_social_links" ADD CONSTRAINT "footer_footer_sections_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_footer_sections_bottom_right_logos" ADD CONSTRAINT "footer_footer_sections_bottom_right_logos_logo_image_id_media_id_fk" FOREIGN KEY ("logo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_footer_sections_bottom_right_logos" ADD CONSTRAINT "footer_footer_sections_bottom_right_logos_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_footer_sections_floating_action_widgets" ADD CONSTRAINT "footer_footer_sections_floating_action_widgets_icon_image_id_media_id_fk" FOREIGN KEY ("icon_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer_footer_sections_floating_action_widgets" ADD CONSTRAINT "footer_footer_sections_floating_action_widgets_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_sections_partners_logo_id_media_id_fk" FOREIGN KEY ("footer_sections_partners_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_sections_main_footer_logo_id_media_id_fk" FOREIGN KEY ("footer_sections_main_footer_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "footer" ADD CONSTRAINT "footer_footer_sections_design_by_logo_id_media_id_fk" FOREIGN KEY ("footer_sections_design_by_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "icon_of_month_landing_page" ADD CONSTRAINT "icon_of_month_landing_page_desktop_image_id_media_id_fk" FOREIGN KEY ("desktop_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "icon_of_month_landing_page" ADD CONSTRAINT "icon_of_month_landing_page_mobile_image_id_media_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "articles_landing_page" ADD CONSTRAINT "articles_landing_page_desktop_image_id_media_id_fk" FOREIGN KEY ("desktop_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "articles_landing_page" ADD CONSTRAINT "articles_landing_page_mobile_image_id_media_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_contest_settings" ADD CONSTRAINT "golu_contest_settings_hero_image_id_media_id_fk" FOREIGN KEY ("hero_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_landing_page" ADD CONSTRAINT "golu_landing_page_desktop_image_id_media_id_fk" FOREIGN KEY ("desktop_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_landing_page" ADD CONSTRAINT "golu_landing_page_mobile_image_id_media_id_fk" FOREIGN KEY ("mobile_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "golu_landing_page" ADD CONSTRAINT "golu_landing_page_meta_image_id_media_id_fk" FOREIGN KEY ("meta_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "pages_hero_links_link_content_order_idx" ON "pages_hero_links_link_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_hero_links_link_content_parent_id_idx" ON "pages_hero_links_link_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_hero_links_link_gallery_order_idx" ON "pages_hero_links_link_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_hero_links_link_gallery_parent_id_idx" ON "pages_hero_links_link_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_hero_links_link_gallery_image_idx" ON "pages_hero_links_link_gallery" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_hero_links_order_idx" ON "pages_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_hero_links_parent_id_idx" ON "pages_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_hero_links_link_link_content_image_idx" ON "pages_hero_links" USING btree ("link_content_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_explore_cards_order_idx" ON "pages_blocks_explore_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_explore_cards_parent_id_idx" ON "pages_blocks_explore_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_explore_cards_image_idx" ON "pages_blocks_explore_cards" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_explore_cards_page_idx" ON "pages_blocks_explore_cards" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_explore_order_idx" ON "pages_blocks_explore" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_explore_parent_id_idx" ON "pages_blocks_explore" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_explore_path_idx" ON "pages_blocks_explore" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fun_chennai_cards_order_idx" ON "pages_blocks_fun_chennai_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fun_chennai_cards_parent_id_idx" ON "pages_blocks_fun_chennai_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fun_chennai_cards_image_idx" ON "pages_blocks_fun_chennai_cards" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fun_chennai_cards_page_idx" ON "pages_blocks_fun_chennai_cards" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fun_chennai_order_idx" ON "pages_blocks_fun_chennai" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fun_chennai_parent_id_idx" ON "pages_blocks_fun_chennai" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_fun_chennai_path_idx" ON "pages_blocks_fun_chennai" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_startup_chennai_images_order_idx" ON "pages_blocks_startup_chennai_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_startup_chennai_images_parent_id_idx" ON "pages_blocks_startup_chennai_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_startup_chennai_images_image_idx" ON "pages_blocks_startup_chennai_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_startup_chennai_images_page_idx" ON "pages_blocks_startup_chennai_images" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_startup_chennai_order_idx" ON "pages_blocks_startup_chennai" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_startup_chennai_parent_id_idx" ON "pages_blocks_startup_chennai" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_startup_chennai_path_idx" ON "pages_blocks_startup_chennai" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_chennai_investments_order_idx" ON "pages_blocks_chennai_investments" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_chennai_investments_parent_id_idx" ON "pages_blocks_chennai_investments" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_chennai_investments_path_idx" ON "pages_blocks_chennai_investments" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_social_reel_slider_order_idx" ON "pages_blocks_social_reel_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_social_reel_slider_parent_id_idx" ON "pages_blocks_social_reel_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_social_reel_slider_path_idx" ON "pages_blocks_social_reel_slider" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_became_a_volunteer_order_idx" ON "pages_blocks_became_a_volunteer" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_became_a_volunteer_parent_id_idx" ON "pages_blocks_became_a_volunteer" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_became_a_volunteer_path_idx" ON "pages_blocks_became_a_volunteer" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_became_a_volunteer_page_idx" ON "pages_blocks_became_a_volunteer" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_events_calendar_order_idx" ON "pages_blocks_events_calendar" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_events_calendar_parent_id_idx" ON "pages_blocks_events_calendar" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_events_calendar_path_idx" ON "pages_blocks_events_calendar" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_events_calendar_page_idx" ON "pages_blocks_events_calendar" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_slider_block_slides_order_idx" ON "pages_blocks_hero_slider_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_slider_block_slides_parent_id_idx" ON "pages_blocks_hero_slider_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_slider_block_slides_image_idx" ON "pages_blocks_hero_slider_block_slides" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_slider_block_order_idx" ON "pages_blocks_hero_slider_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_slider_block_parent_id_idx" ON "pages_blocks_hero_slider_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_hero_slider_block_path_idx" ON "pages_blocks_hero_slider_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_visitcategory_items_order_idx" ON "pages_blocks_visitcategory_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_visitcategory_items_parent_id_idx" ON "pages_blocks_visitcategory_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_visitcategory_items_image_idx" ON "pages_blocks_visitcategory_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_visitcategory_items_page_idx" ON "pages_blocks_visitcategory_items" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_visitcategory_order_idx" ON "pages_blocks_visitcategory" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_visitcategory_parent_id_idx" ON "pages_blocks_visitcategory" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_visitcategory_path_idx" ON "pages_blocks_visitcategory" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_zig_zag_content_sections_order_idx" ON "pages_blocks_zig_zag_content_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_zig_zag_content_sections_parent_id_idx" ON "pages_blocks_zig_zag_content_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_zig_zag_content_sections_image_idx" ON "pages_blocks_zig_zag_content_sections" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_zig_zag_content_order_idx" ON "pages_blocks_zig_zag_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_zig_zag_content_parent_id_idx" ON "pages_blocks_zig_zag_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_zig_zag_content_path_idx" ON "pages_blocks_zig_zag_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_volunteer_became_section_order_idx" ON "pages_blocks_volunteer_became_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_volunteer_became_section_parent_id_idx" ON "pages_blocks_volunteer_became_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_volunteer_became_section_path_idx" ON "pages_blocks_volunteer_became_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_main_page_banner_order_idx" ON "pages_blocks_main_page_banner" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_main_page_banner_parent_id_idx" ON "pages_blocks_main_page_banner" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_main_page_banner_path_idx" ON "pages_blocks_main_page_banner" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_main_page_banner_image_idx" ON "pages_blocks_main_page_banner" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_intro_text_block_order_idx" ON "pages_blocks_intro_text_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_intro_text_block_parent_id_idx" ON "pages_blocks_intro_text_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_intro_text_block_path_idx" ON "pages_blocks_intro_text_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_global_search_filters_options_order_idx" ON "pages_blocks_global_search_filters_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_global_search_filters_options_parent_id_idx" ON "pages_blocks_global_search_filters_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_global_search_filters_order_idx" ON "pages_blocks_global_search_filters" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_global_search_filters_parent_id_idx" ON "pages_blocks_global_search_filters" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_global_search_order_idx" ON "pages_blocks_global_search" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_global_search_parent_id_idx" ON "pages_blocks_global_search" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_global_search_path_idx" ON "pages_blocks_global_search" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_popup_order_idx" ON "pages_blocks_form_popup" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_popup_parent_id_idx" ON "pages_blocks_form_popup" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_form_popup_path_idx" ON "pages_blocks_form_popup" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_infography_food_items_order_idx" ON "pages_blocks_infography_food_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_infography_food_items_parent_id_idx" ON "pages_blocks_infography_food_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_infography_food_items_image_idx" ON "pages_blocks_infography_food_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_infography_food_items_page_idx" ON "pages_blocks_infography_food_items" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_infography_order_idx" ON "pages_blocks_infography" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_infography_parent_id_idx" ON "pages_blocks_infography" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_infography_path_idx" ON "pages_blocks_infography" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_two_column_feature_block_order_idx" ON "pages_blocks_two_column_feature_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_two_column_feature_block_parent_id_idx" ON "pages_blocks_two_column_feature_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_two_column_feature_block_path_idx" ON "pages_blocks_two_column_feature_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_two_column_feature_block_tech_image_idx" ON "pages_blocks_two_column_feature_block" USING btree ("tech_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_two_column_feature_block_edu_image_idx" ON "pages_blocks_two_column_feature_block" USING btree ("edu_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_two_column_feature_block_tech_link_tech_link_page_idx" ON "pages_blocks_two_column_feature_block" USING btree ("tech_link_page_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_two_column_feature_block_edu_link_edu_link_page_idx" ON "pages_blocks_two_column_feature_block" USING btree ("edu_link_page_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_utilities_tabs_order_idx" ON "pages_blocks_utilities_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_utilities_tabs_parent_id_idx" ON "pages_blocks_utilities_tabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_utilities_tabs_image_idx" ON "pages_blocks_utilities_tabs" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_utilities_order_idx" ON "pages_blocks_utilities" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_utilities_parent_id_idx" ON "pages_blocks_utilities" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_utilities_path_idx" ON "pages_blocks_utilities" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_zone_carousel_cards_order_idx" ON "pages_blocks_content_zone_carousel_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_zone_carousel_cards_parent_id_idx" ON "pages_blocks_content_zone_carousel_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_zone_carousel_cards_image_idx" ON "pages_blocks_content_zone_carousel_cards" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_zone_carousel_order_idx" ON "pages_blocks_content_zone_carousel" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_zone_carousel_parent_id_idx" ON "pages_blocks_content_zone_carousel" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_content_zone_carousel_path_idx" ON "pages_blocks_content_zone_carousel" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_allevents_order_idx" ON "pages_blocks_allevents" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_allevents_parent_id_idx" ON "pages_blocks_allevents" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_allevents_path_idx" ON "pages_blocks_allevents" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_live_intror_section_order_idx" ON "pages_blocks_live_intror_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_live_intror_section_parent_id_idx" ON "pages_blocks_live_intror_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_live_intror_section_path_idx" ON "pages_blocks_live_intror_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_live_intror_section_image_idx" ON "pages_blocks_live_intror_section" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_chennai_life_essentials_essentials_order_idx" ON "pages_blocks_chennai_life_essentials_essentials" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_chennai_life_essentials_essentials_parent_id_idx" ON "pages_blocks_chennai_life_essentials_essentials" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_chennai_life_essentials_essentials_page_idx" ON "pages_blocks_chennai_life_essentials_essentials" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_chennai_life_essentials_essentials_image_idx" ON "pages_blocks_chennai_life_essentials_essentials" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_chennai_life_essentials_order_idx" ON "pages_blocks_chennai_life_essentials" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_chennai_life_essentials_parent_id_idx" ON "pages_blocks_chennai_life_essentials" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_chennai_life_essentials_path_idx" ON "pages_blocks_chennai_life_essentials" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_investment_category_list_items_order_idx" ON "pages_blocks_investment_category_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_investment_category_list_items_parent_id_idx" ON "pages_blocks_investment_category_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_investment_category_list_items_image_idx" ON "pages_blocks_investment_category_list_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_investment_category_list_order_idx" ON "pages_blocks_investment_category_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_investment_category_list_parent_id_idx" ON "pages_blocks_investment_category_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_investment_category_list_path_idx" ON "pages_blocks_investment_category_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_investment_category_list_background_image_idx" ON "pages_blocks_investment_category_list" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_innovate_slider_order_idx" ON "pages_blocks_innovate_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_innovate_slider_parent_id_idx" ON "pages_blocks_innovate_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_innovate_slider_path_idx" ON "pages_blocks_innovate_slider" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_hover_image_section_items_order_idx" ON "pages_blocks_text_hover_image_section_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_hover_image_section_items_parent_id_idx" ON "pages_blocks_text_hover_image_section_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_hover_image_section_items_page_idx" ON "pages_blocks_text_hover_image_section_items" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_hover_image_section_items_image_idx" ON "pages_blocks_text_hover_image_section_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_hover_image_section_order_idx" ON "pages_blocks_text_hover_image_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_hover_image_section_parent_id_idx" ON "pages_blocks_text_hover_image_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_text_hover_image_section_path_idx" ON "pages_blocks_text_hover_image_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_trending_chennai_slider_order_idx" ON "pages_blocks_trending_chennai_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_trending_chennai_slider_parent_id_idx" ON "pages_blocks_trending_chennai_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_trending_chennai_slider_path_idx" ON "pages_blocks_trending_chennai_slider" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_second_section_first_column_order_idx" ON "pages_blocks_second_section_first_column" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_second_section_first_column_parent_id_idx" ON "pages_blocks_second_section_first_column" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_second_section_second_column_order_idx" ON "pages_blocks_second_section_second_column" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_second_section_second_column_parent_id_idx" ON "pages_blocks_second_section_second_column" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_second_section_order_idx" ON "pages_blocks_second_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_second_section_parent_id_idx" ON "pages_blocks_second_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_second_section_path_idx" ON "pages_blocks_second_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_second_section_icon_idx" ON "pages_blocks_second_section" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_popup_banner_order_idx" ON "pages_blocks_popup_banner" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_popup_banner_parent_id_idx" ON "pages_blocks_popup_banner" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_popup_banner_path_idx" ON "pages_blocks_popup_banner" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_popup_banner_popup_image_idx" ON "pages_blocks_popup_banner" USING btree ("popup_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cricket_score_block_points_table_order_idx" ON "pages_blocks_cricket_score_block_points_table" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cricket_score_block_points_table_parent_id_idx" ON "pages_blocks_cricket_score_block_points_table" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cricket_score_block_points_table_team_logo_idx" ON "pages_blocks_cricket_score_block_points_table" USING btree ("team_logo_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cricket_score_block_order_idx" ON "pages_blocks_cricket_score_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cricket_score_block_parent_id_idx" ON "pages_blocks_cricket_score_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cricket_score_block_path_idx" ON "pages_blocks_cricket_score_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_cricket_score_block_i_p_limage_idx" ON "pages_blocks_cricket_score_block" USING btree ("i_p_limage_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_super_chennai_block_meta_items_order_idx" ON "pages_blocks_conclave_super_chennai_block_meta_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_super_chennai_block_meta_items_parent_id_idx" ON "pages_blocks_conclave_super_chennai_block_meta_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_super_chennai_block_meta_items_icon_idx" ON "pages_blocks_conclave_super_chennai_block_meta_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_super_chennai_block_order_idx" ON "pages_blocks_conclave_super_chennai_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_super_chennai_block_parent_id_idx" ON "pages_blocks_conclave_super_chennai_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_super_chennai_block_path_idx" ON "pages_blocks_conclave_super_chennai_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_about_block_paragraphs_order_idx" ON "pages_blocks_conclave_about_block_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_about_block_paragraphs_parent_id_idx" ON "pages_blocks_conclave_about_block_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_about_block_order_idx" ON "pages_blocks_conclave_about_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_about_block_parent_id_idx" ON "pages_blocks_conclave_about_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_about_block_path_idx" ON "pages_blocks_conclave_about_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_about_block_image_idx" ON "pages_blocks_conclave_about_block" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_agenda_block_agenda_items_speakers_order_idx" ON "pages_blocks_conclave_agenda_block_agenda_items_speakers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_agenda_block_agenda_items_speakers_parent_id_idx" ON "pages_blocks_conclave_agenda_block_agenda_items_speakers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_agenda_block_agenda_items_order_idx" ON "pages_blocks_conclave_agenda_block_agenda_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_agenda_block_agenda_items_parent_id_idx" ON "pages_blocks_conclave_agenda_block_agenda_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_agenda_block_order_idx" ON "pages_blocks_conclave_agenda_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_agenda_block_parent_id_idx" ON "pages_blocks_conclave_agenda_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_agenda_block_path_idx" ON "pages_blocks_conclave_agenda_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_speakers_block_speakers_order_idx" ON "pages_blocks_conclave_speakers_block_speakers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_speakers_block_speakers_parent_id_idx" ON "pages_blocks_conclave_speakers_block_speakers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_speakers_block_speakers_image_idx" ON "pages_blocks_conclave_speakers_block_speakers" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_speakers_block_order_idx" ON "pages_blocks_conclave_speakers_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_speakers_block_parent_id_idx" ON "pages_blocks_conclave_speakers_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_speakers_block_path_idx" ON "pages_blocks_conclave_speakers_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_five_pillars_block_pillars_paragraphs_order_idx" ON "pages_blocks_conclave_five_pillars_block_pillars_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_five_pillars_block_pillars_paragraphs_parent_id_idx" ON "pages_blocks_conclave_five_pillars_block_pillars_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_five_pillars_block_pillars_order_idx" ON "pages_blocks_conclave_five_pillars_block_pillars" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_five_pillars_block_pillars_parent_id_idx" ON "pages_blocks_conclave_five_pillars_block_pillars" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_five_pillars_block_pillars_icon_idx" ON "pages_blocks_conclave_five_pillars_block_pillars" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_five_pillars_block_order_idx" ON "pages_blocks_conclave_five_pillars_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_five_pillars_block_parent_id_idx" ON "pages_blocks_conclave_five_pillars_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_five_pillars_block_path_idx" ON "pages_blocks_conclave_five_pillars_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_cta_block_order_idx" ON "pages_blocks_conclave_cta_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_cta_block_parent_id_idx" ON "pages_blocks_conclave_cta_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_cta_block_path_idx" ON "pages_blocks_conclave_cta_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_cta_block_background_image_idx" ON "pages_blocks_conclave_cta_block" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_cta_block_logo_image_idx" ON "pages_blocks_conclave_cta_block" USING btree ("logo_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_partners_block_partners_order_idx" ON "pages_blocks_conclave_partners_block_partners" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_partners_block_partners_parent_id_idx" ON "pages_blocks_conclave_partners_block_partners" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_partners_block_partners_image_idx" ON "pages_blocks_conclave_partners_block_partners" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_partners_block_partners_description_idx" ON "pages_blocks_conclave_partners_block_partners" USING btree ("description_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_partners_block_order_idx" ON "pages_blocks_conclave_partners_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_partners_block_parent_id_idx" ON "pages_blocks_conclave_partners_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_partners_block_path_idx" ON "pages_blocks_conclave_partners_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_gallery_block_gallery_items_order_idx" ON "pages_blocks_conclave_gallery_block_gallery_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_gallery_block_gallery_items_parent_id_idx" ON "pages_blocks_conclave_gallery_block_gallery_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_gallery_block_gallery_items_image_idx" ON "pages_blocks_conclave_gallery_block_gallery_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_gallery_block_order_idx" ON "pages_blocks_conclave_gallery_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_gallery_block_parent_id_idx" ON "pages_blocks_conclave_gallery_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_gallery_block_path_idx" ON "pages_blocks_conclave_gallery_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_conclave_gallery_block_featured_event_featured_event_image_idx" ON "pages_blocks_conclave_gallery_block" USING btree ("featured_event_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_inner_page_hero_banner_block_breadcrumbs_order_idx" ON "pages_blocks_inner_page_hero_banner_block_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_inner_page_hero_banner_block_breadcrumbs_parent_id_idx" ON "pages_blocks_inner_page_hero_banner_block_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_inner_page_hero_banner_block_order_idx" ON "pages_blocks_inner_page_hero_banner_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_inner_page_hero_banner_block_parent_id_idx" ON "pages_blocks_inner_page_hero_banner_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_inner_page_hero_banner_block_path_idx" ON "pages_blocks_inner_page_hero_banner_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_inner_page_hero_banner_block_banner_image_idx" ON "pages_blocks_inner_page_hero_banner_block" USING btree ("banner_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_inner_page_hero_banner_block_mobile_banner_image_idx" ON "pages_blocks_inner_page_hero_banner_block" USING btree ("mobile_banner_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_section_block_faq_list_order_idx" ON "pages_blocks_faq_section_block_faq_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_section_block_faq_list_parent_id_idx" ON "pages_blocks_faq_section_block_faq_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_section_block_order_idx" ON "pages_blocks_faq_section_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_section_block_parent_id_idx" ON "pages_blocks_faq_section_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_faq_section_block_path_idx" ON "pages_blocks_faq_section_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_intro_block_paragraphs_order_idx" ON "pages_blocks_about_intro_block_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_intro_block_paragraphs_parent_id_idx" ON "pages_blocks_about_intro_block_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_intro_block_order_idx" ON "pages_blocks_about_intro_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_intro_block_parent_id_idx" ON "pages_blocks_about_intro_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_intro_block_path_idx" ON "pages_blocks_about_intro_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "wsc_cols_order_idx" ON "wsc_cols" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "wsc_cols_parent_id_idx" ON "wsc_cols" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_welcome_super_chennai_block_new_order_idx" ON "pages_blocks_about_welcome_super_chennai_block_new" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_welcome_super_chennai_block_new_parent_id_idx" ON "pages_blocks_about_welcome_super_chennai_block_new" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_welcome_super_chennai_block_new_path_idx" ON "pages_blocks_about_welcome_super_chennai_block_new" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_welcome_super_chennai_block_new_image_idx" ON "pages_blocks_about_welcome_super_chennai_block_new" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "vis_mis_c_order_idx" ON "vis_mis_c" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "vis_mis_c_parent_id_idx" ON "vis_mis_c" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "vis_mis_c_icon_idx" ON "vis_mis_c" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_vision_mission_block_order_idx" ON "pages_blocks_vision_mission_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_vision_mission_block_parent_id_idx" ON "pages_blocks_vision_mission_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_vision_mission_block_path_idx" ON "pages_blocks_vision_mission_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "fnd_pts_order_idx" ON "fnd_pts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "fnd_pts_parent_id_idx" ON "fnd_pts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_foundations_block_order_idx" ON "pages_blocks_about_foundations_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_foundations_block_parent_id_idx" ON "pages_blocks_about_foundations_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_foundations_block_path_idx" ON "pages_blocks_about_foundations_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_foundations_block_image_idx" ON "pages_blocks_about_foundations_block" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_namma_chennai_block_order_idx" ON "pages_blocks_about_namma_chennai_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_namma_chennai_block_parent_id_idx" ON "pages_blocks_about_namma_chennai_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_namma_chennai_block_path_idx" ON "pages_blocks_about_namma_chennai_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "wc_tabs_order_idx" ON "wc_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "wc_tabs_parent_id_idx" ON "wc_tabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "wc_tabs_image_idx" ON "wc_tabs" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_why_chennai_block_order_idx" ON "pages_blocks_about_why_chennai_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_why_chennai_block_parent_id_idx" ON "pages_blocks_about_why_chennai_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_about_why_chennai_block_path_idx" ON "pages_blocks_about_why_chennai_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "t_pts_order_idx" ON "t_pts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "t_pts_parent_id_idx" ON "t_pts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "t_info_secs_order_idx" ON "t_info_secs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "t_info_secs_parent_id_idx" ON "t_info_secs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "t_info_secs_icon_image_idx" ON "t_info_secs" USING btree ("icon_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_invest_page_border_section_order_idx" ON "pages_blocks_invest_page_border_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_invest_page_border_section_parent_id_idx" ON "pages_blocks_invest_page_border_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_invest_page_border_section_path_idx" ON "pages_blocks_invest_page_border_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "ut_tabs_order_idx" ON "ut_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "ut_tabs_parent_id_idx" ON "ut_tabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "ut_tabs_icon_idx" ON "ut_tabs" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_invest_page_tab_block_order_idx" ON "pages_blocks_invest_page_tab_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_invest_page_tab_block_parent_id_idx" ON "pages_blocks_invest_page_tab_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_invest_page_tab_block_path_idx" ON "pages_blocks_invest_page_tab_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "inv_slides_order_idx" ON "inv_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "inv_slides_parent_id_idx" ON "inv_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "inv_slides_image_idx" ON "inv_slides" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_invest_page_slider_block_order_idx" ON "pages_blocks_invest_page_slider_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_invest_page_slider_block_parent_id_idx" ON "pages_blocks_invest_page_slider_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_invest_page_slider_block_path_idx" ON "pages_blocks_invest_page_slider_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "inn_slides_order_idx" ON "inn_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "inn_slides_parent_id_idx" ON "inn_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "inn_slides_image_idx" ON "inn_slides" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_innovate_page_slider_block_order_idx" ON "pages_blocks_innovate_page_slider_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_innovate_page_slider_block_parent_id_idx" ON "pages_blocks_innovate_page_slider_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_innovate_page_slider_block_path_idx" ON "pages_blocks_innovate_page_slider_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "info_items_order_idx" ON "info_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "info_items_parent_id_idx" ON "info_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "info_items_icon_idx" ON "info_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_innovate_info_section_block_order_idx" ON "pages_blocks_innovate_info_section_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_innovate_info_section_block_parent_id_idx" ON "pages_blocks_innovate_info_section_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_innovate_info_section_block_path_idx" ON "pages_blocks_innovate_info_section_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_innovate_info_section_block_main_image_idx" ON "pages_blocks_innovate_info_section_block" USING btree ("main_image_id");
  CREATE INDEX IF NOT EXISTS "iwc_li_order_idx" ON "iwc_li" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "iwc_li_parent_id_idx" ON "iwc_li" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "iwc_cb_order_idx" ON "iwc_cb" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "iwc_cb_parent_id_idx" ON "iwc_cb" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_imagewith_content_order_idx" ON "pages_blocks_imagewith_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_imagewith_content_parent_id_idx" ON "pages_blocks_imagewith_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_imagewith_content_path_idx" ON "pages_blocks_imagewith_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_imagewith_content_main_image_idx" ON "pages_blocks_imagewith_content" USING btree ("main_image_id");
  CREATE INDEX IF NOT EXISTS "tp_p_order_idx" ON "tp_p" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "tp_p_parent_id_idx" ON "tp_p" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "tp_bp_order_idx" ON "tp_bp" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "tp_bp_parent_id_idx" ON "tp_bp" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "tp_cards_order_idx" ON "tp_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "tp_cards_parent_id_idx" ON "tp_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_without_content_block_order_idx" ON "pages_blocks_image_without_content_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_without_content_block_parent_id_idx" ON "pages_blocks_image_without_content_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_without_content_block_path_idx" ON "pages_blocks_image_without_content_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "ev_h_order_idx" ON "ev_h" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "ev_h_parent_id_idx" ON "ev_h" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "ev_c_order_idx" ON "ev_c" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "ev_c_parent_id_idx" ON "ev_c" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "ev_r_order_idx" ON "ev_r" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "ev_r_parent_id_idx" ON "ev_r" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_table_section_block_order_idx" ON "pages_blocks_table_section_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_table_section_block_parent_id_idx" ON "pages_blocks_table_section_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_table_section_block_path_idx" ON "pages_blocks_table_section_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "in_sld_c_order_idx" ON "in_sld_c" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "in_sld_c_parent_id_idx" ON "in_sld_c" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "in_sld_c_image_idx" ON "in_sld_c" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_inner_page_slider_block_order_idx" ON "pages_blocks_inner_page_slider_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_inner_page_slider_block_parent_id_idx" ON "pages_blocks_inner_page_slider_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_inner_page_slider_block_path_idx" ON "pages_blocks_inner_page_slider_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_slider_with_popup_block_order_idx" ON "pages_blocks_gallery_slider_with_popup_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_slider_with_popup_block_parent_id_idx" ON "pages_blocks_gallery_slider_with_popup_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_gallery_slider_with_popup_block_path_idx" ON "pages_blocks_gallery_slider_with_popup_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "l_img_r_sec_order_idx" ON "l_img_r_sec" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "l_img_r_sec_parent_id_idx" ON "l_img_r_sec" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "l_img_r_sec_path_idx" ON "l_img_r_sec" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "l_img_r_sec_image_idx" ON "l_img_r_sec" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "bs_items_order_idx" ON "bs_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "bs_items_parent_id_idx" ON "bs_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "bs_items_imgs_idx" ON "bs_items" USING btree ("imgs_id");
  CREATE INDEX IF NOT EXISTS "bs_sec_order_idx" ON "bs_sec" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "bs_sec_parent_id_idx" ON "bs_sec" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "bs_sec_image_idx" ON "bs_sec" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefit_sections_block_order_idx" ON "pages_blocks_benefit_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefit_sections_block_parent_id_idx" ON "pages_blocks_benefit_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_benefit_sections_block_path_idx" ON "pages_blocks_benefit_sections_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "wi_paras_order_idx" ON "wi_paras" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "wi_paras_parent_id_idx" ON "wi_paras" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_intro_pink_text_with_content_block_order_idx" ON "pages_blocks_intro_pink_text_with_content_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_intro_pink_text_with_content_block_parent_id_idx" ON "pages_blocks_intro_pink_text_with_content_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_intro_pink_text_with_content_block_path_idx" ON "pages_blocks_intro_pink_text_with_content_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "vils_p_order_idx" ON "vils_p" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "vils_p_parent_id_idx" ON "vils_p" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "vils_p_imgs_idx" ON "vils_p" USING btree ("imgs_id");
  CREATE INDEX IF NOT EXISTS "vils_t_order_idx" ON "vils_t" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "vils_t_parent_id_idx" ON "vils_t" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "vils_s_order_idx" ON "vils_s" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "vils_s_parent_id_idx" ON "vils_s" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "vils_s_image_idx" ON "vils_s" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "vils_b_order_idx" ON "vils_b" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "vils_b_parent_id_idx" ON "vils_b" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "vils_b_path_idx" ON "vils_b" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "nc_locs_order_idx" ON "nc_locs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nc_locs_parent_id_idx" ON "nc_locs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nc_plcs_order_idx" ON "nc_plcs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nc_plcs_parent_id_idx" ON "nc_plcs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "nc_data_order_idx" ON "nc_data" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "nc_data_parent_id_idx" ON "nc_data" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_work_network_section_block_order_idx" ON "pages_blocks_work_network_section_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_work_network_section_block_parent_id_idx" ON "pages_blocks_work_network_section_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_work_network_section_block_path_idx" ON "pages_blocks_work_network_section_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "wpis_bp_order_idx" ON "wpis_bp" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "wpis_bp_parent_id_idx" ON "wpis_bp" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "wpis_p_order_idx" ON "wpis_p" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "wpis_p_parent_id_idx" ON "wpis_p" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "wpis_p_imgs_idx" ON "wpis_p" USING btree ("imgs_id");
  CREATE INDEX IF NOT EXISTS "wpis_s_order_idx" ON "wpis_s" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "wpis_s_parent_id_idx" ON "wpis_s" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "wpis_s_image_idx" ON "wpis_s" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "wpis_b_order_idx" ON "wpis_b" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "wpis_b_parent_id_idx" ON "wpis_b" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "wpis_b_path_idx" ON "wpis_b" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "hch_loc_order_idx" ON "hch_loc" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "hch_loc_parent_id_idx" ON "hch_loc" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "hch_plc_order_idx" ON "hch_plc" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "hch_plc_parent_id_idx" ON "hch_plc" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "hch_cat_order_idx" ON "hch_cat" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "hch_cat_parent_id_idx" ON "hch_cat" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_health_care_hospitals_block_order_idx" ON "pages_blocks_health_care_hospitals_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_health_care_hospitals_block_parent_id_idx" ON "pages_blocks_health_care_hospitals_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_health_care_hospitals_block_path_idx" ON "pages_blocks_health_care_hospitals_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "cl_tpts_order_idx" ON "cl_tpts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cl_tpts_parent_id_idx" ON "cl_tpts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cl_tpts_imgs_idx" ON "cl_tpts" USING btree ("imgs_id");
  CREATE INDEX IF NOT EXISTS "cl_tnt_order_idx" ON "cl_tnt" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cl_tnt_parent_id_idx" ON "cl_tnt" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cl_img_order_idx" ON "cl_img" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cl_img_parent_id_idx" ON "cl_img" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cl_img_image_idx" ON "cl_img" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "cl_dpts_order_idx" ON "cl_dpts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cl_dpts_parent_id_idx" ON "cl_dpts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cl_dtl_order_idx" ON "cl_dtl" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cl_dtl_parent_id_idx" ON "cl_dtl" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "clb_order_idx" ON "clb" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "clb_parent_id_idx" ON "clb" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "clb_path_idx" ON "clb" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "ttd_pts_order_idx" ON "ttd_pts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "ttd_pts_parent_id_idx" ON "ttd_pts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "ttd_pts_imgs_idx" ON "ttd_pts" USING btree ("imgs_id");
  CREATE INDEX IF NOT EXISTS "ttd_tnt_order_idx" ON "ttd_tnt" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "ttd_tnt_parent_id_idx" ON "ttd_tnt" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "ttd_sec_order_idx" ON "ttd_sec" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "ttd_sec_parent_id_idx" ON "ttd_sec" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "ttd_sec_image_idx" ON "ttd_sec" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "ttd_blk_order_idx" ON "ttd_blk" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "ttd_blk_parent_id_idx" ON "ttd_blk" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "ttd_blk_path_idx" ON "ttd_blk" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "cn_nbh_order_idx" ON "cn_nbh" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cn_nbh_parent_id_idx" ON "cn_nbh" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cn_nbh_imgs_idx" ON "cn_nbh" USING btree ("imgs_id");
  CREATE INDEX IF NOT EXISTS "cn_sec_order_idx" ON "cn_sec" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cn_sec_parent_id_idx" ON "cn_sec" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cn_sec_image_idx" ON "cn_sec" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "cnb_order_idx" ON "cnb" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cnb_parent_id_idx" ON "cnb" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cnb_path_idx" ON "cnb" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "qol_sec_order_idx" ON "qol_sec" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "qol_sec_parent_id_idx" ON "qol_sec" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "qol_sec_image_idx" ON "qol_sec" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "qol_blk_order_idx" ON "qol_blk" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "qol_blk_parent_id_idx" ON "qol_blk" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "qol_blk_path_idx" ON "qol_blk" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "vwl_order_idx" ON "vwl" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "vwl_parent_id_idx" ON "vwl" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "vwp_order_idx" ON "vwp" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "vwp_parent_id_idx" ON "vwp" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "vwp_imgs_idx" ON "vwp" USING btree ("imgs_id");
  CREATE INDEX IF NOT EXISTS "vwt_order_idx" ON "vwt" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "vwt_parent_id_idx" ON "vwt" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "vws_order_idx" ON "vws" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "vws_parent_id_idx" ON "vws" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "vws_image_idx" ON "vws" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "vw_block_order_idx" ON "vw_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "vw_block_parent_id_idx" ON "vw_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "vw_block_path_idx" ON "vw_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "cnt_add_order_idx" ON "cnt_add" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cnt_add_parent_id_idx" ON "cnt_add" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cnt_blk_order_idx" ON "cnt_blk" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cnt_blk_parent_id_idx" ON "cnt_blk" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cnt_blk_path_idx" ON "cnt_blk" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "cnt_blk_logo_idx" ON "cnt_blk" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "cn_tabs_order_idx" ON "cn_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cn_tabs_parent_id_idx" ON "cn_tabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cn_tabs_tab_icon_idx" ON "cn_tabs" USING btree ("tab_icon_id");
  CREATE INDEX IF NOT EXISTS "cn_asgn_tabs_order_idx" ON "cn_asgn_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cn_asgn_tabs_parent_id_idx" ON "cn_asgn_tabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cn_feats_order_idx" ON "cn_feats" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cn_feats_parent_id_idx" ON "cn_feats" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cn_svcs_order_idx" ON "cn_svcs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cn_svcs_parent_id_idx" ON "cn_svcs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cn_apps_order_idx" ON "cn_apps" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cn_apps_parent_id_idx" ON "cn_apps" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cn_apps_app_image_idx" ON "cn_apps" USING btree ("app_image_id");
  CREATE INDEX IF NOT EXISTS "cn_apps_blk_order_idx" ON "cn_apps_blk" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cn_apps_blk_parent_id_idx" ON "cn_apps_blk" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cn_apps_blk_path_idx" ON "cn_apps_blk" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "loc_arr_order_idx" ON "loc_arr" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "loc_arr_parent_id_idx" ON "loc_arr" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "plc_arr_order_idx" ON "plc_arr" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "plc_arr_parent_id_idx" ON "plc_arr" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cat_arr_order_idx" ON "cat_arr" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cat_arr_parent_id_idx" ON "cat_arr" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "reg_arr_order_idx" ON "reg_arr" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "reg_arr_parent_id_idx" ON "reg_arr" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "reg_arr_hero_image_idx" ON "reg_arr" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "plc_sec_blk_order_idx" ON "plc_sec_blk" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "plc_sec_blk_parent_id_idx" ON "plc_sec_blk" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "plc_sec_blk_path_idx" ON "plc_sec_blk" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_title_block_order_idx" ON "pages_blocks_image_title_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_title_block_parent_id_idx" ON "pages_blocks_image_title_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_title_block_path_idx" ON "pages_blocks_image_title_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_image_title_block_image_idx" ON "pages_blocks_image_title_block" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_info_section_block_points_order_idx" ON "pages_blocks_info_section_block_points" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_info_section_block_points_parent_id_idx" ON "pages_blocks_info_section_block_points" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_info_section_block_order_idx" ON "pages_blocks_info_section_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_info_section_block_parent_id_idx" ON "pages_blocks_info_section_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_info_section_block_path_idx" ON "pages_blocks_info_section_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_info_section_block_icon_idx" ON "pages_blocks_info_section_block" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_table_block_headers_order_idx" ON "pages_blocks_table_block_headers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_table_block_headers_parent_id_idx" ON "pages_blocks_table_block_headers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_table_block_rows_cells_order_idx" ON "pages_blocks_table_block_rows_cells" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_table_block_rows_cells_parent_id_idx" ON "pages_blocks_table_block_rows_cells" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_table_block_rows_order_idx" ON "pages_blocks_table_block_rows" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_table_block_rows_parent_id_idx" ON "pages_blocks_table_block_rows" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_table_block_order_idx" ON "pages_blocks_table_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_table_block_parent_id_idx" ON "pages_blocks_table_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_table_block_path_idx" ON "pages_blocks_table_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_category_block_items_locations_order_idx" ON "pages_blocks_category_block_items_locations" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_category_block_items_locations_parent_id_idx" ON "pages_blocks_category_block_items_locations" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_category_block_items_order_idx" ON "pages_blocks_category_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_category_block_items_parent_id_idx" ON "pages_blocks_category_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_category_block_order_idx" ON "pages_blocks_category_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_category_block_parent_id_idx" ON "pages_blocks_category_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_category_block_path_idx" ON "pages_blocks_category_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_llp_block_main_tabs_regions_order_idx" ON "pages_blocks_llp_block_main_tabs_regions" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_llp_block_main_tabs_regions_parent_id_idx" ON "pages_blocks_llp_block_main_tabs_regions" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_llp_block_main_tabs_regions_hero_image_idx" ON "pages_blocks_llp_block_main_tabs_regions" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_llp_block_main_tabs_order_idx" ON "pages_blocks_llp_block_main_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_llp_block_main_tabs_parent_id_idx" ON "pages_blocks_llp_block_main_tabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_llp_block_order_idx" ON "pages_blocks_llp_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_llp_block_parent_id_idx" ON "pages_blocks_llp_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_llp_block_path_idx" ON "pages_blocks_llp_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "cards_order_idx" ON "cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cards_parent_id_idx" ON "cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cards_card_media_idx" ON "cards" USING btree ("card_media_id");
  CREATE INDEX IF NOT EXISTS "cats_order_idx" ON "cats" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cats_parent_id_idx" ON "cats" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "chenz_inv_2026_order_idx" ON "chenz_inv_2026" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "chenz_inv_2026_parent_id_idx" ON "chenz_inv_2026" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "chenz_inv_2026_path_idx" ON "chenz_inv_2026" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "ev_lst_2026_events_cards2026_order_idx" ON "ev_lst_2026_events_cards2026" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "ev_lst_2026_events_cards2026_parent_id_idx" ON "ev_lst_2026_events_cards2026" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "ev_lst_2026_events_cards2026_card_media_idx" ON "ev_lst_2026_events_cards2026" USING btree ("card_media_id");
  CREATE INDEX IF NOT EXISTS "ev_lst_2026_order_idx" ON "ev_lst_2026" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "ev_lst_2026_parent_id_idx" ON "ev_lst_2026" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "ev_lst_2026_path_idx" ON "ev_lst_2026" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "infra_boom_2026_order_idx" ON "infra_boom_2026" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "infra_boom_2026_parent_id_idx" ON "infra_boom_2026" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "infra_boom_2026_path_idx" ON "infra_boom_2026" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "infra_boom_2026_pdf_file_idx" ON "infra_boom_2026" USING btree ("pdf_file_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_manifesto_section_block_slider_images_order_idx" ON "pages_blocks_manifesto_section_block_slider_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_manifesto_section_block_slider_images_parent_id_idx" ON "pages_blocks_manifesto_section_block_slider_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_manifesto_section_block_slider_images_image_idx" ON "pages_blocks_manifesto_section_block_slider_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_manifesto_section_block_order_idx" ON "pages_blocks_manifesto_section_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_manifesto_section_block_parent_id_idx" ON "pages_blocks_manifesto_section_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_manifesto_section_block_path_idx" ON "pages_blocks_manifesto_section_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "tvc_2026_tvc_cards_order_idx" ON "tvc_2026_tvc_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "tvc_2026_tvc_cards_parent_id_idx" ON "tvc_2026_tvc_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "tvc_2026_tvc_cards_image_idx" ON "tvc_2026_tvc_cards" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "tvc_2026_order_idx" ON "tvc_2026" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "tvc_2026_parent_id_idx" ON "tvc_2026" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "tvc_2026_path_idx" ON "tvc_2026" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "media_coverage_main_page_news_article_order_idx" ON "media_coverage_main_page_news_article" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "media_coverage_main_page_news_article_parent_id_idx" ON "media_coverage_main_page_news_article" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "media_coverage_main_page_news_article_image_idx" ON "media_coverage_main_page_news_article" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "media_coverage_main_page_news_photos_order_idx" ON "media_coverage_main_page_news_photos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "media_coverage_main_page_news_photos_parent_id_idx" ON "media_coverage_main_page_news_photos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "media_coverage_main_page_news_photos_image_idx" ON "media_coverage_main_page_news_photos" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "media_coverage_main_page_news_photos_image1_idx" ON "media_coverage_main_page_news_photos" USING btree ("image1_id");
  CREATE INDEX IF NOT EXISTS "media_coverage_main_page_youtube_channel_order_idx" ON "media_coverage_main_page_youtube_channel" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "media_coverage_main_page_youtube_channel_parent_id_idx" ON "media_coverage_main_page_youtube_channel" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "media_coverage_main_page_youtube_channel_image_idx" ON "media_coverage_main_page_youtube_channel" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "media_coverage_main_page_order_idx" ON "media_coverage_main_page" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "media_coverage_main_page_parent_id_idx" ON "media_coverage_main_page" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "media_coverage_main_page_path_idx" ON "media_coverage_main_page" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_madras_block_paragraphs_order_idx" ON "pages_blocks_metro_madras_block_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_madras_block_paragraphs_parent_id_idx" ON "pages_blocks_metro_madras_block_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_madras_block_features_order_idx" ON "pages_blocks_metro_madras_block_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_madras_block_features_parent_id_idx" ON "pages_blocks_metro_madras_block_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_madras_block_features_custom_icon_idx" ON "pages_blocks_metro_madras_block_features" USING btree ("custom_icon_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_madras_block_order_idx" ON "pages_blocks_metro_madras_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_madras_block_parent_id_idx" ON "pages_blocks_metro_madras_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_madras_block_path_idx" ON "pages_blocks_metro_madras_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_madras_block_featured_image_idx" ON "pages_blocks_metro_madras_block" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_the_details_block_details_order_idx" ON "pages_blocks_metro_the_details_block_details" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_the_details_block_details_parent_id_idx" ON "pages_blocks_metro_the_details_block_details" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_the_details_block_details_custom_icon_idx" ON "pages_blocks_metro_the_details_block_details" USING btree ("custom_icon_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_the_details_block_order_idx" ON "pages_blocks_metro_the_details_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_the_details_block_parent_id_idx" ON "pages_blocks_metro_the_details_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_the_details_block_path_idx" ON "pages_blocks_metro_the_details_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_experience_block_highlights_order_idx" ON "pages_blocks_metro_experience_block_highlights" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_experience_block_highlights_parent_id_idx" ON "pages_blocks_metro_experience_block_highlights" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_experience_block_order_idx" ON "pages_blocks_metro_experience_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_experience_block_parent_id_idx" ON "pages_blocks_metro_experience_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_experience_block_path_idx" ON "pages_blocks_metro_experience_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_guidelines_block_guidelines_order_idx" ON "pages_blocks_metro_guidelines_block_guidelines" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_guidelines_block_guidelines_parent_id_idx" ON "pages_blocks_metro_guidelines_block_guidelines" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_guidelines_block_order_idx" ON "pages_blocks_metro_guidelines_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_guidelines_block_parent_id_idx" ON "pages_blocks_metro_guidelines_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_guidelines_block_path_idx" ON "pages_blocks_metro_guidelines_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_registration_block_order_idx" ON "pages_blocks_metro_registration_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_registration_block_parent_id_idx" ON "pages_blocks_metro_registration_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_registration_block_path_idx" ON "pages_blocks_metro_registration_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_metro_registration_block_featured_image_idx" ON "pages_blocks_metro_registration_block" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "kf_hero_block_order_idx" ON "kf_hero_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "kf_hero_block_parent_id_idx" ON "kf_hero_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "kf_hero_block_path_idx" ON "kf_hero_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_kite_festival_about_order_idx" ON "pages_blocks_kite_festival_about" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_kite_festival_about_parent_id_idx" ON "pages_blocks_kite_festival_about" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_kite_festival_about_path_idx" ON "pages_blocks_kite_festival_about" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_blocks_kite_festival_about_featured_image_idx" ON "pages_blocks_kite_festival_about" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_kite_festival_highlights_highlights_list_order_idx" ON "pages_blocks_kite_festival_highlights_highlights_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_kite_festival_highlights_highlights_list_parent_id_idx" ON "pages_blocks_kite_festival_highlights_highlights_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_kite_festival_highlights_order_idx" ON "pages_blocks_kite_festival_highlights" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "pages_blocks_kite_festival_highlights_parent_id_idx" ON "pages_blocks_kite_festival_highlights" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "pages_blocks_kite_festival_highlights_path_idx" ON "pages_blocks_kite_festival_highlights" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "kf_new_faqs_list_order_idx" ON "kf_new_faqs_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "kf_new_faqs_list_parent_id_idx" ON "kf_new_faqs_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "kf_new_faq_block_order_idx" ON "kf_new_faq_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "kf_new_faq_block_parent_id_idx" ON "kf_new_faq_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "kf_new_faq_block_path_idx" ON "kf_new_faq_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "pages_hero_hero_image_idx" ON "pages" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "pages_meta_meta_image_idx" ON "pages" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "pages_slug_idx" ON "pages" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "pages_rels_pages_id_idx" ON "pages_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_posts_id_idx" ON "pages_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "pages_rels_media_id_idx" ON "pages_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_link_content_order_idx" ON "_pages_v_version_hero_links_link_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_link_content_parent_id_idx" ON "_pages_v_version_hero_links_link_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_link_gallery_order_idx" ON "_pages_v_version_hero_links_link_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_link_gallery_parent_id_idx" ON "_pages_v_version_hero_links_link_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_link_gallery_image_idx" ON "_pages_v_version_hero_links_link_gallery" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_order_idx" ON "_pages_v_version_hero_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_parent_id_idx" ON "_pages_v_version_hero_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_links_link_link_content_image_idx" ON "_pages_v_version_hero_links" USING btree ("link_content_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_explore_cards_order_idx" ON "_pages_v_blocks_explore_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_explore_cards_parent_id_idx" ON "_pages_v_blocks_explore_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_explore_cards_image_idx" ON "_pages_v_blocks_explore_cards" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_explore_cards_page_idx" ON "_pages_v_blocks_explore_cards" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_explore_order_idx" ON "_pages_v_blocks_explore" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_explore_parent_id_idx" ON "_pages_v_blocks_explore" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_explore_path_idx" ON "_pages_v_blocks_explore" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fun_chennai_cards_order_idx" ON "_pages_v_blocks_fun_chennai_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fun_chennai_cards_parent_id_idx" ON "_pages_v_blocks_fun_chennai_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fun_chennai_cards_image_idx" ON "_pages_v_blocks_fun_chennai_cards" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fun_chennai_cards_page_idx" ON "_pages_v_blocks_fun_chennai_cards" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fun_chennai_order_idx" ON "_pages_v_blocks_fun_chennai" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fun_chennai_parent_id_idx" ON "_pages_v_blocks_fun_chennai" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_fun_chennai_path_idx" ON "_pages_v_blocks_fun_chennai" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_startup_chennai_images_order_idx" ON "_pages_v_blocks_startup_chennai_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_startup_chennai_images_parent_id_idx" ON "_pages_v_blocks_startup_chennai_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_startup_chennai_images_image_idx" ON "_pages_v_blocks_startup_chennai_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_startup_chennai_images_page_idx" ON "_pages_v_blocks_startup_chennai_images" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_startup_chennai_order_idx" ON "_pages_v_blocks_startup_chennai" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_startup_chennai_parent_id_idx" ON "_pages_v_blocks_startup_chennai" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_startup_chennai_path_idx" ON "_pages_v_blocks_startup_chennai" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_chennai_investments_order_idx" ON "_pages_v_blocks_chennai_investments" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_chennai_investments_parent_id_idx" ON "_pages_v_blocks_chennai_investments" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_chennai_investments_path_idx" ON "_pages_v_blocks_chennai_investments" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_social_reel_slider_order_idx" ON "_pages_v_blocks_social_reel_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_social_reel_slider_parent_id_idx" ON "_pages_v_blocks_social_reel_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_social_reel_slider_path_idx" ON "_pages_v_blocks_social_reel_slider" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_became_a_volunteer_order_idx" ON "_pages_v_blocks_became_a_volunteer" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_became_a_volunteer_parent_id_idx" ON "_pages_v_blocks_became_a_volunteer" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_became_a_volunteer_path_idx" ON "_pages_v_blocks_became_a_volunteer" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_became_a_volunteer_page_idx" ON "_pages_v_blocks_became_a_volunteer" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_events_calendar_order_idx" ON "_pages_v_blocks_events_calendar" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_events_calendar_parent_id_idx" ON "_pages_v_blocks_events_calendar" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_events_calendar_path_idx" ON "_pages_v_blocks_events_calendar" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_events_calendar_page_idx" ON "_pages_v_blocks_events_calendar" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_slider_block_slides_order_idx" ON "_pages_v_blocks_hero_slider_block_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_slider_block_slides_parent_id_idx" ON "_pages_v_blocks_hero_slider_block_slides" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_slider_block_slides_image_idx" ON "_pages_v_blocks_hero_slider_block_slides" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_slider_block_order_idx" ON "_pages_v_blocks_hero_slider_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_slider_block_parent_id_idx" ON "_pages_v_blocks_hero_slider_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_hero_slider_block_path_idx" ON "_pages_v_blocks_hero_slider_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_visitcategory_items_order_idx" ON "_pages_v_blocks_visitcategory_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_visitcategory_items_parent_id_idx" ON "_pages_v_blocks_visitcategory_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_visitcategory_items_image_idx" ON "_pages_v_blocks_visitcategory_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_visitcategory_items_page_idx" ON "_pages_v_blocks_visitcategory_items" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_visitcategory_order_idx" ON "_pages_v_blocks_visitcategory" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_visitcategory_parent_id_idx" ON "_pages_v_blocks_visitcategory" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_visitcategory_path_idx" ON "_pages_v_blocks_visitcategory" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_zig_zag_content_sections_order_idx" ON "_pages_v_blocks_zig_zag_content_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_zig_zag_content_sections_parent_id_idx" ON "_pages_v_blocks_zig_zag_content_sections" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_zig_zag_content_sections_image_idx" ON "_pages_v_blocks_zig_zag_content_sections" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_zig_zag_content_order_idx" ON "_pages_v_blocks_zig_zag_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_zig_zag_content_parent_id_idx" ON "_pages_v_blocks_zig_zag_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_zig_zag_content_path_idx" ON "_pages_v_blocks_zig_zag_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_volunteer_became_section_order_idx" ON "_pages_v_blocks_volunteer_became_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_volunteer_became_section_parent_id_idx" ON "_pages_v_blocks_volunteer_became_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_volunteer_became_section_path_idx" ON "_pages_v_blocks_volunteer_became_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_main_page_banner_order_idx" ON "_pages_v_blocks_main_page_banner" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_main_page_banner_parent_id_idx" ON "_pages_v_blocks_main_page_banner" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_main_page_banner_path_idx" ON "_pages_v_blocks_main_page_banner" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_main_page_banner_image_idx" ON "_pages_v_blocks_main_page_banner" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_intro_text_block_order_idx" ON "_pages_v_blocks_intro_text_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_intro_text_block_parent_id_idx" ON "_pages_v_blocks_intro_text_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_intro_text_block_path_idx" ON "_pages_v_blocks_intro_text_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_global_search_filters_options_order_idx" ON "_pages_v_blocks_global_search_filters_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_global_search_filters_options_parent_id_idx" ON "_pages_v_blocks_global_search_filters_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_global_search_filters_order_idx" ON "_pages_v_blocks_global_search_filters" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_global_search_filters_parent_id_idx" ON "_pages_v_blocks_global_search_filters" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_global_search_order_idx" ON "_pages_v_blocks_global_search" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_global_search_parent_id_idx" ON "_pages_v_blocks_global_search" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_global_search_path_idx" ON "_pages_v_blocks_global_search" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_popup_order_idx" ON "_pages_v_blocks_form_popup" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_popup_parent_id_idx" ON "_pages_v_blocks_form_popup" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_form_popup_path_idx" ON "_pages_v_blocks_form_popup" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_infography_food_items_order_idx" ON "_pages_v_blocks_infography_food_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_infography_food_items_parent_id_idx" ON "_pages_v_blocks_infography_food_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_infography_food_items_image_idx" ON "_pages_v_blocks_infography_food_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_infography_food_items_page_idx" ON "_pages_v_blocks_infography_food_items" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_infography_order_idx" ON "_pages_v_blocks_infography" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_infography_parent_id_idx" ON "_pages_v_blocks_infography" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_infography_path_idx" ON "_pages_v_blocks_infography" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_two_column_feature_block_order_idx" ON "_pages_v_blocks_two_column_feature_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_two_column_feature_block_parent_id_idx" ON "_pages_v_blocks_two_column_feature_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_two_column_feature_block_path_idx" ON "_pages_v_blocks_two_column_feature_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_two_column_feature_block_tech_image_idx" ON "_pages_v_blocks_two_column_feature_block" USING btree ("tech_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_two_column_feature_block_edu_image_idx" ON "_pages_v_blocks_two_column_feature_block" USING btree ("edu_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_two_column_feature_block_tech_link_tech_link_page_idx" ON "_pages_v_blocks_two_column_feature_block" USING btree ("tech_link_page_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_two_column_feature_block_edu_link_edu_link_page_idx" ON "_pages_v_blocks_two_column_feature_block" USING btree ("edu_link_page_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_utilities_tabs_order_idx" ON "_pages_v_blocks_utilities_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_utilities_tabs_parent_id_idx" ON "_pages_v_blocks_utilities_tabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_utilities_tabs_image_idx" ON "_pages_v_blocks_utilities_tabs" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_utilities_order_idx" ON "_pages_v_blocks_utilities" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_utilities_parent_id_idx" ON "_pages_v_blocks_utilities" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_utilities_path_idx" ON "_pages_v_blocks_utilities" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_zone_carousel_cards_order_idx" ON "_pages_v_blocks_content_zone_carousel_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_zone_carousel_cards_parent_id_idx" ON "_pages_v_blocks_content_zone_carousel_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_zone_carousel_cards_image_idx" ON "_pages_v_blocks_content_zone_carousel_cards" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_zone_carousel_order_idx" ON "_pages_v_blocks_content_zone_carousel" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_zone_carousel_parent_id_idx" ON "_pages_v_blocks_content_zone_carousel" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_content_zone_carousel_path_idx" ON "_pages_v_blocks_content_zone_carousel" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_allevents_order_idx" ON "_pages_v_blocks_allevents" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_allevents_parent_id_idx" ON "_pages_v_blocks_allevents" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_allevents_path_idx" ON "_pages_v_blocks_allevents" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_live_intror_section_order_idx" ON "_pages_v_blocks_live_intror_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_live_intror_section_parent_id_idx" ON "_pages_v_blocks_live_intror_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_live_intror_section_path_idx" ON "_pages_v_blocks_live_intror_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_live_intror_section_image_idx" ON "_pages_v_blocks_live_intror_section" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_chennai_life_essentials_essentials_order_idx" ON "_pages_v_blocks_chennai_life_essentials_essentials" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_chennai_life_essentials_essentials_parent_id_idx" ON "_pages_v_blocks_chennai_life_essentials_essentials" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_chennai_life_essentials_essentials_page_idx" ON "_pages_v_blocks_chennai_life_essentials_essentials" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_chennai_life_essentials_essentials_image_idx" ON "_pages_v_blocks_chennai_life_essentials_essentials" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_chennai_life_essentials_order_idx" ON "_pages_v_blocks_chennai_life_essentials" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_chennai_life_essentials_parent_id_idx" ON "_pages_v_blocks_chennai_life_essentials" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_chennai_life_essentials_path_idx" ON "_pages_v_blocks_chennai_life_essentials" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_investment_category_list_items_order_idx" ON "_pages_v_blocks_investment_category_list_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_investment_category_list_items_parent_id_idx" ON "_pages_v_blocks_investment_category_list_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_investment_category_list_items_image_idx" ON "_pages_v_blocks_investment_category_list_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_investment_category_list_order_idx" ON "_pages_v_blocks_investment_category_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_investment_category_list_parent_id_idx" ON "_pages_v_blocks_investment_category_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_investment_category_list_path_idx" ON "_pages_v_blocks_investment_category_list" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_investment_category_list_background_image_idx" ON "_pages_v_blocks_investment_category_list" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_innovate_slider_order_idx" ON "_pages_v_blocks_innovate_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_innovate_slider_parent_id_idx" ON "_pages_v_blocks_innovate_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_innovate_slider_path_idx" ON "_pages_v_blocks_innovate_slider" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_hover_image_section_items_order_idx" ON "_pages_v_blocks_text_hover_image_section_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_hover_image_section_items_parent_id_idx" ON "_pages_v_blocks_text_hover_image_section_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_hover_image_section_items_page_idx" ON "_pages_v_blocks_text_hover_image_section_items" USING btree ("page_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_hover_image_section_items_image_idx" ON "_pages_v_blocks_text_hover_image_section_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_hover_image_section_order_idx" ON "_pages_v_blocks_text_hover_image_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_hover_image_section_parent_id_idx" ON "_pages_v_blocks_text_hover_image_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_text_hover_image_section_path_idx" ON "_pages_v_blocks_text_hover_image_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_trending_chennai_slider_order_idx" ON "_pages_v_blocks_trending_chennai_slider" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_trending_chennai_slider_parent_id_idx" ON "_pages_v_blocks_trending_chennai_slider" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_trending_chennai_slider_path_idx" ON "_pages_v_blocks_trending_chennai_slider" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_second_section_first_column_order_idx" ON "_pages_v_blocks_second_section_first_column" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_second_section_first_column_parent_id_idx" ON "_pages_v_blocks_second_section_first_column" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_second_section_second_column_order_idx" ON "_pages_v_blocks_second_section_second_column" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_second_section_second_column_parent_id_idx" ON "_pages_v_blocks_second_section_second_column" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_second_section_order_idx" ON "_pages_v_blocks_second_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_second_section_parent_id_idx" ON "_pages_v_blocks_second_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_second_section_path_idx" ON "_pages_v_blocks_second_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_second_section_icon_idx" ON "_pages_v_blocks_second_section" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_popup_banner_order_idx" ON "_pages_v_blocks_popup_banner" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_popup_banner_parent_id_idx" ON "_pages_v_blocks_popup_banner" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_popup_banner_path_idx" ON "_pages_v_blocks_popup_banner" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_popup_banner_popup_image_idx" ON "_pages_v_blocks_popup_banner" USING btree ("popup_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cricket_score_block_points_table_order_idx" ON "_pages_v_blocks_cricket_score_block_points_table" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cricket_score_block_points_table_parent_id_idx" ON "_pages_v_blocks_cricket_score_block_points_table" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cricket_score_block_points_table_team_logo_idx" ON "_pages_v_blocks_cricket_score_block_points_table" USING btree ("team_logo_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cricket_score_block_order_idx" ON "_pages_v_blocks_cricket_score_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cricket_score_block_parent_id_idx" ON "_pages_v_blocks_cricket_score_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cricket_score_block_path_idx" ON "_pages_v_blocks_cricket_score_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_cricket_score_block_i_p_limage_idx" ON "_pages_v_blocks_cricket_score_block" USING btree ("i_p_limage_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_super_chennai_block_meta_items_order_idx" ON "_pages_v_blocks_conclave_super_chennai_block_meta_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_super_chennai_block_meta_items_parent_id_idx" ON "_pages_v_blocks_conclave_super_chennai_block_meta_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_super_chennai_block_meta_items_icon_idx" ON "_pages_v_blocks_conclave_super_chennai_block_meta_items" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_super_chennai_block_order_idx" ON "_pages_v_blocks_conclave_super_chennai_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_super_chennai_block_parent_id_idx" ON "_pages_v_blocks_conclave_super_chennai_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_super_chennai_block_path_idx" ON "_pages_v_blocks_conclave_super_chennai_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_about_block_paragraphs_order_idx" ON "_pages_v_blocks_conclave_about_block_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_about_block_paragraphs_parent_id_idx" ON "_pages_v_blocks_conclave_about_block_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_about_block_order_idx" ON "_pages_v_blocks_conclave_about_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_about_block_parent_id_idx" ON "_pages_v_blocks_conclave_about_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_about_block_path_idx" ON "_pages_v_blocks_conclave_about_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_about_block_image_idx" ON "_pages_v_blocks_conclave_about_block" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_agenda_block_agenda_items_speakers_order_idx" ON "_pages_v_blocks_conclave_agenda_block_agenda_items_speakers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_agenda_block_agenda_items_speakers_parent_id_idx" ON "_pages_v_blocks_conclave_agenda_block_agenda_items_speakers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_agenda_block_agenda_items_order_idx" ON "_pages_v_blocks_conclave_agenda_block_agenda_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_agenda_block_agenda_items_parent_id_idx" ON "_pages_v_blocks_conclave_agenda_block_agenda_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_agenda_block_order_idx" ON "_pages_v_blocks_conclave_agenda_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_agenda_block_parent_id_idx" ON "_pages_v_blocks_conclave_agenda_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_agenda_block_path_idx" ON "_pages_v_blocks_conclave_agenda_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_speakers_block_speakers_order_idx" ON "_pages_v_blocks_conclave_speakers_block_speakers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_speakers_block_speakers_parent_id_idx" ON "_pages_v_blocks_conclave_speakers_block_speakers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_speakers_block_speakers_image_idx" ON "_pages_v_blocks_conclave_speakers_block_speakers" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_speakers_block_order_idx" ON "_pages_v_blocks_conclave_speakers_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_speakers_block_parent_id_idx" ON "_pages_v_blocks_conclave_speakers_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_speakers_block_path_idx" ON "_pages_v_blocks_conclave_speakers_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_five_pillars_block_pillars_paragraphs_order_idx" ON "_pages_v_blocks_conclave_five_pillars_block_pillars_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_five_pillars_block_pillars_paragraphs_parent_id_idx" ON "_pages_v_blocks_conclave_five_pillars_block_pillars_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_five_pillars_block_pillars_order_idx" ON "_pages_v_blocks_conclave_five_pillars_block_pillars" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_five_pillars_block_pillars_parent_id_idx" ON "_pages_v_blocks_conclave_five_pillars_block_pillars" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_five_pillars_block_pillars_icon_idx" ON "_pages_v_blocks_conclave_five_pillars_block_pillars" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_five_pillars_block_order_idx" ON "_pages_v_blocks_conclave_five_pillars_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_five_pillars_block_parent_id_idx" ON "_pages_v_blocks_conclave_five_pillars_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_five_pillars_block_path_idx" ON "_pages_v_blocks_conclave_five_pillars_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_cta_block_order_idx" ON "_pages_v_blocks_conclave_cta_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_cta_block_parent_id_idx" ON "_pages_v_blocks_conclave_cta_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_cta_block_path_idx" ON "_pages_v_blocks_conclave_cta_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_cta_block_background_image_idx" ON "_pages_v_blocks_conclave_cta_block" USING btree ("background_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_cta_block_logo_image_idx" ON "_pages_v_blocks_conclave_cta_block" USING btree ("logo_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_partners_block_partners_order_idx" ON "_pages_v_blocks_conclave_partners_block_partners" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_partners_block_partners_parent_id_idx" ON "_pages_v_blocks_conclave_partners_block_partners" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_partners_block_partners_image_idx" ON "_pages_v_blocks_conclave_partners_block_partners" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_partners_block_partners_description_idx" ON "_pages_v_blocks_conclave_partners_block_partners" USING btree ("description_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_partners_block_order_idx" ON "_pages_v_blocks_conclave_partners_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_partners_block_parent_id_idx" ON "_pages_v_blocks_conclave_partners_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_partners_block_path_idx" ON "_pages_v_blocks_conclave_partners_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_gallery_block_gallery_items_order_idx" ON "_pages_v_blocks_conclave_gallery_block_gallery_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_gallery_block_gallery_items_parent_id_idx" ON "_pages_v_blocks_conclave_gallery_block_gallery_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_gallery_block_gallery_items_image_idx" ON "_pages_v_blocks_conclave_gallery_block_gallery_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_gallery_block_order_idx" ON "_pages_v_blocks_conclave_gallery_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_gallery_block_parent_id_idx" ON "_pages_v_blocks_conclave_gallery_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_gallery_block_path_idx" ON "_pages_v_blocks_conclave_gallery_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_conclave_gallery_block_featured_event_featured_event_image_idx" ON "_pages_v_blocks_conclave_gallery_block" USING btree ("featured_event_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_inner_page_hero_banner_block_breadcrumbs_order_idx" ON "_pages_v_blocks_inner_page_hero_banner_block_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_inner_page_hero_banner_block_breadcrumbs_parent_id_idx" ON "_pages_v_blocks_inner_page_hero_banner_block_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_inner_page_hero_banner_block_order_idx" ON "_pages_v_blocks_inner_page_hero_banner_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_inner_page_hero_banner_block_parent_id_idx" ON "_pages_v_blocks_inner_page_hero_banner_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_inner_page_hero_banner_block_path_idx" ON "_pages_v_blocks_inner_page_hero_banner_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_inner_page_hero_banner_block_banner_image_idx" ON "_pages_v_blocks_inner_page_hero_banner_block" USING btree ("banner_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_inner_page_hero_banner_block_mobile_banner_image_idx" ON "_pages_v_blocks_inner_page_hero_banner_block" USING btree ("mobile_banner_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_section_block_faq_list_order_idx" ON "_pages_v_blocks_faq_section_block_faq_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_section_block_faq_list_parent_id_idx" ON "_pages_v_blocks_faq_section_block_faq_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_section_block_order_idx" ON "_pages_v_blocks_faq_section_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_section_block_parent_id_idx" ON "_pages_v_blocks_faq_section_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_faq_section_block_path_idx" ON "_pages_v_blocks_faq_section_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_intro_block_paragraphs_order_idx" ON "_pages_v_blocks_about_intro_block_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_intro_block_paragraphs_parent_id_idx" ON "_pages_v_blocks_about_intro_block_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_intro_block_order_idx" ON "_pages_v_blocks_about_intro_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_intro_block_parent_id_idx" ON "_pages_v_blocks_about_intro_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_intro_block_path_idx" ON "_pages_v_blocks_about_intro_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_wsc_cols_v_order_idx" ON "_wsc_cols_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_wsc_cols_v_parent_id_idx" ON "_wsc_cols_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_welcome_super_chennai_block_new_order_idx" ON "_pages_v_blocks_about_welcome_super_chennai_block_new" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_welcome_super_chennai_block_new_parent_id_idx" ON "_pages_v_blocks_about_welcome_super_chennai_block_new" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_welcome_super_chennai_block_new_path_idx" ON "_pages_v_blocks_about_welcome_super_chennai_block_new" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_welcome_super_chennai_block_new_image_idx" ON "_pages_v_blocks_about_welcome_super_chennai_block_new" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_vis_mis_c_v_order_idx" ON "_vis_mis_c_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_vis_mis_c_v_parent_id_idx" ON "_vis_mis_c_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_vis_mis_c_v_icon_idx" ON "_vis_mis_c_v" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_vision_mission_block_order_idx" ON "_pages_v_blocks_vision_mission_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_vision_mission_block_parent_id_idx" ON "_pages_v_blocks_vision_mission_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_vision_mission_block_path_idx" ON "_pages_v_blocks_vision_mission_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_fnd_pts_v_order_idx" ON "_fnd_pts_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_fnd_pts_v_parent_id_idx" ON "_fnd_pts_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_foundations_block_order_idx" ON "_pages_v_blocks_about_foundations_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_foundations_block_parent_id_idx" ON "_pages_v_blocks_about_foundations_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_foundations_block_path_idx" ON "_pages_v_blocks_about_foundations_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_foundations_block_image_idx" ON "_pages_v_blocks_about_foundations_block" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_namma_chennai_block_order_idx" ON "_pages_v_blocks_about_namma_chennai_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_namma_chennai_block_parent_id_idx" ON "_pages_v_blocks_about_namma_chennai_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_namma_chennai_block_path_idx" ON "_pages_v_blocks_about_namma_chennai_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_wc_tabs_v_order_idx" ON "_wc_tabs_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_wc_tabs_v_parent_id_idx" ON "_wc_tabs_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_wc_tabs_v_image_idx" ON "_wc_tabs_v" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_why_chennai_block_order_idx" ON "_pages_v_blocks_about_why_chennai_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_why_chennai_block_parent_id_idx" ON "_pages_v_blocks_about_why_chennai_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_about_why_chennai_block_path_idx" ON "_pages_v_blocks_about_why_chennai_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_t_pts_v_order_idx" ON "_t_pts_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_t_pts_v_parent_id_idx" ON "_t_pts_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_t_info_secs_v_order_idx" ON "_t_info_secs_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_t_info_secs_v_parent_id_idx" ON "_t_info_secs_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_t_info_secs_v_icon_image_idx" ON "_t_info_secs_v" USING btree ("icon_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_invest_page_border_section_order_idx" ON "_pages_v_blocks_invest_page_border_section" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_invest_page_border_section_parent_id_idx" ON "_pages_v_blocks_invest_page_border_section" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_invest_page_border_section_path_idx" ON "_pages_v_blocks_invest_page_border_section" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_ut_tabs_v_order_idx" ON "_ut_tabs_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_ut_tabs_v_parent_id_idx" ON "_ut_tabs_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_ut_tabs_v_icon_idx" ON "_ut_tabs_v" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_invest_page_tab_block_order_idx" ON "_pages_v_blocks_invest_page_tab_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_invest_page_tab_block_parent_id_idx" ON "_pages_v_blocks_invest_page_tab_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_invest_page_tab_block_path_idx" ON "_pages_v_blocks_invest_page_tab_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_inv_slides_v_order_idx" ON "_inv_slides_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_inv_slides_v_parent_id_idx" ON "_inv_slides_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_inv_slides_v_image_idx" ON "_inv_slides_v" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_invest_page_slider_block_order_idx" ON "_pages_v_blocks_invest_page_slider_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_invest_page_slider_block_parent_id_idx" ON "_pages_v_blocks_invest_page_slider_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_invest_page_slider_block_path_idx" ON "_pages_v_blocks_invest_page_slider_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_inn_slides_v_order_idx" ON "_inn_slides_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_inn_slides_v_parent_id_idx" ON "_inn_slides_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_inn_slides_v_image_idx" ON "_inn_slides_v" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_innovate_page_slider_block_order_idx" ON "_pages_v_blocks_innovate_page_slider_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_innovate_page_slider_block_parent_id_idx" ON "_pages_v_blocks_innovate_page_slider_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_innovate_page_slider_block_path_idx" ON "_pages_v_blocks_innovate_page_slider_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_info_items_v_order_idx" ON "_info_items_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_info_items_v_parent_id_idx" ON "_info_items_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_info_items_v_icon_idx" ON "_info_items_v" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_innovate_info_section_block_order_idx" ON "_pages_v_blocks_innovate_info_section_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_innovate_info_section_block_parent_id_idx" ON "_pages_v_blocks_innovate_info_section_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_innovate_info_section_block_path_idx" ON "_pages_v_blocks_innovate_info_section_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_innovate_info_section_block_main_image_idx" ON "_pages_v_blocks_innovate_info_section_block" USING btree ("main_image_id");
  CREATE INDEX IF NOT EXISTS "_iwc_li_v_order_idx" ON "_iwc_li_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_iwc_li_v_parent_id_idx" ON "_iwc_li_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_iwc_cb_v_order_idx" ON "_iwc_cb_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_iwc_cb_v_parent_id_idx" ON "_iwc_cb_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_imagewith_content_order_idx" ON "_pages_v_blocks_imagewith_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_imagewith_content_parent_id_idx" ON "_pages_v_blocks_imagewith_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_imagewith_content_path_idx" ON "_pages_v_blocks_imagewith_content" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_imagewith_content_main_image_idx" ON "_pages_v_blocks_imagewith_content" USING btree ("main_image_id");
  CREATE INDEX IF NOT EXISTS "_tp_p_v_order_idx" ON "_tp_p_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_tp_p_v_parent_id_idx" ON "_tp_p_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_tp_bp_v_order_idx" ON "_tp_bp_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_tp_bp_v_parent_id_idx" ON "_tp_bp_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_tp_cards_v_order_idx" ON "_tp_cards_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_tp_cards_v_parent_id_idx" ON "_tp_cards_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_without_content_block_order_idx" ON "_pages_v_blocks_image_without_content_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_without_content_block_parent_id_idx" ON "_pages_v_blocks_image_without_content_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_without_content_block_path_idx" ON "_pages_v_blocks_image_without_content_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_ev_h_v_order_idx" ON "_ev_h_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_ev_h_v_parent_id_idx" ON "_ev_h_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_ev_c_v_order_idx" ON "_ev_c_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_ev_c_v_parent_id_idx" ON "_ev_c_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_ev_r_v_order_idx" ON "_ev_r_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_ev_r_v_parent_id_idx" ON "_ev_r_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_table_section_block_order_idx" ON "_pages_v_blocks_table_section_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_table_section_block_parent_id_idx" ON "_pages_v_blocks_table_section_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_table_section_block_path_idx" ON "_pages_v_blocks_table_section_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_in_sld_c_v_order_idx" ON "_in_sld_c_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_in_sld_c_v_parent_id_idx" ON "_in_sld_c_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_in_sld_c_v_image_idx" ON "_in_sld_c_v" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_inner_page_slider_block_order_idx" ON "_pages_v_blocks_inner_page_slider_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_inner_page_slider_block_parent_id_idx" ON "_pages_v_blocks_inner_page_slider_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_inner_page_slider_block_path_idx" ON "_pages_v_blocks_inner_page_slider_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_slider_with_popup_block_order_idx" ON "_pages_v_blocks_gallery_slider_with_popup_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_slider_with_popup_block_parent_id_idx" ON "_pages_v_blocks_gallery_slider_with_popup_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_gallery_slider_with_popup_block_path_idx" ON "_pages_v_blocks_gallery_slider_with_popup_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_l_img_r_sec_v_order_idx" ON "_l_img_r_sec_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_l_img_r_sec_v_parent_id_idx" ON "_l_img_r_sec_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_l_img_r_sec_v_path_idx" ON "_l_img_r_sec_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_l_img_r_sec_v_image_idx" ON "_l_img_r_sec_v" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_bs_items_v_order_idx" ON "_bs_items_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_bs_items_v_parent_id_idx" ON "_bs_items_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_bs_items_v_imgs_idx" ON "_bs_items_v" USING btree ("imgs_id");
  CREATE INDEX IF NOT EXISTS "_bs_sec_v_order_idx" ON "_bs_sec_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_bs_sec_v_parent_id_idx" ON "_bs_sec_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_bs_sec_v_image_idx" ON "_bs_sec_v" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefit_sections_block_order_idx" ON "_pages_v_blocks_benefit_sections_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefit_sections_block_parent_id_idx" ON "_pages_v_blocks_benefit_sections_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_benefit_sections_block_path_idx" ON "_pages_v_blocks_benefit_sections_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_wi_paras_v_order_idx" ON "_wi_paras_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_wi_paras_v_parent_id_idx" ON "_wi_paras_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_intro_pink_text_with_content_block_order_idx" ON "_pages_v_blocks_intro_pink_text_with_content_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_intro_pink_text_with_content_block_parent_id_idx" ON "_pages_v_blocks_intro_pink_text_with_content_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_intro_pink_text_with_content_block_path_idx" ON "_pages_v_blocks_intro_pink_text_with_content_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_vils_p_v_order_idx" ON "_vils_p_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_vils_p_v_parent_id_idx" ON "_vils_p_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_vils_p_v_imgs_idx" ON "_vils_p_v" USING btree ("imgs_id");
  CREATE INDEX IF NOT EXISTS "_vils_t_v_order_idx" ON "_vils_t_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_vils_t_v_parent_id_idx" ON "_vils_t_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_vils_s_v_order_idx" ON "_vils_s_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_vils_s_v_parent_id_idx" ON "_vils_s_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_vils_s_v_image_idx" ON "_vils_s_v" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_vils_b_v_order_idx" ON "_vils_b_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_vils_b_v_parent_id_idx" ON "_vils_b_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_vils_b_v_path_idx" ON "_vils_b_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_nc_locs_v_order_idx" ON "_nc_locs_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_nc_locs_v_parent_id_idx" ON "_nc_locs_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_nc_plcs_v_order_idx" ON "_nc_plcs_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_nc_plcs_v_parent_id_idx" ON "_nc_plcs_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_nc_data_v_order_idx" ON "_nc_data_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_nc_data_v_parent_id_idx" ON "_nc_data_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_work_network_section_block_order_idx" ON "_pages_v_blocks_work_network_section_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_work_network_section_block_parent_id_idx" ON "_pages_v_blocks_work_network_section_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_work_network_section_block_path_idx" ON "_pages_v_blocks_work_network_section_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_wpis_bp_v_order_idx" ON "_wpis_bp_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_wpis_bp_v_parent_id_idx" ON "_wpis_bp_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_wpis_p_v_order_idx" ON "_wpis_p_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_wpis_p_v_parent_id_idx" ON "_wpis_p_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_wpis_p_v_imgs_idx" ON "_wpis_p_v" USING btree ("imgs_id");
  CREATE INDEX IF NOT EXISTS "_wpis_s_v_order_idx" ON "_wpis_s_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_wpis_s_v_parent_id_idx" ON "_wpis_s_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_wpis_s_v_image_idx" ON "_wpis_s_v" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_wpis_b_v_order_idx" ON "_wpis_b_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_wpis_b_v_parent_id_idx" ON "_wpis_b_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_wpis_b_v_path_idx" ON "_wpis_b_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_hch_loc_v_order_idx" ON "_hch_loc_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_hch_loc_v_parent_id_idx" ON "_hch_loc_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_hch_plc_v_order_idx" ON "_hch_plc_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_hch_plc_v_parent_id_idx" ON "_hch_plc_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_hch_cat_v_order_idx" ON "_hch_cat_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_hch_cat_v_parent_id_idx" ON "_hch_cat_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_health_care_hospitals_block_order_idx" ON "_pages_v_blocks_health_care_hospitals_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_health_care_hospitals_block_parent_id_idx" ON "_pages_v_blocks_health_care_hospitals_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_health_care_hospitals_block_path_idx" ON "_pages_v_blocks_health_care_hospitals_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_cl_tpts_v_order_idx" ON "_cl_tpts_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cl_tpts_v_parent_id_idx" ON "_cl_tpts_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cl_tpts_v_imgs_idx" ON "_cl_tpts_v" USING btree ("imgs_id");
  CREATE INDEX IF NOT EXISTS "_cl_tnt_v_order_idx" ON "_cl_tnt_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cl_tnt_v_parent_id_idx" ON "_cl_tnt_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cl_img_v_order_idx" ON "_cl_img_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cl_img_v_parent_id_idx" ON "_cl_img_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cl_img_v_image_idx" ON "_cl_img_v" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_cl_dpts_v_order_idx" ON "_cl_dpts_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cl_dpts_v_parent_id_idx" ON "_cl_dpts_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cl_dtl_v_order_idx" ON "_cl_dtl_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cl_dtl_v_parent_id_idx" ON "_cl_dtl_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_clb_v_order_idx" ON "_clb_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_clb_v_parent_id_idx" ON "_clb_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_clb_v_path_idx" ON "_clb_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_ttd_pts_v_order_idx" ON "_ttd_pts_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_ttd_pts_v_parent_id_idx" ON "_ttd_pts_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_ttd_pts_v_imgs_idx" ON "_ttd_pts_v" USING btree ("imgs_id");
  CREATE INDEX IF NOT EXISTS "_ttd_tnt_v_order_idx" ON "_ttd_tnt_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_ttd_tnt_v_parent_id_idx" ON "_ttd_tnt_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_ttd_sec_v_order_idx" ON "_ttd_sec_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_ttd_sec_v_parent_id_idx" ON "_ttd_sec_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_ttd_sec_v_image_idx" ON "_ttd_sec_v" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_ttd_blk_v_order_idx" ON "_ttd_blk_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_ttd_blk_v_parent_id_idx" ON "_ttd_blk_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_ttd_blk_v_path_idx" ON "_ttd_blk_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_cn_nbh_v_order_idx" ON "_cn_nbh_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cn_nbh_v_parent_id_idx" ON "_cn_nbh_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cn_nbh_v_imgs_idx" ON "_cn_nbh_v" USING btree ("imgs_id");
  CREATE INDEX IF NOT EXISTS "_cn_sec_v_order_idx" ON "_cn_sec_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cn_sec_v_parent_id_idx" ON "_cn_sec_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cn_sec_v_image_idx" ON "_cn_sec_v" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_cnb_v_order_idx" ON "_cnb_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cnb_v_parent_id_idx" ON "_cnb_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cnb_v_path_idx" ON "_cnb_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_qol_sec_v_order_idx" ON "_qol_sec_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_qol_sec_v_parent_id_idx" ON "_qol_sec_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_qol_sec_v_image_idx" ON "_qol_sec_v" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_qol_blk_v_order_idx" ON "_qol_blk_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_qol_blk_v_parent_id_idx" ON "_qol_blk_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_qol_blk_v_path_idx" ON "_qol_blk_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_vwl_v_order_idx" ON "_vwl_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_vwl_v_parent_id_idx" ON "_vwl_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_vwp_v_order_idx" ON "_vwp_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_vwp_v_parent_id_idx" ON "_vwp_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_vwp_v_imgs_idx" ON "_vwp_v" USING btree ("imgs_id");
  CREATE INDEX IF NOT EXISTS "_vwt_v_order_idx" ON "_vwt_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_vwt_v_parent_id_idx" ON "_vwt_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_vws_v_order_idx" ON "_vws_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_vws_v_parent_id_idx" ON "_vws_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_vws_v_image_idx" ON "_vws_v" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_vw_block_v_order_idx" ON "_vw_block_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_vw_block_v_parent_id_idx" ON "_vw_block_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_vw_block_v_path_idx" ON "_vw_block_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_cnt_add_v_order_idx" ON "_cnt_add_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cnt_add_v_parent_id_idx" ON "_cnt_add_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cnt_blk_v_order_idx" ON "_cnt_blk_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cnt_blk_v_parent_id_idx" ON "_cnt_blk_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cnt_blk_v_path_idx" ON "_cnt_blk_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_cnt_blk_v_logo_idx" ON "_cnt_blk_v" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "_cn_tabs_v_order_idx" ON "_cn_tabs_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cn_tabs_v_parent_id_idx" ON "_cn_tabs_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cn_tabs_v_tab_icon_idx" ON "_cn_tabs_v" USING btree ("tab_icon_id");
  CREATE INDEX IF NOT EXISTS "_cn_asgn_tabs_v_order_idx" ON "_cn_asgn_tabs_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cn_asgn_tabs_v_parent_id_idx" ON "_cn_asgn_tabs_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cn_feats_v_order_idx" ON "_cn_feats_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cn_feats_v_parent_id_idx" ON "_cn_feats_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cn_svcs_v_order_idx" ON "_cn_svcs_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cn_svcs_v_parent_id_idx" ON "_cn_svcs_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cn_apps_v_order_idx" ON "_cn_apps_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cn_apps_v_parent_id_idx" ON "_cn_apps_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cn_apps_v_app_image_idx" ON "_cn_apps_v" USING btree ("app_image_id");
  CREATE INDEX IF NOT EXISTS "_cn_apps_blk_v_order_idx" ON "_cn_apps_blk_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cn_apps_blk_v_parent_id_idx" ON "_cn_apps_blk_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cn_apps_blk_v_path_idx" ON "_cn_apps_blk_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_loc_arr_v_order_idx" ON "_loc_arr_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_loc_arr_v_parent_id_idx" ON "_loc_arr_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_plc_arr_v_order_idx" ON "_plc_arr_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_plc_arr_v_parent_id_idx" ON "_plc_arr_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cat_arr_v_order_idx" ON "_cat_arr_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cat_arr_v_parent_id_idx" ON "_cat_arr_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_reg_arr_v_order_idx" ON "_reg_arr_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_reg_arr_v_parent_id_idx" ON "_reg_arr_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_reg_arr_v_hero_image_idx" ON "_reg_arr_v" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "_plc_sec_blk_v_order_idx" ON "_plc_sec_blk_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_plc_sec_blk_v_parent_id_idx" ON "_plc_sec_blk_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_plc_sec_blk_v_path_idx" ON "_plc_sec_blk_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_title_block_order_idx" ON "_pages_v_blocks_image_title_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_title_block_parent_id_idx" ON "_pages_v_blocks_image_title_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_title_block_path_idx" ON "_pages_v_blocks_image_title_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_image_title_block_image_idx" ON "_pages_v_blocks_image_title_block" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_info_section_block_points_order_idx" ON "_pages_v_blocks_info_section_block_points" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_info_section_block_points_parent_id_idx" ON "_pages_v_blocks_info_section_block_points" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_info_section_block_order_idx" ON "_pages_v_blocks_info_section_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_info_section_block_parent_id_idx" ON "_pages_v_blocks_info_section_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_info_section_block_path_idx" ON "_pages_v_blocks_info_section_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_info_section_block_icon_idx" ON "_pages_v_blocks_info_section_block" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_table_block_headers_order_idx" ON "_pages_v_blocks_table_block_headers" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_table_block_headers_parent_id_idx" ON "_pages_v_blocks_table_block_headers" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_table_block_rows_cells_order_idx" ON "_pages_v_blocks_table_block_rows_cells" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_table_block_rows_cells_parent_id_idx" ON "_pages_v_blocks_table_block_rows_cells" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_table_block_rows_order_idx" ON "_pages_v_blocks_table_block_rows" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_table_block_rows_parent_id_idx" ON "_pages_v_blocks_table_block_rows" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_table_block_order_idx" ON "_pages_v_blocks_table_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_table_block_parent_id_idx" ON "_pages_v_blocks_table_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_table_block_path_idx" ON "_pages_v_blocks_table_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_category_block_items_locations_order_idx" ON "_pages_v_blocks_category_block_items_locations" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_category_block_items_locations_parent_id_idx" ON "_pages_v_blocks_category_block_items_locations" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_category_block_items_order_idx" ON "_pages_v_blocks_category_block_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_category_block_items_parent_id_idx" ON "_pages_v_blocks_category_block_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_category_block_order_idx" ON "_pages_v_blocks_category_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_category_block_parent_id_idx" ON "_pages_v_blocks_category_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_category_block_path_idx" ON "_pages_v_blocks_category_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_llp_block_main_tabs_regions_order_idx" ON "_pages_v_blocks_llp_block_main_tabs_regions" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_llp_block_main_tabs_regions_parent_id_idx" ON "_pages_v_blocks_llp_block_main_tabs_regions" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_llp_block_main_tabs_regions_hero_image_idx" ON "_pages_v_blocks_llp_block_main_tabs_regions" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_llp_block_main_tabs_order_idx" ON "_pages_v_blocks_llp_block_main_tabs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_llp_block_main_tabs_parent_id_idx" ON "_pages_v_blocks_llp_block_main_tabs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_llp_block_order_idx" ON "_pages_v_blocks_llp_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_llp_block_parent_id_idx" ON "_pages_v_blocks_llp_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_llp_block_path_idx" ON "_pages_v_blocks_llp_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_cards_v_order_idx" ON "_cards_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cards_v_parent_id_idx" ON "_cards_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cards_v_card_media_idx" ON "_cards_v" USING btree ("card_media_id");
  CREATE INDEX IF NOT EXISTS "_cats_v_order_idx" ON "_cats_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cats_v_parent_id_idx" ON "_cats_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_chenz_inv_2026_v_order_idx" ON "_chenz_inv_2026_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_chenz_inv_2026_v_parent_id_idx" ON "_chenz_inv_2026_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_chenz_inv_2026_v_path_idx" ON "_chenz_inv_2026_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_ev_lst_2026_v_events_cards2026_order_idx" ON "_ev_lst_2026_v_events_cards2026" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_ev_lst_2026_v_events_cards2026_parent_id_idx" ON "_ev_lst_2026_v_events_cards2026" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_ev_lst_2026_v_events_cards2026_card_media_idx" ON "_ev_lst_2026_v_events_cards2026" USING btree ("card_media_id");
  CREATE INDEX IF NOT EXISTS "_ev_lst_2026_v_order_idx" ON "_ev_lst_2026_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_ev_lst_2026_v_parent_id_idx" ON "_ev_lst_2026_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_ev_lst_2026_v_path_idx" ON "_ev_lst_2026_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_infra_boom_2026_v_order_idx" ON "_infra_boom_2026_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_infra_boom_2026_v_parent_id_idx" ON "_infra_boom_2026_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_infra_boom_2026_v_path_idx" ON "_infra_boom_2026_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_infra_boom_2026_v_pdf_file_idx" ON "_infra_boom_2026_v" USING btree ("pdf_file_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_manifesto_section_block_slider_images_order_idx" ON "_pages_v_blocks_manifesto_section_block_slider_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_manifesto_section_block_slider_images_parent_id_idx" ON "_pages_v_blocks_manifesto_section_block_slider_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_manifesto_section_block_slider_images_image_idx" ON "_pages_v_blocks_manifesto_section_block_slider_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_manifesto_section_block_order_idx" ON "_pages_v_blocks_manifesto_section_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_manifesto_section_block_parent_id_idx" ON "_pages_v_blocks_manifesto_section_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_manifesto_section_block_path_idx" ON "_pages_v_blocks_manifesto_section_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_tvc_2026_v_tvc_cards_order_idx" ON "_tvc_2026_v_tvc_cards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_tvc_2026_v_tvc_cards_parent_id_idx" ON "_tvc_2026_v_tvc_cards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_tvc_2026_v_tvc_cards_image_idx" ON "_tvc_2026_v_tvc_cards" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_tvc_2026_v_order_idx" ON "_tvc_2026_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_tvc_2026_v_parent_id_idx" ON "_tvc_2026_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_tvc_2026_v_path_idx" ON "_tvc_2026_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_media_coverage_main_page_v_news_article_order_idx" ON "_media_coverage_main_page_v_news_article" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_media_coverage_main_page_v_news_article_parent_id_idx" ON "_media_coverage_main_page_v_news_article" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_media_coverage_main_page_v_news_article_image_idx" ON "_media_coverage_main_page_v_news_article" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_media_coverage_main_page_v_news_photos_order_idx" ON "_media_coverage_main_page_v_news_photos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_media_coverage_main_page_v_news_photos_parent_id_idx" ON "_media_coverage_main_page_v_news_photos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_media_coverage_main_page_v_news_photos_image_idx" ON "_media_coverage_main_page_v_news_photos" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_media_coverage_main_page_v_news_photos_image1_idx" ON "_media_coverage_main_page_v_news_photos" USING btree ("image1_id");
  CREATE INDEX IF NOT EXISTS "_media_coverage_main_page_v_youtube_channel_order_idx" ON "_media_coverage_main_page_v_youtube_channel" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_media_coverage_main_page_v_youtube_channel_parent_id_idx" ON "_media_coverage_main_page_v_youtube_channel" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_media_coverage_main_page_v_youtube_channel_image_idx" ON "_media_coverage_main_page_v_youtube_channel" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_media_coverage_main_page_v_order_idx" ON "_media_coverage_main_page_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_media_coverage_main_page_v_parent_id_idx" ON "_media_coverage_main_page_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_media_coverage_main_page_v_path_idx" ON "_media_coverage_main_page_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_madras_block_paragraphs_order_idx" ON "_pages_v_blocks_metro_madras_block_paragraphs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_madras_block_paragraphs_parent_id_idx" ON "_pages_v_blocks_metro_madras_block_paragraphs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_madras_block_features_order_idx" ON "_pages_v_blocks_metro_madras_block_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_madras_block_features_parent_id_idx" ON "_pages_v_blocks_metro_madras_block_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_madras_block_features_custom_icon_idx" ON "_pages_v_blocks_metro_madras_block_features" USING btree ("custom_icon_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_madras_block_order_idx" ON "_pages_v_blocks_metro_madras_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_madras_block_parent_id_idx" ON "_pages_v_blocks_metro_madras_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_madras_block_path_idx" ON "_pages_v_blocks_metro_madras_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_madras_block_featured_image_idx" ON "_pages_v_blocks_metro_madras_block" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_the_details_block_details_order_idx" ON "_pages_v_blocks_metro_the_details_block_details" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_the_details_block_details_parent_id_idx" ON "_pages_v_blocks_metro_the_details_block_details" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_the_details_block_details_custom_icon_idx" ON "_pages_v_blocks_metro_the_details_block_details" USING btree ("custom_icon_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_the_details_block_order_idx" ON "_pages_v_blocks_metro_the_details_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_the_details_block_parent_id_idx" ON "_pages_v_blocks_metro_the_details_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_the_details_block_path_idx" ON "_pages_v_blocks_metro_the_details_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_experience_block_highlights_order_idx" ON "_pages_v_blocks_metro_experience_block_highlights" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_experience_block_highlights_parent_id_idx" ON "_pages_v_blocks_metro_experience_block_highlights" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_experience_block_order_idx" ON "_pages_v_blocks_metro_experience_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_experience_block_parent_id_idx" ON "_pages_v_blocks_metro_experience_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_experience_block_path_idx" ON "_pages_v_blocks_metro_experience_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_guidelines_block_guidelines_order_idx" ON "_pages_v_blocks_metro_guidelines_block_guidelines" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_guidelines_block_guidelines_parent_id_idx" ON "_pages_v_blocks_metro_guidelines_block_guidelines" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_guidelines_block_order_idx" ON "_pages_v_blocks_metro_guidelines_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_guidelines_block_parent_id_idx" ON "_pages_v_blocks_metro_guidelines_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_guidelines_block_path_idx" ON "_pages_v_blocks_metro_guidelines_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_registration_block_order_idx" ON "_pages_v_blocks_metro_registration_block" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_registration_block_parent_id_idx" ON "_pages_v_blocks_metro_registration_block" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_registration_block_path_idx" ON "_pages_v_blocks_metro_registration_block" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_metro_registration_block_featured_image_idx" ON "_pages_v_blocks_metro_registration_block" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "_kf_hero_block_v_order_idx" ON "_kf_hero_block_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_kf_hero_block_v_parent_id_idx" ON "_kf_hero_block_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_kf_hero_block_v_path_idx" ON "_kf_hero_block_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_kite_festival_about_order_idx" ON "_pages_v_blocks_kite_festival_about" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_kite_festival_about_parent_id_idx" ON "_pages_v_blocks_kite_festival_about" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_kite_festival_about_path_idx" ON "_pages_v_blocks_kite_festival_about" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_kite_festival_about_featured_image_idx" ON "_pages_v_blocks_kite_festival_about" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_kite_festival_highlights_highlights_list_order_idx" ON "_pages_v_blocks_kite_festival_highlights_highlights_list" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_kite_festival_highlights_highlights_list_parent_id_idx" ON "_pages_v_blocks_kite_festival_highlights_highlights_list" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_kite_festival_highlights_order_idx" ON "_pages_v_blocks_kite_festival_highlights" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_kite_festival_highlights_parent_id_idx" ON "_pages_v_blocks_kite_festival_highlights" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_blocks_kite_festival_highlights_path_idx" ON "_pages_v_blocks_kite_festival_highlights" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_kf_new_faqs_list_v_order_idx" ON "_kf_new_faqs_list_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_kf_new_faqs_list_v_parent_id_idx" ON "_kf_new_faqs_list_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_kf_new_faq_block_v_order_idx" ON "_kf_new_faq_block_v" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_kf_new_faq_block_v_parent_id_idx" ON "_kf_new_faq_block_v" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_kf_new_faq_block_v_path_idx" ON "_kf_new_faq_block_v" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_hero_version_hero_image_idx" ON "_pages_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_meta_version_meta_image_idx" ON "_pages_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_slug_idx" ON "_pages_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_pages_id_idx" ON "_pages_v_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_posts_id_idx" ON "_pages_v_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "_pages_v_rels_media_id_idx" ON "_pages_v_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "posts_populated_authors_order_idx" ON "posts_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "posts_populated_authors_parent_id_idx" ON "posts_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "posts_hero_image_idx" ON "posts" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "posts_meta_meta_image_idx" ON "posts" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "posts_slug_idx" ON "posts" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "posts_updated_at_idx" ON "posts" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "posts_created_at_idx" ON "posts" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "posts__status_idx" ON "posts" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "posts_rels_order_idx" ON "posts_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "posts_rels_parent_idx" ON "posts_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_path_idx" ON "posts_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "posts_rels_posts_id_idx" ON "posts_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_categories_id_idx" ON "posts_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "posts_rels_users_id_idx" ON "posts_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_populated_authors_order_idx" ON "_posts_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_populated_authors_parent_id_idx" ON "_posts_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_parent_idx" ON "_posts_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_hero_image_idx" ON "_posts_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_meta_version_meta_image_idx" ON "_posts_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_slug_idx" ON "_posts_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_updated_at_idx" ON "_posts_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version_created_at_idx" ON "_posts_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_version_version__status_idx" ON "_posts_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_posts_v_created_at_idx" ON "_posts_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_updated_at_idx" ON "_posts_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_posts_v_latest_idx" ON "_posts_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_posts_v_autosave_idx" ON "_posts_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_order_idx" ON "_posts_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_parent_idx" ON "_posts_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_path_idx" ON "_posts_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_posts_id_idx" ON "_posts_v_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_categories_id_idx" ON "_posts_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_posts_v_rels_users_id_idx" ON "_posts_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_square_sizes_square_filename_idx" ON "media" USING btree ("sizes_square_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_small_sizes_small_filename_idx" ON "media" USING btree ("sizes_small_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_medium_sizes_medium_filename_idx" ON "media" USING btree ("sizes_medium_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_large_sizes_large_filename_idx" ON "media" USING btree ("sizes_large_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_xlarge_sizes_xlarge_filename_idx" ON "media" USING btree ("sizes_xlarge_filename");
  CREATE INDEX IF NOT EXISTS "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE INDEX IF NOT EXISTS "categories_breadcrumbs_order_idx" ON "categories_breadcrumbs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "categories_breadcrumbs_parent_id_idx" ON "categories_breadcrumbs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "categories_breadcrumbs_doc_idx" ON "categories_breadcrumbs" USING btree ("doc_id");
  CREATE INDEX IF NOT EXISTS "categories_slug_idx" ON "categories" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "categories_parent_idx" ON "categories" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "categories_updated_at_idx" ON "categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "categories_created_at_idx" ON "categories" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "users_profile_image_idx" ON "users" USING btree ("profile_image_id");
  CREATE INDEX IF NOT EXISTS "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX IF NOT EXISTS "visits_populated_authors_order_idx" ON "visits_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "visits_populated_authors_parent_id_idx" ON "visits_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "visits_hero_image_idx" ON "visits" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "visits_featured_image_idx" ON "visits" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "visits_meta_meta_image_idx" ON "visits" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "visits_slug_idx" ON "visits" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "visits_updated_at_idx" ON "visits" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "visits_created_at_idx" ON "visits" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "visits__status_idx" ON "visits" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "visits_rels_order_idx" ON "visits_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "visits_rels_parent_idx" ON "visits_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "visits_rels_path_idx" ON "visits_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "visits_rels_visits_id_idx" ON "visits_rels" USING btree ("visits_id");
  CREATE INDEX IF NOT EXISTS "visits_rels_categories_id_idx" ON "visits_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "visits_rels_users_id_idx" ON "visits_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_visits_v_version_populated_authors_order_idx" ON "_visits_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_visits_v_version_populated_authors_parent_id_idx" ON "_visits_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_visits_v_parent_idx" ON "_visits_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_visits_v_version_version_hero_image_idx" ON "_visits_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_visits_v_version_version_featured_image_idx" ON "_visits_v" USING btree ("version_featured_image_id");
  CREATE INDEX IF NOT EXISTS "_visits_v_version_meta_version_meta_image_idx" ON "_visits_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_visits_v_version_version_slug_idx" ON "_visits_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_visits_v_version_version_updated_at_idx" ON "_visits_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_visits_v_version_version_created_at_idx" ON "_visits_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_visits_v_version_version__status_idx" ON "_visits_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_visits_v_created_at_idx" ON "_visits_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_visits_v_updated_at_idx" ON "_visits_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_visits_v_latest_idx" ON "_visits_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_visits_v_autosave_idx" ON "_visits_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_visits_v_rels_order_idx" ON "_visits_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_visits_v_rels_parent_idx" ON "_visits_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_visits_v_rels_path_idx" ON "_visits_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_visits_v_rels_visits_id_idx" ON "_visits_v_rels" USING btree ("visits_id");
  CREATE INDEX IF NOT EXISTS "_visits_v_rels_categories_id_idx" ON "_visits_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_visits_v_rels_users_id_idx" ON "_visits_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "work_populated_authors_order_idx" ON "work_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "work_populated_authors_parent_id_idx" ON "work_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "work_hero_image_idx" ON "work" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "work_featured_image_idx" ON "work" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "work_meta_meta_image_idx" ON "work" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "work_slug_idx" ON "work" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "work_updated_at_idx" ON "work" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "work_created_at_idx" ON "work" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "work__status_idx" ON "work" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "work_rels_order_idx" ON "work_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "work_rels_parent_idx" ON "work_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "work_rels_path_idx" ON "work_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "work_rels_work_id_idx" ON "work_rels" USING btree ("work_id");
  CREATE INDEX IF NOT EXISTS "work_rels_categories_id_idx" ON "work_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "work_rels_users_id_idx" ON "work_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_populated_authors_order_idx" ON "_work_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_work_v_version_populated_authors_parent_id_idx" ON "_work_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_work_v_parent_idx" ON "_work_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_hero_image_idx" ON "_work_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_featured_image_idx" ON "_work_v" USING btree ("version_featured_image_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_meta_version_meta_image_idx" ON "_work_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_slug_idx" ON "_work_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_updated_at_idx" ON "_work_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version_created_at_idx" ON "_work_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_work_v_version_version__status_idx" ON "_work_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_work_v_created_at_idx" ON "_work_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_work_v_updated_at_idx" ON "_work_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_work_v_latest_idx" ON "_work_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_work_v_autosave_idx" ON "_work_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_work_v_rels_order_idx" ON "_work_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_work_v_rels_parent_idx" ON "_work_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_work_v_rels_path_idx" ON "_work_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_work_v_rels_work_id_idx" ON "_work_v_rels" USING btree ("work_id");
  CREATE INDEX IF NOT EXISTS "_work_v_rels_categories_id_idx" ON "_work_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_work_v_rels_users_id_idx" ON "_work_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "events_event_event_dates_order_idx" ON "events_event_event_dates" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "events_event_event_dates_parent_id_idx" ON "events_event_event_dates" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "events_event_details_language_order_idx" ON "events_event_details_language" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "events_event_details_language_parent_idx" ON "events_event_details_language" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "events_populated_authors_order_idx" ON "events_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "events_populated_authors_parent_id_idx" ON "events_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "events_hero_image_idx" ON "events" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "events_event_event_image_idx" ON "events" USING btree ("event_image_id");
  CREATE INDEX IF NOT EXISTS "events_event_details_event_details_location_idx" ON "events" USING btree ("event_details_location_id");
  CREATE INDEX IF NOT EXISTS "events_meta_meta_image_idx" ON "events" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "events_slug_idx" ON "events" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "events_updated_at_idx" ON "events" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "events_created_at_idx" ON "events" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "events__status_idx" ON "events" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "events_rels_order_idx" ON "events_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "events_rels_parent_idx" ON "events_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "events_rels_path_idx" ON "events_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "events_rels_events_categories_id_idx" ON "events_rels" USING btree ("events_categories_id");
  CREATE INDEX IF NOT EXISTS "events_rels_events_id_idx" ON "events_rels" USING btree ("events_id");
  CREATE INDEX IF NOT EXISTS "events_rels_categories_id_idx" ON "events_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "events_rels_users_id_idx" ON "events_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_events_v_version_event_event_dates_order_idx" ON "_events_v_version_event_event_dates" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_events_v_version_event_event_dates_parent_id_idx" ON "_events_v_version_event_event_dates" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_events_v_version_event_details_language_order_idx" ON "_events_v_version_event_details_language" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_events_v_version_event_details_language_parent_idx" ON "_events_v_version_event_details_language" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_events_v_version_populated_authors_order_idx" ON "_events_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_events_v_version_populated_authors_parent_id_idx" ON "_events_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_events_v_parent_idx" ON "_events_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_events_v_version_version_hero_image_idx" ON "_events_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_events_v_version_event_version_event_image_idx" ON "_events_v" USING btree ("version_event_image_id");
  CREATE INDEX IF NOT EXISTS "_events_v_version_event_details_version_event_details_location_idx" ON "_events_v" USING btree ("version_event_details_location_id");
  CREATE INDEX IF NOT EXISTS "_events_v_version_meta_version_meta_image_idx" ON "_events_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_events_v_version_version_slug_idx" ON "_events_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_events_v_version_version_updated_at_idx" ON "_events_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_events_v_version_version_created_at_idx" ON "_events_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_events_v_version_version__status_idx" ON "_events_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_events_v_created_at_idx" ON "_events_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_events_v_updated_at_idx" ON "_events_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_events_v_latest_idx" ON "_events_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_events_v_autosave_idx" ON "_events_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_events_v_rels_order_idx" ON "_events_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_events_v_rels_parent_idx" ON "_events_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_events_v_rels_path_idx" ON "_events_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_events_v_rels_events_categories_id_idx" ON "_events_v_rels" USING btree ("events_categories_id");
  CREATE INDEX IF NOT EXISTS "_events_v_rels_events_id_idx" ON "_events_v_rels" USING btree ("events_id");
  CREATE INDEX IF NOT EXISTS "_events_v_rels_categories_id_idx" ON "_events_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_events_v_rels_users_id_idx" ON "_events_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "investments_investments_investment_items_order_idx" ON "investments_investments_investment_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "investments_investments_investment_items_parent_id_idx" ON "investments_investments_investment_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "investments_investments_investment_items_image_idx" ON "investments_investments_investment_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "investments_investments_order_idx" ON "investments_investments" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "investments_investments_parent_id_idx" ON "investments_investments" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "investments_investments_section_image_idx" ON "investments_investments" USING btree ("section_image_id");
  CREATE INDEX IF NOT EXISTS "investments_populated_authors_order_idx" ON "investments_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "investments_populated_authors_parent_id_idx" ON "investments_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "investments_hero_image_idx" ON "investments" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "investments_featured_image_idx" ON "investments" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "investments_meta_meta_image_idx" ON "investments" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "investments_slug_idx" ON "investments" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "investments_updated_at_idx" ON "investments" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "investments_created_at_idx" ON "investments" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "investments__status_idx" ON "investments" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "investments_rels_order_idx" ON "investments_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "investments_rels_parent_idx" ON "investments_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "investments_rels_path_idx" ON "investments_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "investments_rels_investments_id_idx" ON "investments_rels" USING btree ("investments_id");
  CREATE INDEX IF NOT EXISTS "investments_rels_categories_id_idx" ON "investments_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "investments_rels_users_id_idx" ON "investments_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_investments_v_version_investments_investment_items_order_idx" ON "_investments_v_version_investments_investment_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_investments_v_version_investments_investment_items_parent_id_idx" ON "_investments_v_version_investments_investment_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_investments_v_version_investments_investment_items_image_idx" ON "_investments_v_version_investments_investment_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_investments_v_version_investments_order_idx" ON "_investments_v_version_investments" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_investments_v_version_investments_parent_id_idx" ON "_investments_v_version_investments" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_investments_v_version_investments_section_image_idx" ON "_investments_v_version_investments" USING btree ("section_image_id");
  CREATE INDEX IF NOT EXISTS "_investments_v_version_populated_authors_order_idx" ON "_investments_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_investments_v_version_populated_authors_parent_id_idx" ON "_investments_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_investments_v_parent_idx" ON "_investments_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_investments_v_version_version_hero_image_idx" ON "_investments_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_investments_v_version_version_featured_image_idx" ON "_investments_v" USING btree ("version_featured_image_id");
  CREATE INDEX IF NOT EXISTS "_investments_v_version_meta_version_meta_image_idx" ON "_investments_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_investments_v_version_version_slug_idx" ON "_investments_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_investments_v_version_version_updated_at_idx" ON "_investments_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_investments_v_version_version_created_at_idx" ON "_investments_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_investments_v_version_version__status_idx" ON "_investments_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_investments_v_created_at_idx" ON "_investments_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_investments_v_updated_at_idx" ON "_investments_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_investments_v_latest_idx" ON "_investments_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_investments_v_autosave_idx" ON "_investments_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_investments_v_rels_order_idx" ON "_investments_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_investments_v_rels_parent_idx" ON "_investments_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_investments_v_rels_path_idx" ON "_investments_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_investments_v_rels_investments_id_idx" ON "_investments_v_rels" USING btree ("investments_id");
  CREATE INDEX IF NOT EXISTS "_investments_v_rels_categories_id_idx" ON "_investments_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_investments_v_rels_users_id_idx" ON "_investments_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "live_populated_authors_order_idx" ON "live_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "live_populated_authors_parent_id_idx" ON "live_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "live_hero_image_idx" ON "live" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "live_featured_image_idx" ON "live" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "live_meta_meta_image_idx" ON "live" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "live_slug_idx" ON "live" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "live_updated_at_idx" ON "live" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "live_created_at_idx" ON "live" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "live__status_idx" ON "live" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "live_rels_order_idx" ON "live_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "live_rels_parent_idx" ON "live_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "live_rels_path_idx" ON "live_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "live_rels_live_id_idx" ON "live_rels" USING btree ("live_id");
  CREATE INDEX IF NOT EXISTS "live_rels_categories_id_idx" ON "live_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "live_rels_users_id_idx" ON "live_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_live_v_version_populated_authors_order_idx" ON "_live_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_live_v_version_populated_authors_parent_id_idx" ON "_live_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_live_v_parent_idx" ON "_live_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_live_v_version_version_hero_image_idx" ON "_live_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_live_v_version_version_featured_image_idx" ON "_live_v" USING btree ("version_featured_image_id");
  CREATE INDEX IF NOT EXISTS "_live_v_version_meta_version_meta_image_idx" ON "_live_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_live_v_version_version_slug_idx" ON "_live_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_live_v_version_version_updated_at_idx" ON "_live_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_live_v_version_version_created_at_idx" ON "_live_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_live_v_version_version__status_idx" ON "_live_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_live_v_created_at_idx" ON "_live_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_live_v_updated_at_idx" ON "_live_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_live_v_latest_idx" ON "_live_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_live_v_autosave_idx" ON "_live_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_live_v_rels_order_idx" ON "_live_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_live_v_rels_parent_idx" ON "_live_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_live_v_rels_path_idx" ON "_live_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_live_v_rels_live_id_idx" ON "_live_v_rels" USING btree ("live_id");
  CREATE INDEX IF NOT EXISTS "_live_v_rels_categories_id_idx" ON "_live_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_live_v_rels_users_id_idx" ON "_live_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "volunteer_populated_authors_order_idx" ON "volunteer_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "volunteer_populated_authors_parent_id_idx" ON "volunteer_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "volunteer_hero_image_idx" ON "volunteer" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "volunteer_image_idx" ON "volunteer" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "volunteer_meta_meta_image_idx" ON "volunteer" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "volunteer_slug_idx" ON "volunteer" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "volunteer_updated_at_idx" ON "volunteer" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "volunteer_created_at_idx" ON "volunteer" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "volunteer__status_idx" ON "volunteer" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "volunteer_rels_order_idx" ON "volunteer_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "volunteer_rels_parent_idx" ON "volunteer_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "volunteer_rels_path_idx" ON "volunteer_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "volunteer_rels_volunteer_id_idx" ON "volunteer_rels" USING btree ("volunteer_id");
  CREATE INDEX IF NOT EXISTS "volunteer_rels_categories_id_idx" ON "volunteer_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "volunteer_rels_users_id_idx" ON "volunteer_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_version_populated_authors_order_idx" ON "_volunteer_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_version_populated_authors_parent_id_idx" ON "_volunteer_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_parent_idx" ON "_volunteer_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_version_version_hero_image_idx" ON "_volunteer_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_version_version_image_idx" ON "_volunteer_v" USING btree ("version_image_id");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_version_meta_version_meta_image_idx" ON "_volunteer_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_version_version_slug_idx" ON "_volunteer_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_version_version_updated_at_idx" ON "_volunteer_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_version_version_created_at_idx" ON "_volunteer_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_version_version__status_idx" ON "_volunteer_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_created_at_idx" ON "_volunteer_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_updated_at_idx" ON "_volunteer_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_latest_idx" ON "_volunteer_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_autosave_idx" ON "_volunteer_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_rels_order_idx" ON "_volunteer_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_rels_parent_idx" ON "_volunteer_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_rels_path_idx" ON "_volunteer_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_rels_volunteer_id_idx" ON "_volunteer_v_rels" USING btree ("volunteer_id");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_rels_categories_id_idx" ON "_volunteer_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_volunteer_v_rels_users_id_idx" ON "_volunteer_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "innovate_populated_authors_order_idx" ON "innovate_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "innovate_populated_authors_parent_id_idx" ON "innovate_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "innovate_hero_image_idx" ON "innovate" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "innovate_featured_image_idx" ON "innovate" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "innovate_innovation_image_idx" ON "innovate" USING btree ("innovation_image_id");
  CREATE INDEX IF NOT EXISTS "innovate_meta_meta_image_idx" ON "innovate" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "innovate_slug_idx" ON "innovate" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "innovate_updated_at_idx" ON "innovate" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "innovate_created_at_idx" ON "innovate" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "innovate__status_idx" ON "innovate" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "innovate_rels_order_idx" ON "innovate_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "innovate_rels_parent_idx" ON "innovate_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "innovate_rels_path_idx" ON "innovate_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "innovate_rels_innovate_id_idx" ON "innovate_rels" USING btree ("innovate_id");
  CREATE INDEX IF NOT EXISTS "innovate_rels_categories_id_idx" ON "innovate_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "innovate_rels_users_id_idx" ON "innovate_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_innovate_v_version_populated_authors_order_idx" ON "_innovate_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_innovate_v_version_populated_authors_parent_id_idx" ON "_innovate_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_innovate_v_parent_idx" ON "_innovate_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_innovate_v_version_version_hero_image_idx" ON "_innovate_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_innovate_v_version_version_featured_image_idx" ON "_innovate_v" USING btree ("version_featured_image_id");
  CREATE INDEX IF NOT EXISTS "_innovate_v_version_version_innovation_image_idx" ON "_innovate_v" USING btree ("version_innovation_image_id");
  CREATE INDEX IF NOT EXISTS "_innovate_v_version_meta_version_meta_image_idx" ON "_innovate_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_innovate_v_version_version_slug_idx" ON "_innovate_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_innovate_v_version_version_updated_at_idx" ON "_innovate_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_innovate_v_version_version_created_at_idx" ON "_innovate_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_innovate_v_version_version__status_idx" ON "_innovate_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_innovate_v_created_at_idx" ON "_innovate_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_innovate_v_updated_at_idx" ON "_innovate_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_innovate_v_latest_idx" ON "_innovate_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_innovate_v_autosave_idx" ON "_innovate_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_innovate_v_rels_order_idx" ON "_innovate_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_innovate_v_rels_parent_idx" ON "_innovate_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_innovate_v_rels_path_idx" ON "_innovate_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_innovate_v_rels_innovate_id_idx" ON "_innovate_v_rels" USING btree ("innovate_id");
  CREATE INDEX IF NOT EXISTS "_innovate_v_rels_categories_id_idx" ON "_innovate_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_innovate_v_rels_users_id_idx" ON "_innovate_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "visit_details_populated_authors_order_idx" ON "visit_details_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "visit_details_populated_authors_parent_id_idx" ON "visit_details_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "visit_details_parent_idx" ON "visit_details" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "visit_details_hero_image_idx" ON "visit_details" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "visit_details_featured_image_idx" ON "visit_details" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "visit_details_meta_meta_image_idx" ON "visit_details" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "visit_details_slug_idx" ON "visit_details" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "visit_details_updated_at_idx" ON "visit_details" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "visit_details_created_at_idx" ON "visit_details" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "visit_details__status_idx" ON "visit_details" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "visit_details_rels_order_idx" ON "visit_details_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "visit_details_rels_parent_idx" ON "visit_details_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "visit_details_rels_path_idx" ON "visit_details_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "visit_details_rels_visit_details_id_idx" ON "visit_details_rels" USING btree ("visit_details_id");
  CREATE INDEX IF NOT EXISTS "visit_details_rels_categories_id_idx" ON "visit_details_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "visit_details_rels_users_id_idx" ON "visit_details_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_version_populated_authors_order_idx" ON "_visit_details_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_version_populated_authors_parent_id_idx" ON "_visit_details_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_parent_idx" ON "_visit_details_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_version_version_parent_idx" ON "_visit_details_v" USING btree ("version_parent_id");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_version_version_hero_image_idx" ON "_visit_details_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_version_version_featured_image_idx" ON "_visit_details_v" USING btree ("version_featured_image_id");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_version_meta_version_meta_image_idx" ON "_visit_details_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_version_version_slug_idx" ON "_visit_details_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_version_version_updated_at_idx" ON "_visit_details_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_version_version_created_at_idx" ON "_visit_details_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_version_version__status_idx" ON "_visit_details_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_created_at_idx" ON "_visit_details_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_updated_at_idx" ON "_visit_details_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_latest_idx" ON "_visit_details_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_autosave_idx" ON "_visit_details_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_rels_order_idx" ON "_visit_details_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_rels_parent_idx" ON "_visit_details_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_rels_path_idx" ON "_visit_details_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_rels_visit_details_id_idx" ON "_visit_details_v_rels" USING btree ("visit_details_id");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_rels_categories_id_idx" ON "_visit_details_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_visit_details_v_rels_users_id_idx" ON "_visit_details_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "volunteer_slides_slides_faq_order_idx" ON "volunteer_slides_slides_faq" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "volunteer_slides_slides_faq_parent_id_idx" ON "volunteer_slides_slides_faq" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "volunteer_slides_slides_order_idx" ON "volunteer_slides_slides" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "volunteer_slides_slides_parent_id_idx" ON "volunteer_slides_slides" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "volunteer_slides_slides_slug_idx" ON "volunteer_slides_slides" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "volunteer_slides_slides_image_idx" ON "volunteer_slides_slides" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "volunteer_slides_updated_at_idx" ON "volunteer_slides" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "volunteer_slides_created_at_idx" ON "volunteer_slides" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "social_reels_reels_order_idx" ON "social_reels_reels" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "social_reels_reels_parent_id_idx" ON "social_reels_reels" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "social_reels_reels_thumbnail_idx" ON "social_reels_reels" USING btree ("thumbnail_id");
  CREATE INDEX IF NOT EXISTS "social_reels_updated_at_idx" ON "social_reels" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "social_reels_created_at_idx" ON "social_reels" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "investment_categories_items_order_idx" ON "investment_categories_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "investment_categories_items_parent_id_idx" ON "investment_categories_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "investment_categories_items_image_idx" ON "investment_categories_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "investment_categories_updated_at_idx" ON "investment_categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "investment_categories_created_at_idx" ON "investment_categories" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "visit_groups_items_order_idx" ON "visit_groups_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "visit_groups_items_parent_id_idx" ON "visit_groups_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "visit_groups_items_image_idx" ON "visit_groups_items" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "visit_groups_updated_at_idx" ON "visit_groups" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "visit_groups_created_at_idx" ON "visit_groups" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "properties_images_order_idx" ON "properties_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_images_parent_id_idx" ON "properties_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_images_image_idx" ON "properties_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "properties_faq_order_idx" ON "properties_faq" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_faq_parent_id_idx" ON "properties_faq" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_nearby_order_idx" ON "properties_nearby" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_nearby_parent_id_idx" ON "properties_nearby" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_floor_plans_order_idx" ON "properties_floor_plans" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_floor_plans_parent_id_idx" ON "properties_floor_plans" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_floor_plans_file_idx" ON "properties_floor_plans" USING btree ("file_id");
  CREATE INDEX IF NOT EXISTS "properties_route_map_order_idx" ON "properties_route_map" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_route_map_parent_id_idx" ON "properties_route_map" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_route_map_file_idx" ON "properties_route_map" USING btree ("file_id");
  CREATE INDEX IF NOT EXISTS "properties_green_features_order_idx" ON "properties_green_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_green_features_parent_id_idx" ON "properties_green_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_features_order_idx" ON "properties_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_features_parent_id_idx" ON "properties_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_more_amenities_order_idx" ON "properties_more_amenities" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_more_amenities_parent_id_idx" ON "properties_more_amenities" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_more_amenities_icon_idx" ON "properties_more_amenities" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "properties_specifications_order_idx" ON "properties_specifications" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_specifications_parent_id_idx" ON "properties_specifications" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_rent_details_preferred_tenants_order_idx" ON "properties_rent_details_preferred_tenants" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "properties_rent_details_preferred_tenants_parent_idx" ON "properties_rent_details_preferred_tenants" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "properties_populated_authors_order_idx" ON "properties_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "properties_populated_authors_parent_id_idx" ON "properties_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "properties_hero_image_idx" ON "properties" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "properties_property_location_idx" ON "properties" USING btree ("property_location_id");
  CREATE INDEX IF NOT EXISTS "properties_meta_meta_image_idx" ON "properties" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "properties_slug_idx" ON "properties" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "properties_updated_at_idx" ON "properties" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "properties_created_at_idx" ON "properties" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "properties__status_idx" ON "properties" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "properties_rels_order_idx" ON "properties_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "properties_rels_parent_idx" ON "properties_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_path_idx" ON "properties_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "properties_rels_property_types_id_idx" ON "properties_rels" USING btree ("property_types_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_bhk_types_id_idx" ON "properties_rels" USING btree ("bhk_types_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_properties_id_idx" ON "properties_rels" USING btree ("properties_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_categories_id_idx" ON "properties_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "properties_rels_users_id_idx" ON "properties_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_images_order_idx" ON "_properties_v_version_images" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_images_parent_id_idx" ON "_properties_v_version_images" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_images_image_idx" ON "_properties_v_version_images" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_faq_order_idx" ON "_properties_v_version_faq" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_faq_parent_id_idx" ON "_properties_v_version_faq" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_nearby_order_idx" ON "_properties_v_version_nearby" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_nearby_parent_id_idx" ON "_properties_v_version_nearby" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_floor_plans_order_idx" ON "_properties_v_version_floor_plans" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_floor_plans_parent_id_idx" ON "_properties_v_version_floor_plans" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_floor_plans_file_idx" ON "_properties_v_version_floor_plans" USING btree ("file_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_route_map_order_idx" ON "_properties_v_version_route_map" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_route_map_parent_id_idx" ON "_properties_v_version_route_map" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_route_map_file_idx" ON "_properties_v_version_route_map" USING btree ("file_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_green_features_order_idx" ON "_properties_v_version_green_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_green_features_parent_id_idx" ON "_properties_v_version_green_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_features_order_idx" ON "_properties_v_version_features" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_features_parent_id_idx" ON "_properties_v_version_features" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_more_amenities_order_idx" ON "_properties_v_version_more_amenities" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_more_amenities_parent_id_idx" ON "_properties_v_version_more_amenities" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_more_amenities_icon_idx" ON "_properties_v_version_more_amenities" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_specifications_order_idx" ON "_properties_v_version_specifications" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_specifications_parent_id_idx" ON "_properties_v_version_specifications" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_rent_details_preferred_tenants_order_idx" ON "_properties_v_version_rent_details_preferred_tenants" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_rent_details_preferred_tenants_parent_idx" ON "_properties_v_version_rent_details_preferred_tenants" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_populated_authors_order_idx" ON "_properties_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_populated_authors_parent_id_idx" ON "_properties_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_parent_idx" ON "_properties_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_version_hero_image_idx" ON "_properties_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_version_property_location_idx" ON "_properties_v" USING btree ("version_property_location_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_meta_version_meta_image_idx" ON "_properties_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_version_slug_idx" ON "_properties_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_version_updated_at_idx" ON "_properties_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_version_created_at_idx" ON "_properties_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_properties_v_version_version__status_idx" ON "_properties_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_properties_v_created_at_idx" ON "_properties_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_properties_v_updated_at_idx" ON "_properties_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_properties_v_latest_idx" ON "_properties_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_properties_v_autosave_idx" ON "_properties_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_order_idx" ON "_properties_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_parent_idx" ON "_properties_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_path_idx" ON "_properties_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_property_types_id_idx" ON "_properties_v_rels" USING btree ("property_types_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_bhk_types_id_idx" ON "_properties_v_rels" USING btree ("bhk_types_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_properties_id_idx" ON "_properties_v_rels" USING btree ("properties_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_categories_id_idx" ON "_properties_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_properties_v_rels_users_id_idx" ON "_properties_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "bhk_types_updated_at_idx" ON "bhk_types" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "bhk_types_created_at_idx" ON "bhk_types" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "property_types_updated_at_idx" ON "property_types" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "property_types_created_at_idx" ON "property_types" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "locations_value_idx" ON "locations" USING btree ("value");
  CREATE INDEX IF NOT EXISTS "locations_updated_at_idx" ON "locations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "locations_created_at_idx" ON "locations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "amenities_icon_idx" ON "amenities" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "amenities_updated_at_idx" ON "amenities" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "amenities_created_at_idx" ON "amenities" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "contact_messages_updated_at_idx" ON "contact_messages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "contact_messages_created_at_idx" ON "contact_messages" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "propertylocations_value_idx" ON "propertylocations" USING btree ("value");
  CREATE INDEX IF NOT EXISTS "propertylocations_updated_at_idx" ON "propertylocations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "propertylocations_created_at_idx" ON "propertylocations" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "events_categories_title_idx" ON "events_categories" USING btree ("title");
  CREATE UNIQUE INDEX IF NOT EXISTS "events_categories_slug_idx" ON "events_categories" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "events_categories_updated_at_idx" ON "events_categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "events_categories_created_at_idx" ON "events_categories" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "superchennai_contests_populated_authors_order_idx" ON "superchennai_contests_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "superchennai_contests_populated_authors_parent_id_idx" ON "superchennai_contests_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "superchennai_contests_hero_image_idx" ON "superchennai_contests" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "superchennai_contests_meta_meta_image_idx" ON "superchennai_contests" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "superchennai_contests_slug_idx" ON "superchennai_contests" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "superchennai_contests_updated_at_idx" ON "superchennai_contests" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "superchennai_contests_created_at_idx" ON "superchennai_contests" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "superchennai_contests__status_idx" ON "superchennai_contests" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "superchennai_contests_rels_order_idx" ON "superchennai_contests_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "superchennai_contests_rels_parent_idx" ON "superchennai_contests_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "superchennai_contests_rels_path_idx" ON "superchennai_contests_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "superchennai_contests_rels_users_id_idx" ON "superchennai_contests_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_superchennai_contests_v_version_populated_authors_order_idx" ON "_superchennai_contests_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_superchennai_contests_v_version_populated_authors_parent_id_idx" ON "_superchennai_contests_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_superchennai_contests_v_parent_idx" ON "_superchennai_contests_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_superchennai_contests_v_version_version_hero_image_idx" ON "_superchennai_contests_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_superchennai_contests_v_version_meta_version_meta_image_idx" ON "_superchennai_contests_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_superchennai_contests_v_version_version_slug_idx" ON "_superchennai_contests_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_superchennai_contests_v_version_version_updated_at_idx" ON "_superchennai_contests_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_superchennai_contests_v_version_version_created_at_idx" ON "_superchennai_contests_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_superchennai_contests_v_version_version__status_idx" ON "_superchennai_contests_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_superchennai_contests_v_created_at_idx" ON "_superchennai_contests_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_superchennai_contests_v_updated_at_idx" ON "_superchennai_contests_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_superchennai_contests_v_latest_idx" ON "_superchennai_contests_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_superchennai_contests_v_autosave_idx" ON "_superchennai_contests_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_superchennai_contests_v_rels_order_idx" ON "_superchennai_contests_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_superchennai_contests_v_rels_parent_idx" ON "_superchennai_contests_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_superchennai_contests_v_rels_path_idx" ON "_superchennai_contests_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_superchennai_contests_v_rels_users_id_idx" ON "_superchennai_contests_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "contest_populated_authors_order_idx" ON "contest_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "contest_populated_authors_parent_id_idx" ON "contest_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "contest_hero_image_idx" ON "contest" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "contest_meta_meta_image_idx" ON "contest" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "contest_slug_idx" ON "contest" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "contest_updated_at_idx" ON "contest" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "contest_created_at_idx" ON "contest" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "contest__status_idx" ON "contest" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "contest_rels_order_idx" ON "contest_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "contest_rels_parent_idx" ON "contest_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "contest_rels_path_idx" ON "contest_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "contest_rels_users_id_idx" ON "contest_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_contest_v_version_populated_authors_order_idx" ON "_contest_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_contest_v_version_populated_authors_parent_id_idx" ON "_contest_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_contest_v_parent_idx" ON "_contest_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_contest_v_version_version_hero_image_idx" ON "_contest_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_contest_v_version_meta_version_meta_image_idx" ON "_contest_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_contest_v_version_version_slug_idx" ON "_contest_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_contest_v_version_version_updated_at_idx" ON "_contest_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_contest_v_version_version_created_at_idx" ON "_contest_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_contest_v_version_version__status_idx" ON "_contest_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_contest_v_created_at_idx" ON "_contest_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_contest_v_updated_at_idx" ON "_contest_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_contest_v_latest_idx" ON "_contest_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_contest_v_autosave_idx" ON "_contest_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_contest_v_rels_order_idx" ON "_contest_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_contest_v_rels_parent_idx" ON "_contest_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_contest_v_rels_path_idx" ON "_contest_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_contest_v_rels_users_id_idx" ON "_contest_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "organizers_image_idx" ON "organizers" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "organizers_updated_at_idx" ON "organizers" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "organizers_created_at_idx" ON "organizers" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "venues_slug_idx" ON "venues" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "venues_updated_at_idx" ON "venues" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "venues_created_at_idx" ON "venues" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "margazhi_contest_categories_slug_idx" ON "margazhi_contest_categories" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "margazhi_contest_categories_updated_at_idx" ON "margazhi_contest_categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "margazhi_contest_categories_created_at_idx" ON "margazhi_contest_categories" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "sabha_foods_image_idx" ON "sabha_foods" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "sabha_foods_updated_at_idx" ON "sabha_foods" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "sabha_foods_created_at_idx" ON "sabha_foods" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "articles_populated_authors_order_idx" ON "articles_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "articles_populated_authors_parent_id_idx" ON "articles_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "articles_hero_image_idx" ON "articles" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "articles_articlecategory_idx" ON "articles" USING btree ("articlecategory_id");
  CREATE INDEX IF NOT EXISTS "articles_language_idx" ON "articles" USING btree ("language_id");
  CREATE INDEX IF NOT EXISTS "articles_thumbnail_image_idx" ON "articles" USING btree ("thumbnail_image_id");
  CREATE INDEX IF NOT EXISTS "articles_meta_meta_image_idx" ON "articles" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "articles_slug_idx" ON "articles" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "articles_updated_at_idx" ON "articles" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "articles_created_at_idx" ON "articles" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "articles__status_idx" ON "articles" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "articles_rels_order_idx" ON "articles_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "articles_rels_parent_idx" ON "articles_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "articles_rels_path_idx" ON "articles_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "articles_rels_article_types_id_idx" ON "articles_rels" USING btree ("article_types_id");
  CREATE INDEX IF NOT EXISTS "articles_rels_articlelocations_id_idx" ON "articles_rels" USING btree ("articlelocations_id");
  CREATE INDEX IF NOT EXISTS "articles_rels_articles_id_idx" ON "articles_rels" USING btree ("articles_id");
  CREATE INDEX IF NOT EXISTS "articles_rels_categories_id_idx" ON "articles_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "articles_rels_users_id_idx" ON "articles_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_articles_v_version_populated_authors_order_idx" ON "_articles_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_articles_v_version_populated_authors_parent_id_idx" ON "_articles_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_articles_v_parent_idx" ON "_articles_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_articles_v_version_version_hero_image_idx" ON "_articles_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_articles_v_version_version_articlecategory_idx" ON "_articles_v" USING btree ("version_articlecategory_id");
  CREATE INDEX IF NOT EXISTS "_articles_v_version_version_language_idx" ON "_articles_v" USING btree ("version_language_id");
  CREATE INDEX IF NOT EXISTS "_articles_v_version_version_thumbnail_image_idx" ON "_articles_v" USING btree ("version_thumbnail_image_id");
  CREATE INDEX IF NOT EXISTS "_articles_v_version_meta_version_meta_image_idx" ON "_articles_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_articles_v_version_version_slug_idx" ON "_articles_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_articles_v_version_version_updated_at_idx" ON "_articles_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_articles_v_version_version_created_at_idx" ON "_articles_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_articles_v_version_version__status_idx" ON "_articles_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_articles_v_created_at_idx" ON "_articles_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_articles_v_updated_at_idx" ON "_articles_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_articles_v_latest_idx" ON "_articles_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_articles_v_autosave_idx" ON "_articles_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_articles_v_rels_order_idx" ON "_articles_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_articles_v_rels_parent_idx" ON "_articles_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_articles_v_rels_path_idx" ON "_articles_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_articles_v_rels_article_types_id_idx" ON "_articles_v_rels" USING btree ("article_types_id");
  CREATE INDEX IF NOT EXISTS "_articles_v_rels_articlelocations_id_idx" ON "_articles_v_rels" USING btree ("articlelocations_id");
  CREATE INDEX IF NOT EXISTS "_articles_v_rels_articles_id_idx" ON "_articles_v_rels" USING btree ("articles_id");
  CREATE INDEX IF NOT EXISTS "_articles_v_rels_categories_id_idx" ON "_articles_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_articles_v_rels_users_id_idx" ON "_articles_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "ads_populated_authors_order_idx" ON "ads_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "ads_populated_authors_parent_id_idx" ON "ads_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "ads_media_idx" ON "ads" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "ads_mobile_settings_mobile_settings_mobile_media_idx" ON "ads" USING btree ("mobile_settings_mobile_media_id");
  CREATE INDEX IF NOT EXISTS "ads_meta_meta_image_idx" ON "ads" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "ads_slug_idx" ON "ads" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "ads_updated_at_idx" ON "ads" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "ads_created_at_idx" ON "ads" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "ads__status_idx" ON "ads" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "ads_rels_order_idx" ON "ads_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "ads_rels_parent_idx" ON "ads_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "ads_rels_path_idx" ON "ads_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "ads_rels_posts_id_idx" ON "ads_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "ads_rels_categories_id_idx" ON "ads_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "ads_rels_users_id_idx" ON "ads_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_ads_v_version_populated_authors_order_idx" ON "_ads_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_ads_v_version_populated_authors_parent_id_idx" ON "_ads_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_ads_v_parent_idx" ON "_ads_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_ads_v_version_version_media_idx" ON "_ads_v" USING btree ("version_media_id");
  CREATE INDEX IF NOT EXISTS "_ads_v_version_mobile_settings_version_mobile_settings_mobile_media_idx" ON "_ads_v" USING btree ("version_mobile_settings_mobile_media_id");
  CREATE INDEX IF NOT EXISTS "_ads_v_version_meta_version_meta_image_idx" ON "_ads_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_ads_v_version_version_slug_idx" ON "_ads_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_ads_v_version_version_updated_at_idx" ON "_ads_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_ads_v_version_version_created_at_idx" ON "_ads_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_ads_v_version_version__status_idx" ON "_ads_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_ads_v_created_at_idx" ON "_ads_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_ads_v_updated_at_idx" ON "_ads_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_ads_v_latest_idx" ON "_ads_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_ads_v_autosave_idx" ON "_ads_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_ads_v_rels_order_idx" ON "_ads_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_ads_v_rels_parent_idx" ON "_ads_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_ads_v_rels_path_idx" ON "_ads_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_ads_v_rels_posts_id_idx" ON "_ads_v_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "_ads_v_rels_categories_id_idx" ON "_ads_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_ads_v_rels_users_id_idx" ON "_ads_v_rels" USING btree ("users_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "article_types_value_idx" ON "article_types" USING btree ("value");
  CREATE INDEX IF NOT EXISTS "article_types_icon_idx" ON "article_types" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "article_types_updated_at_idx" ON "article_types" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "article_types_created_at_idx" ON "article_types" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "articlelocations_value_idx" ON "articlelocations" USING btree ("value");
  CREATE INDEX IF NOT EXISTS "articlelocations_updated_at_idx" ON "articlelocations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "articlelocations_created_at_idx" ON "articlelocations" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "articlecategory_value_idx" ON "articlecategory" USING btree ("value");
  CREATE INDEX IF NOT EXISTS "articlecategory_icon_idx" ON "articlecategory" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "articlecategory_cover_image_idx" ON "articlecategory" USING btree ("cover_image_id");
  CREATE INDEX IF NOT EXISTS "articlecategory_updated_at_idx" ON "articlecategory" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "articlecategory_created_at_idx" ON "articlecategory" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "languages_code_idx" ON "languages" USING btree ("code");
  CREATE INDEX IF NOT EXISTS "languages_updated_at_idx" ON "languages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "languages_created_at_idx" ON "languages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "neighbourhood_gallery_order_idx" ON "neighbourhood_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "neighbourhood_gallery_parent_id_idx" ON "neighbourhood_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_gallery_image_idx" ON "neighbourhood_gallery" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_branches_order_idx" ON "neighbourhood_branches" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "neighbourhood_branches_parent_id_idx" ON "neighbourhood_branches" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_documents_order_idx" ON "neighbourhood_documents" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "neighbourhood_documents_parent_id_idx" ON "neighbourhood_documents" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_documents_file_idx" ON "neighbourhood_documents" USING btree ("file_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_business_hours_order_idx" ON "neighbourhood_business_hours" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "neighbourhood_business_hours_parent_id_idx" ON "neighbourhood_business_hours" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_service_options_order_idx" ON "neighbourhood_service_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "neighbourhood_service_options_parent_id_idx" ON "neighbourhood_service_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_menu_items_order_idx" ON "neighbourhood_menu_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "neighbourhood_menu_items_parent_id_idx" ON "neighbourhood_menu_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_fuel_types_order_idx" ON "neighbourhood_fuel_types" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "neighbourhood_fuel_types_parent_id_idx" ON "neighbourhood_fuel_types" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_amenities_order_idx" ON "neighbourhood_amenities" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "neighbourhood_amenities_parent_id_idx" ON "neighbourhood_amenities" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_awards_order_idx" ON "neighbourhood_awards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "neighbourhood_awards_parent_id_idx" ON "neighbourhood_awards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_quick_access_highlights_order_idx" ON "neighbourhood_quick_access_highlights" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "neighbourhood_quick_access_highlights_parent_id_idx" ON "neighbourhood_quick_access_highlights" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_quick_access_highlights_icon_idx" ON "neighbourhood_quick_access_highlights" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_neighborhood_stats_order_idx" ON "neighbourhood_neighborhood_stats" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "neighbourhood_neighborhood_stats_parent_id_idx" ON "neighbourhood_neighborhood_stats" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_neighborhood_stats_icon_idx" ON "neighbourhood_neighborhood_stats" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_structured_data_faq_schema_order_idx" ON "neighbourhood_structured_data_faq_schema" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "neighbourhood_structured_data_faq_schema_parent_id_idx" ON "neighbourhood_structured_data_faq_schema" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_structured_data_event_schema_order_idx" ON "neighbourhood_structured_data_event_schema" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "neighbourhood_structured_data_event_schema_parent_id_idx" ON "neighbourhood_structured_data_event_schema" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_populated_authors_order_idx" ON "neighbourhood_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "neighbourhood_populated_authors_parent_id_idx" ON "neighbourhood_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_hero_image_idx" ON "neighbourhood" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_featured_image_idx" ON "neighbourhood" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_category_idx" ON "neighbourhood" USING btree ("category_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_icon_idx" ON "neighbourhood" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_locations_idx" ON "neighbourhood" USING btree ("locations_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_meta_meta_image_idx" ON "neighbourhood" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_slug_idx" ON "neighbourhood" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "neighbourhood_updated_at_idx" ON "neighbourhood" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "neighbourhood_created_at_idx" ON "neighbourhood" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "neighbourhood__status_idx" ON "neighbourhood" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "neighbourhood_rels_order_idx" ON "neighbourhood_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "neighbourhood_rels_parent_idx" ON "neighbourhood_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_rels_path_idx" ON "neighbourhood_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "neighbourhood_rels_neighbourhood_subcategories_id_idx" ON "neighbourhood_rels" USING btree ("neighbourhood_subcategories_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_rels_neighbourhood_tags_id_idx" ON "neighbourhood_rels" USING btree ("neighbourhood_tags_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_rels_chennai_neighbourhoodlocations_id_idx" ON "neighbourhood_rels" USING btree ("chennai_neighbourhoodlocations_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_rels_users_id_idx" ON "neighbourhood_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_gallery_order_idx" ON "_neighbourhood_v_version_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_gallery_parent_id_idx" ON "_neighbourhood_v_version_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_gallery_image_idx" ON "_neighbourhood_v_version_gallery" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_branches_order_idx" ON "_neighbourhood_v_version_branches" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_branches_parent_id_idx" ON "_neighbourhood_v_version_branches" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_documents_order_idx" ON "_neighbourhood_v_version_documents" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_documents_parent_id_idx" ON "_neighbourhood_v_version_documents" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_documents_file_idx" ON "_neighbourhood_v_version_documents" USING btree ("file_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_business_hours_order_idx" ON "_neighbourhood_v_version_business_hours" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_business_hours_parent_id_idx" ON "_neighbourhood_v_version_business_hours" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_service_options_order_idx" ON "_neighbourhood_v_version_service_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_service_options_parent_id_idx" ON "_neighbourhood_v_version_service_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_menu_items_order_idx" ON "_neighbourhood_v_version_menu_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_menu_items_parent_id_idx" ON "_neighbourhood_v_version_menu_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_fuel_types_order_idx" ON "_neighbourhood_v_version_fuel_types" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_fuel_types_parent_id_idx" ON "_neighbourhood_v_version_fuel_types" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_amenities_order_idx" ON "_neighbourhood_v_version_amenities" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_amenities_parent_id_idx" ON "_neighbourhood_v_version_amenities" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_awards_order_idx" ON "_neighbourhood_v_version_awards" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_awards_parent_id_idx" ON "_neighbourhood_v_version_awards" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_quick_access_highlights_order_idx" ON "_neighbourhood_v_version_quick_access_highlights" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_quick_access_highlights_parent_id_idx" ON "_neighbourhood_v_version_quick_access_highlights" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_quick_access_highlights_icon_idx" ON "_neighbourhood_v_version_quick_access_highlights" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_neighborhood_stats_order_idx" ON "_neighbourhood_v_version_neighborhood_stats" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_neighborhood_stats_parent_id_idx" ON "_neighbourhood_v_version_neighborhood_stats" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_neighborhood_stats_icon_idx" ON "_neighbourhood_v_version_neighborhood_stats" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_structured_data_faq_schema_order_idx" ON "_neighbourhood_v_version_structured_data_faq_schema" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_structured_data_faq_schema_parent_id_idx" ON "_neighbourhood_v_version_structured_data_faq_schema" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_structured_data_event_schema_order_idx" ON "_neighbourhood_v_version_structured_data_event_schema" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_structured_data_event_schema_parent_id_idx" ON "_neighbourhood_v_version_structured_data_event_schema" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_populated_authors_order_idx" ON "_neighbourhood_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_populated_authors_parent_id_idx" ON "_neighbourhood_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_parent_idx" ON "_neighbourhood_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_version_hero_image_idx" ON "_neighbourhood_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_version_featured_image_idx" ON "_neighbourhood_v" USING btree ("version_featured_image_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_version_category_idx" ON "_neighbourhood_v" USING btree ("version_category_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_version_icon_idx" ON "_neighbourhood_v" USING btree ("version_icon_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_version_locations_idx" ON "_neighbourhood_v" USING btree ("version_locations_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_meta_version_meta_image_idx" ON "_neighbourhood_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_version_slug_idx" ON "_neighbourhood_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_version_updated_at_idx" ON "_neighbourhood_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_version_created_at_idx" ON "_neighbourhood_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_version_version__status_idx" ON "_neighbourhood_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_created_at_idx" ON "_neighbourhood_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_updated_at_idx" ON "_neighbourhood_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_latest_idx" ON "_neighbourhood_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_autosave_idx" ON "_neighbourhood_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_rels_order_idx" ON "_neighbourhood_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_rels_parent_idx" ON "_neighbourhood_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_rels_path_idx" ON "_neighbourhood_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_rels_neighbourhood_subcategories_id_idx" ON "_neighbourhood_v_rels" USING btree ("neighbourhood_subcategories_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_rels_neighbourhood_tags_id_idx" ON "_neighbourhood_v_rels" USING btree ("neighbourhood_tags_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_rels_chennai_neighbourhoodlocations_id_idx" ON "_neighbourhood_v_rels" USING btree ("chennai_neighbourhoodlocations_id");
  CREATE INDEX IF NOT EXISTS "_neighbourhood_v_rels_users_id_idx" ON "_neighbourhood_v_rels" USING btree ("users_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "neighbourhood_categories_slug_idx" ON "neighbourhood_categories" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "neighbourhood_categories_icon_idx" ON "neighbourhood_categories" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_categories_updated_at_idx" ON "neighbourhood_categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "neighbourhood_categories_created_at_idx" ON "neighbourhood_categories" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "neighbourhood_subcategories_slug_idx" ON "neighbourhood_subcategories" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "neighbourhood_subcategories_parent_category_idx" ON "neighbourhood_subcategories" USING btree ("parent_category_id");
  CREATE INDEX IF NOT EXISTS "neighbourhood_subcategories_updated_at_idx" ON "neighbourhood_subcategories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "neighbourhood_subcategories_created_at_idx" ON "neighbourhood_subcategories" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "neighbourhood_tags_updated_at_idx" ON "neighbourhood_tags" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "neighbourhood_tags_created_at_idx" ON "neighbourhood_tags" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "chennai_neighbourhoodlocations_overview_points_order_idx" ON "chennai_neighbourhoodlocations_overview_points" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "chennai_neighbourhoodlocations_overview_points_parent_id_idx" ON "chennai_neighbourhoodlocations_overview_points" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "chennai_neighbourhoodlocations_overview_points_icon_idx" ON "chennai_neighbourhoodlocations_overview_points" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "chennai_neighbourhoodlocations_quick_access_order_idx" ON "chennai_neighbourhoodlocations_quick_access" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "chennai_neighbourhoodlocations_quick_access_parent_id_idx" ON "chennai_neighbourhoodlocations_quick_access" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "chennai_neighbourhoodlocations_quick_access_icon_idx" ON "chennai_neighbourhoodlocations_quick_access" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "chennai_neighbourhoodlocations_why_choose_order_idx" ON "chennai_neighbourhoodlocations_why_choose" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "chennai_neighbourhoodlocations_why_choose_parent_id_idx" ON "chennai_neighbourhoodlocations_why_choose" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "chennai_neighbourhoodlocations_lifestyle_scores_order_idx" ON "chennai_neighbourhoodlocations_lifestyle_scores" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "chennai_neighbourhoodlocations_lifestyle_scores_parent_id_idx" ON "chennai_neighbourhoodlocations_lifestyle_scores" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "chennai_neighbourhoodlocations_faq_section_faqs_order_idx" ON "chennai_neighbourhoodlocations_faq_section_faqs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "chennai_neighbourhoodlocations_faq_section_faqs_parent_id_idx" ON "chennai_neighbourhoodlocations_faq_section_faqs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "chennai_neighbourhoodlocations_image_idx" ON "chennai_neighbourhoodlocations" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "chennai_neighbourhoodlocations_icon_svg_idx" ON "chennai_neighbourhoodlocations" USING btree ("icon_svg_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "chennai_neighbourhoodlocations_value_idx" ON "chennai_neighbourhoodlocations" USING btree ("value");
  CREATE INDEX IF NOT EXISTS "chennai_neighbourhoodlocations_updated_at_idx" ON "chennai_neighbourhoodlocations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "chennai_neighbourhoodlocations_created_at_idx" ON "chennai_neighbourhoodlocations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "trending_chennai_trending_chennai_event_dates_order_idx" ON "trending_chennai_trending_chennai_event_dates" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "trending_chennai_trending_chennai_event_dates_parent_id_idx" ON "trending_chennai_trending_chennai_event_dates" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "trending_chennai_meta_seo_keywords_order_idx" ON "trending_chennai_meta_seo_keywords" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "trending_chennai_meta_seo_keywords_parent_id_idx" ON "trending_chennai_meta_seo_keywords" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "trending_chennai_populated_authors_order_idx" ON "trending_chennai_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "trending_chennai_populated_authors_parent_id_idx" ON "trending_chennai_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "trending_chennai_hero_image_idx" ON "trending_chennai" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "trending_chennai_trending_chennai_trending_chennai_image_idx" ON "trending_chennai" USING btree ("trending_chennai_image_id");
  CREATE INDEX IF NOT EXISTS "trending_chennai_trending_chennai_details_trending_chennai_details_location_idx" ON "trending_chennai" USING btree ("trending_chennai_details_location_id");
  CREATE INDEX IF NOT EXISTS "trending_chennai_meta_meta_image_idx" ON "trending_chennai" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "trending_chennai_meta_seo_meta_seo_og_image_idx" ON "trending_chennai" USING btree ("meta_seo_og_image_id");
  CREATE INDEX IF NOT EXISTS "trending_chennai_slug_idx" ON "trending_chennai" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "trending_chennai_updated_at_idx" ON "trending_chennai" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "trending_chennai_created_at_idx" ON "trending_chennai" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "trending_chennai__status_idx" ON "trending_chennai" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "trending_chennai_rels_order_idx" ON "trending_chennai_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "trending_chennai_rels_parent_idx" ON "trending_chennai_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "trending_chennai_rels_path_idx" ON "trending_chennai_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "trending_chennai_rels_trending_languages_id_idx" ON "trending_chennai_rels" USING btree ("trending_languages_id");
  CREATE INDEX IF NOT EXISTS "trending_chennai_rels_trending_events_categories_id_idx" ON "trending_chennai_rels" USING btree ("trending_events_categories_id");
  CREATE INDEX IF NOT EXISTS "trending_chennai_rels_events_id_idx" ON "trending_chennai_rels" USING btree ("events_id");
  CREATE INDEX IF NOT EXISTS "trending_chennai_rels_categories_id_idx" ON "trending_chennai_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "trending_chennai_rels_users_id_idx" ON "trending_chennai_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_version_trending_chennai_event_dates_order_idx" ON "_trending_chennai_v_version_trending_chennai_event_dates" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_version_trending_chennai_event_dates_parent_id_idx" ON "_trending_chennai_v_version_trending_chennai_event_dates" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_version_meta_seo_keywords_order_idx" ON "_trending_chennai_v_version_meta_seo_keywords" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_version_meta_seo_keywords_parent_id_idx" ON "_trending_chennai_v_version_meta_seo_keywords" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_version_populated_authors_order_idx" ON "_trending_chennai_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_version_populated_authors_parent_id_idx" ON "_trending_chennai_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_parent_idx" ON "_trending_chennai_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_version_version_hero_image_idx" ON "_trending_chennai_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_version_trending_chennai_version_trending_chennai_image_idx" ON "_trending_chennai_v" USING btree ("version_trending_chennai_image_id");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_version_trending_chennai_details_version_trending_chennai_details_location_idx" ON "_trending_chennai_v" USING btree ("version_trending_chennai_details_location_id");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_version_meta_version_meta_image_idx" ON "_trending_chennai_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_version_meta_seo_version_meta_seo_og_image_idx" ON "_trending_chennai_v" USING btree ("version_meta_seo_og_image_id");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_version_version_slug_idx" ON "_trending_chennai_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_version_version_updated_at_idx" ON "_trending_chennai_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_version_version_created_at_idx" ON "_trending_chennai_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_version_version__status_idx" ON "_trending_chennai_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_created_at_idx" ON "_trending_chennai_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_updated_at_idx" ON "_trending_chennai_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_latest_idx" ON "_trending_chennai_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_autosave_idx" ON "_trending_chennai_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_rels_order_idx" ON "_trending_chennai_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_rels_parent_idx" ON "_trending_chennai_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_rels_path_idx" ON "_trending_chennai_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_rels_trending_languages_id_idx" ON "_trending_chennai_v_rels" USING btree ("trending_languages_id");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_rels_trending_events_categories_id_idx" ON "_trending_chennai_v_rels" USING btree ("trending_events_categories_id");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_rels_events_id_idx" ON "_trending_chennai_v_rels" USING btree ("events_id");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_rels_categories_id_idx" ON "_trending_chennai_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_trending_chennai_v_rels_users_id_idx" ON "_trending_chennai_v_rels" USING btree ("users_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "trendinglocations_value_idx" ON "trendinglocations" USING btree ("value");
  CREATE INDEX IF NOT EXISTS "trendinglocations_updated_at_idx" ON "trendinglocations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "trendinglocations_created_at_idx" ON "trendinglocations" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "trending_events_categories_title_idx" ON "trending_events_categories" USING btree ("title");
  CREATE UNIQUE INDEX IF NOT EXISTS "trending_events_categories_slug_idx" ON "trending_events_categories" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "trending_events_categories_updated_at_idx" ON "trending_events_categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "trending_events_categories_created_at_idx" ON "trending_events_categories" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "trending_languages_name_idx" ON "trending_languages" USING btree ("name");
  CREATE UNIQUE INDEX IF NOT EXISTS "trending_languages_code_idx" ON "trending_languages" USING btree ("code");
  CREATE INDEX IF NOT EXISTS "trending_languages_flag_idx" ON "trending_languages" USING btree ("flag_id");
  CREATE INDEX IF NOT EXISTS "trending_languages_updated_at_idx" ON "trending_languages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "trending_languages_created_at_idx" ON "trending_languages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "cricket_score_meta_seo_keywords_order_idx" ON "cricket_score_meta_seo_keywords" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cricket_score_meta_seo_keywords_parent_id_idx" ON "cricket_score_meta_seo_keywords" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cricket_score_populated_authors_order_idx" ON "cricket_score_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "cricket_score_populated_authors_parent_id_idx" ON "cricket_score_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "cricket_score_hero_image_idx" ON "cricket_score" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "cricket_score_cricket_score_cricket_score_i_p_limage_idx" ON "cricket_score" USING btree ("cricket_score_i_p_limage_id");
  CREATE INDEX IF NOT EXISTS "cricket_score_cricket_score_match_details_cricket_score_match_details_stadium_location_idx" ON "cricket_score" USING btree ("cricket_score_match_details_stadium_location_id");
  CREATE INDEX IF NOT EXISTS "cricket_score_meta_meta_image_idx" ON "cricket_score" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "cricket_score_meta_seo_meta_seo_og_image_idx" ON "cricket_score" USING btree ("meta_seo_og_image_id");
  CREATE INDEX IF NOT EXISTS "cricket_score_slug_idx" ON "cricket_score" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "cricket_score_updated_at_idx" ON "cricket_score" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "cricket_score_created_at_idx" ON "cricket_score" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "cricket_score__status_idx" ON "cricket_score" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "cricket_score_rels_order_idx" ON "cricket_score_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "cricket_score_rels_parent_idx" ON "cricket_score_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "cricket_score_rels_path_idx" ON "cricket_score_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "cricket_score_rels_ipl_languages_id_idx" ON "cricket_score_rels" USING btree ("ipl_languages_id");
  CREATE INDEX IF NOT EXISTS "cricket_score_rels_events_id_idx" ON "cricket_score_rels" USING btree ("events_id");
  CREATE INDEX IF NOT EXISTS "cricket_score_rels_categories_id_idx" ON "cricket_score_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "cricket_score_rels_users_id_idx" ON "cricket_score_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_version_meta_seo_keywords_order_idx" ON "_cricket_score_v_version_meta_seo_keywords" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_version_meta_seo_keywords_parent_id_idx" ON "_cricket_score_v_version_meta_seo_keywords" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_version_populated_authors_order_idx" ON "_cricket_score_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_version_populated_authors_parent_id_idx" ON "_cricket_score_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_parent_idx" ON "_cricket_score_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_version_version_hero_image_idx" ON "_cricket_score_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_version_cricket_score_version_cricket_score_i_p_limage_idx" ON "_cricket_score_v" USING btree ("version_cricket_score_i_p_limage_id");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_version_cricket_score_match_details_version_cricket_score_match_details_stadium_location_idx" ON "_cricket_score_v" USING btree ("version_cricket_score_match_details_stadium_location_id");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_version_meta_version_meta_image_idx" ON "_cricket_score_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_version_meta_seo_version_meta_seo_og_image_idx" ON "_cricket_score_v" USING btree ("version_meta_seo_og_image_id");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_version_version_slug_idx" ON "_cricket_score_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_version_version_updated_at_idx" ON "_cricket_score_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_version_version_created_at_idx" ON "_cricket_score_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_version_version__status_idx" ON "_cricket_score_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_created_at_idx" ON "_cricket_score_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_updated_at_idx" ON "_cricket_score_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_latest_idx" ON "_cricket_score_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_autosave_idx" ON "_cricket_score_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_rels_order_idx" ON "_cricket_score_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_rels_parent_idx" ON "_cricket_score_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_rels_path_idx" ON "_cricket_score_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_rels_ipl_languages_id_idx" ON "_cricket_score_v_rels" USING btree ("ipl_languages_id");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_rels_events_id_idx" ON "_cricket_score_v_rels" USING btree ("events_id");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_rels_categories_id_idx" ON "_cricket_score_v_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "_cricket_score_v_rels_users_id_idx" ON "_cricket_score_v_rels" USING btree ("users_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "ipl_categories_title_idx" ON "ipl_categories" USING btree ("title");
  CREATE UNIQUE INDEX IF NOT EXISTS "ipl_categories_slug_idx" ON "ipl_categories" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "ipl_categories_updated_at_idx" ON "ipl_categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "ipl_categories_created_at_idx" ON "ipl_categories" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "ipl_locations_value_idx" ON "ipl_locations" USING btree ("value");
  CREATE INDEX IF NOT EXISTS "ipl_locations_updated_at_idx" ON "ipl_locations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "ipl_locations_created_at_idx" ON "ipl_locations" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "ipl_languages_name_idx" ON "ipl_languages" USING btree ("name");
  CREATE UNIQUE INDEX IF NOT EXISTS "ipl_languages_code_idx" ON "ipl_languages" USING btree ("code");
  CREATE INDEX IF NOT EXISTS "ipl_languages_flag_idx" ON "ipl_languages" USING btree ("flag_id");
  CREATE INDEX IF NOT EXISTS "ipl_languages_updated_at_idx" ON "ipl_languages" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "ipl_languages_created_at_idx" ON "ipl_languages" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "icon_of_month_achievements_order_idx" ON "icon_of_month_achievements" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "icon_of_month_achievements_parent_id_idx" ON "icon_of_month_achievements" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "icon_of_month_populated_authors_order_idx" ON "icon_of_month_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "icon_of_month_populated_authors_parent_id_idx" ON "icon_of_month_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "icon_of_month_hero_image_idx" ON "icon_of_month" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "icon_of_month_profile_image_idx" ON "icon_of_month" USING btree ("profile_image_id");
  CREATE INDEX IF NOT EXISTS "icon_of_month_cover_image_idx" ON "icon_of_month" USING btree ("cover_image_id");
  CREATE INDEX IF NOT EXISTS "icon_of_month_category_idx" ON "icon_of_month" USING btree ("category_id");
  CREATE INDEX IF NOT EXISTS "icon_of_month_meta_meta_image_idx" ON "icon_of_month" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "icon_of_month_slug_idx" ON "icon_of_month" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "icon_of_month_updated_at_idx" ON "icon_of_month" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "icon_of_month_created_at_idx" ON "icon_of_month" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "icon_of_month__status_idx" ON "icon_of_month" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "icon_of_month_rels_order_idx" ON "icon_of_month_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "icon_of_month_rels_parent_idx" ON "icon_of_month_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "icon_of_month_rels_path_idx" ON "icon_of_month_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "icon_of_month_rels_users_id_idx" ON "icon_of_month_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_version_achievements_order_idx" ON "_icon_of_month_v_version_achievements" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_version_achievements_parent_id_idx" ON "_icon_of_month_v_version_achievements" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_version_populated_authors_order_idx" ON "_icon_of_month_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_version_populated_authors_parent_id_idx" ON "_icon_of_month_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_parent_idx" ON "_icon_of_month_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_version_version_hero_image_idx" ON "_icon_of_month_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_version_version_profile_image_idx" ON "_icon_of_month_v" USING btree ("version_profile_image_id");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_version_version_cover_image_idx" ON "_icon_of_month_v" USING btree ("version_cover_image_id");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_version_version_category_idx" ON "_icon_of_month_v" USING btree ("version_category_id");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_version_meta_version_meta_image_idx" ON "_icon_of_month_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_version_version_slug_idx" ON "_icon_of_month_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_version_version_updated_at_idx" ON "_icon_of_month_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_version_version_created_at_idx" ON "_icon_of_month_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_version_version__status_idx" ON "_icon_of_month_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_created_at_idx" ON "_icon_of_month_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_updated_at_idx" ON "_icon_of_month_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_latest_idx" ON "_icon_of_month_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_autosave_idx" ON "_icon_of_month_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_rels_order_idx" ON "_icon_of_month_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_rels_parent_idx" ON "_icon_of_month_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_rels_path_idx" ON "_icon_of_month_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_icon_of_month_v_rels_users_id_idx" ON "_icon_of_month_v_rels" USING btree ("users_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "icon_month_categories_slug_idx" ON "icon_month_categories" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "icon_month_categories_icon_idx" ON "icon_month_categories" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "icon_month_categories_updated_at_idx" ON "icon_month_categories" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "icon_month_categories_created_at_idx" ON "icon_month_categories" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_details_language_order_idx" ON "whats_ap_chennai_details_language" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_details_language_parent_idx" ON "whats_ap_chennai_details_language" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_details_event_dates_order_idx" ON "whats_ap_chennai_details_event_dates" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_details_event_dates_parent_id_idx" ON "whats_ap_chennai_details_event_dates" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_populated_authors_order_idx" ON "whats_ap_chennai_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_populated_authors_parent_id_idx" ON "whats_ap_chennai_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_hero_image_idx" ON "whats_ap_chennai" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_featured_image_idx" ON "whats_ap_chennai" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_mobile_image_idx" ON "whats_ap_chennai" USING btree ("mobile_image_id");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_details_details_location_idx" ON "whats_ap_chennai" USING btree ("details_location_id");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_meta_meta_image_idx" ON "whats_ap_chennai" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_slug_idx" ON "whats_ap_chennai" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_updated_at_idx" ON "whats_ap_chennai" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_created_at_idx" ON "whats_ap_chennai" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai__status_idx" ON "whats_ap_chennai" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_rels_order_idx" ON "whats_ap_chennai_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_rels_parent_idx" ON "whats_ap_chennai_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_rels_path_idx" ON "whats_ap_chennai_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "whats_ap_chennai_rels_users_id_idx" ON "whats_ap_chennai_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_version_details_language_order_idx" ON "_whats_ap_chennai_v_version_details_language" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_version_details_language_parent_idx" ON "_whats_ap_chennai_v_version_details_language" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_version_details_event_dates_order_idx" ON "_whats_ap_chennai_v_version_details_event_dates" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_version_details_event_dates_parent_id_idx" ON "_whats_ap_chennai_v_version_details_event_dates" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_version_populated_authors_order_idx" ON "_whats_ap_chennai_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_version_populated_authors_parent_id_idx" ON "_whats_ap_chennai_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_parent_idx" ON "_whats_ap_chennai_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_version_version_hero_image_idx" ON "_whats_ap_chennai_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_version_version_featured_image_idx" ON "_whats_ap_chennai_v" USING btree ("version_featured_image_id");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_version_version_mobile_image_idx" ON "_whats_ap_chennai_v" USING btree ("version_mobile_image_id");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_version_details_version_details_location_idx" ON "_whats_ap_chennai_v" USING btree ("version_details_location_id");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_version_meta_version_meta_image_idx" ON "_whats_ap_chennai_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_version_version_slug_idx" ON "_whats_ap_chennai_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_version_version_updated_at_idx" ON "_whats_ap_chennai_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_version_version_created_at_idx" ON "_whats_ap_chennai_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_version_version__status_idx" ON "_whats_ap_chennai_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_created_at_idx" ON "_whats_ap_chennai_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_updated_at_idx" ON "_whats_ap_chennai_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_latest_idx" ON "_whats_ap_chennai_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_autosave_idx" ON "_whats_ap_chennai_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_rels_order_idx" ON "_whats_ap_chennai_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_rels_parent_idx" ON "_whats_ap_chennai_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_rels_path_idx" ON "_whats_ap_chennai_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_whats_ap_chennai_v_rels_users_id_idx" ON "_whats_ap_chennai_v_rels" USING btree ("users_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "whatsapp_chennai_locations_value_idx" ON "whatsapp_chennai_locations" USING btree ("value");
  CREATE INDEX IF NOT EXISTS "whatsapp_chennai_locations_updated_at_idx" ON "whatsapp_chennai_locations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "whatsapp_chennai_locations_created_at_idx" ON "whatsapp_chennai_locations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "golu_submissions_golu_photographs_order_idx" ON "golu_submissions_golu_photographs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "golu_submissions_golu_photographs_parent_id_idx" ON "golu_submissions_golu_photographs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "golu_submissions_golu_photographs_image_idx" ON "golu_submissions_golu_photographs" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "golu_submissions_super_chennai_corner_photographs_order_idx" ON "golu_submissions_super_chennai_corner_photographs" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "golu_submissions_super_chennai_corner_photographs_parent_id_idx" ON "golu_submissions_super_chennai_corner_photographs" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "golu_submissions_super_chennai_corner_photographs_image_idx" ON "golu_submissions_super_chennai_corner_photographs" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "golu_submissions_action_history_order_idx" ON "golu_submissions_action_history" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "golu_submissions_action_history_parent_id_idx" ON "golu_submissions_action_history" USING btree ("_parent_id");
  CREATE UNIQUE INDEX IF NOT EXISTS "golu_submissions_participant_idx" ON "golu_submissions" USING btree ("participant_id");
  CREATE INDEX IF NOT EXISTS "golu_submissions_golu_video_idx" ON "golu_submissions" USING btree ("golu_video_id");
  CREATE INDEX IF NOT EXISTS "golu_submissions_updated_at_idx" ON "golu_submissions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "golu_submissions_created_at_idx" ON "golu_submissions" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "golu_users_mobile_number_idx" ON "golu_users" USING btree ("mobile_number");
  CREATE INDEX IF NOT EXISTS "golu_users_submission_idx" ON "golu_users" USING btree ("submission_id");
  CREATE INDEX IF NOT EXISTS "golu_users_updated_at_idx" ON "golu_users" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "golu_users_created_at_idx" ON "golu_users" USING btree ("created_at");
  CREATE UNIQUE INDEX IF NOT EXISTS "participants_mobile_number_idx" ON "participants" USING btree ("mobile_number");
  CREATE INDEX IF NOT EXISTS "participants_submission_idx" ON "participants" USING btree ("submission_id");
  CREATE INDEX IF NOT EXISTS "participants_updated_at_idx" ON "participants" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "participants_created_at_idx" ON "participants" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "golu_dashboard_view_updated_at_idx" ON "golu_dashboard_view" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "golu_dashboard_view_created_at_idx" ON "golu_dashboard_view" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "golu_contest_populated_authors_order_idx" ON "golu_contest_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "golu_contest_populated_authors_parent_id_idx" ON "golu_contest_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "golu_contest_hero_image_idx" ON "golu_contest" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "golu_contest_featured_image_idx" ON "golu_contest" USING btree ("featured_image_id");
  CREATE INDEX IF NOT EXISTS "golu_contest_mobile_image_idx" ON "golu_contest" USING btree ("mobile_image_id");
  CREATE INDEX IF NOT EXISTS "golu_contest_meta_meta_image_idx" ON "golu_contest" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "golu_contest_slug_idx" ON "golu_contest" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "golu_contest_updated_at_idx" ON "golu_contest" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "golu_contest_created_at_idx" ON "golu_contest" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "golu_contest__status_idx" ON "golu_contest" USING btree ("_status");
  CREATE INDEX IF NOT EXISTS "golu_contest_rels_order_idx" ON "golu_contest_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "golu_contest_rels_parent_idx" ON "golu_contest_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "golu_contest_rels_path_idx" ON "golu_contest_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "golu_contest_rels_users_id_idx" ON "golu_contest_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_version_populated_authors_order_idx" ON "_golu_contest_v_version_populated_authors" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_version_populated_authors_parent_id_idx" ON "_golu_contest_v_version_populated_authors" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_parent_idx" ON "_golu_contest_v" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_version_version_hero_image_idx" ON "_golu_contest_v" USING btree ("version_hero_image_id");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_version_version_featured_image_idx" ON "_golu_contest_v" USING btree ("version_featured_image_id");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_version_version_mobile_image_idx" ON "_golu_contest_v" USING btree ("version_mobile_image_id");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_version_meta_version_meta_image_idx" ON "_golu_contest_v" USING btree ("version_meta_image_id");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_version_version_slug_idx" ON "_golu_contest_v" USING btree ("version_slug");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_version_version_updated_at_idx" ON "_golu_contest_v" USING btree ("version_updated_at");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_version_version_created_at_idx" ON "_golu_contest_v" USING btree ("version_created_at");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_version_version__status_idx" ON "_golu_contest_v" USING btree ("version__status");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_created_at_idx" ON "_golu_contest_v" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_updated_at_idx" ON "_golu_contest_v" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_latest_idx" ON "_golu_contest_v" USING btree ("latest");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_autosave_idx" ON "_golu_contest_v" USING btree ("autosave");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_rels_order_idx" ON "_golu_contest_v_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_rels_parent_idx" ON "_golu_contest_v_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_rels_path_idx" ON "_golu_contest_v_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "_golu_contest_v_rels_users_id_idx" ON "_golu_contest_v_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "registration_settings_updated_at_idx" ON "registration_settings" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "registration_settings_created_at_idx" ON "registration_settings" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "event_form_fields_options_order_idx" ON "event_form_fields_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "event_form_fields_options_parent_id_idx" ON "event_form_fields_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "event_form_fields_updated_at_idx" ON "event_form_fields" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "event_form_fields_created_at_idx" ON "event_form_fields" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "event_registration_submissions_attachments_order_idx" ON "event_registration_submissions_attachments" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "event_registration_submissions_attachments_parent_id_idx" ON "event_registration_submissions_attachments" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "event_registration_submissions_attachments_file_idx" ON "event_registration_submissions_attachments" USING btree ("file_id");
  CREATE INDEX IF NOT EXISTS "event_registration_submissions_registration_settings_idx" ON "event_registration_submissions" USING btree ("registration_settings_id");
  CREATE INDEX IF NOT EXISTS "event_registration_submissions_updated_at_idx" ON "event_registration_submissions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "event_registration_submissions_created_at_idx" ON "event_registration_submissions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "redirects_from_idx" ON "redirects" USING btree ("from");
  CREATE INDEX IF NOT EXISTS "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "redirects_rels_order_idx" ON "redirects_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "redirects_rels_parent_idx" ON "redirects_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_path_idx" ON "redirects_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "redirects_rels_pages_id_idx" ON "redirects_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "redirects_rels_posts_id_idx" ON "redirects_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_order_idx" ON "forms_blocks_checkbox" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_parent_id_idx" ON "forms_blocks_checkbox" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_checkbox_path_idx" ON "forms_blocks_checkbox" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_order_idx" ON "forms_blocks_country" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_parent_id_idx" ON "forms_blocks_country" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_country_path_idx" ON "forms_blocks_country" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_order_idx" ON "forms_blocks_email" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_parent_id_idx" ON "forms_blocks_email" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_email_path_idx" ON "forms_blocks_email" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_order_idx" ON "forms_blocks_message" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_parent_id_idx" ON "forms_blocks_message" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_message_path_idx" ON "forms_blocks_message" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_order_idx" ON "forms_blocks_number" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_parent_id_idx" ON "forms_blocks_number" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_number_path_idx" ON "forms_blocks_number" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_order_idx" ON "forms_blocks_select_options" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_options_parent_id_idx" ON "forms_blocks_select_options" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_order_idx" ON "forms_blocks_select" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_parent_id_idx" ON "forms_blocks_select" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_select_path_idx" ON "forms_blocks_select" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_order_idx" ON "forms_blocks_state" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_parent_id_idx" ON "forms_blocks_state" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_state_path_idx" ON "forms_blocks_state" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_order_idx" ON "forms_blocks_text" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_parent_id_idx" ON "forms_blocks_text" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_text_path_idx" ON "forms_blocks_text" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_order_idx" ON "forms_blocks_textarea" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_parent_id_idx" ON "forms_blocks_textarea" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_blocks_textarea_path_idx" ON "forms_blocks_textarea" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "forms_emails_order_idx" ON "forms_emails" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "forms_emails_parent_id_idx" ON "forms_emails" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "forms_updated_at_idx" ON "forms" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "forms_created_at_idx" ON "forms" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_order_idx" ON "form_submissions_submission_data" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "form_submissions_submission_data_parent_id_idx" ON "form_submissions_submission_data" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_form_idx" ON "form_submissions" USING btree ("form_id");
  CREATE INDEX IF NOT EXISTS "form_submissions_updated_at_idx" ON "form_submissions" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "form_submissions_created_at_idx" ON "form_submissions" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "search_categories_order_idx" ON "search_categories" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "search_categories_parent_id_idx" ON "search_categories" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "search_slug_idx" ON "search" USING btree ("slug");
  CREATE INDEX IF NOT EXISTS "search_meta_meta_image_idx" ON "search" USING btree ("meta_image_id");
  CREATE INDEX IF NOT EXISTS "search_updated_at_idx" ON "search" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "search_created_at_idx" ON "search" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "search_rels_order_idx" ON "search_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "search_rels_parent_idx" ON "search_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "search_rels_path_idx" ON "search_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "search_rels_pages_id_idx" ON "search_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX IF NOT EXISTS "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX IF NOT EXISTS "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX IF NOT EXISTS "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX IF NOT EXISTS "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX IF NOT EXISTS "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX IF NOT EXISTS "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX IF NOT EXISTS "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("categories_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_visits_id_idx" ON "payload_locked_documents_rels" USING btree ("visits_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_work_id_idx" ON "payload_locked_documents_rels" USING btree ("work_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_investments_id_idx" ON "payload_locked_documents_rels" USING btree ("investments_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_live_id_idx" ON "payload_locked_documents_rels" USING btree ("live_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_volunteer_id_idx" ON "payload_locked_documents_rels" USING btree ("volunteer_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_innovate_id_idx" ON "payload_locked_documents_rels" USING btree ("innovate_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_visit_details_id_idx" ON "payload_locked_documents_rels" USING btree ("visit_details_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_volunteer_slides_id_idx" ON "payload_locked_documents_rels" USING btree ("volunteer_slides_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_social_reels_id_idx" ON "payload_locked_documents_rels" USING btree ("social_reels_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_investment_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("investment_categories_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_visit_groups_id_idx" ON "payload_locked_documents_rels" USING btree ("visit_groups_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_properties_id_idx" ON "payload_locked_documents_rels" USING btree ("properties_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_bhk_types_id_idx" ON "payload_locked_documents_rels" USING btree ("bhk_types_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_property_types_id_idx" ON "payload_locked_documents_rels" USING btree ("property_types_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_locations_id_idx" ON "payload_locked_documents_rels" USING btree ("locations_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_amenities_id_idx" ON "payload_locked_documents_rels" USING btree ("amenities_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_contact_messages_id_idx" ON "payload_locked_documents_rels" USING btree ("contact_messages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_propertylocations_id_idx" ON "payload_locked_documents_rels" USING btree ("propertylocations_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_events_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("events_categories_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_superchennai_contests_id_idx" ON "payload_locked_documents_rels" USING btree ("superchennai_contests_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_contest_id_idx" ON "payload_locked_documents_rels" USING btree ("contest_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_organizers_id_idx" ON "payload_locked_documents_rels" USING btree ("organizers_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_venues_id_idx" ON "payload_locked_documents_rels" USING btree ("venues_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_margazhi_contest_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("margazhi_contest_categories_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_sabha_foods_id_idx" ON "payload_locked_documents_rels" USING btree ("sabha_foods_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_articles_id_idx" ON "payload_locked_documents_rels" USING btree ("articles_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_ads_id_idx" ON "payload_locked_documents_rels" USING btree ("ads_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_article_types_id_idx" ON "payload_locked_documents_rels" USING btree ("article_types_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_articlelocations_id_idx" ON "payload_locked_documents_rels" USING btree ("articlelocations_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_articlecategory_id_idx" ON "payload_locked_documents_rels" USING btree ("articlecategory_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_languages_id_idx" ON "payload_locked_documents_rels" USING btree ("languages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_neighbourhood_id_idx" ON "payload_locked_documents_rels" USING btree ("neighbourhood_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_neighbourhood_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("neighbourhood_categories_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_neighbourhood_subcategories_id_idx" ON "payload_locked_documents_rels" USING btree ("neighbourhood_subcategories_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_neighbourhood_tags_id_idx" ON "payload_locked_documents_rels" USING btree ("neighbourhood_tags_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_chennai_neighbourhoodlocations_id_idx" ON "payload_locked_documents_rels" USING btree ("chennai_neighbourhoodlocations_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_trending_chennai_id_idx" ON "payload_locked_documents_rels" USING btree ("trending_chennai_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_trendinglocations_id_idx" ON "payload_locked_documents_rels" USING btree ("trendinglocations_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_trending_events_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("trending_events_categories_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_trending_languages_id_idx" ON "payload_locked_documents_rels" USING btree ("trending_languages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_cricket_score_id_idx" ON "payload_locked_documents_rels" USING btree ("cricket_score_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_ipl_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("ipl_categories_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_ipl_locations_id_idx" ON "payload_locked_documents_rels" USING btree ("ipl_locations_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_ipl_languages_id_idx" ON "payload_locked_documents_rels" USING btree ("ipl_languages_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_icon_of_month_id_idx" ON "payload_locked_documents_rels" USING btree ("icon_of_month_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_icon_month_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("icon_month_categories_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_whats_ap_chennai_id_idx" ON "payload_locked_documents_rels" USING btree ("whats_ap_chennai_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_whatsapp_chennai_locations_id_idx" ON "payload_locked_documents_rels" USING btree ("whatsapp_chennai_locations_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_golu_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("golu_submissions_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_golu_users_id_idx" ON "payload_locked_documents_rels" USING btree ("golu_users_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_participants_id_idx" ON "payload_locked_documents_rels" USING btree ("participants_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_golu_dashboard_view_id_idx" ON "payload_locked_documents_rels" USING btree ("golu_dashboard_view_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_golu_contest_id_idx" ON "payload_locked_documents_rels" USING btree ("golu_contest_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_registration_settings_id_idx" ON "payload_locked_documents_rels" USING btree ("registration_settings_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_event_form_fields_id_idx" ON "payload_locked_documents_rels" USING btree ("event_form_fields_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_event_registration_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("event_registration_submissions_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_forms_id_idx" ON "payload_locked_documents_rels" USING btree ("forms_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_form_submissions_id_idx" ON "payload_locked_documents_rels" USING btree ("form_submissions_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_search_id_idx" ON "payload_locked_documents_rels" USING btree ("search_id");
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_payload_jobs_id_idx" ON "payload_locked_documents_rels" USING btree ("payload_jobs_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX IF NOT EXISTS "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX IF NOT EXISTS "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX IF NOT EXISTS "header_nav_items_link_content_order_idx" ON "header_nav_items_link_content" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_nav_items_link_content_parent_id_idx" ON "header_nav_items_link_content" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_nav_items_link_gallery_order_idx" ON "header_nav_items_link_gallery" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_nav_items_link_gallery_parent_id_idx" ON "header_nav_items_link_gallery" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_nav_items_link_gallery_image_idx" ON "header_nav_items_link_gallery" USING btree ("image_id");
  CREATE INDEX IF NOT EXISTS "header_nav_items_order_idx" ON "header_nav_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_nav_items_parent_id_idx" ON "header_nav_items" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_nav_items_link_link_content_image_idx" ON "header_nav_items" USING btree ("link_content_image_id");
  CREATE INDEX IF NOT EXISTS "header_social_links_order_idx" ON "header_social_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_social_links_parent_id_idx" ON "header_social_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_social_links_icon_idx" ON "header_social_links" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "header_drawer_menu_order_idx" ON "header_drawer_menu" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "header_drawer_menu_parent_id_idx" ON "header_drawer_menu" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "header_logo_idx" ON "header" USING btree ("logo_id");
  CREATE INDEX IF NOT EXISTS "header_point_cast_point_cast_image_idx" ON "header" USING btree ("point_cast_image_id");
  CREATE INDEX IF NOT EXISTS "header_rels_order_idx" ON "header_rels" USING btree ("order");
  CREATE INDEX IF NOT EXISTS "header_rels_parent_idx" ON "header_rels" USING btree ("parent_id");
  CREATE INDEX IF NOT EXISTS "header_rels_path_idx" ON "header_rels" USING btree ("path");
  CREATE INDEX IF NOT EXISTS "header_rels_pages_id_idx" ON "header_rels" USING btree ("pages_id");
  CREATE INDEX IF NOT EXISTS "header_rels_posts_id_idx" ON "header_rels" USING btree ("posts_id");
  CREATE INDEX IF NOT EXISTS "footer_footer_sections_top_section_links_links_order_idx" ON "footer_footer_sections_top_section_links_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_footer_sections_top_section_links_links_parent_id_idx" ON "footer_footer_sections_top_section_links_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_footer_sections_top_section_links_order_idx" ON "footer_footer_sections_top_section_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_footer_sections_top_section_links_parent_id_idx" ON "footer_footer_sections_top_section_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_footer_sections_social_links_order_idx" ON "footer_footer_sections_social_links" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_footer_sections_social_links_parent_id_idx" ON "footer_footer_sections_social_links" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_footer_sections_social_links_icon_idx" ON "footer_footer_sections_social_links" USING btree ("icon_id");
  CREATE INDEX IF NOT EXISTS "footer_footer_sections_bottom_right_logos_order_idx" ON "footer_footer_sections_bottom_right_logos" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_footer_sections_bottom_right_logos_parent_id_idx" ON "footer_footer_sections_bottom_right_logos" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_footer_sections_bottom_right_logos_logo_image_idx" ON "footer_footer_sections_bottom_right_logos" USING btree ("logo_image_id");
  CREATE INDEX IF NOT EXISTS "footer_footer_sections_floating_action_widgets_order_idx" ON "footer_footer_sections_floating_action_widgets" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "footer_footer_sections_floating_action_widgets_parent_id_idx" ON "footer_footer_sections_floating_action_widgets" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "footer_footer_sections_floating_action_widgets_icon_image_idx" ON "footer_footer_sections_floating_action_widgets" USING btree ("icon_image_id");
  CREATE INDEX IF NOT EXISTS "footer_footer_sections_footer_sections_partners_logo_idx" ON "footer" USING btree ("footer_sections_partners_logo_id");
  CREATE INDEX IF NOT EXISTS "footer_footer_sections_footer_sections_main_footer_logo_idx" ON "footer" USING btree ("footer_sections_main_footer_logo_id");
  CREATE INDEX IF NOT EXISTS "footer_footer_sections_footer_sections_design_by_logo_idx" ON "footer" USING btree ("footer_sections_design_by_logo_id");
  CREATE INDEX IF NOT EXISTS "icon_of_month_landing_page_desktop_image_idx" ON "icon_of_month_landing_page" USING btree ("desktop_image_id");
  CREATE INDEX IF NOT EXISTS "icon_of_month_landing_page_mobile_image_idx" ON "icon_of_month_landing_page" USING btree ("mobile_image_id");
  CREATE INDEX IF NOT EXISTS "articles_landing_page_desktop_image_idx" ON "articles_landing_page" USING btree ("desktop_image_id");
  CREATE INDEX IF NOT EXISTS "articles_landing_page_mobile_image_idx" ON "articles_landing_page" USING btree ("mobile_image_id");
  CREATE INDEX IF NOT EXISTS "golu_contest_settings_hero_image_idx" ON "golu_contest_settings" USING btree ("hero_image_id");
  CREATE INDEX IF NOT EXISTS "golu_landing_page_desktop_image_idx" ON "golu_landing_page" USING btree ("desktop_image_id");
  CREATE INDEX IF NOT EXISTS "golu_landing_page_mobile_image_idx" ON "golu_landing_page" USING btree ("mobile_image_id");
  CREATE INDEX IF NOT EXISTS "golu_landing_page_meta_meta_image_idx" ON "golu_landing_page" USING btree ("meta_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_hero_links_link_content" CASCADE;
  DROP TABLE "pages_hero_links_link_gallery" CASCADE;
  DROP TABLE "pages_hero_links" CASCADE;
  DROP TABLE "pages_blocks_explore_cards" CASCADE;
  DROP TABLE "pages_blocks_explore" CASCADE;
  DROP TABLE "pages_blocks_fun_chennai_cards" CASCADE;
  DROP TABLE "pages_blocks_fun_chennai" CASCADE;
  DROP TABLE "pages_blocks_startup_chennai_images" CASCADE;
  DROP TABLE "pages_blocks_startup_chennai" CASCADE;
  DROP TABLE "pages_blocks_chennai_investments" CASCADE;
  DROP TABLE "pages_blocks_social_reel_slider" CASCADE;
  DROP TABLE "pages_blocks_became_a_volunteer" CASCADE;
  DROP TABLE "pages_blocks_events_calendar" CASCADE;
  DROP TABLE "pages_blocks_hero_slider_block_slides" CASCADE;
  DROP TABLE "pages_blocks_hero_slider_block" CASCADE;
  DROP TABLE "pages_blocks_visitcategory_items" CASCADE;
  DROP TABLE "pages_blocks_visitcategory" CASCADE;
  DROP TABLE "pages_blocks_zig_zag_content_sections" CASCADE;
  DROP TABLE "pages_blocks_zig_zag_content" CASCADE;
  DROP TABLE "pages_blocks_volunteer_became_section" CASCADE;
  DROP TABLE "pages_blocks_main_page_banner" CASCADE;
  DROP TABLE "pages_blocks_intro_text_block" CASCADE;
  DROP TABLE "pages_blocks_global_search_filters_options" CASCADE;
  DROP TABLE "pages_blocks_global_search_filters" CASCADE;
  DROP TABLE "pages_blocks_global_search" CASCADE;
  DROP TABLE "pages_blocks_form_popup" CASCADE;
  DROP TABLE "pages_blocks_infography_food_items" CASCADE;
  DROP TABLE "pages_blocks_infography" CASCADE;
  DROP TABLE "pages_blocks_two_column_feature_block" CASCADE;
  DROP TABLE "pages_blocks_utilities_tabs" CASCADE;
  DROP TABLE "pages_blocks_utilities" CASCADE;
  DROP TABLE "pages_blocks_content_zone_carousel_cards" CASCADE;
  DROP TABLE "pages_blocks_content_zone_carousel" CASCADE;
  DROP TABLE "pages_blocks_allevents" CASCADE;
  DROP TABLE "pages_blocks_live_intror_section" CASCADE;
  DROP TABLE "pages_blocks_chennai_life_essentials_essentials" CASCADE;
  DROP TABLE "pages_blocks_chennai_life_essentials" CASCADE;
  DROP TABLE "pages_blocks_investment_category_list_items" CASCADE;
  DROP TABLE "pages_blocks_investment_category_list" CASCADE;
  DROP TABLE "pages_blocks_innovate_slider" CASCADE;
  DROP TABLE "pages_blocks_text_hover_image_section_items" CASCADE;
  DROP TABLE "pages_blocks_text_hover_image_section" CASCADE;
  DROP TABLE "pages_blocks_trending_chennai_slider" CASCADE;
  DROP TABLE "pages_blocks_second_section_first_column" CASCADE;
  DROP TABLE "pages_blocks_second_section_second_column" CASCADE;
  DROP TABLE "pages_blocks_second_section" CASCADE;
  DROP TABLE "pages_blocks_popup_banner" CASCADE;
  DROP TABLE "pages_blocks_cricket_score_block_points_table" CASCADE;
  DROP TABLE "pages_blocks_cricket_score_block" CASCADE;
  DROP TABLE "pages_blocks_conclave_super_chennai_block_meta_items" CASCADE;
  DROP TABLE "pages_blocks_conclave_super_chennai_block" CASCADE;
  DROP TABLE "pages_blocks_conclave_about_block_paragraphs" CASCADE;
  DROP TABLE "pages_blocks_conclave_about_block" CASCADE;
  DROP TABLE "pages_blocks_conclave_agenda_block_agenda_items_speakers" CASCADE;
  DROP TABLE "pages_blocks_conclave_agenda_block_agenda_items" CASCADE;
  DROP TABLE "pages_blocks_conclave_agenda_block" CASCADE;
  DROP TABLE "pages_blocks_conclave_speakers_block_speakers" CASCADE;
  DROP TABLE "pages_blocks_conclave_speakers_block" CASCADE;
  DROP TABLE "pages_blocks_conclave_five_pillars_block_pillars_paragraphs" CASCADE;
  DROP TABLE "pages_blocks_conclave_five_pillars_block_pillars" CASCADE;
  DROP TABLE "pages_blocks_conclave_five_pillars_block" CASCADE;
  DROP TABLE "pages_blocks_conclave_cta_block" CASCADE;
  DROP TABLE "pages_blocks_conclave_partners_block_partners" CASCADE;
  DROP TABLE "pages_blocks_conclave_partners_block" CASCADE;
  DROP TABLE "pages_blocks_conclave_gallery_block_gallery_items" CASCADE;
  DROP TABLE "pages_blocks_conclave_gallery_block" CASCADE;
  DROP TABLE "pages_blocks_inner_page_hero_banner_block_breadcrumbs" CASCADE;
  DROP TABLE "pages_blocks_inner_page_hero_banner_block" CASCADE;
  DROP TABLE "pages_blocks_faq_section_block_faq_list" CASCADE;
  DROP TABLE "pages_blocks_faq_section_block" CASCADE;
  DROP TABLE "pages_blocks_about_intro_block_paragraphs" CASCADE;
  DROP TABLE "pages_blocks_about_intro_block" CASCADE;
  DROP TABLE "wsc_cols" CASCADE;
  DROP TABLE "pages_blocks_about_welcome_super_chennai_block_new" CASCADE;
  DROP TABLE "vis_mis_c" CASCADE;
  DROP TABLE "pages_blocks_vision_mission_block" CASCADE;
  DROP TABLE "fnd_pts" CASCADE;
  DROP TABLE "pages_blocks_about_foundations_block" CASCADE;
  DROP TABLE "pages_blocks_about_namma_chennai_block" CASCADE;
  DROP TABLE "wc_tabs" CASCADE;
  DROP TABLE "pages_blocks_about_why_chennai_block" CASCADE;
  DROP TABLE "t_pts" CASCADE;
  DROP TABLE "t_info_secs" CASCADE;
  DROP TABLE "pages_blocks_invest_page_border_section" CASCADE;
  DROP TABLE "ut_tabs" CASCADE;
  DROP TABLE "pages_blocks_invest_page_tab_block" CASCADE;
  DROP TABLE "inv_slides" CASCADE;
  DROP TABLE "pages_blocks_invest_page_slider_block" CASCADE;
  DROP TABLE "inn_slides" CASCADE;
  DROP TABLE "pages_blocks_innovate_page_slider_block" CASCADE;
  DROP TABLE "info_items" CASCADE;
  DROP TABLE "pages_blocks_innovate_info_section_block" CASCADE;
  DROP TABLE "iwc_li" CASCADE;
  DROP TABLE "iwc_cb" CASCADE;
  DROP TABLE "pages_blocks_imagewith_content" CASCADE;
  DROP TABLE "tp_p" CASCADE;
  DROP TABLE "tp_bp" CASCADE;
  DROP TABLE "tp_cards" CASCADE;
  DROP TABLE "pages_blocks_image_without_content_block" CASCADE;
  DROP TABLE "ev_h" CASCADE;
  DROP TABLE "ev_c" CASCADE;
  DROP TABLE "ev_r" CASCADE;
  DROP TABLE "pages_blocks_table_section_block" CASCADE;
  DROP TABLE "in_sld_c" CASCADE;
  DROP TABLE "pages_blocks_inner_page_slider_block" CASCADE;
  DROP TABLE "pages_blocks_gallery_slider_with_popup_block" CASCADE;
  DROP TABLE "l_img_r_sec" CASCADE;
  DROP TABLE "bs_items" CASCADE;
  DROP TABLE "bs_sec" CASCADE;
  DROP TABLE "pages_blocks_benefit_sections_block" CASCADE;
  DROP TABLE "wi_paras" CASCADE;
  DROP TABLE "pages_blocks_intro_pink_text_with_content_block" CASCADE;
  DROP TABLE "vils_p" CASCADE;
  DROP TABLE "vils_t" CASCADE;
  DROP TABLE "vils_s" CASCADE;
  DROP TABLE "vils_b" CASCADE;
  DROP TABLE "nc_locs" CASCADE;
  DROP TABLE "nc_plcs" CASCADE;
  DROP TABLE "nc_data" CASCADE;
  DROP TABLE "pages_blocks_work_network_section_block" CASCADE;
  DROP TABLE "wpis_bp" CASCADE;
  DROP TABLE "wpis_p" CASCADE;
  DROP TABLE "wpis_s" CASCADE;
  DROP TABLE "wpis_b" CASCADE;
  DROP TABLE "hch_loc" CASCADE;
  DROP TABLE "hch_plc" CASCADE;
  DROP TABLE "hch_cat" CASCADE;
  DROP TABLE "pages_blocks_health_care_hospitals_block" CASCADE;
  DROP TABLE "cl_tpts" CASCADE;
  DROP TABLE "cl_tnt" CASCADE;
  DROP TABLE "cl_img" CASCADE;
  DROP TABLE "cl_dpts" CASCADE;
  DROP TABLE "cl_dtl" CASCADE;
  DROP TABLE "clb" CASCADE;
  DROP TABLE "ttd_pts" CASCADE;
  DROP TABLE "ttd_tnt" CASCADE;
  DROP TABLE "ttd_sec" CASCADE;
  DROP TABLE "ttd_blk" CASCADE;
  DROP TABLE "cn_nbh" CASCADE;
  DROP TABLE "cn_sec" CASCADE;
  DROP TABLE "cnb" CASCADE;
  DROP TABLE "qol_sec" CASCADE;
  DROP TABLE "qol_blk" CASCADE;
  DROP TABLE "vwl" CASCADE;
  DROP TABLE "vwp" CASCADE;
  DROP TABLE "vwt" CASCADE;
  DROP TABLE "vws" CASCADE;
  DROP TABLE "vw_block" CASCADE;
  DROP TABLE "cnt_add" CASCADE;
  DROP TABLE "cnt_blk" CASCADE;
  DROP TABLE "cn_tabs" CASCADE;
  DROP TABLE "cn_asgn_tabs" CASCADE;
  DROP TABLE "cn_feats" CASCADE;
  DROP TABLE "cn_svcs" CASCADE;
  DROP TABLE "cn_apps" CASCADE;
  DROP TABLE "cn_apps_blk" CASCADE;
  DROP TABLE "loc_arr" CASCADE;
  DROP TABLE "plc_arr" CASCADE;
  DROP TABLE "cat_arr" CASCADE;
  DROP TABLE "reg_arr" CASCADE;
  DROP TABLE "plc_sec_blk" CASCADE;
  DROP TABLE "pages_blocks_image_title_block" CASCADE;
  DROP TABLE "pages_blocks_info_section_block_points" CASCADE;
  DROP TABLE "pages_blocks_info_section_block" CASCADE;
  DROP TABLE "pages_blocks_table_block_headers" CASCADE;
  DROP TABLE "pages_blocks_table_block_rows_cells" CASCADE;
  DROP TABLE "pages_blocks_table_block_rows" CASCADE;
  DROP TABLE "pages_blocks_table_block" CASCADE;
  DROP TABLE "pages_blocks_category_block_items_locations" CASCADE;
  DROP TABLE "pages_blocks_category_block_items" CASCADE;
  DROP TABLE "pages_blocks_category_block" CASCADE;
  DROP TABLE "pages_blocks_llp_block_main_tabs_regions" CASCADE;
  DROP TABLE "pages_blocks_llp_block_main_tabs" CASCADE;
  DROP TABLE "pages_blocks_llp_block" CASCADE;
  DROP TABLE "cards" CASCADE;
  DROP TABLE "cats" CASCADE;
  DROP TABLE "chenz_inv_2026" CASCADE;
  DROP TABLE "ev_lst_2026_events_cards2026" CASCADE;
  DROP TABLE "ev_lst_2026" CASCADE;
  DROP TABLE "infra_boom_2026" CASCADE;
  DROP TABLE "pages_blocks_manifesto_section_block_slider_images" CASCADE;
  DROP TABLE "pages_blocks_manifesto_section_block" CASCADE;
  DROP TABLE "tvc_2026_tvc_cards" CASCADE;
  DROP TABLE "tvc_2026" CASCADE;
  DROP TABLE "media_coverage_main_page_news_article" CASCADE;
  DROP TABLE "media_coverage_main_page_news_photos" CASCADE;
  DROP TABLE "media_coverage_main_page_youtube_channel" CASCADE;
  DROP TABLE "media_coverage_main_page" CASCADE;
  DROP TABLE "pages_blocks_metro_madras_block_paragraphs" CASCADE;
  DROP TABLE "pages_blocks_metro_madras_block_features" CASCADE;
  DROP TABLE "pages_blocks_metro_madras_block" CASCADE;
  DROP TABLE "pages_blocks_metro_the_details_block_details" CASCADE;
  DROP TABLE "pages_blocks_metro_the_details_block" CASCADE;
  DROP TABLE "pages_blocks_metro_experience_block_highlights" CASCADE;
  DROP TABLE "pages_blocks_metro_experience_block" CASCADE;
  DROP TABLE "pages_blocks_metro_guidelines_block_guidelines" CASCADE;
  DROP TABLE "pages_blocks_metro_guidelines_block" CASCADE;
  DROP TABLE "pages_blocks_metro_registration_block" CASCADE;
  DROP TABLE "kf_hero_block" CASCADE;
  DROP TABLE "pages_blocks_kite_festival_about" CASCADE;
  DROP TABLE "pages_blocks_kite_festival_highlights_highlights_list" CASCADE;
  DROP TABLE "pages_blocks_kite_festival_highlights" CASCADE;
  DROP TABLE "kf_new_faqs_list" CASCADE;
  DROP TABLE "kf_new_faq_block" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_pages_v_version_hero_links_link_content" CASCADE;
  DROP TABLE "_pages_v_version_hero_links_link_gallery" CASCADE;
  DROP TABLE "_pages_v_version_hero_links" CASCADE;
  DROP TABLE "_pages_v_blocks_explore_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_explore" CASCADE;
  DROP TABLE "_pages_v_blocks_fun_chennai_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_fun_chennai" CASCADE;
  DROP TABLE "_pages_v_blocks_startup_chennai_images" CASCADE;
  DROP TABLE "_pages_v_blocks_startup_chennai" CASCADE;
  DROP TABLE "_pages_v_blocks_chennai_investments" CASCADE;
  DROP TABLE "_pages_v_blocks_social_reel_slider" CASCADE;
  DROP TABLE "_pages_v_blocks_became_a_volunteer" CASCADE;
  DROP TABLE "_pages_v_blocks_events_calendar" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_slider_block_slides" CASCADE;
  DROP TABLE "_pages_v_blocks_hero_slider_block" CASCADE;
  DROP TABLE "_pages_v_blocks_visitcategory_items" CASCADE;
  DROP TABLE "_pages_v_blocks_visitcategory" CASCADE;
  DROP TABLE "_pages_v_blocks_zig_zag_content_sections" CASCADE;
  DROP TABLE "_pages_v_blocks_zig_zag_content" CASCADE;
  DROP TABLE "_pages_v_blocks_volunteer_became_section" CASCADE;
  DROP TABLE "_pages_v_blocks_main_page_banner" CASCADE;
  DROP TABLE "_pages_v_blocks_intro_text_block" CASCADE;
  DROP TABLE "_pages_v_blocks_global_search_filters_options" CASCADE;
  DROP TABLE "_pages_v_blocks_global_search_filters" CASCADE;
  DROP TABLE "_pages_v_blocks_global_search" CASCADE;
  DROP TABLE "_pages_v_blocks_form_popup" CASCADE;
  DROP TABLE "_pages_v_blocks_infography_food_items" CASCADE;
  DROP TABLE "_pages_v_blocks_infography" CASCADE;
  DROP TABLE "_pages_v_blocks_two_column_feature_block" CASCADE;
  DROP TABLE "_pages_v_blocks_utilities_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_utilities" CASCADE;
  DROP TABLE "_pages_v_blocks_content_zone_carousel_cards" CASCADE;
  DROP TABLE "_pages_v_blocks_content_zone_carousel" CASCADE;
  DROP TABLE "_pages_v_blocks_allevents" CASCADE;
  DROP TABLE "_pages_v_blocks_live_intror_section" CASCADE;
  DROP TABLE "_pages_v_blocks_chennai_life_essentials_essentials" CASCADE;
  DROP TABLE "_pages_v_blocks_chennai_life_essentials" CASCADE;
  DROP TABLE "_pages_v_blocks_investment_category_list_items" CASCADE;
  DROP TABLE "_pages_v_blocks_investment_category_list" CASCADE;
  DROP TABLE "_pages_v_blocks_innovate_slider" CASCADE;
  DROP TABLE "_pages_v_blocks_text_hover_image_section_items" CASCADE;
  DROP TABLE "_pages_v_blocks_text_hover_image_section" CASCADE;
  DROP TABLE "_pages_v_blocks_trending_chennai_slider" CASCADE;
  DROP TABLE "_pages_v_blocks_second_section_first_column" CASCADE;
  DROP TABLE "_pages_v_blocks_second_section_second_column" CASCADE;
  DROP TABLE "_pages_v_blocks_second_section" CASCADE;
  DROP TABLE "_pages_v_blocks_popup_banner" CASCADE;
  DROP TABLE "_pages_v_blocks_cricket_score_block_points_table" CASCADE;
  DROP TABLE "_pages_v_blocks_cricket_score_block" CASCADE;
  DROP TABLE "_pages_v_blocks_conclave_super_chennai_block_meta_items" CASCADE;
  DROP TABLE "_pages_v_blocks_conclave_super_chennai_block" CASCADE;
  DROP TABLE "_pages_v_blocks_conclave_about_block_paragraphs" CASCADE;
  DROP TABLE "_pages_v_blocks_conclave_about_block" CASCADE;
  DROP TABLE "_pages_v_blocks_conclave_agenda_block_agenda_items_speakers" CASCADE;
  DROP TABLE "_pages_v_blocks_conclave_agenda_block_agenda_items" CASCADE;
  DROP TABLE "_pages_v_blocks_conclave_agenda_block" CASCADE;
  DROP TABLE "_pages_v_blocks_conclave_speakers_block_speakers" CASCADE;
  DROP TABLE "_pages_v_blocks_conclave_speakers_block" CASCADE;
  DROP TABLE "_pages_v_blocks_conclave_five_pillars_block_pillars_paragraphs" CASCADE;
  DROP TABLE "_pages_v_blocks_conclave_five_pillars_block_pillars" CASCADE;
  DROP TABLE "_pages_v_blocks_conclave_five_pillars_block" CASCADE;
  DROP TABLE "_pages_v_blocks_conclave_cta_block" CASCADE;
  DROP TABLE "_pages_v_blocks_conclave_partners_block_partners" CASCADE;
  DROP TABLE "_pages_v_blocks_conclave_partners_block" CASCADE;
  DROP TABLE "_pages_v_blocks_conclave_gallery_block_gallery_items" CASCADE;
  DROP TABLE "_pages_v_blocks_conclave_gallery_block" CASCADE;
  DROP TABLE "_pages_v_blocks_inner_page_hero_banner_block_breadcrumbs" CASCADE;
  DROP TABLE "_pages_v_blocks_inner_page_hero_banner_block" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_section_block_faq_list" CASCADE;
  DROP TABLE "_pages_v_blocks_faq_section_block" CASCADE;
  DROP TABLE "_pages_v_blocks_about_intro_block_paragraphs" CASCADE;
  DROP TABLE "_pages_v_blocks_about_intro_block" CASCADE;
  DROP TABLE "_wsc_cols_v" CASCADE;
  DROP TABLE "_pages_v_blocks_about_welcome_super_chennai_block_new" CASCADE;
  DROP TABLE "_vis_mis_c_v" CASCADE;
  DROP TABLE "_pages_v_blocks_vision_mission_block" CASCADE;
  DROP TABLE "_fnd_pts_v" CASCADE;
  DROP TABLE "_pages_v_blocks_about_foundations_block" CASCADE;
  DROP TABLE "_pages_v_blocks_about_namma_chennai_block" CASCADE;
  DROP TABLE "_wc_tabs_v" CASCADE;
  DROP TABLE "_pages_v_blocks_about_why_chennai_block" CASCADE;
  DROP TABLE "_t_pts_v" CASCADE;
  DROP TABLE "_t_info_secs_v" CASCADE;
  DROP TABLE "_pages_v_blocks_invest_page_border_section" CASCADE;
  DROP TABLE "_ut_tabs_v" CASCADE;
  DROP TABLE "_pages_v_blocks_invest_page_tab_block" CASCADE;
  DROP TABLE "_inv_slides_v" CASCADE;
  DROP TABLE "_pages_v_blocks_invest_page_slider_block" CASCADE;
  DROP TABLE "_inn_slides_v" CASCADE;
  DROP TABLE "_pages_v_blocks_innovate_page_slider_block" CASCADE;
  DROP TABLE "_info_items_v" CASCADE;
  DROP TABLE "_pages_v_blocks_innovate_info_section_block" CASCADE;
  DROP TABLE "_iwc_li_v" CASCADE;
  DROP TABLE "_iwc_cb_v" CASCADE;
  DROP TABLE "_pages_v_blocks_imagewith_content" CASCADE;
  DROP TABLE "_tp_p_v" CASCADE;
  DROP TABLE "_tp_bp_v" CASCADE;
  DROP TABLE "_tp_cards_v" CASCADE;
  DROP TABLE "_pages_v_blocks_image_without_content_block" CASCADE;
  DROP TABLE "_ev_h_v" CASCADE;
  DROP TABLE "_ev_c_v" CASCADE;
  DROP TABLE "_ev_r_v" CASCADE;
  DROP TABLE "_pages_v_blocks_table_section_block" CASCADE;
  DROP TABLE "_in_sld_c_v" CASCADE;
  DROP TABLE "_pages_v_blocks_inner_page_slider_block" CASCADE;
  DROP TABLE "_pages_v_blocks_gallery_slider_with_popup_block" CASCADE;
  DROP TABLE "_l_img_r_sec_v" CASCADE;
  DROP TABLE "_bs_items_v" CASCADE;
  DROP TABLE "_bs_sec_v" CASCADE;
  DROP TABLE "_pages_v_blocks_benefit_sections_block" CASCADE;
  DROP TABLE "_wi_paras_v" CASCADE;
  DROP TABLE "_pages_v_blocks_intro_pink_text_with_content_block" CASCADE;
  DROP TABLE "_vils_p_v" CASCADE;
  DROP TABLE "_vils_t_v" CASCADE;
  DROP TABLE "_vils_s_v" CASCADE;
  DROP TABLE "_vils_b_v" CASCADE;
  DROP TABLE "_nc_locs_v" CASCADE;
  DROP TABLE "_nc_plcs_v" CASCADE;
  DROP TABLE "_nc_data_v" CASCADE;
  DROP TABLE "_pages_v_blocks_work_network_section_block" CASCADE;
  DROP TABLE "_wpis_bp_v" CASCADE;
  DROP TABLE "_wpis_p_v" CASCADE;
  DROP TABLE "_wpis_s_v" CASCADE;
  DROP TABLE "_wpis_b_v" CASCADE;
  DROP TABLE "_hch_loc_v" CASCADE;
  DROP TABLE "_hch_plc_v" CASCADE;
  DROP TABLE "_hch_cat_v" CASCADE;
  DROP TABLE "_pages_v_blocks_health_care_hospitals_block" CASCADE;
  DROP TABLE "_cl_tpts_v" CASCADE;
  DROP TABLE "_cl_tnt_v" CASCADE;
  DROP TABLE "_cl_img_v" CASCADE;
  DROP TABLE "_cl_dpts_v" CASCADE;
  DROP TABLE "_cl_dtl_v" CASCADE;
  DROP TABLE "_clb_v" CASCADE;
  DROP TABLE "_ttd_pts_v" CASCADE;
  DROP TABLE "_ttd_tnt_v" CASCADE;
  DROP TABLE "_ttd_sec_v" CASCADE;
  DROP TABLE "_ttd_blk_v" CASCADE;
  DROP TABLE "_cn_nbh_v" CASCADE;
  DROP TABLE "_cn_sec_v" CASCADE;
  DROP TABLE "_cnb_v" CASCADE;
  DROP TABLE "_qol_sec_v" CASCADE;
  DROP TABLE "_qol_blk_v" CASCADE;
  DROP TABLE "_vwl_v" CASCADE;
  DROP TABLE "_vwp_v" CASCADE;
  DROP TABLE "_vwt_v" CASCADE;
  DROP TABLE "_vws_v" CASCADE;
  DROP TABLE "_vw_block_v" CASCADE;
  DROP TABLE "_cnt_add_v" CASCADE;
  DROP TABLE "_cnt_blk_v" CASCADE;
  DROP TABLE "_cn_tabs_v" CASCADE;
  DROP TABLE "_cn_asgn_tabs_v" CASCADE;
  DROP TABLE "_cn_feats_v" CASCADE;
  DROP TABLE "_cn_svcs_v" CASCADE;
  DROP TABLE "_cn_apps_v" CASCADE;
  DROP TABLE "_cn_apps_blk_v" CASCADE;
  DROP TABLE "_loc_arr_v" CASCADE;
  DROP TABLE "_plc_arr_v" CASCADE;
  DROP TABLE "_cat_arr_v" CASCADE;
  DROP TABLE "_reg_arr_v" CASCADE;
  DROP TABLE "_plc_sec_blk_v" CASCADE;
  DROP TABLE "_pages_v_blocks_image_title_block" CASCADE;
  DROP TABLE "_pages_v_blocks_info_section_block_points" CASCADE;
  DROP TABLE "_pages_v_blocks_info_section_block" CASCADE;
  DROP TABLE "_pages_v_blocks_table_block_headers" CASCADE;
  DROP TABLE "_pages_v_blocks_table_block_rows_cells" CASCADE;
  DROP TABLE "_pages_v_blocks_table_block_rows" CASCADE;
  DROP TABLE "_pages_v_blocks_table_block" CASCADE;
  DROP TABLE "_pages_v_blocks_category_block_items_locations" CASCADE;
  DROP TABLE "_pages_v_blocks_category_block_items" CASCADE;
  DROP TABLE "_pages_v_blocks_category_block" CASCADE;
  DROP TABLE "_pages_v_blocks_llp_block_main_tabs_regions" CASCADE;
  DROP TABLE "_pages_v_blocks_llp_block_main_tabs" CASCADE;
  DROP TABLE "_pages_v_blocks_llp_block" CASCADE;
  DROP TABLE "_cards_v" CASCADE;
  DROP TABLE "_cats_v" CASCADE;
  DROP TABLE "_chenz_inv_2026_v" CASCADE;
  DROP TABLE "_ev_lst_2026_v_events_cards2026" CASCADE;
  DROP TABLE "_ev_lst_2026_v" CASCADE;
  DROP TABLE "_infra_boom_2026_v" CASCADE;
  DROP TABLE "_pages_v_blocks_manifesto_section_block_slider_images" CASCADE;
  DROP TABLE "_pages_v_blocks_manifesto_section_block" CASCADE;
  DROP TABLE "_tvc_2026_v_tvc_cards" CASCADE;
  DROP TABLE "_tvc_2026_v" CASCADE;
  DROP TABLE "_media_coverage_main_page_v_news_article" CASCADE;
  DROP TABLE "_media_coverage_main_page_v_news_photos" CASCADE;
  DROP TABLE "_media_coverage_main_page_v_youtube_channel" CASCADE;
  DROP TABLE "_media_coverage_main_page_v" CASCADE;
  DROP TABLE "_pages_v_blocks_metro_madras_block_paragraphs" CASCADE;
  DROP TABLE "_pages_v_blocks_metro_madras_block_features" CASCADE;
  DROP TABLE "_pages_v_blocks_metro_madras_block" CASCADE;
  DROP TABLE "_pages_v_blocks_metro_the_details_block_details" CASCADE;
  DROP TABLE "_pages_v_blocks_metro_the_details_block" CASCADE;
  DROP TABLE "_pages_v_blocks_metro_experience_block_highlights" CASCADE;
  DROP TABLE "_pages_v_blocks_metro_experience_block" CASCADE;
  DROP TABLE "_pages_v_blocks_metro_guidelines_block_guidelines" CASCADE;
  DROP TABLE "_pages_v_blocks_metro_guidelines_block" CASCADE;
  DROP TABLE "_pages_v_blocks_metro_registration_block" CASCADE;
  DROP TABLE "_kf_hero_block_v" CASCADE;
  DROP TABLE "_pages_v_blocks_kite_festival_about" CASCADE;
  DROP TABLE "_pages_v_blocks_kite_festival_highlights_highlights_list" CASCADE;
  DROP TABLE "_pages_v_blocks_kite_festival_highlights" CASCADE;
  DROP TABLE "_kf_new_faqs_list_v" CASCADE;
  DROP TABLE "_kf_new_faq_block_v" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "posts_populated_authors" CASCADE;
  DROP TABLE "posts" CASCADE;
  DROP TABLE "posts_rels" CASCADE;
  DROP TABLE "_posts_v_version_populated_authors" CASCADE;
  DROP TABLE "_posts_v" CASCADE;
  DROP TABLE "_posts_v_rels" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "categories_breadcrumbs" CASCADE;
  DROP TABLE "categories" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "visits_populated_authors" CASCADE;
  DROP TABLE "visits" CASCADE;
  DROP TABLE "visits_rels" CASCADE;
  DROP TABLE "_visits_v_version_populated_authors" CASCADE;
  DROP TABLE "_visits_v" CASCADE;
  DROP TABLE "_visits_v_rels" CASCADE;
  DROP TABLE "work_populated_authors" CASCADE;
  DROP TABLE "work" CASCADE;
  DROP TABLE "work_rels" CASCADE;
  DROP TABLE "_work_v_version_populated_authors" CASCADE;
  DROP TABLE "_work_v" CASCADE;
  DROP TABLE "_work_v_rels" CASCADE;
  DROP TABLE "events_event_event_dates" CASCADE;
  DROP TABLE "events_event_details_language" CASCADE;
  DROP TABLE "events_populated_authors" CASCADE;
  DROP TABLE "events" CASCADE;
  DROP TABLE "events_rels" CASCADE;
  DROP TABLE "_events_v_version_event_event_dates" CASCADE;
  DROP TABLE "_events_v_version_event_details_language" CASCADE;
  DROP TABLE "_events_v_version_populated_authors" CASCADE;
  DROP TABLE "_events_v" CASCADE;
  DROP TABLE "_events_v_rels" CASCADE;
  DROP TABLE "investments_investments_investment_items" CASCADE;
  DROP TABLE "investments_investments" CASCADE;
  DROP TABLE "investments_populated_authors" CASCADE;
  DROP TABLE "investments" CASCADE;
  DROP TABLE "investments_rels" CASCADE;
  DROP TABLE "_investments_v_version_investments_investment_items" CASCADE;
  DROP TABLE "_investments_v_version_investments" CASCADE;
  DROP TABLE "_investments_v_version_populated_authors" CASCADE;
  DROP TABLE "_investments_v" CASCADE;
  DROP TABLE "_investments_v_rels" CASCADE;
  DROP TABLE "live_populated_authors" CASCADE;
  DROP TABLE "live" CASCADE;
  DROP TABLE "live_rels" CASCADE;
  DROP TABLE "_live_v_version_populated_authors" CASCADE;
  DROP TABLE "_live_v" CASCADE;
  DROP TABLE "_live_v_rels" CASCADE;
  DROP TABLE "volunteer_populated_authors" CASCADE;
  DROP TABLE "volunteer" CASCADE;
  DROP TABLE "volunteer_rels" CASCADE;
  DROP TABLE "_volunteer_v_version_populated_authors" CASCADE;
  DROP TABLE "_volunteer_v" CASCADE;
  DROP TABLE "_volunteer_v_rels" CASCADE;
  DROP TABLE "innovate_populated_authors" CASCADE;
  DROP TABLE "innovate" CASCADE;
  DROP TABLE "innovate_rels" CASCADE;
  DROP TABLE "_innovate_v_version_populated_authors" CASCADE;
  DROP TABLE "_innovate_v" CASCADE;
  DROP TABLE "_innovate_v_rels" CASCADE;
  DROP TABLE "visit_details_populated_authors" CASCADE;
  DROP TABLE "visit_details" CASCADE;
  DROP TABLE "visit_details_rels" CASCADE;
  DROP TABLE "_visit_details_v_version_populated_authors" CASCADE;
  DROP TABLE "_visit_details_v" CASCADE;
  DROP TABLE "_visit_details_v_rels" CASCADE;
  DROP TABLE "volunteer_slides_slides_faq" CASCADE;
  DROP TABLE "volunteer_slides_slides" CASCADE;
  DROP TABLE "volunteer_slides" CASCADE;
  DROP TABLE "social_reels_reels" CASCADE;
  DROP TABLE "social_reels" CASCADE;
  DROP TABLE "investment_categories_items" CASCADE;
  DROP TABLE "investment_categories" CASCADE;
  DROP TABLE "visit_groups_items" CASCADE;
  DROP TABLE "visit_groups" CASCADE;
  DROP TABLE "properties_images" CASCADE;
  DROP TABLE "properties_faq" CASCADE;
  DROP TABLE "properties_nearby" CASCADE;
  DROP TABLE "properties_floor_plans" CASCADE;
  DROP TABLE "properties_route_map" CASCADE;
  DROP TABLE "properties_green_features" CASCADE;
  DROP TABLE "properties_features" CASCADE;
  DROP TABLE "properties_more_amenities" CASCADE;
  DROP TABLE "properties_specifications" CASCADE;
  DROP TABLE "properties_rent_details_preferred_tenants" CASCADE;
  DROP TABLE "properties_populated_authors" CASCADE;
  DROP TABLE "properties" CASCADE;
  DROP TABLE "properties_rels" CASCADE;
  DROP TABLE "_properties_v_version_images" CASCADE;
  DROP TABLE "_properties_v_version_faq" CASCADE;
  DROP TABLE "_properties_v_version_nearby" CASCADE;
  DROP TABLE "_properties_v_version_floor_plans" CASCADE;
  DROP TABLE "_properties_v_version_route_map" CASCADE;
  DROP TABLE "_properties_v_version_green_features" CASCADE;
  DROP TABLE "_properties_v_version_features" CASCADE;
  DROP TABLE "_properties_v_version_more_amenities" CASCADE;
  DROP TABLE "_properties_v_version_specifications" CASCADE;
  DROP TABLE "_properties_v_version_rent_details_preferred_tenants" CASCADE;
  DROP TABLE "_properties_v_version_populated_authors" CASCADE;
  DROP TABLE "_properties_v" CASCADE;
  DROP TABLE "_properties_v_rels" CASCADE;
  DROP TABLE "bhk_types" CASCADE;
  DROP TABLE "property_types" CASCADE;
  DROP TABLE "locations" CASCADE;
  DROP TABLE "amenities" CASCADE;
  DROP TABLE "contact_messages" CASCADE;
  DROP TABLE "propertylocations" CASCADE;
  DROP TABLE "events_categories" CASCADE;
  DROP TABLE "superchennai_contests_populated_authors" CASCADE;
  DROP TABLE "superchennai_contests" CASCADE;
  DROP TABLE "superchennai_contests_rels" CASCADE;
  DROP TABLE "_superchennai_contests_v_version_populated_authors" CASCADE;
  DROP TABLE "_superchennai_contests_v" CASCADE;
  DROP TABLE "_superchennai_contests_v_rels" CASCADE;
  DROP TABLE "contest_populated_authors" CASCADE;
  DROP TABLE "contest" CASCADE;
  DROP TABLE "contest_rels" CASCADE;
  DROP TABLE "_contest_v_version_populated_authors" CASCADE;
  DROP TABLE "_contest_v" CASCADE;
  DROP TABLE "_contest_v_rels" CASCADE;
  DROP TABLE "organizers" CASCADE;
  DROP TABLE "venues" CASCADE;
  DROP TABLE "margazhi_contest_categories" CASCADE;
  DROP TABLE "sabha_foods" CASCADE;
  DROP TABLE "articles_populated_authors" CASCADE;
  DROP TABLE "articles" CASCADE;
  DROP TABLE "articles_rels" CASCADE;
  DROP TABLE "_articles_v_version_populated_authors" CASCADE;
  DROP TABLE "_articles_v" CASCADE;
  DROP TABLE "_articles_v_rels" CASCADE;
  DROP TABLE "ads_populated_authors" CASCADE;
  DROP TABLE "ads" CASCADE;
  DROP TABLE "ads_rels" CASCADE;
  DROP TABLE "_ads_v_version_populated_authors" CASCADE;
  DROP TABLE "_ads_v" CASCADE;
  DROP TABLE "_ads_v_rels" CASCADE;
  DROP TABLE "article_types" CASCADE;
  DROP TABLE "articlelocations" CASCADE;
  DROP TABLE "articlecategory" CASCADE;
  DROP TABLE "languages" CASCADE;
  DROP TABLE "neighbourhood_gallery" CASCADE;
  DROP TABLE "neighbourhood_branches" CASCADE;
  DROP TABLE "neighbourhood_documents" CASCADE;
  DROP TABLE "neighbourhood_business_hours" CASCADE;
  DROP TABLE "neighbourhood_service_options" CASCADE;
  DROP TABLE "neighbourhood_menu_items" CASCADE;
  DROP TABLE "neighbourhood_fuel_types" CASCADE;
  DROP TABLE "neighbourhood_amenities" CASCADE;
  DROP TABLE "neighbourhood_awards" CASCADE;
  DROP TABLE "neighbourhood_quick_access_highlights" CASCADE;
  DROP TABLE "neighbourhood_neighborhood_stats" CASCADE;
  DROP TABLE "neighbourhood_structured_data_faq_schema" CASCADE;
  DROP TABLE "neighbourhood_structured_data_event_schema" CASCADE;
  DROP TABLE "neighbourhood_populated_authors" CASCADE;
  DROP TABLE "neighbourhood" CASCADE;
  DROP TABLE "neighbourhood_rels" CASCADE;
  DROP TABLE "_neighbourhood_v_version_gallery" CASCADE;
  DROP TABLE "_neighbourhood_v_version_branches" CASCADE;
  DROP TABLE "_neighbourhood_v_version_documents" CASCADE;
  DROP TABLE "_neighbourhood_v_version_business_hours" CASCADE;
  DROP TABLE "_neighbourhood_v_version_service_options" CASCADE;
  DROP TABLE "_neighbourhood_v_version_menu_items" CASCADE;
  DROP TABLE "_neighbourhood_v_version_fuel_types" CASCADE;
  DROP TABLE "_neighbourhood_v_version_amenities" CASCADE;
  DROP TABLE "_neighbourhood_v_version_awards" CASCADE;
  DROP TABLE "_neighbourhood_v_version_quick_access_highlights" CASCADE;
  DROP TABLE "_neighbourhood_v_version_neighborhood_stats" CASCADE;
  DROP TABLE "_neighbourhood_v_version_structured_data_faq_schema" CASCADE;
  DROP TABLE "_neighbourhood_v_version_structured_data_event_schema" CASCADE;
  DROP TABLE "_neighbourhood_v_version_populated_authors" CASCADE;
  DROP TABLE "_neighbourhood_v" CASCADE;
  DROP TABLE "_neighbourhood_v_rels" CASCADE;
  DROP TABLE "neighbourhood_categories" CASCADE;
  DROP TABLE "neighbourhood_subcategories" CASCADE;
  DROP TABLE "neighbourhood_tags" CASCADE;
  DROP TABLE "chennai_neighbourhoodlocations_overview_points" CASCADE;
  DROP TABLE "chennai_neighbourhoodlocations_quick_access" CASCADE;
  DROP TABLE "chennai_neighbourhoodlocations_why_choose" CASCADE;
  DROP TABLE "chennai_neighbourhoodlocations_lifestyle_scores" CASCADE;
  DROP TABLE "chennai_neighbourhoodlocations_faq_section_faqs" CASCADE;
  DROP TABLE "chennai_neighbourhoodlocations" CASCADE;
  DROP TABLE "trending_chennai_trending_chennai_event_dates" CASCADE;
  DROP TABLE "trending_chennai_meta_seo_keywords" CASCADE;
  DROP TABLE "trending_chennai_populated_authors" CASCADE;
  DROP TABLE "trending_chennai" CASCADE;
  DROP TABLE "trending_chennai_rels" CASCADE;
  DROP TABLE "_trending_chennai_v_version_trending_chennai_event_dates" CASCADE;
  DROP TABLE "_trending_chennai_v_version_meta_seo_keywords" CASCADE;
  DROP TABLE "_trending_chennai_v_version_populated_authors" CASCADE;
  DROP TABLE "_trending_chennai_v" CASCADE;
  DROP TABLE "_trending_chennai_v_rels" CASCADE;
  DROP TABLE "trendinglocations" CASCADE;
  DROP TABLE "trending_events_categories" CASCADE;
  DROP TABLE "trending_languages" CASCADE;
  DROP TABLE "cricket_score_meta_seo_keywords" CASCADE;
  DROP TABLE "cricket_score_populated_authors" CASCADE;
  DROP TABLE "cricket_score" CASCADE;
  DROP TABLE "cricket_score_rels" CASCADE;
  DROP TABLE "_cricket_score_v_version_meta_seo_keywords" CASCADE;
  DROP TABLE "_cricket_score_v_version_populated_authors" CASCADE;
  DROP TABLE "_cricket_score_v" CASCADE;
  DROP TABLE "_cricket_score_v_rels" CASCADE;
  DROP TABLE "ipl_categories" CASCADE;
  DROP TABLE "ipl_locations" CASCADE;
  DROP TABLE "ipl_languages" CASCADE;
  DROP TABLE "icon_of_month_achievements" CASCADE;
  DROP TABLE "icon_of_month_populated_authors" CASCADE;
  DROP TABLE "icon_of_month" CASCADE;
  DROP TABLE "icon_of_month_rels" CASCADE;
  DROP TABLE "_icon_of_month_v_version_achievements" CASCADE;
  DROP TABLE "_icon_of_month_v_version_populated_authors" CASCADE;
  DROP TABLE "_icon_of_month_v" CASCADE;
  DROP TABLE "_icon_of_month_v_rels" CASCADE;
  DROP TABLE "icon_month_categories" CASCADE;
  DROP TABLE "whats_ap_chennai_details_language" CASCADE;
  DROP TABLE "whats_ap_chennai_details_event_dates" CASCADE;
  DROP TABLE "whats_ap_chennai_populated_authors" CASCADE;
  DROP TABLE "whats_ap_chennai" CASCADE;
  DROP TABLE "whats_ap_chennai_rels" CASCADE;
  DROP TABLE "_whats_ap_chennai_v_version_details_language" CASCADE;
  DROP TABLE "_whats_ap_chennai_v_version_details_event_dates" CASCADE;
  DROP TABLE "_whats_ap_chennai_v_version_populated_authors" CASCADE;
  DROP TABLE "_whats_ap_chennai_v" CASCADE;
  DROP TABLE "_whats_ap_chennai_v_rels" CASCADE;
  DROP TABLE "whatsapp_chennai_locations" CASCADE;
  DROP TABLE "golu_submissions_golu_photographs" CASCADE;
  DROP TABLE "golu_submissions_super_chennai_corner_photographs" CASCADE;
  DROP TABLE "golu_submissions_action_history" CASCADE;
  DROP TABLE "golu_submissions" CASCADE;
  DROP TABLE "golu_users" CASCADE;
  DROP TABLE "participants" CASCADE;
  DROP TABLE "golu_dashboard_view" CASCADE;
  DROP TABLE "golu_contest_populated_authors" CASCADE;
  DROP TABLE "golu_contest" CASCADE;
  DROP TABLE "golu_contest_rels" CASCADE;
  DROP TABLE "_golu_contest_v_version_populated_authors" CASCADE;
  DROP TABLE "_golu_contest_v" CASCADE;
  DROP TABLE "_golu_contest_v_rels" CASCADE;
  DROP TABLE "registration_settings" CASCADE;
  DROP TABLE "event_form_fields_options" CASCADE;
  DROP TABLE "event_form_fields" CASCADE;
  DROP TABLE "event_registration_submissions_attachments" CASCADE;
  DROP TABLE "event_registration_submissions" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "redirects_rels" CASCADE;
  DROP TABLE "forms_blocks_checkbox" CASCADE;
  DROP TABLE "forms_blocks_country" CASCADE;
  DROP TABLE "forms_blocks_email" CASCADE;
  DROP TABLE "forms_blocks_message" CASCADE;
  DROP TABLE "forms_blocks_number" CASCADE;
  DROP TABLE "forms_blocks_select_options" CASCADE;
  DROP TABLE "forms_blocks_select" CASCADE;
  DROP TABLE "forms_blocks_state" CASCADE;
  DROP TABLE "forms_blocks_text" CASCADE;
  DROP TABLE "forms_blocks_textarea" CASCADE;
  DROP TABLE "forms_emails" CASCADE;
  DROP TABLE "forms" CASCADE;
  DROP TABLE "form_submissions_submission_data" CASCADE;
  DROP TABLE "form_submissions" CASCADE;
  DROP TABLE "search_categories" CASCADE;
  DROP TABLE "search" CASCADE;
  DROP TABLE "search_rels" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "header_nav_items_link_content" CASCADE;
  DROP TABLE "header_nav_items_link_gallery" CASCADE;
  DROP TABLE "header_nav_items" CASCADE;
  DROP TABLE "header_social_links" CASCADE;
  DROP TABLE "header_drawer_menu" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_rels" CASCADE;
  DROP TABLE "footer_footer_sections_top_section_links_links" CASCADE;
  DROP TABLE "footer_footer_sections_top_section_links" CASCADE;
  DROP TABLE "footer_footer_sections_social_links" CASCADE;
  DROP TABLE "footer_footer_sections_bottom_right_logos" CASCADE;
  DROP TABLE "footer_footer_sections_floating_action_widgets" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "icon_of_month_landing_page" CASCADE;
  DROP TABLE "articles_landing_page" CASCADE;
  DROP TABLE "settings" CASCADE;
  DROP TABLE "golu_contest_settings" CASCADE;
  DROP TABLE "golu_landing_page" CASCADE;
  DROP TYPE "public"."enum_pages_hero_links_link_type";
  DROP TYPE "public"."enum_pages_hero_links_link_appearance";
  DROP TYPE "public"."enum_pages_blocks_social_reel_slider_content_type";
  DROP TYPE "public"."enum_pages_blocks_main_page_banner_background_color";
  DROP TYPE "public"."enum_pages_blocks_intro_text_block_marquee_text_size";
  DROP TYPE "public"."enum_pages_blocks_intro_text_block_background_type";
  DROP TYPE "public"."enum_pages_blocks_live_intror_section_image_position";
  DROP TYPE "public"."enum_pages_blocks_live_intror_section_marquee_text_size";
  DROP TYPE "public"."enum_pages_blocks_innovate_info_section_block_image_position";
  DROP TYPE "public"."enum_iwc_cb_type";
  DROP TYPE "public"."theme_ptrn";
  DROP TYPE "public"."enum_pages_blocks_metro_madras_block_features_icon_type";
  DROP TYPE "public"."enum_pages_blocks_metro_the_details_block_details_icon_type";
  DROP TYPE "public"."enum_pages_blocks_metro_registration_block_status";
  DROP TYPE "public"."enum_pages_hero_type";
  DROP TYPE "public"."enum_pages_hero_background_color";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_type";
  DROP TYPE "public"."enum__pages_v_version_hero_links_link_appearance";
  DROP TYPE "public"."enum__pages_v_blocks_social_reel_slider_content_type";
  DROP TYPE "public"."enum__pages_v_blocks_main_page_banner_background_color";
  DROP TYPE "public"."enum__pages_v_blocks_intro_text_block_marquee_text_size";
  DROP TYPE "public"."enum__pages_v_blocks_intro_text_block_background_type";
  DROP TYPE "public"."enum__pages_v_blocks_live_intror_section_image_position";
  DROP TYPE "public"."enum__pages_v_blocks_live_intror_section_marquee_text_size";
  DROP TYPE "public"."enum__pages_v_blocks_innovate_info_section_block_image_position";
  DROP TYPE "public"."enum__iwc_cb_v_type";
  DROP TYPE "public"."enum__pages_v_blocks_metro_madras_block_features_icon_type";
  DROP TYPE "public"."enum__pages_v_blocks_metro_the_details_block_details_icon_type";
  DROP TYPE "public"."enum__pages_v_blocks_metro_registration_block_status";
  DROP TYPE "public"."enum__pages_v_version_hero_type";
  DROP TYPE "public"."enum__pages_v_version_hero_background_color";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum_posts_blog_category";
  DROP TYPE "public"."enum_posts_status";
  DROP TYPE "public"."enum__posts_v_version_blog_category";
  DROP TYPE "public"."enum__posts_v_version_status";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_visits_status";
  DROP TYPE "public"."enum__visits_v_version_status";
  DROP TYPE "public"."enum_work_status";
  DROP TYPE "public"."enum__work_v_version_status";
  DROP TYPE "public"."enum_events_event_details_language";
  DROP TYPE "public"."enum_events_status";
  DROP TYPE "public"."enum__events_v_version_event_details_language";
  DROP TYPE "public"."enum__events_v_version_status";
  DROP TYPE "public"."enum_investments_status";
  DROP TYPE "public"."enum__investments_v_version_status";
  DROP TYPE "public"."enum_live_status";
  DROP TYPE "public"."enum__live_v_version_status";
  DROP TYPE "public"."enum_volunteer_status";
  DROP TYPE "public"."enum__volunteer_v_version_status";
  DROP TYPE "public"."enum_innovate_status";
  DROP TYPE "public"."enum__innovate_v_version_status";
  DROP TYPE "public"."enum_visit_details_status";
  DROP TYPE "public"."enum__visit_details_v_version_status";
  DROP TYPE "public"."enum_properties_rent_details_preferred_tenants";
  DROP TYPE "public"."enum_properties_purpose";
  DROP TYPE "public"."enum_properties_ownership";
  DROP TYPE "public"."enum_properties_age_of_property";
  DROP TYPE "public"."enum_properties_transaction_type";
  DROP TYPE "public"."enum_properties_society_possession_status";
  DROP TYPE "public"."enum_properties_furnishing";
  DROP TYPE "public"."enum_properties_facing_direction";
  DROP TYPE "public"."enum_properties_parking";
  DROP TYPE "public"."enum_properties_water_supply";
  DROP TYPE "public"."enum_properties_commercial_type";
  DROP TYPE "public"."enum_properties_listed_by";
  DROP TYPE "public"."enum_properties_interiors_door_type";
  DROP TYPE "public"."enum_properties_availability_status";
  DROP TYPE "public"."enum_properties_status";
  DROP TYPE "public"."enum__properties_v_version_rent_details_preferred_tenants";
  DROP TYPE "public"."enum__properties_v_version_purpose";
  DROP TYPE "public"."enum__properties_v_version_ownership";
  DROP TYPE "public"."enum__properties_v_version_age_of_property";
  DROP TYPE "public"."enum__properties_v_version_transaction_type";
  DROP TYPE "public"."enum__properties_v_version_society_possession_status";
  DROP TYPE "public"."enum__properties_v_version_furnishing";
  DROP TYPE "public"."enum__properties_v_version_facing_direction";
  DROP TYPE "public"."enum__properties_v_version_parking";
  DROP TYPE "public"."enum__properties_v_version_water_supply";
  DROP TYPE "public"."enum__properties_v_version_commercial_type";
  DROP TYPE "public"."enum__properties_v_version_listed_by";
  DROP TYPE "public"."enum__properties_v_version_interiors_door_type";
  DROP TYPE "public"."enum__properties_v_version_availability_status";
  DROP TYPE "public"."enum__properties_v_version_status";
  DROP TYPE "public"."enum_property_types_value";
  DROP TYPE "public"."enum_superchennai_contests_status";
  DROP TYPE "public"."enum__superchennai_contests_v_version_status";
  DROP TYPE "public"."enum_contest_status";
  DROP TYPE "public"."enum__contest_v_version_status";
  DROP TYPE "public"."enum_organizers_venue";
  DROP TYPE "public"."enum_sabha_foods_type";
  DROP TYPE "public"."enum_articles_thumbnail_type";
  DROP TYPE "public"."enum_articles_status";
  DROP TYPE "public"."enum__articles_v_version_thumbnail_type";
  DROP TYPE "public"."enum__articles_v_version_status";
  DROP TYPE "public"."enum_ads_adsstatus";
  DROP TYPE "public"."enum_ads_media_type";
  DROP TYPE "public"."enum_ads_mobile_settings_mobile_media_type";
  DROP TYPE "public"."enum_ads_device_target";
  DROP TYPE "public"."enum_ads_show_priority";
  DROP TYPE "public"."enum_ads_position";
  DROP TYPE "public"."enum_ads_status";
  DROP TYPE "public"."enum__ads_v_version_adsstatus";
  DROP TYPE "public"."enum__ads_v_version_media_type";
  DROP TYPE "public"."enum__ads_v_version_mobile_settings_mobile_media_type";
  DROP TYPE "public"."enum__ads_v_version_device_target";
  DROP TYPE "public"."enum__ads_v_version_show_priority";
  DROP TYPE "public"."enum__ads_v_version_position";
  DROP TYPE "public"."enum__ads_v_version_status";
  DROP TYPE "public"."enum_languages_direction";
  DROP TYPE "public"."enum_neighbourhood_business_hours_day";
  DROP TYPE "public"."enum_neighbourhood_listing_type";
  DROP TYPE "public"."enum_neighbourhood_price_info_price_range";
  DROP TYPE "public"."enum_neighbourhood_structured_data_schema_type";
  DROP TYPE "public"."enum_neighbourhood_status";
  DROP TYPE "public"."enum__neighbourhood_v_version_business_hours_day";
  DROP TYPE "public"."enum__neighbourhood_v_version_listing_type";
  DROP TYPE "public"."enum__neighbourhood_v_version_price_info_price_range";
  DROP TYPE "public"."enum__neighbourhood_v_version_structured_data_schema_type";
  DROP TYPE "public"."enum__neighbourhood_v_version_status";
  DROP TYPE "public"."enum_trending_chennai_status";
  DROP TYPE "public"."enum__trending_chennai_v_version_status";
  DROP TYPE "public"."enum_trending_languages_region";
  DROP TYPE "public"."enum_cricket_score_status";
  DROP TYPE "public"."enum__cricket_score_v_version_status";
  DROP TYPE "public"."enum_ipl_languages_region";
  DROP TYPE "public"."enum_icon_of_month_month";
  DROP TYPE "public"."enum_icon_of_month_status";
  DROP TYPE "public"."enum__icon_of_month_v_version_month";
  DROP TYPE "public"."enum__icon_of_month_v_version_status";
  DROP TYPE "public"."enum_whats_ap_chennai_details_language";
  DROP TYPE "public"."enum_whats_ap_chennai_status";
  DROP TYPE "public"."enum__whats_ap_chennai_v_version_details_language";
  DROP TYPE "public"."enum__whats_ap_chennai_v_version_status";
  DROP TYPE "public"."enum_golu_submissions_status";
  DROP TYPE "public"."enum_golu_contest_status";
  DROP TYPE "public"."enum__golu_contest_v_version_status";
  DROP TYPE "public"."enum_event_form_fields_type";
  DROP TYPE "public"."enum_event_registration_submissions_status";
  DROP TYPE "public"."enum_redirects_to_type";
  DROP TYPE "public"."enum_forms_confirmation_type";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_header_nav_items_link_type";`)
}
