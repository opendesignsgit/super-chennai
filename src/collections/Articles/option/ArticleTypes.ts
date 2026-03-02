import type { CollectionConfig } from 'payload'

export const ArticleTypes: CollectionConfig<'articleTypes'> = {
  slug: 'articleTypes',
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
        description: 'Display name (e.g. News, Guide)',
      },
    },
    {
      name: 'value',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Slug (e.g. news, guide, opinion)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Used for SEO or landing pages',
      },
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional icon for UI',
      },
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
      admin: {
        description: 'Sort order',
      },
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
