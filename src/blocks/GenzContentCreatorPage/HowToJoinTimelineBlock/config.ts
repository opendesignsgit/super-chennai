import { Block } from 'payload'

export const HowToJoinTimelineBlock: Block = {
  slug: 'HowToJoinTimelineBlock',
  labels: {
    singular: 'How To Join Timeline Section',
    plural: 'How To Join Timeline Sections',
  },
  admin: {
    group: 'Super Chennai Contest - Gen Z Content Creators',
  },
  imageURL: '/images/sections-image/howtojoinsection.jpg',

  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Main Heading Title',
      defaultValue: 'HOW TO JOIN?',
      required: true,
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Timeline Steps',
      dbName: 'sc_join_steps', // 👈 Short DB table name to prevent 63-char limit error
      fields: [
        {
          name: 'stepNumber',
          type: 'text',
          label: 'Step Number Label (e.g. STEP 01)',
          required: true,
        },
        {
          name: 'stepIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Step Icon SVG/Image',
          required: true,
        },
        {
          name: 'stepDescription',
          type: 'textarea',
          label: 'Step Description',
          required: true,
        },
        {
          name: 'themeColor',
          type: 'select',
          label: 'Theme Color (Circle & Text)',
          defaultValue: 'blue',
          options: [
            { label: 'Blue', value: 'blue' },
            { label: 'Pink', value: 'pink' },
          ],
        },
      ],
      defaultValue: [
        {
          stepNumber: 'STEP 01',
          stepDescription: 'Create a 30-60 sec Reel',
          themeColor: 'blue',
        },
        {
          stepNumber: 'STEP 02',
          stepDescription: 'Upload your reel link',
          themeColor: 'pink',
        },
        {
          stepNumber: 'STEP 03',
          stepDescription: 'Tell us why you love Chennai',
          themeColor: 'blue',
        },
        {
          stepNumber: 'STEP 04',
          stepDescription: 'Get shortlisted & collaborate',
          themeColor: 'pink',
        },
      ],
    },
  ],
}
