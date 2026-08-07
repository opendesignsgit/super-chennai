import { Block } from 'payload'

export const TableSectionBlock: Block = {
  slug: 'TableSectionBlock',
  labels: {
    singular: 'Table Section Block',
    plural: 'Table Section Blocks',
  },

  admin: {
    group: 'Common Blocks',
  },
  imageURL: '/images/sections-image/tablesection.jpg',
  imageAltText: 'EV Zones Table Section Preview',
  fields: [
    {
      name: 'mainTitle',
      type: 'text',
      label: 'Main Heading Title',
      defaultValue: 'EV ZONES & SMART CORRIDORS',
    },
    {
      name: 'subTitle',
      type: 'text',
      label: 'Sub Heading / Description',
      defaultValue: 'These companies have made Chennai their technology fortress:',
    },
    // Dynamic Table Headers (Max 4 Columns)
    {
      name: 'headers',
      type: 'array',
      label: 'Table Column Headers (Max 4)',
      dbName: 'ev_h',
      maxRows: 4,
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Header Name',
          required: true,
        },
      ],
    },
    // Dynamic Table Rows
    {
      name: 'rows',
      type: 'array',
      label: 'Table Rows',
      dbName: 'ev_r',
      fields: [
        {
          name: 'columns',
          type: 'array',
          label: 'Row Cells (Match header order)',
          dbName: 'ev_c',
          maxRows: 4,
          fields: [
            {
              name: 'text',
              type: 'textarea',
              label: 'Cell Content (Supports <strong>, <em> tags)',
            },
          ],
        },
      ],
    },
  ],
}
