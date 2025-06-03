import { Block } from 'payload'

const TextHoverImageSection: Block = {
  slug: 'textHoverImageSection',
  labels: {
    singular: 'Work in Chennai Section',
    plural: 'Work in Chennai Sections',
  },
  admin: {
    group: 'Main Page Sections',
  },
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
    },
    {
      name: 'items',
      label: 'Hover Items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
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

export default TextHoverImageSection
