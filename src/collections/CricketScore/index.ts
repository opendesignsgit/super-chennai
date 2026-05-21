import type { CollectionConfig } from 'payload'

import { Banner } from '@/blocks/Banner/config'
import { Code } from '@/blocks/Code/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'
import { VideoBlock } from '@/blocks/VideoBlock/config'
import { SEOFieldSchema } from '@/fields/seo'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { slugField } from 'src/fields/slug'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateDelete, revalidatePost } from './hooks/revalidatePost'

export const CricketScore: CollectionConfig<'cricketScore'> = {
  slug: 'cricketScore',
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
       group: 'Main collections',
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'cricketScore',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'cricketScore',
        req,
      }),
    // useAsTitle: 'title',
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
                        // ############################ INSER WA WAITING DETAIL PGE BLOCKS ##################

                        Banner,
                        Code,
                        MediaBlock,
                        VideoBlock,
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
              localized: true,
            },
          ],
          label: 'Content',
        },

        //######### FIELD CONTENTS #################

        {
          name: 'cricketScore',
          label: 'cricketScore',
          fields: [
            // #################################
            // BASIC CONTENT
            // #################################

            {
              name: 'title',
              type: 'text',
              required: true,
            },

            {
              name: 'description',
              type: 'textarea',
            },

            {
              name: 'IPLimage',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },

            {
              name: 'matchDetails',
              type: 'group',
              label: 'IPL Match Details',

              fields: [
                {
                  name: 'duration',
                  type: 'text',
                  label: 'Match Duration',
                  admin: {
                    placeholder: 'e.g. 3 hours',
                  },
                },

                {
                  name: 'matchTime',
                  label: 'Match Time',
                  type: 'date',
                  admin: {
                    date: {
                      pickerAppearance: 'timeOnly',
                      timeFormat: 'hh:mm a',
                    },
                    placeholder: 'Select match time (ex: 07:30 PM)',
                  },
                  required: false,
                },

                {
                  name: 'ageLimit',
                  type: 'text',
                  label: 'Minimum Age Limit',
                  admin: {
                    placeholder: 'e.g. 5+',
                  },
                },

                {
                  name: 'languages',
                  type: 'relationship',
                  relationTo: 'iplLanguages',
                  hasMany: true,
                  label: 'Commentary Languages',
                },

                {
                  name: 'matchType',
                  type: 'text',
                  label: 'Match Type',
                  admin: {
                    placeholder: 'e.g. League Match, Qualifier, Final...',
                  },
                },

                {
                  name: 'stadiumLocation',
                  type: 'relationship',
                  relationTo: 'iplLocations',
                  label: 'Stadium Location',
                  required: true,
                  admin: {
                    description: 'Select the stadium or venue location',
                  },
                },

                {
                  name: 'freeStreaming',
                  type: 'checkbox',
                  label: 'Free Streaming Available',
                  admin: {
                    description: 'Check if the match can be streamed for free.',
                    position: 'sidebar',
                  },
                  defaultValue: false,
                },

                {
                  name: 'familyFriendly',
                  type: 'checkbox',
                  label: 'Family Friendly',
                  admin: {
                    description: 'Suitable for family audience.',
                    position: 'sidebar',
                  },
                  defaultValue: false,
                },
              ],
            },
          ],
        },
        {
          fields: [
            {
              name: 'relatedevents',
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
              relationTo: 'events',
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
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
            {
              name: 'schema',
              type: 'json',
              label: 'Structured Data (JSON-LD)',
              admin: {
                description: 'Paste valid JSON-LD schema (Event schema for SEO)',
              },
            },
            SEOFieldSchema,
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
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
