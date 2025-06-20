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
        {
          name: 'url',
          type: 'text',
          required: false,
          label: 'External Link (optional)',
          admin: {
            placeholder: 'https://example.com',
            description: 'Optional external URL. If "Page Link" is also set, it will be ignored.',
          },
        },
        // {
        //   name: 'page',
        //   type: 'relationship',
        //   relationTo: 'visits',
        //   required: false,
        //   label: 'Page Link (optional)',
        //   admin: {
        //     description: 'Link this card to a page in the site. Takes priority over external URL.',
        //   },
        // },
      ],
    },
  ],
}

export default ContentZoneCarousel
