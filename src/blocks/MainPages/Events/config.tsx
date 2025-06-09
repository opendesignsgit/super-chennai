import { Block } from 'payload'

const AllEvents: Block = {
  slug: 'allevents',
  labels: {
    singular: 'Events List',
    plural: 'Events List',
  },
  admin: {
    group: 'Main Page Sections',
  },
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
      maxLength: 15,
      admin: {
        description: 'Maximum 15 characters allowed',
      },
    },
    {
      name: 'description',
      label: 'Section Description',
      type: 'textarea',
      maxLength: 400,
      admin: {
        description: 'Maximum 400 characters allowed',
      },
    },
  ],
}

export default AllEvents
