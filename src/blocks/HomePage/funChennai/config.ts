import { Block } from 'payload'

export const FunChennaiBlock: Block = {
  slug: 'funChennai',
  labels: {
    singular: 'Fun Chennai',
    plural: 'Fun Chennai',
  },
  admin: {
    group: 'Homepage Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      maxLength: 25,
      admin: {
        description: 'Maximum 25 characters allowed',
      },
    },
    {
      name: 'subheading',
      type: 'textarea',
      required: true,
      maxLength: 200,
      admin: {
        description: 'Maximum 200 characters allowed',
      },
    },
    {
      name: 'cards',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          maxLength: 15,
          admin: {
            description: 'Maximum 15 characters allowed',
          },
        },
        {
          name: 'place',
          type: 'text',
          maxLength: 15,
          admin: {
            description: 'Maximum 15 characters allowed',
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
