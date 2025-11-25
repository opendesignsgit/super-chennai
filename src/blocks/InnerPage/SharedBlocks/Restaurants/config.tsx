import { Block } from 'payload'
export const RestaurantsCategories: Block = {
  slug: 'restaurants',
  labels: {
    singular: 'Restaurants',
    plural: '',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Section Title (Example: Global & Continental Cuisine)',
      },
    },

    {
      name: 'points',
      type: 'array',
      label: 'Points',
      labels: {
        singular: 'Point',
        plural: 'Points',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'subDescription',
          type: 'textarea',
        },


        {
          name: 'restaurantImages',
          type: 'array',
          label: 'Restaurant Images',
          labels: {
            singular: 'Image',
            plural: 'Images',
          },
          admin: {
            description: 'Upload 1 or more images (will show max 2 per row)',
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: false,
            },
          ],
        },

        {
          name: 'locations',
          type: 'array',
          label: 'Locations',
          labels: {
            singular: 'Location',
            plural: 'Locations',
          },
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'link',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}


