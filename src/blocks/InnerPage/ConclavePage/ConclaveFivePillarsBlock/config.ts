import { Block } from 'payload'

export const ConclaveFivePillarsBlock: Block = {
  slug: 'ConclaveFivePillarsBlock',
  labels: {
    singular: 'Conclave Pillars Section',
    plural: 'Conclave Pillars Sections',
  },

  admin: {
    group: 'Conclave Page',
  },

  imageURL: '/images/sections-image/ConclaveFivePillarsBlock.jpg',
  fields: [
    {
      name: 'sectionHeading',
      type: 'text',
      label: 'Main Section Heading',
      defaultValue: 'FIVE PILLARS OF SUPER CHENNAI',
      required: true,
    },
    {
      name: 'sectionSubheading',
      type: 'textarea',
      label: 'Section Subheading Text',
      defaultValue:
        'The conclave is anchored around five interconnected pillars that define a truly world-class city.',
      required: true,
    },
    {
      name: 'pillars',
      type: 'array',
      label: 'Pillar Items Grid',
      minRows: 1,
      labels: {
        singular: 'Pillar Card',
        plural: 'Pillar Cards',
      },
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Pillar Icon (SVG/PNG)',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Pillar Title',
          required: true,
        },
        {
          name: 'paragraphs',
          type: 'array',
          label: 'Pillar Description Paragraphs',
          minRows: 1,
          maxRows: 2, // Matches your layout with desc and desc2
          labels: {
            singular: 'Paragraph',
            plural: 'Paragraphs',
          },
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Paragraph Text',
              required: true,
              admin: {
                description: 'Supports HTML tags like <strong> or <br /> to bold phrases.',
              },
            },
          ],
        },
      ],
    },
  ],
}
