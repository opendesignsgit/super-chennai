import { Block } from "payload";

const VisitIntroTextBlock: Block = {
  slug: 'visitIntroText',
  labels: {
    singular: 'Visit Intro Text',
    plural: 'Visit Intro Texts',
  },
  fields: [
    {
      name: 'marqueeText',
      type: 'text',
      label: 'Scrolling Marquee Text',
      defaultValue: 'Visit  Visit  Visit  Visit',
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
    {
      name: 'showInstagramReels',
      type: 'checkbox',
      label: 'Show Instagram Reels Marquee',
      defaultValue: true,
    },
  ],
};

export default VisitIntroTextBlock;
