import type { Block } from 'payload'

export const GoluContestBlock: Block = {
  slug: 'goluContestBlock',
  labels: {
    singular: 'Golu Contest Multi-Step Flow',
    plural: 'Golu Contest Multi-Step Flows',
  },
  fields: [
    {
      name: 'contestName',
      type: 'text',
      defaultValue: 'Super Chennai Golu Contest 2026',
      required: true,
    },
    {
      name: 'goluMinImages',
      type: 'number',
      defaultValue: 2,
      label: 'Minimum Golu Photos Required',
    },
    {
      name: 'goluMaxImages',
      type: 'number',
      defaultValue: 5,
      label: 'Maximum Golu Photos Allowed',
    },
    {
      name: 'superChennaiMinImages',
      type: 'number',
      defaultValue: 1,
      label: 'Minimum Super Chennai Corner Photos Required',
    },
    {
      name: 'superChennaiMaxImages',
      type: 'number',
      defaultValue: 3,
      label: 'Maximum Super Chennai Corner Photos Allowed',
    },
  ],
}