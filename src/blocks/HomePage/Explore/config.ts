import { Block } from "payload";

export const ExploreBlock: Block = {
  slug: 'explore',
  labels: {
    singular: 'Explore',
    plural: 'Explore Blocks',
  },
  fields: [
    {
      name: 'cards',
      type: 'array',
      label: 'Explore Cards',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'place',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media', // Ensure you have a media collection
          required: true,
        },
      ],
    },
  ],
};
