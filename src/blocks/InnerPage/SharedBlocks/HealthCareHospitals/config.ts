import { Block } from 'payload'

export const HealthCareHospitalsBlock: Block = {
  slug: 'HealthCareHospitalsBlock',
  labels: {
    singular: 'Health Care Hospital Block',
    plural: 'Health Care Hospital Blocks',
  },
  imageURL: '/images/sections-image/healthcare-section.jpg',
  imageAltText: 'Health Care Hospitals Section Preview',

  admin: {
    group: 'Live Detail Page ',
  },
  fields: [
    {
      name: 'mainTitle',
      type: 'text',
      label: 'Main Section Title (Optional)',
    },
    {
      name: 'categories',
      type: 'array',
      label: 'Categories List',
      dbName: 'hch_cat',
      minRows: 1,
      fields: [
        {
          name: 'category',
          type: 'text',
          label: 'Category Name',
          required: true,
        },
        {
          name: 'categoryParaGraph',
          type: 'textarea',
          label: 'Category Paragraph / Description',
        },
        {
          name: 'places',
          type: 'array',
          label: 'Hospitals / Places List',
          dbName: 'hch_plc',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Hospital Name',
              required: true,
            },
            {
              name: 'desc',
              type: 'textarea',
              label: 'Description',
            },
            {
              name: 'locations',
              type: 'array',
              label: 'Locations List',
              dbName: 'hch_loc',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Location Name',
                  required: true,
                },
                {
                  name: 'link',
                  type: 'text',
                  label: 'Google Maps Link',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
