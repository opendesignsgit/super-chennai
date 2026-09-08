import type { Block } from 'payload'

export const GoluCreateBlock: Block = {
  slug: 'goluCreate',
  labels: {
    singular: 'Golu Create Section Block',
    plural: 'Golu Create Section Blocks',
  },
  fields: [
    {
      name: 'headerTitle',
      type: 'text',
      required: true,
      defaultValue: 'WHAT TO CREATE',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'id',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'Ex: 01',
          },
        },
        {
          name: 'title',
          type: 'text',
          required: true,
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
        },
        {
          name: 'circleBorder',
          type: 'text',
          defaultValue: 'border-indigo-300 bg-indigo-50/20',
        },
        {
          name: 'color',
          type: 'text',
          defaultValue: 'text-indigo-900',
        },
      ],
    },
  ],
}