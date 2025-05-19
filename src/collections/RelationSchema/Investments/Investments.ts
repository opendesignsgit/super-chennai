import { CollectionConfig } from 'payload'

const InvestmentCategoriesCollection: CollectionConfig = {
  slug: 'investment-categories',
  admin: {
    useAsTitle: 'name',
    group: 'Common Block Contents',
  },
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Investments Category',
    plural: 'Investments',
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
}

export default InvestmentCategoriesCollection
