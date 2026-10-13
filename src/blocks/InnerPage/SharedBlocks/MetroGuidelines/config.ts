import { Block } from 'payload'

export const MetroGuidelinesBlock: Block = {
  slug: 'MetroGuidelinesBlock',
  labels: {
    singular: 'Metro Guidelines Section',
    plural: 'Metro Guidelines Sections',
  },
  imageURL: '/images/sections-image/singlealone4.jpg',
  admin: {
    group: 'Singe Alone Metro',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'IMPORTANT INFORMATION',
      required: true,
    },
    {
      name: 'guidelines',
      type: 'array',
      label: 'Guidelines List Points',
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Guideline / Rule Text',
          required: true,
        },
      ],
    },
    {
      name: 'checkSvgCode',
      type: 'textarea',
      label: 'Checkmark SVG Code (Optional - Default Check Circle used if empty)',
    },
  ],
}
