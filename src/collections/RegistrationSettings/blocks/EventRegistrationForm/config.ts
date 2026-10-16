import type { Block } from 'payload'

export const EventRegistrationFormBlock: Block = {
  slug: 'eventRegistrationFormBlock',

  labels: {
    singular: 'Event Registration Form',
    plural: 'Event Registration Forms',
  },

  fields: [
    {
      name: 'showForm',
      type: 'checkbox',
      label: 'Show Registration Form',
      defaultValue: true,
    },
    {
      name: 'sectionTitle',
      type: 'text',
      defaultValue: 'Register For This Event',
    },
    {
      name: 'sectionSubTitle',
      type: 'text',
      defaultValue: 'Submit Your Data',
    },
    {
      name: 'sectionDescription',
      type: 'textarea',
      defaultValue: 'Fill out the form below to participate in this event.',
    },

    // SELECT SETTINGS FROM COLLECTION
    {
      name: 'registrationSettings',
      label: 'Registration Settings',
      type: 'relationship',
      relationTo: 'registration-settings',
      required: true,
      admin: {
        description: 'Choose the registration configuration for this event.',
      },
    },

    // SELECT MULTIPLE FIELDS FROM COLLECTION
    {
      name: 'customFields',
      label: 'Select Form Fields',
      type: 'relationship',
      relationTo: 'event-form-fields',
      hasMany: true,
      required: true,
      admin: {
        description: 'Choose the fields to display in this registration form.',
      },
    },

    {
      name: 'enableGlassEffect',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showImage',
      label: 'Show Side Image',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'sideImage',
      label: 'Side Image',
      type: 'upload',
      relationTo: 'media',
      admin: {
        condition: (_, siblingData) => siblingData?.showImage,
      },
    },
    {
      name: 'imagePosition',
      label: 'Image Position',
      type: 'select',
      defaultValue: 'left',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      admin: {
        condition: (_, siblingData) => siblingData?.showImage,
      },
    },
  ],
}
