import { Block } from 'payload'

const PropertyPropects: Block = {
  slug: 'propertyPropects',
  labels: {
    singular: 'Property Propects Slides',
    plural: 'Property Propects Slides',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      defaultValue: 'PROPERTY PROSPECTS IN CHENNAI',
      maxLength: 100,
      admin: {
        description: 'Main title for the section. Max 100 characters.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      maxLength: 500,
      defaultValue:
        'Chennai s real estate market offers consistent demand and income. By its developed infrastructure, this city market offers substantial profits from both business and residential areas.',
      admin: {
        description: 'Short paragraph explaining the section. Max 500 characters allowed.',
      },
    },
  ],
}

export default PropertyPropects
