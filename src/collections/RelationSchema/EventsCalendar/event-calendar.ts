
// import { CollectionConfig } from 'payload'

// const EventsCalendar: CollectionConfig = {
//   slug: 'eventGroups',
//   labels: {
//     singular: 'Events',
//     plural: 'Events',
//   },
//   access: {
//     read: () => true,
//   },
//   admin: {
//     useAsTitle: 'title',
//     group: 'Common Block Contents',
//   },
//   fields: [
//     {
//       name: 'title',
//       type: 'text',
//       required: true,
//     },
//     {
//       name: 'events',
//       type: 'array',
//       label: 'Events',
//       minRows: 1,
//       fields: [
//         {
//           name: 'image',
//           type: 'upload',
//           relationTo: 'media',
//           required: true,
//         },
//         {
//           name: 'title',
//           type: 'text',
//           required: true,
//         },
//         {
//           name: 'description',
//           type: 'textarea',
//         },
//         {
//           name: 'time',
//           type: 'text',
//         },
//         {
//           name: 'date',
//           type: 'number',
//           required: true,
//           min: 1,
//           max: 31,
//         },
//         {
//           name: 'month',
//           type: 'select',
//           required: true,
//           options: [
//             'january',
//             'february',
//             'march',
//             'april',
//             'may',
//             'june',
//             'july',
//             'august',
//             'september',
//             'october',
//             'november',
//             'december',
//           ],
//           admin: {
//             isClearable: false,
//             isSortable: true,
//           },
//         },
//         {
//           name: 'year',
//           type: 'number',
//           required: true,
//           min: 2024,
//           max: 2100,
//         },
//         {
//           name: 'category',
//           type: 'text',
//         },
//         {
//           name: 'link',
//           type: 'text',
//         },
//         {
//           name: 'address',
//           type: 'textarea',
//           label: 'Address',
//           admin: {
//             description: 'Full address or venue location for the event',
//           },
//         },
//         {
//           name: 'eventType',
//           type: 'text',
//           label: 'Event Type',
//           required: true,
//           admin: {
//             placeholder: 'e.g. Music, Workshop, Festival...',
//             description: 'Type the event type manually',
//           },
//         },
        
//       ],
//     },
//   ],
// }

// export default EventsCalendar


