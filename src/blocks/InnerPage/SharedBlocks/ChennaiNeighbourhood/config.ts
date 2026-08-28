import { Block } from 'payload'

export const ChennaiNeighbourhoodBlock: Block = {
  slug: 'chennaiNeighbourhoodBlock',
  dbName: 'cnb', // Short DB identifier
  labels: {
    singular: 'Chennai Neighbourhood Block',
    plural: 'Chennai Neighbourhood Blocks',
  },
  imageURL: '/images/sections-image/chennaiNeighbourhoodBlock.jpg',
  imageAltText: 'Chennai Neighbourhood Section Preview',

  admin: {
    group: 'Live Detail Page',
  },
  fields: [
    {
      name: 'sections',
      type: 'array',
      label: 'Neighbourhood Sections List',
      dbName: 'cn_sec',
      fields: [
        {
          name: 'sectionTitle',
          type: 'text',
          label: 'Section Title',
          required: true,
        },
        {
          name: 'sectionDesc',
          type: 'textarea',
          label: 'Section Description',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Main Section Image',
          required: true,
        },
        {
          name: 'imgAlt',
          type: 'text',
          label: 'Main Image Alt Text',
        },
        {
          name: 'benefits',
          type: 'array',
          label: 'Neighbourhood Cards List',
          dbName: 'cn_nbh',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Neighbourhood Title',
              required: true,
            },
            {
              name: 'para',
              type: 'textarea',
              label: 'Description',
            },
            {
              name: 'imgs',
              type: 'upload',
              relationTo: 'media',
              label: 'Card Image',
            },
            {
              name: 'imgAlt',
              type: 'text',
              label: 'Image Alt Text',
            },
            {
              name: 'link',
              type: 'text',
              label: 'Target Link URL',
            },
          ],
        },
      ],
    },
  ],
}
