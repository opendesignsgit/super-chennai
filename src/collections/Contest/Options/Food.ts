import type { CollectionConfig } from 'payload'

export const SabhaFoods: CollectionConfig<'sabhaFoods'> = {
  slug: 'sabhaFoods',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'order', 'updatedAt'],
    description:
      'Manage Margazhi-related food spots, canteens, and snack places shown on the website.',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Food / Canteen Name',
      admin: {
        placeholder: 'Example: Music Academy Canteen',
        description: 'This name will be shown as the main heading on the food card.',
      },
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Short Description',
      admin: {
        placeholder: 'Example: Legendary filter coffee & pongal',
        description: 'A short line describing the food or speciality (optional).',
      },
    },

    // 🖼 IMAGE FIELD (NEW)
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Food Image',
      admin: {
        description:
          'Upload a photo of the canteen or food. Recommended: square image, good lighting.',
      },
    },

    // 😀 EMOJI FALLBACK
    {
      name: 'icon',
      type: 'text',
      label: 'Icon (Emoji)',
      admin: {
        placeholder: '☕',
        description: 'Optional. Used only if no image is uploaded (☕ 🍘 🍚).',
      },
    },

    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'canteen',
      label: 'Food Type',
      options: [
        { label: 'Canteen', value: 'canteen' },
        { label: 'Snacks', value: 'snacks' },
        { label: 'Restaurant', value: 'restaurant' },
      ],
      admin: {
        description: 'Helps group food items logically on the website.',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      admin: {
        placeholder: '1',
        description: 'Lower numbers appear first. Leave empty if order does not matter.',
      },
    },
  ],

  timestamps: true,
}
