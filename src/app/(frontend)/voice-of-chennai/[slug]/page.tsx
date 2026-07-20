import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { PayloadRedirects } from 'src/components/PayloadRedirects'
import configPromise from 'src/payload.config'
import { LivePreviewListener } from 'src/components/LivePreviewListener'
import { generateMeta } from 'src/utilities/generateMeta'
import PageClient from './page.client'
import ArticleDetails from '../Components/Details'

export const dynamic = 'force-dynamic'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function ArticlePage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/articles/' + slug

  const articleData = await queryArticleBySlug({ slug })

  if (!articleData) {
    return <PayloadRedirects url={url} />
  }

  return (
    <article>
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}
      <ArticleDetails data={articleData} />
    </article>
  )
}

/* =========================================================
   SEO & STRUCTURED SCHEMA INTERFACE
========================================================= */
export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const articleData = await queryArticleBySlug({ slug })
  return generateMeta({ doc: articleData })
}

/* =========================================================
   SERVER ACCELERATED CONTROLLER
========================================================= */
const queryArticleBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'articles',
    draft,
    limit: 1,
    depth: 5,
    overrideAccess: true,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
}
