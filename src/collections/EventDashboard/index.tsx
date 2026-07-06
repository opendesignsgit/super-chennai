import type { CollectionConfig } from 'payload'

export const EventDashboard: CollectionConfig = {
  slug: 'event-dashboard',

  admin: {
    group: '⚙️ Site Administration',

    components: {
      views: {
        list: {
          Component:
            '@/collections/EventDashboard/components/Dashboard',
        },
      },
    },
  },

  fields: [],
}