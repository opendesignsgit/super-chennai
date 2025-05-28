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
    },
    {
      name: 'subheading',
      type: 'textarea',
    },
   
  ],
}

export default ChennaiInvestmentsBlock
