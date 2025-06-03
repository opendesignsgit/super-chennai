import type { Metadata } from 'next'

import { PayloadRedirects } from 'src/components/PayloadRedirects'
import RichText from 'src/components/RichText'
import configPromise from 'src/payload.config'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache, Suspense } from 'react'

import { LivePreviewListener } from 'src/components/LivePreviewListener'
import { PostHero } from 'src/heros/PostHero'
import { generateMeta } from 'src/utilities/generateMeta'
import PageClient from './page.client'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const visits = await payload.find({
    collection: 'visits',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = visits.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/visits/' + slug
  const post = await queryPostBySlug({ slug })

  if (!post) return <PayloadRedirects url={url} />

  return (
    <div>
      <PageClient />

      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      {/* <PostHero post={post} /> */}
      <Suspense fallback={null}>
        <PostHero post={post} />
      </Suspense>

      <div>
        <RichText data={post.content} enableGutter={false} />
        {/* {post.relatedvisits && post.relatedvisits.length > 0 && (
          <RelatedVisits
            className=""
            docs={post.relatedvisits.filter((post) => typeof post === 'object')}
          />
        )} */}
      </div>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'visits',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
