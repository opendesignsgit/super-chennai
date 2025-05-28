import { Block } from 'payload'

const volunteerBecameListBlock: Block = {
  slug: 'volunteerBecameSection',
  labels: {
    singular: 'ZigZag Volunteer',
    plural: 'Volunteer Became Sections',
  },
  admin: {
    group: 'Main Page Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'volunteerSections',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'linkText',
          type: 'text',
          required: true,
        },
        {
          name: 'linkUrl',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

export default volunteerBecameListBlock
