import { Block } from 'payload'
const liveIntrorSection: Block = {
  slug: 'liveIntrorSection',
  labels: {
    singular: 'Intro Section with Image',
    plural: 'Intro Section with Image',
  },
  admin: {
    group: 'Main Page Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      maxLength: 50,
      admin: {
        description: 'Maximum 50 characters allowed',
      },
    },
    {
      name: 'imagePosition',
      type: 'select',
      label: 'Image Position',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'right',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Banner Image',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'paraZeroLiveSection',
      type: 'text',
      label: 'First Paragraph',
      required: true,
      maxLength: 500,
      admin: {
        description: 'Maximum 500 characters allowed',
      },
    },
    {
      name: 'paraoneLiveSection',
      type: 'text',
      label: 'Second Paragraph',
      required: true,
      maxLength: 500,
      admin: {
        description: 'Maximum 500 characters allowed',
      },
    },
    {
      name: 'paraTwoLiveSection',
      type: 'text',
      label: 'Third Paragraph',
      required: true,
      maxLength: 500,
      admin: {
        description: 'Maximum 500 characters allowed',
      },
    },
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
      maxLength: 200,
      admin: {
        condition: (_, siblingData) => siblingData.showMarquee === true,
        description: 'Maximum 200 characters allowed',
      },
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
  ],
}

export default liveIntrorSection
