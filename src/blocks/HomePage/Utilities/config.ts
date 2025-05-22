import { Block } from 'payload'

const Utilities: Block = {
  slug: 'utilities',
  labels: {
    singular: 'Utilities',
    plural: 'Utilities',
  },
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
      name: 'tabs',
      type: 'array',
      label: 'Utility Tabs',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'tabTitle',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}

export default Utilities
