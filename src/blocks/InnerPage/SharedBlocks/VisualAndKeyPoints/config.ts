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
          maxLength: 20,
          admin: {
            description: 'Maximum 20 characters allowed',
          },
        },
        {
          name: 'sectionDesc',
          type: 'textarea',
          maxLength: 400,
          admin: {
            description: 'Maximum 400 characters allowed',
          },
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
              maxLength: 20,
              admin: {
                description: 'Maximum 20 characters allowed',
              },
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
                  maxLength: 20,
                  admin: {
                    description: 'Maximum 20 characters allowed',
                  },
                },
                {
                  name: 'desc',
                  type: 'textarea',
                  maxLength: 400,
                  admin: {
                    description: 'Maximum 400 characters allowed',
                  },
                },
                {
                  name: 'para',
                  type: 'array',
                  label: 'List Items',
                  fields: [
                    {
                      name: 'point',
                      type: 'text',
                      maxLength: 400,
                      admin: {
                        description: 'Maximum 400 characters allowed',
                      },
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
