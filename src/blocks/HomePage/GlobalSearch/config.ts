import { Block } from "payload";

export const GlobalSearchBlock: Block = {
  slug: "globalSearch",
  labels: {
    singular: "Global Search",
    plural: "Global Search Blocks",
  },
  fields: [
    {
      name: "placeholderText",
      type: "text",
      required: true,
      defaultValue: "Experience Chennai",
    },
    {
      name: "buttonText",
      type: "text",
      required: true,
      defaultValue: "Search",
    },
    {
      name: "enableFilters",
      type: "checkbox",
      label: "Enable Filters",
      defaultValue: false,
    },
    {
      name: "filters",
      type: "array",
      label: "Filters",
      admin: {
        condition: (_, siblingData) => siblingData.enableFilters === true,
      },
      fields: [
        {
          name: "label",
          type: "text",
          required: true,
        },
        {
          name: "options",
          type: "array",
          fields: [
            {
              name: "value",
              type: "text",
              required: true,
            },
            {
              name: "label",
              type: "text",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};
