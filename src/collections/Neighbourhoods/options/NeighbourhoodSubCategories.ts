import { CollectionConfig } from 'payload'

export const NeighbourhoodSubCategories: CollectionConfig = {
  slug: 'neighbourhood-subcategories',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'parentCategory',
      type: 'relationship',
      relationTo: 'neighbourhood-categories',
    },
  ],
}
