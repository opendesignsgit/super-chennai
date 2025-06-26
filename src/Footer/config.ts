import { GlobalConfig } from 'payload'
import { revalidateFooter } from './hooks/revalidateFooter'

const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'group',
      name: 'footerSections',
      label: 'Footer Sections',
      fields: [
        // TOP SECTION LINKS#######################
        {
          type: 'array',
          name: 'topSectionLinks',
          label: 'Top Section Links (Grouped by Category)',
          fields: [
            {
              type: 'text',
              name: 'category',
              label: 'Main Title / Category',
              required: true,
            },
            {
              type: 'array',
              name: 'links',
              label: 'Links under this Category',
              fields: [
                {
                  type: 'text',
                  name: 'label',
                  label: 'Link Label',
                  required: true,
                },
                {
                  type: 'text',
                  name: 'link',
                  label: 'Link URL',
                  required: true,
                },
              ],
            },
          ],
        },

        // BOTTOM SECTION LINKS#######################
        {
          type: 'array',
          name: 'socialLinks',
          label: 'Social Media Links',
          fields: [
            {
              type: 'text',
              name: 'platform',
              label: 'Platform Name',
              required: true,
            },
            {
              type: 'text',
              name: 'link',
              label: 'Link URL',
              required: true,
            },
            {
              type: 'upload',
              name: 'icon',
              label: 'Platform Icon',
              relationTo: 'media',
              required: true,
            },
          ],
        },
        // FOOTER IMAGES AND TEXT####################

        {
          type: 'upload',
          name: 'partnersLogo',
          label: 'Partner Logo',
          relationTo: 'media',
          required: false,
        },

        {
          type: 'upload',
          name: 'mainFooterLogo',
          label: 'Main Footer Logo',
          relationTo: 'media',
          required: false,
        },
        {
          type: 'upload',
          name: 'designByLogo',
          label: 'Design By Logo',
          relationTo: 'media',
          required: true,
        },
        {
          type: 'text',
          name: 'footerText',
          label: 'Footer Text',
          required: true,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}

export default Footer
