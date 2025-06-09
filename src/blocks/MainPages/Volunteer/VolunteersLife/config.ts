import { Block } from 'payload'

const volunteerContentBlock: Block = {
  slug: 'volunteerContentBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'paragraphs',
      type: 'array',
      fields: [
        {
          name: 'text',
          type: 'textarea',
          maxLength: 300,
          admin: {
            description: 'Maximum 300 characters allowed',
          },
        },
      ],
    },
  ],
}

export default volunteerContentBlock
