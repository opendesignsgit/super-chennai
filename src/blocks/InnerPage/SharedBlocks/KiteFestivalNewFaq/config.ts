import { Block } from 'payload'

export const KiteFestivalNewFaqBlock: Block = {
  slug: 'KiteFestivalNewFaq',
  dbName: 'kf_new_faq_block',
  labels: {
    singular: 'Kite Festival FAQ Section',
    plural: 'Kite Festival FAQ Sections',
  },
  admin: {
    group: 'Kite Festival Page',
  },

  imageURL: '/images/sections-image/kitefestivalfaq.jpg',

  fields: [
    {
      name: 'tagText',
      type: 'text',
      label: 'Top Small Tag',
      defaultValue: 'Got Questions?',
      required: true,
    },
    {
      name: 'mainHeading',
      type: 'text',
      label: 'Main Heading',
      defaultValue: 'Frequently Asked Questions',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Description',
      defaultValue:
        'Everything you need to know before heading to the 5th Tamil Nadu International Kite Festival 2026.',
    },
    {
      name: 'faqsList',
      type: 'array',
      label: 'FAQ Items (Questions & Answers)',
      dbName: 'kf_new_faqs_list',
      interfaceName: 'KiteFestivalNewFAQItem',
      minRows: 1,
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
