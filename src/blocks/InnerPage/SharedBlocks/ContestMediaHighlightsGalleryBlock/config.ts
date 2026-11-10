import { Block } from 'payload'

export const MediaHighlightsGalleryBlock: Block = {
  slug: 'MediaHighlightsGalleryBlock',
  labels: {
    singular: 'Media Highlights Gallery Section',
    plural: 'Media Highlights Gallery Sections',
  },
  admin: {
    group: 'Super Chennai Contest - Gen Z Content Creators',
  },
  imageURL: '/images/sections-image/contestmediahighlights.jpg',

  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Main Title',
      defaultValue: 'Media Highlights',
      required: true,
    },
    {
      name: 'tickerText',
      type: 'text',
      label: 'Background Ticker Text',
      defaultValue: 'Gallery',
    },
    {
      name: 'galleryItems',
      type: 'array',
      label: 'Gallery Cards (Images)',
      dbName: 'sc_media_gallery',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Highlight Image',
          required: true,
        },
      ],
      defaultValue: [
        { image: '/images/image1.jpg' },
        { image: '/images/image2.jpg' },
        { image: '/images/image3.jpg' },
        { image: '/images/image4.jpg' },
        { image: '/images/image5.jpg' },
        { image: '/images/image6.jpg' },
      ],
    },
  ],
}
