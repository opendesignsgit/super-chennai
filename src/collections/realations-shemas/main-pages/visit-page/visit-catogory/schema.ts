import { CollectionConfig } from "payload";

const VisitItems: CollectionConfig = {
  slug: 'visitItems',
  labels: {
    singular: 'Visit',
    plural: 'Visit',
  },
  admin: {
    useAsTitle: 'label',
    group: 'Main Page Contents',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
};

export default VisitItems;
