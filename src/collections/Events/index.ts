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

import EventDetails from 'src/blocks/InnerPage/SharedBlocks/EventDetails/config'
import { slugField } from 'src/fields/slug'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
export const EventsContent = (slug: string, singular: string, plural: string): Block => ({
  slug,
  labels: {
    singular,
    plural,
  },
  fields: [
    // {
    //   name: 'title',
    //   type: 'text',
    //   required: true,
    // },
    // {
    //   name: 'events',
    //   type: 'array',
    //   label: plural,
    //   minRows: 1,
    //   fields: [
    //     {
    //       name: 'image',
    //       type: 'upload',
    //       relationTo: 'media',
    //       required: true,
    //     },
    //     {
    //       name: 'title',
    //       type: 'text',
    //       required: true,
    //     },
    //     {
    //       name: 'description',
    //       type: 'textarea',
    //     },
    //     {
    //       name: 'time',
    //       type: 'text',
    //     },
    //     {
    //       name: 'date',
    //       type: 'number',
    //       required: true,
    //       min: 1,
    //       max: 31,
    //     },
    //     {
    //       name: 'month',
    //       type: 'select',
    //       required: true,
    //       options: [
    //         'january',
    //         'february',
    //         'march',
    //         'april',
    //         'may',
    //         'june',
    //         'july',
    //         'august',
    //         'september',
    //         'october',
    //         'november',
    //         'december',
    //       ],
    //       admin: {
    //         isClearable: false,
    //         isSortable: true,
    //       },
    //     },
    //     {
    //       name: 'year',
    //       type: 'number',
    //       required: true,
    //       min: 2024,
    //       max: 2100,
    //     },
    //     {
    //       name: 'category',
    //       type: 'text',
    //     },
    //     {
    //       name: 'link',
    //       type: 'text',
    //     },
    //     {
    //       name: 'address',
    //       type: 'textarea',
    //       label: 'Address',
    //       admin: {
    //         description: 'Full address or venue location for the event',
    //       },
    //     },
    //     {
    //       name: 'eventType',
    //       type: 'text',
    //       label: 'Event Type',
    //       required: true,
    //       admin: {
    //         placeholder: 'e.g. Music, Workshop, Festival...',
    //         description: 'Type the event type manually',
    //       },
    //     },
    //   ],
    // },
  ],
})

