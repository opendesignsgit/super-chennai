import type { Metadata } from 'next'

import { PayloadRedirects } from 'src/components/PayloadRedirects'
import configPromise from 'src/payload.config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache, Suspense } from 'react'
import RichText from 'src/components/RichText'

import { generateMeta } from 'src/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from 'src/components/LivePreviewListener'
import { PostHero } from '@/heros/PostHero'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const work = await payload.find({
    collection: 'work',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = work.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Work({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/work/' + slug
  const work = await queryworkBySlug({ slug })

  if (!work) return <PayloadRedirects url={url} />

  return (
    <div>
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      {/* <workHero work={work} /> */}
          <Suspense fallback={null}>
              <PostHero post={work} />
            </Suspense>

      <div>
        <RichText data={work.content} enableGutter={false} />
        {/* {work.relatedwork && work.relatedwork.length > 0 && (
          <RelatedWork
            className=""
            docs={work.relatedwork.filter((work) => typeof work === 'object')}
          />
        )} */}
      </div>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const work = await queryworkBySlug({ slug })

  return generateMeta({ doc: work })
}

const queryworkBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'work',
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
