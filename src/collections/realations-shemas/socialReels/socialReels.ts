import { CollectionConfig } from 'payload'

const SocialReelsCollection: CollectionConfig = {
  slug: 'social-reels',
  labels: {
    singular: 'Social Reel Group',
    plural: 'Social Reels',
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
      label: 'Group Title',
    },
    {
      name: 'reels',
      type: 'array',
      fields: [
        {
          name: 'thumbnail',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}

export default SocialReelsCollection
