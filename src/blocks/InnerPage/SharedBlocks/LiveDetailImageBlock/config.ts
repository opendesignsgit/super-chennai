// import type { Block } from 'payload'

// export const LiveDetailImageBlock: Block = {
//   slug: 'liveDetailImg',
//   dbName: 'b_ldi',
//   labels: {
//     singular: 'Live Detail Image Section Block',
//     plural: 'Live Detail Image Section Blocks',
//   },
//   admin: {
//     group: 'Icon of the Month',
//   },
//   fields: [
//     {
//       name: 'sectionTitle',
//       type: 'text',
//       required: true,
//       defaultValue: 'Popular Horror Houses & Haunted Attractions in Chennai',
//     },
//     {
//       name: 'points',
//       type: 'array',
//       required: true,
//       dbName: 'ldi_pts', // 👈 Unique DB name to avoid relation conflicts
//       fields: [
//         {
//           name: 'title',
//           type: 'text',
//           required: true,
//           label: 'Attraction Title',
//         },
//         {
//           name: 'desc',
//           type: 'textarea',
//           label: 'Short Description',
//         },
//         {
//           name: 'imgs',
//           type: 'upload',
//           relationTo: 'media',
//           required: true,
//           label: 'Attraction Image',
//         },
//         {
//           name: 'para',
//           type: 'textarea',
//           label: 'Bullet Points (One per line)',
//         },
//         {
//           name: 'location',
//           type: 'text',
//           label: 'Google Map URL',
//         },
//       ],
//     },
//   ],
// }

import type { Block } from 'payload'

export const LiveDetailImageBlock: Block = {
  slug: 'liveDetailImg',
  dbName: 'b_ldi',
  labels: {
    singular: 'Live Detail Image Section Block',
    plural: 'Live Detail Image Section Blocks',
  },
  admin: {
    group: 'Common Blocks',
  },

  imageURL: '/images/sections-image/livedetailnewsection.jpg',

  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      defaultValue: 'Popular Horror Houses & Haunted Attractions in Chennai',
      label: 'Main Section Title',
    },
    {
      name: 'points',
      type: 'array',
      required: true,
      dbName: 'ldi_pts',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Attraction Title / Sub Header',
        },
        {
          name: 'desc',
          type: 'textarea',
          label: 'Short Description',
        },
        {
          name: 'imgs',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Attraction Image',
        },
        {
          name: 'para',
          type: 'textarea',
          label: 'Bullet Points (Enter each point on a new line)',
        },
        {
          name: 'location',
          type: 'text',
          label: 'Google Map URL',
        },
      ],
    },
  ],
}
