import { Block } from 'payload'

export const socialReelSlider: Block = {
  slug: 'socialReelSlider',
  labels: {
    singular: 'SocialReelSlider',
    plural: 'SocialReelSlider',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
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
