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
      defaultValue: 'Social Chennai',
      admin: {
        description: 'Maximum 100 characters allowed',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      defaultValue:
        '  Make connections, participate, and add to Chennai s lively social events and community projects',
      maxLength: 400,
      admin: {
        description: 'Maximum 400 characters allowed',
      },
    },

    {
      name: 'contentType',
      type: 'select',
      required: true,
      defaultValue: 'video',
      options: [
        {
          label: 'Video',
          value: 'video',
        },
        {
          label: 'Image',
          value: 'image',
        },
      ],
      admin: {
        description: 'Select whether to display videos or images in the slider',
      },
    },
    {
      name: 'showVideoThumbnailOnly',
      label: 'Show only video thumbnails (disable playback)',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description:
          'If enabled, videos will be shown as thumbnails only without autoplay/play buttons.',
      },
    },
  ],
}
