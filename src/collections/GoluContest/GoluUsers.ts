import { authenticated } from '@/access/authenticated'
import { CollectionConfig } from 'payload'

export const GoluUsers: CollectionConfig<'golu-users'> = {
  slug: 'golu-users',
  labels: {
    singular: 'Golu Participant',
    plural: 'Golu Participants',
  },
  access: {
    create: () => true, // Allowed via registration endpoint / public API
    read: authenticated, // Only admin can list directly
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'mobileNumber', 'localityArea', 'registrationDate'],
    group: '🪔 Golu Contest',
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    {
      name: 'mobileNumber',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        description: '10-digit Indian Mobile Number',
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'localityArea',
      type: 'text',
      required: true,
      label: 'Locality / Area in Chennai',
    },
    {
      name: 'instagramHandle',
      type: 'text',
      required: false,
    },
    {
      name: 'registrationDate',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'termsAccepted',
      type: 'checkbox',
      required: true,
      defaultValue: false,
    },
    {
      name: 'termsAcceptedAt',
      type: 'date',
    },
    {
      name: 'isVerified',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'submission',
      type: 'relationship',
      relationTo: 'golu-submissions',
      hasMany: false,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}