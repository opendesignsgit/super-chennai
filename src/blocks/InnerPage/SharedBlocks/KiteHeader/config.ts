import { Block } from 'payload'

export const KiteFestivalHeroBlock: Block = {
  slug: 'KiteFestivalHeroBlock',
  dbName: 'kf_hero_block',
  labels: {
    singular: 'Kite Festival Hero Section',
    plural: 'Kite Festival Hero Sections',
  },
  admin: {
    group: 'Kite Festival Page',
  },
  fields: [
    // Announcement Bar Fields
    {
      name: 'announcementText',
      type: 'text',
      label: 'Announcement Text',
      defaultValue: 'Official Event Announcement • August 2026',
    },
    {
      name: 'locationSubtitle',
      type: 'text',
      label: 'Location Subtitle (Header Bar)',
      defaultValue: 'TTDC Ocean View, East Coast Road (ECR)',
    },
    // Main Hero Content
    {
      name: 'topBadge',
      type: 'text',
      label: 'Top Badge Text',
      defaultValue: '5th Edition • Annual Coastal Celebration',
    },
    {
      name: 'mainHeading',
      type: 'text',
      label: 'Main Heading Highlighted',
      defaultValue: 'Kite Festival 2026',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description Text',
      defaultValue:
        'When Mamallapuram takes to the skies. Experience three days of grand airborne art, international master flyers, giant inflatables, and coastal food carnivals.',
    },
    {
      name: 'dateText',
      type: 'text',
      label: 'Date Text',
      defaultValue: '14 – 16 August 2026',
    },
    {
      name: 'locationText',
      type: 'text',
      label: 'Location Text',
      defaultValue: 'TTDC Ocean View, Mamallapuram ECR',
    },
    // Buttons
    {
      name: 'primaryCtaText',
      type: 'text',
      label: 'Primary Button Text',
      defaultValue: 'Explore Event Highlights',
    },
    {
      name: 'primaryCtaUrl',
      type: 'text',
      label: 'Primary Button URL',
      defaultValue: '#highlights',
    },
    {
      name: 'secondaryCtaText',
      type: 'text',
      label: 'Secondary Button Text',
      defaultValue: 'About The Festival',
    },
    {
      name: 'secondaryCtaUrl',
      type: 'text',
      label: 'Secondary Button URL',
      defaultValue: '#about',
    },
    // Right Card Showcase
    {
      name: 'cardBadge',
      type: 'text',
      label: 'Card Top Badge',
      defaultValue: 'ECR Grand Weekend',
    },
    {
      name: 'nationsText',
      type: 'text',
      label: 'Participating Nations',
      defaultValue: 'Thailand, Vietnam, Singapore, Malaysia, Indonesia & India',
    },
    {
      name: 'stat1Number',
      type: 'text',
      label: 'Stat 1 Number',
      defaultValue: '3 Days',
    },
    {
      name: 'stat1Label',
      type: 'text',
      label: 'Stat 1 Label',
      defaultValue: 'Non-Stop Sky Displays',
    },
    {
      name: 'stat2Number',
      type: 'text',
      label: 'Stat 2 Number',
      defaultValue: '100+',
    },
    {
      name: 'stat2Label',
      type: 'text',
      label: 'Stat 2 Label',
      defaultValue: 'Giant & Inflatable Kites',
    },
    {
      name: 'venueBoxTitle',
      type: 'text',
      label: 'Venue Box Title',
      defaultValue: 'Venue Location',
    },
    {
      name: 'venueBoxSubtitle',
      type: 'text',
      label: 'Venue Box Subtitle',
      defaultValue: 'TTDC Beach Grounds, ECR',
    },
  ],
}
