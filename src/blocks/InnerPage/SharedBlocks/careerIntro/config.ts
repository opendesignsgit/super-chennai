
import { Block } from "payload";

export const careerIntroBlock: Block = {
  slug: 'careerIntro',
  labels: {
    singular: 'careerIntro',
    plural: 'careerIntros',
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
 export default careerIntroBlock;