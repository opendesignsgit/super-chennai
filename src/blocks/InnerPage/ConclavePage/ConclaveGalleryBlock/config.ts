import { Block } from 'payload'

export const ConclaveGalleryBlock: Block = {
  slug: 'ConclaveGalleryBlock',
  labels: {
    singular: 'Conclave Gallery Section',
    plural: 'Conclave Gallery Sections',
  },

  admin: {
    group: 'Conclave Page',
  },

  imageURL: '/images/sections-image/ConclaveGalleryBlock.jpg',
  fields: [
    {
      name: 'marqueeText',
      type: 'text',
      label: 'Background Marquee Text',
      defaultValue: 'Gallery',
      required: true,
    },
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Section Title',
      defaultValue: 'Chennai Conclave 2026',
      required: true,
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      label: 'Section Description',
      defaultValue:
        'A collection of stage highlights, speaker sessions, interactions, and memento-giving moments from the conclave.',
    },
    {
      name: 'featuredEvent',
      type: 'group',
      label: 'Featured Live / Highlight Banner',
      fields: [
        {
          name: 'linkUrl',
          type: 'text',
          label: 'Target Video/Page Link (URL)',
          defaultValue: 'https://youtube.com/live/D8hBf-lK57c?feature=share',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Featured Banner Image',
          required: true,
        },
        {
          name: 'dateNumber',
          type: 'text',
          label: 'Date (e.g. 19)',
          defaultValue: '19',
        },
        {
          name: 'dayName',
          type: 'text',
          label: 'Day / Month (e.g. Wednesday)',
          defaultValue: 'Wednesday',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Featured Event Title',
          defaultValue: 'Super Chennai Conclave 2026',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Featured Description',
        },
        {
          name: 'tag',
          type: 'text',
          label: 'Tag / Category Name',
          defaultValue: 'Conclave',
        },
      ],
    },
    {
      name: 'galleryItems',
      type: 'array',
      label: 'Gallery Slider Images',
      minRows: 1,
      labels: {
        singular: 'Gallery Image',
        plural: 'Gallery Images',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Gallery Photo',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Image Title / Alt Text',
        },
      ],
    },
  ],
}
