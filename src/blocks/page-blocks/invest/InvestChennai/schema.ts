import { Block } from "payload";

const investChennaiBlock: Block = {
  slug: "investChennai",
  fields: [
    {
      name: "heading",
      type: "text",
      label: "Heading",
      required: true,
    },
    {
      name: "subHeading",
      type: "text",
      label: "Sub Heading",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      required: true,
    },
  ],
};

export default investChennaiBlock;
