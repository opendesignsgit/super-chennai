import { Block } from 'payload'

export const FeatureListBlock: Block = {
  slug: 'featureListBlock',
  labels: {
    singular: 'Feature List Block',
    plural: 'Feature List Blocks',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Main Heading (H3)',
      required: true,
    },
    {
      name: 'sideImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Main Side Banner Image',
      required: true,
    },
    {
      name: 'features',
      type: 'array',
      label: 'Feature Items List',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Feature Item Title (Optional)',
        },
        {
          name: 'desc',
          type: 'textarea',
          label: 'Feature Description Text',
          required: true,
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Custom Feature Icon (Fallback SVG used if empty)',
        },
      ],
    },
  ],
}

export default FeatureListBlock