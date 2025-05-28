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
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
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
        },
        {
          name: 'link',
          type: 'text',
          required: true,
          label: 'Link',
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
