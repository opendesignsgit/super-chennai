import { Block } from 'payload'

export const IntroTextListingPage: Block = {
  slug: 'introTextListingPage',
  labels: {
    singular: 'Intro Text Lising Page',
    plural: 'Intro Text Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Main Title (H1)',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description Paragraphs (Use Enter key to separate paragraphs)',
      required: true,
    },
    {
      name: 'showMarquee',
      type: 'checkbox',
      label: 'Show Background Marquee Text?',
      defaultValue: true,
    },
    {
      name: 'marqueeText',
      type: 'text',
      label: 'Marquee Text Content',
      admin: {
        condition: (_, siblingData) => siblingData?.showMarquee === true,
      },
    },
    {
      name: 'backgroundType',
      type: 'select',
      label: 'Dotted Background Structure Option',
      options: [
        { label: 'None (Plain)', value: 'none' },
        { label: 'Dotted Background Image', value: 'background' },
      ],
      defaultValue: 'none',
      required: true,
    },
  ],
}

export default IntroTextListingPage