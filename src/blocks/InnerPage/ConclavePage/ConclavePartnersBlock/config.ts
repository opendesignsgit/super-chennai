import { Block } from 'payload'

export const ConclavePartnersBlock: Block = {
  slug: 'ConclavePartnersBlock',
  labels: {
    singular: 'Conclave Partners Section',
    plural: 'Conclave Partners Sections',
  },
  admin: {
    group: 'Conclave Page',
  },
  imageURL: '/images/sections-image/ConclavePartnersBlock.jpg',
  fields: [
    {
      name: 'sectionHeading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'Partner',
      required: true,
    },
    {
      name: 'partners',
      type: 'array',
      label: 'Partner Logos List',
      minRows: 1,
      labels: {
        singular: 'Partner Logo',
        plural: 'Partner Logos',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Partner Logo Image',
          required: true,
        },
        {
          name: 'description',
          type: 'upload',
          relationTo: 'media',
          label: 'Partner Description / Detail Image',
          required: false,
          admin: {
            description: 'Image to show in popup or detailed view.',
          },
        },
      ],
    },
  ],
}
