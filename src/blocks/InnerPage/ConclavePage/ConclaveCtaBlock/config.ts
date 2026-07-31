import { Block } from 'payload'

export const ConclaveCtaBlock: Block = {
  slug: 'ConclaveCtaBlock',
  labels: {
    singular: 'Conclave CTA / Hero Banner',
    plural: 'Conclave CTA / Hero Banners',
  },

  admin: {
    group: 'Conclave Page',
  },

  imageURL: '/images/sections-image/ConclaveCtaBlock.jpg',
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Banner Image',
      required: true,
    },
    {
      name: 'logoImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo / Graphic Badge Image',
      required: true,
    },
    {
      name: 'dateText',
      type: 'text',
      label: 'Event Date (e.g., Feb 19, 2026)',
      defaultValue: 'Feb 19, 2026',
      required: true,
    },
    {
      name: 'timeText',
      type: 'text',
      label: 'Event Time (e.g., Time: 09:30 AM Onwards)',
      defaultValue: 'Time: 09:30 AM Onwards',
      required: true,
    },
    {
      name: 'venueText',
      type: 'text',
      label: 'Venue Text (Optional)',
      admin: {
        description: 'e.g., ITC Welcome Hotel, Chennai. Leave blank if not needed.',
      },
    },
    {
      name: 'enableRegisterButton',
      type: 'checkbox',
      label: 'Show Register Button',
      defaultValue: false,
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Label',
      defaultValue: 'Register Now',
      admin: {
        condition: (data) => Boolean(data?.enableRegisterButton),
      },
    },
  ],
}
