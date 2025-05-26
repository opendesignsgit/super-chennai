import { Block } from 'payload'

const ChennaiInvestmentsBlock: Block = {
  slug: 'chennaiInvestments',
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
