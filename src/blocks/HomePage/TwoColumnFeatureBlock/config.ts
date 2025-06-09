import { Block } from 'payload'

const TwoColumnFeatureBlock: Block = {
  slug: 'twoColumnFeatureBlock',
  labels: {
    singular: 'TwoColumnFeatureBlock',
    plural: 'TwoColumnFeatureBlock',
  },
  admin: {
    group: 'Homepage Sections',
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
      maxLength: 30,
      admin: {
        description: 'Maximum 30 characters allowed',
      },
    },
    {
      name: 'techDescription',
      type: 'textarea',
      required: true,
      maxLength: 200,
      admin: {
        description: 'Maximum 200 characters allowed',
      },
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
      maxLength: 30,
      admin: {
        description: 'Maximum 30 characters allowed',
      },
    },
    {
      name: 'eduDescription',
      type: 'textarea',
      required: true,
      maxLength: 200,
      admin: {
        description: 'Maximum 200 characters allowed',
      },
    },
  ],
}

export default TwoColumnFeatureBlock
