
// import type { CollectionConfig } from 'payload'

// export const GeneralEventRegistrations: CollectionConfig = {
//   slug: 'general-event-registrations',

//   admin: {
//     useAsTitle: 'name',
//     defaultColumns: [
//       'name',
//       'email',
//       'event',
//       'status',
//       'thankYouMailSent',
//       'createdAt',
//     ],
//     group: 'EVENT MANAGEMENT',
//   },

//   access: {
//     read: () => true,
//     create: () => true,
//     update: () => true,
//     delete: () => true,
//   },

//   fields: [
//     // {
//     //   name: 'event',
//     //   label: 'General Event',
//     //   type: 'relationship',
//     //   relationTo: 'general-events',
//     //   required: true,
//     // },
//     {
//       name: 'status',
//       type: 'select',
//       defaultValue: 'pending',
//       options: [
//         { label: 'Pending', value: 'pending' },
//         { label: 'Confirmed', value: 'confirmed' },
//         { label: 'Rejected', value: 'rejected' },
//       ],
//     },
//     {
//       type: 'row',
//       fields: [
//         { name: 'name', type: 'text' },
//         { name: 'email', type: 'email' },
//       ],
//     },
//     {
//       type: 'row',
//       fields: [
//         { name: 'phone', type: 'text' },
//         { name: 'company', type: 'text' },
//       ],
//     },
//     {
//       name: 'values',
//       label: 'Registration Form Data',
//       type: 'json',
//       admin: {
//         components: {
//           Field: '@/collections/RegistrationSettings/components/RegisterMail',
//         },
//       },
//     },
//     {
//       name: 'attachments',
//       label: 'Uploaded Files',
//       type: 'array',
//       fields: [
//         {
//           name: 'file',
//           type: 'upload',
//           relationTo: 'media',
//         },
//         {
//           name: 'fieldName',
//           type: 'text',
//         },
//       ],
//     },
//     {
//       type: 'collapsible',
//       label: 'Email Management',
//       fields: [
//         {
//           name: 'thankYouMailSent',
//           type: 'checkbox',
//           defaultValue: false,
//           admin: { readOnly: true },
//         },
//         {
//           name: 'confirmedAt',
//           type: 'date',
//           admin: {
//             date: { pickerAppearance: 'dayAndTime' },
//           },
//         },
//         {
//           name: 'adminMessage',
//           type: 'textarea',
//         },
//         {
//           name: 'mailResponse',
//           type: 'textarea',
//           admin: { readOnly: true },
//         },
//       ],
//     },
//   ],

//   timestamps: true,
// }
