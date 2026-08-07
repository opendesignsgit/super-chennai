import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import configPromise from 'src/payload.config'
import NeighbourhoodCategoryClient from './NeighbourhoodCategoryClient'

export const dynamic = 'force-dynamic'

interface PageProps {
  params: Promise<{
    locationId: string
    category: string
  }>
}

export default async function Page({ params }: PageProps) {
  console.log('\n==================================================')
  console.log('🚀 [SERVER PAGE] Category Page Route Hit!')

  const resolvedParams = await params
  const rawLocation = resolvedParams?.locationId || ''
  const rawCategory = resolvedParams?.category || ''

  const decodedLocation = decodeURIComponent(rawLocation)
  const decodedCategory = decodeURIComponent(rawCategory)

  console.log('📍 Decoded Location:', decodedLocation)
  console.log('🏷️ Decoded Category:', decodedCategory)

  const payload = await getPayload({ config: configPromise })

  // 1. Fetch All Locations (For SearchBar & Dropdowns)
  const allLocationsRes = await payload.find({
    collection: 'chennaiNeighbourhoodlocations',
    limit: 500,
  })

  // 2. Fetch Neighbourhood Documents for this location
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

  if (!neighbourhoodDocsRes.docs || neighbourhoodDocsRes.docs.length === 0) {
    console.warn(`⚠️ No neighbourhood records found for location: ${decodedLocation}`)
  }

  console.log(
    `📊 Fetched ${neighbourhoodDocsRes.docs.length} neighbourhood docs for ${decodedLocation}`,
  )
  console.log('🚀 Rendering NeighbourhoodCategoryClient...')
  console.log('==================================================\n')

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
  const decodedLocation = decodeURIComponent(resolvedParams?.locationId || '')
  const decodedCategory = decodeURIComponent(resolvedParams?.category || '')

  const formattedCat = decodedCategory.replace(/-/g, ' ').toUpperCase()

  return {
    title: `${formattedCat} in ${decodedLocation} | Super Chennai`,
    description: `Explore top recommended ${formattedCat.toLowerCase()} spots and local options around ${decodedLocation}, Chennai.`,
  }
}