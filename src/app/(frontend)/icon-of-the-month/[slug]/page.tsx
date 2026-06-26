import type { Metadata } from 'next'

/* =========================================================
   IMPORTANT
   Prevent Next.js static cache
========================================================= */

export const dynamic = 'force-dynamic'

import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { PayloadRedirects } from 'src/components/PayloadRedirects'
import configPromise from 'src/payload.config'
import { LivePreviewListener } from 'src/components/LivePreviewListener'
import { generateMeta } from 'src/utilities/generateMeta'
import PageClient from './page.client'
import IconOfTheMonthDetails from '../Components/Details'

/* =========================================================
   TYPES
========================================================= */

type Args = {
  params: Promise<{
    slug?: string
  }>
}

/* =========================================================
   PAGE
========================================================= */

export default async function IconOfTheMonthPage({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()

  const { slug = '' } = await paramsPromise

  const url = '/icon-of-the-month/' + slug

  const iconOfMonthData = await queryPostBySlug({
    slug,
  })

  if (!iconOfMonthData) {
    return <PayloadRedirects url={url} />
  }

  return (
    <div>
      <PageClient />
      <PayloadRedirects disableNotFound url={url} />
      {draft && <LivePreviewListener />}
      <div>
        <IconOfTheMonthDetails data={iconOfMonthData} />
      </div>
    </div>
  )
}

/* =========================================================
   SEO
========================================================= */

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise

  const iconOfMonthData = await queryPostBySlug({
    slug,
  })
  return generateMeta({
    doc: iconOfMonthData as any,
    collection: 'iconOfMonth',
  })
}

/* =========================================================
   QUERY
========================================================= */

const queryPostBySlug = async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({
    config: configPromise,
  })
  const result = await payload.find({
    collection: 'iconOfMonth',
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
