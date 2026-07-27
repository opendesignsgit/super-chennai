import { Block } from 'payload'

export const ConclaveSuperChennaiBlock: Block = {
  slug: 'ConclaveSuperChennaiBlock',
  labels: {
    singular: 'Conclave Super Chennai Meta',
    plural: 'Conclave Super Chennai Metas',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Conclave / Event Title',
      defaultValue: 'Super Chennai Conclave',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description Text',
      required: true,
      admin: {
        description:
          'Supports HTML tags like <strong> or <br /> if styling adjustments are needed.',
      },
    },
    {
      name: 'metaItems',
      type: 'array',
      label: 'Event Info Blocks (e.g., Date, Time)',
      minRows: 1,
      maxRows: 4,
      labels: {
        singular: 'Info Item',
        plural: 'Info Items',
      },
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          label: 'Icon (SVG/PNG)',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label (e.g., DATE, TIME)',
          required: true,
        },
        {
          name: 'value',
          type: 'text',
          label: 'Value (e.g., February 19, 2026)',
          required: true,
        },
      ],
    },
  ],
}
