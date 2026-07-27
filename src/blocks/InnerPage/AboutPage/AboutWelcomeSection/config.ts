// import { Block } from 'payload'

// export const AboutWelcomeSuperChennaiBlock: Block = {
//   slug: 'AboutWelcomeSuperChennaiBlock',
//   labels: {
//     singular: 'About Welcome to Super Chennai Section',
//     plural: 'About Welcome to Super Chennai Sections',
//   },
//   fields: [
//     {
//       name: 'heading',
//       type: 'text',
//       label: 'Main Heading (Supports <br /> for line breaks)',
//       defaultValue: 'Welcome to <br /> Super Chennai',
//       required: true,
//     },
//     {
//       name: 'subheading',
//       type: 'textarea',
//       label: 'Subheading Text',
//       defaultValue:
//         'Super Chennai is a citizen-led initiative to showcase Chennai as a truly global city',
//       required: true,
//     },
//     {
//       name: 'images',
//       type: 'array',
//       label: 'Section Images',
//       minRows: 1,
//       labels: {
//         singular: 'Image',
//         plural: 'Images',
//       },
//       fields: [
//         {
//           name: 'image',
//           type: 'upload',
//           relationTo: 'media',
//           label: 'Upload Image',
//           required: true,
//         },
//       ],
//     },
//     {
//       name: 'columns',
//       type: 'array',
//       label: 'Text Columns',
//       minRows: 1,
//       labels: {
//         singular: 'Column',
//         plural: 'Columns',
//       },
//       fields: [
//         {
//           name: 'paragraphs',
//           type: 'array',
//           label: 'Paragraphs in Column',
//           minRows: 1,
//           labels: {
//             singular: 'Paragraph',
//             plural: 'Paragraphs',
//           },
//           fields: [
//             {
//               name: 'text',
//               type: 'textarea',
//               label: 'Paragraph Text',
//               required: true,
//             },
//           ],
//         },
//       ],
//     },
//   ],
// }

import { Block } from 'payload'

export const AboutWelcomeSuperChennaiBlock: Block = {
  // Slug-ah shorten panniyachu so DB table name length reduce aagum
  slug: 'WelcomeChennaiBlock',
  labels: {
    singular: 'Welcome Super Chennai Section',
    plural: 'Welcome Super Chennai Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Main Heading (Supports <br /> for line breaks)',
      defaultValue: 'Welcome to <br /> Super Chennai',
      required: true,
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Subheading Text',
      defaultValue:
        'Super Chennai is a citizen-led initiative to showcase Chennai as a truly global city',
      required: true,
    },
    {
      name: 'images',
      type: 'array',
      label: 'Section Images',
      minRows: 1,
      labels: {
        singular: 'Image',
        plural: 'Images',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Upload Image',
          required: true,
        },
      ],
    },
    {
      name: 'columns',
      type: 'array',
      label: 'Text Columns',
      minRows: 1,
      // dbName add panni Postgres table name-ah short panniyachu
      dbName: 'welc_cols',
      labels: {
        singular: 'Column',
        plural: 'Columns',
      },
      fields: [
        {
          name: 'items', // 'paragraphs'-ku badhula 'items' nu vachurukom (DB name short-aga)
          type: 'array',
          label: 'Paragraphs in Column',
          minRows: 1,
          dbName: 'col_items',
          labels: {
            singular: 'Paragraph',
            plural: 'Paragraphs',
          },
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Paragraph Text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
