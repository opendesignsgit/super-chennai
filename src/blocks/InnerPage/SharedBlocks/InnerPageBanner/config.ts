import { Block } from 'payload'

export const InnerPageHeroBannerBlock: Block = {
  slug: 'InnerPageHeroBannerBlock',
  labels: {
    singular: 'Inner Page Hero Banner',
    plural: 'Inner Page Hero Banners',
  },

  imageURL: '/images/sections-image/herobanner.jpg',
  fields: [
    {
      name: 'bannerImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Banner Background Image',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Main Title Text (e.g., FAQ)',
      defaultValue: 'FAQ',
      required: true,
    },
    {
      name: 'smallTitleText',
      type: 'text',
      label: 'Small Sub-Text inside Title (e.g., s for FAQs)',
      defaultValue: 's',
    },
    {
      name: 'bannerLink',
      type: 'text',
      label: 'Banner Click URL (Optional)',
      admin: {
        description: 'Leave empty if the banner should not be clickable.',
      },
    },
    {
      name: 'breadcrumbs',
      type: 'array',
      label: 'Breadcrumb Links',
      minRows: 1,
      labels: {
        singular: 'Breadcrumb Item',
        plural: 'Breadcrumb Items',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Link Label',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'Link Path (URL)',
          required: true,
        },
        {
          name: 'smallText',
          type: 'text',
          label: 'Small Sub-Text (Optional)',
          admin: {
            description:
              'Optional small tag inside breadcrumb link e.g. "s" for FAQ<small>s</small>',
          },
        },
      ],
    },
    {
      name: 'enableSearch',
      type: 'checkbox',
      label: 'Enable Search Bar Component',
      defaultValue: true,
    },
  ],
}
