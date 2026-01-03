import { Block } from 'payload'

const Neighbourhoods: Block = {
  slug: 'neighbourhoods',
  labels: {
    singular: 'Neighbourhood',
    plural: 'Neighbourhoods',
  },

  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
    },
    {
      name: 'neighbourhoodCategories',
      label: 'Neighbourhood Categories',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'categoryTitle',
          label: 'Category Title',
          type: 'text',
          required: true,
        },
        {
          name: 'categoryKey',
          label: 'Category Key',
          type: 'text',
          required: true,
        },
        {
          name: 'neighbourhoodCards',
          label: 'Neighbourhood Cards',
          type: 'array',
          fields: [
            {
              name: 'neighbourhoodName',
              label: 'Neighbourhood Name',
              type: 'text',
              required: true,
            },
            {
              name: 'neighbourhoodType',
              label: 'Neighbourhood Type',
              type: 'text',
            },
            {
              name: 'neighbourhoodImage',
              label: 'Neighbourhood Image',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'neighbourhood',
              label: 'Neighbourhood Detail Page',
              type: 'relationship',
              relationTo: 'neighbourhood',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

export default Neighbourhoods
