import { Block } from 'payload'

export const IconofMonthGallerySliderBlock: Block = {
  slug: 'gallery-slider-block',
  labels: {
    singular: 'Icon of the Gallery Slider',
    plural: 'Icon of the Gallery Sliders',
  },
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
