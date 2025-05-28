import { Block } from "payload";

export const StartupChennaiBlock: Block = {
  slug: 'startupChennai',
  labels: {
    singular: 'Startup Chennai',
    plural: 'Startup Chennai Blocks',
  },
  admin: {
    group: 'Homepage Sections',
  },

  fields: [
    {
      name: 'heading',
      type: 'text',
      // required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      // required: true,
    },
    {
      name: 'images',
      type: 'array',
      // required: true,
      minRows: 5,
      maxRows: 5,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          // required: true,
        },
      ],
    },
  ],
};
