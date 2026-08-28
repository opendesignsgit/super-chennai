import { Block } from 'payload'

// 1. Info Section Block
const InfoSectionBlock: Block = {
  slug: 'infoSectionBlock',
  labels: { singular: 'Info Section', plural: 'Info Sections' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'icon', type: 'upload', relationTo: 'media' },
    { name: 'description', type: 'textarea' },
    {
      name: 'points',
      type: 'array',
      fields: [{ name: 'point', type: 'textarea' }],
    },
  ],
}

// 2. Table Block
const TableBlock: Block = {
  slug: 'tableBlock',
  labels: { singular: 'Table Section', plural: 'Table Sections' },
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

// Main Page Block
export const LearningLivePageBlock: Block = {
  slug: 'llpBlock',
  labels: { singular: 'Learning Live Page', plural: 'Learning Live Pages' },
  fields: [
    {
      name: 'regions',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'regionName', type: 'text', required: true },
        { name: 'heroImage', type: 'upload', relationTo: 'media' },
        {
          // HERE IS THE MAGIC: Blocks layout array for custom ordering!
          name: 'contentLayout',
          type: 'blocks',
          blocks: [InfoSectionBlock, TableBlock, CategoryBlock],
        },
      ],
    },
  ],
}
