import type { CollectionConfig } from 'payload'
import { BhkType } from '@/payload-types'

export const BhkTypes: CollectionConfig<'bhkTypes'> = {
  slug: 'bhkTypes',
  access: {
    read: () => true,
  },
  admin: {
    hidden: true,
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'value',
      type: 'text',
      required: true,
    },
  ],
  hooks: {
    beforeValidate: [
      async ({ data, operation, req }) => {
        if ((operation === 'create' || operation === 'update') && data?.value) {
          const existing = await req.payload.find({
            collection: 'bhkTypes',
            where: {
              value: {
                equals: data.value,
              },
            },
          })

          const docs: BhkType[] = existing.docs ?? []
          if (docs.length > 0) {
            const conflict = docs.find((doc) => doc.id !== data?.id)

            if (conflict) {
              throw new Error(`bhkTypes type "${data.value}" is already selected.`)
            }
          }
        }
      },
    ],
  },
}
