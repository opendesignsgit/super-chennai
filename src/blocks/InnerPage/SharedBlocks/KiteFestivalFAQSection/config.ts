// // import { Block } from 'payload'

// // export const KiteFestivalFAQBlock: Block = {
// //   slug: 'KiteFestivalFAQBlock',
// //   labels: {
// //     singular: 'Kite Festival FAQ Section',
// //     plural: 'Kite Festival FAQ Sections',
// //   },
// //   admin: {
// //     group: 'Kite Festival Page',
// //   },
// //   fields: [
// //     {
// //       name: 'tagText',
// //       type: 'text',
// //       label: 'Top Small Tag',
// //       defaultValue: 'Got Questions?',
// //       required: true,
// //     },
// //     {
// //       name: 'mainHeading',
// //       type: 'text',
// //       label: 'Main Heading',
// //       defaultValue: 'Frequently Asked Questions',
// //       required: true,
// //     },
// //     {
// //       name: 'description',
// //       type: 'textarea',
// //       label: 'Section Description',
// //       defaultValue:
// //         'Everything you need to know before heading to the 5th Tamil Nadu International Kite Festival 2026.',
// //     },
// //     {
// //       name: 'faqsList',
// //       type: 'array',
// //       label: 'FAQ Items (Questions & Answers)',
// //       minRows: 1,
// //       fields: [
// //         {
// //           name: 'question',
// //           type: 'text',
// //           label: 'Question',
// //           required: true,
// //         },
// //         {
// //           name: 'answer',
// //           type: 'textarea',
// //           label: 'Answer',
// //           required: true,
// //         },
// //       ],
// //     },
// //   ],
// // }

// import { Block } from 'payload'

// export const KiteFestivalHighlightsBlock: Block = {
//   slug: 'KiteFestivalHighlightsBlock',
//   labels: {
//     singular: 'Kite Festival Highlights Section',
//     plural: 'Kite Festival Highlights Sections',
//   },
//   admin: {
//     group: 'Kite Festival Page',
//   },
//   fields: [
//     {
//       name: 'tagText',
//       type: 'text',
//       label: 'Top Small Tag',
//       defaultValue: 'Festival Attractions',
//       required: true,
//     },
//     {
//       name: 'mainHeading',
//       type: 'text',
//       label: 'Main Heading',
//       defaultValue: 'More Than Just A Kite Show',
//       required: true,
//     },
//     {
//       name: 'description',
//       type: 'textarea',
//       label: 'Section Description',
//       defaultValue:
//         'Explore the array of entertainment, culinary delights, and artistic exhibits planned across the three-day carnival.',
//     },
//     {
//       name: 'highlightsList',
//       type: 'array',
//       label: 'Attraction Cards',
//       dbName: 'kf_highlights_list',
//       interfaceName: 'KiteFestivalHighlightItem',
//       minRows: 1,
//       fields: [
//         {
//           name: 'title',
//           type: 'text',
//           label: 'Card Title',
//           required: true,
//         },
//         {
//           name: 'desc',
//           type: 'textarea',
//           label: 'Card Description',
//           required: true,
//         },
//         {
//           name: 'svgCode',
//           type: 'textarea',
//           label: 'Card Icon SVG Code',
//           required: true,
//         },
//       ],
//     },
//     {
//       name: 'bannerTitle',
//       type: 'text',
//       label: 'Banner Title',
//       defaultValue: "Ready to experience Mamallapuram's sky?",
//     },
//     {
//       name: 'bannerDescription',
//       type: 'textarea',
//       label: 'Banner Description',
//       defaultValue: 'Plan your family outing from 14 to 16 August at TTDC Ocean View grounds, ECR.',
//     },
//     {
//       name: 'badgeText',
//       type: 'text',
//       label: 'Banner Badge Text',
//       defaultValue: '14–16 August',
//     },
//     {
//       name: 'badgeSvgCode',
//       type: 'textarea',
//       label: 'Banner Badge Icon SVG Code (Optional)',
//     },
//   ],
// }
import { Block } from 'payload'

export const KiteFestivalHighlightsBlock: Block = {
  slug: 'KiteFestivalHighlightsBlock',
  // Direct explicit db table name for Postgres to prevent long generated constraint names
  dbName: 'kf_highlights_block',
  labels: {
    singular: 'Kite Festival Highlights Section',
    plural: 'Kite Festival Highlights Sections',
  },
  admin: {
    group: 'Kite Festival Page',
  },
  fields: [
    {
      name: 'tagText',
      type: 'text',
      label: 'Top Small Tag',
      defaultValue: 'Festival Attractions',
      required: true,
    },
    {
      name: 'mainHeading',
      type: 'text',
      label: 'Main Heading',
      defaultValue: 'More Than Just A Kite Show',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Description',
      defaultValue:
        'Explore the array of entertainment, culinary delights, and artistic exhibits planned across the three-day carnival.',
    },
    {
      name: 'highlightsList',
      type: 'array',
      label: 'Attraction Cards',
      dbName: 'kf_hl_list',
      interfaceName: 'KiteFestivalHighlightItem',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Card Title',
          required: true,
        },
        {
          name: 'desc',
          type: 'textarea',
          label: 'Card Description',
          required: true,
        },
        {
          name: 'svgCode',
          type: 'textarea',
          label: 'Card Icon SVG Code',
          required: true,
        },
      ],
    },
    {
      name: 'bannerTitle',
      type: 'text',
      label: 'Banner Title',
      defaultValue: "Ready to experience Mamallapuram's sky?",
    },
    {
      name: 'bannerDescription',
      type: 'textarea',
      label: 'Banner Description',
      defaultValue: 'Plan your family outing from 14 to 16 August at TTDC Ocean View grounds, ECR.',
    },
    {
      name: 'badgeText',
      type: 'text',
      label: 'Banner Badge Text',
      defaultValue: '14–16 August',
    },
    {
      name: 'badgeSvgCode',
      type: 'textarea',
      label: 'Banner Badge Icon SVG Code (Optional)',
    },
  ],
}
