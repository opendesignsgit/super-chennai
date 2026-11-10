import { Block } from 'payload'

export const LetsTalkChennaiBlock: Block = {
  slug: 'LetsTalkChennaiBlock',
  labels: {
    singular: 'Lets Talk Chennai Section',
    plural: 'Lets Talk Chennai Sections',
  },
  admin: {
    group: 'Homepage Sections',
  },
  imageURL: '/images/sections-image/letstalkchennai.jpg',
  fields: [
    {
      name: 'mainTitleLine1',
      type: 'text',
      label: 'Main Title Line 1 (Pink)',
      defaultValue: 'Let’s talk',
      required: true,
    },
    {
      name: 'mainTitleLine2',
      type: 'text',
      label: 'Main Title Line 2 (Purple Accent)',
      defaultValue: 'Chennai',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Section Main Paragraph',
      defaultValue:
        'Let’s Talk Chennai is a celebration of the city we call home — its people, places, culture, creativity, energy, and everyday experiences. A space to explore what makes Chennai special, discover what’s happening around the city, and experience Chennai through different perspectives. From Visuals that capture its character, Trends that keep us connected, Ideas that inspire, Places that invite exploration, Champions who inspire us, Stories that bring people together, to Reels that capture Chennai in motion — every section brings a different side of the city to life.',
      required: true,
    },
    {
      name: 'tagline',
      type: 'text',
      label: 'Bold Tagline Text',
      defaultValue: 'One city. Many voices. Endless stories. Let’s Talk Chennai. ❤️',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Label',
      defaultValue: 'View More',
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Button URL',
      defaultValue: 'https://letstalkchennai.com/',
    },
  ],
}
