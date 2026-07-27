import { Block } from 'payload'

export const AboutIntroBlock: Block = {
  slug: 'AboutIntroBlock',
  labels: {
    singular: 'About Intro Section',
    plural: 'About Intro Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Main Title',
      defaultValue: 'About Chennai City',
      required: true,
    },
    {
      name: 'paragraphs',
      type: 'array',
      label: 'Paragraph Content',
      minRows: 1,
      labels: {
        singular: 'Paragraph',
        plural: 'Paragraphs',
      },
      fields: [
        {
          name: 'text',
          type: 'textarea',
          label: 'Paragraph Text (Supports HTML like <br />)',
          required: true,
        },
      ],
    },
    {
      name: 'marqueeText',
      type: 'text',
      label: 'Background Marquee Text',
      defaultValue: 'Super Chennai',
      required: true,
    },
  ],
}
