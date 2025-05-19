// import type { GlobalConfig } from 'payload'

// import { link } from '@/fields/link'
// import { revalidateFooter } from './hooks/revalidateFooter'

// export const Footer: GlobalConfig = {
//   slug: 'footer',
//   access: {
//     read: () => true,
//   },
//   fields: [
//     {
//       name: 'navItems',
//       type: 'array',
//       fields: [
//         link({
//           appearances: false,
//         }),
//       ],
//       maxRows: 6,
//       admin: {
//         initCollapsed: true,
//         components: {
//           RowLabel: '@/Footer/RowLabel#RowLabel',
//         },
//       },
//     },
//   ],
//   hooks: {
//     afterChange: [revalidateFooter],
//   },
// }


import { GlobalConfig } from 'payload'
const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      type: 'group',
      name: 'footerSections',
      label: 'Footer Sections',
      fields: [
        {
          type: 'upload',
          name: 'mainFooterLogo',
          label: 'Main Footer Logo',
          relationTo: 'media',
          required: false,
        },

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
        {
          type: 'array',
          name: 'digitalChennaiLinks',
          label: 'Digital Chennai Links',
          fields: [
            { type: 'text', name: 'label', label: 'Link Label', required: true },
            { type: 'text', name: 'link', label: 'Link URL', required: true },
          ],
        },
        {
          type: 'array',
          name: 'socialChennaiLinks',
          label: 'Social Chennai Links',
          fields: [
            { type: 'text', name: 'title', label: 'Link Title', required: true },
            { type: 'text', name: 'link', label: 'Link URL', required: true },
          ],
        },
        {
          type: 'array',
          name: 'funChennaiLinks',
          label: 'Fun Chennai Links',
          fields: [
            { type: 'text', name: 'title', label: 'Link Title', required: true },
            { type: 'text', name: 'link', label: 'Link URL', required: true },
          ],
        },
        {
          type: 'array',
          name: 'startupChennaiLinks',
          label: 'Startup Chennai Links',
          fields: [
            { type: 'text', name: 'title', label: 'Link Title', required: true },
            { type: 'text', name: 'link', label: 'Link URL', required: true },
          ],
        },
        {
          type: 'array',
          name: 'foodieChennaiLinks',
          label: 'Foodie Chennai Links',
          fields: [
            { type: 'text', name: 'title', label: 'Link Title', required: true },
            { type: 'text', name: 'link', label: 'Link URL', required: true },
          ],
        },
        {
          type: 'array',
          name: 'techChennaiLinks',
          label: 'Tech Chennai Links',
          fields: [
            { type: 'text', name: 'title', label: 'Link Title', required: true },
            { type: 'text', name: 'link', label: 'Link URL', required: true },
          ],
        },
      
        {
          type: 'array',
          name: 'creativeChennaiLinks',
          label: 'Creative Chennai Links',
          fields: [
            { type: 'text', name: 'label', label: 'Link Label', required: true },
            { type: 'text', name: 'link', label: 'Link URL', required: true },
          ],
        },
        {
          type: 'array',
          name: 'businessChennaiLinks',
          label: 'Business Chennai Links',
          fields: [
            { type: 'text', name: 'label', label: 'Link Label', required: true },
            { type: 'text', name: 'link', label: 'Link URL', required: true },
          ],
        },
        {
          type: 'array',
          name: 'networkChennaiLinks',
          label: 'Network Chennai Links',
          fields: [
            { type: 'text', name: 'label', label: 'Link Label', required: true },
            { type: 'text', name: 'link', label: 'Link URL', required: true },
          ],
        },
        {
          type: 'array',
          name: 'usefulLinks',
          label: 'Useful Links',
          fields: [
            { type: 'text', name: 'label', label: 'Link Label', required: true },
            { type: 'text', name: 'link', label: 'Link URL', required: true },
          ],
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
