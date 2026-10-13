import { Block } from 'payload'

export const MetroMadrasBlock: Block = {
  slug: 'MetroMadrasBlock',
  labels: {
    singular: 'Metro Madras Section',
    plural: 'Metro Madras Sections',
  },

  imageURL: '/images/sections-image/singlealone1.jpg',
  admin: {
    group: 'Singe Alone Metro',
  },
  fields: [
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Section Image',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Main Section Title',
      defaultValue: 'METRO-VIL MADRAS DAY',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Sub Heading',
      defaultValue: 'Chennai’s First Midnight Musical Ride',
    },
    {
      name: 'paragraphs',
      type: 'array',
      label: 'Description Paragraphs',
      fields: [
        {
          name: 'text',
          type: 'textarea',
          label: 'Paragraph Content',
          required: true,
        },
      ],
    },
    {
      name: 'quoteText',
      type: 'textarea',
      label: 'Highlighted Quote',
      defaultValue:
        '“Somewhere between the last Metro train and the first light of Madras Day, Chennai came together and sang.”',
    },
    {
      name: 'features',
      type: 'array',
      label: 'Bottom Features List',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Feature Title',
          required: true,
        },
        {
          name: 'iconType',
          type: 'select',
          label: 'Preset Icon',
          defaultValue: 'music',
          options: [
            { label: 'Music Icon', value: 'music' },
            { label: 'Train / Metro Icon', value: 'train' },
            { label: 'Clock / Time Icon', value: 'clock' },
            { label: 'Map / Location Icon', value: 'location' },
            { label: 'Star Icon', value: 'star' },
          ],
        },
        {
          name: 'customIcon',
          type: 'upload',
          relationTo: 'media',
          label: 'Custom Icon Upload (Optional)',
        },
      ],
    },
  ],
}
