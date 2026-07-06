import introTextBlock from '@/blocks/InnerPage/SharedBlocks/IntroText/config'
import IntroTextListingPage from '@/app/(frontend)/icon-of-the-month/blocks/IntroSection/config' 
import { BlocksFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { GlobalConfig } from 'payload'

export const ArticlesLandingPage: GlobalConfig = {
  slug: 'articlesLandingPage',
  admin: {
    group: '🗂️ Landing Page Assets',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Guides & Stories',
    },
    {
      name: 'desktopImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'mobileImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
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