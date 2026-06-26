import type { Block } from 'payload'

export const GalleryBlock: Block = {
  slug: 'galleryBlock',
  interfaceName: 'GalleryBlockType',

  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Media Highlights',
    },

    {
      name: 'description',
      type: 'textarea',
    },

    {
      name: 'galleryImages',
      type: 'array',

      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}