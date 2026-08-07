import { Block } from 'payload'

export const AboutNammaChennaiBlock: Block = {
  slug: 'AboutNammaChennaiBlock',
  labels: {
    singular: 'About Namma Chennai Block',
    plural: 'About Namma Chennai Blocks',
  },
  admin: {
    group: 'About Page',
  },
  imageURL: '/images/sections-image/aboutnammachennai.jpg',
  imageAltText: 'Chennai Soundtrack Section Preview',
  fields: [
    {
      name: 'sectionId',
      type: 'text',
      label: 'Section CSS ID',
      defaultValue: 'NumChennaiSec',
    },
    {
      name: 'mainHeader',
      type: 'text',
      label: 'Main Heading (H2)',
      defaultValue: "Chennai's",
    },
    {
      name: 'subHeader',
      type: 'textarea',
      label: 'Sub Heading (H5) - Supports <br> or HTML',
      defaultValue: 'Soundtrack pulses with <br>kuthu, gaana, hip-hop <br>and indie beats.',
    },
    {
      name: 'paragraph1',
      type: 'textarea',
      label: 'First Paragraph',
      defaultValue:
        'Its food scene is just as dynamic, from sushi bars to taco joints, <br>Korean cafés to soulful biryanis, where every meal is a mix of flavors as diverse as its people.',
    },
    {
      name: 'paragraph2',
      type: 'textarea',
      label: 'Second Paragraph',
      defaultValue:
        'Whether it’s skaters carving through the streets, surfers riding the waves, <br>or storytellers capturing moments, Chennai is a city in motion-always evolving, always alive. <br>This is Chennai redefined-bold, vibrant, and unapologetically modern. <br>Super Chennai isn’t just a place to live-it’s where the <br>future is being shaped,',
    },
    {
      name: 'tagline',
      type: 'textarea',
      label: 'Highlight Tagline (H6)',
      defaultValue: 'one beat, one bite, & <br>one breakthrough at a time.',
    },
    {
      name: 'footerHeading',
      type: 'textarea',
      label: 'Footer Heading (H3)',
      defaultValue: 'It’s hot. <br>It’s happening. <br>And it’s home.',
    },
  ],
}
