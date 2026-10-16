import { Block } from 'payload'

export const KiteFestivalHighlightsBlock: Block = {
  slug: 'KiteFestivalHighlights',
  labels: {
    singular: 'Kite Festival Highlights Section',
    plural: 'Kite Festival Highlights Sections',
  },
  admin: {
    group: 'Kite Festival Page',
  },

  imageURL: '/images/sections-image/kitefestimorethan.jpg',
  fields: [
    {
      name: 'tagText',
      type: 'text',
      label: 'Top Small Tag',
      defaultValue: 'Festival Attractions',
      required: true,
    },
    {
      name: 'mainHeading',
      type: 'text',
      label: 'Main Heading',
      defaultValue: 'More Than Just A Kite Show',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Description',
      defaultValue:
        'Explore the array of entertainment, culinary delights, and artistic exhibits planned across the three-day carnival.',
    },
    {
      name: 'highlightsList',
      type: 'array',
      label: 'Attraction Cards',
      minRows: 1,
      maxRows: 8,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Card Title',
          required: true,
        },
        {
          name: 'desc',
          type: 'textarea',
          label: 'Card Description',
          required: true,
        },
        {
          name: 'svgCode',
          type: 'textarea',
          label: 'Card Icon SVG Code',
          required: true,
        },
      ],
    },
    // Callout Banner Fields
    {
      name: 'bannerTitle',
      type: 'text',
      label: 'Banner Title',
      defaultValue: "Ready to experience Mamallapuram's sky?",
    },
    {
      name: 'bannerDescription',
      type: 'textarea',
      label: 'Banner Description',
      defaultValue: 'Plan your family outing from 14 to 16 August at TTDC Ocean View grounds, ECR.',
    },
    {
      name: 'badgeText',
      type: 'text',
      label: 'Banner Badge Text',
      defaultValue: '14–16 August',
    },
    {
      name: 'badgeSvgCode',
      type: 'textarea',
      label: 'Banner Badge Icon SVG Code (Optional)',
    },
  ],
}
