import { Block } from 'payload'

export const ManifestoSectionBlock: Block = {
  slug: 'ManifestoSectionBlock',
  labels: {
    singular: 'Manifesto Section',
    plural: 'Manifesto Sections',
  },
  admin: {
    group: 'Manifesto Page',
  },
  fields: [
    {
      name: 'topHeaderTitle',
      type: 'text',
      label: 'Top Header Title',
      defaultValue: 'Manifesto in Your Hands',
      required: true,
    },
    {
      name: 'mainHeading',
      type: 'text',
      label: 'Main Content Heading',
      defaultValue: 'DELIVERING THE MANIFESTO IS NOW IN YOUR HANDS',
      required: true,
    },
    {
      name: 'paragraph1',
      type: 'textarea',
      label: 'Paragraph 1',
      defaultValue:
        'The future of Chennai is shaped by the aspirations of its people. Reason why, Super Chennai organised a day-long Conclave that brought together industry leaders, urban planners, administrators, thought leaders and citizens. The Conclave discussed and curated ideas across five defining pillars: Live, Work, Visit, Innovate and Invest.',
    },
    {
      name: 'subHeading',
      type: 'text',
      label: 'Sub Heading',
      defaultValue: 'Live, Work, Visit, Innovate and Invest',
    },
    {
      name: 'paragraph2',
      type: 'textarea',
      label: 'Paragraph 2',
      defaultValue:
        'Suffice to say, incredible insights were collated. And they have been put together as a Manifesto on what the people wish for, from Super Chennai.',
    },
    {
      name: 'highlightText',
      type: 'textarea',
      label: 'Highlight Callout Text',
      defaultValue: 'Register your details to access and download the full manifesto.',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Label',
      defaultValue: 'Download',
    },
    {
      name: 'sliderImages',
      type: 'array',
      label: 'Slider Wire Images',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Wire Image',
          required: true,
        },
        {
          name: 'altText',
          type: 'text',
          label: 'Alt Text (e.g. Visit, Work, Live)',
        },
      ],
    },
  ],
}
