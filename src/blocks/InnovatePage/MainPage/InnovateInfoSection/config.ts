import { Block } from 'payload'

export const InnovateInfoSectionBlock: Block = {
  slug: 'InnovateInfoSectionBlock',
  labels: {
    singular: 'Info Image Section',
    plural: 'Info Image Sections',
  },
  imageURL: '/images/sections-image/info-section.jpg',
  fields: [
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Main Section Image',
      required: true,
    },
    {
      name: 'imgAlt',
      type: 'text',
      label: 'Main Image Alt Text',
      defaultValue: 'smart city chennai',
    },
    {
      name: 'imagePosition',
      type: 'select',
      label: 'Image Position',
      defaultValue: 'left',
      options: [
        { label: 'Left Side', value: 'left' },
        { label: 'Right Side', value: 'right' },
      ],
      admin: {
        description: 'Choose whether the main image appears on the Left or Right side.',
      },
    },
    {
      name: 'infoData',
      type: 'array',
      label: 'Information Items',
      dbName: 'info_items',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Item Title',
          required: true,
        },
        {
          name: 'desc',
          type: 'textarea',
          label: 'Description (Supports HTML/Bold tags)',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon SVG / Image',
          required: true,
        },
      ],
    },
  ],
}
