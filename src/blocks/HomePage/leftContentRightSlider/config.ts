import { Block } from 'payload'
const SpotlightGallery: Block = {
  slug: 'spotlightGallery',
  labels: {
    singular: 'leftContentRightSlider',
    plural: ' leftContentRightSlider',
  },
  admin: {
    group: 'Homepage Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      maxLength: 20,
      admin: {
        description: 'Maximum 20 characters allowed',
        placeholder: 'Enter a heading',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      maxLength: 500,
      admin: {
        description: 'Maximum 500 characters allowed',
        placeholder: 'Enter a description',
      },
    },
    {
      name: 'link',
      type: 'text',
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          maxLength: 15,
          admin: {
            description: 'Maximum 15 characters allowed',
          },
        },
        {
          name: 'subtitle',
          type: 'text',
          maxLength: 15,
          admin: {
            description: 'Maximum 15 characters allowed',
          },
        },
        {
          name: 'para',
          type: 'text',
          maxLength: 200,
          admin: {
            description: 'Maximum 200 characters allowed',
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
          relationTo: 'events',
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

export default SpotlightGallery
