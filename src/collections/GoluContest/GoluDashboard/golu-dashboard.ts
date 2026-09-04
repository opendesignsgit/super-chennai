import type { CollectionConfig } from 'payload'

export const GoluDashboardCollection: CollectionConfig = {
  slug: 'golu-dashboard-view',
  labels: {
    singular: 'Contest Dashboard',
    plural: 'Contest Dashboard',
  },
  access: {
    admin: () => true,
    read: () => true,
  },
  admin: {
    group: 'Golu Contest',
    hidden: false,
    components: {
      views: {
        list: {
          Component: '@/collections/GoluContest/GoluDashboard/Dashboard',
        },
      },
    },
  },
  fields: [],
}
