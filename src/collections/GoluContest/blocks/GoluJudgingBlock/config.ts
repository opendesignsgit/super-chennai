import { Block } from 'payload'

export const GoluJudgingBlock: Block = {
  slug: 'goluJudging', // React-ல் render செய்ய இந்தப் பெயர் பயன்படும்
  labels: {
    singular: 'Golu Judging Section',
    plural: 'Golu Judging Sections',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Main Title',
      defaultValue: 'How Will Your Golu Be Judged?',
      required: true,
    },
    // Stage 1 Fields
    {
      name: 'stage1',
      type: 'group',
      label: 'Stage 01 Configuration',
      fields: [
        {
          name: 'badgeText',
          type: 'text',
          defaultValue: 'Stage 01',
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Stage 1 Icon Image',
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Get Shortlisted',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          defaultValue: 'Super Chennai Corner',
        },
        {
          name: 'paragraph1',
          type: 'textarea',
          defaultValue:
            'Your Super Chennai Corner is your chance to showcase what makes Chennai special. Bring your creativity, local pride and unique ideas together to stand out and get shortlisted.',
        },
        {
          name: 'paragraph2',
          type: 'textarea',
          defaultValue:
            'Creating a dedicated Super Chennai Corner is mandatory for every entry. The creativity, relevance and originality of the Corner will play a key role in determining which Golus move forward to the final round.',
        },
      ],
    },
    // Stage 2 Fields
    {
      name: 'stage2',
      type: 'group',
      label: 'Stage 02 Configuration',
      fields: [
        {
          name: 'badgeText',
          type: 'text',
          defaultValue: 'Stage 02',
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Stage 2 Icon Image',
        },
        {
          name: 'title',
          type: 'text',
          defaultValue: 'Win The Prize',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
          defaultValue: 'Grandness + Innovation',
        },
        {
          name: 'paragraph1',
          type: 'textarea',
          defaultValue:
            'Shortlisted Golus will be evaluated based on their overall grandness, creativity and innovation. Judges will also consider how effectively the Golu brings the theme to life, including the concept and execution of the Super Chennai Corner.',
        },
        {
          name: 'paragraph2',
          type: 'textarea',
          defaultValue:
            'The Super Chennai Corner gets you shortlisted, while the grandness and innovation of your Golu determine whether you win the prize.',
        },
      ],
    },
  ],
}