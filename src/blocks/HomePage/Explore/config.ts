import { Block } from 'payload'

export const ExploreBlock: Block = {
  slug: 'explore',
  labels: {
    singular: 'Explore Cards',
    plural: 'Explore Cards',
  },
  admin: {
    group: 'Homepage Sections',
  },
  fields: [
    {
      name: 'cards',
      type: 'array',
      label: 'Explore Cards',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          maxLength: 15,
          admin: {
            description: 'Maximum 15 characters allowed',
            placeholder: 'Enter a title ',
          },
        },
        {
          name: 'place',
          type: 'text',
          required: true,
          maxLength: 100,
          admin: {
            description: 'Maximum 100 characters allowed',
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
