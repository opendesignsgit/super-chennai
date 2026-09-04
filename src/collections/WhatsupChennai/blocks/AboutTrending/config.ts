import { Block } from 'payload'

export const AboutTrendingBlock: Block = {
  slug: 'aboutTrending',
  interfaceName: 'AboutTrendingBlock',
  labels: {
    singular: 'About Trending Section',
    plural: 'About Trending Sections',
  },
  fields: [
    {
      name: 'badgeText',
      type: 'text',
      label: 'Badge Text',
      defaultValue: 'Curated Experiences',
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      required: true,
      defaultValue: 'ABOUT THE TRENDING',
    },
    {
      name: 'paragraphs',
      type: 'array',
      label: 'Content Paragraphs',
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'textarea',
          label: 'Paragraph Text',
          required: true,
        },
      ],
    },
    {
      name: 'quote',
      type: 'text',
      label: 'Highlight Quote',
      defaultValue: 'New week. New experiences. Only in Chennai.',
    },
    {
      name: 'cta',
      type: 'group',
      label: 'CTA Button',
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Button Label',
          defaultValue: 'EXPLORE EXPERIENCES',
        },
        {
          name: 'url',
          type: 'text',
          label: 'Button URL',
          defaultValue: '#',
        },
      ],
    },
    {
      name: 'imageGroup',
      type: 'group',
      label: 'Right Side Image Details',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Hero Image',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
          label: 'Image Location Caption',
          defaultValue: '📍 Central Marina Promenade, Chennai',
        },
        {
          name: 'imageLink',
          type: 'text',
          label: 'Image Click Link (Optional)',
        },
      ],
    },
  ],
}