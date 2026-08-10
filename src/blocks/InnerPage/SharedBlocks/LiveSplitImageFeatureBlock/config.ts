import { Block } from 'payload'

export const ChennaiLivingSectionBlock: Block = {
  slug: 'chnLivBlock', // 👈 Short Slug
  dbName: 'clb', // 👈 Root DB Short Identifier
  labels: {
    singular: 'Chennai Living Section',
    plural: 'Chennai Living Sections',
  },
  imageURL: '/images/sections-image/costoflivingsections.jpg',
  imageAltText: 'Chennai Living Section Preview',

  admin: {
    group: 'Live Detail Page ',
  },
  fields: [
    {
      name: 'imgSecs', // 👈 Shortened field name
      type: 'array',
      label: 'Image Sections List',
      dbName: 'cl_img',
      fields: [
        {
          name: 'sectionTitle',
          type: 'text',
          label: 'Section Title',
          required: true,
        },
        {
          name: 'sectionDesc',
          type: 'textarea',
          label: 'Section Description',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Main Feature Image',
          required: true,
        },
        {
          name: 'imageAlt',
          type: 'text',
          label: 'Image Alt Text',
        },
        {
          name: 'tntSecs', // 👈 Shortened field name
          type: 'array',
          label: 'Tenant Cards List',
          dbName: 'cl_tnt',
          fields: [
            {
              name: 'points',
              type: 'array',
              label: 'Tenant Points',
              dbName: 'cl_tpts',
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  label: 'Tenant Title',
                  required: true,
                },
                {
                  name: 'para',
                  type: 'textarea',
                  label: 'Description Paragraph',
                },
                {
                  name: 'imgs',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Tenant Icon',
                },
                {
                  name: 'altTitle',
                  type: 'text',
                  label: 'Icon Alt Text',
                },
                {
                  name: 'link',
                  type: 'text',
                  label: 'Target URL Link',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'dtlSecs', // 👈 Shortened field name
      type: 'array',
      label: 'Detail Sections List (Optional Grid)',
      dbName: 'cl_dtl',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Detail Section Title',
        },
        {
          name: 'points',
          type: 'array',
          label: 'Detail Points Grid Cards',
          dbName: 'cl_dpts',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Point Name / Title',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
            },
            {
              name: 'subDescription',
              type: 'text',
              label: 'Sub Description (Optional)',
            },
          ],
        },
      ],
    },
  ],
}
