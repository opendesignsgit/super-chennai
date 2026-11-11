import type { Block } from 'payload'

export const ArrataiGalleryBlock: Block = {
  slug: 'arrataiGallery',
  dbName: 'b_ag',
  labels: {
    singular: 'Arattai Gallery Block',
    plural: 'Arattai Gallery Blocks',
  },
  admin: {
    group: 'Arattai Page',
  },

  imageURL: '/images/sections-image/arattaigallery.jpg',
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      required: true,
      defaultValue: 'Media Highlights',
      label: 'Section Title',
    },
    {
      name: 'sectionSubtitle',
      type: 'textarea',
      required: true,
      defaultValue:
        'A collection of stage highlights, speaker sessions, interactions, and memento-giving moments from the conclave.',
      label: 'Section Subtitle',
    },
    {
      name: 'galleryItems',
      type: 'array',
      required: true,
      dbName: 'ag_items',
      labels: {
        singular: 'Gallery Image',
        plural: 'Gallery Images',
      },
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Image Title / Alt Text',
          defaultValue: 'Gallery Highlight',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Gallery Image',
        },
      ],
    },
  ],
}
