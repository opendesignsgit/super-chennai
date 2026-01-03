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
        {
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
              admin: {
                description: 'This image will be used as the featured image for Slides.',
              },
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
                        ExploreMoreChennaiBlock,
                        socialReelSlider,
                        StickyImageScroll,
                        introTextBlock,
                        FeatureSectionsBlock,
                        BecameAVolunteerBlock,
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

// import { CollectionConfig } from 'payload'

// const Neighbourhoods: CollectionConfig = {
//   slug: 'neighbourhoods',
//   labels: {
//     singular: 'Neighbourhood',
//     plural: 'Neighbourhoods',
//   },
//   admin: { useAsTitle: 'title' },
//   access: {
//     read: () => true,
//     create: ({ req: { user } }) => !!user,
//     update: ({ req: { user } }) => !!user,
//     delete: ({ req: { user } }) => !!user,
//   },

//   fields: [
//     { name: 'title', type: 'text', required: true },
//     {
//       name: 'categories',
//       type: 'array',
//       label: 'Categories',
//       minRows: 1,
//       fields: [
//         { name: 'label', type: 'text', required: true },
//         { name: 'value', type: 'text', required: true },

//         {
//           name: 'subcats',
//           type: 'array',
//           label: 'Subcategories',
//           fields: [
//             { name: 'name', type: 'text', required: true },

//             // 🧠 Flattened pride data
//             {
//               name: 'prideData',
//               label: 'Pride of Chennai Data',
//               type: 'array',
//               fields: [
//                 { name: 'name', type: 'text', required: true },
//                 { name: 'nature', type: 'text' },
//                 {
//                   name: 'image',
//                   type: 'upload',
//                   relationTo: 'media',
//                 },
//                 // 🧩 Flatten popup points
//                 { name: 'achievement1', type: 'text', label: 'Achievement 1' },
//                 { name: 'achievement2', type: 'text', label: 'Achievement 2' },
//                 { name: 'achievement3', type: 'text', label: 'Achievement 3' },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ],
// }

// export default Neighbourhoods
