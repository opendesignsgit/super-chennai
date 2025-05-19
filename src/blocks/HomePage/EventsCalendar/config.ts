import { Block } from 'payload'

const EventsCalendarBlock: Block = {
  slug: 'eventsCalendar',

  labels: {
    singular: 'Event Calendar Block',
    plural: 'Event Calendar Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Top Heading',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'eventGroupRef',
      type: 'relationship',
      relationTo: 'eventGroups',
      label: 'Select Event Group',
      required: true,
    },
  ],
}

export default EventsCalendarBlock
