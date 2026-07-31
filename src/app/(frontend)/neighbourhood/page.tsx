
import { CollectionArchive } from '@/components/CollectionArchive'
import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import { PageRange } from 'src/components/PageRange'
import { Pagination } from 'src/components/Pagination'
import configPromise from 'src/payload.config'
import '../../../heros/PostHero/style.css'
import PageClient from './page.client'
import GlobalSearch from '@/blocks/HomePage/GlobalSearch/Component'
import { AlphabetFilter } from '@/components/neighbourhood/AlphabetFilter'
import { AreaFilter } from '@/components/neighbourhood/AreaFilter'
import CategorySidebar from '@/components/neighbourhood/CategorySidebar'
import ExpandFilterButton from '@/components/neighbourhood/ExpandFilterButton'
import Image from 'next/image'
import Link from 'next/link'
import AccodomationBanner from '../../../assets/images/AccodomationBannerr.jpg'

export const dynamic = 'force-dynamic'
export const revalidate = 60

type SearchParams = {
  category?: string
  sub?: string
  location?: string
  q?: string
  alpha?: string
  page?: string
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const params = await searchParams

  const {
    category,
    sub,
    location,
    q,
    alpha,
    page = '1',
  } = params

  const payload = await getPayload({ config: configPromise })

  const where: any = {
    and: [
      category && { category: { equals: category } },
      sub && { subCategories: { contains: sub } },
      location && { locations: { equals: location } },
      q && {
        or: [
          { title: { contains: q } },
          { searchKeywords: { contains: q } },
        ],
      },
      alpha && {
        title: { starts_with: alpha },
      },
    ].filter(Boolean),
  }

  const neighbourhood = await payload.find({
    collection: 'neighbourhood',
    depth: 2,
    limit: 1000,
    page: Number(page),
    where,
    sort: '-isSponsored,-isVerified,-priorityRank,-rating',
  })

  const locations = await payload.find({
    collection: 'chennaiNeighbourhoodlocations',
    limit: 1000,
  })

  const categories = await payload.find({
    collection: 'neighbourhood-categories',
    depth: 2,
  })

  return (
    <div className="neighbourhood-page">
      <PageClient />

      <section className="accaodomationBannerSection relative">
        <div className="relative w-full h-[300px]">
          <Image
            src={AccodomationBanner}
            alt="Chennai Events"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="accodoamationBannerContainer absolute inset-0 flex items-center">
          <div className="accodoamationBannerText container mx-auto">
            <h3>Neighbourhood</h3>

            <div className="breadCrum">
              <Link href="/">Home</Link> -{' '}
              <Link href="/events">Neighbourhood</Link>
            </div>
          </div>
        </div>

        <div className="notHomePageSearch">
          <GlobalSearch
            placeholderText={'Explore Chennai'}
            buttonText={'Search'}
          />
        </div>
      </section>
      <ExpandFilterButton categories={categories.docs} />
      <AlphabetFilter />
      <div className="mt-6">
        <AreaFilter areas={locations.docs} />
      </div>

      <div className="container grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <CategorySidebar categories={categories.docs} />
        </div>

        <div className="col-span-9">
          <CollectionArchive
            posts={neighbourhood.docs.map((item: any) => ({
              ...item,
              collection: 'neighbourhood',
            }))}
            relationTo="neighbourhood"
          />

          <div className="container">
            {neighbourhood.totalPages > 1 && neighbourhood.page && (
              <Pagination
                page={neighbourhood.page}
                totalPages={neighbourhood.totalPages}
              />
            )}
          </div>

          <div className="container mb-8">
            <PageRange
              collection="posts"
              currentPage={neighbourhood.page}
              limit={12}
              totalDocs={neighbourhood.totalDocs}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Neighbourhood | Super Chennai`,
  }
}