import { Block } from 'payload'

export const FeatureSectionsBlock: Block = {
  slug: 'featureSections',
  labels: {
    singular: 'VisualAndKeyPoints (Education)',
    plural: 'VisualAndKeyPoints',
  },
  fields: [
    {
      name: 'sections',
      type: 'array',
      label: 'Image Content Sections',
      fields: [
        {
          name: 'sectionTitle',
          type: 'text',
          required: true,
        },
        {
          name: 'sectionDesc',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'tenantInfoSections',
          type: 'array',
          label: 'Tenant Info Sections',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            {
              name: 'points',
              type: 'array',
              label: 'Points',
              fields: [
                {
                  name: 'imgs',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'desc',
                  type: 'textarea',
                },
                {
                  name: 'para',
                  type: 'array',
                  label: 'List Items',
                  fields: [
                    {
                      name: 'point',
                      type: 'text',
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
export default FeatureSectionsBlock
