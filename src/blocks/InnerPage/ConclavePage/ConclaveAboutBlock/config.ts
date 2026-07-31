import { Block } from 'payload'

export const ConclaveAboutBlock: Block = {
  slug: 'ConclaveAboutBlock',
  labels: {
    singular: 'Conclave About Section',
    plural: 'Conclave About Sections',
  },
  admin: {
    group: 'Conclave Page',
  },

  imageURL: '/images/sections-image/ConclaveAboutBlock.jpg',
  fields: [
    {
      name: 'backgroundTickerText',
      type: 'text',
      label: 'Background Scroll Text',
      defaultValue: 'CONCLAVE -',
      admin: {
        description: 'This text will repeat and scroll dynamically in the background layer.',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'About Left Image',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Section Heading Title',
      defaultValue: 'Chennai CONCLAVE',
      required: true,
    },
    {
      name: 'paragraphs',
      type: 'array',
      label: 'Content Paragraphs',
      minRows: 1,
      labels: {
        singular: 'Paragraph',
        plural: 'Paragraphs',
      },
      fields: [
        {
          name: 'text',
          type: 'textarea',
          label: 'Paragraph Text',
          required: true,
          admin: {
            description: 'Supports HTML tags like <strong> or <br /> to make text bold.',
          },
        },
      ],
    },
  ],
}
