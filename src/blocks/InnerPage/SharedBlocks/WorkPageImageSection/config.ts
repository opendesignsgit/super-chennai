import { Block } from 'payload'

export const WorkPageImageSectionBlock: Block = {
  slug: 'WorkPageImageSectionBlock',
  dbName: 'wpis_b',
  labels: {
    singular: 'Work Page Image Section',
    plural: 'Work Page Image Sections',
  },
  imageURL: '/images/sections-image/workimagesections.jpg',
  imageAltText: 'Work Page Image Section Preview',

  admin: {
    group: 'Work Detail Page',
  },
  fields: [
    {
      name: 'sections',
      type: 'array',
      label: 'Permit Zones / Sections',
      dbName: 'wpis_s',
      minRows: 1,
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
          label: 'Section Main Image',
          required: true,
        },
        {
          name: 'imgAlt',
          type: 'text',
          label: 'Main Image Alt Text',
        },
        // Flattened structure to avoid 3-level deep array truncation crash
        {
          name: 'points',
          type: 'array',
          label: 'Points List',
          dbName: 'wpis_p',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Point Title',
              required: true,
            },
            {
              name: 'desc',
              type: 'textarea',
              label: 'Point Subtitle / Description',
            },
            {
              name: 'para',
              type: 'array',
              label: 'Bullet Points List',
              dbName: 'wpis_bp',
              fields: [
                {
                  name: 'point',
                  type: 'textarea',
                  label: 'Bullet Text',
                  required: true,
                },
              ],
            },
            {
              name: 'imgs',
              type: 'upload',
              relationTo: 'media',
              label: 'Point Icon / Image',
            },
            {
              name: 'imgAlt',
              type: 'text',
              label: 'Icon Alt Text',
            },
          ],
        },
      ],
    },
  ],
}
