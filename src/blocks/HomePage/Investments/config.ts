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
    {
      name: 'categorySource',
      type: 'relationship',
      relationTo: 'investment-categories',
      hasMany: true,
      required: false,
    },
  ],
}

export default ChennaiInvestmentsBlock
