import type { CollectionConfig } from 'payload'

export const NeighbourhoodCategories: CollectionConfig = {
  slug: 'neighbourhood-categories',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug'],
  },
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
      required: true,
      unique: true,
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'hasMenu',
      type: 'checkbox',
      label: 'Enable Menu Items (For Restaurants)',
    },
    {
      name: 'hasFuel',
      type: 'checkbox',
      label: 'Enable Fuel Types (For Petrol Bunks)',
    },
  ],
}
