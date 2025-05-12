import { Block } from "payload";

const workBannerBlock: Block = {
  slug: 'workBanner',
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

export default workBannerBlock;
