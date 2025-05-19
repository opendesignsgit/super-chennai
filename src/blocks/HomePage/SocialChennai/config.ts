import { Block } from 'payload'

export const SocialChennaiBlock: Block = {
  slug: 'socialChennai',
  labels: {
    singular: 'Social Chennai',
    plural: 'Social Chennai Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'reelsRef',
      type: 'relationship',
      relationTo: 'social-reels',
      hasMany: false,
      label: 'Select Reel Group',
      required: true,
    },
  ],
}
