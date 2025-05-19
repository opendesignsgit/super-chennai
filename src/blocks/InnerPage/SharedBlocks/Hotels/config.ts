import { Block } from 'payload'

const ZigZagContentBlock: Block = {
  slug: 'ZigZagContent',
  labels: {
    singular: 'ZigZagContent ',
    plural: 'ZigZagContent',
  },
  fields: [
    {
      name: 'sections',
      label: 'ZigZagContent',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'linkUrl',
          label: 'Link URL',
          type: 'text',
          required: false,
        },
        {
          name: 'linkText',
          label: 'Link Text',
          type: 'text',
          required: false,
        },
      ],
    },
  ],
}

export default ZigZagContentBlock
