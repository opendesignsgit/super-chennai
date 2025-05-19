import { CollectionConfig } from 'payload'

const VolunteerSlidesCollection: CollectionConfig = {
  slug: 'volunteerSlides',
  labels: {
    singular: 'Volunteer Slide ',
    plural: 'Volunteers',
  },

  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
    group: 'Common Block Contents',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'slides',
      type: 'array',
      label: 'Slides',
      minRows: 1,
      fields: [
        {
          name: 'slug',
          type: 'text',
          required: true,
          unique: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'detailedContent',
          type: 'richText',
          label: 'Detailed Content',
        },
        {
          name: 'video',
          type: 'text',
          label: 'YouTube Video URL',
        },
        {
          name: 'faq',
          type: 'array',
          label: 'FAQs',
          fields: [
            {
              name: 'question',
              type: 'text',
            },
            {
              name: 'answer',
              type: 'textarea',
            },
          ],
        },
      ],
    },

    //############ New Content Tab  ###########c
    {
      name: 'content',
      type: 'textarea',
      label: 'Content',
      admin: {
        description: 'Add custom content for this volunteer slide.',
      },
    },

    // New SEO Tab
    {
      name: 'seo',
      type: 'group',
      label: 'SEO',
      fields: [
        {
          name: 'metaTitle',
          type: 'text',
          label: 'Meta Title',
        },
        {
          name: 'metaDescription',
          type: 'textarea',
          label: 'Meta Description',
        },
        {
          name: 'metaKeywords',
          type: 'text',
          label: 'Meta Keywords',
        },
        {
          name: 'canonicalUrl',
          type: 'text',
          label: 'Canonical URL',
        },
      ],
      admin: {
        description: 'SEO metadata for the volunteer slide.',
      },
    },
  ],
}

export default VolunteerSlidesCollection
