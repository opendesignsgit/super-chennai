import { Block } from 'payload'

export const SocialLeadershipBlock: Block = {
  slug: 'SocialLeadershipBlock',
  labels: {
    singular: 'Social & Leadership Block',
    plural: 'Social & Leadership Blocks',
  },
  imageURL: '/images/sections-image/social-leadership.jpg',
  imageAltText: 'Social & Leadership Section Preview',
  admin: {
    group: 'Icon of the Month',
  },
  fields: [
    {
      name: 'categories',
      type: 'array',
      label: 'Categories List',
      dbName: 'sl_categories',
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'textarea',
          label: 'Category Title (Supports <br> or Newline)',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Category Icon / Image',
        },
        {
          name: 'contentList',
          type: 'array',
          label: 'Content Bullet Points',
          dbName: 'sl_content',
          minRows: 1,
          fields: [
            {
              name: 'itemText',
              type: 'textarea',
              label: 'Content Text (HTML tags like <strong> are supported)',
              required: true,
            },
          ],
        },
      ],
    },
  ],
}
