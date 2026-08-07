import { Block } from 'payload'

export const GallerySliderWithPopupBlock: Block = {
  slug: 'GallerySliderWithPopupBlock',
  labels: {
    singular: 'Gallery Slider With Popup',
    plural: 'Gallery Slider With Popups',
  },

  admin: {
    group: 'Common Blocks',
  },

  imageURL: '/images/sections-image/GallerySliderWithPopup.jpg',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      defaultValue: 'Gallery',
      required: true,
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media', // Unga media collection slug kooda match aaganum
      label: 'Select Images (Bulk Selection Allowed)',
      required: true,
      hasMany: true, // Ithu thaan orae time la bulk ah multiple images select panna vaekum
    },
  ],
}
