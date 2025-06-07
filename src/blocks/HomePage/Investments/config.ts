import { Block } from 'payload'

const ChennaiInvestmentsBlock: Block = {
  slug: 'chennaiInvestments',
  labels: {
    singular: 'Chennai Investments',
    plural: 'Chennai Investments',
  },
  admin: {
    group: 'Homepage Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      maxLength: 30,
      admin: {
        description: 'Maximum 30 characters allowed',
      },
    },
    {
      name: 'subheading',
      type: 'textarea',
      maxLength: 400,
      admin: {
        description: 'Maximum 400 characters allowed',
        placeholder: 'Enter a description',
      },
    },
  ],
}

export default ChennaiInvestmentsBlock
