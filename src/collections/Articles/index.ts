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
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
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
import { slugField } from 'src/fields/slug'
import { VideoBlock } from '@/blocks/VideoBlock/config'
import { AdBlock } from '@/blocks/AdBlock/config'

export const Articles: CollectionConfig<'articles'> = {
  slug: 'articles',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: () => true,
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
          collection: 'articles',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'articles',
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
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock, VideoBlock, AdBlock] }),
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

        //################# ARTCLE TAB ########################

        {
          fields: [
            {
              name: 'excerpt',
              type: 'textarea',
              maxLength: 300,
              label: 'Short Summary (for cards)',
            },
            {
              name: 'articleType',
              label: 'Article Type',
              type: 'relationship',
              relationTo: 'articleTypes',
              hasMany: true,
              required: true,
              admin: {
                position: 'sidebar',
              },
            },

            {
              name: 'location',
              label: 'Location (Chennai Area)',
              type: 'relationship',
              relationTo: 'Articlelocations',
              required: true,
              hasMany: true,

              admin: {
                position: 'sidebar',
              },
            },

            {
              name: 'Articlecategory',
              label: 'Article Category',
              type: 'relationship',
              relationTo: 'articlecategory',
              required: true,
              admin: {
                position: 'sidebar',
              },
            },

            {
              name: 'language',
              label: 'Language',
              type: 'relationship',
              relationTo: 'languages',
              required: true,
              admin: {
                position: 'sidebar',
              },
            },

            {
              name: 'thumbnailType',
              type: 'select',
              options: [
                { label: 'Image', value: 'image' },
                { label: 'Video', value: 'video' },
                { label: 'GIF', value: 'gif' },
                { label: 'None', value: 'none' },
              ],
              admin: { position: 'sidebar' },
            },

            {
              name: 'thumbnailImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                condition: (_, data) => data.thumbnailType === 'image',
              },
            },

            {
              name: 'thumbnailVideoUrl',
              type: 'text',
              admin: {
                condition: (_, data) => data.thumbnailType === 'video',
              },
            },

            {
              name: 'thumbnailGifUrl',
              type: 'text',
              admin: {
                condition: (_, data) => data.thumbnailType === 'gif',
              },
            },

            {
              name: 'thumbnailAlt',
              type: 'text',
              label: 'Caption / Alt Text',
            },

            {
              name: 'featured',
              type: 'checkbox',
              label: 'Featured Article',
              defaultValue: false,
              admin: { position: 'sidebar' },
            },

            {
              name: 'pinned',
              type: 'checkbox',
              label: 'Pinned Article',
              defaultValue: false,
              admin: { position: 'sidebar' },
            },

            {
              name: 'readingTime',
              type: 'number',
              label: 'Reading Time (min)',
              admin: {
                position: 'sidebar',
              },
            },
          ],
          label: 'Article',
        },

        {
          fields: [
            {
              name: 'relatedPosts',
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
              relationTo: 'articles',
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

            {
              name: 'structuredData',
              label: 'SEO Schema (JSON-LD)',
              type: 'json',
              admin: {
                description: 'Paste valid JSON-LD schema (without <script> tag)',
              },
            },
          ],
        },
      ],
    },

    //########## LIKE AND VIEWS ########
    {
      name: 'views',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },
    {
      name: 'likes',
      type: 'number',
      defaultValue: 0,
      admin: {
        position: 'sidebar',
        readOnly: true,
      },
    },

    // ################# IS FEATRE CHECK BOX  #############################################
    {
      name: 'isFeatured',
      type: 'checkbox',
      label: 'Featured articles',
      admin: {
        position: 'sidebar',
        description: 'Only one articles can be featured at a time.',
      },
      validate: async (value, { data, operation, req }) => {
        if (!value) return true

        const id = (data as { id?: string })?.id

        const existingFeatured = await req.payload.find({
          collection: 'articles',
          where: {
            isFeatured: {
              equals: true,
            },
            id: {
              not_equals: id || '',
            },
          },
          limit: 1,
        })

        if (existingFeatured?.docs?.length > 0) {
          const existing = existingFeatured.docs[0]
          const existingTitle = existing?.title || 'Untitled articles'
          const existingId = existing?.id

          return ` "${existingTitle}" (ID: ${existingId}) is already marked as featured. Only one articles can be featured at a time.`
        }

        return true
      },
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
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
