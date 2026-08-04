
// // import type { Metadata } from 'next'
// // import { PayloadRedirects } from 'src/components/PayloadRedirects'
// // import configPromise from 'src/payload.config'
// // import { getPayload } from 'payload'
// // import { draftMode } from 'next/headers'
// // import React, { cache, Suspense } from 'react'
// // import RichText from 'src/components/RichText'
// // import { PostHero } from 'src/heros/PostHero'
// // import { generateMeta } from 'src/utilities/generateMeta'
// // import PageClient from './page.client'
// // import { LivePreviewListener } from 'src/components/LivePreviewListener'
// // import Image from 'next/image'
// // import type { Neighbourhood, Media } from '@/payload-types'

// // /* ===================================================== */
// // /* 🔥 Type Guards */
// // /* ===================================================== */

// // function isPopulated<T>(value: T | number | null | undefined): value is T {
// //   return typeof value === 'object' && value !== null
// // }

// // function getMediaUrl(media: number | Media | null | undefined): string | null {
// //   if (!media || typeof media === 'number') return null
// //   return media.url ?? null
// // }

// // /* ===================================================== */

// // export async function generateStaticParams() {
// //   const payload = await getPayload({ config: configPromise })

// //   const neighbourhood = await payload.find({
// //     collection: 'neighbourhood',
// //     draft: false,
// //     limit: 1000,
// //     pagination: false,
// //     select: { slug: true },
// //   })

// //   return neighbourhood.docs.filter((doc) => doc.slug).map((doc) => ({ slug: doc.slug as string }))
// // }

// // type Args = {
// //   params: Promise<{ slug?: string }>
// // }

// // export default async function NeighbourhoodPage({ params: paramsPromise }: Args) {
// //   const { isEnabled: draft } = await draftMode()
// //   const { slug = '' } = await paramsPromise
// //   const url = '/neighbourhood/' + slug

// //   const neighbourhood = await queryPostBySlug({ slug })
// //   if (!neighbourhood) return <PayloadRedirects url={url} />

// //   const featuredImageUrl = getMediaUrl(neighbourhood.FeaturedImage)

// //   return (
// //     <article>
// //       <PageClient />
// //       <PayloadRedirects disableNotFound url={url} />
// //       {draft && <LivePreviewListener />}

// //       <Suspense fallback={null}>
// //         <PostHero post={neighbourhood} />
// //       </Suspense>

// //       <div className="container p-10">
// //         {/* Rich Text */}
// //         {neighbourhood.content && <RichText data={neighbourhood.content} />}

// //         {/* Featured Image */}
// //         {featuredImageUrl && (
// //           <Image
// //             src={featuredImageUrl}
// //             alt=""
// //             width={1200}
// //             height={600}
// //             className="object-cover w-full h-96 rounded-lg shadow-lg"
// //             priority
// //           />
// //         )}

// //         {/* ================= BUSINESS DETAILS ================= */}

// //         <h2 className="text-2xl font-bold mt-8 mb-4">Business Details</h2>

// //         {neighbourhood.name && (
// //           <p>
// //             <strong>Name:</strong> {neighbourhood.name}
// //           </p>
// //         )}

// //         {neighbourhood.description && <p className="mt-2">{neighbourhood.description}</p>}

// //         {/* Gallery */}
// //         {neighbourhood.gallery?.map((g, i) => {
// //           const imageUrl = getMediaUrl(g.image)
// //           if (!imageUrl) return null

// //           return (
// //             <Image
// //               key={i}
// //               src={imageUrl}
// //               alt={g.alt ?? ''}
// //               width={1200}
// //               height={600}
// //               className="object-cover w-full h-96 rounded-lg shadow-lg mt-4"
// //             />
// //           )
// //         })}

// //         {/* Category */}
// //         {isPopulated(neighbourhood.category) && (
// //           <p className="mt-4">
// //             <strong>Category:</strong> {neighbourhood.category.title}
// //           </p>
// //         )}

