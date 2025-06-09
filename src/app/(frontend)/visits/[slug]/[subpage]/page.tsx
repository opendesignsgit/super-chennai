import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache, Suspense } from 'react'
import configPromise from 'src/payload.config'
import { LivePreviewListener } from 'src/components/LivePreviewListener'
import { PayloadRedirects } from 'src/components/PayloadRedirects'
import RichText from 'src/components/RichText'
import { PostHero } from 'src/heros/PostHero'
import { notFound } from 'next/navigation'

// 1. Generate Static Params for all visit + subpage combinations
export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })

  const results = await payload.find({
    collection: 'visits',
    depth: 4,
  })

  const allParams =
    results.docs.flatMap((visit: any) => {
      const subpages = Array.isArray(visit.subpages) ? visit.subpages : []

      return subpages.map((subpage: any) => ({
        slug: visit.slug,
        subpage: typeof subpage === 'string' ? subpage : subpage?.slug || '',
      }))
    }) || []

  return allParams.filter((param) => param.subpage)
}

// 2. Subpage query function
const querySubpageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'hotels',
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

// 3. Page component
type Params = {
  params: {
    slug: string
    subpage: string
  }
}

export default async function VisitSubpagePage({ params }: any) {
  const { slug, subpage } = params

  console.log('params', params)
  const { isEnabled: draft } = await draftMode()

  const url = `/visits/${slug}/${subpage}`
  const post = await querySubpageBySlug({ slug: subpage })

  if (!post) {
    notFound()
  }

  return (
    <div>
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}
      <Suspense fallback={null}>
        <PostHero post={post} />
      </Suspense>
      <RichText data={post.content} enableGutter={false} />
    </div>
  )
}
