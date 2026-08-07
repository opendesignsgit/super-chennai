import { Block } from 'payload'

export const AboutWelcomeSuperChennaiBlockNew: Block = {
  slug: 'AboutWelcomeSuperChennaiBlockNew',
  labels: {
    singular: 'About Welcome Super Chennai',
    plural: 'About Welcome Super Chennai',
  },
  admin: {
    group: 'About Page',
  },

  imageURL: '/images/sections-image/welcometosuperchennai.jpg',
  fields: [
    {
      name: 'heading',
      type: 'textarea',
      label: 'Main Heading (Supports <br />)',
      defaultValue: '',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Subheading',
      defaultValue: '',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Section Image',
    },
    // Dynamic Columns (Max 3 for grid layout)
    {
      name: 'columns',
      type: 'array',
      label: 'Text Columns',
      dbName: 'wsc_cols',
      maxRows: 3,
      fields: [
        {
          name: 'paragraphs',
          type: 'textarea',
          label: 'Paragraphs (One paragraph per line)',
          defaultValue: '',
        },
      ],
    },
  ],
}
