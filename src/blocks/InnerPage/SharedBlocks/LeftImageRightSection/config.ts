import { Block } from 'payload'

export const LeftImageRightSectionBlock: Block = {
  // Slug-a 63-character limit-kulla thanga short-a maathiyachu (Postgres table name length fix)
  slug: 'LImgRSecBlock',
  dbName: 'l_img_r_sec', // Database table prefix shortening
  labels: {
    singular: 'Left Image Right Section',
    plural: 'Left Image Right Sections',
  },
  imageURL: '/images/sections-image/ConclaveAgendaBlock.jpg',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title / Tagline (e.g., Special Economic Zones (SEZs))',
      defaultValue: '',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description Text',
      defaultValue: '',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Section Image',
    },
    {
      name: 'imageAlt',
      type: 'text',
      label: 'Image Alt Text',
      defaultValue: '',
    },
    {
      name: 'themePattern',
      type: 'select',
      dbName: 'theme_ptrn', // Enum table identifier boundary safe-a irukka dbName add pannaachu
      label: 'Background Pattern / Theme',
      defaultValue: 'pattern-a',
      options: [
        { label: 'Pattern A (White BG)', value: 'pattern-a' },
        { label: 'Pattern B (Alternate BG)', value: 'pattern-b' },
      ],
    },
  ],
}
