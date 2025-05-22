import { Block } from 'payload'

const TwoColumnFeatureBlock: Block = {
  slug: 'twoColumnFeatureBlock',
  labels: {
    singular: 'TwoColumnFeatureBlock',
    plural: 'TwoColumnFeatureBlock',
  },
  fields: [
    {
      name: 'techImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'techTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'techDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'eduImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'eduTitle',
      type: 'text',
      required: true,
    },
    {
      name: 'eduDescription',
      type: 'textarea',
      required: true,
    },
  ],
}

export default TwoColumnFeatureBlock
