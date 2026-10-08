// import { Block } from 'payload'

// export const ChenzInvest2026Block: Block = {
//   slug: 'ChenzInvest2026Block',
//   labels: {
//     singular: 'Chenz Invest 2026 Section',
//     plural: 'Chenz Invest 2026 Sections',
//   },
//   admin: {
//     group: '2026 Blocks',
//   },
//   fields: [
//     {
//       name: 'investCategories2026',
//       type: 'array',
//       label: 'Invest Categories (2026)',
//       minRows: 1,
//       fields: [
//         {
//           name: 'categoryTabLabel',
//           type: 'text',
//           label: 'Tab Title Label',
//           required: true,
//         },
//         {
//           name: 'categoryHeadingTitle',
//           type: 'text',
//           label: 'Category Main Title',
//           required: true,
//         },
//         {
//           name: 'categorySummaryText',
//           type: 'textarea',
//           label: 'Category Summary Description',
//           required: true,
//         },
//         {
//           name: 'investCards2026',
//           type: 'array',
//           label: 'Investment Option Cards',
//           fields: [
//             {
//               name: 'cardTitle',
//               type: 'text',
//               label: 'Card Title',
//               required: true,
//             },
//             {
//               name: 'cardDescription',
//               type: 'textarea',
//               label: 'Card Description',
//               required: true,
//             },
//             {
//               name: 'cardMedia',
//               type: 'upload',
//               relationTo: 'media',
//               label: 'Card Image Asset',
//               required: true,
//             },
//             {
//               name: 'cardMediaAltText',
//               type: 'text',
//               label: 'Image Alt Text',
//             },
//           ],
//         },
//       ],
//     },
//   ],
// }

import { Block } from 'payload'

export const ChenzInvest2026Block: Block = {
  slug: 'ChenzInvest2026Block',
  // DB Table name generator constraint-kkaaga custom dbName kudukuroom
  dbName: 'chenz_inv_2026',
  labels: {
    singular: 'Chenz Invest 2026 Section',
    plural: 'Chenz Invest 2026 Sections',
  },
  admin: {
    group: '2026 Blocks',
  },
  fields: [
    {
      name: 'categories',
      dbName: 'cats',
      type: 'array',
      label: 'Invest Categories (2026)',
      minRows: 1,
      fields: [
        {
          name: 'categoryTabLabel',
          type: 'text',
          label: 'Tab Title Label',
          required: true,
        },
        {
          name: 'categoryHeadingTitle',
          type: 'text',
          label: 'Category Main Title',
          required: true,
        },
        {
          name: 'categorySummaryText',
          type: 'textarea',
          label: 'Category Summary Description',
          required: true,
        },
        {
          name: 'investCards2026',
          dbName: 'cards',
          type: 'array',
          label: 'Investment Option Cards',
          fields: [
            {
              name: 'cardTitle',
              type: 'text',
              label: 'Card Title',
              required: true,
            },
            {
              name: 'cardDescription',
              type: 'textarea',
              label: 'Card Description',
              required: true,
            },
            {
              name: 'cardMedia',
              type: 'upload',
              relationTo: 'media',
              label: 'Card Image Asset',
              required: true,
            },
            {
              name: 'cardMediaAltText',
              type: 'text',
              label: 'Image Alt Text',
            },
          ],
        },
      ],
    },
  ],
}
