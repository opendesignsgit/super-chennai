import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
  access: {
    read: () => true,
  },
  fields: [
    // #################### LOGO FIELD #######################
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Upload the logo for the header.',
      },
    },
    // #################### NAV ITEMS #######################

    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 20,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Header/RowLabel#RowLabel',
        },
      },
    },
    //################## SOCIAL MEDIA ICON LINKS #############
    {
      name: 'socialLinks',
      label: 'Social Links',
      type: 'array',
      labels: {
        singular: 'Social Link',
        plural: 'Social Links',
      },
      fields: [
        {
          name: 'platform',
          label: 'Platform Name',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'URL',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          label: 'Icon Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
    // #################### DRWER MENUE FILED   #######################
    {
      name: 'drawerMenu',
      label: 'Drawer Menu',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
          required: true,
        },
      ],
      maxRows: 20,
      admin: {
        initCollapsed: true,
      },
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
