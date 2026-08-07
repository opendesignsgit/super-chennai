import { Block } from 'payload'

export const AboutWhyChennaiBlock: Block = {
  slug: 'AboutWhyChennaiBlock',
  labels: {
    singular: 'About Why Chennai Section',
    plural: 'About Why Chennai Sections',
  },
  admin: {
    group: 'About Page',
  },

  imageURL: '/images/sections-image/aboutwhysection.jpg',

  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Main Heading',
      defaultValue: '',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Subheading',
      defaultValue: '',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description Text',
      defaultValue: '',
    },
    {
      name: 'tabs',
      type: 'array',
      label: 'Category Tabs',
      dbName: 'wc_tabs',
      fields: [
        {
          name: 'tabPrefix',
          type: 'text',
          label: 'Tab Prefix (e.g., SUPER FOR)',
          defaultValue: '',
        },
        {
          name: 'tabTitle',
          type: 'text',
          label: 'Tab Title (e.g., LIVING)',
          defaultValue: '',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Tab Image',
        },
        {
          name: 'points',
          type: 'textarea',
          label: 'Bullet Points (One per line)',
          defaultValue: '',
        },
      ],
    },
  ],
}
