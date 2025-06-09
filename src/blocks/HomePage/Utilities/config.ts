import { Block } from 'payload'

const Utilities: Block = {
  slug: 'utilities',
  labels: {
    singular: 'Chennai Utilities',
    plural: 'Utilities',
  },
  admin: {
    group: 'Homepage Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      maxLength: 50,
      admin: {
        description: 'Maximum 50 characters allowed',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      maxLength: 200,
      admin: {
        description: 'Maximum 200 characters allowed',
      },
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
          maxLength: 20,
          admin: {
            description: 'Maximum 20 characters allowed',
          },
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
