import { Block } from "payload";

export const introTextBlock: Block = {
  slug: 'introText',
  labels: {
    singular: 'Intro Text',
    plural: 'Intro Text Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'marqueeText',
      type: 'text',
      required: true,
      defaultValue: 'Employment in chennai',
    },
  ],
};

export default introTextBlock;
