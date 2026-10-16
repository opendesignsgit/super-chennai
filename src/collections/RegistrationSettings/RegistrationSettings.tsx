
import type { CollectionConfig } from 'payload'

export const RegistrationSettings: CollectionConfig = {
  slug: 'registration-settings',

  admin: {
    useAsTitle: 'name',
    defaultColumns: [
      'name',
      'isRegistrationOpen',
      'enableOTP',
      'maxRegistrations',
    ],
    group: 'EVENT MANAGEMENT',
  },

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },

  fields: [
    {
      name: 'name',
      label: 'Settings Name',
      type: 'text',
      required: true,
    },
    {
      name: 'isRegistrationOpen',
      label: 'Registration Open',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'enableOTP',
      label: 'Enable Mobile OTP Verification',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'maxRegistrations',
      label: 'Maximum Registrations',
      type: 'number',
      min: 1,
      admin: {
        description: 'Leave empty for unlimited registrations.',
      },
    },
    {
      name: 'showOrganisationField',
      label: 'Show Organisation Field',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'thankYouMessage',
      label: 'Thank You Message',
      type: 'textarea',
      defaultValue:
        'Thank you for registering. We will contact you soon.',
    },
  ],

  timestamps: true,
}
