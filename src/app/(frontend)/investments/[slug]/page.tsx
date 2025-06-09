import type { Metadata } from 'next'

import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache, Suspense } from 'react'
import { PayloadRedirects } from 'src/components/PayloadRedirects'
import RichText from 'src/components/RichText'
import configPromise from 'src/payload.config'

import InvestCategory from 'src/blocks/InnerPage/SharedBlocks/InvestCategory/Components'
import { LivePreviewListener } from 'src/components/LivePreviewListener'
import { PostHero } from 'src/heros/PostHero'
import { generateMeta } from 'src/utilities/generateMeta'
import PageClient from './page.client'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const investments = await payload.find({
    collection: 'investments',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = investments.docs.map(({ slug }) => {
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
  const url = '/investments/' + slug
  const post = await queryPostBySlug({ slug })

  if (!post) return <PayloadRedirects url={url} />
  console.log('Post data:', post)
  return (
    <div>
      <PageClient />

      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <Suspense fallback={null}>
        <PostHero post={post} />
      </Suspense>

      <div>
        <RichText data={post.content} enableGutter={false} />
        {/* {post.relatedinvestments && post.relatedinvestments.length > 0 && (
          <Relatedinvestments
            className=""
            docs={post.relatedinvestments.filter((post) => typeof post === 'object')}
          />
        )} */}
      </div>
      {/* <InvestCategory data={post} /> */}
      {post && (
        <InvestCategory
          data={{
            id: post.id?.toString() ?? '',
            title: post.title ?? '',
            investments: (post.investments ?? []).map((inv: any) => ({
              id: inv.id?.toString() ?? '',
              slug: inv.slug ?? '',
              title: inv.title ?? inv.sectionTitle ?? 'Untitled',
              sectionTitle: inv.sectionTitle,
              sectionDescription: inv.sectionDescription,
              sectionImage: inv.sectionImage,
              investments: inv.investments,
              investmentItems: inv.investmentItems,
            })),
          }}
        />
      )}
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
    collection: 'investments',
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
