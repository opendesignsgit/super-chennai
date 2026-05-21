// import type { CollectionConfig } from 'payload'

// export const ArattaiRegistrations: CollectionConfig = {
//   slug: 'arattai-registrations',

//   admin: {
//     useAsTitle: 'name',
//     defaultColumns: ['name', 'email', 'createdAt'],
//   },

//   access: {
//     read: () => true,
//     create: () => true,
//     update: () => true,
//     delete: () => true,
//   },

//   fields: [
//     {
//       name: 'arattai',
//       type: 'relationship',
//       relationTo: 'arattai',
//       required: true,
//     },

//     {
//       name: 'name',
//       type: 'text',
//     },

//     {
//       name: 'email',
//       type: 'email',
//     },

//     {
//       name: 'phone',
//       type: 'text',
//     },

//     {
//       name: 'values',
//       type: 'json',
//     },

//     {
//       name: 'mailSent',
//       type: 'checkbox',
//       defaultValue: false,
//     },

//     {
//       name: 'mailResponse',
//       type: 'textarea',
//     },
//   ],

//   timestamps: true,
// }

import type { CollectionConfig } from 'payload'

export const ArattaiRegistrations: CollectionConfig = {
  slug: 'arattai-registrations',

  admin: {
    useAsTitle: 'name',

    defaultColumns: ['name', 'email', 'status', 'thankYouMailSent', 'createdAt'],

    group: 'Arattai Management',
  },

  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },

  fields: [
    /* ======================================================
       EVENT RELATION
    ====================================================== */

    {
      name: 'arattai',
      label: 'Arattai Event',
      type: 'relationship',
      relationTo: 'arattai',
      required: true,

      admin: {
        width: '50%',
      },
    },

    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',

      options: [
        {
          label: 'Pending',
          value: 'pending',
        },

        {
          label: 'Confirmed',
          value: 'confirmed',
        },

        {
          label: 'Rejected',
          value: 'rejected',
        },
      ],

      admin: {
        width: '50%',
      },
    },

    /* ======================================================
       USER INFO
    ====================================================== */

    {
      type: 'row',

      fields: [
        {
          name: 'name',
          type: 'text',

          admin: {
            width: '50%',
          },
        },

        {
          name: 'email',
          type: 'email',

          admin: {
            width: '50%',
          },
        },
      ],
    },

    {
      type: 'row',

      fields: [
        {
          name: 'phone',
          type: 'text',

          admin: {
            width: '50%',
          },
        },

        {
          name: 'company',
          type: 'text',

          admin: {
            width: '50%',
          },
        },
      ],
    },

    /* ======================================================
       REGISTRATION DATA
    ====================================================== */

    {
      name: 'values',
      label: 'Registration Form Data',
      type: 'json',

      admin: {
        description: 'Dynamic submitted form values',
      },
    },

    /* ======================================================
       MAIL SETTINGS
    ====================================================== */

    {
      type: 'collapsible',

      label: 'Email Management',

      fields: [
        {
          type: 'row',

          fields: [
            {
              name: 'thankYouMailSent',
              type: 'checkbox',

              defaultValue: false,

              admin: {
                width: '50%',
                readOnly: true,
              },
            },

            {
              name: 'confirmedAt',
              type: 'date',

              admin: {
                width: '50%',
                date: {
                  pickerAppearance: 'dayAndTime',
                },
              },
            },
          ],
        },

        {
          name: 'adminMessage',
          type: 'textarea',

          admin: {
            description: 'This message will be included in confirmation mail.',
          },
        },

        {
          name: 'mailResponse',
          type: 'textarea',

          admin: {
            readOnly: true,
          },
        },
      ],
    },

    /* ======================================================
       ADMIN ACTIONS
    ====================================================== */

    {
      name: 'sendThankYouMail',
      type: 'ui',

      admin: {
        components: {
          Field: '@/collections/Arrattai/components/SendThankYouButton',
        },
      },
    },
  ],

  timestamps: true,
}
