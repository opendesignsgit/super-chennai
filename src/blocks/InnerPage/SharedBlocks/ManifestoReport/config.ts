// import { Block } from 'payload'

// export const InfraBoom2026Block: Block = {
//   slug: 'InfraBoom2026Block',
//   dbName: 'infra_boom_2026',
//   labels: {
//     singular: 'Infra Boom 2026 Section',
//     plural: 'Infra Boom 2026 Sections',
//   },
//   admin: {
//     group: '2026 Blocks',
//   },
//   fields: [
//     {
//       name: 'title',
//       type: 'text',
//       label: 'Main Heading Title',
//       required: true,
//       defaultValue: 'Chennai Infrastructure Boom 2026',
//     },
//     {
//       name: 'description',
//       type: 'textarea',
//       label: 'Description Text',
//       required: true,
//       defaultValue:
//         'Chennai is undergoing a massive transformation with ₹90,000+ crore infrastructure projects across metro, roads, and smart city developments. From mobility to water security, the city is rapidly evolving into a future-ready urban hub.',
//     },
//     {
//       name: 'buttonText',
//       type: 'text',
//       label: 'CTA Button Label',
//       required: true,
//       defaultValue: 'Chennai Infrastructure Intelligence Report',
//     },
//     {
//       name: 'buttonLink',
//       type: 'text',
//       label: 'PDF / CTA Redirect Path',
//       required: true,
//       defaultValue: '/pdfs/infrastructure-intelligence-report.pdf',
//     },
//   ],
// }

import { Block } from 'payload'

export const InfraBoom2026Block: Block = {
  slug: 'InfraBoom2026Block',
  dbName: 'infra_boom_2026',
  labels: {
    singular: 'Infra Boom 2026 Section',
    plural: 'Infra Boom 2026 Sections',
  },
  admin: {
    group: 'Manifesto Page',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Main Heading Title',
      required: true,
      defaultValue: 'Chennai Infrastructure Boom 2026',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description Text',
      required: true,
      defaultValue:
        'Chennai is undergoing a massive transformation with ₹90,000+ crore infrastructure projects across metro, roads, and smart city developments. From mobility to water security, the city is rapidly evolving into a future-ready urban hub.',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'CTA Button Label',
      required: true,
      defaultValue: 'Chennai Infrastructure Intelligence Report',
    },
    {
      name: 'pdfFile',
      type: 'upload',
      relationTo: 'media',
      label: 'Upload Dynamic PDF File',
      required: true,
    },
  ],
}
