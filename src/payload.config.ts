import { postgresAdapter } from '@payloadcms/db-postgres'
import 'dotenv/config'

import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import sharp from 'sharp'; // sharp-import
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Visits } from './collections/Visits'

import { defaultLexical } from 'src/fields/defaultLexical'
import ChennaiInvestmentsBlock from './blocks/HomePage/Investments/config'
import { Events } from './collections/Events'
import { Innovate } from './collections/Innovate'
import { Investments } from './collections/Investments'
import { Live } from './collections/live'
import { Properties } from './collections/Properties'
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
import ContactMessages from './collections/Properties/forms/ContacctProperties';

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    components: {
      // The `BeforeLogin` component renders a message that you see while logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeLogin` statement on line 15.
      beforeLogin: ['@/components/BeforeLogin'],
      // The `BeforeDashboard` component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import `BeforeDashboard` statement on line 15.
      beforeDashboard: ['@/components/BeforeDashboard'],
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
  // This config helps us configure global or default features that the other editors can inherit
  editor: defaultLexical,

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
      ssl: false,
      connectionTimeoutMillis: 20000,
      idleTimeoutMillis: 30000,
    },
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
    ContactMessages
  ],

  // #################################################################################
  // ################## DONT TOCH THIS PART MODIFIED BY OPEN DESIGN  #################
  // #################################################################################

  // cors: [getServerSideURL()].filter(Boolean),
  cors: ['https://www.superchennai.com', 'http://localhost:5173', getServerSideURL()].filter(
    Boolean,
  ),
  // csrf: ['http://localhost:5173', getServerSideURL()].filter(Boolean),
  globals: [Header, Footer],
  blocks: [ChennaiInvestmentsBlock],
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
  ],
  secret: process.env.PAYLOAD_SECRET,
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  jobs: {
    access: {
      run: ({ req }: { req: PayloadRequest }): boolean => {
        // Allow logged in users to execute this endpoint (default)
        if (req.user) return true

        // If there is no logged in user, then check
        // for the Vercel Cron secret to be present as an
        // Authorization header:
        const authHeader = req.headers.get('authorization')
        return authHeader === `Bearer ${process.env.CRON_SECRET}`
      },
    },
    tasks: [],
  },
})
