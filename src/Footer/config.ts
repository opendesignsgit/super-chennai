// // import { GlobalConfig } from 'payload'
// // const Footer: GlobalConfig = {
// //   slug: 'footer',
// //   fields: [
// //     {
// //       type: 'group',
// //       name: 'footerSections',
// //       label: 'Footer Sections',
// //       fields: [

// // // TOP SECTION DATA ##################3############

// //         {
// //           type: 'array',
// //           name: 'digitalChennaiLinks',
// //           label: 'Digital Chennai Links',
// //           fields: [
// //             { type: 'text', name: 'label', label: 'Link Label', required: true },
// //             { type: 'text', name: 'link', label: 'Link URL', required: true },
// //           ],
// //         },
// //         {
// //           type: 'array',
// //           name: 'socialChennaiLinks',
// //           label: 'Social Chennai Links',
// //           fields: [
// //             { type: 'text', name: 'title', label: 'Link Title', required: true },
// //             { type: 'text', name: 'link', label: 'Link URL', required: true },
// //           ],
// //         },
// //         {
// //           type: 'array',
// //           name: 'funChennaiLinks',
// //           label: 'Fun Chennai Links',
// //           fields: [
// //             { type: 'text', name: 'title', label: 'Link Title', required: true },
// //             { type: 'text', name: 'link', label: 'Link URL', required: true },
// //           ],
// //         },
// //         {
// //           type: 'array',
// //           name: 'startupChennaiLinks',
// //           label: 'Startup Chennai Links',
// //           fields: [
// //             { type: 'text', name: 'title', label: 'Link Title', required: true },
// //             { type: 'text', name: 'link', label: 'Link URL', required: true },
// //           ],
// //         },
// //         {
// //           type: 'array',
// //           name: 'foodieChennaiLinks',
// //           label: 'Foodie Chennai Links',
// //           fields: [
// //             { type: 'text', name: 'title', label: 'Link Title', required: true },
// //             { type: 'text', name: 'link', label: 'Link URL', required: true },
// //           ],
// //         },
// //         {
// //           type: 'array',
// //           name: 'techChennaiLinks',
// //           label: 'Tech Chennai Links',
// //           fields: [
// //             { type: 'text', name: 'title', label: 'Link Title', required: true },
// //             { type: 'text', name: 'link', label: 'Link URL', required: true },
// //           ],
// //         },

// //         // BOTTOM SECTION DATA #############################################

// //         {
// //           type: 'array',
// //           name: 'creativeChennaiLinks',
// //           label: 'Creative Chennai Links',
// //           fields: [
// //             { type: 'text', name: 'label', label: 'Link Label', required: true },
// //             { type: 'text', name: 'link', label: 'Link URL', required: true },
// //           ],
// //         },
// //         {
// //           type: 'array',
// //           name: 'businessChennaiLinks',
// //           label: 'Business Chennai Links',
// //           fields: [
// //             { type: 'text', name: 'label', label: 'Link Label', required: true },
// //             { type: 'text', name: 'link', label: 'Link URL', required: true },
// //           ],
// //         },
// //         {
// //           type: 'array',
// //           name: 'networkChennaiLinks',
// //           label: 'Network Chennai Links',
// //           fields: [
// //             { type: 'text', name: 'label', label: 'Link Label', required: true },
// //             { type: 'text', name: 'link', label: 'Link URL', required: true },
// //           ],
// //         },
// //         {
// //           type: 'array',
// //           name: 'usefulLinks',
// //           label: 'Useful Links',
// //           fields: [
// //             { type: 'text', name: 'label', label: 'Link Label', required: true },
// //             { type: 'text', name: 'link', label: 'Link URL', required: true },
// //           ],
// //         },

// // // IMAGES SOCIAL  BOTOM SIDE ###################################################
// //          {
// //           type: 'upload',
// //           name: 'mainFooterLogo',
// //           label: 'Main Footer Logo',
// //           relationTo: 'media',
// //           required: false,
// //         },
// //         {
// //           type: 'upload',
// //           name: 'designByLogo',
// //           label: 'Design By Logo',
// //           relationTo: 'media',
// //           required: true,
// //         },
// //         {
// //           type: 'text',
// //           name: 'footerText',
// //           label: 'Footer Text',
// //           required: true,
// //         },
// //       ],
// //     },
// //   ],
// // }

// // export default Footer

// import { GlobalConfig } from 'payload'

