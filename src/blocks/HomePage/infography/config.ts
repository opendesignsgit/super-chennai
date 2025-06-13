import { Block } from 'payload'

const Infography: Block = {
  slug: 'infography',
  labels: {
    singular: 'Infography Section Food',
    plural: 'Infography Sections',
  },
  admin: {
    group: 'Homepage Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      maxLength: 100,
      admin: {
        description: 'Maximum 100 characters allowed',
      },
    },
    {
      name: 'headingSpan',
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
      required: true,
      maxLength: 500,
      admin: {
        description: 'Maximum 500 characters allowed',
      },
    },
    {
      name: 'foodItems',
      type: 'array',
      required: true,
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
          required: true,
          maxLength: 500,
          admin: {
            description: 'Maximum 500 characters allowed',
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

export default Infography
