import { Block } from 'payload'

export const ImagewithContent: Block = {
  slug: 'ImagewithContent',
  labels: {
    singular: 'Image with Content',
    plural: 'Image with Contents',
  },
  imageURL: '/images/sections-image/ImagewithContent.jpg',
  imageAltText: 'Image with Content Section Preview',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title (e.g., Key Highlights)',
      defaultValue: 'Key Highlights',
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Main Section Image / Icon',
      required: true,
    },
    // Flexible dynamic blocks for mixing Paragraphs and Bullet Lists
    {
      name: 'contentBlocks',
      type: 'array',
      label: 'Content Elements (Paragraphs & Bullet Lists)',
      dbName: 'iwc_cb', // Short unique table name
      fields: [
        {
          name: 'type',
          type: 'select',
          label: 'Block Type',
          defaultValue: 'paragraph',
          options: [
            { label: 'Paragraph Text', value: 'paragraph' },
            { label: 'Bullet List (ul / li)', value: 'list' },
          ],
        },
        {
          name: 'paragraphText',
          type: 'textarea',
          label: 'Paragraph Content (Supports <strong>, <em> tags)',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'paragraph',
          },
        },
        {
          name: 'listItems',
          type: 'array',
          label: 'List Items (li points)',
          dbName: 'iwc_li',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'list',
          },
          fields: [
            {
              name: 'itemText',
              type: 'textarea',
              label: 'Point Text (Supports <strong> tags)',
            },
          ],
        },
      ],
    },
  ],
}
