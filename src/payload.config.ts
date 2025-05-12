import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

// Collections
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'

// Globals
import { Header } from './global/header'
import BecameAVolunteer from './blocks/becameAVolunteer/schema'
import { ExploreBlock } from './blocks/explore/shema'
import { StartupChennaiBlock } from './blocks/startupChennai/schema'
import { FunChennaiBlock } from './blocks/funChennai/schema'
import { SocialChennaiBlock } from './blocks/socialChennai/schema'
import { GlobalSearchBlock } from './blocks/Globalsearch/schema'
import VolunteerSliders from './collections/realations-shemas/Volunteer-Section/Volunteer'
import footer from './global/footer'
import InvestmentCategories from './collections/realations-shemas/Investments/Investments'
import ChennaiInvestmentsBlock from './blocks/ChennaiInvestments/schema'
import EventsCalendarBlock from './blocks/eventsCalendar/schema'
import EventsCalendar from './collections/realations-shemas/EventsCalendar/event-calendar'
import volunteerBannerBlock from './blocks/page-blocks/volunteer/banner/schema'
import volunteerContentBlock from './blocks/page-blocks/volunteer/Volunteer-life-content/schema'
import volunteerBecameListBlock from './blocks/page-blocks/volunteer/became-a-volunteer/schema'
import workBannerBlock from './blocks/page-blocks/work/banner/schema'
import workInChennaiBlock from './blocks/page-blocks/work/work-in-chennai/schema'
import SocialReelsCollection from './collections/realations-shemas/socialReels/socialReels'
import investBannerBlock from './blocks/page-blocks/invest/banner/schema'
import investChennaiBlock from './blocks/page-blocks/invest/InvestChennai/schema'
import investmentCategoryListBlock from './blocks/page-blocks/invest/invest-category/schema'
import liveBannerBlock from './blocks/page-blocks/live/banner/schema'
import liveInfoBlock from './blocks/page-blocks/live/living-in-chennai/schema'
import chennaiLifeEssentialsBlock from './blocks/page-blocks/live/chennaiLifeEssentials/schema'
import accodomationBannerBlock from './blocks/page-blocks/accodomation/banner/schema'
import HotelsInChennaiBlock from './blocks/page-blocks/accodomation/hotelsInChennai/schema'
import ExploreMoreChennaiBlock from './blocks/page-blocks/accodomation/exploreMore/schema'
import VisitCategories from './collections/realations-shemas/main-pages/visit-page/visit-catogory/schema'
import VisitIntroTextBlock from './blocks/page-blocks/visit/visit-intro/schema'
import VisitBannerBlock from './blocks/page-blocks/visit/visit-banner/schema'
// import CustomDashboardBanner from './components/admin-dashboard/DashboardBanner'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Super Chennai',
    },
    // branding: {
    //   logo: './public/images/icons/LeftArrow-Bg.svg',
    //   favicon: '/favicon.ico',
    //   css: './admin-custom.css',
    // },
    components: {
      // beforeDashboard: [CustomDashboardBanner],
    },
  },
  collections: [
    Users,
    Media,
    Pages,
    VolunteerSliders,
    InvestmentCategories,
    EventsCalendar,
    SocialReelsCollection,
    //########### MAINPAGES COLLECTION #######
    VisitCategories,
  ],

  globals: [Header, footer],

  blocks: [
    // #########  HOME PAGE BLOCKS GROPUS ########
    BecameAVolunteer,
    ExploreBlock,
    StartupChennaiBlock,
    FunChennaiBlock,
    SocialChennaiBlock,
    GlobalSearchBlock,
    ChennaiInvestmentsBlock,
    EventsCalendarBlock,

    //####### VOLUEENTER PAGE  ####################
    volunteerBannerBlock,
    volunteerContentBlock,
    volunteerBecameListBlock,

    //############# WORK PAGE  #####################
    workBannerBlock,
    workInChennaiBlock,

    //############# INVEST PAGE  ###################
    investBannerBlock,
    investChennaiBlock,
    investmentCategoryListBlock,

    //############# INVEST PAGE  ###################
    liveBannerBlock,
    liveInfoBlock,
    chennaiLifeEssentialsBlock,

    //############# ACCOMODATION PAGE  ##############
    accodomationBannerBlock,
    HotelsInChennaiBlock,
    ExploreMoreChennaiBlock,

    VisitIntroTextBlock,
    VisitBannerBlock,
  ],

  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString:
        process.env.DATABASE_URL || 'postgresql://postgres:admin@123@localhost:5432/super-chennai',
      ssl: false,
      connectionTimeoutMillis: 5000,
      idleTimeoutMillis: 30000,
    },
  }),
  sharp,
  plugins: [payloadCloudPlugin()],
  // Enable debug logging in development
  debug: process.env.NODE_ENV === 'development',
})
