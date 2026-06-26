import type { Block } from 'payload'

export const CricketScoreBlock: Block = {
  slug: 'cricketScoreBlock',

  labels: {
    singular: 'Cricket Score Block',
    plural: 'Cricket Score Blocks',
  },

  admin: {
    group: 'Sports',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'IPL Cricket Updates',
    },

    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'IPLimage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    // ################ POINTS TABLE ################
    {
      name: 'pointsTable',
      type: 'array',
      label: 'IPL Points Table',

      fields: [
        {
          name: 'teamName',
          type: 'text',
          required: true,
        },

        {
          name: 'teamLogo',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },

        {
          name: 'played',
          type: 'number',
          defaultValue: 0,
        },

        {
          name: 'won',
          type: 'number',
          defaultValue: 0,
        },

        {
          name: 'loss',
          type: 'number',
          defaultValue: 0,
        },

        {
          name: 'noResult',
          type: 'number',
          defaultValue: 0,
        },

        {
          name: 'netRunRate',
          type: 'text',
          defaultValue: '+0.000',
        },

        {
          name: 'points',
          type: 'number',
          defaultValue: 0,
        },
      ],
    },
  ],
}
