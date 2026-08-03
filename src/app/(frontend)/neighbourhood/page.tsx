import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import configPromise from 'src/payload.config'
import ChennaiNeighbourhoodClient from './ChennaiNeighbourhoodClient'

export const dynamic = 'force-dynamic'
export const revalidate = 0

type SearchParams = {
  category?: string
  sub?: string
  location?: string
  q?: string
  alpha?: string
  page?: string
}

export default async function Page({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const params = await searchParams
  const payload = await getPayload({ config: configPromise })

  const whereConditions: any = {}

  if (params.location) {
    whereConditions['locality'] = {
      equals: params.location,
    }
  }

  const locationsRes = await payload.find({
    collection: 'chennaiNeighbourhoodlocations',
    where: whereConditions,
    limit: 1000,
  })

  let neighbourhoodData: any[] = []
  if (params.location) {
    const res = await payload.find({
      collection: 'neighbourhood',
      where: {
        'locations.locality': {
          equals: params.location,
        },
      },
      depth: 2,
      limit: 1000,
      sort: '-priorityRank',
    })
    neighbourhoodData = res.docs
  }

  return (
    <ChennaiNeighbourhoodClient
      locations={locationsRes.docs}
      neighbourhoodData={neighbourhoodData}
    />
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Neighbourhoods in Chennai | Super Chennai',
    description:
      'Experience and explore the best neighbourhoods, restaurants, hospitals, schools, and transportation across Chennai.',
  }
}
