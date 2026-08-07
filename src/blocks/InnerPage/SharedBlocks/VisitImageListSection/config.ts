import { Block } from 'payload'

export const VisitImageListSectionBlock: Block = {
  slug: 'VisitImageListBlock',
  dbName: 'vils_b',
  imageURL: '/images/sections-image/ImagewithContent.jpg',
  imageAltText: 'Image Overlay Section Preview',
  labels: {
    singular: 'Visit Image List Section 1',
    plural: 'Visit Image List Sections 1',
  },
  fields: [
    {
      name: 'sections',
      type: 'array',
      label: 'Image Sections',
      dbName: 'vils_s',
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
        {
          name: 'tenantSections',
          type: 'array',
          label: 'Tenant / Feature Info Sections',
          dbName: 'vils_t',
          fields: [
            {
              name: 'points',
              type: 'array',
              label: 'Points List',
              dbName: 'vils_p',
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
                  name: 'imgAlt',
                  type: 'text',
                  label: 'Icon Alt Text',
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
