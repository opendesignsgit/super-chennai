import type { CollectionConfig } from 'payload'

import { slugField } from '@/fields/slug'
import { hero } from '@/heros/config'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import ContentZoneCarousel from '@/blocks/HomePage/ContentZoneCarousel/config'
import EventsCalendarBlock from '@/blocks/HomePage/EventsCalendar/config'
import { ExploreBlock } from '@/blocks/HomePage/Explore/config'
import { FunChennaiBlock } from '@/blocks/HomePage/funChennai/config'
import { GlobalSearchBlock } from '@/blocks/HomePage/GlobalSearch/config'
import Infography from '@/blocks/HomePage/infography/config'
import ChennaiInvestmentsBlock from '@/blocks/HomePage/Investments/config'
import SpotlightGallery from '@/blocks/HomePage/leftContentRightSlider/config'
import { socialReelSlider } from '@/blocks/HomePage/SocialChennai/config'
import { StartupChennaiBlock } from '@/blocks/HomePage/StartupChennai/config'
import TwoColumnFeatureBlock from '@/blocks/HomePage/TwoColumnFeatureBlock/config'
import Utilities from '@/blocks/HomePage/Utilities/config'
import BecameAVolunteerBlock from '@/blocks/HomePage/Volunteer/config'
import InnerPageBanner from '@/blocks/InnerPage/SharedBlocks/Banners/config'
import HotelsInChennaiBlock from '@/blocks/InnerPage/SharedBlocks/ZigZagContent/config'
import AllEvents from '@/blocks/MainPages/Events/config'
import ChennaiLifeEssentialSection from '@/blocks/MainPages/Live/ChennaiLifeEssentials/config'
import liveIntrorSection from '@/blocks/MainPages/Live/Introtext/config'
import mainPageBannerBlock from '@/blocks/MainPages/SharedBlocks/Banner/config'
import { FormPopup } from '@/blocks/MainPages/SharedBlocks/FormPopup/config'
import IntroTextBlock from '@/blocks/MainPages/SharedBlocks/IntroText/config'
import VisitCategory from '@/blocks/MainPages/Visit/VisitCategory/config'
import volunteerBecameListBlock from '@/blocks/MainPages/Volunteer/Volunteers/config'
import HeroSlider from '@/blocks/PageBanners/Home/config'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import investmentCategoryListBlock from '@/blocks/MainPages/Invest/InvestCategory/config'
import { innovateSlider } from '@/blocks/MainPages/Innovate/TabWithSlider/config'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                // CallToAction,
                // Content,
                // MediaBlock,
                // Archive,
                // FormBlock,
                // VisitBannerBlock,
                ExploreBlock,
                FunChennaiBlock,
                StartupChennaiBlock,
                ChennaiInvestmentsBlock,
                socialReelSlider,
                BecameAVolunteerBlock,
                EventsCalendarBlock,
                HeroSlider,
                //###### INNER BLOCKS #############
                VisitCategory,
                HotelsInChennaiBlock,
                volunteerBecameListBlock,
                // REUSABLE BLOCK
                InnerPageBanner,
                // RESUSABLE BLOCK NEW #####################
                mainPageBannerBlock,
                IntroTextBlock,
                GlobalSearchBlock,
                FormPopup,
                Infography,
                TwoColumnFeatureBlock,
                Utilities,
                ContentZoneCarousel,
                SpotlightGallery,
                AllEvents,
                liveIntrorSection,
                ChennaiLifeEssentialSection,
                investmentCategoryListBlock,
                innovateSlider
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
