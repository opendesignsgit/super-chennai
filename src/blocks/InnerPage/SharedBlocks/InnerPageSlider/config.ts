import { Block } from 'payload'

export const InnerPageSliderBlock: Block = {
  slug: 'InnerPageSliderBlock',
  labels: {
    singular: 'Inner Page Slider Block',
    plural: 'Inner Page Slider Blocks',
  },

  admin: {
    group: 'Common Blocks',
  },
  imageURL: '/images/sections-image/sliderimage.jpg',
  imageAltText: 'Inner Page Slider Section Preview',
  fields: [
    {
      name: 'mainTitle',
      type: 'text',
      label: 'Main Section Title',
      defaultValue: 'Chennai’s tech pulse',
    },
    {
      name: 'subTitle',
      type: 'textarea',
      label: 'Sub Heading / Description',
      defaultValue:
        "Chennai's software development industry is drawing individuals from all over the world for work and business. With a knowledgeable staff, it positions itself as a major center for a range of IT solutions.",
    },
    // Dynamic Slides Array
    {
      name: 'slides',
      type: 'array',
      label: 'Slider Cards',
      dbName: 'in_sld_c',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Card Title',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Card Redirect URL',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Card Image',
          required: true,
        },
      ],
    },
  ],
}
