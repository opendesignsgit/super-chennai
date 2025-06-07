import { Block } from 'payload'

export const socialReelSlider: Block = {
  slug: 'socialReelSlider',
  labels: {
    singular: 'SocialReelSlider',
    plural: 'SocialReelSlider',
  },
  admin: {
    group: 'Homepage Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      maxLength: 100,
      admin: {
        description: 'Maximum 100 characters allowed',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      maxLength: 400,
      admin: {
        description: 'Maximum 400 characters allowed',
      },
    },
    {
      name: 'reelsRef',
      type: 'relationship',
      relationTo: 'social-reels',
      hasMany: false,
      label: 'Select Reel Group',
      // required: true,
    },
  ],
}
