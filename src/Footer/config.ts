import { GlobalConfig } from 'payload'
import { revalidateFooter } from './hooks/revalidateFooter'

const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  admin: {
    group: '🌐 Site Builder',
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

        // EVENTS LOFGOS
        {
          type: 'array',
          name: 'bottomRightLogos',
          label: 'Bottom Right Partner/Event Logos',
          admin: {
            description:
              'Footer-ன் கீழ் வலதுபுறம் காட்டப்பட வேண்டிய கூடுதல் லோகோக்கள் (Events, Partners போன்றவை)',
          },
          fields: [
            {
              type: 'text',
              name: 'title',
              label: 'Logo/Event Name',
              required: true,
            },
            {
              type: 'upload',
              name: 'logoImage',
              label: 'Logo Image',
              relationTo: 'media',
              required: true,
            },
            {
              type: 'text',
              name: 'websiteLink',
              label: 'Link URL (Optional)',
            },
          ],
        },

        //  SUPPORT
        {
          name: 'floatingActionWidgets',
          label: 'Floating Action Widgets (WhatsApp / Bottom Corner)',
          type: 'array',
          admin: {
            description:
              'Add bottom-right floating components (e.g., WhatsApp Chat, Bot triggers, Support widgets). Appears below the event logos.',
          },
          fields: [
            { name: 'title', type: 'text', required: true, label: 'Widget Title / Name' },
            {
              name: 'link',
              type: 'text',
              label: 'Action URL / WhatsApp Link (e.g. https://wa.me/...)',
              required: true,
            },
            {
              name: 'iconImage',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Widget Icon / Sticker image',
            },
            {
              name: 'openInNewTab',
              type: 'checkbox',
              label: 'Open in new tab',
              defaultValue: true,
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
