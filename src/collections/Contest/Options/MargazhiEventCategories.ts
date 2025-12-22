import { CollectionConfig } from "payload";

export const MargazhiEventCategories: CollectionConfig = {
  slug: "margazhiContestCategories",
  labels: {
    singular: "Event Category",
    plural: "Event Categories",
  },
  admin: {
    useAsTitle: "title",
    description:
      "Manage Margazhi event categories like Music, Dance, Conference, Ceremony etc.",
    defaultColumns: ["title", "slug"],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Category Name",
      admin: {
        placeholder: "Music",
        description: "Display name of the category shown to users.",
      },
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        placeholder: "music",
        description:
          "Unique identifier used internally. Use lowercase letters and hyphens only.",
      },
    },
    {
      name: "icon",
      type: "text",
      label: "Icon (Emoji)",
      admin: {
        placeholder: "🎶",
        description:
          "Optional emoji icon displayed in filters or category lists.",
      },
    },
    {
      name: "order",
      type: "number",
      label: "Display Order",
      admin: {
        position: "sidebar",
        description:
          "Controls the order in which categories appear in the UI.",
      },
    },
    {
      name: "notes",
      type: "textarea",
      label: "Internal Notes",
      admin: {
        description: "Internal reference only. Not shown on the website.",
      },
    },
  ],
};
