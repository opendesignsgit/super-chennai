import { Block } from 'payload'

const InnerPageBanner: Block = {
  slug: 'Banner',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Banner Image',
      relationTo: 'media',
      required: true,
    },
    // {
    //   name: 'breadcrumb',
    //   type: 'array',
    //   label: 'Breadcrumb Items',
    //   fields: [
    //     {
    //       name: 'label',
    //       type: 'text',
    //       required: true,
    //     },
    //     {
    //       name: 'url',
    //       type: 'text',
    //       required: true,
    //     },
    //   ],
    // },
  ],
}

export default InnerPageBanner