// const Footer: GlobalConfig = {
//   slug: 'footer',
//   fields: [
//     {
//       type: 'group',
//       name: 'footerSections',
//       label: 'Footer Sections',
//       fields: [
//         // =========================
//         // TOP SECTION LINKS
//         // =========================
//         {
//           type: 'group',
//           name: 'topSectionLinks',
//           label: 'Top Section Links',
//           fields: [
//             {
//               type: 'array',
//               name: 'digitalChennaiLinks',
//               label: 'Digital Chennai Links',
//               fields: [
//                 { type: 'text', name: 'label', label: 'Link Label', required: true },
//                 { type: 'text', name: 'link', label: 'Link URL', required: true },
//               ],
//             },
//             {
//               type: 'array',
//               name: 'socialChennaiLinks',
//               label: 'Social Chennai Links',
//               fields: [
//                 { type: 'text', name: 'title', label: 'Link Title', required: true },
//                 { type: 'text', name: 'link', label: 'Link URL', required: true },
//               ],
//             },
//             {
//               type: 'array',
//               name: 'funChennaiLinks',
//               label: 'Fun Chennai Links',
//               fields: [
//                 { type: 'text', name: 'title', label: 'Link Title', required: true },
//                 { type: 'text', name: 'link', label: 'Link URL', required: true },
//               ],
//             },
//             {
//               type: 'array',
//               name: 'startupChennaiLinks',
//               label: 'Startup Chennai Links',
//               fields: [
//                 { type: 'text', name: 'title', label: 'Link Title', required: true },
//                 { type: 'text', name: 'link', label: 'Link URL', required: true },
//               ],
//             },
//             {
//               type: 'array',
//               name: 'foodieChennaiLinks',
//               label: 'Foodie Chennai Links',
//               fields: [
//                 { type: 'text', name: 'title', label: 'Link Title', required: true },
//                 { type: 'text', name: 'link', label: 'Link URL', required: true },
//               ],
//             },
//             {
//               type: 'array',
//               name: 'techChennaiLinks',
//               label: 'Tech Chennai Links',
//               fields: [
//                 { type: 'text', name: 'title', label: 'Link Title', required: true },
//                 { type: 'text', name: 'link', label: 'Link URL', required: true },
//               ],
//             },
//           ],
//         },

//         // =========================
//         // BOTTOM SECTION LINKS
//         // =========================
//         {
//           type: 'group',
//           name: 'bottomSectionLinks',
//           label: 'Bottom Section Links',
//           fields: [
//             {
//               type: 'array',
//               name: 'creativeChennaiLinks',
//               label: 'Creative Chennai Links',
//               fields: [
//                 { type: 'text', name: 'label', label: 'Link Label', required: true },
//                 { type: 'text', name: 'link', label: 'Link URL', required: true },
//               ],
//             },
//             {
//               type: 'array',
//               name: 'businessChennaiLinks',
//               label: 'Business Chennai Links',
//               fields: [
//                 { type: 'text', name: 'label', label: 'Link Label', required: true },
//                 { type: 'text', name: 'link', label: 'Link URL', required: true },
//               ],
//             },
//             {
//               type: 'array',
//               name: 'networkChennaiLinks',
//               label: 'Network Chennai Links',
//               fields: [
//                 { type: 'text', name: 'label', label: 'Link Label', required: true },
//                 { type: 'text', name: 'link', label: 'Link URL', required: true },
//               ],
//             },
//             {
//               type: 'array',
//               name: 'usefulLinks',
//               label: 'Useful Links',
//               fields: [
//                 { type: 'text', name: 'label', label: 'Link Label', required: true },
//                 { type: 'text', name: 'link', label: 'Link URL', required: true },
//               ],
//             },
//           ],
//         },

//         // =========================
//         // FOOTER LOGOS & TEXT
//         // =========================
//         {
//           type: 'upload',
//           name: 'mainFooterLogo',
//           label: 'Main Footer Logo',
//           relationTo: 'media',
//           required: false,
//         },
//         {
//           type: 'upload',
//           name: 'designByLogo',
//           label: 'Design By Logo',
//           relationTo: 'media',
//           required: true,
//         },
//         {
//           type: 'text',
//           name: 'footerText',
//           label: 'Footer Text',
//           required: true,
//         },
//       ],
//     },
//   ],
// }

// export default Footer

import { GlobalConfig } from 'payload'

const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      type: 'group',
      name: 'footerSections',
      label: 'Footer Sections',
      fields: [
        // TOP SECTION LINKS
        {
          type: 'array',
          name: 'topSectionLinks',
          label: 'Top Section Links (Grouped by Category)',
          fields: [
            {
              type: 'text',
              name: 'category',
              label: 'Main Title / Category',
              required: true,
            },
            {
              type: 'array',
              name: 'links',
              label: 'Links under this Category',
              fields: [
                {
                  type: 'text',
                  name: 'label',
                  label: 'Link Label',
                  required: true,
                },
                {
                  type: 'text',
                  name: 'link',
                  label: 'Link URL',
                  required: true,
                },
              ],
            },
          ],
        },

        
        // BOTTOM SECTION LINKS
        {
          type: 'array',
          name: 'socialLinks',
          label: 'Social Media Links',
          fields: [
            {
              type: 'text',
              name: 'platform',
              label: 'Platform Name',
              required: true,
            },
            {
              type: 'text',
              name: 'link',
              label: 'Link URL',
              required: true,
            },
            {
              type: 'upload',
              name: 'icon',
              label: 'Platform Icon',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        // FOOTER IMAGES AND TEXT
        {
          type: 'upload',
          name: 'mainFooterLogo',
          label: 'Main Footer Logo',
          relationTo: 'media',
          required: false,
        },
        {
          type: 'upload',
          name: 'designByLogo',
          label: 'Design By Logo',
          relationTo: 'media',
          required: true,
        },
        {
          type: 'text',
          name: 'footerText',
          label: 'Footer Text',
          required: true,
        },
      ],
    },
  ],
}

export default Footer
