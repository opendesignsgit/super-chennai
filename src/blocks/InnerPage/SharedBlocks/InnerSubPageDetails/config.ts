import { Block } from 'payload'

const InnerSubPageDetails: Block = {
  slug: 'innerSubPageDetails',
  labels: {
    singular: 'Detail Section',
    plural: 'Detail Sections',
  },
  fields: [
    {
      name: 'sections',
      type: 'array',
      label: 'Sections',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'rating',
          type: 'number',
          required: true,
          min: 0,
          max: 5,
        },
        {
          name: 'link1',
          type: 'text',
          label: 'Know More Link',
        },
        {
          name: 'link2',
          type: 'text',
          label: 'View Location Link',
        },
      ],
    },
  ],
}

export default InnerSubPageDetails
