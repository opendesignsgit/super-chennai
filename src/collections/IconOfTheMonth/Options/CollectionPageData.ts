import IntroTextListingPage from '@/app/(frontend)/icon-of-the-month/blocks/IntroSection/config'
import introTextBlock from '@/blocks/InnerPage/SharedBlocks/IntroText/config'
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { GlobalConfig } from 'payload'

export const IconOfMonthPage: GlobalConfig = {
  slug: 'iconOfMonthLandingPage',
  admin: {
    group: '🗂️ Landing Page Assets',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    {
      name: 'desktopImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },

    {
      name: 'mobileImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },

    {
      name: 'content',
      type: 'richText',
      defaultValue: {
        root: {
          type: 'root',
          format: '',
          indent: 0,
          version: 1,
          children: [
            {
              type: 'paragraph',
              format: '',
              indent: 0,
              version: 1,
              children: [],
              direction: null,
            },
          ],
          direction: null,
        },
      },
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
          ...defaultFeatures,
          BlocksFeature({
            blocks: [introTextBlock, IntroTextListingPage],
          }),
        ],
      }),
    },
  ],
}
