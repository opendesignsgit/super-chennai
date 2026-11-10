import { Block } from 'payload'

export const CarRallyBlock: Block = {
  slug: 'CarRallyBlock',
  labels: {
    singular: 'Car Rally Event Section',
    plural: 'Car Rally Event Sections',
  },
  imageURL: '/images/sections-image/carralleycontest.jpg',
  imageAltText: 'Car Rally Section Preview',
  admin: {
    group: 'Super Chennai Contest - Car Rally',
  },
  fields: [
    {
      name: 'eventTitle',
      type: 'text',
      label: 'Main Event Title',
      defaultValue: 'Super Chennai Car Treasure Hunt',
      required: true,
    },
    {
      name: 'bannerImage',
      type: 'upload',
      relationTo: 'media',
      label: 'Event Banner Image',
      required: true,
    },
    {
      name: 'categoryLabel',
      type: 'text',
      label: 'Category / Subtitle Label',
      defaultValue: 'Car Treasure Hunt',
    },
    {
      name: 'aboutDateHighlight',
      type: 'text',
      label: 'About Date Highlight Text',
      defaultValue: 'Celebrating the Spirit of the City | August 17, 2025',
    },
    {
      name: 'aboutContent',
      type: 'richText',
      label: 'About The Event Content (Rich Text)',
    },
    {
      name: 'sidebarDetails',
      type: 'group',
      label: 'Event Sidebar Info Box',
      fields: [
        {
          name: 'dateLabel',
          type: 'text',
          label: 'Event Date Label',
          defaultValue: 'Sunday, August 17, 2025',
        },
        {
          name: 'timeLabel',
          type: 'text',
          label: 'Start Time',
          defaultValue: '8:30 AM',
        },
        {
          name: 'durationLabel',
          type: 'text',
          label: 'Duration',
          defaultValue: 'Duration : 2hrs',
        },
        {
          name: 'capacityLabel',
          type: 'text',
          label: 'Team Capacity',
          defaultValue: 'Up to 4 people per car',
        },
        {
          name: 'priceLabel',
          type: 'text',
          label: 'Pricing',
          defaultValue: '₹1250 per car',
        },
        {
          name: 'locationLabel',
          type: 'text',
          label: 'Location',
          defaultValue: 'Lady Andal School, Chetpet',
        },
        {
          name: 'showBookNow',
          type: 'checkbox',
          label: 'Enable Book Now Button',
          defaultValue: false,
        },
        {
          name: 'bookNowLink',
          type: 'text',
          label: 'Booking Route URL',
          defaultValue: '/carrallyform',
        },
      ],
    },
  ],
}
