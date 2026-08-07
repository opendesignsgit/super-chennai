import { Block } from 'payload'

export const VisionMissionBlock: Block = {
  slug: 'VisionMissionBlock',
  labels: {
    singular: 'Vision Mission Block',
    plural: 'Vision Mission Blocks',
  },

  admin: {
    group: 'About Page',
  },
  imageURL: '/images/sections-image/visionimageabout.jpg',
  imageAltText: 'Vision Mission Section Preview',
  fields: [
    {
      name: 'cards',
      type: 'array',
      label: 'Vision & Mission Cards',
      dbName: 'vis_mis_c',
      minRows: 1,
      maxRows: 2,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Card Title (e.g. Vision / Mission)',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description Text',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Card Icon',
          required: true,
        },
      ],
    },
  ],
}
