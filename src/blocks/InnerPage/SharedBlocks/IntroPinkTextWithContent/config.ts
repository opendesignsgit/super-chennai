import { Block } from 'payload'

export const IntroPinkTextWithContentBlock: Block = {
  slug: 'IntroPinkTextWithContentBlock',
  labels: {
    singular: 'Intro Section Pink',
    plural: 'Intro Sections Pink',
  },
  imageURL: '/images/sections-image/introtextpink.jpg',
  imageAltText: 'Work Intro Section Preview',

  admin: {
    group: 'Common Blocks',
  },
  fields: [
    {
      name: 'backgroundWatermarkText',
      type: 'text',
      label: 'Background Watermark / Marquee Text',
      defaultValue: 'Work   in Chennai   Work   in Chennai',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Main Title',
      defaultValue: 'Working in Chennai',
      required: true,
    },
    {
      name: 'paragraphs',
      type: 'array',
      label: 'Paragraphs',
      dbName: 'wi_paras', // Short unique table name for Postgres
      fields: [
        {
          name: 'text',
          type: 'textarea',
          label: 'Paragraph Text',
          required: true,
        },
      ],
    },
  ],
}
