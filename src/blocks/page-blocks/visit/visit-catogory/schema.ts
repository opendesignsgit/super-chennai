import { Block } from "payload";

const VisitCategory: Block = {
  slug: 'visit-category',
  labels: {
    singular: 'Visit Category',
    plural: 'Visit Categories',
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
    },
    {
      name: 'items',
      type: 'relationship',
      relationTo: 'visitItems', 
      hasMany: true,
      label: 'Visit Cards',
    },
  ],
};

export default VisitCategory;
