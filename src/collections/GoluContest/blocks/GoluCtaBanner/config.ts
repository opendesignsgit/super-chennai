import type { Block } from 'payload'

export const GoluCtaBannerBlock: Block = {
  slug: 'goluCtaBanner',
  labels: {
    singular: 'Golu CTA Banner Block',
    plural: 'Golu CTA Banner Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      defaultValue: 'READY TO CREATE YOUR GOLU?',
    },
    {
      name: 'buttonLabel',
      type: 'text',
      required: true,
      defaultValue: 'REGISTER NOW',
    },
    {
      name: 'buttonUrl',
      type: 'text',
      required: true,
      defaultValue: '#register',
    },
    {
      name: 'flowerImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Optional decoration flower image on sides',
      },
    },
  ],
}