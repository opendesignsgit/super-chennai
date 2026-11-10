import { Block } from 'payload'

export const NammaStoriesGenZStageBlock: Block = {
  slug: 'NammaStoriesGenZStageBlock',
  labels: {
    singular: 'Gen Z Stage Section',
    plural: 'Gen Z Stage Sections',
  },
  admin: {
    group: 'Super Chennai Contest - Gen Z Content Creators',
  },

  imageURL: '/images/sections-image/gen-z-content-creatorsthisischennai.jpg',
  fields: [
    {
      name: 'mainTitle',
      type: 'text',
      label: 'Main Heading Title',
      defaultValue: 'Chennai, This is Your Stage.',
      required: true,
    },
    {
      name: 'columnOneParagraphs',
      type: 'array',
      label: 'Column 1 Paragraphs',
      dbName: 'genz_col1_paras', // 👈 Short DB table name for array
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
          text: "Super Chennai is building a new generation of storytellers who truly represent the city. We're not looking for perfect influencers or polished celebrities. We want real people with real energy, real voices, and real Chennai vibes",
        },
        {
          text: 'If you love your streets, your food spots, your slang, your culture, your people, and the everyday magic of this city this is for you. Show us Chennai through your eyes with a short 30 to 60 second reel',
        },
      ],
    },
    {
      name: 'columnTwoParagraphs',
      type: 'array',
      label: 'Column 2 Paragraphs',
      dbName: 'genz_col2_paras', // 👈 Short DB table name for array
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
          text: "Whether you're funny, expressive, bold, emotional, stylish, or simply yourself-your story matters here. Join a Gen Z creator collective that celebrates the evolving spirit of Chennai",
        },
        {
          text: 'This is your chance to be seen, heard, and featured',
        },
      ],
    },
  ],
}
