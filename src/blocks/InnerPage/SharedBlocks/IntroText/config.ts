import { Block } from 'payload'

export const introTextBlock: Block = {
  slug: 'introText',
  labels: {
    singular: 'Intro Text',
    plural: 'Intro Text Blocks',
  },
  fields: [
    {
      name: 'showMarquee',
      type: 'checkbox',
      label: 'Show Marquee Text?',
      defaultValue: true,
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
      name: 'marqueeText',
      type: 'text',
      required: true,
    },
    {
      name: 'backgroundType',
      type: 'select',
      label: 'Background Type Dotted',
      options: [
        { label: 'None', value: 'none' },
        { label: 'Background Image', value: 'background' },
      ],
      defaultValue: 'none',
      required: true,
    },
  ],
}

export default introTextBlock
