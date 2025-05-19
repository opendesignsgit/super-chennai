import { Block } from "payload";

const investBannerBlock: Block = {
  slug: 'investBanner',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Banner Image',
      relationTo: 'media',
      required: true,
    },
  ],
};

export default investBannerBlock;
