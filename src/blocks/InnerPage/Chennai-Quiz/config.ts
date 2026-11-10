import { Block } from 'payload'

export const SuperChennaiQuizBlock: Block = {
  slug: 'SuperChennaiQuizBlock',
  labels: {
    singular: 'Super Chennai Quiz Section',
    plural: 'Super Chennai Quiz Sections',
  },

  admin: {
    group: 'Super Chennai Contest - Chennai Quiz',
  },
  imageURL: '/images/sections-image/superchennaiquiz.jpg',

  fields: [
    {
      name: 'eventTitle',
      type: 'text',
      label: 'Main Event Title',
      defaultValue: 'Super Chennai Quiz',
      required: true,
    },
    {
      name: 'bannerImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Event Banner Image',
      required: true,
    },
    {
      name: 'aboutContent',
      type: 'richText',
      label: 'About The Event Content (Rich Text)',
    },
    {
      name: 'poweredByLogo',
      type: 'upload',
      relationTo: 'media',
      label: 'Powered By Logo',
    },
    {
      name: 'sidebarDetails',
      type: 'group',
      label: 'Sidebar Info Box',
      fields: [
        {
          name: 'dateLabel',
          type: 'text',
          label: 'Event Date Label',
          defaultValue: 'Sunday, December 7, 2025',
        },
        {
          name: 'timeLabel',
          type: 'text',
          label: 'Start Time',
          defaultValue: '2:00 PM',
        },
        {
          name: 'locationLabel',
          type: 'text',
          label: 'Location',
          defaultValue: 'Sir Mutha Venkatasubba Rao Concert Hall, Chennai',
        },
        {
          name: 'hostLabel',
          type: 'text',
          label: 'Host Label',
          defaultValue: 'Hosted by: Nawabzada Mohammed Asif Ali',
        },
        {
          name: 'teamsLabel',
          type: 'text',
          label: 'Teams Info',
          defaultValue: 'Teams: 2 members',
        },
        {
          name: 'feeLabel',
          type: 'text',
          label: 'Fee Info',
          defaultValue: 'Fee: ₹199 per team',
        },
        {
          name: 'registerRoute',
          type: 'text',
          label: 'Register Button Route URL',
          defaultValue: '/quizform',
        },
      ],
    },
  ],
}
