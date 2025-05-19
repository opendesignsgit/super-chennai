import { CollectionConfig } from 'payload'
const EventsCalendar: CollectionConfig = {
  slug: 'eventGroups',
  labels: {
    singular: 'Event Group',
    plural: 'Events',
  },
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Common Block Contents',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'events',
      type: 'array',
      label: 'Events',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'time',
          type: 'text',
        },
        {
          name: 'category',
          type: 'text',
        },
        {
          name: 'link',
          type: 'text',
        },
      ],
    },
  ],
}

export default EventsCalendar
