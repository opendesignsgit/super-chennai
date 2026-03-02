import type { CollectionConfig } from 'payload'

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

export const Ads: CollectionConfig<'ads'> = {
  slug: 'ads',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: () => true,
  },

  defaultPopulate: {
    title: true,
    slug: true,
    mediaType: true,
    media: true,
     mediaUrl: true,
    altText: true,
    caption: true,
    targetUrl: true,
    // position: true,
    priority: true,
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
          collection: 'ads',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'ads',
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
              name: 'Adstitle',
              type: 'text',
              required: true,
            },

            // {
            //   name: 'adType',
            //   type: 'select',
            //   options: [
            //     'banner',
            //     'sidebar',
            //     'inline',
            //     'popup',
            //     'video',
            //     'interstitial',  
            //     'sponsored',
            //   ],
            // },

            {
              name: 'Adsstatus',
              type: 'select',
              admin: {
                position: 'sidebar',
              },
              options: ['active', 'inactive', 'draft'],
              defaultValue: 'draft',
            },

            {
              name: 'mediaType',
              type: 'select',
              options: ['image', 'gif', 'video', 'html'],
            },

            {
              name: 'media',
              type: 'upload',
              relationTo: 'media',
            },

            {
              name: 'mediaUrl',
              type: 'text',
              label: 'Video / HTML URL',
            },

            {
              name: 'altText',
              type: 'text',
            },
            {
              name: 'caption',
              type: 'text',
            },
            {
              name: 'videoDuration',
              type: 'number',
            },

            {
              name: 'priority',
              type: 'number',
              defaultValue: 0,
            },
            {
              name: 'targetUrl',
              type: 'text',
            },
            {
              name: 'startDate',
              type: 'date',
            },
            {
              name: 'endDate',
              type: 'date',
            },
          ],
          label: 'Content',
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
              relationTo: 'posts',
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
      name: 'showOnArticles',
      type: 'checkbox',
      label: 'Show on Article Pages',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'showPriority',
      type: 'select',
      label: 'Show Priority',
      defaultValue: 'secondary',
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Tertiary', value: 'tertiary' },
      ],
      admin: {
        position: 'sidebar',
        condition: (_, siblingData) => siblingData?.showOnArticles,
      },
    },

    {
      name: 'position',
      type: 'select',
      admin: {
        position: 'sidebar',
      },
      options: [
        { label: 'Inline (Center)', value: 'inline' },
        { label: 'Left Side', value: 'left' },
        { label: 'Right Side', value: 'right' },
        { label: 'Top', value: 'top' },
        { label: 'Bottom', value: 'bottom' },
      ],
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
