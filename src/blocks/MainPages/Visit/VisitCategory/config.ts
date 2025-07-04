import { Block } from 'payload'

const VisitCategory: Block = {
  slug: 'visitcategory',
  labels: {
    singular: 'Visit Category',
    plural: 'Visit Categories',
  },
  admin: {
    group: 'Main Page Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      maxLength: 100,
      admin: {
        description: 'Maximum 100 characters allowed',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      maxLength: 800,
      admin: {
        description: 'Maximum 800 characters allowed',
      },
    },
    {
      name: 'items',
      type: 'array',
      label: 'Visit Items',
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          maxLength: 200,
          admin: {
            description: 'Maximum 200 characters allowed',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          maxLength: 800,
          admin: {
            description: 'Maximum 800 characters allowed',
          },
        },

        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },

        {
          name: 'page',
          type: 'relationship',
          relationTo: 'visits',
          required: false,
          label: 'Select Page Link',
        },
        {
          name: 'customLink',
          type: 'text',
          label: 'Or Custom URL',
          admin: {
            description: 'This will override the selected page link if provided.',
            placeholder: ' /some-path',
          },
        },
      ],
    },
  ],
}

export default VisitCategory
