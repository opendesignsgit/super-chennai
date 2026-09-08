import type { Block } from 'payload'

export const GoluHowItWorksBlock: Block = {
  slug: 'goluHowItWorks',
  labels: {
    singular: 'Golu How It Works Block',
    plural: 'Golu How It Works Blocks',
  },
  fields: [
    {
      name: 'headerTitle',
      type: 'text',
      required: true,
      defaultValue: 'HOW IT WORKS',
    },
    {
      name: 'steps',
      type: 'array',
      required: true,
      labels: {
        singular: 'Step',
        plural: 'Steps',
      },
      fields: [
        {
          name: 'id',
          type: 'text',
          required: true,
          defaultValue: '01',
          admin: {
            description: 'Step number ID (e.g. 01, 02)',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: 'REGISTER',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: false,
          admin: {
            description: 'Step icon image',
          },
        },
        {
          name: 'circleBorder',
          type: 'text',
          defaultValue: 'border-indigo-300 bg-indigo-50/20',
          admin: {
            description: 'Tailwind classes for circle border and background tint',
          },
        },
        {
          name: 'color',
          type: 'text',
          defaultValue: 'text-indigo-900',
          admin: {
            description: 'Tailwind text color class for number and title',
          },
        },
      ],
    },
  ],
}