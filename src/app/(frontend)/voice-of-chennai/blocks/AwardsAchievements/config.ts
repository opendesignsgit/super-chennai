// import { Block } from 'payload'

// export const AwardsAchievementsBlock: Block = {
//   slug: 'awardsAchievements',
//   labels: {
//     singular: 'Awards & Achievements',
//     plural: 'Awards & Achievements',
//   },
//   fields: [
//     {
//       name: 'title',
//       type: 'text',
//       defaultValue: 'Awards & Achievements',
//       required: true,
//     },
//     {
//       name: 'subtitle',
//       type: 'textarea',
//     },
//     {
//       name: 'image',
//       type: 'upload',
//       relationTo: 'media',
//       required: true,
//     },
//     {
//       name: 'awards',
//       type: 'array',
//       label: 'Awards List',
//       minRows: 1,
//       fields: [
//         {
//           name: 'title',
//           type: 'textarea',
//           required: true,
//         },
//       ],
//     },
//   ],
// }