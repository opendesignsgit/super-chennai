import { Block } from 'payload'

export const ContactSalesFormBlock: Block = {
  slug: 'ContactSalesFormBlock',
  labels: {
    singular: 'Contact Sales / Creator Form Section',
    plural: 'Contact Sales / Creator Form Sections',
  },

  admin: {
    group: 'Super Chennai Contest - Gen Z Content Creators',
  },
  imageURL: '/images/sections-image/jointhecollective.jpg',
  fields: [
    {
      name: 'mainTitle',
      type: 'text',
      label: 'Main Branding Title',
      defaultValue: 'JOIN THE COLLECTIVE',
      required: true,
    },
    {
      name: 'subtext',
      type: 'textarea',
      label: 'Branding Subtext',
      defaultValue:
        'Submit your details and show us your Chennai through a 30-60 second reel. Auditions are officially open now.',
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Hero Image (Left Side)',
      required: true,
    },
  ],
}
