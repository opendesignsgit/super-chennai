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
import introTextBlock from '@/blocks/InnerPage/SharedBlocks/IntroText/config'
import { DetailsBlock } from '@/app/(frontend)/icon-of-the-month/blocks/EventsDetails/config'
import AwardsBlock from '@/app/(frontend)/icon-of-the-month/blocks/AwardsBlock/config'
import InspiresBlock from '@/app/(frontend)/icon-of-the-month/blocks/InspiresBlock/config'
import { socialReelSlider } from '@/blocks/HomePage/SocialChennai/config'
import BecameAVolunteerBlock from '@/blocks/HomePage/Volunteer/config'
import FeatureListBlock from '@/app/(frontend)/icon-of-the-month/blocks/FeatureListBlock/config'

export const IconOfMonth: CollectionConfig<'iconOfMonth'> = {
  slug: 'iconOfMonth',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },

  defaultPopulate: {
    title: true,
    slug: true,
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
          collection: 'iconOfMonth',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'iconOfMonth',
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
                      blocks: [
                        Banner,
                        Code,
                        MediaBlock,
                        introTextBlock,
                        DetailsBlock,
                        AwardsBlock,
                        InspiresBlock,
                        socialReelSlider,
                        BecameAVolunteerBlock,
                        FeatureListBlock,
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
              name: 'personName',
              label: 'Person Name',
              type: 'text',
              required: true,
            },
            {
              name: 'designation',
              label: 'Designation / Profession',
              type: 'text',
              required: true,
            },
            {
              name: 'profileImage',
              label: 'Profile Image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'coverImage',
              label: 'Cover Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'month',
              label: 'Month',
              type: 'select',
              required: true,
              options: [
                { label: 'January', value: 'january' },
                { label: 'February', value: 'february' },
                { label: 'March', value: 'march' },
                { label: 'April', value: 'april' },
                { label: 'May', value: 'may' },
                { label: 'June', value: 'june' },
                { label: 'July', value: 'july' },
                { label: 'August', value: 'august' },
                { label: 'September', value: 'september' },
                { label: 'October', value: 'october' },
                { label: 'November', value: 'november' },
                { label: 'December', value: 'december' },
              ],
            },
            {
              name: 'year',
              label: 'Year',
              type: 'number',
              required: true,
            },
            {
              name: 'category',
              label: 'Category',
              type: 'relationship',
              relationTo: 'icon-month-categories',
              required: true,
            },
            {
              name: 'shortDescription',
              label: 'Short Description',
              type: 'textarea',
              required: true,
            },
            {
              name: 'quote',
              label: 'Famous Quote',
              type: 'textarea',
            },
            {
              name: 'achievements',
              label: 'Key Achievements',
              type: 'array',
              fields: [
                {
                  name: 'achievement',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'socialLinks',
              label: 'Social Links',
              type: 'group',
              fields: [
                {
                  name: 'website',
                  type: 'text',
                },
                {
                  name: 'linkedin',
                  type: 'text',
                },
                {
                  name: 'twitter',
                  type: 'text',
                },
                {
                  name: 'instagram',
                  type: 'text',
                },
              ],
            },
            {
              name: 'featured',
              label: 'Featured',
              type: 'checkbox',
              defaultValue: false,
            },
            {
              name: 'ranking',
              label: 'Display Order',
              type: 'number',
              defaultValue: 1,
            },
          ],
          label: 'Icon of Month Details',
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
