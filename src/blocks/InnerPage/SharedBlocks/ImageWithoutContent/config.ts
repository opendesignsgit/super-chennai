// import { Block } from 'payload'

// export const ImageWithoutContentBlock: Block = {
//   slug: 'ImageWithoutContentBlock',
//   labels: {
//     singular: 'Image Without Content Block',
//     plural: 'Image Without Content Blocks',
//   },
//   imageURL: '/images/sections-image/TechPuzzleBlock.jpg',
//   imageAltText: 'Tech Puzzle Section Preview',
//   fields: [
//     {
//       name: 'mainTitle',
//       type: 'text',
//       label: 'Main Heading Title',
//       defaultValue: 'CHENNAI’S TECH PUZZLE: THE KEY PIECES',
//     },
//     {
//       name: 'cards',
//       type: 'array',
//       label: 'Puzzle Cards',
//       dbName: 'tp_cards', // Short DB table name to avoid Drizzle collision
//       minRows: 1,
//       fields: [
//         {
//           name: 'cardTitle',
//           type: 'text',
//           label: 'Card Subheading (e.g., Talent)',
//           required: true,
//         },
//         {
//           name: 'bulletPoints',
//           type: 'array',
//           label: 'Bullet Points',
//           dbName: 'tp_bp',
//           fields: [
//             {
//               name: 'pointText',
//               type: 'textarea',
//               label: 'Point Text (Supports <strong> tags)',
//             },
//           ],
//         },
//       ],
//     },
//   ],
// }

import { Block } from 'payload'

export const ImageWithoutContentBlock: Block = {
  slug: 'ImageWithoutContentBlock',
  labels: {
    singular: 'Image Without Content Block',
    plural: 'Image Without Content Blocks',
  },
  imageURL: '/images/sections-image/ImagewithoutContent.jpg',
  imageAltText: 'Tech Puzzle Section Preview',
  fields: [
    {
      name: 'mainTitle',
      type: 'text',
      label: 'Main Heading Title',
      defaultValue: 'CHENNAI’S TECH PUZZLE: THE KEY PIECES',
    },
    // OPTIONAL: Multiple Paragraphs under Main Title
    {
      name: 'paragraphBlocks',
      type: 'array',
      label: 'Main Title Sub-Paragraphs (Optional)',
      dbName: 'tp_p', // Short DB table name to avoid Drizzle collision
      fields: [
        {
          name: 'text',
          type: 'textarea',
          label: 'Paragraph Text (Supports <strong>, <em> tags)',
        },
      ],
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Puzzle Cards',
      dbName: 'tp_cards',
      minRows: 1,
      fields: [
        {
          name: 'cardTitle',
          type: 'text',
          label: 'Card Subheading (e.g., Talent)',
          required: true,
        },
        {
          name: 'bulletPoints',
          type: 'array',
          label: 'Bullet Points',
          dbName: 'tp_bp',
          fields: [
            {
              name: 'pointText',
              type: 'textarea',
              label: 'Point Text (Supports <strong> tags)',
            },
          ],
        },
      ],
    },
  ],
}
