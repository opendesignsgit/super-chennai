import { Block } from 'payload'

const EventsCalendarBlock: Block = {
  slug: 'eventsCalendar',

  labels: {
    singular: 'Events Calendar',
    plural: 'Events Calendar',
  },
  admin: {
    group: 'Homepage Sections',
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
