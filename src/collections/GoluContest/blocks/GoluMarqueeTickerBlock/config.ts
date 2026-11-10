// import type { Block } from 'payload'

// export const GoluMarqueeTickerBlock: Block = {
//   slug: 'goluMarqueeTicker',
//   labels: {
//     singular: 'Marquee Ticker Section',
//     plural: 'Marquee Ticker Sections',
//   },
//   admin: {
//     group: 'Icon of the Month',
//   },
//   fields: [
//     {
//       name: 'items',
//       type: 'array',
//       required: true,
//       dbName: 'golu_ticker_items', // 👈 Postgres 63-char limit safety
//       fields: [
//         {
//           name: 'text',
//           type: 'text',
//           required: true,
//           label: 'Ticker Text',
//           defaultValue: [],
//         },
//         {
//           name: 'icon',
//           type: 'upload',
//           relationTo: 'media',
//           required: true,
//           label: 'Icon Image',
//         },
//       ],
//       defaultValue: [
//         {
//           text: 'Exciting Prizes',
//           icon: '/images/golu-logo/akshayakalapa.png',
//         },
//         {
//           text: 'Traditional Golu',
//           icon: '/images/golu-logo/credai.png',
//         },
//       ],
//     },
//   ],
// }
import type { Block } from 'payload'

export const GoluMarqueeTickerBlock: Block = {
  slug: 'goluMarqueeTicker',
  labels: {
    singular: 'Marquee Ticker Section',
    plural: 'Marquee Ticker Sections',
  },
  admin: {
    group: 'Icon of the Month',
  },
  fields: [
    {
      name: 'items',
      type: 'array',
      required: true,
      dbName: 'golu_ticker_items',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
          label: 'Ticker Text',
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Icon Image',
        },
      ],
      defaultValue: [],
    },
  ],
}
