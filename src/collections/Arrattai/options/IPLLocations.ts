import type { CollectionConfig } from 'payload'

export const IplLocations: CollectionConfig<'iplLocations'> = {
  slug: 'iplLocations',

  labels: {
    singular: 'IPL Location',
    plural: 'IPL Locations',
  },

  access: {
    read: () => true,
  },

  admin: {
    hidden: true,
    useAsTitle: 'label',
    group: 'IPL',
  },

  fields: [
    {
      name: 'state',
      type: 'text',
      required: true,
      admin: {
        description: 'State name (Example: Tamil Nadu, Karnataka)',
      },
    },

    {
      name: 'city',
      type: 'text',
      required: true,
      admin: {
        description: 'City name (Example: Chennai, Mumbai)',
      },
    },

    {
      name: 'locality',
      type: 'text',
      required: true,
      admin: {
        description: 'Area / Stadium locality',
      },
    },

    {
      name: 'label',
      type: 'text',
      required: true,
      admin: {
        description: 'Display label (Example: Chepauk, Chennai)',
      },
    },

    {
      name: 'value',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Unique slug value (Example: chennai-chepauk)',
      },
    },
  ],

  hooks: {
    beforeValidate: [
      async ({ data }) => {
        // Auto generate label
        if (!data?.label && data?.locality && data?.city) {
          data.label = `${data.locality}, ${data.city}`
        }

        // Auto generate slug value
        if (!data?.value && data?.locality && data?.city) {
          data.value = `${data.city}-${data.locality}`
            .toLowerCase()
            .replace(/\s+/g, '-')
        }
      },
    ],
  },
}