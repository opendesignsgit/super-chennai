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
    },
    {
      name: 'description',
      label: 'Section Description',
      type: 'textarea',
    },
  ],
}

export default AllEvents
