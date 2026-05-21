import type { Metadata } from 'next'

import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache, Suspense } from 'react'

import configPromise from 'src/payload.config'

import { PayloadRedirects } from 'src/components/PayloadRedirects'
import { LivePreviewListener } from 'src/components/LivePreviewListener'
import { PostHero } from 'src/heros/PostHero'
import { generateMeta } from 'src/utilities/generateMeta'

import PageClient from './page.client'
import TrendingChennaiDetails from '@/components/TrendingChennai/TrendingDetails'

// ✅ CHANGE THIS

export async function generateStaticParams() {
  const payload = await getPayload({
    config: configPromise,
  })

  const trendingChennai = await payload.find({
    collection: 'trendingChennai',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  return trendingChennai.docs.map(({ slug }) => ({
    slug,
  }))
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()

  const { slug = '' } = await paramsPromise

  const url = '/trendingChennai/' + slug

  const post = await queryPostBySlug({ slug })

  // ✅ DEBUG
  console.log('Trending Chennai Post =>', post)

  if (!post) {
    return <PayloadRedirects url={url} />
  }

  return (
    <div>
      <PageClient />

      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <Suspense fallback={null}>
        <div className="post-hero-wrapper">
          <PostHero post={post} />
        </div>
      </Suspense>

      {/* ✅ CHANGE EVENT DETAILS TO TRENDING DETAILS */}
      <div>
        <TrendingChennaiDetails data={post} />
      </div>
    </div>
  )
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise

  const trendingChennai = await queryPostBySlug({ slug })

  return generateMeta({
    doc: trendingChennai,
  })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({
    config: configPromise,
  })

  const result = await payload.find({
    collection: 'trendingChennai',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,

    // ✅ IMPORTANT
    depth: 2,

    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})