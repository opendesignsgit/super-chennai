// import type { Block } from 'payload'

// export const GoluBrandLogoBlock: Block = {
//   slug: 'goluBrandLogoBlock',
//   labels: {
//     singular: 'Golu Brand Logo Block',
//     plural: 'Golu Brand Logo Blocks',
//   },
//   admin: {
//     group: 'Icon of the Month',
//   },
//   fields: [
//     {
//       name: 'sectionTitle',
//       type: 'text',
//       required: true,
//       defaultValue: 'Our Sponsors',
//       label: 'Section Title',
//     },
//     {
//       name: 'logos',
//       type: 'array',
//       required: true,
//       dbName: 'golu_brand_logos', // 👈 Short DB table name for Postgres safety
//       fields: [
//         {
//           name: 'name',
//           type: 'text',
//           required: true,
//           label: 'Logo Name / Alt text',
//         },
//         {
//           name: 'src',
//           type: 'upload',
//           relationTo: 'media',
//           required: true,
//           label: 'Logo Image File',
//         },
//       ],
//       defaultValue: [
//         {
//           name: 'Partner Logo 1',
//           src: '/images/golu-logo/akshayakalapa.png',
//         },
//         {
//           name: 'Partner Logo 2',
//           src: '/images/golu-logo/credai.png',
//         },
//         {
//           name: 'Partner Logo 3',
//           src: '/images/golu-logo/giri.png',
//         },
//       ],
//     },
//   ],
// }

import type { Block } from 'payload'

export const GoluBrandLogoBlock: Block = {
  slug: 'goluBrandLogoBlock',
  labels: {
    singular: 'Golu Brand Logo Block',
    plural: 'Golu Brand Logo Blocks',
  },
  admin: {
    group: 'Icon of the Month',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      defaultValue: 'Our Sponsors',
      label: 'Section Title',
    },
    {
      name: 'logos',
      type: 'array',
      required: true,
      dbName: 'golu_brand_logos',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Logo Name / Alt text',
        },
        {
          name: 'logoImage',
          type: 'upload',
          relationTo: 'media', // 👈 Connects directly to Payload Media collection for file uploads
          required: true,
          label: 'Upload Logo Image',
        },
      ],
    },
  ],
}
