import { Block } from "payload";

const ContentZoneCarousel: Block = {
  slug: 'contentZoneCarousel',
  labels: {
    singular: 'ContentZoneCarousel',
    plural: 'ContentZoneCarousel',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Main Heading',
    },
    {
      name: 'subheading',
      type: 'text',
      required: false,
      label: 'Subheading',
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
      label: 'Description',
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Carousel Cards',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: false,
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
};

export default ContentZoneCarousel;
