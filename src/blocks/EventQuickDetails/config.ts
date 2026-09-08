import type { Block } from 'payload'

export const EventQuickDetails: Block = {
  slug: 'eventQuickDetails',

  labels: {
    singular: 'Event Quick Details',
    plural: 'Event Quick Details Blocks',
  },

  admin: {
    group: 'Events',
  },

  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'EVENT HIGHLIGHTS & DETAILS',
    },
    {
      name: 'subHeading',
      type: 'text',
      label: 'Sub Heading / Badge Text',
      defaultValue: 'AT A GLANCE',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Description',
    },
  ],
}