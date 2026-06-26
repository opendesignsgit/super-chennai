import type { Block } from 'payload'

export const TrendingChennaiSlider: Block = {
  slug: 'trendingChennaiSlider',
  labels: {
    singular: 'Trending Chennai Slider',
    plural: 'Trending Chennai Sliders',
  },
    admin: {
    group: 'trending chennai',
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