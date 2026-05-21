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

export const Arattai: CollectionConfig<'arattai'> = {
  slug: 'arattai',
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
          collection: 'arattai',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'arattai',
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
          name: 'Arattai',
          label: 'Arattai',
          fields: [
            /* =========================================================
                BASIC INFO
             ========================================================= */

            {
              name: 'title',
              type: 'text',
              required: true,
              localized: true,
            },

            {
              name: 'shortDescription',
              type: 'textarea',
              required: true,
              localized: true,
            },

            {
              name: 'speakerName',
              type: 'text',
              required: true,
            },

            {
              name: 'speakerDesignation',
              type: 'text',
            },

            {
              name: 'speakerImage',
              type: 'upload',
              relationTo: 'media',
            },

            /* =========================================================
                EVENT DETAILS
             ========================================================= */

            {
              name: 'eventDetails',
              type: 'group',

              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'eventDate',
                      type: 'date',
                      required: true,
                      admin: {
                        width: '50%',
                        date: {
                          pickerAppearance: 'dayAndTime',
                        },
                      },
                    },

                    {
                      name: 'registrationDeadline',
                      type: 'date',
                      admin: {
                        width: '50%',
                        date: {
                          pickerAppearance: 'dayAndTime',
                        },
                      },
                    },
                  ],
                },

                {
                  type: 'row',
                  fields: [
                    {
                      name: 'venue',
                      type: 'text',
                      admin: {
                        width: '50%',
                      },
                    },

                    {
                      name: 'city',
                      type: 'text',
                      admin: {
                        width: '50%',
                      },
                    },
                  ],
                },

                {
                  name: 'googleMapLink',
                  type: 'text',
                },

                {
                  name: 'eventMode',
                  type: 'select',
                  defaultValue: 'offline',

                  options: [
                    {
                      label: 'Offline',
                      value: 'offline',
                    },
                    {
                      label: 'Online',
                      value: 'online',
                    },
                    {
                      label: 'Hybrid',
                      value: 'hybrid',
                    },
                  ],
                },
              ],
            },

            /* =========================================================
                RICH CONTENT
             ========================================================= */

            // {
            //   name: 'content',
            //   type: 'richText',
            //   editor: lexicalEditor({
            //     features: ({ rootFeatures }) => {
            //       return [
            //         ...rootFeatures,
            //         HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            //         BlocksFeature({
            //           blocks: [
            //             // ############################ INSER WA WAITING DETAIL PGE BLOCKS ##################

            //             Banner,
            //             Code,
            //             MediaBlock,
            //             VideoBlock,
            //           ],
            //         }),
            //         FixedToolbarFeature(),
            //         InlineToolbarFeature(),
            //         HorizontalRuleFeature(),
            //       ]
            //     },
            //   }),
            //   label: false,
            //   required: true,
            //   localized: true,
            // },

            /* =========================================================
                REGISTRATION SETTINGS
             ========================================================= */

            {
              name: 'registrationSettings',
              type: 'group',

              fields: [
                {
                  name: 'isRegistrationOpen',
                  type: 'checkbox',
                  defaultValue: true,
                },

                {
                  name: 'enableOTP',
                  type: 'checkbox',
                  defaultValue: true,
                },

                {
                  name: 'maxRegistrations',
                  type: 'number',
                },

                {
                  name: 'showOrganisationField',
                  type: 'checkbox',
                  defaultValue: true,
                },

                {
                  name: 'thankYouMessage',
                  type: 'textarea',
                },
              ],
            },

            /* =========================================================
                DYNAMIC FORM FIELDS
             ========================================================= */

            {
              name: 'customFields',
              type: 'array',

              fields: [
                {
                  type: 'row',

                  fields: [
                    {
                      name: 'label',
                      type: 'text',
                      required: true,
                      admin: {
                        width: '30%',
                      },
                    },

                    {
                      name: 'fieldName',
                      type: 'text',
                      required: true,
                      admin: {
                        width: '30%',
                      },
                    },

                    {
                      name: 'fieldType',
                      type: 'select',
                      required: true,

                      admin: {
                        width: '20%',
                      },

                      options: [
                        {
                          label: 'Text',
                          value: 'text',
                        },
                        {
                          label: 'Email',
                          value: 'email',
                        },
                        {
                          label: 'Number',
                          value: 'number',
                        },
                        {
                          label: 'Textarea',
                          value: 'textarea',
                        },
                        {
                          label: 'Select',
                          value: 'select',
                        },
                      ],
                    },

                    {
                      name: 'required',
                      type: 'checkbox',

                      admin: {
                        width: '20%',
                      },
                    },
                  ],
                },

                {
                  name: 'placeholder',
                  type: 'text',
                },

                {
                  name: 'options',
                  type: 'array',

                  admin: {
                    condition: (_, siblingData) => siblingData?.fieldType === 'select',
                  },

                  fields: [
                    {
                      name: 'label',
                      type: 'text',
                    },

                    {
                      name: 'value',
                      type: 'text',
                    },
                  ],
                },
              ],
            },

            /* =========================================================
                EMAIL SETTINGS
             ========================================================= */

            {
              name: 'emailSettings',
              type: 'group',

              fields: [
                {
                  name: 'adminEmail',
                  type: 'email',
                },

                {
                  name: 'fromEmail',
                  type: 'email',
                },

                {
                  name: 'userConfirmationSubject',
                  type: 'text',
                },

                {
                  name: 'adminNotificationSubject',
                  type: 'text',
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
