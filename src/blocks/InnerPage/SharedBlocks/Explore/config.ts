import { Block } from 'payload'

const ExploreMoreChennaiBlock: Block = {
  slug: 'exploreMoreChennai',
  labels: {
    singular: 'Explore More Slides',
    plural: 'Explore More Slides',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      maxLength: 100,
      admin: {
        description: 'Main title for the section. Max 100 characters.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      maxLength: 500,
      admin: {
        description: 'Short paragraph explaining the section. Max 500 characters allowed.',
      },
    },
    {
      name: 'apiEndpoint',
      type: 'select',
      options: [
        { label: 'Live', value: 'live' },
        { label: 'Visit', value: 'visits' },
        { label: 'Investments', value: 'investments' },
      ],
      defaultValue: 'live',
      required: true,
      label: 'Select Data Source',
    },
  ],
}

export default ExploreMoreChennaiBlock
