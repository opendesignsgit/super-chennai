import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { FormBlock } from '../../blocks/Form/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { hero } from '@/heros/config'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import VisitBannerBlock from '@/blocks/PageBanners/VisitBanner/config'
import { ExploreBlock } from '@/blocks/HomePage/Explore/config'
import { FunChennaiBlock } from '@/blocks/HomePage/funChennai/config'
import { StartupChennaiBlock } from '@/blocks/HomePage/StartupChennai/config'
import ChennaiInvestmentsBlock from '@/blocks/HomePage/Investments/config'
import { SocialChennaiBlock } from '@/blocks/HomePage/SocialChennai/config'
import BecameAVolunteerBlock from '@/blocks/HomePage/Volunteer/config'
import EventsCalendarBlock from '@/blocks/HomePage/EventsCalendar/config'
import { GlobalSearchBlock } from '@/blocks/HomePage/GlobalSearch/config'
import HeroSlider from '@/blocks/PageBanners/Home/config'
import VisitCategory from '@/blocks/MainPages/Visit/VisitCategory/config'
import VisitIntroTextBlock from '@/blocks/MainPages/Visit/VisitIntro/config'
import HotelsInChennaiBlock from '@/blocks/InnerPage/SharedBlocks/Hotels/config'
import InnerPageBanner from '@/blocks/InnerPage/SharedBlocks/Banners/config'
import { careerIntroBlock } from '@/blocks/InnerPage/SharedBlocks/careerIntro/config'
import mainPageBannerBlock from '@/blocks/MainPages/SharedBlocks/Banner/config'

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
                CallToAction,
                Content,
                MediaBlock,
                Archive,
                FormBlock,
                VisitBannerBlock,
                ExploreBlock,
                FunChennaiBlock,
                StartupChennaiBlock,
                ChennaiInvestmentsBlock,
                SocialChennaiBlock,
                BecameAVolunteerBlock,
                EventsCalendarBlock,
                GlobalSearchBlock,
                HeroSlider,

                //###### INNER BLOCKS #############
                VisitCategory,
                VisitIntroTextBlock,
                HotelsInChennaiBlock,

                careerIntroBlock,

                // REUSABLE BLOCK
                InnerPageBanner,


                mainPageBannerBlock
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
