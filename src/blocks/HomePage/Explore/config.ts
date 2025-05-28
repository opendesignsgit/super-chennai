import { Block } from 'payload'

export const ExploreBlock: Block = {
  slug: 'explore',
  labels: {
    singular: 'Explore Cards',
    plural: 'Explore Cards',
  },
  admin: {
    group: 'Homepage Sections',
  },
  fields: [
    {
      name: 'cards',
      type: 'array',
      label: 'Explore Cards',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'place',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
