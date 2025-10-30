import { CollectionConfig } from "payload";

const Neighbourhoods: CollectionConfig = {
  slug: 'neighbourhoods',
  labels: {
    singular: 'Neighbourhood',
    plural: 'Neighbourhoods',
  },
  admin: { useAsTitle: 'title' },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },

  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'categories',
      type: 'array',
      label: 'Categories',
      minRows: 1,
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'value', type: 'text', required: true },

        {
          name: 'subcats',
          type: 'array',
          label: 'Subcategories',
          fields: [
            { name: 'name', type: 'text', required: true },

            // 🧠 Flattened pride data
            {
              name: 'prideData',
              label: 'Pride of Chennai Data',
              type: 'array',
              fields: [
                { name: 'name', type: 'text', required: true },
                { name: 'nature', type: 'text' },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                },
                // 🧩 Flatten popup points
                { name: 'achievement1', type: 'text', label: 'Achievement 1' },
                { name: 'achievement2', type: 'text', label: 'Achievement 2' },
                { name: 'achievement3', type: 'text', label: 'Achievement 3' },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default Neighbourhoods;
