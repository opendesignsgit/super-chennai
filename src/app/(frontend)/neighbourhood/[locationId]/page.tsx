// import type { Metadata } from 'next/types'
// import { getPayload } from 'payload'
// import configPromise from 'src/payload.config'
// import { notFound } from 'next/navigation'
// import NeighbourhoodDetailClient from './NeighbourhoodDetailClient'

// export const dynamic = 'force-dynamic'

// export default async function Page({ params }: { params: Promise<{ locationId: string }> }) {
//   const resolvedParams = await params
//   const rawLocation = resolvedParams?.locationId || ''
//   const decodedLocation = decodeURIComponent(rawLocation)

//   const payload = await getPayload({ config: configPromise })

//   const currentLocationRes = await payload.find({
//     collection: 'chennaiNeighbourhoodlocations',
//     where: {
//       or: [
//         { locality: { equals: decodedLocation } },
//         { locality: { equals: decodedLocation.toLowerCase() } },
//         { label: { equals: decodedLocation } },
//       ],
//     },
//     limit: 1,
//   })

//   const locationData = currentLocationRes.docs[0] || null

//   if (!locationData) {
//     const allLocs = await payload.find({
//       collection: 'chennaiNeighbourhoodlocations',
//       limit: 1000,
//     })

//     const softMatch = allLocs.docs.find(
//       (loc: any) =>
//         loc.locality?.toLowerCase() === decodedLocation.toLowerCase() ||
//         loc.label?.toLowerCase() === decodedLocation.toLowerCase(),
//     )

//     if (!softMatch) {
//       notFound()
//     }
//   }

//   const allLocationsRes = await payload.find({
//     collection: 'chennaiNeighbourhoodlocations',
//     limit: 100,
//   })

//   const neighbourhoodDocsRes = await payload.find({
//     collection: 'neighbourhood',
//     where: {
//       'locations.locality': {
//         equals: decodedLocation,
//       },
//     },
//     depth: 2,
//     limit: 500,
//   })

//   return (
//     <NeighbourhoodDetailClient
//       locationData={locationData}
//       allLocations={allLocationsRes.docs}
//       neighbourhoodDocs={neighbourhoodDocsRes.docs}
//       locationId={decodedLocation}
//     />
//   )
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ locationId: string }>
// }): Promise<Metadata> {
//   const resolvedParams = await params
//   const decodedLocation = decodeURIComponent(resolvedParams?.locationId || '')

//   return {
//     title: `${decodedLocation} Neighbourhood Details | Super Chennai`,
//     description: `Explore local amenities, schools, metro stations, and lifestyle in ${decodedLocation}, Chennai.`,
//   }
// }

import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import configPromise from 'src/payload.config'
import { notFound } from 'next/navigation'
import NeighbourhoodDetailClient from './NeighbourhoodDetailClient'

export const dynamic = 'force-dynamic'

export default async function Page({ params }: { params: Promise<{ locationId: string }> }) {
  console.log('\n==================================================')
  console.log('🚀 [SERVER PAGE] [locationId] Route Hit!')

  const resolvedParams = await params
  const rawLocation = resolvedParams?.locationId || ''
  const decodedLocation = decodeURIComponent(rawLocation)

  console.log('📍 Raw locationId from Params:', rawLocation)
  console.log('🔍 Decoded Location:', decodedLocation)

  const payload = await getPayload({ config: configPromise })

  console.log('⏳ Searching Payload collection: "chennaiNeighbourhoodlocations"...')
  const currentLocationRes = await payload.find({
    collection: 'chennaiNeighbourhoodlocations',
    where: {
      or: [
        { locality: { equals: decodedLocation } },
        { locality: { equals: decodedLocation.toLowerCase() } },
        { label: { equals: decodedLocation } },
      ],
    },
    limit: 1,
  })

  let locationData = currentLocationRes.docs[0] || null

  if (locationData) {
    console.log('✅ Exact match found in DB for:', locationData.locality)
  } else {
    console.warn('⚠️ Exact match NOT found. Running fallback softMatch search...')

    const allLocs = await payload.find({
      collection: 'chennaiNeighbourhoodlocations',
      limit: 1000,
    })

    console.log(`📦 Total locations fetched for softMatch scan: ${allLocs.docs.length}`)

    const softMatch = allLocs.docs.find(
      (loc: any) =>
        loc.locality?.toLowerCase() === decodedLocation.toLowerCase() ||
        loc.label?.toLowerCase() === decodedLocation.toLowerCase(),
    )

    if (softMatch) {
      console.log('🎯 SoftMatch SUCCESS! Found match:', softMatch.locality)
      locationData = softMatch
    } else {
      console.error('❌ SoftMatch FAILED! Location does not exist in DB. Calling notFound().')
      console.log('==================================================\n')
      notFound()
    }
  }

  // Fetch all locations for carousel
  const allLocationsRes = await payload.find({
    collection: 'chennaiNeighbourhoodlocations',
    limit: 100,
  })

  // Fetch related docs
  const neighbourhoodDocsRes = await payload.find({
    collection: 'neighbourhood',
    where: {
      'locations.locality': {
        equals: locationData?.locality || decodedLocation,
      },
    },
    depth: 2,
    limit: 500,
  })

  console.log(
    `📊 Found ${neighbourhoodDocsRes.docs.length} related docs for ${locationData?.locality}`,
  )
  console.log('🚀 Rendering NeighbourhoodDetailClient...')
  console.log('==================================================\n')

  return (
    <NeighbourhoodDetailClient
      locationData={locationData}
      allLocations={allLocationsRes.docs}
      neighbourhoodDocs={neighbourhoodDocsRes.docs}
      locationId={decodedLocation}
    />
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locationId: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const decodedLocation = decodeURIComponent(resolvedParams?.locationId || '')

  return {
    title: `${decodedLocation} Neighbourhood Details | Super Chennai`,
    description: `Explore local amenities, schools, metro stations, and lifestyle in ${decodedLocation}, Chennai.`,
  }
}
