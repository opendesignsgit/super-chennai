import { Block } from 'payload'

export const BenefitSectionsBlock: Block = {
  slug: 'BenefitSectionsBlock',
  labels: {
    singular: 'Benefit Section List',
    plural: 'Benefit Section Lists',
  },

  admin: {
    group: 'Work Detail Page',
  },
  imageURL: '/images/sections-image/BenefitSections.jpg',
  imageAltText: 'Benefit Sections Preview',
  fields: [
    {
      name: 'benefitSections',
      type: 'array',
      label: 'Benefit Sections',
      dbName: 'bs_sec', // Short unique DB table name
      fields: [
        {
          name: 'sectionTitleLine1',
          type: 'text',
          label: 'Title Line 1 (e.g., For a)',
          defaultValue: 'For a',
        },
        {
          name: 'sectionTitleLine2',
          type: 'text',
          label: 'Title Line 2 (e.g., Spinster)',
          defaultValue: 'Spinster',
        },
        {
          name: 'sectionDesc',
          type: 'textarea',
          label: 'Section Description',
        },
        {
          name: 'label',
          type: 'text',
          label: 'Section Label / Tag',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Main Section Image',
          required: true,
        },
        {
          name: 'benefits',
          type: 'array',
          label: 'Benefits List',
          dbName: 'bs_items', // Short unique DB table name
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Benefit Title',
              required: true,
            },
            {
              name: 'para',
              type: 'textarea',
              label: 'Benefit Description',
            },
            {
              name: 'imgs',
              type: 'upload',
              relationTo: 'media',
              label: 'Benefit Icon',
            },
            {
              name: 'linkUrl',
              type: 'text',
              label: 'Link URL (Optional)',
              defaultValue: '#',
            },
          ],
        },
      ],
    },
  ],
}
