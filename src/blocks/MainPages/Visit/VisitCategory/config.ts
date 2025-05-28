// import { Block } from 'payload'

// const VisitCategory: Block = {
//   slug: 'visitcategory',
//   labels: {
//     singular: 'Visit Category',
//     plural: 'Visit Categories',
//   },
//   fields: [
//     {
//       name: 'title',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'description',
//       type: 'textarea',
//     },
//     {
//       name: 'visitGroupRef',
//       type: 'relationship',
//       relationTo: 'visitGroups',
//       label: 'Select Visit Group',
//       required: true,
//     },

//   ],
// }

// export default VisitCategory

import { Block } from 'payload'

const VisitCategory: Block = {
  slug: 'visitcategory',
  labels: {
    singular: 'Visit Category',
    plural: 'Visit Categories',
  },
  admin: {
    group: 'Main Page Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Visit Items',
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}

export default VisitCategory
