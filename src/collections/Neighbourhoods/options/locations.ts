import { CollectionConfig } from 'payload'

export const ChennaiNeighbourhoodlocations: CollectionConfig<'chennaiNeighbourhoodlocations'> = {
  slug: 'chennaiNeighbourhoodlocations',
  access: {
    read: () => true,
  },
  admin: {
    hidden: true,
    useAsTitle: 'label',
  },
  fields: [
    {
      name: 'state',
      type: 'text',
      required: true,
      admin: {
        description: 'State name (e.g. Tamil Nadu, Karnataka)',
      },
    },
    {
      name: 'city',
      type: 'text',
      required: true,
      admin: {
        description: 'City name (e.g. Chennai, Bangalore, Mumbai)',
      },
    },
    {
      name: 'locality',
      type: 'text',
      required: true,
      admin: {
        description: 'Locality / Area (e.g. OMR, ECR, Whitefield)',
      },
    },
    {
      name: 'pincode',
      label: 'Pincode',
      type: 'text',
      required: false,
      admin: {
        description: 'Area pincode (e.g. 600096)',
      },
    },
    {
      name: 'about',
      label: 'About Location',
      type: 'textarea',
      required: false,
      admin: {
        description: 'Short description about this location (OMR, ECR, etc.)',
      },
    },
    {
      name: 'purpose',
      label: 'Purpose / Highlights',
      type: 'textarea',
      required: false,
      admin: {
        description:
          'Describe the main purpose of this location (e.g. IT hub, residential hotspot, investment zone)',
      },
    },
    {
      name: 'locationUrl',
      type: 'text',
      label: 'Location URL',
    },
    {
      name: 'openInNewTab',
      type: 'checkbox',
      label: 'Open in new tab',
      defaultValue: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Neighbourhood location  image',
      },
    },

    {
      name: 'iconSvg',
      label: 'SVG Icon',
      type: 'upload',
      relationTo: 'media',
      required: false,
      filterOptions: {
        mimeType: { contains: 'svg' },
      },
      admin: {
        description: 'Upload SVG icon for this location',
      },
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      admin: {
        description: 'Display label, e.g. "OMR, Chennai"',
      },
    },
    {
      name: 'value',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Unique slug, e.g. "chennai-omr"',
      },
    },

    // --- ADDED DYNAMIC CARD METRICS FOR FRONTEND ---
    {
      type: 'row',
      fields: [
        {
          name: 'schoolCount',
          label: 'Schools Count/Text',
          type: 'text',
          required: false,
          defaultValue: '10+',
          admin: {
            description: 'Displayed on card (e.g., "15+", "10+")',
            width: '33%',
          },
        },
        {
          name: 'hospitalCount',
          label: 'Hospitals Count/Text',
          type: 'text',
          required: false,
          defaultValue: '5+',
          admin: {
            description: 'Displayed on card (e.g., "8+", "5+")',
            width: '33%',
          },
        },
        {
          name: 'hasMetro',
          label: 'Has Metro Access?',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            description: 'Check if Metro is active. Unchecked renders "Connecting".',
            width: '34%',
          },
        },
      ],
    },

    {
      name: 'overviewDescription',
      label: 'Overview Description',
      type: 'textarea',
      required: false,
      admin: {
        description: 'Dynamic paragraph text for the Overview section.',
      },
    },
    {
      name: 'overviewPoints',
      label: 'Overview Points',
      type: 'array',
      admin: {
        description: 'Add dynamic bullet points with custom image/SVG icons for this location.',
      },
      fields: [
        {
          name: 'point',
          label: 'Point Text',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          label: 'Point Icon (Image/SVG)',
          type: 'upload',
          relationTo: 'media',
          required: false,
          admin: {
            description: 'Upload a custom icon or SVG for this specific highlight.',
          },
        },
      ],
    },

    // ... your existing fields
    {
      name: 'quickAccess',
      label: 'Quick Access Points',
      type: 'array',
      admin: {
        description: 'Key transit, healthcare, shopping hubs nearby.',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: { description: 'e.g., Nearest Metro, Top Hospital' },
        },
        {
          name: 'name',
          type: 'text',
          required: true,
          admin: { description: 'e.g., Central Station, Apollo Hospital' },
        },
        {
          name: 'detail',
          type: 'text',
          required: true,
          admin: { description: 'e.g., 5 mins walk, 2.4 km' },
        },
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: false,
          admin: { description: 'Upload custom icon/SVG (fallback is emoji).' },
        },
        {
          name: 'fallbackEmoji',
          type: 'text',
          admin: {
            description: 'Optional fallback emoji if no media icon is uploaded (e.g. 🚇, 🏥).',
          },
        },
      ],
    },
    {
      name: 'whyChoose',
      label: 'Why Choose Points',
      type: 'array',
      admin: {
        description: 'Key bullet reasons to select this neighborhood.',
      },
      fields: [
        {
          name: 'reason',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'lifestyleScores',
      label: 'Lifestyle Scores',
      type: 'array',
      admin: {
        description: 'Rate key livability factors from 1 to 5.',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: { description: 'e.g., Connectivity, Education, Safety' },
        },
        {
          name: 'score',
          type: 'number',
          required: true,
          admin: {
            description: 'Rating score (e.g. 4.5, 5)',
          },
          min: 0,
          max: 5,
        },
      ],
    },
    // Add this block inside your fields array in ChennaiNeighbourhoodlocations config
    {
      name: 'faqSection',
      label: 'FAQ Section Settings',
      type: 'group',
      admin: {
        description: 'Manage the FAQs specific to this location.',
      },
      fields: [
        {
          name: 'subHeading',
          label: 'Section Sub-Heading (Top Span Text)',
          type: 'text',
          required: false,
          defaultValue: 'Frequently Asked Questions',
          admin: {
            description: 'e.g., Frequently Asked Questions',
          },
        },
        {
          name: 'heading',
          label: 'Section Main Heading',
          type: 'text',
          required: false,
          admin: {
            description: 'e.g., Everything You Want to Know About T. Nagar',
          },
        },
        {
          name: 'description',
          label: 'Section Description',
          type: 'textarea',
          required: false,
          admin: {
            description: 'Quick paragraph explaining the FAQ section.',
          },
        },
        {
          name: 'faqs',
          label: 'FAQs List',
          type: 'array',
          admin: {
            description: 'Add multiple dynamic questions and answers for this locality.',
          },
          fields: [
            {
              name: 'question',
              label: 'Question',
              type: 'text',
              required: true,
            },
            {
              name: 'answer',
              label: 'Answer',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },
  ],

  hooks: {
    beforeValidate: [
      async ({ data }) => {
        // Auto-generate label if not given
        if (!data?.label && data?.locality && data?.city) {
          data.label = `${data.locality}, ${data.city}`
        }

        // Auto-generate value (slug) if not given
        if (!data?.value && data?.locality && data?.city) {
          data.value = `${data.city}-${data.locality}`.toLowerCase().replace(/\s+/g, '-')
        }
      },
    ],
  },
}
