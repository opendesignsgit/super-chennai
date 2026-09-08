import type { Block } from 'payload'

export const GoluFormBlock: Block = {
  slug: 'goluFormBlock',
  labels: {
    singular: 'Golu Submission Form Block',
    plural: 'Golu Submission Form Blocks',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      defaultValue: 'Submit Your Golu Entry',
      required: true,
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      defaultValue: 'Upload your photographs and share the story behind your Golu display.',
    },
    {
      name: 'goluMinImages',
      type: 'number',
      defaultValue: 2,
      label: 'Minimum Golu Photos Required',
      required: true,
    },
    {
      name: 'goluMaxImages',
      type: 'number',
      defaultValue: 5,
      label: 'Maximum Golu Photos Allowed',
      required: true,
    },
    {
      name: 'superChennaiMinImages',
      type: 'number',
      defaultValue: 1,
      label: 'Minimum Super Chennai Corner Photos Required',
      required: true,
    },
    {
      name: 'superChennaiMaxImages',
      type: 'number',
      defaultValue: 3,
      label: 'Maximum Super Chennai Corner Photos Allowed',
      required: true,
    },
  ],
}