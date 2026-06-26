import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { cache, Suspense } from 'react'
import { getPayload } from 'payload'

import configPromise from '@/payload.config'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'

import PageClient from './page.client'
import TrendingChennaiDetails from '@/components/TrendingChennai/TrendingDetails'

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

export default async function TrendingChennaiPost({
  params: paramsPromise,
}: Args) {
  const { isEnabled: draft } = await draftMode()

  const { slug = '' } = await paramsPromise

  const url = '/trending-chennai/' + slug

  const post = await queryPostBySlug({ slug })

  console.log('Trending Chennai Detail Page =>', post)

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
    depth: 3,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})