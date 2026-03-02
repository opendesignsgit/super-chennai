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

// export async function generateStaticParams() {
//   const payload = await getPayload({ config: configPromise })
//   const neighbourhood = await payload.find({
//     collection: 'neighbourhood',
//     draft: false,
//     limit: 1000,
//     overrideAccess: false,
//     pagination: false,
//     select: { slug: true },
//   })

//   return neighbourhood.docs.map(({ slug }) => ({ slug }))
// }

// type Args = { params: Promise<{ slug?: string }> }

// export default async function NeighbourhoodPage({ params: paramsPromise }: Args) {
//   const { isEnabled: draft } = await draftMode()
//   const { slug = '' } = await paramsPromise
//   const url = '/neighbourhood/' + slug

//   const neighbourhood = await queryPostBySlug({ slug })
//   if (!neighbourhood) return <PayloadRedirects url={url} />

//   return (
//     <article className="">
//       <PageClient />
//       <PayloadRedirects disableNotFound url={url} />
//       {draft && <LivePreviewListener />}

//       {/* Hero Section */}
//       <Suspense fallback={null}>
//         <PostHero post={neighbourhood} />
//       </Suspense>

//       <div className="container p-10 ">
//         {/* Rich Text Blocks */}
//         {neighbourhood.content && <RichText data={neighbourhood.content} />}

//         {/* Media */}
//         {neighbourhood.FeaturedImage && (
//           <Image
//             src={neighbourhood.FeaturedImage.url}
//             alt={neighbourhood.FeaturedImage.alt || ''}
//             width={1200}
//             height={600}
//             className="object-cover w-full h-96 rounded-lg shadow-lg"
//             priority
//           />
//         )}

//         {/*################ Business Details##################### */}

//         <h2>Business Details</h2>
//         {neighbourhood.name && <p>Name: {neighbourhood.name}</p>}
//         {neighbourhood.description && <p>{neighbourhood.description}</p>}

//         {/* Gallery */}
//         {neighbourhood.FeaturedImage &&
//           typeof neighbourhood.FeaturedImage !== 'number' &&
//           typeof neighbourhood.FeaturedImage.url === 'string' && (
//             <Image
//               src={neighbourhood.FeaturedImage.url}
//               alt={neighbourhood.FeaturedImage.alt || ''}
//               width={1200}
//               height={600}
//             />
//           )}

//         {/* Category & Subcategories */}
//         <p>
//           Category:{' '}
//           {neighbourhood.category && typeof neighbourhood.category !== 'number'
//             ? neighbourhood.category.name
//             : ''}
//         </p>
//         <p>Subcategories: {neighbourhood.subCategories?.map((s) => s.name).join(', ')}</p>

//         {/* Contact Info */}
//         {neighbourhood.contactInfo && (
//           <div>
//             <p>Primary Phone: {neighbourhood.contactInfo.primaryPhone}</p>
//             <p>Email: {neighbourhood.contactInfo.email}</p>
//             <p>Website: {neighbourhood.contactInfo.website}</p>
//           </div>
//         )}

//         {/* Business Hours */}
//         {neighbourhood.businessHours?.map((b, i) => (
//           <p key={i}>
//             {b.day}: {b.openTime} - {b.closeTime} {b.isClosed ? '(Closed)' : ''}
//           </p>
//         ))}

//         {/* Price Info */}
//         {neighbourhood.priceInfo && (
//           <p>
//             Price Range: {neighbourhood.priceInfo.priceRange}, Average Cost: ₹
//             {neighbourhood.priceInfo.averageCost}
//           </p>
//         )}

//         {/* Social Media */}
//         {neighbourhood.socialMedia && (
//           <div>
//             <p>Facebook: {neighbourhood.socialMedia.facebook}</p>
//             <p>Instagram: {neighbourhood.socialMedia.instagram}</p>
//             <p>Youtube: {neighbourhood.socialMedia.youtube}</p>
//           </div>
//         )}

//         {/* Tags */}
//         <p>Tags: {neighbourhood.tags?.map((t) => t.name).join(', ')}</p>

