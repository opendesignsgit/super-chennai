import type { CollectionConfig } from 'payload'

export const eventsCategories: CollectionConfig = {
  slug: 'eventsCategories',
  labels: {
    singular: ' Events Category',
    plural: 'Categories',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'createdAt'],
    hidden: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        placeholder: 'auto-generated from title if empty',
      },
      hooks: {
        beforeValidate: [
          ({ value, siblingData }) => {
            if (!value && siblingData?.title) {
              return siblingData.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)+/g, '')
            }
            return value
          },
        ],
      },
    },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description: 'Optional short description of this category',
      },
    },
  ],
}
