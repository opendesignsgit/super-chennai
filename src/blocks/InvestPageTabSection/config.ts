import { Block } from 'payload'

export const InvestPageTabBlock: Block = {
  slug: 'InvestPageTabBlock',
  labels: {
    singular: 'Invest Page Tab Block',
    plural: 'Invest Page Tab Blocks',
  },

  imageURL: '/images/sections-image/invest-tab-page.jpg',
  fields: [
    {
      name: 'tabs',
      type: 'array',
      label: 'Tabs List',
      dbName: 'ut_tabs',
      minRows: 1,
      labels: {
        singular: 'Tab Item',
        plural: 'Tab Items',
      },
      fields: [
        {
          name: 'tabTitle',
          type: 'text',
          label: 'Tab Title (e.g. Government Initiatives)',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Tab Icon',
          required: true,
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Content Heading',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description Text',
          required: true,
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Button Label',
          defaultValue: 'Explore More',
        },
        {
          name: 'buttonLink',
          type: 'text',
          label: 'Button Link / URL',
          required: true,
        },
      ],
    },
  ],
}
