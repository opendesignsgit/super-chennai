// import { Block } from 'payload'

// export const MetroTheDetailsBlock: Block = {
//   slug: 'MetroTheDetailsBlock',
//   labels: {
//     singular: 'Metro The Details Section',
//     plural: 'Metro The Details Sections',
//   },
//   imageURL: '/images/sections-image/tvcommricalsecs.jpg',
//   admin: {
//     group: 'Singe Alone Metro',
//   },
//   fields: [
//     {
//       name: 'sectionTitle',
//       type: 'text',
//       label: 'Section Heading',
//       defaultValue: 'THE DETAILS',
//       required: true,
//     },
//     {
//       name: 'details',
//       type: 'array',
//       label: 'Metro Event Details',
//       minRows: 1,
//       maxRows: 6,
//       fields: [
//         {
//           name: 'value',
//           type: 'text',
//           label: 'Primary Value / Text (e.g., 21ST AUGUST 2024)',
//           required: true,
//         },
//         {
//           name: 'label',
//           type: 'text',
//           label: 'Sub Label / Category (e.g., DATE)',
//           required: true,
//         },
//         {
//           name: 'iconType',
//           type: 'select',
//           label: 'Preset Icon Choice',
//           defaultValue: 'calendar',
//           options: [
//             { label: 'Calendar Icon (Date)', value: 'calendar' },
//             { label: 'Clock Icon (Time)', value: 'clock' },
//             { label: 'Map / Location Icon (Route)', value: 'location' },
//             { label: 'Ticket / Price Icon (Entry)', value: 'ticket' },
//             { label: 'Users / Capacity Icon', value: 'users' },
//           ],
//         },
//         {
//           name: 'customIcon',
//           type: 'upload',
//           relationTo: 'media',
//           label: 'Custom Icon Upload (Optional)',
//         },
//       ],
//     },
//   ],
// }

// import { Block } from 'payload'

// export const MetroTheDetailsBlock: Block = {
//   slug: 'MetroTheDetailsBlock',
//   labels: {
//     singular: 'Metro The Details Section',
//     plural: 'Metro The Details Sections',
//   },
//   admin: {
//     group: 'Common Blocks',
//   },
//   fields: [
//     {
//       name: 'sectionTitle',
//       type: 'text',
//       label: 'Section Heading',
//       defaultValue: 'THE DETAILS',
//       required: true,
//     },
//     {
//       name: 'details',
//       type: 'array',
//       label: 'Metro Event Details',
//       minRows: 1,
//       maxRows: 6,
//       fields: [
//         {
//           name: 'value',
//           type: 'text',
//           label: 'Primary Value / Text (e.g., 21ST AUGUST 2024)',
//           required: true,
//         },
//         {
//           name: 'label',
//           type: 'text',
//           label: 'Sub Label / Category (e.g., DATE)',
//           required: true,
//         },
//         {
//           name: 'svgCode',
//           type: 'textarea',
//           label: 'SVG Code (Paste raw <svg>...</svg> code here)',
//           required: true,
//         },
//       ],
//     },
//   ],
// }

import { Block } from 'payload'

export const MetroTheDetailsBlock: Block = {
  slug: 'MetroTheDetailsBlock',
  labels: {
    singular: 'Metro The Details Section',
    plural: 'Metro The Details Sections',
  },

  imageURL: '/images/sections-image/singlealone2.jpg',
  admin: {
    group: 'Singe Alone Metro',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'THE DETAILS',
      required: true,
    },
    {
      name: 'details',
      type: 'array',
      label: 'Metro Event Details',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Primary Value / Text (e.g., 21ST AUGUST 2024)',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          label: 'Sub Label / Category (e.g., DATE)',
          required: true,
        },
        {
          name: 'iconType',
          type: 'select',
          label: 'Preset Icon Choice',
          defaultValue: 'calendar',
          options: [
            { label: 'Calendar Icon (Date)', value: 'calendar' },
            { label: 'Clock Icon (Time)', value: 'clock' },
            { label: 'Map / Location Icon (Route)', value: 'location' },
            { label: 'Ticket / Price Icon (Entry)', value: 'ticket' },
            { label: 'Users / Capacity Icon', value: 'users' },
          ],
        },
        {
          name: 'customIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Custom Icon Upload (Optional)',
        },
      ],
    },
  ],
}
