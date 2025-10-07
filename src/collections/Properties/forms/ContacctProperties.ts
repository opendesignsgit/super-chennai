import { CollectionConfig } from 'payload'
import { sendFormEmail } from 'src/utilities/sendFormEmail'

const ContactMessages: CollectionConfig = {
  slug: 'contactMessages',
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    { name: 'message', type: 'textarea', required: true },
    { name: 'propertyId', type: 'text' },
    { name: 'propertyType', type: 'text' },
    { name: 'slug', type: 'text' },
    { name: 'title', type: 'text' },
    { name: 'societyName', type: 'text' },
    { name: 'builderName', type: 'text' },
    { name: 'buildercontactEmail', type: 'text' },
    
    { name: 'publishedAt', type: 'date' },
  ],
  admin: {
    useAsTitle: 'name',
  },
  access: {
    create: () => true,
    read: () => false,
    update: () => false,
    delete: () => false,
  },

  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'create') {
          try {
            await sendFormEmail({
              name: doc.name || '',
              email: doc.email || '',
              phoneNumber: doc.phone || '',
              message: doc.message || '',
              context: `New message about ${doc.propertyType || 'property'}`,
              subject: `New Contact Form: ${doc.propertyType || 'Property Inquiry'}`,
              templateTitle: ` ${doc.propertyType || 'Property'} Inquiry`,
              extraFields: {
                'Property ID': doc.propertyId || 'N/A',
                Slug: doc.slug || 'N/A',
                Title: doc.title || 'N/A',
                'Society Name': doc.societyName || 'N/A',
                'Builder Name': doc.builderName || 'N/A',
                'Builder Email': doc.buildercontactEmail || 'N/A',
                'Published At': doc.publishedAt || 'N/A',
              },
            })
          } catch (err) {
            console.error('Failed to send contact email:', err)
          }
        }
      },
    ],
  },
}

export default ContactMessages
