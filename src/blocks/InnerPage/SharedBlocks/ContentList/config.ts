import { Block } from 'payload'

export const EventsList2026Block: Block = {
  slug: 'EventsList2026Block',
  dbName: 'ev_lst_2026', // 👈 Block level dbName IS VALID
  labels: {
    singular: 'Contest Main Page',
    plural: 'Contest Main Page',
  },
  admin: {
    group: 'Super Chennai Contest',
  },
  imageURL: '/images/sections-image/contest-mainpage.jpg',
  fields: [
    {
      name: 'eventsCards2026',
      type: 'array',
      label: 'Events & Contests Cards',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Card Title',
          required: true,
        },
        {
          name: 'linkUrl',
          type: 'text',
          label: 'Redirect Link URL',
          required: true,
        },
        {
          name: 'cardMedia',
          type: 'upload',
          relationTo: 'media',
          label: 'Card Image Asset',
          required: true,
        },
        {
          name: 'altText',
          type: 'text',
          label: 'Image Alt Text',
        },
      ],
    },
  ],
}
