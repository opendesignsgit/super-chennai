import { Block } from 'payload'

export const WhyJoinSuperChennaiBlock: Block = {
  slug: 'WhyJoinSuperChennaiBlock',
  labels: {
    singular: 'Why Join Super Chennai Section',
    plural: 'Why Join Super Chennai Sections',
  },
  admin: {
    group: 'Super Chennai Contest - Gen Z Content Creators',
  },

  imageURL: '/images/sections-image/gen-z-content-creatorwhythischennai.jpg',
  fields: [
    {
      name: 'mainTitle',
      type: 'text',
      label: 'Main Heading Title',
      defaultValue: 'WHY JOIN SUPER CHENNAI?',
      required: true,
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      label: 'Section Description',
      defaultValue:
        "We're creating a fresh digital movement powered by Gen Z creators who genuinely live the city. Whether you love street culture, fashion, cinema, hidden places, memes, or storytelling - this platform is for you.",
    },
    {
      name: 'benefitsCards',
      type: 'array',
      label: 'Benefits Cards',
      dbName: 'sc_benefits_cards', // 👈 Short DB table name to prevent 63-char limit error
      fields: [
        {
          name: 'cardIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Card Icon SVG/Image',
          required: true,
        },
        {
          name: 'cardTitle',
          type: 'text',
          label: 'Card Title',
          required: true,
        },
        {
          name: 'cardText',
          type: 'textarea',
          label: 'Card Description',
          required: true,
        },
        {
          name: 'themeColor',
          type: 'select',
          label: 'Border & Text Theme Color',
          defaultValue: 'blue',
          options: [
            { label: 'Blue', value: 'blue' },
            { label: 'Pink', value: 'pink' },
          ],
        },
      ],
      defaultValue: [
        {
          cardTitle: 'CREATE REAL CONTENT',
          cardText:
            "Shoot reels, street stories, interviews, trends, and everything that reflects Chennai's evolving culture.",
          themeColor: 'blue',
        },
        {
          cardTitle: 'BUILD YOUR IDENTITY',
          cardText:
            'Collaborate with Super Chennai and become part of a growing creator community that actually gets noticed.',
          themeColor: 'pink',
        },
        {
          cardTitle: 'CREATIVE FREEDOM',
          cardText:
            "We're not looking for polished influencers. We want originality, personality, humor, and authenticity.",
          themeColor: 'blue',
        },
        {
          cardTitle: 'REPRESENT CHENNAI',
          cardText:
            'Show your side of Chennai — local spots, people, hidden gems, trends, culture, and city experiences.',
          themeColor: 'pink',
        },
      ],
    },
  ],
}
