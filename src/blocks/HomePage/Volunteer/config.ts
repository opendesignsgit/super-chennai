import { Block } from 'payload'

const BecameAVolunteerBlock: Block = {
  slug: 'becameAVolunteer',
  labels: {
    singular: 'Volunteer Slider',
    plural: 'Volunteer Sliders',
  },

  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Top Heading',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      label: 'Main Title',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
    {
      name: 'volunteerSlidesRef',
      type: 'relationship',
      relationTo: 'volunteerSlides',
      label: 'Select Volunteer Slides Group',
      required: true,
    },
  ],
}

export default BecameAVolunteerBlock
