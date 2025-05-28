import { Block } from 'payload'

const mainPageBannerBlock: Block = {
  slug: 'mainPageBanner',
  labels: {
    singular: 'Main Page Banner',
    plural: 'Main Page Banners',
  },
  admin: {
    group: 'Main Page Sections',
  },
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
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Gradient',
      required: false,
      defaultValue: 'gradient-1',
      options: [
        {
          label: 'Purple & Indigo',
          value: 'gradient-1', // linear-gradient(to right, rgb(25 28 129) 0%, rgb(118 60 167) 50%, rgb(73 14 117) 90%)
        },
        {
          label: 'Blue & Purple',
          value: 'gradient-2', // linear-gradient(90deg, rgba(19, 50, 132, 1) 10%, rgba(90, 66, 161, 1) 40%, rgba(57, 8, 121, 1) 90%)
        },
        {
          label: 'Teal & Navy',
          value: 'gradient-3', // linear-gradient(90deg, rgb(30 110 73) 0%, rgb(48 132 134) 50%, rgb(1 55 83) 100%)
        },
        {
          label: 'Dark Purple',
          value: 'gradient-4', // linear-gradient(to right, rgb(25 28 129) 0%, rgb(118 60 167) 50%, rgb(73 14 117) 90%)
        },
        {
          label: 'Magenta Vibe',
          value: 'gradient-5', // linear-gradient(90deg, rgb(77 30 143) 0%, rgb(166 53 173) 50%, rgb(125 6 110) 100%)
        },
        {
          label: 'Cool Blue Mix',
          value: 'gradient-6', // linear-gradient(90deg, rgb(37 111 135) 0%, rgb(61 99 174) 50%, rgb(2 2 125) 100%)
        },
      ],
    },
  ],
}

export default mainPageBannerBlock
