import { Block } from 'payload'

export const MediaCoverageBlockMainPage: Block = {
  slug: 'MediaCoverageBlockMainPage',
  dbName: 'media_coverage_main_page',
  labels: {
    singular: 'Media Coverage Section (Main Page)',
    plural: 'Media Coverage Sections (Main Page)',
  },
  imageURL: '/images/sections-image/mediacoveragesection.jpg',
  admin: {
    group: 'Media Coverage',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Main Section Title',
      required: true,
      defaultValue: 'MEDIA COVERAGE',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      label: 'Section Subtitle Description',
      defaultValue:
        'Stay updated with the latest images, videos, and highlights from SuperChennai’s events, announcements, and developments.',
    },
    // Tab 1: News Articles (E-Paper)
    {
      name: 'newsArticle',
      type: 'array',
      label: 'E-Paper News Articles List',
      fields: [
        {
          name: 'Company',
          type: 'text',
          label: 'Publisher / Publication & Date (e.g. Chennaiglitz | July 24, 2026)',
          required: true,
        },
        {
          name: 'EventsCalendarTitle',
          type: 'text',
          label: 'Article Title',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Thumbnail Image',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Article URL',
          required: true,
        },
      ],
    },
    // Tab 2: Newspaper Clippings (Print Photos)
    {
      name: 'newsPhotos',
      type: 'array',
      label: 'Newspaper Clippings List',
      fields: [
        {
          name: 'Company',
          type: 'text',
          label: 'Publisher / Newspaper Month (e.g. Aug 2026)',
          required: true,
        },
        {
          name: 'EventsCalendarTitle',
          type: 'text',
          label: 'Clipping Title Header',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Secondary Title (Optional)',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Card Thumbnail Image',
          required: true,
        },
        {
          name: 'image1',
          type: 'upload',
          relationTo: 'media',
          label: 'Full High-Res Clipping Image (Popup)',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Popup Modal Description',
        },
      ],
    },
    // Tab 3: Youtube Channels / Coverage
    {
      name: 'youtubeChannel',
      type: 'array',
      label: 'YouTube News Coverage List',
      fields: [
        {
          name: 'Company',
          type: 'text',
          label: 'Published Info (e.g. Published On: Feb 19, 2026)',
          required: true,
        },
        {
          name: 'EventsCalendarTitle',
          type: 'text',
          label: 'Channel Name / Video Title',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Secondary Title (Optional)',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Video Cover / Thumbnail',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'YouTube Video Link',
          required: true,
        },
      ],
    },
  ],
}
