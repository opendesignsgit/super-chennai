import { Block } from 'payload'

const EyeHospitalsBlock: Block = {
  slug: 'eyeHospitals',
  labels: {
    singular: 'Eye Hospitals',
    plural: 'Eye Hospitals',
  },
  fields: [
    {
      name: 'sections',
      type: 'array',
      label: 'Eye Hospital Sections',
      dbName: 'eh_sec', // 👈 Unique DB short name
      fields: [
        {
          name: 'category',
          type: 'text',
          label: 'Category',
          required: true,
        },
        {
          name: 'categoryParaGraph',
          type: 'textarea',
          label: 'Category Description',
        },
        {
          name: 'places',
          type: 'array',
          label: 'Hospitals',
          dbName: 'eh_plc', // 👈 Unique DB short name
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
              label: 'Hospital Description',
            },
            {
              name: 'locations',
              type: 'array',
              label: 'Locations',
              dbName: 'eh_loc', // 👈 Unique DB short name
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

export default EyeHospitalsBlock
