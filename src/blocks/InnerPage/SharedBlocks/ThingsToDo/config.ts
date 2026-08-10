import { Block } from 'payload'

export const ThingsToDoBlock: Block = {
  slug: 'thingstodoPage', // 👈 Requested Name Slug
  dbName: 'ttd_blk', // Ultra-short DB identifier
  labels: {
    singular: 'Things To Do Block',
    plural: 'Things To Do Blocks',
  },
  imageURL: '/images/sections-image/ImagewithContent.jpg',
  imageAltText: 'Things To Do Section Preview',

  admin: {
    group: 'Live Detail Page ',
  },
  fields: [
    {
      name: 'sections',
      type: 'array',
      label: 'Image & Activity Sections List',
      dbName: 'ttd_sec',
      fields: [
        {
          name: 'sectionTitle',
          type: 'text',
          label: 'Section Title',
          required: true,
        },
        {
          name: 'sectionDesc',
          type: 'textarea',
          label: 'Section Description',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Main Section Image',
          required: true,
        },
        {
          name: 'imgAlt',
          type: 'text',
          label: 'Main Image Alt Text',
        },
        {
          name: 'tenants',
          type: 'array',
          label: 'Feature Cards List',
          dbName: 'ttd_tnt',
          fields: [
            {
              name: 'points',
              type: 'array',
              label: 'Point Details',
              dbName: 'ttd_pts',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Point Title',
                  required: true,
                },
                {
                  name: 'para',
                  type: 'textarea',
                  label: 'Point Description',
                },
                {
                  name: 'imgs',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Icon Image',
                },
                {
                  name: 'imgAlt',
                  type: 'text',
                  label: 'Icon Alt Text',
                },
                {
                  name: 'link',
                  type: 'text',
                  label: 'Explore Link URL',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
