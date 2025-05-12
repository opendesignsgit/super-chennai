import { Block } from "payload";

const HotelsInChennaiBlock: Block = {
  slug: 'HotelInChennai',
  labels: {
    singular: 'Hotels in Chennai',
    plural: 'Hotels in Chennai',
  },
  fields: [
    {
      name: 'sections',
      label: 'Accommodation Sections',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'linkUrl',
          label: 'Link URL',
          type: 'text',
          required: false,
        },
        {
          name: 'linkText',
          label: 'Link Text',
          type: 'text',
          required: false,
        },
      ],
    },
  ],
};

export default HotelsInChennaiBlock;
