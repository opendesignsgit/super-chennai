import { Block } from 'payload'

export const InnovatePageSliderBlock: Block = {
  slug: 'InnovatePageSliderBlock',
  labels: {
    singular: 'Innovate Slider Section',
    plural: 'Innovate Slider Sections',
  },
  imageURL: '/images/sections-image/innovate-slider.jpg',
  imageAltText: 'Innovate Slider Section Preview',
  fields: [
    {
      name: 'slides',
      type: 'array',
      label: 'Innovate Slides',
      dbName: 'inn_slides',
      minRows: 1,
      labels: {
        singular: 'Slide Item',
        plural: 'Slide Items',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'content',
          type: 'textarea',
          label: 'Content / Subtitle',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Slide Image',
          required: true,
        },
        {
          name: 'imgAlt',
          type: 'text',
          label: 'Image Alt Text',
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link URL',
          required: true,
        },
      ],
    },
  ],
}
