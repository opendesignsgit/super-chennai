// import { Block } from 'payload'

// export const InnerPageHeroBannerBlock: Block = {
//   slug: 'InnerPageHeroBannerBlock',
//   labels: {
//     singular: 'Inner Page Hero Banner',
//     plural: 'Inner Page Hero Banners',
//   },

//   admin: {
//     group: 'Common Blocks',
//   },

//   imageURL: '/images/sections-image/herobanner.jpg',
//   fields: [
//     {
//       name: 'bannerImage',
//       type: 'upload',
//       relationTo: 'media',
//       label: 'Desktop Banner Image',
//       required: true,
//     },
//     {
//       name: 'mobileBannerImage',
//       type: 'upload',
//       relationTo: 'media',
//       label: 'Mobile Banner Image (Optional)',
//       admin: {
//         description: 'If left empty, the desktop image will be used on mobile screens as fallback.',
//       },
//     },
//     {
//       name: 'title',
//       type: 'text',
//       label: 'Main Title Text (e.g., FAQ)',
//       defaultValue: '',
//       required: false,
//     },
//     {
//       name: 'smallTitleText',
//       type: 'text',
//       label: 'Small Sub-Text inside Title (e.g., s for FAQs)',
//       defaultValue: '',
//     },
//     {
//       name: 'bannerLink',
//       type: 'text',
//       label: 'Banner Click URL (Optional)',
//       admin: {
//         description: 'Leave empty if the banner should not be clickable.',
//       },
//     },
//     {
//       name: 'bannerTarget',
//       type: 'select',
//       label: 'Open Link In',
//       defaultValue: '_self',
//       options: [
//         { label: 'Same Tab (_self)', value: '_self' },
//         { label: 'New Tab (_blank)', value: '_blank' },
//       ],
//       admin: {
//         condition: (data, siblingData) => Boolean(siblingData?.bannerLink), // bannerLink filled - dhaan show aagum
//       },
//     },
//     {
//       name: 'breadcrumbs',
//       type: 'array',
//       label: 'Breadcrumb Links',
//       minRows: 1,
//       labels: {
//         singular: 'Breadcrumb Item',
//         plural: 'Breadcrumb Items',
//       },
//       fields: [
//         {
//           name: 'label',
//           type: 'text',
//           label: 'Link Label',
//           required: true,
//         },
//         {
//           name: 'url',
//           type: 'text',
//           label: 'Link Path (URL)',
//           required: true,
//         },
//         {
//           name: 'smallText',
//           type: 'text',
//           label: 'Small Sub-Text (Optional)',
//           admin: {
//             description:
//               'Optional small tag inside breadcrumb link e.g. "s" for FAQ<small>s</small>',
//           },
//         },
//       ],
//     },
//     {
//       name: 'enableSearch',
//       type: 'checkbox',
//       label: 'Enable Search Bar Component',
//       defaultValue: true,
//     },
//   ],
// }
import { Block } from 'payload'

export const InnerPageHeroBannerBlock: Block = {
  slug: 'InnerPageHeroBannerBlock',
  labels: {
    singular: 'Inner Page Hero Banner',
    plural: 'Inner Page Hero Banners',
  },

  admin: {
    group: 'Common Blocks',
  },

  imageURL: '/images/sections-image/herobanner.jpg',
  fields: [
    {
      name: 'bannerImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Desktop Banner Image',
      required: true,
    },
    {
      name: 'mobileBannerImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Mobile Banner Image (Optional)',
      admin: {
        description: 'If left empty, the desktop image will be used on mobile screens as fallback.',
      },
    },
    {
      name: 'title',
      type: 'text',
      label: 'Main Title Text (e.g., FAQ)',
      defaultValue: '',
      required: false,
    },
    {
      name: 'smallTitleText',
      type: 'text',
      label: 'Small Sub-Text inside Title (e.g., s for FAQs)',
      defaultValue: '',
    },
    {
      name: 'bannerLink',
      type: 'text',
      label: 'Banner Click URL (Optional)',
      admin: {
        description: 'Leave empty if the banner should not be clickable.',
      },
    },
    {
      name: 'openInNewTab',
      type: 'checkbox',
      label: 'Open Banner Link in New Tab (_blank)',
      defaultValue: false,
      admin: {
        description:
          'Check this box to open the link in a new tab. Unchecked opens in the same tab.',
      },
    },
    {
      name: 'breadcrumbs',
      type: 'array',
      label: 'Breadcrumb Links',
      minRows: 1,
      labels: {
        singular: 'Breadcrumb Item',
        plural: 'Breadcrumb Items',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Link Label',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Link Path (URL)',
          required: true,
        },
        {
          name: 'smallText',
          type: 'text',
          label: 'Small Sub-Text (Optional)',
          admin: {
            description:
              'Optional small tag inside breadcrumb link e.g. "s" for FAQ<small>s</small>',
          },
        },
      ],
    },
    {
      name: 'enableSearch',
      type: 'checkbox',
      label: 'Enable Search Bar Component',
      defaultValue: true,
    },
  ],
}
