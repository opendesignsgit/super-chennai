import { Block } from 'payload'

export const EventClosedNoticeBlock: Block = {
  slug: 'EventClosedNoticeBlock',
  labels: {
    singular: 'Event Closed Notice',
    plural: 'Event Closed Notices',
  },
  imageURL: '/images/sections-image/Event-Closed.jpg',
  imageAltText: 'Event Closed Notice Section Preview',
  admin: {
    group: 'Super Chennai Contest - Summer Photography Contest',
  },
  fields: [
    {
      name: 'badgeText',
      type: 'text',
      label: 'Badge Text',
      defaultValue: 'Event Closed',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Main Heading',
      defaultValue: 'This Event Has Ended',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Notice Description',
      defaultValue:
        'Thank you for your interest! Registration for this event has now closed. Stay tuned for upcoming events and exciting opportunities from SuperChennai.',
      required: true,
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Label',
      defaultValue: 'View Upcoming Events',
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Button Redirect Link',
      defaultValue: '/superchennai-contest',
    },
    {
      name: 'bgDecorationImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Corner Background Decoration Image (Optional)',
    },
  ],
}
