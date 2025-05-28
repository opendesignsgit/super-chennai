import { Block } from "payload";

export const HighlightedFeatureListSection: Block = {
  slug: 'highlightedFeatureList',
  interfaceName: 'HighlightedFeatureList',
  labels: {
    singular: 'FeatureSectionSplitLayout Column Splite',
    plural: 'Highlighted Feature List Sections',
  },
  fields: [
    {
      name: 'featureGroups',
      type: 'array',
      label: 'Feature Groups',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Main Image',
        },
        {
          name: 'headline',
          type: 'text',
          label: 'Headline',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
        {
          name: 'featureColumns',
          type: 'array',
          label: 'Feature Columns',
          fields: [
            {
              name: 'features',
              type: 'array',
              label: 'Features',
              fields: [
                {
                  name: 'icon',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Icon Image',
                },
                {
                  name: 'title',
                  type: 'text',
                  label: 'Feature Title',
                },
                {
                  name: 'text',
                  type: 'textarea',
                  label: 'Feature Description',
                },
                {
                  name: 'ctaLink',
                  type: 'text',
                  label: 'Explore More Link',
                  required: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
