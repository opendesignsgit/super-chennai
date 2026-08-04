import type { Block } from 'payload'

export const TrendingChennaiSlider: Block = {
  slug: 'trendingChennaiSlider',
  labels: {
    singular: 'Trending Chennai Slider',
    plural: 'Trending Chennai Sliders',
  },
  imageURL: '/images/sections-image/TrendingChennaiSlider.jpg',

  admin: {
    // group: 'trending chennai',
    group: 'Homepage Sections',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Trending Chennai',
    },
    {
      name: 'description',
      type: 'textarea',
    },
  ],
}
