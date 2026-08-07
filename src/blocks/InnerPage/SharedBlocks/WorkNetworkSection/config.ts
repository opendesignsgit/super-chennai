import { Block } from 'payload'

export const WorkNetworkSectionBlock: Block = {
  slug: 'WorkNetworkSectionBlock',
  labels: {
    singular: 'Network Category Section',
    plural: 'Network Category Sections',
  },
  imageURL: '/images/sections-image/NetworkCategorySection.jpg',
  imageAltText: 'Network Category Section Preview',

  admin: {
    group: 'Work Detail Page',
  },
  fields: [
    {
      name: 'mainTitle',
      type: 'text',
      label: 'Main Section Title (Optional)',
      defaultValue: 'Networking & Communities',
    },
    {
      name: 'networkData',
      type: 'array',
      label: 'Categories List',
      dbName: 'nc_data', // Short unique table name for Postgres
      minRows: 1,
      fields: [
        {
          name: 'category',
          type: 'text',
          label: 'Category Name',
          required: true,
        },
        {
          name: 'places',
          type: 'array',
          label: 'Places / Places List',
          dbName: 'nc_plcs', // Short unique table name for Postgres
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Place Name',
              required: true,
            },
            {
              name: 'desc',
              type: 'textarea',
              label: 'Place Description',
            },
            {
              name: 'locations',
              type: 'array',
              label: 'Locations',
              dbName: 'nc_locs', // Short unique table name for Postgres
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
