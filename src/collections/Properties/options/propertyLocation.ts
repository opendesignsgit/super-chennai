
import { CollectionConfig } from "payload"

export const PropertyLocations: CollectionConfig<'propertylocations'> = {
  slug: 'propertylocations',          
  access: {
    read: () => true,
  },
  admin: {
    hidden: true,
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
        if (!data?.label && data?.locality && data?.city) {
          data.label = `${data.locality}, ${data.city}`
        }

        if (!data?.value && data?.locality && data?.city) {
          data.value = `${data.city}-${data.locality}`
            .toLowerCase()
            .replace(/\s+/g, '-')
        }
      },
    ],
  },
}
