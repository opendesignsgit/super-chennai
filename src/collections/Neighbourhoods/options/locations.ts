
import { CollectionConfig } from "payload"

export const ChennaiNeighbourhoodlocations: CollectionConfig<'chennaiNeighbourhoodlocations'> = {
  slug: 'chennaiNeighbourhoodlocations',
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
      name: 'pincode',
      label: 'Pincode',
      type: 'text',
      required: false,
      admin: {
        description: 'Area pincode (e.g. 600096)',
      },
    },
    {
      name: 'about',
      label: 'About Location',
      type: 'textarea',
      required: false,
      admin: {
        description: 'Short description about this location (OMR, ECR, etc.)',
      },
    },
    {
      name: 'locationUrl',
      type: 'text',
      label: 'Location URL',
    },
    {
      name: 'openInNewTab',
      type: 'checkbox',
      label: 'Open in new tab',
      defaultValue: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Neighbourhood location  image',
      },
    },

    {
      name: 'iconSvg',
      label: 'SVG Icon',
      type: 'upload',
      relationTo: 'media',
      required: false,
      filterOptions: {
        mimeType: { contains: 'svg' },
      },
      admin: {
        description: 'Upload SVG icon for this location',
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
          data.value = `${data.city}-${data.locality}`.toLowerCase().replace(/\s+/g, '-')
        }
      },
    ],
  },
}
