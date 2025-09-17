import type { CollectionConfig } from 'payload'

export const Locations: CollectionConfig<'locations'> = {
  slug: 'locations',
  access: {
    read: () => true,
  },
  admin: {
    hidden: true,
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'city',
      type: 'text',
      required: true,
    },
    {
      name: 'state',
      type: 'text',
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      admin: {
        description: 'Display label for the location, e.g., "City, State"',
      },
    },
    {
      name: 'value',
      type: 'text',
      required: true,
      admin: {
        description: 'Unique identifier for the location',
      },
    },
  ],
}
