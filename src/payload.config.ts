// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'

import sharp from 'sharp' // sharp-import
import path from 'path'
import { buildConfig, PayloadRequest } from 'payload'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Visits } from './collections/Visits'

import { Users } from './collections/Users'
import { plugins } from './plugins'
import { defaultLexical } from '@/fields/defaultLexical'
import { getServerSideURL } from './utilities/getURL'
import SocialReelsCollection from './collections/RelationSchema/SocialReels/SocialReels'
import VolunteerSlidesCollection from './collections/RelationSchema/Volunteer/Volunteer'
import Footer from './Footer/config'
import Header from './Header/config'
import EventsCalendar from './collections/RelationSchema/EventsCalendar/event-calendar'
import InvestmentCategoriesCollection from './collections/RelationSchema/Investments/Investments'
import ChennaiInvestmentsBlock from './blocks/HomePage/Investments/config'
import VisitCategoryCollection from './collections/RelationSchema/main-pages/visit-page/visit-catogory/schema'
import { work } from './collections/Work'
import { searchPlugin } from '@payloadcms/plugin-search'

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
      connectionString:
        process.env.DATABASE_URL || 'postgresql://postgres:root@localhost:5432/superchennai',
      ssl: false,
      connectionTimeoutMillis: 5000,
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
    VolunteerSlidesCollection,
    SocialReelsCollection,
    EventsCalendar,
    InvestmentCategoriesCollection,
    VisitCategoryCollection,
  ],
  cors: [getServerSideURL()].filter(Boolean),
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