// //         {/* Subcategories */}
// //         {neighbourhood.subCategories && (
// //           <p>
// //             <strong>Subcategories:</strong>{' '}
// //             {neighbourhood.subCategories
// //               .filter(isPopulated)
// //               .map((s) => s.title)
// //               .join(', ')}
// //           </p>
// //         )}

// //         {/* Tags */}
// //         {neighbourhood.tags && (
// //           <p>
// //             <strong>Tags:</strong>{' '}
// //             {neighbourhood.tags
// //               .filter(isPopulated)
// //               .map((t) => t.name)
// //               .join(', ')}
// //           </p>
// //         )}

// //         {/* Contact Info */}
// //         {neighbourhood.contactInfo && (
// //           <div className="mt-4">
// //             {neighbourhood.contactInfo.primaryPhone && (
// //               <p>
// //                 <strong>Phone:</strong> {neighbourhood.contactInfo.primaryPhone}
// //               </p>
// //             )}
// //             {neighbourhood.contactInfo.email && (
// //               <p>
// //                 <strong>Email:</strong> {neighbourhood.contactInfo.email}
// //               </p>
// //             )}
// //             {neighbourhood.contactInfo.website && (
// //               <p>
// //                 <strong>Website:</strong> {neighbourhood.contactInfo.website}
// //               </p>
// //             )}
// //           </div>
// //         )}

// //         {/* Business Hours */}
// //         {neighbourhood.businessHours?.map((b, i) => (
// //           <p key={i}>
// //             {b.day}: {b.isClosed ? 'Closed' : `${b.openTime} - ${b.closeTime}`}
// //           </p>
// //         ))}

// //         {/* Price Info */}
// //         {neighbourhood.priceInfo && (
// //           <p>
// //             <strong>Price:</strong> {neighbourhood.priceInfo.priceRange}
// //             {neighbourhood.priceInfo.averageCost && ` (₹${neighbourhood.priceInfo.averageCost})`}
// //           </p>
// //         )}

// //         {/* Social Media */}
// //         {neighbourhood.socialMedia && (
// //           <div className="mt-4">
// //             {neighbourhood.socialMedia.facebook && (
// //               <p>Facebook: {neighbourhood.socialMedia.facebook}</p>
// //             )}
// //             {neighbourhood.socialMedia.instagram && (
// //               <p>Instagram: {neighbourhood.socialMedia.instagram}</p>
// //             )}
// //           </div>
// //         )}
// //       </div>
// //     </article>
// //   )
// // }

// // /* ===================================================== */

// // export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
// //   const { slug = '' } = await paramsPromise
// //   const neighbourhood = await queryPostBySlug({ slug })
// //   return generateMeta({ doc: neighbourhood })
// // }

// // /* ===================================================== */

// // const queryPostBySlug = cache(async ({ slug }: { slug: string }): Promise<Neighbourhood | null> => {
// //   const { isEnabled: draft } = await draftMode()
// //   const payload = await getPayload({ config: configPromise })

// //   const result = await payload.find({
// //     collection: 'neighbourhood',
// //     draft,
// //     limit: 1,
// //     overrideAccess: draft,
// //     pagination: false,
// //     where: { slug: { equals: slug } },
// //     depth: 2,
// //   })

// //   return result.docs?.[0] ?? null
// // })

// import type { Metadata } from 'next'
// import { PayloadRedirects } from 'src/components/PayloadRedirects'
// import configPromise from 'src/payload.config'
// import { getPayload } from 'payload'
// import { draftMode } from 'next/headers'
// import React, { cache, Suspense } from 'react'
// import RichText from 'src/components/RichText'
// import { PostHero } from 'src/heros/PostHero'
// import { generateMeta } from 'src/utilities/generateMeta'
// import PageClient from './page.client'
// import { LivePreviewListener } from 'src/components/LivePreviewListener'
// import Image from 'next/image'
// import type { Neighbourhood, Media } from '@/payload-types'

