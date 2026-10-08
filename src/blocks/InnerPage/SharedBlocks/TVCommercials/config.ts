import { Block } from 'payload'

export const TvCommercials2026Block: Block = {
  slug: 'TvCommercials2026Block',
  dbName: 'tvc_2026',
  labels: {
    singular: 'TV Commercials 2026 Section',
    plural: 'TV Commercials 2026 Sections',
  },

  imageURL: '/images/sections-image/tvcommricalsec.jpg',
  admin: {
    group: 'Media Coverage',
  },
  fields: [
    {
      name: 'sectionHeading',
      type: 'text',
      label: 'Section Heading Title',
      required: true,
      defaultValue: 'TV Commercials',
    },
    {
      name: 'tvcCards',
      type: 'array',
      label: 'TV Commercial Cards List',
      minRows: 1,
      fields: [
        {
          name: 'company',
          type: 'text',
          label: 'Published Info / Subtitle',
          required: true,
          defaultValue: 'Published On: July 21, 2025',
        },
        {
          name: 'eventsCalendarTitle',
          type: 'text',
          label: 'Video Card Title',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Thumbnail Image Asset',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'YouTube / External Video URL',
          required: true,
        },
      ],
    },
  ],
}
