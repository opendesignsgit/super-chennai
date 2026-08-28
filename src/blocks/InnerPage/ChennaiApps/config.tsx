import { Block } from 'payload'

export const ChennaiAppsBlock: Block = {
  slug: 'chennaiAppsBlock',
  dbName: 'cn_apps_blk',

  labels: {
    singular: 'Chennai Apps Block',
    plural: 'Chennai Apps Blocks',
  },

  imageURL: '/images/sections-image/chennaipps.jpg',
  imageAltText: 'Chennai Apps Section Preview',

  admin: {
    group: 'Chennai App Page',
  },

  fields: [
    // 1. CATEGORY TABS
    {
      name: 'tabs', // FIXED: Reduced name length
      type: 'array',
      label: '1. Create Category Tabs',
      dbName: 'cn_tabs',
      minRows: 1,

      fields: [
        {
          name: 'tabLabel',
          type: 'text',
          label: 'Tab Name',
          required: true,
        },
        {
          name: 'tabIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Tab Icon',
        },
      ],
    },

    // 2. ALL APPS
    {
      name: 'allApps', // FIXED: Reduced name length
      type: 'array',
      label: '2. Create Apps',
      dbName: 'cn_apps',

      fields: [
        {
          name: 'company',
          type: 'text',
          label: 'App / Company Name',
          required: true,
        },
        {
          name: 'appDescription',
          type: 'textarea',
          label: 'App Description',
        },
        {
          name: 'appImage',
          type: 'upload',
          relationTo: 'media',
          label: 'App Banner / Logo Image',
        },
        {
          name: 'appImageAlt',
          type: 'text',
          label: 'Image Alt Text',
        },

        // ASSIGNED TABS
        {
          name: 'assignedTabs', // FIXED: Shortened array name
          type: 'array',
          label: 'Assign to Category Tabs',
          dbName: 'cn_asgn_tabs',

          admin: {
            description:
              'Enter the exact category tab name created above. Example: Travel, Food, Sports.',
          },

          fields: [
            {
              name: 'assignedTabName',
              type: 'text',
              label: 'Category Tab Name',
              required: true,
            },
          ],
        },

        // FEATURES
        {
          name: 'features', // FIXED: Shortened array name
          type: 'array',
          label: 'Features List (Modal)',
          dbName: 'cn_feats',

          fields: [
            {
              name: 'featureItem',
              type: 'text',
              label: 'Feature Point',
            },
          ],
        },

        // SERVICES
        {
          name: 'services', // FIXED: Shortened array name
          type: 'array',
          label: 'Services List (Modal)',
          dbName: 'cn_svcs',

          fields: [
            {
              name: 'serviceItem',
              type: 'text',
              label: 'Service Point',
            },
          ],
        },

        // LINKS
        {
          name: 'websiteLink',
          type: 'text',
          label: 'Website Link URL',
        },
        {
          name: 'androidLink',
          type: 'text',
          label: 'Android PlayStore Link URL',
        },
        {
          name: 'iosLink',
          type: 'text',
          label: 'iOS AppStore Link URL',
        },
      ],
    },
  ],
}
