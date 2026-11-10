import { Block } from 'payload'

export const AIArtChallengeBlock: Block = {
  slug: 'AIArtChallengeBlock',
  labels: {
    singular: 'AI Art Challenge Section',
    plural: 'AI Art Challenge Sections',
  },

  admin: {
    group: 'Super Chennai Contest - AI ReImagine',
  },
  imageURL: '/images/sections-image/ReimagineAI.jpg',
  fields: [
    {
      name: 'mainTitle',
      type: 'text',
      label: 'Main Heading Title',
      defaultValue: 'ai art challenge',
      required: true,
    },
    {
      name: 'introParagraphs',
      type: 'array',
      label: 'Intro Paragraphs',
      dbName: 'sc_ai_intro_paras',
      fields: [
        {
          name: 'text',
          type: 'textarea',
          label: 'Paragraph Text',
          required: true,
        },
      ],
      defaultValue: [
        {
          text: "Marina Beach with floating food stalls in 2050. Carnatic concerts in holographic halls. Filter coffee served by friendly robots in tomorrow's Mylapore or anything else you dream up can now find a canvas...",
        },
      ],
    },
    {
      name: 'challengeBox',
      type: 'group',
      label: 'The Challenge Box',
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Box Heading',
          defaultValue: 'The Challenge',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Challenge Description',
          defaultValue:
            "Create AI art that reimagines Chennai's future, its food, people, culture, music, landmarks, or anything that makes this city pulse with life.",
        },
      ],
    },
    {
      name: 'dealBox',
      type: 'group',
      label: 'The Deal Box',
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Box Heading',
          defaultValue: 'The Deal',
        },
        {
          name: 'dealItems',
          type: 'array',
          label: 'Deal Bullet Points',
          dbName: 'sc_ai_deal_items',
          fields: [
            {
              name: 'itemText',
              type: 'text',
              label: 'Point Text',
              required: true,
            },
          ],
          defaultValue: [
            { itemText: 'Open to Chennai enthusiasts across India' },
            { itemText: 'Submit up to 3 pieces that blend soul with artistry' },
            { itemText: 'Deadline: September 30th' },
          ],
        },
        {
          name: 'contactEmail',
          type: 'text',
          label: 'Submission Email',
          defaultValue: 'hello@superchennai.com',
        },
      ],
    },
    {
      name: 'payoffBox',
      type: 'group',
      label: 'The Payoff Box',
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Box Heading',
          defaultValue: 'The Payoff',
        },
        {
          name: 'payoffItems',
          type: 'array',
          label: 'Payoff Bullet Points',
          dbName: 'sc_ai_payoff_items',
          fields: [
            {
              name: 'itemText',
              type: 'text',
              label: 'Point Text',
              required: true,
            },
          ],
          defaultValue: [
            { itemText: '25 winning pieces showcased in a real art gallery' },
            { itemText: 'Artists keep proceeds from sales' },
            { itemText: "Your vision of Chennai's tomorrow, celebrated today" },
          ],
        },
        {
          name: 'closingParagraphs',
          type: 'array',
          label: 'Closing Paragraphs',
          dbName: 'sc_ai_closing_paras',
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Paragraph Text',
              required: true,
            },
          ],
          defaultValue: [
            {
              text: "Whether you're homesick in Mumbai, dreaming in Delhi, or right here in the heart of Chennai, if this city runs through your veins, this challenge is calling your name.",
            },
            {
              text: "Ready to show us Chennai like we've never seen it? The future is waiting for your brushstrokes.",
            },
          ],
        },
      ],
    },
  ],
}
