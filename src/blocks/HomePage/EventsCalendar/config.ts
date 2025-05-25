import { Block } from 'payload'

const EventsCalendarBlock: Block = {
  slug: 'eventsCalendar',

  labels: {
    singular: 'Event Calendar Block',
    plural: 'Event Calendar Blocks',
  },
  admin: {
    group: 'Common Block Contents',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Top Heading',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'eventGroupRef',
      type: 'relationship',
      relationTo: 'events',
      label: 'Select Event Group',
    },
  ],
}

export default EventsCalendarBlock
