import { Block } from 'payload'

const Neighbourhoods: Block = {
  slug: 'neighbourhoods',
  labels: {
    singular: 'Neighbourhood',
    plural: 'Neighbourhoods',
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
              label: 'Neigbourhood cards',
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
                {
                  name: 'achievements',
                  label: 'Achievements',
                  type: 'array',
                  fields: [{ name: 'point', type: 'text', label: 'Achievement Point' }],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default Neighbourhoods
