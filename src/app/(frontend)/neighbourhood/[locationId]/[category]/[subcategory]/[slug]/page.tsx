import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import configPromise from 'src/payload.config'
import { notFound } from 'next/navigation'
import NeighbourhoodItemDetailClient from '../NeighbourhoodItemDetailClient'
// import NeighbourhoodItemDetailClient from './NeighbourhoodItemDetailClient'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{
    locationId: string
    category: string
    subcategory: string
    slug: string
  }>
}

export default async function Page({ params }: PageProps) {
  console.log('\n==================================================')
  console.log('🚀 [SERVER PAGE] Neighbourhood Item Detail Route Hit!')

  const resolvedParams = await params
  const rawLocation = resolvedParams?.locationId || ''
  const rawCategory = resolvedParams?.category || ''
  const rawSubcategory = resolvedParams?.subcategory || ''
  const rawSlug = resolvedParams?.slug || ''

  const decodedLocation = decodeURIComponent(rawLocation)
  const decodedCategory = decodeURIComponent(rawCategory)
  const decodedSubcategory = decodeURIComponent(rawSubcategory)
  const decodedSlug = decodeURIComponent(rawSlug)

  console.log('📍 Location:', decodedLocation)
  console.log('🏷️ Category:', decodedCategory)
  console.log('📂 Subcategory:', decodedSubcategory)
  console.log('🔗 Slug:', decodedSlug)

  const payload = await getPayload({ config: configPromise })

  // 1. Fetch current neighbourhood item by slug
  const itemRes = await payload.find({
    collection: 'neighbourhood',
    where: {
      slug: {
        equals: decodedSlug,
      },
    },
    depth: 3,
    limit: 1,
  })

  const item = itemRes.docs?.[0] || null

  if (!item) {
    console.warn(`⚠️ Item not found for slug: ${decodedSlug}`)
    notFound()
  }

  // 2. Fetch all neighbourhood items for location (for related items & client search)
  const allNeighbourhoodRes = await payload.find({
    collection: 'neighbourhood',
    where: {
      'locations.locality': {
        equals: decodedLocation,
      },
    },
    depth: 2,
    limit: 500,
  })

  // 3. Fetch All Locations (For SearchBar)
  const allLocationsRes = await payload.find({
    collection: 'chennaiNeighbourhoodlocations',
    limit: 500,
  })

  console.log(`✅ Loaded item: ${item.name || item.title}`)
  console.log(`📊 Found ${allNeighbourhoodRes.docs.length} related neighbourhood docs`)
  console.log('==================================================\n')

  return (
    <NeighbourhoodItemDetailClient
      item={item}
      allNeighbourhoodData={allNeighbourhoodRes.docs}
      locations={allLocationsRes.docs}
      locationId={decodedLocation}
      category={decodedCategory}
      subcategory={decodedSubcategory}
      slug={decodedSlug}
    />
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const decodedSlug = decodeURIComponent(resolvedParams?.slug || '')
  const decodedLocation = decodeURIComponent(resolvedParams?.locationId || '')

  const payload = await getPayload({ config: configPromise })
  const itemRes = await payload.find({
    collection: 'neighbourhood',
    where: {
      slug: {
        equals: decodedSlug,
      },
    },
    limit: 1,
  })

  const item = itemRes.docs?.[0]
  const titleName = item?.name || item?.title || decodedSlug.replace(/-/g, ' ')

  return {
    title: `${titleName} in ${decodedLocation}, Chennai | Super Chennai`,
    description:
      item?.description ||
      `Find location details, timings, contact info, and reviews for ${titleName} in ${decodedLocation}, Chennai.`,
  }
}
