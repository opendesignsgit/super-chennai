import { Block } from 'payload'

export const ImageOverlaySectionWithPointsBlock: Block = {
  slug: 'ImageOverlaySectionWithPointsBlock', // Shortened slug to prevent 63-char error
  imageURL: '/images/sections-image/ImagewithContent.jpg',
  imageAltText: 'Image Overlay Section Preview',
  labels: {
    singular: 'Image Overlay Section',
    plural: 'Image Overlay Sections',
  },
  fields: [
    {
      name: 'imageSections',
      type: 'array',
      label: 'Image Sections',
      dbName: 'iowp_sec', // Reference style short identifier
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
          name: 'tenantInfoSections',
          type: 'array',
          label: 'Tenant / Feature Info Sections',
          dbName: 'iowp_tenant', // Reference style short identifier
          fields: [
            {
              name: 'points',
              type: 'array',
              label: 'Points List',
              dbName: 'iowp_pts', // Reference style short identifier
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
                  label: 'Point Paragraph / Description',
                },
                {
                  name: 'imgs',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Point Icon / Image',
                },
                {
                  name: 'link',
                  type: 'text',
                  label: 'Explore Link (Optional)',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
