// import { Block } from 'payload'

// export const ExpandingBrandBlock: Block = {
//   slug: 'ExpandingBrandBlock',
//   labels: {
//     singular: 'Expanding Brand Block',
//     plural: 'Expanding Brand Blocks',
//   },
//   imageURL: '/images/sections-image/expanding-brand.jpg',
//   imageAltText: 'Expanding The Brand Section Preview',
//   admin: {
//     group: 'Icon of the Month',
//   },
//   fields: [
//     {
//       name: 'mainTitle',
//       type: 'text',
//       label: 'Main Title',
//       defaultValue: 'Expanding the Brand',
//     },
//     {
//       name: 'subTitle',
//       type: 'text',
//       label: 'Subtitle / Description',
//       defaultValue: 'Beyond salons, Kumaravel has launched',
//     },
//     {
//       name: 'items',
//       type: 'array',
//       label: 'Brand Items List',
//       dbName: 'eb_items',
//       minRows: 1,
//       fields: [
//         {
//           name: 'title',
//           type: 'text',
//           label: 'Item Title',
//           required: true,
//         },
//         {
//           name: 'description',
//           type: 'textarea',
//           label: 'Item Description (Optional)',
//         },
//       ],
//     },
//   ],
// }

import { Block } from 'payload'

export const ExpandingBrandBlock: Block = {
  slug: 'ExpandingBrandBlock',
  labels: {
    singular: 'Expanding Brand Block',
    plural: 'Expanding Brand Blocks',
  },
  imageURL: '/images/sections-image/expanding-brand.jpg',
  imageAltText: 'Expanding The Brand Section Preview',
  admin: {
    group: 'Icon of the Month',
  },
  fields: [
    {
      name: 'mainTitle',
      type: 'textarea', // Textarea for multi-line support
      label: 'Main Title (Supports <br> or Newline)',
      defaultValue: 'Expanding <br /> the Brand',
    },
    {
      name: 'subTitle',
      type: 'textarea', // Textarea for multi-line support
      label: 'Subtitle / Description',
      defaultValue: 'Beyond salons, Kumaravel has launched',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Brand Items List',
      dbName: 'eb_items',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'textarea', // Textarea for multi-line items
          label: 'Item Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Item Description (Optional)',
        },
      ],
    },
  ],
}
