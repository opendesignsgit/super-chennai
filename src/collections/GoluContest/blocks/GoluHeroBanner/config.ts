import type { Block } from 'payload'

export const GoluHeroBannerBlock: Block = {
  slug: 'goluHeroBanner',
  labels: {
    singular: 'Golu Hero Banner Block',
    plural: 'Golu Hero Banner Blocks',
  },
  fields: [
    {
      name: 'titlePrimary',
      type: 'text',
      required: true,
      defaultValue: 'GLOBAL OUTLOOK.',
    },
    {
      name: 'titleHighlight',
      type: 'text',
      required: true,
      defaultValue: 'LOCAL UNIQUENESS.',
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      defaultValue: 'A GOLU FOR THE CHENNAI OF TOMORROW.',
    },
    {
      name: 'buttonLabel',
      type: 'text',
      required: true,
      defaultValue: 'REGISTER NOW',
    },
    {
      name: 'buttonUrl',
      type: 'text',
      required: true,
      defaultValue: '#register',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Background image for the hero banner section',
      },
    },
  ],
}