import { Block } from 'payload'

export const FaqSectionBlock: Block = {
  slug: 'FaqSectionBlock',
  labels: {
    singular: 'FAQ Section',
    plural: 'FAQ Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Main Title (e.g., FAQ)',
      defaultValue: 'FAQ',
      required: true,
    },
    {
      name: 'smallTitleText',
      type: 'text',
      label: 'Small Sub-Text inside Title (e.g., s for FAQs)',
      defaultValue: 's',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Description',
      defaultValue: "Learn everything about Super Chennai and how it's shaping the city's future.",
    },
    {
      name: 'faqList',
      type: 'array',
      label: 'FAQ Items List',
      minRows: 1,
      labels: {
        singular: 'FAQ Item',
        plural: 'FAQ Items',
      },
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'Question',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Answer',
          required: true,
        },
      ],
    },
  ],
}
