import type { CollectionConfig } from 'payload'

export const PropertyTypes: CollectionConfig<'propertyTypes'> = {
  slug: 'propertyTypes',
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
    },
  ],
}
