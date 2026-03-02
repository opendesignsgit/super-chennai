import type { CollectionConfig } from 'payload'

export const ArticleCategory: CollectionConfig<'articlecategory'> = {
  slug: 'articlecategory',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      admin: {
        description: 'Display name (e.g. Technology, Travel, Food)',
      },
    },
    {
      name: 'value',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL slug (e.g. technology, travel, food)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Category description (used for SEO pages)',
      },
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional category icon',
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Hero image for category page',
      },
    },
    {
      name: 'color',
      type: 'text',
      admin: {
        description: 'Hex color for UI (e.g. #FF5733)',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Sorting order in menus',
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
        },
      ],
    },
  ],
}