//         {/* Menu Items (Conditional) */}
//         {neighbourhood.menuItems?.map((item, i) => (
//           <p key={i}>
//             {item.itemName} - ₹{item.price} {item.isVeg ? '(Veg)' : ''}
//           </p>
//         ))}

//         {/* Fuel Types (Conditional) */}
//         {neighbourhood.fuelTypes?.map((fuel, i) => (
//           <p key={i}>
//             {fuel.fuelName} - ₹{fuel.pricePerLitre}/L
//           </p>
//         ))}

//         {/* Locations */}
//         <p>Location: {neighbourhood.locations?.label}</p>

//         {neighbourhood.structuredData?.schemaType && (
//           <script
//             type="application/ld+json"
//             dangerouslySetInnerHTML={{
//               __html: JSON.stringify(generateSchema(neighbourhood)),
//             }}
//           />
//         )}
//       </div>
//     </article>
//   )
// }

// function generateSchema(neighbourhood: any) {
//   const { structuredData } = neighbourhood
//   if (!structuredData?.schemaType) return null
//   switch (structuredData.schemaType) {
//     case 'FAQPage':
//       return {
//         '@context': 'https://schema.org',
//         '@type': 'FAQPage',
//         mainEntity: structuredData.faqSchema?.map((faq: any) => ({
//           '@type': 'Question',
//           name: faq.question,
//           acceptedAnswer: {
//             '@type': 'Answer',
//             text: faq.answer,
//           },
//         })),
//       }

//     case 'Event':
//       return {
//         '@context': 'https://schema.org',
//         '@type': 'Event',
//         name: structuredData.eventSchema?.[0]?.eventName,
//         startDate: structuredData.eventSchema?.[0]?.startDate,
//         endDate: structuredData.eventSchema?.[0]?.endDate,
//         location: {
//           '@type': 'Place',
//           name: structuredData.eventSchema?.[0]?.locationName,
//         },
//       }

//     case 'LocalBusiness':
//     case 'Restaurant':
//     case 'Hotel':
//     case 'Store':
//     case 'GasStation':
//       return {
//         '@context': 'https://schema.org',
//         '@type': structuredData.schemaType,
//         name: neighbourhood.name,
//         description: neighbourhood.description,
//         telephone: neighbourhood.contactInfo?.primaryPhone,
//       }

//     case 'Custom':
//       return structuredData.customSchema

//     default:
//       return null
//   }
// }

// export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
//   const { slug = '' } = await paramsPromise
//   const neighbourhood = await queryPostBySlug({ slug })
//   return generateMeta({ doc: neighbourhood })
// }

// const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
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

//   return result.docs?.[0] || null
// })
import type { Metadata } from 'next'
import { PayloadRedirects } from 'src/components/PayloadRedirects'
import configPromise from 'src/payload.config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache, Suspense } from 'react'
import RichText from 'src/components/RichText'
import { PostHero } from 'src/heros/PostHero'
import { generateMeta } from 'src/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from 'src/components/LivePreviewListener'
import Image from 'next/image'
import type { Neighbourhood, Media } from '@/payload-types'

/* ===================================================== */
/* 🔥 Type Guards */
/* ===================================================== */

function isPopulated<T>(value: T | number | null | undefined): value is T {
  return typeof value === 'object' && value !== null
}

function getMediaUrl(media: number | Media | null | undefined): string | null {
  if (!media || typeof media === 'number') return null
  return media.url ?? null
}

/* ===================================================== */

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })

  const neighbourhood = await payload.find({
    collection: 'neighbourhood',
    draft: false,
    limit: 1000,
    pagination: false,
    select: { slug: true },
  })

  return neighbourhood.docs.filter((doc) => doc.slug).map((doc) => ({ slug: doc.slug as string }))
}

type Args = {
  params: Promise<{ slug?: string }>
}

