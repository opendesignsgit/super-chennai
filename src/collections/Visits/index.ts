import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'

import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateDelete, revalidatePost } from './hooks/revalidatePost'

import { slugField } from '@/fields/slug'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import { socialReelSlider } from '@/blocks/HomePage/SocialChennai/config'
import ExploreMoreChennaiBlock from '@/blocks/InnerPage/SharedBlocks/Explore/config'
import introTextBlock from '@/blocks/InnerPage/SharedBlocks/IntroText/config'
import ZigZagContentBlock from '@/blocks/InnerPage/SharedBlocks/ZigZagContent/config'
import featureSectionSplitLayoutBlock from '@/blocks/InnerPage/SharedBlocks/featureSectionSplitLayout/config'
export const Visits: CollectionConfig<'visits'> = {
  slug: 'visits',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },

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
            //####################### BANNER CONTENT  ############################################
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
                        ZigZagContentBlock,
                        ExploreMoreChennaiBlock,
                        socialReelSlider,
                        introTextBlock,
                        featureSectionSplitLayoutBlock,
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

        // SUBPAGE SCHAME #########
        // {
        //   label: 'Sub Pages',
        //   fields: [
        //     {
        //       name: 'subPages',
        //       type: 'array',
        //       label: 'Sub Pages',
        //       fields: [
        //         {
        //           name: 'title',
        //           type: 'text',
        //           required: true,
        //         },
        //         {
        //           name: 'slug',
        //           type: 'text',
        //           required: true,
        //           admin: {
        //             description: 'Slug for this sub-page. Final URL: /visits/parent-slug/this-slug',
        //           },
        //         },
        //         {
        //           name: 'content',
        //           type: 'richText',
        //           editor: lexicalEditor({
        //             features: ({ rootFeatures }) => {
        //               return [
        //                 ...rootFeatures,
        //                 HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
        //                 BlocksFeature({
        //                   blocks: [
        //                     // ZigZagContentBlock,
        //                     // ExploreMoreChennaiBlock,
        //                     // socialReelSlider,
        //                     // FeatureSectionsBlock,
        //                     // featureSectionSplitLayoutBlock,
        //                   ],
        //                 }),
        //                 FixedToolbarFeature(),
        //                 InlineToolbarFeature(),
        //                 HorizontalRuleFeature(),
        //               ]
        //             },
        //           }),
        //         },
        //         {
        //           name: 'meta',
        //           label: 'SEO (Optional)',
        //           type: 'group',
        //           fields: [MetaImageField({ relationTo: 'media' })],
        //         },
        //       ],
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
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
