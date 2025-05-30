import type { Field } from 'payload'
import { linkGroup } from '@/fields/linkGroup'

const isNotNone = (_: unknown, { siblingData }: any) => siblingData?.type !== 'none'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  label: false,
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'Defult',
      label: 'Type',
      required: true,
      options: [
        { label: 'None', value: 'none' },
        { label: 'Banner', value: 'Defult' },
      ],
      admin: {
        description: 'Choose the type of hero banner to display. Select "None" to hide the banner.',
      },
    },

    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      admin: {
        condition: isNotNone,
      },
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Banner Image',
      relationTo: 'media',
      required: true,
      admin: {
        condition: isNotNone,
      },
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Gradient',
      defaultValue: 'gradient-1',
      admin: {
        condition: isNotNone,
      },
      options: [
        { label: 'Purple & Indigo', value: 'gradient-1' },
        { label: 'Blue & Purple', value: 'gradient-2' },
        { label: 'Teal & Navy', value: 'gradient-3' },
        { label: 'Dark Purple', value: 'gradient-4' },
        { label: 'Magenta Vibe', value: 'gradient-5' },
        { label: 'Cool Blue Mix', value: 'gradient-6' },
        { label: 'Dark raspberry burnt coral', value: 'gradient-7' },
      ],
    },

    linkGroup({
      overrides: {
        maxRows: 2,
        admin: {
          condition: isNotNone,
        },
      },
    }),
  ],
}
