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
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'events',
      type: 'array',
      label: plural,
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
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
          name: 'time',
          type: 'text',
        },
        {
          name: 'date',
          type: 'number',
          required: true,
          min: 1,
          max: 31,
        },
        {
          name: 'month',
          type: 'select',
          required: true,
          options: [
            'january',
            'february',
            'march',
            'april',
            'may',
            'june',
            'july',
            'august',
            'september',
            'october',
            'november',
            'december',
          ],
          admin: {
            isClearable: false,
            isSortable: true,
          },
        },
        {
          name: 'year',
          type: 'number',
          required: true,
          min: 2024,
          max: 2100,
        },
        {
          name: 'category',
          type: 'text',
        },
        {
          name: 'link',
          type: 'text',
        },
        {
          name: 'address',
          type: 'textarea',
          label: 'Address',
          admin: {
            description: 'Full address or venue location for the event',
          },
        },
        {
          name: 'eventType',
          type: 'text',
          label: 'Event Type',
          required: true,
          admin: {
            placeholder: 'e.g. Music, Workshop, Festival...',
            description: 'Type the event type manually',
          },
        },
      ],
    },
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
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    // ################# IS FEATRE CHECK BOX  #############################################
    {
      name: 'isFeatured',
      type: 'checkbox',
      label: 'Featured Event',
      admin: {
        description: 'Only one event can be featured at a time.',
      },
      validate: async (value, { data, operation, req }) => {
        if (!value) return true // unchecked is always valid

        const id = (data as { id?: string })?.id

        const existingFeatured = await req.payload.find({
          collection: 'events',
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
          const existingTitle = existing?.title || 'Untitled Event'
          const existingId = existing?.id

          return ` "${existingTitle}" (ID: ${existingId}) is already marked as featured. Only one event can be featured at a time.`
        }

        return true
      },
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
                        EventDetails,
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
          name: 'event',
          label: 'Events',
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },

            {
              name: 'artistImage',
              label: 'Artist Image',
              type: 'upload',
              relationTo: 'media',
              required: false,
              admin: {
                description: 'Upload an image of the performing artist',
              },
            },
            {
              name: 'singerName',
              label: 'Singer Name',
              type: 'text',
              maxLength: 100,
              admin: {
                description: 'Maximum 100 characters',
                placeholder: 'Enter artist name',
              },
            },
            {
              name: 'artistDesignation',
              label: 'Artist Designation',
              type: 'text',
              required: false,
              maxLength: 300,
              admin: {
                placeholder: 'e.g., Singer, Guitarist, Director, etc.',
                description: 'Specify the role/designation of the artist in the event',
              },
            },

            {
              name: 'title',
              type: 'text',
              required: true,
              maxLength: 200,
              admin: {
                description: 'Maximum 200 characters allowed',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              maxLength: 200,
              admin: {
                description: 'Maximum 200 characters allowed',
              },
            },

            {
              name: 'eventDate',
              type: 'date',
              required: true,
              admin: {
                date: {
                  pickerAppearance: 'dayOnly',
                },
                placeholder: 'Select event date',
                description: 'Choose full date (day, month, year)',
              },
            },
            {
              name: 'performerRole',
              type: 'text',
              maxLength: 30,
              admin: {
                description: 'Maximum 30 characters allowed',
              },
            },

            {
              name: 'details',
              type: 'group',
              fields: [
                { name: 'duration', type: 'text' },
                { name: 'ageLimit', type: 'text' },
                { name: 'language', type: 'text' },
                { name: 'genre', type: 'text' },
                { name: 'location', type: 'text' },
              ],
            },

            {
              name: 'category',
              type: 'select',
              required: true,
              options: [
                { label: 'Music', value: 'music' },
                { label: 'Workshop', value: 'workshop' },
                { label: 'Festival', value: 'festival' },
                { label: 'Concert', value: 'concert' },
                { label: 'Comedy', value: 'comedy' },
                { label: 'Theatre', value: 'theatre' },
                { label: 'Exhibition', value: 'exhibition' },
                { label: 'Sports', value: 'sports' },
                { label: 'Dance', value: 'dance' },
                { label: 'Film Screening', value: 'film_screening' },
                { label: 'Conference', value: 'conference' },
                { label: 'Meetup', value: 'meetup' },
                { label: 'Networking', value: 'networking' },
                { label: 'Startup Event', value: 'startup_event' },
                { label: 'Hackathon', value: 'hackathon' },
                { label: 'Art & Culture', value: 'art_culture' },
                { label: 'Charity', value: 'charity' },
                { label: 'Talks', value: 'talks' },
                { label: 'Seminar', value: 'seminar' },
                { label: 'Webinar', value: 'webinar' },
                { label: 'Kids & Family', value: 'kids_family' },
                { label: 'Food & Drink', value: 'food_drink' },
                { label: 'Culinary Workshop', value: 'culinary_workshop' },
                { label: 'Book Reading', value: 'book_reading' },
                { label: 'Literature', value: 'literature' },
                { label: 'Spiritual', value: 'spiritual' },
                { label: 'Fashion', value: 'fashion' },
                { label: 'Education', value: 'education' },
                { label: 'Technology', value: 'technology' },
                { label: 'Health & Wellness', value: 'health_wellness' },
                { label: 'Yoga & Meditation', value: 'yoga_meditation' },
                { label: 'Photography', value: 'photography' },
                { label: 'Design', value: 'design' },
                { label: 'Gaming', value: 'gaming' },
                { label: 'Esports', value: 'esports' },
                { label: 'Motivational Talk', value: 'motivational_talk' },
                { label: 'Pet & Animal', value: 'pet_animal' },
                { label: 'Gardening', value: 'gardening' },
                { label: 'Sustainability', value: 'sustainability' },
                { label: 'Travel & Adventure', value: 'travel_adventure' },
                { label: 'Automobile', value: 'automobile' },
                { label: 'Magic Show', value: 'magic_show' },
                { label: 'Stand-up Comedy', value: 'standup_comedy' },
                { label: 'Open Mic', value: 'open_mic' },
                { label: 'Pageant', value: 'pageant' },
                { label: 'Film Festival', value: 'film_festival' },
                { label: 'Virtual Reality', value: 'virtual_reality' },
                { label: 'AI & Data Science', value: 'ai_data_science' },
                { label: 'Coding Bootcamp', value: 'coding_bootcamp' },
                { label: 'Career Fair', value: 'career_fair' },
                { label: 'Job Fair', value: 'job_fair' },
                { label: 'Real Estate Expo', value: 'real_estate_expo' },
                { label: 'Startup Pitch', value: 'startup_pitch' },
                { label: 'Investor Meet', value: 'investor_meet' },
                { label: 'Product Launch', value: 'product_launch' },
                { label: 'Panel Discussion', value: 'panel_discussion' },
                { label: 'TEDx Talk', value: 'tedx_talk' },
                { label: 'Book Launch', value: 'book_launch' },
                { label: 'Fundraiser', value: 'fundraiser' },
                { label: 'Award Show', value: 'award_show' },
                { label: 'Carnival', value: 'carnival' },
                { label: 'Parade', value: 'parade' },
                { label: 'Bridal Show', value: 'bridal_show' },
                { label: 'Wedding Expo', value: 'wedding_expo' },
                { label: 'Nightlife', value: 'nightlife' },
                { label: 'Club Event', value: 'club_event' },
                { label: 'Beach Party', value: 'beach_party' },
                { label: 'Cultural Fest', value: 'cultural_fest' },
                { label: 'Alumni Meet', value: 'alumni_meet' },
                { label: 'Orientation', value: 'orientation' },
                { label: 'Convocation', value: 'convocation' },
                { label: 'Independence Day', value: 'independence_day' },
                { label: 'Republic Day', value: 'republic_day' },
                { label: 'National Holiday', value: 'national_holiday' },
                { label: 'Religious', value: 'religious' },
                { label: 'Temple Event', value: 'temple_event' },
                { label: 'Church Gathering', value: 'church_gathering' },
                { label: 'Ramadan', value: 'ramadan' },
                { label: 'Christmas', value: 'christmas' },
                { label: 'Easter', value: 'easter' },
                { label: 'Diwali', value: 'diwali' },
                { label: 'Pongal', value: 'pongal' },
                { label: 'Onam', value: 'onam' },
                { label: 'Navaratri', value: 'navaratri' },
                { label: 'Durga Puja', value: 'durga_puja' },
                { label: 'Ganesh Chaturthi', value: 'ganesh_chaturthi' },
                { label: 'Holi', value: 'holi' },
                { label: 'Janmashtami', value: 'janmashtami' },
                { label: 'Thanksgiving', value: 'thanksgiving' },
                { label: 'Halloween', value: 'halloween' },
                { label: 'New Year Party', value: 'new_year_party' },
                { label: "Valentine's Day", value: 'valentines_day' },
                { label: 'Indigenous Culture', value: 'indigenous_culture' },
                { label: 'Language Day', value: 'language_day' },
                { label: 'Heritage Walk', value: 'heritage_walk' },
                { label: 'Skating', value: 'skating' },
                { label: 'Cycling', value: 'cycling' },
                { label: 'Marathon', value: 'marathon' },
                { label: 'Adventure Sports', value: 'adventure_sports' },
                { label: 'Trekking', value: 'trekking' },
                { label: 'Camping', value: 'camping' },
                { label: 'Bird Watching', value: 'bird_watching' },
                { label: 'Zoo Visit', value: 'zoo_visit' },
                { label: 'Aquarium Event', value: 'aquarium_event' },
                { label: 'Science Fair', value: 'science_fair' },
                { label: 'Math Olympiad', value: 'math_olympiad' },
                { label: 'Coding Challenge', value: 'coding_challenge' },
                { label: 'Quiz Competition', value: 'quiz_competition' },
              ],
              admin: {
                description: 'Choose the category of the event',
                isClearable: true,
                isSortable: true,
              },
            },

            {
              name: 'link',
              type: 'text',
            },
            {
              name: 'address',
              type: 'textarea',
              label: 'Address',
              maxLength: 30,
              admin: {
                description:
                  'Full address or venue location for the event(Maximum 30 characters allowed)',
              },
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
