// import type { Block } from 'payload'

// export const GoluJudgingBlock: Block = {
//   slug: 'goluJudging',
//   labels: {
//     singular: 'Golu Judging Criteria Block',
//     plural: 'Golu Judging Criteria Blocks',
//   },
//   fields: [
//     {
//       name: 'headerTitle',
//       type: 'text',
//       required: true,
//       defaultValue: 'How Will Your Golu Be Judged?',
//     },
//     {
//       name: 'stages',
//       type: 'array',
//       required: true,
//       minRows: 2,
//       maxRows: 2,
//       fields: [
//         {
//           name: 'stageBadge',
//           type: 'text',
//           required: true,
//           admin: {
//             placeholder: 'Ex: Stage 01',
//           },
//         },
//         {
//           name: 'badgeColor',
//           type: 'text',
//           defaultValue: 'bg-indigo-900 text-white',
//         },
//         {
//           name: 'cardBgColor',
//           type: 'text',
//           defaultValue: 'bg-purple-50/50 border-purple-100',
//         },
//         {
//           name: 'icon',
//           type: 'upload',
//           relationTo: 'media',
//           required: true,
//         },
//         {
//           name: 'title',
//           type: 'text',
//           required: true,
//           admin: {
//             placeholder: 'Ex: Get Shortlisted',
//           },
//         },
//         {
//           name: 'subtitle',
//           type: 'text',
//           admin: {
//             placeholder: 'Ex: Super Chennai Corner',
//           },
//         },
//         {
//           name: 'descriptions',
//           type: 'array',
//           required: true,
//           fields: [
//             {
//               name: 'text',
//               type: 'textarea',
//               required: true,
//             },
//           ],
//         },
//       ],
//     },
//   ],
// }