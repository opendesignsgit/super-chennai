import { Block } from 'payload'

export const MetroRegistrationBlock: Block = {
  slug: 'MetroRegistrationBlock',
  labels: {
    singular: 'Metro Registration Block',
    plural: 'Metro Registration Blocks',
  },
  admin: {
    group: 'Singe Alone Metro',
  },

  imageURL: '/images/sections-image/singlealone5.jpg',
  fields: [
    {
      name: 'sectionId',
      type: 'text',
      label: 'HTML ID (for smooth scrolling)',
      defaultValue: 'registration-form',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Side Image',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      label: 'Registration Status',
      defaultValue: 'closed',
      options: [
        { label: 'Closed', value: 'closed' },
        { label: 'Open', value: 'open' },
      ],
      required: true,
    },
    {
      name: 'badgeText',
      type: 'text',
      label: 'Overlay Badge Text',
      defaultValue: 'Closed',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Main Heading',
      defaultValue: 'REGISTRATION IS CLOSED',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Main Description',
      defaultValue:
        'Thank you for the overwhelming response! All available slots for Sing Along Metro have been completely filled.',
    },
    {
      name: 'infoBoxTitle',
      type: 'text',
      label: 'Info Box Title',
      defaultValue: 'Missed your spot?',
    },
    {
      name: 'infoBoxDescription',
      type: 'textarea',
      label: 'Info Box Description',
      defaultValue:
        'Stay tuned to our social media channels for updates on upcoming slots, next editions, and live event announcements!',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Disabled Button Text',
      defaultValue: 'REGISTRATIONS FULL',
    },
    {
      name: 'statusSvgCode',
      type: 'textarea',
      label: 'Custom Status Icon SVG (Optional)',
    },
  ],
}
