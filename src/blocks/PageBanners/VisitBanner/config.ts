import { Block } from "payload";

const VisitBannerBlock: Block = {
  slug: 'visitBanner',
  labels: {
    singular: 'Visit Banner',
    plural: 'Visit Banners',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      defaultValue: 'Visit',
    },
    {
      name: 'bannerImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Banner Image',
      required: true,
    },
  ],
};

export default VisitBannerBlock;
