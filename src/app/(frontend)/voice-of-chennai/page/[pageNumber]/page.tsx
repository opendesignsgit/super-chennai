import type { Metadata } from 'next/types'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import { Pagination } from 'src/components/Pagination'
import configPromise from 'src/payload.config'
import PageClient from '../../page.client'
import { ArticlesArchive } from '../../Components/CardArchive'

export const revalidate = 600

type Args = {
  params: Promise<{
    pageNumber: string
  }>
}

export default async function ArticlesPaginatedPage({ params: paramsPromise }: Args) {
  const { pageNumber } = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  const sanitizedPageNumber = Number(pageNumber)
  if (!Number.isInteger(sanitizedPageNumber)) notFound()

  const articlesData = await payload.find({
    collection: 'articles',
    depth: 3,
    limit: 12,
    page: sanitizedPageNumber,
    sort: '-publishedAt',
    overrideAccess: false,
  })

  if (!articlesData.docs.length && sanitizedPageNumber > 1) {
    notFound()
  }

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold text-slate-800">
            Articles Archive - Page {sanitizedPageNumber}
          </h1>
        </div>
      </div>

      <ArticlesArchive articles={articlesData.docs} />

      <div className="container mt-12 flex justify-center">
        {articlesData?.page && articlesData?.totalPages > 1 && (
          <Pagination page={articlesData.page} totalPages={articlesData.totalPages} />
        )}
      </div>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  return {
    title: `Articles and Guides - Page ${pageNumber || ''}`,
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { totalDocs } = await payload.count({
    collection: 'articles',
    overrideAccess: false,
  })

  const totalPages = Math.ceil(totalDocs / 12)
  const pages: { pageNumber: string }[] = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push({ pageNumber: String(i) })
  }

  return pages
}
