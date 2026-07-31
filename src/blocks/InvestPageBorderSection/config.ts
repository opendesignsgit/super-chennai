import { Block } from 'payload'

export const InvestPageBorderSection: Block = {
  // DB table name length reduce aaguradhukkaga short slug
  slug: 'InvestPageBorderSection',
  labels: {
    singular: 'Invest Page Border Section',
    plural: 'Invest Page Border Sections',
  },

  imageURL: '/images/sections-image/investbordersection.jpg',
  fields: [
    {
      name: 'tenantInfoSections',
      type: 'array',
      label: 'Tenant Info Items',
      dbName: 't_info_secs',
      minRows: 1,
      labels: {
        singular: 'Tenant Info Item',
        plural: 'Tenant Info Items',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'iconImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon / Image',
          required: true,
        },
        {
          name: 'imgAlt',
          type: 'text',
          label: 'Image Alt Text',
        },
        {
          name: 'points',
          type: 'array',
          label: 'Points List',
          dbName: 't_pts',
          minRows: 1,
          labels: {
            singular: 'Point',
            plural: 'Points',
          },
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Point Content',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
