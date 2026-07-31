import { Block } from 'payload'

export const ConclaveAgendaBlock: Block = {
  slug: 'ConclaveAgendaBlock',
  labels: {
    singular: 'Conclave Agenda Section',
    plural: 'Conclave Agenda Sections',
  },
  admin: {
    group: 'Conclave Page',
  },
  imageURL: '/images/sections-image/ConclaveAgendaBlock.jpg',
  fields: [
    {
      name: 'sectionHeading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'OUR AGENDA',
      required: true,
    },
    {
      name: 'initialVisibleRows',
      type: 'number',
      label: 'Initial Visible Items Count',
      defaultValue: 4,
      admin: {
        description: 'How many items should display before clicking the "Read More" trigger.',
      },
    },
    {
      name: 'agendaItems',
      type: 'array',
      label: 'Agenda Timeline Entries',
      minRows: 1,
      labels: {
        singular: 'Agenda Item',
        plural: 'Agenda Items',
      },
      fields: [
        {
          name: 'displayId',
          type: 'text',
          label: 'Display ID (e.g., 01 or Track 1)',
          required: true,
        },
        {
          name: 'startTime',
          type: 'text',
          label: 'Start Time (e.g., 09:30 AM)',
          required: true,
        },
        {
          name: 'endTime',
          type: 'text',
          label: 'End Time (e.g., 10:30 AM)',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Agenda Topic / Title',
          required: true,
        },
        {
          name: 'speakers',
          type: 'array',
          label: 'Speakers',
          labels: {
            singular: 'Speaker Name',
            plural: 'Speaker Names',
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Speaker Name / Designation',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
