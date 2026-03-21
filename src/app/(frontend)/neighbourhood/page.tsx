import { CollectionArchive } from '@/components/CollectionArchive'
import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import { PageRange } from 'src/components/PageRange'
import { Pagination } from 'src/components/Pagination'
import configPromise from 'src/payload.config'
import '../../../heros/PostHero/style.css'
import PageClient from './page.client'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })
  const neighbourhood = await payload.find({
    collection: 'neighbourhood',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    select: {
      title: true,
      slug: true,
      heroImage: true,
      FeaturedImage: true,
      content: true,
      category: true,
      subCategories: true,
      tags: true,
      gallery: true,
      contactInfo: true,
      businessHours: true,
      priceInfo: true,
      socialMedia: true,
      companyInfo: true,
      serviceOptions: true,
      rating: true,
      amenities: true,
      meta: true,
    },
  })

  return (
    <div className="">
      <PageClient />
      
      <CollectionArchive
        posts={neighbourhood.docs.map((neighbourhood: any) => ({
          ...neighbourhood,
          collection: 'neighbourhood',
          className: '',
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
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Super Chennai EverthinkPost`,
  }
}
