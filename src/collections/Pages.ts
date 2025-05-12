// import { CollectionConfig } from 'payload'
// import BecameAVolunteer from '@/blocks/becameAVolunteer/schema'
// import { ExploreBlock } from '@/blocks/explore/shema'
// import { StartupChennaiBlock } from '@/blocks/startupChennai/schema'
// import { FunChennaiBlock } from '@/blocks/funChennai/schema'
// import { SocialChennaiBlock } from '@/blocks/socialChennai/schema'
// import { GlobalSearchBlock } from '@/blocks/Globalsearch/schema'
// import ChennaiInvestmentsBlock from '@/blocks/ChennaiInvestments/schema'
// import EventsCalendarBlock from '@/blocks/eventsCalendar/schema'
// import volunteerBannerBlock from '@/blocks/page-blocks/volunteer/banner/schema'
// import volunteerContentBlock from '@/blocks/page-blocks/volunteer/Volunteer-life-content/schema'
// import volunteerBecameListBlock from '@/blocks/page-blocks/volunteer/became-a-volunteer/schema'
// import workBannerBlock from '@/blocks/page-blocks/work/banner/schema'
// import workInChennaiBlock from '@/blocks/page-blocks/work/work-in-chennai/schema'
// import investBannerBlock from '@/blocks/page-blocks/invest/banner/schema'
// import investChennaiBlock from '@/blocks/page-blocks/invest/InvestChennai/schema'
// import investmentCategoryListBlock from '@/blocks/page-blocks/invest/invest-category/schema'
// import liveBannerBlock from '@/blocks/page-blocks/live/banner/schema'
// import liveInfoBlock from '@/blocks/page-blocks/live/living-in-chennai/schema'
// import chennaiLifeEssentialsBlock from '@/blocks/page-blocks/live/chennaiLifeEssentials/schema'
// import accodomationBannerBlock from '@/blocks/page-blocks/accodomation/schema'

// export const Pages: CollectionConfig = {
//   slug: 'pages',
//   fields: [
//     {
//       name: 'name',
//       label: 'name',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'slug',
//       label: 'slug',
//       type: 'text',
//       admin: {
//         position: 'sidebar',
//       },
//     },
//     {
//       name: 'layout',
//       label: 'layout',
//       type: 'blocks',
//       blocks: [
//         BecameAVolunteer,
//         ExploreBlock,
//         StartupChennaiBlock,
//         FunChennaiBlock,
//         SocialChennaiBlock,
//         GlobalSearchBlock,
//         ChennaiInvestmentsBlock,
//         EventsCalendarBlock,

//         // VOLUNTEER PAGE #########
//         volunteerBannerBlock,
//         volunteerContentBlock,
//         volunteerBecameListBlock,

//         // WORK PAGE #########
//         workBannerBlock,
//         workInChennaiBlock,

//         // INVEST PAGE #########
//         investBannerBlock,
//         investChennaiBlock,
//         investmentCategoryListBlock,

//         // LIVE IN CHENNAI PAGE #########
//         liveBannerBlock,
//         liveInfoBlock,
//         chennaiLifeEssentialsBlock,

//         // ACCOMODATION PAGE #########
//         accodomationBannerBlock,
//       ],
//     },
//   ],
// }
import { CollectionConfig } from 'payload'

// Import your blocks
import BecameAVolunteer from '@/blocks/becameAVolunteer/schema'
import { ExploreBlock } from '@/blocks/explore/shema'
import { StartupChennaiBlock } from '@/blocks/startupChennai/schema'
import { FunChennaiBlock } from '@/blocks/funChennai/schema'
import { SocialChennaiBlock } from '@/blocks/socialChennai/schema'
import { GlobalSearchBlock } from '@/blocks/Globalsearch/schema'
import ChennaiInvestmentsBlock from '@/blocks/ChennaiInvestments/schema'
import EventsCalendarBlock from '@/blocks/eventsCalendar/schema'

// VOLUNTEER PAGE BLOCKS
import volunteerBannerBlock from '@/blocks/page-blocks/volunteer/banner/schema'
import volunteerContentBlock from '@/blocks/page-blocks/volunteer/Volunteer-life-content/schema'
import volunteerBecameListBlock from '@/blocks/page-blocks/volunteer/became-a-volunteer/schema'

// WORK PAGE BLOCKS
import workBannerBlock from '@/blocks/page-blocks/work/banner/schema'
import workInChennaiBlock from '@/blocks/page-blocks/work/work-in-chennai/schema'

// INVEST PAGE BLOCKS
import investBannerBlock from '@/blocks/page-blocks/invest/banner/schema'
import investChennaiBlock from '@/blocks/page-blocks/invest/InvestChennai/schema'
import investmentCategoryListBlock from '@/blocks/page-blocks/invest/invest-category/schema'

// LIVE PAGE BLOCKS
import liveBannerBlock from '@/blocks/page-blocks/live/banner/schema'
import liveInfoBlock from '@/blocks/page-blocks/live/living-in-chennai/schema'
import chennaiLifeEssentialsBlock from '@/blocks/page-blocks/live/chennaiLifeEssentials/schema'

// ACCOMMODATION PAGE BLOCKS
import accodomationBannerBlock from '@/blocks/page-blocks/accodomation/banner/schema'
import HotelsInChennaiBlock from '@/blocks/page-blocks/accodomation/hotelsInChennai/schema'
import ExploreMoreChennaiBlock from '@/blocks/page-blocks/accodomation/exploreMore/schema'
import visitCategoryBlock from '@/blocks/page-blocks/visit/visit-catogory/schema'
import VisitIntroTextBlock from '@/blocks/page-blocks/visit/visit-intro/schema'
import VisitBannerBlock from '@/blocks/page-blocks/visit/visit-banner/schema'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      label: 'Page Name',
      type: 'text',
      required: true,
    },
    {
      name: 'parent',
      label: 'Parent Page (optional)',
      type: 'relationship',
      relationTo: 'pages',
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      required: true,
      blocks: [
        BecameAVolunteer,
        ExploreBlock,
        StartupChennaiBlock,
        FunChennaiBlock,
        SocialChennaiBlock,
        GlobalSearchBlock,
        ChennaiInvestmentsBlock,
        EventsCalendarBlock,

        // Volunteer
        volunteerBannerBlock,
        volunteerContentBlock,
        volunteerBecameListBlock,

        // Work
        workBannerBlock,
        workInChennaiBlock,

        // Invest
        investBannerBlock,
        investChennaiBlock,
        investmentCategoryListBlock,

        // Live
        liveBannerBlock,
        liveInfoBlock,
        chennaiLifeEssentialsBlock,

        // Accomodation
        accodomationBannerBlock,
        HotelsInChennaiBlock,
        ExploreMoreChennaiBlock,

        // VISIT PAGE 
        visitCategoryBlock,
        VisitIntroTextBlock,
        VisitBannerBlock
        
        
      ],
    },
  ],

  hooks: {
    beforeValidate: [
      async ({ data, req }) => {
        const slugify = (str: string) =>
          str
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w/-]/g, '')

        let currentSlug = data?.slug || (data?.name ? slugify(data.name) : '')

        if (data?.parent) {
          try {
            const parent = await req.payload.findByID({
              collection: 'pages',
              id: data.parent,
            })
            if (parent?.slug) {
              currentSlug = `${parent.slug}/${currentSlug}`
            }
          } catch (err) {
            console.error('Error fetching parent slug:', err)
          }
        }

        if (data) {
          data.slug = currentSlug
        }

        return data
      },
    ],
  },
}
