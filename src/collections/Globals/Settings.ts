import { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
  slug: 'settings',
  access: {
    read: () => true, 
  },
  admin: {
    group: '⚙️ Site Administration',
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Instagram Integration',
          description: 'Manage your Instagram Graph API credentials here.',
          fields: [
            {
              name: 'facebookPageId',
              label: 'Facebook Page ID',
              type: 'text',
              required: true,
              admin: {
                description: 'The ID of the Facebook Page connected to your Instagram Business account.',
              },
            },
            {
              name: 'instagramAccessToken',
              label: 'Instagram Access Token',
              type: 'text',
              required: true,
              admin: {
                description: 'Paste your fresh or extended Page Access Token here when it expires.',
              },
            },
          ],
        },
        
      ],
    },
  ],
}