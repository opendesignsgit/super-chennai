import { Block } from "payload"
const SpotlightGallery: Block = {
  slug: 'spotlightGallery',
  labels: {
    singular: 'leftContentRightSlider',
    plural: ' leftContentRightSlider',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'link',
      type: 'text', // url string
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
        },
        {
          name: 'para',
          type: 'text',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}

export default SpotlightGallery

