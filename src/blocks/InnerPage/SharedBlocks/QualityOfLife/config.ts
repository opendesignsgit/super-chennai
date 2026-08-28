import { Block } from 'payload'

export const QualityOfLifeBlock: Block = {
  slug: 'qualityOfLifeBlock',
  dbName: 'qol_blk', // Ultra-short unique DB identifier
  labels: {
    singular: 'Quality Of Life Block',
    plural: 'Quality Of Life Blocks',
  },
  imageURL: '/images/sections-image/qualityOfLifeBlock.jpg',
  imageAltText: 'Quality of Life Section Preview',

  admin: {
    group: 'Live Detail Page',
  },
  fields: [
    {
      name: 'sections',
      type: 'array',
      label: 'Feature Cards List',
      dbName: 'qol_sec',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Main Title',
          required: true,
        },
        {
          name: 'title1',
          type: 'text',
          label: 'Subtitle / Highlight Title',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Section Image',
          required: true,
        },
        {
          name: 'imgAlt',
          type: 'text',
          label: 'Image Alt Text',
        },
        {
          name: 'buttonText',
          type: 'text',
          label: 'Button Label Text (Optional)',
        },
        {
          name: 'buttonLink',
          type: 'text',
          label: 'Button URL Link (Optional)',
        },
      ],
    },
  ],
}
