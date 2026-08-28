import { Block } from 'payload'

export const VisitWellnessSectionBlock: Block = {
  slug: 'visitWellnessBlock', // 👈 Shortened slug (crucial for Postgres)
  dbName: 'vw_block', // 👈 Short unique root DB name
  labels: {
    singular: 'Visit Wellness Section',
    plural: 'Visit Wellness Sections',
  },
  imageURL: '/images/sections-image/wellness-section.jpg',
  imageAltText: 'Visit Wellness Section Preview',

  admin: {
    group: 'Visit Pages',
  },
  fields: [
    {
      name: 'sections',
      type: 'array',
      label: 'Wellness Sections List',
      dbName: 'vws', // Short array identifier
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
          dbName: 'vwt', // Short array identifier
          fields: [
            {
              name: 'points',
              type: 'array',
              label: 'Point Details',
              dbName: 'vwp', // Short array identifier
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Point Title',
                  required: true,
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
                  label: 'Explore Link URL (Optional)',
                },
                {
                  name: 'listItems',
                  type: 'array',
                  label: 'Bullet List Items',
                  dbName: 'vwl', // Short array identifier
                  fields: [
                    {
                      name: 'boldText',
                      type: 'text',
                      label: 'Bold Title / Place Name',
                    },
                    {
                      name: 'text',
                      type: 'text',
                      label: 'Description Text',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