export default async function NeighbourhoodPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/neighbourhood/' + slug

  const neighbourhood = await queryPostBySlug({ slug })
  if (!neighbourhood) return <PayloadRedirects url={url} />

  const featuredImageUrl = getMediaUrl(neighbourhood.FeaturedImage)

  return (
    <article>
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}

      <Suspense fallback={null}>
        <PostHero post={neighbourhood} />
      </Suspense>

      <div className="container p-10">
        {/* Rich Text */}
        {neighbourhood.content && <RichText data={neighbourhood.content} />}

        {/* Featured Image */}
        {featuredImageUrl && (
          <Image
            src={featuredImageUrl}
            alt=""
            width={1200}
            height={600}
            className="object-cover w-full h-96 rounded-lg shadow-lg"
            priority
          />
        )}

        {/* ================= BUSINESS DETAILS ================= */}

        <h2 className="text-2xl font-bold mt-8 mb-4">Business Details</h2>

        {neighbourhood.name && (
          <p>
            <strong>Name:</strong> {neighbourhood.name}
          </p>
        )}

        {neighbourhood.description && <p className="mt-2">{neighbourhood.description}</p>}

        {/* Gallery */}
        {neighbourhood.gallery?.map((g, i) => {
          const imageUrl = getMediaUrl(g.image)
          if (!imageUrl) return null

          return (
            <Image
              key={i}
              src={imageUrl}
              alt={g.alt ?? ''}
              width={1200}
              height={600}
              className="object-cover w-full h-96 rounded-lg shadow-lg mt-4"
            />
          )
        })}

        {/* Category */}
        {isPopulated(neighbourhood.category) && (
          <p className="mt-4">
            <strong>Category:</strong> {neighbourhood.category.title}
          </p>
        )}

        {/* Subcategories */}
        {neighbourhood.subCategories && (
          <p>
            <strong>Subcategories:</strong>{' '}
            {neighbourhood.subCategories
              .filter(isPopulated)
              .map((s) => s.title)
              .join(', ')}
          </p>
        )}

        {/* Tags */}
        {neighbourhood.tags && (
          <p>
            <strong>Tags:</strong>{' '}
            {neighbourhood.tags
              .filter(isPopulated)
              .map((t) => t.name)
              .join(', ')}
          </p>
        )}

        {/* Contact Info */}
        {neighbourhood.contactInfo && (
          <div className="mt-4">
            {neighbourhood.contactInfo.primaryPhone && (
              <p>
                <strong>Phone:</strong> {neighbourhood.contactInfo.primaryPhone}
              </p>
            )}
            {neighbourhood.contactInfo.email && (
              <p>
                <strong>Email:</strong> {neighbourhood.contactInfo.email}
              </p>
            )}
            {neighbourhood.contactInfo.website && (
              <p>
                <strong>Website:</strong> {neighbourhood.contactInfo.website}
              </p>
            )}
          </div>
        )}

        {/* Business Hours */}
        {neighbourhood.businessHours?.map((b, i) => (
          <p key={i}>
            {b.day}: {b.isClosed ? 'Closed' : `${b.openTime} - ${b.closeTime}`}
          </p>
        ))}

        {/* Price Info */}
        {neighbourhood.priceInfo && (
          <p>
            <strong>Price:</strong> {neighbourhood.priceInfo.priceRange}
            {neighbourhood.priceInfo.averageCost && ` (₹${neighbourhood.priceInfo.averageCost})`}
          </p>
        )}

        {/* Social Media */}
        {neighbourhood.socialMedia && (
          <div className="mt-4">
            {neighbourhood.socialMedia.facebook && (
              <p>Facebook: {neighbourhood.socialMedia.facebook}</p>
            )}
            {neighbourhood.socialMedia.instagram && (
              <p>Instagram: {neighbourhood.socialMedia.instagram}</p>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

/* ===================================================== */

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const neighbourhood = await queryPostBySlug({ slug })
  return generateMeta({ doc: neighbourhood })
}

/* ===================================================== */

const queryPostBySlug = cache(async ({ slug }: { slug: string }): Promise<Neighbourhood | null> => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'neighbourhood',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: { slug: { equals: slug } },
    depth: 2,
  })

  return result.docs?.[0] ?? null
})
