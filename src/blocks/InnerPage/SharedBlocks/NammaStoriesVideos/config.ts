import { Block } from 'payload'

export const NammaStoriesVideosBlock: Block = {
  slug: 'NammaStoriesVideosBlockssss',
  labels: {
    singular: 'Namma Stories Video Contest',
    plural: 'Namma Stories Video Contests',
  },
  imageURL: '/images/sections-image/contetnammastories.jpg',
  imageAltText: 'Namma Stories Videos Section Preview',
  admin: {
    group: 'Super Chennai Contest - Namma Stories',
  },
  fields: [
    {
      name: 'contestTitle',
      type: 'text',
      label: 'Contest Results Main Title',
      defaultValue: 'Namma Stories Video Contest Results',
    },
    {
      name: 'winnerThumbnail',
      type: 'upload',
      relationTo: 'media',
      label: 'Winner Video Thumbnail',
    },
    {
      name: 'runnerUp1Thumbnail',
      type: 'upload',
      relationTo: 'media',
      label: '1st Runner-Up Thumbnail',
    },
    {
      name: 'runnerUp2Thumbnail',
      type: 'upload',
      relationTo: 'media',
      label: '2nd Runner-Up Thumbnail',
    },
    {
      name: 'nomineesTitle',
      type: 'text',
      label: 'Nominees List Section Title',
      defaultValue: 'Namma Stories List of Nominees',
    },
    {
      name: 'videosList',
      type: 'array',
      label: 'Nominees Videos List',
      dbName: 'ns_videos',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Movie Title',
          required: true,
        },
        {
          name: 'thumbnail',
          type: 'upload',
          relationTo: 'media',
          label: 'Thumbnail Image',
          required: true,
        },
        {
          name: 'iframeLink',
          type: 'text',
          label: 'YouTube Embed Iframe URL',
          required: true,
        },
        {
          name: 'directorName',
          type: 'text',
          label: 'Director Name',
          required: true,
        },
        {
          name: 'directorMail',
          type: 'email',
          label: 'Director Email ID',
        },
      ],
    },
  ],
}
