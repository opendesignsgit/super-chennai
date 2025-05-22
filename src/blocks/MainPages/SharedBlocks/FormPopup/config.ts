import { Block } from 'payload'

export const FormPopup: Block = {
  slug: 'formPopup',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'buttonText',
      type: 'text',
      defaultValue: 'Enquire Now',
    },
  ],
}
