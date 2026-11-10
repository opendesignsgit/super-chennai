import type { Block } from 'payload'

export const GoluPrizesBlock: Block = {
  slug: 'goluPrizes',
  labels: {
    singular: 'Golu Prizes & Categories Block',
    plural: ' Golu Prizes & Categories Blocks',
  },
  admin: {
    group: 'Icon of the Month',
  },
  fields: [
    {
      name: 'headerTitle',
      type: 'text',
      required: true,
      defaultValue: 'EXCITING PRIZES & CATEGORIES',
      label: 'Header Title',
    },
    {
      name: 'subTitle',
      type: 'text',
      defaultValue: 'Celebrate creativity with wonderful rewards',
      label: 'Subtitle',
    },
    {
      name: 'prizesList',
      type: 'array',
      required: true,
      dbName: 'golu_prize_items', // 👈 Short DB table name for Postgres safety
      fields: [
        {
          name: 'badge',
          type: 'text',
          label: 'Prize Badge (e.g., 1st Prize)',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Category Name',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Prize Description',
          required: true,
        },
        {
          name: 'iconEmoji',
          type: 'text',
          defaultValue: '🏆',
          label: 'Icon Emoji / Symbol',
        },
        {
          name: 'cardBgColor',
          type: 'text',
          defaultValue: 'bg-purple-50/50 border-purple-100',
          label: 'Card Tailwind Classes',
        },
      ],
      defaultValue: [
        {
          badge: '1st Prize',
          title: 'Best Traditional Golu',
          description: 'Awarded for authentic traditional doll arrangement and storytelling.',
          iconEmoji: '🏆',
          cardBgColor: 'bg-pink-50/50 border-pink-100',
        },
        {
          badge: '2nd Prize',
          title: 'Most Innovative Theme',
          description: 'Recognizing unique social awareness or contemporary concepts.',
          iconEmoji: '🥈',
          cardBgColor: 'bg-purple-50/50 border-purple-100',
        },
        {
          badge: '3rd Prize',
          title: 'Eco-Friendly Setup',
          description: 'Honoring sustainable materials, organic decor, and green practices.',
          iconEmoji: '🌱',
          cardBgColor: 'bg-indigo-50/50 border-indigo-100',
        },
      ],
    },
  ],
}
