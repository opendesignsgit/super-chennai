import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateWhatsApChennai, revalidateWhatsApChennaiDelete } from './hooks/revalidatePost'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from 'src/fields/slug'

import { AboutTrendingBlock } from './blocks/AboutTrending/config'
import { EventQuickDetails } from '@/blocks/EventQuickDetails/config'

export const WhatsApChennai: CollectionConfig<'whats-ap-chennai'> = {
  slug: 'whats-ap-chennai',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },

  defaultPopulate: {
    title: true,
    slug: true,
    heroImage: true,
    FeaturedImage: true,
    meta: {
      image: true,
      description: true,
      title: true,
    },
    populatedAuthors: {
      id: true,
      name: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    group: '📖 Guides & Stories',
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'whats-ap-chennai',
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'whats-ap-chennai',
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
        // ===============================
        // TAB 1 – PAGE CONTENT
        // ===============================
        {
          label: 'Page Content',
          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'FeaturedImage',
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
                features: ({ rootFeatures }) => [
                  ...rootFeatures,
                  HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  BlocksFeature({
                    blocks: [AboutTrendingBlock, EventQuickDetails],
                  }),
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                  HorizontalRuleFeature(),
                ],
              }),
              required: true,
            },
          ],
        },

        // ===============================
        // TAB 2 – PAGE CONTENT DETAILS
        // ===============================

        {
          name: 'details',

          label: 'Event Details',
          fields: [
            {
              name: 'duration',
              type: 'text',
              label: 'Duration (in hours)',
              admin: {
                placeholder: 'e.g. 2 hours',
              },
            },
            {
              name: 'eventTime',
              label: 'Event Time',
              type: 'date',
              admin: {
                date: {
                  pickerAppearance: 'timeOnly',
                  timeFormat: 'hh:mm a',
                },
                placeholder: 'Select event time (ex: 08:00 PM)',
              },
              required: false,
            },

            {
              name: 'ageLimit',
              type: 'text',
              label: 'Minimum Age Limit',
              admin: {
                placeholder: 'e.g. 12',
              },
            },
            {
              name: 'language',
              type: 'select',
              hasMany: true,
              label: 'Languages',
              options: [
                // 🌐 Indian Languages
                { label: 'Tamil', value: 'tamil' },
                { label: 'Telugu', value: 'telugu' },
                { label: 'Malayalam', value: 'malayalam' },
                { label: 'Kannada', value: 'kannada' },
                { label: 'Hindi', value: 'hindi' },
                { label: 'Bengali', value: 'bengali' },
                { label: 'Marathi', value: 'marathi' },
                { label: 'Gujarati', value: 'gujarati' },
                { label: 'Punjabi', value: 'punjabi' },
                { label: 'Odia', value: 'odia' },
                { label: 'Urdu', value: 'urdu' },
                { label: 'Sanskrit', value: 'sanskrit' },

                // 🌍 Major Global Languages
                { label: 'English', value: 'english' },
                { label: 'Spanish', value: 'spanish' },
                { label: 'French', value: 'french' },
                { label: 'German', value: 'german' },
                { label: 'Italian', value: 'italian' },
                { label: 'Portuguese', value: 'portuguese' },
                { label: 'Russian', value: 'russian' },
                { label: 'Chinese (Mandarin)', value: 'chinese' },
                { label: 'Japanese', value: 'japanese' },
                { label: 'Korean', value: 'korean' },
                { label: 'Arabic', value: 'arabic' },
                { label: 'Turkish', value: 'turkish' },
                { label: 'Persian (Farsi)', value: 'persian' },
                { label: 'Hebrew', value: 'hebrew' },
                { label: 'Thai', value: 'thai' },
                { label: 'Vietnamese', value: 'vietnamese' },
                { label: 'Indonesian', value: 'indonesian' },
                { label: 'Filipino (Tagalog)', value: 'filipino' },
                { label: 'Malay', value: 'malay' },
                { label: 'Swahili', value: 'swahili' },
                { label: 'Dutch', value: 'dutch' },
                { label: 'Greek', value: 'greek' },
                { label: 'Polish', value: 'polish' },
                { label: 'Swedish', value: 'swedish' },
                { label: 'Norwegian', value: 'norwegian' },
                { label: 'Finnish', value: 'finnish' },
                { label: 'Danish', value: 'danish' },
                { label: 'Czech', value: 'czech' },
                { label: 'Hungarian', value: 'hungarian' },
                { label: 'Romanian', value: 'romanian' },
                { label: 'Ukrainian', value: 'ukrainian' },
                { label: 'Bulgarian', value: 'bulgarian' },
                { label: 'Serbian', value: 'serbian' },
                { label: 'Croatian', value: 'croatian' },
                { label: 'Slovak', value: 'slovak' },
                { label: 'Slovenian', value: 'slovenian' },
                { label: 'Latvian', value: 'latvian' },
                { label: 'Lithuanian', value: 'lithuanian' },
                { label: 'Estonian', value: 'estonian' },
                { label: 'Icelandic', value: 'icelandic' },
                { label: 'Irish', value: 'irish' },
                { label: 'Welsh', value: 'welsh' },
                { label: 'Scottish Gaelic', value: 'scottish_gaelic' },
                { label: 'Albanian', value: 'albanian' },
                { label: 'Bosnian', value: 'bosnian' },
                { label: 'Macedonian', value: 'macedonian' },
                { label: 'Armenian', value: 'armenian' },
                { label: 'Georgian', value: 'georgian' },
                { label: 'Kazakh', value: 'kazakh' },
                { label: 'Uzbek', value: 'uzbek' },
                { label: 'Turkmen', value: 'turkmen' },
                { label: 'Tajik', value: 'tajik' },
                { label: 'Nepali', value: 'nepali' },
                { label: 'Sinhala', value: 'sinhala' },
                { label: 'Burmese', value: 'burmese' },
                { label: 'Khmer', value: 'khmer' },
                { label: 'Lao', value: 'lao' },
                { label: 'Mongolian', value: 'mongolian' },
                { label: 'Pashto', value: 'pashto' },
                { label: 'Somali', value: 'somali' },
                { label: 'Amharic', value: 'amharic' },
                { label: 'Yoruba', value: 'yoruba' },
                { label: 'Hausa', value: 'hausa' },
                { label: 'Zulu', value: 'zulu' },
                { label: 'Afrikaans', value: 'afrikaans' },
                { label: 'Maori', value: 'maori' },
                { label: 'Samoan', value: 'samoan' },
                { label: 'Tongan', value: 'tongan' },
                { label: 'Fijian', value: 'fijian' },
              ],
              admin: {
                isClearable: true,
                description: 'Select one or more languages spoken or used in this event',
              },
            },

            {
              name: 'location',
              type: 'relationship',
              relationTo: 'whatsapp-chennai-locations',
              label: 'Event Location',

              admin: {
                description: 'Select the Chennai location',
              },
            },
            {
              name: 'isFree',
              type: 'checkbox',
              label: 'Free Entry',
              admin: {
                description: 'Check if this event has free entry (no ticket required).',
                position: 'sidebar',
              },
              defaultValue: false,
            },
            {
              name: 'familyFriendly',
              type: 'checkbox',
              label: 'Family Friendly',
              admin: {
                description: 'Check if this event is suitable for families/children.',
                position: 'sidebar',
              },
              defaultValue: false,
            },
            {
              name: 'eventDates',
              type: 'array',
              label: 'Event Dates',
              labels: {
                singular: 'Event Date',
                plural: 'Event Dates',
              },
              admin: {
                description:
                  'Add one or more dates for the event (example: show multiple dates if the event happens on different days)',
              },
              fields: [
                {
                  name: 'date',
                  type: 'date',
                  admin: {
                    date: {
                      pickerAppearance: 'dayOnly',
                    },
                    placeholder: 'Select event date',
                  },
                },
              ],
            },
          ],
        },

        // ===============================
        // TAB 2 – SEO (DUPLICATE REMOVED)
        // ===============================
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({ hasGenerateFn: true }),
            MetaImageField({ relationTo: 'media' }),
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
                description: 'Paste valid JSON-LD schema (Event schema for Google SEO)',
              },
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
    afterChange: [revalidateWhatsApChennai],
    afterRead: [populateAuthors],
    afterDelete: [revalidateWhatsApChennaiDelete],
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
