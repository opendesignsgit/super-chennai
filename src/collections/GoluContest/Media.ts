// import { authenticated } from '@/access/authenticated'
// import { CollectionConfig } from 'payload'

// export const Media: CollectionConfig<'media'> = {
//   slug: 'media',
//   access: {
//     read: () => true,
//     create: () => true, // Allows photo upload during submission
//     update: authenticated,
//     delete: authenticated,
//   },
//   upload: {
//     staticDir: 'public/media',
//     mimeTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
//     imageSizes: [
//       { name: 'thumbnail', width: 400, height: 300, crop: 'center' },
//       { name: 'card', width: 768, height: 576, crop: 'center' },
//       { name: 'large', width: 1400, height: undefined, crop: 'withoutEnlargement' },
//     ],
//     adminThumbnail: 'thumbnail',
//   },
//   fields: [
//     { name: 'alt', type: 'text' },
//     { name: 'caption', type: 'text' },
//   ],
// }