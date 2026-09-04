import type { CollectionConfig } from 'payload'

export const Participants: CollectionConfig = {
  slug: 'participants',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'mobileNumber', 'localityArea', 'registrationDate'],
  },
  access: {
    create: () => true, // Controlled via API route or public signup
    read: ({ req: { user } }) => {
      if (user) return true // Admin access
      return false // Block public reading of full participant list
    },
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
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
        description: 'Formatted 10-digit Indian Mobile Number',
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
        readOnly: true,
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
    },
    {
      name: 'submission',
      type: 'relationship',
      relationTo: 'golu-submissions',
      hasMany: false,
    },
  ],
}