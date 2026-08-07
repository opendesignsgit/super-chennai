import { Block } from 'payload'

export const HealthcareInChennaiBlock: Block = {
  slug: 'HealthcareInChennaiBlock',
  dbName: 'hic_b', // Unique short name for Postgres
  labels: {
    singular: 'Healthcare In Chennai Block',
    plural: 'Healthcare In Chennai Blocks',
  },
  imageURL: '/images/sections-image/ImagewithContent.jpg',
  imageAltText: 'Healthcare In Chennai Section Preview',

  admin: {
    group: 'Health Detail Page',
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
      dbName: 'hic_cat',
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
          label: 'Places / Clinics List',
          dbName: 'hic_plc',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Place / Clinic Name',
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
              dbName: 'hic_loc',
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
