import { CollectionConfig } from 'payload'

export const NeighbourhoodTags: CollectionConfig = {
  slug: 'neighbourhood-tags',
  admin: { useAsTitle: 'name', hidden: true },
  fields: [{ name: 'name', type: 'text', required: true }],
}
