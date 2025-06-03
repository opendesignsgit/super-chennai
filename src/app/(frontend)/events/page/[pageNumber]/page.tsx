import type { Metadata } from 'next/types'

import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import Banner from 'src/blocks/InnerPage/SharedBlocks/Banners/Components'
import { Pagination } from 'src/components/Pagination'
import configPromise from 'src/payload.config'
import PageClient from './page.client'

export const revalidate = 600

type Args = {
  params: Promise<{
    pageNumber: string
  }>
}

export default async function Page({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  const sanitizedPageNumber = Number(pageNumber)

  if (!Number.isInteger(sanitizedPageNumber)) notFound()

  const events = await payload.find({
    collection: 'events',
    depth: 1,
    limit: 12,
    page: sanitizedPageNumber,
    overrideAccess: false,
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>events</h1>
        </div>
      </div>
      <Banner />

      {/* <div className="container mb-8">
        <PageRange
          collection="posts"
          currentPage={events.page}
          limit={12}
          totalDocs={events.totalDocs}
        />
      </div> */}

      {/* <CollectionArchive posts={events.docs} /> */}

      <div className="container">
        {events?.page && events?.totalPages > 1 && (
          <Pagination page={events.page} totalPages={events.totalPages} />
        )}
      </div>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  return {
    title: `Payload Website Template events Page ${pageNumber || ''}`,
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { totalDocs } = await payload.count({
    collection: 'events',
    overrideAccess: false,
  })

  const totalPages = Math.ceil(totalDocs / 10)

  const pages: { pageNumber: string }[] = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push({ pageNumber: String(i) })
  }

  return pages
}
