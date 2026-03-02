import type { Block } from 'payload'

export const AdBlock: Block = {
  slug: 'adBlock',
  labels: {
    singular: 'Advertisement',
    plural: 'Advertisements',
  },
  fields: [
    {
      name: 'ads',
      label: 'Select Ads',
      type: 'relationship',
      relationTo: 'ads',
      hasMany: true,
      required: true,
    },
    {
      name: 'position',
      label: 'Ad Position',
      type: 'select',
      required: true,
      defaultValue: 'inline',
      options: [
        { label: 'Inline (Center)', value: 'inline' },
        { label: 'Left Side', value: 'left' },
        { label: 'Right Side', value: 'right' },
        { label: 'Top', value: 'top' },
        { label: 'Bottom', value: 'bottom' },
      ],
    },
  ],
}
