// import type { GlobalConfig } from 'payload'

import { CollectionConfig } from 'payload'

// import { link } from '@/fields/link'
// import { revalidateHeader } from './hooks/revalidateHeader'

// export const Header: GlobalConfig = {
//   slug: 'header',
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
//           RowLabel: '@/Header/RowLabel#RowLabel',
//         },
//       },
//     },
//   ],
// hooks: {
//   afterChange: [revalidateHeader],
// },
// }
// blocks/header/schema.ts

import { GlobalConfig } from 'payload'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'header',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
        {
          name: 'content',
          type: 'array',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'desc',
              type: 'text',
            },
            {
              name: 'link',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}

export default Header
