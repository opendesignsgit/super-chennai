import { Block } from 'payload'

export const NaturalsBlock: Block = {
  slug: 'naturals-block',
  labels: {
    singular: 'Icon of the Month (Pink Two Column Section)',
    plural: 'Icon of the Month (Pink Two Column Sections)',
  },
  fields: [
    {
      name: 'sections',
      type: 'array',
      label: 'Sections',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Section Title',
          required: true,
          admin: {
            description: 'Use a break tag <br /> or newline if needed (handled in component).',
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // Make sure this matches your media collection slug
          label: 'Section Image',
          required: false,
        },
        {
          name: 'content',
          type: 'array',
          label: 'Content Paragraphs',
          minRows: 1,
          fields: [
            {
              name: 'paragraph',
              type: 'textarea',
              label: 'Paragraph Text',
              required: true,
              admin: {
                description: 'You can use HTML tags like <strong> or <br /> to style key phrases.',
              },
            },
          ],
        },
      ],
    },
  ],
}
