import { CollectionConfig } from 'payload'

export const NeighbourhoodSubCategories: CollectionConfig = {
  slug: 'neighbourhood-subcategories',

  admin: { useAsTitle: 'title' },

  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
    },

    {
      name: 'parentCategory',
      type: 'relationship',
      relationTo: 'neighbourhood-categories',
    },
  ],
}
