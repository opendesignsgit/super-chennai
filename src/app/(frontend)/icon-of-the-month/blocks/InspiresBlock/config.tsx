import { Block } from 'payload'

export const InspiresBlock: Block = {
  slug: 'inspiresBlock',
  labels: {
    singular: 'Inspires Section',
    plural: 'Inspires Sections',
  },
  fields: [
    {
      name: 'titlePrefix',
      type: 'text',
      label: 'Title Prefix Text (e.g., Why She)',
      required: true,
    },
    {
      name: 'titleHighlight',
      type: 'text',
      label: 'Highlighted Title Word (e.g., Inspires)',
      required: true,
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Feature Columns/Blocks',
      maxRows: 2,
      fields: [
        {
          name: 'points',
          type: 'array',
          label: 'Bullet Points Description Lines',
          fields: [
            {
              name: 'line',
              type: 'text',
              label: 'Text Line',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}

export default InspiresBlock