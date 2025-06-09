import { Block } from 'payload'

const ChennaiLifeEssentialSection: Block = {
  slug: 'chennaiLifeEssentials',
  labels: {
    singular: 'Chennai Life Essentials',
    plural: 'Chennai Life Essentials Sections',
  },
  admin: {
    group: 'Main Page Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading',
      maxLength: 15,
      admin: {
        description: 'Maximum 15 characters allowed',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
      maxLength: 500,
      admin: {
        description: 'Maximum 500 characters allowed',
      },
    },
    {
      name: 'essentials',
      type: 'array',
      label: 'Essentials List',
      labels: {
        singular: 'Essential Item',
        plural: 'Essential Items',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'Text Label',
          maxLength: 500,
          admin: {
            description: 'Maximum 500 characters allowed',
          },
        },

        {
          name: 'page',
          type: 'relationship',
          relationTo: 'live',
          required: false,
          label: 'Select Page Link',
        },

        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Image',
        },
      ],
    },
  ],
}

export default ChennaiLifeEssentialSection
