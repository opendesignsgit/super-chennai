import { Block } from 'payload'

export const AboutFoundationsBlock: Block = {
  slug: 'AboutFoundationsBlock',
  labels: {
    singular: 'About Foundations Block',
    plural: 'About Foundations Blocks',
  },

  admin: {
    group: 'About Page',
  },
  imageURL: '/images/sections-image/aboutus-foundation.jpg',
  imageAltText: 'Foundations Section Preview',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Main Heading Title',
      defaultValue: 'Foundations of Modern Chennai',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Section Image',
      required: true,
    },
    {
      name: 'paragraph1',
      type: 'textarea',
      label: 'First Paragraph',
      defaultValue:
        'The modern foundations of Chennai were laid on August 22, 1639, a date now proudly celebrated as Chennai Day. This moment marked the formal recognition of the region’s growth into an organized urban centre with expanding civic and economic importance.',
    },
    {
      name: 'paragraph2',
      type: 'textarea',
      label: 'Second Paragraph',
      defaultValue:
        "By 1640, key developments had begun to shape the city's layout and identity. Chennai steadily grew by integrating nearby villages, evolving into a connected and planned cityscape.",
    },
    {
      name: 'highlightText',
      type: 'text',
      label: 'Bold Highlight Text',
      defaultValue: 'In the decades that followed, the city laid the groundwork for many firsts',
    },
    // Dynamic Bullet Points Array
    {
      name: 'points',
      type: 'array',
      label: 'Bullet Points List',
      dbName: 'fnd_pts',
      fields: [
        {
          name: 'text',
          type: 'textarea',
          label: 'Bullet Point Content',
          required: true,
        },
      ],
    },
  ],
}
