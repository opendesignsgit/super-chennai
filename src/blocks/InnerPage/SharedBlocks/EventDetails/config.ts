import { Block } from "payload";

const EventDetails: Block = {
  slug: 'eventDetails',
  fields: [
 
    {
      name: 'about',
      type: 'richText',
    },
    {
      name: 'artistImage',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'artistRole',
      type: 'text',
    },
    {
      name: 'details',
      type: 'group',
      fields: [ 
        { name: 'duration', type: 'text' },
        { name: 'ageLimit', type: 'text' },
        { name: 'language', type: 'text' },
        { name: 'genre', type: 'text' },
        { name: 'location', type: 'text' },
      ],
    },
    {
      name: 'priceLabel',
      type: 'text',
    },
    {
      name: 'priceNote',
      type: 'text',
    },
    {
      name: 'ctaText',
      type: 'text',
      defaultValue: 'Book Now',
    },
  ],
};

export default EventDetails;
