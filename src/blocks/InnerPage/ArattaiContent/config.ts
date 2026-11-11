import { Block } from 'payload'

export const ArrataiContent: Block = {
  slug: 'arrataiContent',
  labels: {
    singular: 'Arratai Content Block',
    plural: 'Arratai Content Blocks',
  },

  admin: {
    group: 'Arattai Page',
  },

  imageURL: '/images/sections-image/arattaicontent.jpg',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Arattai with',
      label: 'Section Heading',
    },
    {
      name: 'content',
      type: 'richText', // Payload v3 Lexical RichText
      required: true,
      label: 'Content Paragraphs',
    },
  ],
}
