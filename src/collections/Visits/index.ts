import type { Block, CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateDelete, revalidatePost } from './hooks/revalidatePost'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'

import HotelsInChennaiBlock from '@/blocks/InnerPage/SharedBlocks/Hotels/config'
import ExploreMoreChennaiBlock from '@/blocks/InnerPage/Accomodation/Explore/config'
import InnerPageBanner from '@/blocks/InnerPage/SharedBlocks/Banners/config'
import { socialReelSlider } from '@/blocks/HomePage/SocialChennai/config'

// const createVisitCategoryBlock = (slug: string, singular: string, plural: string): Block => ({
//   slug,
//   labels: {
//     singular,
//     plural,
//   },
//   fields: [
//     {
//       name: 'items',
//       type: 'array',
//       label: 'Hotels',
//       required: true,
//       fields: [
//         {
//           name: 'image',
//           type: 'upload',
//           relationTo: 'media',
//           required: true,
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           required: true,
//         },
//         {
//           name: 'description',
//           type: 'richText',
//         },
//         {
//           name: 'buttonLink',
//           type: 'text',
//           label: 'Button Link (URL)',
//         },
//       ],
//     },
//   ],
// })

// // HOTELS ##########
// const TravelsCategoryBlock = (slug: string, singular: string, plural: string): Block => ({
//   slug,
//   labels: {
//     singular,
//     plural,
//   },
//   fields: [
//     // {
//     //   name: 'heading',
//     //   type: 'text',
//     //   required: true,
//     // },
//     // {
//     //   name: 'description',
//     //   type: 'richText',
//     // },
//     {
//       name: 'items',
//       type: 'array',
//       label: 'Cards',
//       required: true,
//       fields: [
//         {
//           name: 'image',
//           type: 'upload',
//           relationTo: 'media',
//           required: true,
//         },
//         {
//           name: 'heading',
//           type: 'text',
//           required: true,
//         },
//         {
//           name: 'description',
//           type: 'richText',
//         },
//         {
//           name: 'buttonLink',
//           type: 'text',
//           label: 'Button Link (URL)',
//         },
//       ],
//     },
//   ],
// })

export const Visits: CollectionConfig<'visits'> = {
  slug: 'visits',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a post is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'visits'>
  defaultPopulate: {
    title: true,
    slug: true,
    categories: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'visits',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'visits',
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
          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({
                      blocks: [
                        // Banner,
                        // Code,
                        // MediaBlock,
                        // Content,
                        HotelsInChennaiBlock,
                        ExploreMoreChennaiBlock,
                        socialReelSlider,
                        InnerPageBanner,

                        // createVisitCategoryBlock('food', 'Food', 'Food Sections'),
                        // createVisitCategoryBlock(
                        //   'placesToVisit',
                        //   'Place to Visit',
                        //   'Places to Visit',
                        // ),
                        //   createVisitCategoryBlock(
                        //     'accommodation',
                        //     'Accommodation',
                        //     'Accommodations',
                        //   ),
                        //   createVisitCategoryBlock('thingsToDo', 'Thing to Do', 'Things to Do'),
                        //   createVisitCategoryBlock('hiddenGems', 'Hidden Gem', 'Hidden Gems'),
                        //   createVisitCategoryBlock('shopping', 'Shopping', 'Shopping Sections'),
                        //   TravelsCategoryBlock('travelTips', 'Travel Tip', 'Travel Tips'),
                        //   createVisitCategoryBlock('wellness', 'Wellness', 'Wellness Tips'),
                        //   createVisitCategoryBlock('events', 'Event', 'Events'),
                        //   createVisitCategoryBlock('conference', 'Conference', 'Conferences'),
                      ],
                    }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              label: false,
              required: true,
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'relatedvisits',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              filterOptions: ({ id }) => {
                return {
                  id: {
                    not_in: [id],
                  },
                }
              },
              hasMany: true,
              relationTo: 'visits',
            },
            {
              name: 'categories',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              hasMany: true,
              relationTo: 'categories',
            },
          ],
          label: 'Meta',
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
        // LAYOUT TAB  #########

        // {
        //   label: 'Layout',
        //   fields: [
        //     {
        //       name: 'layout',
        //       type: 'blocks',
        //       blocks: [
        //         Content,
        //         MediaBlock,
        //         VisitBannerBlock,
        //         VisitCategory,
        //         VisitIntroTextBlock,
        //       ],
        //       required: true,
        //       admin: {
        //         initCollapsed: true,
        //       },
        //     },
        //   ],
        // },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'authors',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'users',
    },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    {
      name: 'populatedAuthors',
      type: 'array',
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePost],
    afterRead: [populateAuthors],
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
