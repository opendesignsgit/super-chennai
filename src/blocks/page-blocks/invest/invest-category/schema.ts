import { Block } from "payload";

const investmentCategoryListBlock: Block = {
  slug: "investmentCategoryList",
  fields: [
    {
      name: "items",
      label: "Investment Categories",
      type: "array",
      required: true,
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "subtitle",
          type: "text",
        },
        {
          name: "description",
          type: "textarea",
        },
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: false,
        },
        {
          name: "link",
          type: "text",
          label: "Explore Link",
        },
      ],
    },
    {
      name: "backgroundImage",
      label: "Bottom Background Image",
      type: "upload",
      relationTo: "media",
      required: false,
    },
  ],
};

export default investmentCategoryListBlock;
