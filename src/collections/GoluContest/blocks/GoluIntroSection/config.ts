import { FixedToolbarFeature, HorizontalRuleFeature, InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import type { Block } from 'payload'

export const GoluFirstSectionBlock: Block = {
  slug: 'goluFirstSection',
  labels: {
    singular: 'Golu First Section Block',
    plural: 'Golu First Section Blocks',
  },
  fields: [
    {
      name: 'firstSection',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'title',
          type: 'group',
          fields: [
            {
              name: 'primary',
              type: 'text',
              required: true,
            },
            {
              name: 'highlight',
              type: 'text',
              required: true,
            },
            {
              name: 'subtitle',
              type: 'text',
            },
          ],
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'cta',
          type: 'group',
          fields: [
            {
              name: 'label',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
            {
              name: 'showIcon',
              type: 'checkbox',
              defaultValue: true,
            },
          ],
        },
        {
          name: 'media',
          type: 'group',
          fields: [
            {
              name: 'src',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'altText',
              type: 'text',
            },
            {
              name: 'placeholderText',
              type: 'text',
              defaultValue: 'Add Image',
            },
          ],
        },
        {
          name: 'features',
          type: 'array',
          fields: [
            {
              name: 'id',
              type: 'text',
            },
            {
              name: 'text',
              type: 'textarea',
            },
            {
              name: 'segments',
              type: 'array',
              fields: [
               
                {
                  name: 'text',
                  type: 'richText',
                  editor: lexicalEditor({
                    features: ({ rootFeatures }) => [
                      ...rootFeatures,                    
                      FixedToolbarFeature(),
                      InlineToolbarFeature(),
                      HorizontalRuleFeature(),
                    ],
                  }),
                  required: true,
                },
                {
                  name: 'highlight',
                  type: 'checkbox',
                  defaultValue: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}