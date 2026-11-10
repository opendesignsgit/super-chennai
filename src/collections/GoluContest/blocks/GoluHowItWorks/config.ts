// import type { Block } from 'payload'

// export const GoluCreateBlock: Block = {
//   slug: 'goluCreate',
//   labels: {
//     singular: 'Golu Create Section Block',
//     plural: 'Golu Create Section Blocks',
//   },
//   fields: [
//     {
//       name: 'headerTitle',
//       type: 'text',
//       required: true,
//       defaultValue: 'WHAT TO CREATE',
//     },
//     {
//       name: 'items',
//       type: 'array',
//       required: true,
//       fields: [
//         {
//           name: 'id',
//           type: 'text',
//           required: true,
//           admin: {
//             placeholder: 'Ex: 01',
//           },
//         },
//         {
//           name: 'title',
//           type: 'text',
//           required: true,
//         },
//         {
//           name: 'description',
//           type: 'textarea',
//           required: true,
//         },
//         {
//           name: 'icon',
//           type: 'upload',
//           relationTo: 'media',
//         },
//         {
//           name: 'circleBorder',
//           type: 'text',
//           defaultValue: 'border-indigo-300 bg-indigo-50/20',
//         },
//         {
//           name: 'color',
//           type: 'text',
//           defaultValue: 'text-indigo-900',
//         },
//       ],
//     },
//   ],
// }

import type { Block } from 'payload'

export const GoluCreateBlock: Block = {
  slug: 'goluHowItWorks',
  labels: {
    singular: 'Golu Create Section Block',
    plural: 'Golu Create Section Blocks',
  },
  admin: {
    group: 'Icon of the Month',
  },
  fields: [
    {
      name: 'headerTitle',
      type: 'text',
      required: true,
      defaultValue: 'WHAT TO CREATE',
      label: 'Header Title',
    },
    {
      name: 'items',
      type: 'array',
      required: true,
      dbName: 'golu_create_items',
      fields: [
        {
          name: 'id',
          type: 'text',
          required: true,
          admin: {
            placeholder: 'Ex: 01',
          },
          label: 'Step ID / Number',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Title',
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          label: 'Description',
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon Image',
        },
        {
          name: 'circleBorder',
          type: 'text',
          defaultValue: 'border-indigo-300 bg-indigo-50/20',
          label: 'Circle Border & BG CSS',
        },
        {
          name: 'color',
          type: 'text',
          defaultValue: 'text-indigo-900',
          label: 'Text Color CSS',
        },
      ],
    },
  ],
}
