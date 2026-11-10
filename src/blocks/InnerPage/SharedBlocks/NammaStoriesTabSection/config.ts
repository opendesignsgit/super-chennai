import { Block } from 'payload'

export const NammaStoriesNewsArticleBlock: Block = {
  slug: 'NammaStoriesNewsArticleSection',
  labels: {
    singular: 'News & Articles Section',
    plural: 'News & Articles Sections',
  },
  imageURL: '/images/sections-image/nammastroiestabsection.jpg',
  imageAltText: 'Namma Stories News & Articles Preview',
  admin: {
    group: 'Super Chennai Contest - Namma Stories',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Main Section Title',
      defaultValue: 'Namma Stories',
      required: true,
    },
    {
      name: 'sectionSubtitle',
      type: 'textarea',
      label: 'Section Description',
      defaultValue:
        'Stay updated with the latest images, videos, and highlights from SuperChennai’s events, announcements, and developments.',
    },
    {
      name: 'ePaperItems',
      type: 'array',
      label: 'News - E Paper Items',
      dbName: 'nsc_epaper_items',
      fields: [
        {
          name: 'company',
          type: 'text',
          label: 'Publisher / Date Info (e.g. Pressreader - July 18, 2025)',
        },
        {
          name: 'title',
          type: 'text',
          label: 'News Title',
          required: true,
        },
        {
          name: 'thumbnail',
          type: 'upload',
          relationTo: 'media',
          label: 'Card Thumbnail Image',
          required: true,
        },
        {
          name: 'popupImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Popup Detail Image (E-Paper view)',
          required: true,
        },
      ],
    },
    {
      name: 'newsArticlesItems',
      type: 'array',
      label: 'News Articles Items',
      dbName: 'nsc_news_articles',
      fields: [
        {
          name: 'company',
          type: 'text',
          label: 'Publisher Name & Date (e.g. The Hindu - August 04, 2025)',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Article Title',
          required: true,
        },
        {
          name: 'content',
          type: 'textarea',
          label: 'Short Content Excerpt',
        },
        {
          name: 'thumbnail',
          type: 'upload',
          relationTo: 'media',
          label: 'Article Thumbnail Image',
          required: true,
        },
        {
          name: 'externalLink',
          type: 'text',
          label: 'External Article Link URL',
          required: true,
        },
      ],
    },
  ],
}
