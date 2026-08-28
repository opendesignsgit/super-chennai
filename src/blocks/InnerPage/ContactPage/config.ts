import { Block } from 'payload'

export const ContactBlock: Block = {
  slug: 'contactBlock',
  dbName: 'cnt_blk',
  labels: {
    singular: 'Contact Section',
    plural: 'Contact Sections',
  },
  imageURL: '/images/sections-image/contact-section.jpg',
  imageAltText: 'Contact Section Preview',

  admin: {
    group: 'Contact Page',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Main Heading Title',
      defaultValue: 'Contact Us',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description Text',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      label: 'Logo / Building Image',
    },
    {
      name: 'logoAlt',
      type: 'text',
      label: 'Image Alt Text',
    },
    {
      name: 'addressLines',
      type: 'array',
      label: 'Address Lines',
      dbName: 'cnt_add',
      fields: [
        {
          name: 'line',
          type: 'text',
          label: 'Address Line Text',
        },
      ],
    },
    {
      name: 'email',
      type: 'text',
      label: 'Email Address',
    },
    {
      name: 'mapLink',
      type: 'text',
      label: 'Google Maps URL',
    },
  ],
}