// // Dynamic Location Client Component
// import NeighbourhoodDetailClient from '../[locationId]/NeighbourhoodDetailClient'

// function isPopulated<T>(value: T | number | null | undefined): value is T {
//   return typeof value === 'object' && value !== null
// }

// function getMediaUrl(media: number | Media | null | undefined): string | null {
//   if (!media || typeof media === 'number') return null
//   return media.url ?? null
// }

// type Args = {
//   params: Promise<{ slug?: string }>
// }

// export default async function NeighbourhoodPage({ params: paramsPromise }: Args) {
//   const { isEnabled: draft } = await draftMode()
//   const { slug = '' } = await paramsPromise
//   const decodedSlug = decodeURIComponent(slug)
//   const url = '/neighbourhood/' + slug

//   const payload = await getPayload({ config: configPromise })

//   // 1. First, check if this slug belongs to a Locality (e.g. Vadapalani, Anna Nagar)
//   const locationRes = await payload.find({
//     collection: 'chennaiNeighbourhoodlocations',
//     where: {
//       locality: {
//         equals: decodedSlug,
//       },
//     },
//     limit: 1,
//   })

//   // 2. IF IT IS A LOCALITY -> Render Neighbourhood Location Detail UI
//   if (locationRes.docs.length > 0) {
//     const locationData = locationRes.docs[0]

//     const allLocationsRes = await payload.find({
//       collection: 'chennaiNeighbourhoodlocations',
//       limit: 100,
//     })

//     const neighbourhoodDocsRes = await payload.find({
//       collection: 'neighbourhood',
//       where: {
//         'locations.locality': {
//           equals: decodedSlug,
//         },
//       },
//       depth: 2,
//       limit: 500,
//     })

//     return (
//       <NeighbourhoodDetailClient
//         locationData={locationData}
//         allLocations={allLocationsRes.docs}
//         neighbourhoodDocs={neighbourhoodDocsRes.docs}
//         locationId={decodedSlug}
//       />
//     )
//   }

//   // 3. OTHERWISE -> Fallback to Business/Listing Item query by slug
//   const neighbourhood = await queryPostBySlug({ slug: decodedSlug })
//   if (!neighbourhood) return <PayloadRedirects url={url} />

//   const featuredImageUrl = getMediaUrl(neighbourhood.FeaturedImage)

//   return (
//     <article>
//       <PageClient />
//       <PayloadRedirects disableNotFound url={url} />
//       {draft && <LivePreviewListener />}

//       <Suspense fallback={null}>
//         <PostHero post={neighbourhood} />
//       </Suspense>

//       <div className="container p-10">
//         {/* Rich Text */}
//         {neighbourhood.content && <RichText data={neighbourhood.content} />}

//         {/* Featured Image */}
//         {featuredImageUrl && (
//           <Image
//             src={featuredImageUrl}
//             alt=""
//             width={1200}
//             height={600}
//             className="object-cover w-full h-96 rounded-lg shadow-lg"
//             priority
//           />
//         )}

//         {/* Business details continuation ... */}
//         <h2 className="text-2xl font-bold mt-8 mb-4">Business Details</h2>
//         {neighbourhood.name && <p><strong>Name:</strong> {neighbourhood.name}</p>}
//         {neighbourhood.description && <p className="mt-2">{neighbourhood.description}</p>}
//       </div>
//     </article>
//   )
// }

// const queryPostBySlug = cache(async ({ slug }: { slug: string }): Promise<Neighbourhood | null> => {
//   const { isEnabled: draft } = await draftMode()
//   const payload = await getPayload({ config: configPromise })

//   const result = await payload.find({
//     collection: 'neighbourhood',
//     draft,
//     limit: 1,
//     overrideAccess: draft,
//     pagination: false,
//     where: { slug: { equals: slug } },
//     depth: 2,
//   })

//   return result.docs?.[0] ?? null
// })