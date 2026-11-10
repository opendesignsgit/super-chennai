import { Block } from 'payload'

export const BecomeAVolunteerBlock: Block = {
  slug: 'BecomeAVolunteerBlock',
  labels: {
    singular: 'Become A Volunteer Section',
    plural: 'Become A Volunteer Sections',
  },
  admin: {
    group: 'Main Page Sections',
  },
  imageURL: '/images/sections-image/volunteerimage.jpg',
  fields: [
    {
      name: 'mainTitle',
      type: 'text',
      label: 'Main Section Title',
      defaultValue: 'Become a Volunteer',
      required: true,
    },
    {
      name: 'mainDescription',
      type: 'textarea',
      label: 'Main Section Description',
      defaultValue:
        'Join hands with Super Chennai to make a meaningful difference across the city. Explore our volunteer initiatives, contribute your time and skills, and be a part of our growing community.',
    },
    {
      name: 'volunteerSections',
      type: 'array',
      label: 'Volunteer Cards / Roles',
      dbName: 'sc_vol_sections',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Card Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Card Description',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Section Image',
          required: true,
        },
        {
          name: 'linkText',
          type: 'text',
          label: 'Link / Button Label',
          defaultValue: 'Explore More',
        },
        {
          name: 'linkUrl',
          type: 'text',
          label: 'Link URL / Route',
          defaultValue: '#',
        },
      ],
      defaultValue: [
        {
          title: 'Digital Volunteer',
          description:
            'Help us spread the word online, curate localized social content, manage digital campaigns, and amplify community stories.',
          linkText: 'Explore Role',
          linkUrl: '/volunteer/digital',
        },
        {
          title: 'On-Ground Event Crew',
          description:
            'Be the backbone of city events, managing live coordination, welcoming guests, supporting venue logistics, and building real connections.',
          linkText: 'Explore Role',
          linkUrl: '/volunteer/events',
        },
      ],
    },
  ],
}
