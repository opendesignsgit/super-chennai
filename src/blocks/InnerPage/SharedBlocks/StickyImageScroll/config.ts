import { Block } from 'payload'

export const StickyImageScroll: Block = {
  slug: 'StickyImageScroll',
  labels: {
    singular: 'StickyImageScroll',
    plural: 'StickyImageScroll',
  },

  fields: [
    {
      name: 'backgroundType',
      type: 'select',
      options: [
        { label: 'Color', value: 'color' },
        { label: 'Image', value: 'image' },
      ],
      defaultValue: 'color',
      required: true,
    },
    // Optional: if you want
    {
      name: 'backgroundColor',
      type: 'text',
      required: false,
      admin: {
        condition: (data) => data.backgroundType === 'color',
      },
      defaultValue: '#995098',
    },

    {
      name: 'leftImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },

    {
      name: 'smallText',
      type: 'text',
      required: false,
      defaultValue: '',
    },
    {
      name: 'title',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Startup Cards',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
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
          name: 'link',
          type: 'text',
          label: 'External or Internal URL',
        },
      ],
    },
  ],
}

export default StickyImageScroll
