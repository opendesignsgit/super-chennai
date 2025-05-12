import { GlobalConfig } from 'payload'

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'logo',
      label: 'logo',
      type: 'upload',
      relationTo: 'media',
      required:true
    },
    {
      name: 'nav',
      label: 'navigation',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'label',
          type: 'text',
        },
        {
          name: 'link',
          label: 'link',
          type: 'text',
        },
      ],
      minRows:1,
      maxRows:100
    },
  ],
}

export default Header


