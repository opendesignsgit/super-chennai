import type { Block } from 'payload'

export const GoluWhyCornerBlock: Block = {
  slug: 'goluWhyCorner',
  labels: {
    singular: 'Golu Why Corner Block',
    plural: 'Golu Why Corner Blocks',
  },
  fields: [
    {
      name: 'headerTitle',
      type: 'text',
      required: true,
      defaultValue: 'WHY A SUPER CHENNAI CORNER?',
    },
    {
      name: 'decorImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'media',
      type: 'group',
      fields: [
        {
          name: 'src',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'altText',
          type: 'text',
        },
        {
          name: 'placeholderText',
          type: 'text',
          defaultValue: 'Add Image',
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'id',
          type: 'text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          admin: {
            description: 'Upload an icon image (e.g. heritage.png)',
          },
        },
        {
          name: 'iconText',
          type: 'text',
          admin: {
            placeholder: 'Fallback text or emoji if no icon image (Ex: 🌟)',
          },
        },
        {
          name: 'bgColor',
          type: 'text',
          defaultValue: 'bg-pink-100 text-pink-600',
        },
        {
          name: 'numColor',
          type: 'text',
          defaultValue: 'text-pink-600',
        },
      ],
    },
  ],
}