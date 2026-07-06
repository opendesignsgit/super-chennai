import type { Block } from 'payload'

export const DetailsBlock: Block = {
  slug: 'detailsBlock',

  labels: {
    singular: 'Events Details',
    plural: 'Events Details',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Events Details',
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}
