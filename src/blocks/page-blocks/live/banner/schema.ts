import { Block } from 'payload';

const liveBannerBlock: Block = {
  slug: 'liveBanner',
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

export default liveBannerBlock;
