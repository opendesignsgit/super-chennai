// import type { Payload, PayloadRequest } from 'payload'

// type SeedArgs = {
//   payload: Payload
//   req: PayloadRequest
// }

// export async function seed({ payload, req }: SeedArgs): Promise<void> {
//   console.log('🌱 Seeding content...')

//   // Optional: check if already seeded
//   const existing = await payload.find({
//     collection: 'pages',
//     where: { slug: { equals: 'home' } },
//     user: req.user,
//   })

//   if (existing.totalDocs > 0) {
//     console.log('ℹ️ Seed already exists. Skipping.')
//     return
//   }

//   // Create Page with Custom Blocks
//   await payload.create({
//     collection: 'pages',
//     data: {
//       title: 'Home',
//       slug: 'home',
//       layout: [
//         {
//           blockType: 'careerIntro',
//           blockName: 'Career Intro',
//           heading: 'A Center for Various Job Prospects',
//           description:
//             "Chennai's strong economy provides a diverse array of job opportunities...",
//           marqueeText: 'Employment in Chennai Employment in Chennai',
//         },
//         {
//           blockType: 'featureSections',
//           blockName: 'Feature Sections',
//           sections: [
//             {
//               sectionTitle: 'IT Sector Growth',
//               sectionDesc: 'Chennai is booming with IT parks and startups.',
//               image: await getMediaID(payload, req, '/seed/it-sector.jpg'),
//               tenantInfoSections: [
//                 {
//                   title: 'Top Companies',
//                   points: [
//                     {
//                       title: 'Infosys',
//                       desc: 'One of the largest IT service providers.',
//                       imgs: await getMediaID(payload, req, '/seed/infosys.png'),
//                       para: [
//                         { point: 'High salary' },
//                         { point: 'Great infrastructure' },
//                       ],
//                     },
//                   ],
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     user: req.user,
//   })

//   console.log('✅ Home page created with custom blocks')
// }
