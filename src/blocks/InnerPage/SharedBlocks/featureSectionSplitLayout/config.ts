import { Block } from 'payload'

const featureSectionSplitLayoutBlock: Block = {
  slug: 'featureSectionSplit',
  labels: {
    singular: 'featureSectionSplit',
    plural: 'featureSectionSplit',
  },
  fields: [
    {
      name: 'imgSec',
      type: 'array',
      label: 'Image Sections',
      fields: [
        {
          name: 'img',
          type: 'upload',
          relationTo: 'media',
          label: 'Main Image',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
          required: true,
        },
        {
          name: 'desc',
          type: 'textarea',
          label: 'Section Description',
        },
        {
          name: 'tenantInfo',
          type: 'array',
          label: 'Tenant Info Sections',
          fields: [
            {
              name: 'pts',
              type: 'array',
              label: 'Points',
              fields: [
                {
                  name: 'icon',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Icon Image',
                },
                {
                  name: 'heading',
                  type: 'text',
                  label: 'Title',
                },
                {
                  name: 'body',
                  type: 'textarea',
                  label: 'Description',
                },
                {
                  name: 'url',
                  type: 'text',
                  label: 'Explore More Link',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
export default featureSectionSplitLayoutBlock
