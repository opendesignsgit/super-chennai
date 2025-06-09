import { Block } from "payload";

const ExploreMoreChennaiBlock: Block = {
  slug: "exploreMoreChennai",
  labels: {
    singular: "Explore More Chennai",
    plural: "Explore More Chennai Sections",
  },
  fields: [
    {
      name: "heading",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "slides",
      type: "array",
      required: true,
      fields: [
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "title",
          type: "text",
        },
        {
          name: "link",
          type: "text",
        },
      ],
    },
  ],
};

export default ExploreMoreChennaiBlock;
