import { PropertyType } from '@/payload-types'
import type { CollectionConfig } from 'payload'

export const PropertyTypes: CollectionConfig<'propertyTypes'> = {
  slug: 'propertyTypes',
  access: {
    read: () => true,
  },

  fields: [
    {
      name: 'value',
      type: 'select',
      required: true,
      options: [
        { label: 'Apartment', value: 'apartment' },
        { label: 'Villa / Independent House', value: 'villa' },
        { label: 'Builder Floor', value: 'builder_floor' },
        { label: 'Studio Apartment', value: 'studio' },
        { label: 'Penthouse', value: 'penthouse' },

        { label: 'Shop / Showroom', value: 'shop' },
        { label: 'Office Space', value: 'office' },
        { label: 'Co-working Space', value: 'coworking' },
        { label: 'Warehouse / Godown', value: 'warehouse' },
        { label: 'Industrial Shed', value: 'industrial_shed' },
        { label: 'Factory', value: 'factory' },

        { label: 'Plot / Land', value: 'plot' },
        { label: 'Agricultural Land / Farm Land', value: 'agriculture_land' },
        { label: 'Farmhouse', value: 'farmhouse' },

        { label: 'Hotel / Guest House', value: 'hotel' },
        { label: 'PG / Coliving', value: 'pg_coliving' },
        { label: 'Serviced Apartment', value: 'serviced_apartment' },
      ],
    },
  ],

  admin: {
    useAsTitle: 'value',
    hidden: true,
  },

  hooks: {
    beforeValidate: [
      async ({ data, operation, req }) => {
        if ((operation === 'create' || operation === 'update') && data?.value) {
          const existing = await req.payload.find({
            collection: 'propertyTypes',
            where: {
              value: {
                equals: data.value,
              },
            },
          })

          const docs: PropertyType[] = existing.docs ?? []
          if (docs.length > 0) {
            const conflict = docs.find((doc) => doc.id !== data?.id)

            if (conflict) {
              throw new Error(`Property type "${data.value}" is already selected.`)
            }
          }
        }
      },
    ],
  },
}
