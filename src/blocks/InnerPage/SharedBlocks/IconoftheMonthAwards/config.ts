import { Block } from 'payload'

export const AwardsMilestonesBlock: Block = {
  slug: 'AwardsMilestonesBlock',
  labels: {
    singular: 'Awards & Milestones Block',
    plural: 'Awards & Milestones Blocks',
  },
  imageURL: '/images/sections-image/awards-section.jpg',
  imageAltText: 'Awards & Milestones Section Preview',
  admin: {
    group: 'Icon of the Month',
  },
  fields: [
    {
      name: 'awardsTitle',
      type: 'text',
      label: 'Main Section Title',
      defaultValue: 'AWARDS & MILESTONES',
    },
    {
      name: 'awardsSubtitle',
      type: 'textarea',
      label: 'Subtitle / Description',
      defaultValue:
        'Kumaravel’s journey is marked by bold bets, social impact, and global recognition',
    },
    {
      name: 'awardsImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Section Image',
    },
    {
      name: 'awardsList',
      type: 'array',
      label: 'Awards List',
      dbName: 'am_items',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Award Title / Description',
          required: true,
        },
      ],
    },
    {
      name: 'awardsNote',
      type: 'textarea',
      label: 'Bottom Speaker Note',
      defaultValue:
        'He’s a sought-after speaker at leadership forums including TechSparks, TiE, CII, and South India Talks OOH (2025 Keynote Speaker).',
    },
  ],
}
