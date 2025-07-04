import { Block } from 'payload'

const BecameAVolunteerBlock: Block = {
  slug: 'becameAVolunteer',
  labels: {
    singular: 'Volunteer',
    plural: 'Volunteer',
  },
  admin: {
    group: 'Homepage Sections',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: false,
      defaultValue: 'Become a',
      maxLength: 100,
      admin: {
        description: 'Short heading (max 100 characters)',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: false,
      defaultValue: 'Volunteer',
      maxLength: 100,
      admin: {
        description: 'Main title (max 100 characters)',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
      defaultValue:
        'Change things! Contribute your time and expertise to worthwhile causes in Chennai.',
      maxLength: 600,
      admin: {
        description: 'Short description (max 600 characters)',
      },
    },
    {
      name: 'page',
      type: 'relationship',
      relationTo: 'pages',
      required: false,
      label: 'Select Page Link',
    },
    {
      name: 'customLink',
      type: 'text',
      label: 'Or Custom URL',
      admin: {
        description: 'This will override the selected page link if provided.',
        placeholder: ' /some-path',
      },
    },
  ],
}

export default BecameAVolunteerBlock
