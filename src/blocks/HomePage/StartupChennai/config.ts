import { Block } from 'payload'

export const StartupChennaiBlock: Block = {
  slug: 'startupChennai',
  labels: {
    singular: 'Startup Chennai',
    plural: 'Startup Chennai Blocks',
  },
  admin: {
    group: 'Homepage Sections',
  },

  fields: [
    {
      name: 'heading',
      type: 'text',
      maxLength: 30,
      admin: {
        description: 'Maximum 30 characters allowed',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      maxLength: 400,
      admin: {
        description: 'Maximum 400 characters allowed',
        placeholder: 'Enter a description',
      },
    },
    {
      name: 'images',
      type: 'array',
      minRows: 5,
      maxRows: 5,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          maxLength: 20,
          admin: {
            description: 'Maximum 20 characters allowed',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          maxLength: 50,
          admin: {
            description: 'Maximum 50 characters allowed',
            placeholder: 'Enter a description',
          },
        },
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'investments',
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
