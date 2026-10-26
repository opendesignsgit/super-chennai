import type { CollectionConfig } from 'payload'

export const EventRegistrationSubmissions: CollectionConfig = {
  slug: 'registration-submissions',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'eventName', 'status', 'createdAt'],
    group: 'EVENT MANAGEMENT',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'eventName',
      type: 'text',
    },
    {
      name: 'eventId',
      type: 'text',
    },
    {
      name: 'eventSlug',
      type: 'text',
    },
    {
      name: 'registrationSettings',
      type: 'relationship',
      relationTo: 'registration-settings',
      required: true,
    },
    {
      name: 'values',
      type: 'json',
      required: true,
    },
    {
      name: 'attachments',
      type: 'array',
      fields: [
        {
          name: 'file',
          type: 'relationship',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'fieldName',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Approved', value: 'approved' },
        { label: 'Rejected', value: 'rejected' },
      ],
    },
  ],

  timestamps: true,
}
