import { Block } from 'payload'

export const KiteFestivalAboutBlock: Block = {
  slug: 'KiteFestivalAbout',
  labels: {
    singular: 'Kite Festival About Section',
    plural: 'Kite Festival About Sections',
  },
  admin: {
    group: 'Kite Festival Page',
  },

  imageURL: '/images/sections-image/kitefestivalaweekend.jpg',
  fields: [
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Featured Image',
      required: true,
    },
    {
      name: 'tagText',
      type: 'text',
      label: 'Top Small Tag',
      defaultValue: 'About The Event',
      required: true,
    },
    {
      name: 'mainHeading',
      type: 'text',
      label: 'Main Heading',
      defaultValue: 'A Weekend of Kites, Colours & International Artistry',
      required: true,
    },
    {
      name: 'paragraph1',
      type: 'textarea',
      label: 'Paragraph 1 (HTML Supported)',
      defaultValue:
        'For three days in August, the skies above Mamallapuram ECR will turn into a colorful spectacle as the <strong class="text-[#100f9a] font-semibold">5th Tamil Nadu International Kite Festival 2026</strong> brings together breathtaking kite creations, master flyers, giant installations, and vibrant family entertainment.',
    },
    {
      name: 'paragraph2',
      type: 'textarea',
      label: 'Paragraph 2 (HTML Supported)',
      defaultValue:
        'Taking place at <strong class="text-[#100f9a]">TTDC Ocean View, Mamallapuram ECR</strong>, the festival features renowned participants from Thailand, Vietnam, Singapore, Malaysia, Indonesia, India, and beyond, creating an energetic international celebration along the coastline.',
    },
    {
      name: 'paragraph3',
      type: 'textarea',
      label: 'Paragraph 3 (HTML Supported)',
      defaultValue:
        'With the open coastline of Mamallapuram as the backdrop, these larger-than-life kites create countless memorable moments for families, sightseers, and photography enthusiasts. The <strong class="text-[#100f9a]">World of Inflatable Show Kites</strong> further transforms the skyline into an airborne fantasy.',
    },
    {
      name: 'boxTitle',
      type: 'text',
      label: 'Highlight Box Title',
      defaultValue: 'A Perfect ECR Day Out',
    },
    {
      name: 'boxDescription',
      type: 'textarea',
      label: 'Highlight Box Description',
      defaultValue:
        "Located along Mamallapuram's popular East Coast Road (ECR), the drive itself forms a pleasant weekend getaway for residents of Chennai and neighboring areas.",
    },
    {
      name: 'boxSvgCode',
      type: 'textarea',
      label: 'Highlight Box Icon SVG Code (Optional)',
    },
  ],
}
