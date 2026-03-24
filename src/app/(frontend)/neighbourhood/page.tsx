import { CollectionArchive } from '@/components/CollectionArchive'
import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import { PageRange } from 'src/components/PageRange'
import { Pagination } from 'src/components/Pagination'
import configPromise from 'src/payload.config'
import '../../../heros/PostHero/style.css'
import PageClient from './page.client'

// NEW
import CategorySidebar from '@/components/neighbourhood/CategorySidebar'
import NeighbourhoodModal from '@/components/neighbourhood/NeighbourhoodModal'
import { AlphabetFilter } from '@/components/neighbourhood/AlphabetFilter'
import Image from 'next/image'
import Link from 'next/link'
import AccodomationBanner from '../../../assets/images/AccodomationBannerr.jpg'
import { AreaFilter } from '@/components/neighbourhood/AreaFilter'
import GlobalSearch from '@/blocks/HomePage/GlobalSearch/Component'
import ExpandFilterButton from '@/components/neighbourhood/ExpandFilterButton'

export const dynamic = 'force-dynamic'
export const revalidate = 60

type Props = {
  searchParams: {
    category?: string
    sub?: string
    location?: string
    q?: string
    alpha?: string
    page?: string
  }
}

export default async function Page({ searchParams }: Props) {
  
  const payload = await getPayload({ config: configPromise })

  const { category, sub, location, q, alpha, page = '1' } = searchParams

  const where: any = {
    and: [
      category && { category: { equals: category } },

      sub && { subCategories: { contains: sub } },

      location && { locations: { equals: location } },

      q && {
        or: [{ title: { contains: q } }, { searchKeywords: { contains: q } }],
      },

      alpha && {
        title: { starts_with: alpha },
      },
    ].filter(Boolean),
  }

  const neighbourhood = await payload.find({
    collection: 'neighbourhood',
    depth: 2,
    limit: 12,
    page: Number(page),
    where,
    sort: '-isSponsored,-isVerified,-priorityRank,-rating',
  })

  // const neighbourhood = await payload.find({
  //   collection: 'neighbourhood',
  //   depth: 1,
  //   limit: 12,
  //   overrideAccess: false,
  //   select: {
  //     title: true,
  //     slug: true,
  //     heroImage: true,
  //     FeaturedImage: true,
  //     content: true,
  //     category: true,
  //     subCategories: true,
  //     tags: true,
  //     gallery: true,
  //     contactInfo: true,
  //     businessHours: true,
  //     priceInfo: true,
  //     socialMedia: true,
  //     companyInfo: true,
  //     serviceOptions: true,
  //     rating: true,
  //     amenities: true,
  //     meta: true,
  //   },
  // })

  const locations = await payload.find({
    collection: 'chennaiNeighbourhoodlocations',
    limit: 200,
  })

  const categories = await payload.find({
    collection: 'neighbourhood-categories',
    depth: 2, // IMPORTANT
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
              <Link href="/">Home</Link> - <Link href="/events">Neighbourhood</Link>
            </div>
          </div>
        </div>
        <div className="notHomePageSearch">
          <GlobalSearch placeholderText={'Explore Chennai'} buttonText={'Search'} />
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

        {/* listing */}
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
              <Pagination page={neighbourhood.page} totalPages={neighbourhood.totalPages} />
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
