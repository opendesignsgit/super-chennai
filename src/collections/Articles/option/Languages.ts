import type { CollectionConfig } from 'payload'

export const Languages: CollectionConfig<'languages'> = {
  slug: 'languages',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      admin: {
        description: 'Language name (e.g. English, Tamil)',
      },
    },
    {
      name: 'code',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'ISO code (en, ta, hi, fr)',
      },
    },
    {
      name: 'nativeLabel',
      type: 'text',
      admin: {
        description: 'Native name (தமிழ், हिंदी)',
      },
    },
    {
      name: 'direction',
      type: 'select',
      defaultValue: 'ltr',
      options: [
        { label: 'Left to Right', value: 'ltr' },
        { label: 'Right to Left', value: 'rtl' },
      ],
    },
    {
      name: 'active',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'order',
      type: 'number',
      defaultValue: 0,
    },
  ],
}
