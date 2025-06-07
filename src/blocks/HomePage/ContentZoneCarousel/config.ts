import { Block } from 'payload'

const ContentZoneCarousel: Block = {
  slug: 'contentZoneCarousel',
  labels: {
    singular: 'ContentZoneCarousel',
    plural: 'ContentZoneCarousel',
  },
  admin: {
    group: 'Homepage Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Main Heading',
      maxLength: 15,
      admin: {
        description: 'Maximum 15 characters allowed',
        placeholder: 'Enter a concise heading',
      },
    },
    {
      name: 'subheading',
      type: 'text',
      required: false,
      label: 'Subheading',
      maxLength: 15,
      admin: {
        description: 'Maximum 15 characters allowed',
        placeholder: 'Enter a concise heading',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
      label: 'Description',
      maxLength: 200,
      admin: {
        description: 'Maximum 200 characters allowed',
        placeholder: 'Enter a concise heading',
      },
    },
    {
      name: 'cards',
      type: 'array',
      label: 'Carousel Cards',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: false,
          maxLength: 200,
          admin: {
            description: 'Maximum 200 characters allowed',
            placeholder: 'Enter a concise heading',
          },
        },
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

export default ContentZoneCarousel
