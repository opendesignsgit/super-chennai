import configPromise from '@/payload.config'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import PageClient from './page.client'
import ArticleListingClientLayout from './Components/ArticleListingClientLayout'
import LexicalRenderer from '@/components/lexical/LexicalRenderer'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function ArticleListPage() {
  const payload = await getPayload({ config: configPromise })

  const articlesRes = await payload.find({
    collection: 'articles',
    limit: 100,
    sort: '-publishedAt',
    depth: 2,
  })
  const allArticles = articlesRes.docs || []

  const adsRes = await payload.find({
    collection: 'ads',
    limit: 100,
    where: {
      showOnArticles: {
        equals: true,
      },
      Adsstatus: {
        equals: 'active',
      },
    },
    depth: 2,
  })
  const rawAds = adsRes.docs || []

  const [todayIso = ''] = new Date().toISOString().split('T')

  const activeAds = rawAds.filter((ad: any) => {
    const start = ad.startDate ? ad.startDate.split('T')[0] : null
    const end = ad.endDate ? ad.endDate.split('T')[0] : null

    if (start && todayIso < start) return false
    if (end && todayIso > end) return false

    return true
  })

  const pageSettings = await payload.findGlobal({
    slug: 'articlesLandingPage',
    depth: 1,
  })

  const desktopImage =
    pageSettings?.desktopImage && typeof pageSettings.desktopImage === 'object'
      ? pageSettings.desktopImage
      : null
  const mobileImage =
    pageSettings?.mobileImage && typeof pageSettings.mobileImage === 'object'
      ? pageSettings.mobileImage
      : null

  return (
    <>
      <PageClient />

      <section className="accaodomationBannerSection relative">
        <div className="relative w-full h-[400px]">
          {desktopImage && (
            <Image
              src={desktopImage.url || ''}
              alt={desktopImage.alt || pageSettings.title || 'Articles'}
              fill
              priority
              className="hidden md:block object-cover"
            />
          )}
          {mobileImage && (
            <Image
              src={mobileImage.url || ''}
              alt={mobileImage.alt || pageSettings.title || 'Articles'}
              fill
              priority
              className="block md:hidden object-cover"
            />
          )}
        </div>

        <div className="accodoamationBannerContainer absolute flex items-center">
          <div className="accodoamationBannerText container mx-auto">
            <h3>{pageSettings?.title}</h3>
            <div className="breadCrum">
              <Link href="/">Home</Link> - <Link href="/articles">{pageSettings?.title}</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto mt-8">
        <LexicalRenderer content={pageSettings?.content} />
      </div>

      <ArticleListingClientLayout articles={allArticles} ads={activeAds} />
    </>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Voice of Chennai: Stories, Insights & Articles That Define the City',
    description:
      'From neighborhoods to innovation, explore Chennai’s journey through curated articles that capture its true voice, cultural depth & evolving urban transformation.',
  }
}
