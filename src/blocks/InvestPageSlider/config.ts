import { Block } from 'payload'

export const InvestPageSliderBlock: Block = {
  slug: 'InvestPageSliderBlock',

  imageURL: '/images/sections-image/investmentslider.jpg',
  labels: {
    singular: 'Investment Slider Section',
    plural: 'Investment Slider Sections',
  },
  fields: [
    {
      name: 'slides',
      type: 'array',
      label: 'Slider Cards',
      dbName: 'inv_slides',
      minRows: 1,
      labels: {
        singular: 'Slide Card',
        plural: 'Slide Cards',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Card Title',
          required: true,
        },
        {
          name: 'category',
          type: 'text',
          label: 'Category Tag',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Card Image',
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
          label: 'Card Link / Route',
          required: true,
        },
      ],
    },
  ],
}