export const Events: CollectionConfig<'events'> = {
  slug: 'events',
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
          collection: 'events',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'events',
        req,
      }),
    // useAsTitle: 'title',
  },

  fields: [
    // {
    //   name: 'title',
    //   type: 'text',
    //   required: true,
    // },

    // // ################# IS FEATRE CHECK BOX  #############################################
    // {
    //   name: 'isFeatured',
    //   type: 'checkbox',
    //   label: 'Featured Event',
    //   admin: {
    //     description: 'Only one event can be featured at a time.',
    //   },
    //   validate: async (value, { data, operation, req }) => {
    //     if (!value) return true // unchecked is always valid

    //     const id = (data as { id?: string })?.id

    //     const existingFeatured = await req.payload.find({
    //       collection: 'events',
    //       where: {
    //         isFeatured: {
    //           equals: true,
    //         },
    //         id: {
    //           not_equals: id || '',
    //         },
    //       },
    //       limit: 1,
    //     })

    //     if (existingFeatured?.docs?.length > 0) {
    //       const existing = existingFeatured.docs[0]
    //       const existingTitle = existing?.title || 'Untitled Event'
    //       const existingId = existing?.id

    //       return ` "${existingTitle}" (ID: ${existingId}) is already marked as featured. Only one event can be featured at a time.`
    //     }

    //     return true
    //   },
    // },

    // {
    //   type: 'tabs',
    //   tabs: [
    //     {
    //       fields: [
    //         //####################### BANNER CONTENT  ############################################
    //         {
    //           name: 'heroImage',
    //           type: 'upload',
    //           relationTo: 'media',
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
    //                     // ############################ INSER WA WAITING DETAIL PGE BLOCKS ##################
    //                     EventDetails,
    //                   ],
    //                 }),
    //                 FixedToolbarFeature(),
    //                 InlineToolbarFeature(),
    //                 HorizontalRuleFeature(),
    //               ]
    //             },
    //           }),
    //           label: false,
    //           required: true,
    //         },
    //       ],
    //       label: 'Content',
    //     },

    //     //######### FIELD CONTENTS #################
    //     {
    //       name: 'event',
    //       label: 'Events',
    //       fields: [
    //         {
    //           name: 'image',
    //           type: 'upload',
    //           relationTo: 'media',
    //           required: true,
    //         },

    //         {
    //           name: 'singerName',
    //           label: 'Singer Name',
    //           type: 'text',
    //           maxLength: 100,
    //           admin: {
    //             description: 'Maximum 100 characters',
    //             placeholder: 'Enter artist name',
    //           },
    //         },
    //         {
    //           name: 'artistDesignation',
    //           label: 'Artist Designation',
    //           type: 'text',
    //           required: false,
    //           maxLength: 300,
    //           admin: {
    //             placeholder: 'e.g., Singer, Guitarist, Director, etc.',
    //             description: 'Specify the role/designation of the artist in the event',
    //           },
    //         },

    //         {
    //           name: 'title',
    //           type: 'text',
    //           required: true,
    //           maxLength: 200,
    //           admin: {
    //             description: 'Maximum 200 characters allowed',
    //           },
    //         },
    //         {
    //           name: 'description',
    //           type: 'textarea',
    //           maxLength: 500,
    //           admin: {
    //             description: 'Maximum 500 characters allowed',
    //           },
    //         },

    //         {
    //           name: 'eventDate',
    //           type: 'date',
    //           required: true,
    //           admin: {
    //             date: {
    //               pickerAppearance: 'dayOnly',
    //             },
    //             placeholder: 'Select event date',
    //             description: 'Choose full date (day, month, year)',
    //           },
    //         },
    //         {
    //           name: 'performerRole',
    //           type: 'text',
    //           maxLength: 30,
    //           admin: {
    //             description: 'Maximum 30 characters allowed',
    //           },
    //         },

    //         {
    //           name: 'details',
    //           type: 'group',
    //           label: 'Event Details',
    //           fields: [
    //             {
    //               name: 'duration',
    //               type: 'text',
    //               label: 'Duration (in hours)',
    //               admin: {
    //                 placeholder: 'e.g. 2 hours',
    //               },
    //             },
    //             {
    //               name: 'ageLimit',
    //               type: 'text',
    //               label: 'Minimum Age Limit',
    //               admin: {
    //                 placeholder: 'e.g. 12',
    //               },
    //             },
    //             {
    //               name: 'language',
    //               type: 'select',
    //               hasMany: true,
    //               label: 'Languages',
    //               options: [
    //                 // 🌐 Indian Languages
    //                 { label: 'Tamil', value: 'tamil' },
    //                 { label: 'Telugu', value: 'telugu' },
    //                 { label: 'Malayalam', value: 'malayalam' },
    //                 { label: 'Kannada', value: 'kannada' },
    //                 { label: 'Hindi', value: 'hindi' },
    //                 { label: 'Bengali', value: 'bengali' },
    //                 { label: 'Marathi', value: 'marathi' },
    //                 { label: 'Gujarati', value: 'gujarati' },
    //                 { label: 'Punjabi', value: 'punjabi' },
    //                 { label: 'Odia', value: 'odia' },
    //                 { label: 'Urdu', value: 'urdu' },
    //                 { label: 'Sanskrit', value: 'sanskrit' },

    //                 // 🌍 Major Global Languages
    //                 { label: 'English', value: 'english' },
    //                 { label: 'Spanish', value: 'spanish' },
    //                 { label: 'French', value: 'french' },
    //                 { label: 'German', value: 'german' },
    //                 { label: 'Italian', value: 'italian' },
    //                 { label: 'Portuguese', value: 'portuguese' },
    //                 { label: 'Russian', value: 'russian' },
    //                 { label: 'Chinese (Mandarin)', value: 'chinese' },
    //                 { label: 'Japanese', value: 'japanese' },
    //                 { label: 'Korean', value: 'korean' },
    //                 { label: 'Arabic', value: 'arabic' },
    //                 { label: 'Turkish', value: 'turkish' },
    //                 { label: 'Persian (Farsi)', value: 'persian' },
    //                 { label: 'Hebrew', value: 'hebrew' },
    //                 { label: 'Thai', value: 'thai' },
    //                 { label: 'Vietnamese', value: 'vietnamese' },
    //                 { label: 'Indonesian', value: 'indonesian' },
    //                 { label: 'Filipino (Tagalog)', value: 'filipino' },
    //                 { label: 'Malay', value: 'malay' },
    //                 { label: 'Swahili', value: 'swahili' },
    //                 { label: 'Dutch', value: 'dutch' },
    //                 { label: 'Greek', value: 'greek' },
    //                 { label: 'Polish', value: 'polish' },
    //                 { label: 'Swedish', value: 'swedish' },
    //                 { label: 'Norwegian', value: 'norwegian' },
    //                 { label: 'Finnish', value: 'finnish' },
    //                 { label: 'Danish', value: 'danish' },
    //                 { label: 'Czech', value: 'czech' },
    //                 { label: 'Hungarian', value: 'hungarian' },
    //                 { label: 'Romanian', value: 'romanian' },
    //                 { label: 'Ukrainian', value: 'ukrainian' },
    //                 { label: 'Bulgarian', value: 'bulgarian' },
    //                 { label: 'Serbian', value: 'serbian' },
    //                 { label: 'Croatian', value: 'croatian' },
    //                 { label: 'Slovak', value: 'slovak' },
    //                 { label: 'Slovenian', value: 'slovenian' },
    //                 { label: 'Latvian', value: 'latvian' },
    //                 { label: 'Lithuanian', value: 'lithuanian' },
    //                 { label: 'Estonian', value: 'estonian' },
    //                 { label: 'Icelandic', value: 'icelandic' },
    //                 { label: 'Irish', value: 'irish' },
    //                 { label: 'Welsh', value: 'welsh' },
    //                 { label: 'Scottish Gaelic', value: 'scottish_gaelic' },
    //                 { label: 'Albanian', value: 'albanian' },
    //                 { label: 'Bosnian', value: 'bosnian' },
    //                 { label: 'Macedonian', value: 'macedonian' },
    //                 { label: 'Armenian', value: 'armenian' },
    //                 { label: 'Georgian', value: 'georgian' },
    //                 { label: 'Kazakh', value: 'kazakh' },
    //                 { label: 'Uzbek', value: 'uzbek' },
    //                 { label: 'Turkmen', value: 'turkmen' },
    //                 { label: 'Tajik', value: 'tajik' },
    //                 { label: 'Nepali', value: 'nepali' },
    //                 { label: 'Sinhala', value: 'sinhala' },
    //                 { label: 'Burmese', value: 'burmese' },
    //                 { label: 'Khmer', value: 'khmer' },
    //                 { label: 'Lao', value: 'lao' },
    //                 { label: 'Mongolian', value: 'mongolian' },
    //                 { label: 'Pashto', value: 'pashto' },
    //                 { label: 'Somali', value: 'somali' },
    //                 { label: 'Amharic', value: 'amharic' },
    //                 { label: 'Yoruba', value: 'yoruba' },
    //                 { label: 'Hausa', value: 'hausa' },
    //                 { label: 'Zulu', value: 'zulu' },
    //                 { label: 'Afrikaans', value: 'afrikaans' },
    //                 { label: 'Maori', value: 'maori' },
    //                 { label: 'Samoan', value: 'samoan' },
    //                 { label: 'Tongan', value: 'tongan' },
    //                 { label: 'Fijian', value: 'fijian' },
    //               ],
    //               admin: {
    //                 isClearable: true,
    //                 description: 'Select one or more languages spoken or used in this event',
    //               },
    //             },

    //             {
    //               name: 'genre',
    //               type: 'text',
    //               label: 'Genre',
    //               admin: {
    //                 placeholder: 'e.g. Comedy, Classical, Workshop...',
    //               },
    //             },
    //             {
    //               name: 'location',
    //               type: 'relationship',
    //               relationTo: 'locations', // ✅ assumes you already have a "locations" collection
    //               label: 'Event Location',
    //               required: true,
    //               admin: {
    //                 description: 'Select the venue or location from the Locations collection',
    //               },
    //             },
    //             {
    //               name: 'isFree',
    //               type: 'checkbox',
    //               label: 'Free Entry',
    //               admin: {
    //                 description: 'Check if this event has free entry (no ticket required).',
    //                 position: 'sidebar',
    //               },
    //               defaultValue: false,
    //             },
    //             {
    //               name: 'familyFriendly',
    //               type: 'checkbox',
    //               label: 'Family Friendly',
    //               admin: {
    //                 description: 'Check if this event is suitable for families/children.',
    //                 position: 'sidebar',
    //               },
    //               defaultValue: false,
    //             },
    //           ],
    //         },

    //         {
    //           name: 'eventsCategory',
    //           type: 'relationship',
    //           relationTo: 'eventsCategories',
    //           hasMany: true,
    //           required: true,
    //         },

    //         {
    //           name: 'link',
    //           type: 'text',
    //         },
    //         {
    //           name: 'address',
    //           type: 'textarea',
    //           label: 'Address',
    //           maxLength: 100,
    //           admin: {
    //             description:
    //               'Full address or venue location for the event(Maximum 100 characters allowed)',
    //           },
    //         },
    //       ],
    //     },
    //     {
    //       fields: [
    //         {
    //           name: 'relatedevents',
    //           type: 'relationship',
    //           admin: {
    //             position: 'sidebar',
    //           },
    //           filterOptions: ({ id }) => {
    //             return {
    //               id: {
    //                 not_in: [id],
    //               },
    //             }
    //           },
    //           hasMany: true,
    //           relationTo: 'events',
    //         },
    //         {
    //           name: 'categories',
    //           type: 'relationship',
    //           admin: {
    //             position: 'sidebar',
    //           },
    //           hasMany: true,
    //           relationTo: 'categories',
    //         },
    //       ],
    //       label: 'Meta',
    //     },
    //     {
    //       name: 'meta',
    //       label: 'SEO',
    //       fields: [
    //         OverviewField({
    //           titlePath: 'meta.title',
    //           descriptionPath: 'meta.description',
    //           imagePath: 'meta.image',
    //         }),
    //         MetaTitleField({
    //           hasGenerateFn: true,
    //         }),
    //         MetaImageField({
    //           relationTo: 'media',
    //         }),

    //         MetaDescriptionField({}),
    //         PreviewField({
    //           hasGenerateFn: true,
    //           titlePath: 'meta.title',
    //           descriptionPath: 'meta.description',
    //         }),
    //       ],
    //     },
    //   ],
    // },
    // {
    //   name: 'publishedAt',
    //   type: 'date',
    //   admin: {
    //     date: {
    //       pickerAppearance: 'dayAndTime',
    //     },
    //     position: 'sidebar',
    //   },
    //   hooks: {
    //     beforeChange: [
    //       ({ siblingData, value }) => {
    //         if (siblingData._status === 'published' && !value) {
    //           return new Date()
    //         }
    //         return value
    //       },
    //     ],
    //   },
    // },
    // {
    //   name: 'authors',
    //   type: 'relationship',
    //   admin: {
    //     position: 'sidebar',
    //   },
    //   hasMany: true,
    //   relationTo: 'users',
    // },
    // {
    //   name: 'populatedAuthors',
    //   type: 'array',
    //   access: {
    //     update: () => false,
    //   },
    //   admin: {
    //     disabled: true,
    //     readOnly: true,
    //   },
    //   fields: [
    //     {
    //       name: 'id',
    //       type: 'text',
    //     },
    //     {
    //       name: 'name',
    //       type: 'text',
    //     },
    //   ],
    // },

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
