import { CollectionConfig } from "payload";

export const NeighbourhoodTags: CollectionConfig = {
  slug: 'neighbourhood-tags',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
  ],
}