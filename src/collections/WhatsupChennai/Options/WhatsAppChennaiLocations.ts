import type { CollectionConfig } from 'payload'

export const WhatsAppChennaiLocations: CollectionConfig<'whatsapp-chennai-locations'> = {
  slug: 'whatsapp-chennai-locations',

  access: {
    read: () => true,
  },

  admin: {
    hidden: true,
    useAsTitle: 'label',
    group: 'WhatsApp Chennai',
  },

  fields: [
    {
      name: 'state',
      type: 'text',
      required: true,
      defaultValue: 'Tamil Nadu',
      admin: {
        description: 'State name (e.g. Tamil Nadu)',
      },
    },
    {
      name: 'city',
      type: 'text',
      required: true,
      defaultValue: 'Chennai',
      admin: {
        description: 'City name (e.g. Chennai)',
      },
    },
    {
      name: 'locality',
      type: 'text',
      required: true,
      admin: {
        description: 'Locality / Area (e.g. OMR, ECR, Anna Nagar)',
      },
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      admin: {
        description: 'Display label (e.g. OMR, Chennai)',
      },
    },
    {
      name: 'value',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Unique location slug (e.g. chennai-omr)',
      },
    },
  ],

  hooks: {
    beforeValidate: [
      async ({ data }) => {
        // Auto-generate label
        if (!data?.label && data?.locality && data?.city) {
          data.label = `${data.locality}, ${data.city}`
        }

        // Auto-generate value slug
        if (!data?.value && data?.locality && data?.city) {
          data.value = `${data.city}-${data.locality}`
            .toLowerCase()
            .replace(/\s+/g, '-')
        }
      },
    ],
  },
}