import configPromise from '@/payload.config'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import PageClient from './page.client'
import LexicalRenderer from '@/components/lexical/LexicalRenderer'
import { ArticlesArchive } from './Components/CardArchive'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function ArticlesRootPage() {
  const payload = await getPayload({ config: configPromise })

  const articlesRes = await payload.find({
    collection: 'articles',
    limit: 12, // Standard initial screen grid sizing
    sort: '-publishedAt',
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
    <div className="pb-24">
      <PageClient />

      {/* Modern Overlay Banner Section */}
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

      {/* Lexical Framework Rendering Injection */}
      <div className="container mx-auto mt-8">
        <LexicalRenderer content={pageSettings?.content} />
      </div>

      {/* Grid Elements Engine Wrapper */}
      <div className="mx-auto mt-6">
        <ArticlesArchive articles={articlesRes.docs} />
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Articles, Guides & Stories | Super Chennai',
  }
}
