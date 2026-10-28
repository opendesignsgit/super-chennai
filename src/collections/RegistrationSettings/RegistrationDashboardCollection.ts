import type { CollectionConfig } from 'payload'
export const RegistrationDashboardCollection: CollectionConfig = {
  slug: 'registration-dashboard',
  labels: {
    singular: 'Registration Dashboard',
    plural: 'Registration Dashboard',
  },
  access: {
    admin: () => true,
    read: ({ req }) => Boolean(req.user),
  },
  admin: {
    group: 'Event Management',
    hidden: false,
    components: {
      views: {
        list: {
          Component: '@/collections/RegistrationSettings/components/Dashboard',
        },
      },
    },
  },
  fields: [],
}
