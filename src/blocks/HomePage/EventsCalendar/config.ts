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
      maxLength: 50,
      admin: {
        description: 'Maximum 50 characters allowed',
        placeholder: 'Enter a concise heading',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      maxLength: 200,
      admin: {
        description: 'Maximum 200 characters allowed',
        placeholder: 'Enter a description',
      },
    },

    {
      name: 'page',
      type: 'relationship',
      relationTo: 'pages',
      required: false,
      label: 'Find Out More',
      admin: {
        description:
          'Choose the appropriate Events page from the dropdown that lists all available Pages.',
      },
    },
  ],
}

export default EventsCalendarBlock
