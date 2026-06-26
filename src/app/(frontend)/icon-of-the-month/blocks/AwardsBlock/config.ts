import { Block } from 'payload'

export const AwardsBlock: Block = {
  slug: 'awardsBlock',
  labels: {
    singular: 'Awards Block',
    plural: 'Awards Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Main Title',
      defaultValue: 'Awards & Achievements',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Awards Banner Image',
      required: true,
    },
    {
      name: 'awardsList',
      type: 'array',
      label: 'Awards Items',
      fields: [
        {
          name: 'title',
          type: 'textarea',
          label: 'Award Text Content',
          required: true,
        },
      ],
    },
  ],
}

export default AwardsBlock