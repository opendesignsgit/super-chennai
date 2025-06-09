import { Block } from 'payload'

const investmentCategoryListBlock: Block = {
  slug: 'investmentCategoryList',
  labels: {
    singular: 'Investment Category',
    plural: 'Investment Category',
  },
  admin: {
    group: 'Main Page Sections',
  },
  fields: [
    {
      name: 'items',
      label: 'Investment Categories',
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
          name: 'subtitle',
          type: 'text',
          maxLength: 15,
          admin: {
            description: 'Maximum 15 characters allowed',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          maxLength: 400,
          admin: {
            description: 'Maximum 400 characters allowed',
          },
        },

        {
          name: 'image',
          label: 'SVG Icon',
          type: 'upload',
          relationTo: 'media',
          filterOptions: () => ({
            mimeType: { equals: 'image/svg+xml' },
          }),
          admin: {
            description: 'Upload an SVG file only.',
          },
        },
        {
          name: 'link',
          type: 'text',
          label: 'Explore Link',
        },
      ],
    },
    {
      name: 'backgroundImage',
      label: 'Bottom Background Image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}

export default investmentCategoryListBlock
