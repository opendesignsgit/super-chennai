import { Block } from 'payload'

export const PlacesSectionBlock: Block = {
  slug: 'placesSectionBlock',
  dbName: 'plc_sec_blk',
  labels: {
    singular: 'Places of Worship in Chennai',
    plural: 'Places of Worship in Chennai',
  },

  imageURL: '/images/sections-image/placeofworship.jpg',
  imageAltText: 'Places of Worship in Chennai',
  admin: {
    group: 'Live Detail Page',
  },
  fields: [
    // 1. Dynamic Tabs / Regions (Central Chennai, South Chennai, etc.)
    {
      name: 'regions',
      type: 'array',
      label: 'Regions / Zones',
      dbName: 'reg_arr',
      minRows: 1,
      fields: [
        {
          name: 'regionName',
          type: 'text',
          label: 'Region Name (e.g. Central Chennai, North Chennai)',
          required: true,
        },
        {
          name: 'heroImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Region Header Banner Image',
        },

        // 2. Dynamic Categories inside Region (Temples, Churches, Mosques, etc.)
        {
          name: 'categories',
          type: 'array',
          label: 'Categories under this Region',
          dbName: 'cat_arr',
          fields: [
            {
              name: 'categoryName',
              type: 'text',
              label: 'Category Name (e.g. Temples, Churches, Jain Temples)',
              required: true,
            },
            {
              name: 'categoryDesc',
              type: 'textarea',
              label: 'Category Subtitle / Description (Optional)',
            },

            // 3. Dynamic Places inside Category
            {
              name: 'places',
              type: 'array',
              label: 'Places List',
              dbName: 'plc_arr',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Place Name (e.g. Kapaleeshwarar Temple)',
                  required: true,
                },
                {
                  name: 'desc',
                  type: 'textarea',
                  label: 'Place Description',
                },

                // 4. Dynamic Multiple Locations & Google Map Links per Place
                {
                  name: 'locations',
                  type: 'array',
                  label: 'Locations & Maps Links',
                  dbName: 'loc_arr',
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      label: 'Location Name (e.g. Mylapore, Saidapet)',
                      required: true,
                    },
                    {
                      name: 'link',
                      type: 'text',
                      label: 'Google Maps URL',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
