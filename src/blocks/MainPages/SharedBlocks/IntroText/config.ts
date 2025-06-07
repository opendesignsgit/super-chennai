import { Block } from 'payload'

const IntroTextBlock: Block = {
  slug: 'introTextBlock',
  labels: {
    singular: 'Intro Text',
    plural: 'Intro Text',
  },
  admin: {
    group: 'Main Page Sections',
  },
  fields: [
    {
      name: 'showMarquee',
      type: 'checkbox',
      label: 'Show Marquee Text?',
      defaultValue: true,
    },
    {
      name: 'marqueeText',
      type: 'text',
      label: 'Scrolling Marquee Text',
      admin: {
        condition: (_, siblingData) => siblingData.showMarquee === true,
        description: 'Maximum 50 characters allowed',
      },
      maxLength: 50,
    },
    {
      name: 'marqueeTextSize',
      type: 'select',
      label: 'Marquee Text Size',
      options: [
        { label: 'Small', value: 'sm' },
        { label: 'Large', value: 'lg' },
      ],
      defaultValue: 'sm',
      admin: {
        condition: (_, siblingData) => siblingData.showMarquee === true,
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Main Title',
      required: true,
      maxLength: 50,
      admin: {
        description: 'Maximum 50 characters allowed',
      },
    },
    {
      name: 'highlightedText',
      type: 'textarea',
      label: 'Highlighted Text (Bold)',
      required: true,
      maxLength: 400,
      admin: {
        description: 'Maximum 400 characters allowed',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Supporting Description',
      required: true,
      maxLength: 800,
      admin: {
        description: 'Maximum 800 characters allowed',
      },
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

export default IntroTextBlock
