import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { GlobalConfig } from 'payload'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

import { GoluContestBlock } from './GoluDashboard/blocks/GoluContestMainForm/config'
import { GoluFormBlock } from './GoluDashboard/blocks/GoluSubmission/config'
import { GoluCtaBannerBlock } from './blocks/GoluCtaBanner/config'
import { GoluHeroBannerBlock } from './blocks/GoluHeroBanner/config'
import { GoluCreateBlock } from './blocks/GoluHowItWorks/config'
import { GoluFirstSectionBlock } from './blocks/GoluIntroSection/config'
import { GoluWhyCornerBlock } from './blocks/GoluWhySuperChennai/config'
import { GoluHowItWorksBlock } from './blocks/GoluHowItWorksBlock/config'
import { GoluJudgingBlock } from './blocks/GoluJudgingBlock/config'

export const GoluLandingPage: GlobalConfig = {
  slug: 'goluLandingPage',
  access: {
    read: () => true,
  },
  admin: {
    group: '🪔 Golu Contest',
    description: 'Manage main landing page content, banners, blocks, and SEO for Golu Contest.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'Super Chennai Golu Contest 2026',
    },
    {
      type: 'tabs',
      tabs: [
        // ===============================
        // TAB 1 – PAGE CONTENT
        // ===============================
        {
          label: 'Page Content',
          fields: [
            {
              name: 'desktopImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Desktop Banner Image',
            },
            {
              name: 'mobileImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Mobile Banner Image',
            },
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => [
                  ...rootFeatures,
                  HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  BlocksFeature({
                    blocks: [
                      GoluFormBlock,
                      GoluContestBlock,
                      GoluFirstSectionBlock,
                      GoluWhyCornerBlock,
                      GoluCreateBlock,
                      GoluCtaBannerBlock,
                      GoluHeroBannerBlock,
                      GoluHowItWorksBlock,
                      GoluJudgingBlock
                      
                    ],
                  }),
                  FixedToolbarFeature(),
                  InlineToolbarFeature(),
                  HorizontalRuleFeature(),
                ],
              }),
              required: true,
            },
          ],
        },

        // ===============================
        // TAB 2 – SEO
        // ===============================
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({ hasGenerateFn: true }),
            MetaImageField({ relationTo: 'media' }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
            {
              name: 'schema',
              type: 'json',
              label: 'Structured Data (JSON-LD)',
              admin: {
                description: 'Paste valid JSON-LD schema (Event schema for Google SEO)',
              },
            },
          ],
        },
      ],
    },
  ],
}
