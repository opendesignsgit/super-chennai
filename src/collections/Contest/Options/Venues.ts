import { CollectionConfig } from 'payload'

export const Venues: CollectionConfig = {
  slug: 'venues',
  labels: {
    singular: 'Venue',
    plural: 'Venues',
  },

  admin: {
    useAsTitle: 'title',
    description: 'Manage all event venues here. Venues can be reused across events and pages.',
    defaultColumns: ['title', 'slug', 'location'],
  },

  access: {
    read: () => true,
  },

  fields: [
    /* ---------- Venue Name ---------- */
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Venue Name',
      admin: {
        placeholder: 'Dr Nalli Gana Vihar',
        description: 'Official name of the venue as it should appear on the website.',
      },
    },

    /* ---------- Slug ---------- */
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: 'Slug',
      admin: {
        placeholder: 'dr-nalli-gana-vihar',
        description:
          'URL-friendly identifier. Use lowercase letters and hyphens only. Example: dr-nalli-gana-vihar',
      },
    },

    /* ---------- Location ---------- */
    {
      name: 'location',
      type: 'text',
      label: 'Location / Area',
      admin: {
        placeholder: 'Mylapore, Chennai',
        description: 'Optional. Helps visitors understand where the venue is located.',
      },
    },

    /* ---------- Internal Notes ---------- */
    {
      name: 'notes',
      type: 'textarea',
      label: 'Internal Notes',
      admin: {
        description: 'Internal reference only. Not displayed on the website.',
      },
    },
  ],
}
