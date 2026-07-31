import { Block } from 'payload'

export const ConclaveSpeakersBlock: Block = {
  slug: 'ConclaveSpeakersBlock',
  labels: {
    singular: 'Conclave Speakers Section',
    plural: 'Conclave Speakers Sections',
  },

  admin: {
    group: 'Conclave Page',
  },
  imageURL: '/images/sections-image/ConclaveSpeakersBlock.jpg',
  fields: [
    {
      name: 'sectionHeading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'Speakers',
      required: true,
    },
    {
      name: 'speakers',
      type: 'array',
      label: 'Speakers List',
      minRows: 1,
      labels: {
        singular: 'Speaker Profile',
        plural: 'Speaker Profiles',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Speaker Name',
          required: true,
        },
        {
          name: 'designation',
          type: 'text',
          label: 'Designation / Company',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Speaker Profile Image',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Popup Description / Bio',
          required: true,
          admin: {
            description: 'This profile text shows up inside the animation modal when clicked.',
          },
        },
      ],
    },
  ],
}
