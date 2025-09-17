import type { CollectionConfig } from 'payload'

export const Amenities: CollectionConfig<'amenities'> = {
  slug: 'amenities',
  access: {
    read: () => true,
  },
  admin: {
    hidden: true,
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'value',
      type: 'text',
      required: true,
      admin: {
        description: 'Unique identifier for this amenity',
      },
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
