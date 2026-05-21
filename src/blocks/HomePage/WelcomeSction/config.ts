import { Block } from 'payload'

const SecondSectionBlock: Block = {
  slug: 'secondSection',
  labels: {
    singular: 'Welcome To Super Chennai',
    plural: 'Welcome To Super Chennai',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'Welcome to Super Chennai',
    },
    {
      name: 'subHeading',
      type: 'textarea',
      required: true,
      defaultValue:
        'Chennai is India’s healthcare capital, SaaS capital, fintech capital, and automobile capital. Home to 7.5 million people, it is a 386-year-old city alive with heritage and vibing to the march of the future.',
    },

    // FIRST COLUMN ###########################################
    {
      name: 'firstColumn',
      type: 'array',
      label: 'First Column Points',
      minRows: 1,
      fields: [
        {
          name: 'highlight',
          type: 'text',
          required: true,
          label: 'Highlighted Text',
        },
        {
          name: 'content',
          type: 'textarea',
          required: true,
          label: 'Remaining Content',
        },
      ],
    },

    // SECOND COLUMN ###########################################
    {
      name: 'secondColumn',
      type: 'array',
      label: 'Second Column Points',
      minRows: 1,
      fields: [
        {
          name: 'highlight',
          type: 'text',
          required: true,
          label: 'Highlighted Text',
        },
        {
          name: 'content',
          type: 'textarea',
          required: true,
          label: 'Remaining Content',
        },
      ],
    },

    // BUTTON ##################################################
    {
      name: 'buttonText',
      type: 'text',
      defaultValue: 'Explore More',
    },
    {
      name: 'buttonLink',
      type: 'text',
      defaultValue: '/about-us',
    },

    // ICON ####################################################
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
  ],
}

export default SecondSectionBlock