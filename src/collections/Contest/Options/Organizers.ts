import { CollectionConfig } from "payload";

export const Organizers: CollectionConfig = {
  slug: "organizers",
  labels: {
    singular: "Organizer",
    plural: "Organizers",
  },

  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "subtitle", "venue"],
  },

  access: {
    read: () => true,
  },

  fields: [
    /* ---------- BASIC INFO ---------- */

    {
      name: "title",
      type: "text",
      required: true,
      label: "Organizer Name",
      admin: {
        placeholder: "Krishna Gana Sabha",
      },
    },

    {
      name: "subtitle",
      type: "text",
      label: "Subtitle / Description",
      admin: {
        placeholder: "Traditional Excellence",
      },
    },

    {
      name: "icon",
      type: "text",
      label: "Icon (Emoji)",
      admin: {
        placeholder: "🎶",
        description: "Emoji shown in UI (🎼 🎶 🪔 🛕 etc)",
      },
    },

    /* ---------- OPTIONAL METADATA ---------- */

    {
      name: "venue",
      type: "select",
      label: "Primary Venue",
      options: [
        { label: "Dr Nalli Gana Vihar", value: "dr-nalli-gana-vihar" },
        { label: "Kamakoti Hall", value: "kamakoti-hall" },
        { label: "Multiple Venues", value: "multiple" },
      ],
    },

    {
      name: "website",
      type: "text",
      label: "Website URL",
    },

    {
      name: "description",
      type: "textarea",
      label: "About Organizer",
    },

    /* ---------- INTERNAL ---------- */

    {
      name: "order",
      type: "number",
      label: "Display Order",
      admin: {
        position: "sidebar",
      },
    },
  ],
};
