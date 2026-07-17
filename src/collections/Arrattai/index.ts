import type { CollectionConfig } from 'payload'

import { Banner } from '@/blocks/Banner/config'
import { Code } from '@/blocks/Code/config'
import ContentZoneCarousel from '@/blocks/HomePage/ContentZoneCarousel/config'
import { CricketScoreBlock } from '@/blocks/HomePage/CricketScoreBlock/config'
import { ExploreBlock } from '@/blocks/HomePage/Explore/config'
import { FunChennaiBlock } from '@/blocks/HomePage/funChennai/config'
import Infography from '@/blocks/HomePage/infography/config'
import ChennaiInvestmentsBlock from '@/blocks/HomePage/Investments/config'
import SpotlightGallery from '@/blocks/HomePage/leftContentRightSlider/config'
import { socialReelSlider } from '@/blocks/HomePage/SocialChennai/config'
import { StartupChennaiBlock } from '@/blocks/HomePage/StartupChennai/config'
import { TrendingChennaiSlider } from '@/blocks/HomePage/TrendingChennaiSlider/config'
import TwoColumnFeatureBlock from '@/blocks/HomePage/TwoColumnFeatureBlock/config'
import BecameAVolunteerBlock from '@/blocks/HomePage/Volunteer/config'
import SecondSectionBlock from '@/blocks/HomePage/WelcomeSction/config'
import AllEvents from '@/blocks/MainPages/Events/config'
import { innovateSlider } from '@/blocks/MainPages/Innovate/TabWithSlider/config'
import investmentCategoryListBlock from '@/blocks/MainPages/Invest/InvestCategory/config'
import ChennaiLifeEssentialSection from '@/blocks/MainPages/Live/ChennaiLifeEssentials/config'
import liveIntrorSection from '@/blocks/MainPages/SharedBlocks/IntroTextWithImage/config'
import VisitCategory from '@/blocks/MainPages/Visit/VisitCategory/config'
import volunteerBecameListBlock from '@/blocks/MainPages/Volunteer/Volunteers/config'
import TextHoverImageSection from '@/blocks/MainPages/Work/Works/config'
import { MediaBlock } from '@/blocks/MediaBlock/config'
import { PopupBannerBlock } from '@/blocks/Popup/config'
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
import { GalleryBlock } from '@/blocks/MediaHighlights/config'
import { EventRegistrationFormBlock } from './components/RegistrationForm/config'

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
    group: '🎪 Community',
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
              name: 'mobileImage',
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
                        Banner,
                        Code,
                        MediaBlock,
                        VideoBlock,
                        EventRegistrationFormBlock
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
            },

            {
              name: 'shortDescription',
              type: 'textarea',
            },

            {
              name: 'speakerName',
              type: 'text',
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
          name: 'formSettings',
          label: 'formSettings',

          fields: [
            /* =========================================================
                REGISTRATION SETTINGS
             ========================================================= */

            {
              name: 'regSettings',
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
              label: 'Custom Form Fields',
              type: 'relationship',
              relationTo: 'arattai-form-fields',
              hasMany: true,
            },
          ],
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
