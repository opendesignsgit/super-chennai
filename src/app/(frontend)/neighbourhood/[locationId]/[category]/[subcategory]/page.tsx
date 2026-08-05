import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import configPromise from 'src/payload.config'
import { notFound } from 'next/navigation'
import NeighbourhoodCategoryClient from '../NeighbourhoodCategoryClient'
import NeighbourhoodItemDetailClient from './NeighbourhoodItemDetailClient'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{
    locationId: string
    category: string
    subcategory: string
    slug?: string
  }>
}

export default async function Page({ params }: PageProps) {
  console.log('\n=================== 🐛 DEBUG START 🐛 ===================')
  console.log('🚀 [SERVER PAGE] Smart Dynamic Item / Subcategory Router Hit!')

  const resolvedParams = await params

  console.log('📦 Raw Params Object received:')
  console.dir(resolvedParams, { depth: null })

  const rawLocation = resolvedParams?.locationId || ''
  const rawCategory = resolvedParams?.category || ''
  const rawSubcategory = resolvedParams?.subcategory || ''
  const rawSlug = resolvedParams?.slug || ''

  const decodedLocation = decodeURIComponent(rawLocation).toLowerCase().trim()
  const decodedCategory = decodeURIComponent(rawCategory).toLowerCase().trim()
  const decodedSubcategory = decodeURIComponent(rawSubcategory).toLowerCase().trim()
  const decodedSlug = decodeURIComponent(rawSlug).toLowerCase().trim()

  // 💡 MAGIC RESOLUTION: If slug is empty, target slug IS the subcategory parameter!
  const targetItemSlug = decodedSlug || decodedSubcategory

  console.log('📍 Decoded Location   :', `"${decodedLocation}"`)
  console.log('🏷️ Decoded Category   :', `"${decodedCategory}"`)
  console.log('📂 Decoded Subcategory:', `"${decodedSubcategory}"`)
  console.log('🔗 Actual Target Slug :', `"${targetItemSlug}"`)

  if (!targetItemSlug) {
    console.error('❌ CRITICAL ERROR: Target Item Slug is missing completely!')
    console.log('=================== 🐛 DEBUG END 🐛 ===================\n')
    notFound()
  }

  const payload = await getPayload({ config: configPromise })

  console.log(`🔍 [STEP 1] Fetching item for slug: "${targetItemSlug}" ...`)

  const itemRes = await payload.find({
    collection: 'neighbourhood',
    where: {
      slug: {
        equals: targetItemSlug,
      },
    },
    depth: 3,
    limit: 1,
  })

  let item = itemRes.docs?.[0] ?? null
  // Ensure 'item' is declared using 'let' earlier in your function:
  // let item = itemRes.docs?.[0] ?? null

  // 2. Fallback search (case-insensitive / 'like' match)
  if (!item) {
    console.warn(`⚠️ Exact match failed for "${targetItemSlug}". Trying fallback 'like' query...`)

    const fallbackRes = await payload.find({
      collection: 'neighbourhood',
      where: {
        slug: {
          like: targetItemSlug,
        },
      },
      depth: 3,
      limit: 5,
    })

    item =
      fallbackRes.docs?.find((doc: any) => doc?.slug?.toLowerCase().trim() === targetItemSlug) ??
      null
  }
  // 3. IF ITEM IS FOUND -> RENDER ITEM DETAIL PAGE
  if (item) {
    console.log(`✅ [ITEM FOUND] Name: "${item.name || item.title}" | ID: ${item.id}`)

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

    const allLocationsRes = await payload.find({
      collection: 'chennaiNeighbourhoodlocations',
      limit: 500,
    })

    console.log('=================== 🐛 DEBUG END 🐛 ===================\n')

    return (
      <NeighbourhoodItemDetailClient
        item={item}
        allNeighbourhoodData={allNeighbourhoodRes.docs}
        locations={allLocationsRes.docs}
        locationId={decodedLocation}
        category={decodedCategory}
        subcategory={decodedSubcategory}
        slug={targetItemSlug}
      />
    )
  }

  // 4. IF ITEM NOT FOUND -> FALLBACK TO CATEGORY / SUBCATEGORY LISTING PAGE
  console.warn(`⚠️ No item found matching "${targetItemSlug}". Rendering Subcategory View...`)

  const neighbourhoodDocsRes = await payload.find({
    collection: 'neighbourhood',
    where: {
      'locations.locality': {
        equals: decodedLocation,
      },
    },
    depth: 2,
    limit: 500,
  })

  const allLocationsRes = await payload.find({
    collection: 'chennaiNeighbourhoodlocations',
    limit: 500,
  })

  console.log('=================== 🐛 DEBUG END 🐛 ===================\n')

  return (
    <NeighbourhoodCategoryClient
      data={neighbourhoodDocsRes.docs}
      locations={allLocationsRes.docs}
      locationId={decodedLocation}
      category={decodedCategory}
    />
  )
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params
  const targetSlug = decodeURIComponent(resolvedParams?.slug || resolvedParams?.subcategory || '')
    .toLowerCase()
    .trim()
  const decodedLocation = decodeURIComponent(resolvedParams?.locationId || '')

  try {
    const payload = await getPayload({ config: configPromise })
    const itemRes = await payload.find({
      collection: 'neighbourhood',
      where: {
        slug: {
          equals: targetSlug,
        },
      },
      limit: 1,
    })

    const item = itemRes.docs?.[0]
    if (item) {
      const titleName = item?.name || item?.title || targetSlug.replace(/-/g, ' ')
      return {
        title: `${titleName} in ${decodedLocation}, Chennai | Super Chennai`,
        description:
          item?.description ||
          `Find location details, timings, contact info, and reviews for ${titleName} in ${decodedLocation}, Chennai.`,
      }
    }
  } catch (e) {
    // Fallback if DB query fails
  }

  const formattedName = targetSlug.replace(/-/g, ' ').toUpperCase()
  return {
    title: `${formattedName} in ${decodedLocation} | Super Chennai`,
    description: `Explore options in ${decodedLocation}, Chennai.`,
  }
}
