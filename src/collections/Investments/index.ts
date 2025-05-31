import type { CollectionConfig } from 'payload'

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

import InnerPageBanner from '@/blocks/InnerPage/SharedBlocks/Banners/config'
import introTextBlock from '@/blocks/InnerPage/SharedBlocks/IntroText/config'
import InvestCategoryBlock from '@/blocks/InnerPage/SharedBlocks/InvestCategory/config'
import { slugField } from '@/fields/slug'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
export const Investments: CollectionConfig<'investments'> = {
  slug: 'investments',
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
          collection: 'investments',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'investments',
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
                      blocks: [InnerPageBanner, introTextBlock, InvestCategoryBlock],
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
              name: 'relatedinvestments',
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
              relationTo: 'investments',
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

        //######### CORECTED FILED WITH ARRAY  ##########
        {
          label: 'Investments',
          fields: [
            // {
            //   name: 'backgroundImage',
            //   label: 'Top Image for Investment Category Section',
            //   type: 'upload',
            //   relationTo: 'media',
            // },
            {
              name: 'investments',
              label: 'Investments',
              type: 'array',
              fields: [
                {
                  name: 'sectionTitle',
                  label: 'Category Title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'sectionDescription',
                  label: 'Category Description',
                  type: 'textarea',
                },
                {
                  name: 'sectionImage',
                  label: 'Section Image',
                  type: 'upload',
                  relationTo: 'media',
                },
                {
                  name: 'investmentItems',
                  label: 'Investments',
                  type: 'array',
                  fields: [
                    {
                      name: 'title',
                      label: 'Investment Title',
                      type: 'text',
                      required: true,
                    },
                    // {
                    //   name: 'subtitle',
                    //   type: 'text',
                    // },
                    {
                      name: 'description',
                      label: 'Description',
                      type: 'textarea',
                    },
                    {
                      name: 'image',
                      label: 'Investment Image',
                      type: 'upload',
                      relationTo: 'media',
                    },
                    // {
                    //   name: 'svgIcon',
                    //   label: 'SVG Icon',
                    //   type: 'upload',
                    //   relationTo: 'media',
                    //   filterOptions: () => ({
                    //     mimeType: { equals: 'image/svg+xml' },
                    //   }),
                    //   admin: {
                    //     description: 'Upload an SVG file only.',
                    //   },
                    // },
                  ],
                },
              ],
            },
          ],
        },
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
