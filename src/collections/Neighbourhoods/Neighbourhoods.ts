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
import { slugField } from 'src/fields/slug'

import BecameAVolunteerBlock from '@/blocks/HomePage/Volunteer/config'
import FeatureSectionsBlock from '@/blocks/InnerPage/SharedBlocks/VisualAndKeyPoints/config'
import { socialReelSlider } from 'src/blocks/HomePage/SocialChennai/config'
import ExploreMoreChennaiBlock from 'src/blocks/InnerPage/SharedBlocks/Explore/config'
import introTextBlock from 'src/blocks/InnerPage/SharedBlocks/IntroText/config'
import StickyImageScroll from 'src/blocks/InnerPage/SharedBlocks/StickyImageScroll/config'
import { CollectionConfig } from 'payload'
import { VideoBlock } from '@/blocks/VideoBlock/config'
import { AdBlock } from '@/blocks/AdBlock/config'

export const Neighbourhood: CollectionConfig<'neighbourhood'> = {
  slug: 'neighbourhood',
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

    category: true,
    subCategories: true,
    tags: true,
    authors: true,

    gallery: {
      image: true,
    },

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
    // hidden: true,
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'neighbourhood',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'neighbourhood',
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
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                  ...rootFeatures,
                  HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  BlocksFeature({
                    blocks: [
                      ExploreMoreChennaiBlock,
                      socialReelSlider,
                      StickyImageScroll,
                      introTextBlock,
                      FeatureSectionsBlock,
                      BecameAVolunteerBlock,
                      VideoBlock,
                      AdBlock,
                    ],
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
        // TAB 2 – BUSINESS DETAILS
        // ===============================
        {
          label: 'Business Details',
          fields: [
            {
              name: 'gallery',
              label: 'Business Gallery',
              type: 'array',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'alt',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'caption',
                  type: 'text',
                },
              ],
            },
            { name: 'name', type: 'text', required: true },
            { name: 'description', type: 'textarea' },

            {
              name: 'category',
              type: 'relationship',
              relationTo: 'neighbourhood-categories',
              required: true,
            },

            {
              name: 'subCategories',
              type: 'relationship',
              relationTo: 'neighbourhood-subcategories',
              hasMany: true,
            },

            {
              name: 'listingType',
              type: 'select',
              options: [
                { label: 'Free Listing', value: 'free' },
                { label: 'Premium Listing', value: 'premium' },
                { label: 'Sponsored Listing', value: 'sponsored' },
              ],
              defaultValue: 'free',
            },

            {
              name: 'priorityRank',
              type: 'number',
              admin: {
                description: 'Higher value = higher search priority',
              },
            },

            {
              name: 'subscriptionExpiry',
              type: 'date',
            },
            {
              name: 'branches',
              type: 'array',
              fields: [
                { name: 'branchName', type: 'text' },
                { name: 'address', type: 'textarea' },
                { name: 'area', type: 'text' },
                { name: 'phone', type: 'text' },
                { name: 'latitude', type: 'number' },
                { name: 'longitude', type: 'number' },
              ],
            },

            {
              name: 'documents',
              type: 'array',
              fields: [
                { name: 'documentName', type: 'text' },
                {
                  name: 'file',
                  type: 'upload',
                  relationTo: 'media',
                },
              ],
            },

            {
              name: 'is24Hours',
              type: 'checkbox',
              defaultValue: false,
            },

            {
              name: 'temporarilyClosed',
              type: 'checkbox',
              defaultValue: false,
            },

            {
              name: 'searchKeywords',
              type: 'text',
              admin: {
                description: 'Comma separated keywords for search boost',
              },
            },

            {
              name: 'normalizedName',
              type: 'text',
              admin: {
                hidden: true,
              },
            },

            {
              name: 'isVerified',
              type: 'checkbox',
              defaultValue: false,
            },

            {
              name: 'isSponsored',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'contactInfo',
              type: 'group',
              fields: [
                { name: 'primaryPhone', type: 'text' },
                { name: 'secondaryPhone', type: 'text' },
                { name: 'whatsapp', type: 'text' },
                { name: 'email', type: 'text' },
                { name: 'website', type: 'text' },
              ],
            },

            {
              name: 'businessHours',
              type: 'array',
              fields: [
                {
                  name: 'day',
                  type: 'select',
                  options: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                    'Sunday',
                  ],
                },
                { name: 'openTime', type: 'text' },
                { name: 'closeTime', type: 'text' },
                { name: 'isClosed', type: 'checkbox' },
              ],
            },
            {
              name: 'priceInfo',
              type: 'group',
              fields: [
                {
                  name: 'priceRange',
                  type: 'select',
                  options: [
                    { label: 'Budget (₹)', value: '₹' },
                    { label: 'Moderate (₹₹)', value: '₹₹' },
                    { label: 'Premium (₹₹₹)', value: '₹₹₹' },
                  ],
                },
                { name: 'averageCost', type: 'number' },
              ],
            },
            {
              name: 'socialMedia',
              type: 'group',
              fields: [
                { name: 'facebook', type: 'text' },
                { name: 'instagram', type: 'text' },
                { name: 'youtube', type: 'text' },
                { name: 'twitter', type: 'text' },
              ],
            },
            {
              name: 'companyInfo',
              type: 'group',
              fields: [
                { name: 'ownerName', type: 'text' },
                { name: 'foundedYear', type: 'number' },
                { name: 'gstNumber', type: 'text' },
              ],
            },
            {
              name: 'serviceOptions',
              type: 'array',
              fields: [{ name: 'label', type: 'text' }],
            },

            {
              name: 'tags',
              type: 'relationship',
              relationTo: 'neighbourhood-tags',
              hasMany: true,
            },
          ],
        },

        // ===============================
        // TAB 3 – LOCATION
        // ===============================
        {
          label: 'Location',
          fields: [
            {
              name: 'locations',
              type: 'relationship',
              relationTo: 'chennaiNeighbourhoodlocations',
              required: true,
              admin: {
                description: 'location',
              },
            },

            {
              name: 'serviceAreas',
              type: 'relationship',
              relationTo: 'chennaiNeighbourhoodlocations',
              hasMany: true,
            },

            {
              name: 'googleData',
              type: 'group',
              fields: [
                { name: 'placeId', type: 'text' },
                { name: 'googleRating', type: 'number' },
                { name: 'totalGoogleReviews', type: 'number' },
              ],
            },

            {
              name: 'location',
              type: 'group',
              fields: [
                { name: 'latitude', type: 'number', required: true },
                { name: 'longitude', type: 'number', required: true },
              ],
            },

            {
              name: 'googlePlaceId',
              type: 'text',
            },
          ],
        },

        // ===============================
        // TAB 4 – CATEGORY SPECIFIC (Dynamic)
        // ===============================
        {
          label: 'Category Specific',
          fields: [
            // FOOD
            {
              name: 'menuItems',
              type: 'array',
              admin: {
                condition: (data) => data.mainCategory === 'food',
              },
              fields: [
                { name: 'itemName', type: 'text' },
                { name: 'price', type: 'number' },
                { name: 'isVeg', type: 'checkbox' },
              ],
            },

            // PETROL
            {
              name: 'fuelTypes',
              type: 'array',
              admin: {
                condition: (data) => data.mainCategory === 'petrol',
              },
              fields: [
                { name: 'fuelName', type: 'text' },
                { name: 'pricePerLitre', type: 'number' },
              ],
            },
          ],
        },

        // ===============================
        // TAB 5 – Ratings & Amenities
        // ===============================
        {
          label: 'Ratings & Amenities',
          fields: [
            { name: 'rating', type: 'number', min: 0, max: 5 },
            { name: 'totalReviews', type: 'number', defaultValue: 0 },

            {
              name: 'amenities',
              type: 'array',
              fields: [{ name: 'label', type: 'text' }],
            },

            {
              name: 'awards',
              type: 'array',
              fields: [{ name: 'title', type: 'text' }],
            },

            {
              name: 'establishedYear',
              type: 'number',
            },

            {
              name: 'isFeatured',
              type: 'checkbox',
              defaultValue: false,
            },

            {
              name: 'isActive',
              type: 'checkbox',
              defaultValue: true,
            },
          ],
        },

        // ===============================
        // TAB 6 – SEO
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
          ],
        },

        {
          name: 'structuredData',
          label: 'Structured Data (Schema.org)',
          fields: [
            {
              name: 'schemaType',
              type: 'select',
              options: [
                { label: 'Local Business', value: 'LocalBusiness' },
                { label: 'Restaurant', value: 'Restaurant' },
                { label: 'Gas Station', value: 'GasStation' },
                { label: 'Hotel', value: 'Hotel' },
                { label: 'Hospital', value: 'Hospital' },
                { label: 'Store', value: 'Store' },
                { label: 'Event', value: 'Event' },
                { label: 'FAQ Page', value: 'FAQPage' },
                { label: 'Custom', value: 'Custom' },
              ],
            },

            // FAQ Schema (Array of Objects)
            {
              name: 'faqSchema',
              type: 'array',
              admin: {
                condition: (_, siblingData) => siblingData?.schemaType === 'FAQPage',
              },
              fields: [
                { name: 'question', type: 'text', required: true },
                { name: 'answer', type: 'textarea', required: true },
              ],
            },

            // Event Schema (Array of objects)
            {
              name: 'eventSchema',
              type: 'array',
              admin: {
                condition: (_, siblingData) => siblingData?.schemaType === 'Event',
              },
              fields: [
                { name: 'eventName', type: 'text' },
                { name: 'startDate', type: 'date' },
                { name: 'endDate', type: 'date' },
                { name: 'locationName', type: 'text' },
                { name: 'ticketPrice', type: 'number' },
              ],
            },

            // Custom JSON Schema (Full Control)
            {
              name: 'customSchema',
              type: 'json',
              admin: {
                condition: (_, siblingData) => siblingData?.schemaType === 'Custom',
              },
            },

            {
              name: 'viewCount',
              type: 'number',
              defaultValue: 0,
            },

            {
              name: 'callClickCount',
              type: 'number',
              defaultValue: 0,
            },

            {
              name: 'whatsappClickCount',
              type: 'number',
              defaultValue: 0,
            },

            {
              name: 'websiteClickCount',
              type: 'number',
              defaultValue: 0,
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
        interval: 100,
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
