import { Block } from "payload";

const volunteerBannerBlock: Block = {
  slug: 'volunteerBanner',
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

export default volunteerBannerBlock;
