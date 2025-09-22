import type { CollectionConfig } from 'payload'

export const Locations: CollectionConfig<'locations'> = {
  slug: 'locations',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'state',
      type: 'text',
      required: true,
      admin: {
        description: 'State name (e.g. Tamil Nadu, Karnataka)',
      },
    },
    {
      name: 'city',
      type: 'text',
      required: true,
      admin: {
        description: 'City name (e.g. Chennai, Bangalore, Mumbai)',
      },
    },
    {
      name: 'locality',
      type: 'text',
      required: true,
      admin: {
        description: 'Locality / Area (e.g. OMR, ECR, Whitefield)',
      },
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      admin: {
        description: 'Display label, e.g. "OMR, Chennai"',
      },
    },
    {
      name: 'value',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Unique slug, e.g. "chennai-omr"',
      },
    },
  ],

  hooks: {
    beforeValidate: [
      async ({ data }) => {
        // Auto-generate label if not given
        if (!data?.label && data?.locality && data?.city) {
          data.label = `${data.locality}, ${data.city}`
        }

        // Auto-generate value (slug) if not given
        if (!data?.value && data?.locality && data?.city) {
          data.value = `${data.city}-${data.locality}`
            .toLowerCase()
            .replace(/\s+/g, '-')
        }
      },
    ],
  },
}
