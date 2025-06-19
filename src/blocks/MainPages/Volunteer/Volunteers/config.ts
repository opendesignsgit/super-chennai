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
      maxLength: 200,
      admin: {
        description: 'Maximum 200 characters allowed',
      },
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      required: true,
      maxLength: 600,
      admin: {
        description: 'Maximum 600 characters allowed',
        placeholder: 'Enter a description',
      },
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
    },
    // {
    //   name: 'volunteerSections',
    //   type: 'array',
    //   required: true,
    //   fields: [
    //     {
    //       name: 'title',
    //       type: 'text',
    //       required: true,
    //       maxLength: 100,
    //       admin: {
    //         description: 'Maximum 100 characters allowed',
    //       },
    //     },
    //     {
    //       name: 'description',
    //       type: 'textarea',
    //       required: true,
    //       maxLength: 800,
    //       admin: {
    //         description: 'Maximum 800 characters allowed',
    //       },
    //     },
    //     {
    //       name: 'image',
    //       type: 'upload',
    //       relationTo: 'media',
    //       required: true,
    //     },
    //     {
    //       name: 'linkText',
    //       type: 'text',
    //       required: true,
    //     },
    //     {
    //       name: 'linkUrl',
    //       type: 'text',
    //       required: true,
    //     },
    //   ],
    // },
  ],
}

export default volunteerBecameListBlock
