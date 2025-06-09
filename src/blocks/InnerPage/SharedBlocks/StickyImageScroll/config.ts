// import { Block } from 'payload'

// export const StickyImageScroll: Block = {
//   slug: 'StickyImageScroll',
//   labels: {
//     singular: 'StickyImageScroll',
//     plural: 'StickyImageScroll',
//   },

//   fields: [
//     {
//       name: 'backgroundType',
//       type: 'select',
//       options: [
//         { label: 'Color', value: 'color' },
//         { label: 'None', value: 'image' },
//       ],
//       defaultValue: 'color',
//       required: true,
//     },
//     {
//       name: 'backgroundColor',
//       type: 'text',
//       required: false,
//       admin: {
//         condition: (data) => data.backgroundType === 'color',
//       },
//       defaultValue: '#7d377c',
//     },

//     {
//       name: 'leftImage',
//       type: 'upload',
//       relationTo: 'media',
//       required: true,
//     },

//     {
//       name: 'smallText',
//       type: 'text',
//       required: false,
//       defaultValue: '',
//       maxLength: 20,
//       admin: {
//         description: 'Maximum 20 characters allowed',
//       },
//     },
//     {
//       name: 'title',
//       type: 'text',
//       required: false,
//       maxLength: 50,
//       admin: {
//         description: 'Maximum 50 characters allowed',
//       },
//     },
//     {
//       name: 'description',
//       type: 'textarea',
//       required: true,
//       maxLength: 400,
//       admin: {
//         description: 'Maximum 400 characters allowed',
//       },
//     },
//     {
//       name: 'cards',
//       type: 'array',
//       label: 'Startup Cards',
//       minRows: 1,
//       fields: [
//         {
//           name: 'image',
//           type: 'upload',
//           relationTo: 'media',
//           required: true,
//         },
//         {
//           name: 'title',
//           type: 'text',
//           required: true,
//           maxLength: 100,
//           admin: {
//             description: 'Maximum 100 characters allowed',
//           },
//         },
//         {
//           name: 'description',
//           type: 'textarea',
//           required: true,
//           maxLength: 500,
//           admin: {
//             description: 'Maximum 500 characters allowed',
//           },
//         },

//         {
//           name: 'page',
//           type: 'relationship',
//           relationTo: 'visits',
//           required: false,
//           label: 'Select Page Link',
//         },
//         {
//           name: 'customLink',
//           type: 'text',
//           label: 'Or Custom URL',
//           admin: {
//             description: 'This will override the selected page link if provided.',
//             placeholder: ' /some-path',
//           },
//         },
//       ],
//     },
//   ],
// }

// export default StickyImageScroll

import { Block } from 'payload'

export const StickyImageScroll: Block = {
  slug: 'StickyImageScroll',
  labels: {
    singular: 'StickyImageScroll',
    plural: 'StickyImageScroll',
  },

  fields: [
    {
      name: 'backgroundType',
      type: 'select',
      options: [
        { label: 'Color', value: 'color' },
        { label: 'None', value: 'image' },
      ],
      defaultValue: 'color',
      required: true,
    },
    {
      name: 'backgroundColor',
      type: 'text',
      required: false,
      admin: {
        condition: (data) => data.backgroundType === 'color',
      },
      defaultValue: '#7d377c',
    },
    {
      name: 'leftImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'smallText',
      type: 'text',
      required: false,
      defaultValue: '',
      maxLength: 20,
      admin: {
        description: 'Maximum 20 characters allowed',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: false,
      maxLength: 50,
      admin: {
        description: 'Maximum 50 characters allowed',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      maxLength: 400,
      admin: {
        description: 'Maximum 400 characters allowed',
      },
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Startup Cards',
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          maxLength: 100,
          admin: {
            description: 'Maximum 100 characters allowed',
          },
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
          maxLength: 500,
          admin: {
            description: 'Maximum 500 characters allowed',
          },
        },
        {
          name: 'page',
          type: 'relationship',
          relationTo: 'visits',
          required: false,
          label: 'Select Page Link',
        },
        {
          name: 'customLink',
          type: 'text',
          label: 'Or Custom URL',
          admin: {
            description: 'This will override the selected page link if provided.',
            placeholder: ' /some-path',
          },
        },
      ],
    },

    //##### Optional schema as new array field #####
    {
      name: 'extraContent',
      type: 'array',
      label: 'Bottom KeyPoints',
      required: false,
      fields: [
        {
          name: 'imgs',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'title',
          type: 'text',
        },

        {
          name: 'para',
          type: 'array',
          label: 'List Items',
          fields: [
            {
              name: 'point',
              type: 'text',
            },
            {
              name: 'mainHead',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}

export default StickyImageScroll
