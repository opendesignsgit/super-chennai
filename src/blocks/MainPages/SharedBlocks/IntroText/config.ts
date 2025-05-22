import { Block } from 'payload';

const IntroTextBlock: Block = {
  slug: 'introTextBlock',
  labels: {
    singular: 'Intro Text Block',
    plural: 'Intro Text Blocks',
  },
  fields: [
    {
      name: 'marqueeText',
      type: 'text',
      label: 'Scrolling Marquee Text',
      required: false,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Main Title',
      required: true,
    },
    {
      name: 'highlightedText',
      type: 'textarea',
      label: 'Highlighted Text (Bold)',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Supporting Description',
      required: true,
    },
   
  ],
};

export default IntroTextBlock;

