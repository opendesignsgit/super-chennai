// import { Block } from 'payload'

// // 1. Info Section Block
// const InfoSectionBlock: Block = {
//   slug: 'infoSectionBlock',
//   labels: { singular: 'Info Section', plural: 'Info Sections' },
//   fields: [
//     { name: 'title', type: 'text', required: true },
//     { name: 'icon', type: 'upload', relationTo: 'media' },
//     { name: 'description', type: 'textarea' },
//     {
//       name: 'points',
//       type: 'array',
//       fields: [{ name: 'point', type: 'textarea' }],
//     },
//   ],
// }

// // 2. Table Block
// const TableBlock: Block = {
//   slug: 'tableBlock',
//   labels: { singular: 'Table Section', plural: 'Table Sections' },
//   fields: [
//     { name: 'tableTitle', type: 'text', required: true },
//     {
//       name: 'headers',
//       type: 'array',
//       fields: [{ name: 'headerName', type: 'text' }],
//     },
//     {
//       name: 'rows',
//       type: 'array',
//       fields: [
//         {
//           name: 'cells',
//           type: 'array',
//           fields: [{ name: 'value', type: 'text' }],
//         },
//       ],
//     },
//   ],
// }

// // 3. Category/Cards Block
// const CategoryBlock: Block = {
//   slug: 'categoryBlock',
//   labels: { singular: 'Category Cards Section', plural: 'Category Cards Sections' },
//   fields: [
//     { name: 'categoryName', type: 'text', required: true },
//     { name: 'categoryDesc', type: 'textarea' },
//     {
//       name: 'items',
//       type: 'array',
//       fields: [
//         { name: 'name', type: 'text', required: true },
//         { name: 'desc', type: 'textarea' },
//         {
//           name: 'locations',
//           type: 'array',
//           fields: [
//             { name: 'name', type: 'text', required: true },
//             { name: 'link', type: 'text' },
//           ],
//         },
//       ],
//     },
//   ],
// }

// // ✨ 4. Image Title Banner Block (Unnoda pudhu section)
// const ImageTitleBlock: Block = {
//   slug: 'imageTitleBlock',
//   labels: { singular: 'Image Title Banner', plural: 'Image Title Banners' },
//   fields: [
//     { name: 'sectionTitle', type: 'text', required: true },
//     { name: 'image', type: 'upload', relationTo: 'media', required: true },
//     { name: 'imgAlt', type: 'text' },
//   ],
// }

// // Main Page Block
// export const LearningLivePageBlock: Block = {
//   slug: 'llpBlock',
//   labels: { singular: 'Learning Live Page', plural: 'Learning Live Pages' },
//   fields: [
//     {
//       name: 'regions',
//       type: 'array',
//       minRows: 1,
//       fields: [
//         { name: 'regionName', type: 'text', required: true },
//         { name: 'heroImage', type: 'upload', relationTo: 'media' },
//         {
//           name: 'contentLayout',
//           type: 'blocks',
//           // Added the new block here!
//           blocks: [InfoSectionBlock, TableBlock, CategoryBlock, ImageTitleBlock],
//         },
//       ],
//     },
//   ],
// }

import { Block } from 'payload'

// 1. Info Section Block
// const InfoSectionBlock: Block = {
//   slug: 'infoSectionBlock',
//   labels: { singular: 'Info Section', plural: 'Info Sections' },
//   fields: [
//     { name: 'title', type: 'text', required: true },
//     { name: 'icon', type: 'upload', relationTo: 'media' },
//     { name: 'description', type: 'textarea' },
//     {
//       name: 'points',
//       type: 'array',
//       fields: [{ name: 'point', type: 'textarea' }],
//     },
//   ],
// }

const InfoSectionBlock: Block = {
  slug: 'infoSectionBlock',
  labels: { singular: 'Info Section', plural: 'Info Sections' },

  imageURL: '/images/sections-image/info-sectionlive.png',

  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'icon', type: 'upload', relationTo: 'media' },
    {
      name: 'description',
      type: 'textarea',
      admin: {
        description:
          'Supports HTML tags like <strong>bold text</strong> and <br/> for line breaks.',
      },
    },
    {
      name: 'points',
      type: 'array',
      fields: [
        {
          name: 'point',
          type: 'textarea',
          admin: {
            description:
              'Supports HTML tags like <strong>bold text</strong> and <br/> for line breaks.',
          },
        },
      ],
    },
  ],
}
// 2. Table Block
const TableBlock: Block = {
  slug: 'tableBlock',
  labels: { singular: 'Table Section', plural: 'Table Sections' },
  imageURL: '/images/sections-image/tablesection.jpg',
  fields: [
    { name: 'tableTitle', type: 'text', required: true },
    {
      name: 'headers',
      type: 'array',
      fields: [{ name: 'headerName', type: 'text' }],
    },
    {
      name: 'rows',
      type: 'array',
      fields: [
        {
          name: 'cells',
          type: 'array',
          fields: [{ name: 'value', type: 'text' }],
        },
      ],
    },
  ],
}

// 3. Category/Cards Block
const CategoryBlock: Block = {
  slug: 'categoryBlock',
  labels: { singular: 'Category Cards Section', plural: 'Category Cards Sections' },
  imageURL: '/images/sections-image/healthcare-section.jpg',
  fields: [
    { name: 'categoryName', type: 'text', required: true },
    { name: 'categoryDesc', type: 'textarea' },
    {
      name: 'items',
      type: 'array',
      fields: [
        { name: 'name', type: 'text', required: true },
        { name: 'desc', type: 'textarea' },
        {
          name: 'locations',
          type: 'array',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'link', type: 'text' },
          ],
        },
      ],
    },
  ],
}

// 4. Image Title Banner Block
const ImageTitleBlock: Block = {
  slug: 'imageTitleBlock',
  labels: { singular: 'Image Title Banner', plural: 'Image Title Banners' },
  imageURL: '/images/sections-image/info-sectionlive.png',
  fields: [
    { name: 'sectionTitle', type: 'text', required: true },
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'imgAlt', type: 'text' },
  ],
}

// Main Page Block - With Two-Level Tab Control
export const LearningLivePageBlock: Block = {
  slug: 'llpBlock',
  labels: { singular: 'Learning Live Page', plural: 'Learning Live Pages' },

  imageURL: '/images/sections-image/live-education.png',
  admin: {
    group: 'Live Detail Page',
  },
  fields: [
    {
      name: 'mainTabs',
      type: 'array',
      label: 'Main Tabs (Top Level)',
      minRows: 1,
      fields: [
        { name: 'tabTitle', type: 'text', required: true, label: 'Main Tab Title' },
        {
          name: 'regions',
          type: 'array',
          label: 'Sub Tabs / Regions',
          minRows: 1,
          fields: [
            { name: 'regionName', type: 'text', required: true, label: 'Sub-Tab Button Name' },
            { name: 'heroImage', type: 'upload', relationTo: 'media' },
            {
              name: 'contentLayout',
              type: 'blocks',
              blocks: [ImageTitleBlock, InfoSectionBlock, TableBlock, CategoryBlock],
            },
          ],
        },
      ],
    },
  ],
}
