import type { Metadata } from 'next/types'

import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
// import Banner from 'src/blocks/InnerPage/SharedBlocks/Banners/Components'
import { Pagination } from 'src/components/Pagination'
import configPromise from 'src/payload.config'
import PageClient from './page.client'
import { Suspense } from 'react'
import IconOfTheMonthDetails from '../../Components/Details'
// import IconOfTheMonthDetails from '@/components/Summer/SummerDetails'

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

  const iconOfMonthData = await payload.find({
    collection: 'iconOfMonth',
    depth: 3,
    limit: 12,
    page: sanitizedPageNumber,
    overrideAccess: false,
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />
      <div className="container mb-16">
        <div className="prose dark:prose-invert max-w-none">
          <h1>Icon of the Month</h1>
        </div>
      </div>

      {/* <Suspense fallback={null}>
        <Banner />
      </Suspense> */}

      <IconOfTheMonthDetails data={iconOfMonthData} />

      <div className="container">
        {iconOfMonthData?.page && iconOfMonthData?.totalPages > 1 && (
          <Pagination page={iconOfMonthData.page} totalPages={iconOfMonthData.totalPages} />
        )}
      </div>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { pageNumber } = await paramsPromise
  return {
    title: `Icon of the Month Events - Page ${pageNumber || ''}`,
  }
}

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { totalDocs } = await payload.count({
    collection: 'iconOfMonth',
    overrideAccess: false,
  })

  const totalPages = Math.ceil(totalDocs / 10)

  const pages: { pageNumber: string }[] = []

  for (let i = 1; i <= totalPages; i++) {
    pages.push({ pageNumber: String(i) })
  }

  return pages
}