import { postgresAdapter } from '@payloadcms/db-postgres'
import 'dotenv/config'
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import sharp from 'sharp' // sharp-import
import { fileURLToPath } from 'url'
import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Visits } from './collections/Visits'
import { defaultLexical } from 'src/fields/defaultLexical'
import ChennaiInvestmentsBlock from './blocks/HomePage/Investments/config'
import { Events } from './collections/Events'
import { eventsCategories } from './collections/Events/options/Categories'
import { Innovate } from './collections/Innovate'
import { Investments } from './collections/Investments'
import { Live } from './collections/live'
import { Properties } from './collections/Properties'
import ContactMessages from './collections/Properties/forms/ContacctProperties'
import { Amenities } from './collections/Properties/options/Amenities'
import { BhkTypes } from './collections/Properties/options/BhkTypes'
import { Locations } from './collections/Properties/options/Locations'
import { PropertyTypes } from './collections/Properties/options/PropertyTypes'
import InvestmentCategoriesCollection from './collections/RelationSchema/Investments/Investments'
import VisitCategoryCollection from './collections/RelationSchema/main-pages/visit-page/visit-catogory/schema'
import SocialReelsCollection from './collections/RelationSchema/SocialReels/SocialReels'
import VolunteerSlidesCollection from './collections/RelationSchema/Volunteer/Volunteer'
import { Users } from './collections/Users'
import { VisitDetails } from './collections/VisitDetails'
import { Volunteer } from './collections/Volunteer'
import { work } from './collections/Work'
import Footer from './Footer/config'
import { Header } from './Header/config'
import { plugins } from './plugins'
import { getServerSideURL } from './utilities/getURL'
import { Ads } from './collections/Ads'
import { Articles } from './collections/Articles'
import { ArticleCategory } from './collections/Articles/option/Articlecategory'
import { ArticleTypes } from './collections/Articles/option/ArticleTypes'
import { Languages } from './collections/Articles/option/Languages'
import { ArticleLocations } from './collections/Articles/option/loactions'
import { Contest } from './collections/Contest'
import { SabhaFoods } from './collections/Contest/Options/Food'
import { MargazhiEventCategories } from './collections/Contest/Options/MargazhiEventCategories'
import { Organizers } from './collections/Contest/Options/Organizers'
import { Venues } from './collections/Contest/Options/Venues'
import { CricketScore } from './collections/CricketScore'
import { IPLCategories } from './collections/CricketScore/options/IPLCategoriesCategories'
import { IconOfMonth } from './collections/IconOfTheMonth'
import { Neighbourhood } from './collections/Neighbourhoods/Neighbourhoods'
import { NeighbourhoodCategories } from './collections/Neighbourhoods/options/businessCategories'
import { ChennaiNeighbourhoodlocations } from './collections/Neighbourhoods/options/locations'
import { NeighbourhoodSubCategories } from './collections/Neighbourhoods/options/NeighbourhoodSubCategories'
import { NeighbourhoodTags } from './collections/Neighbourhoods/options/NeighbourhoodTags'
import { PropertyLocations } from './collections/Properties/options/propertyLocation'
import { SuperchennaiContests } from './collections/SuperchennaiContests'
import { trendingChennai } from './collections/trendingChennai'
import { trendingEventsCategories } from './collections/trendingChennai/options/TrendingCategories'
import { TrendingLanguages } from './collections/trendingChennai/options/TrendingLangauge'
import { trendinglocations } from './collections/trendingChennai/options/TrendingLocations'
import { verifyOTP } from './endpoints/verifyOTP'
import { IplLocations } from './collections/CricketScore/options/IPLLocations'
import { IPLLanguages } from './collections/CricketScore/options/IPLLangauge'
import { Arattai } from './collections/Arrattai'
import { ArattaiRegistrations } from './collections/Arrattai/ArattaiRegistrations'
import { EventDashboard } from './collections/EventDashboard'
import { IconMonthCategories } from './collections/IconOfTheMonth/Options/icon-month-categories'
import { IconOfMonthPage } from './collections/IconOfTheMonth/Options/CollectionPageData'
import { Settings } from './collections/Globals/Settings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      beforeLogin: ['@/components/BeforeLogin'],
      beforeDashboard: ['@/components/BeforeDashboard'],
      views: {},
      graphics: {
        Logo: '@/components/admin/AdminLogo',
        Icon: '@/components/admin/AdminIcon',
      },
    },

    importMap: {
      baseDir: path.resolve(dirname),
    },
    user: Users.slug,
    livePreview: {
      breakpoints: [
        {
          label: 'Mobile',
          name: 'mobile',
          width: 375,
          height: 667,
        },
        {
          label: 'Tablet',
          name: 'tablet',
          width: 768,
          height: 1024,
        },
        {
          label: 'Desktop',
          name: 'desktop',
          width: 1440,
          height: 900,
        },
      ],
    },
  },
  editor: defaultLexical,

  db: postgresAdapter({
    pool: {
      max: 10, // max connections
      connectionString: process.env.DATABASE_URI,
      connectionTimeoutMillis: 300000, // 60 seconds
      idleTimeoutMillis: 300000, // 30 seconds 30000
    },
    // pool: {
    //   max: 10,
    //   connectionString: process.env.DATABASE_URI,
    //   connectionTimeoutMillis: 1800000, // 30 minutes
    //   idleTimeoutMillis: 1800000, // 30 minutes
    // },
  }),

  collections: [
    Pages,
    Posts,
    Media,
    Categories,
    Users,
    Visits,
    work,
    Events,
    Investments,
    Live,
    Volunteer,
    Innovate,
    VisitDetails,
    VolunteerSlidesCollection,
    SocialReelsCollection,
    InvestmentCategoriesCollection,
    VisitCategoryCollection,
    Properties,
    BhkTypes,
    PropertyTypes,
    Locations,
    Amenities,
    ContactMessages,
    PropertyLocations,
    eventsCategories,
    SuperchennaiContests,

    Contest,
    Organizers,
    Venues,
    MargazhiEventCategories,
    SabhaFoods,
    Articles,
    Ads,
    ArticleTypes,
    ArticleLocations,
    ArticleCategory,
    Languages,

    //########## NEIGHBOURHOODS ##############

    Neighbourhood,
    NeighbourhoodCategories,
    NeighbourhoodSubCategories,
    NeighbourhoodTags,
    ChennaiNeighbourhoodlocations,

    // ######### TRENDING CHENNAI #############

    trendingChennai,
    trendinglocations,
    trendingEventsCategories,
    TrendingLanguages,
    CricketScore,
    IPLCategories,
    IplLocations,
    IPLLanguages,

    //####### ARATTAI THANI DEPARTMENT ##########
    Arattai,
    ArattaiRegistrations,
    EventDashboard,

    //####### ICON OFTHE MONTH ##################

    IconOfMonth,
    IconMonthCategories,
  ],

  //######### CUSTOME END POINT  ################

  endpoints: [
    {
      path: '/verify-otp',
      method: 'post',
      handler: verifyOTP,
    },
  ],

  // #################################################################################
  // ################## DONT TOCH THIS PART MODIFIED BY OPEN DESIGN  #################
  // #################################################################################

  cors: [
    'https://www.superchennai.com',
    'http://localhost:5173',
    'http://localhost:5174',
    getServerSideURL(),
  ].filter(Boolean),
  globals: [Header, Footer, IconOfMonthPage,Settings],
  blocks: [ChennaiInvestmentsBlock],
  plugins: [...plugins],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        if (req.user) return true
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
