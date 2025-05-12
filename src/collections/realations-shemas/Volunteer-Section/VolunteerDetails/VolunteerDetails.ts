import { CollectionConfig } from "payload";

export const VolunteerDetails: CollectionConfig = {
  slug: 'volunteerDetails',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'volunteer',
      type: 'relationship',
      relationTo: 'volunteerSlides',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
};
