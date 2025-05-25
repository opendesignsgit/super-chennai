import { Block } from "payload"

const AllEvents: Block = {
  slug: 'allevents',
  labels: {
    singular: 'Events Home',
    plural: 'Events Homes',
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
