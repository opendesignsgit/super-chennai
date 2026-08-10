import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import PropertiesClientPage from './PropertiesClientPage'

export const revalidate = 600

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function Page({ searchParams }: PageProps) {
  const resolvedParams = await searchParams

  const payload = await getPayload({ config: configPromise })

  const initialData = await payload.find({
    collection: 'properties',
    depth: 1,
    limit: 12,
    overrideAccess: false,
    sort: '-createdAt',
  })

  const properties = initialData.docs.map((doc: any) => ({
    ...doc,
    id: doc.id,
  }))

  return (
    <PropertiesClientPage
      initialProperties={properties}
      totalResults={initialData.totalDocs}
      totalPages={initialData.totalPages}
      currentPage={resolvedParams.page ? Number(resolvedParams.page) : 1}
    />
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Properties in Chennai | Buy, Rent & Lease | Super Chennai',
    description:
      'Explore verified properties in Chennai. Browse plots, apartments, villas, and commercial real estate with complete pricing and location details.',
    alternates: {
      canonical: 'https://www.superchennai.com/properties',
    },
    openGraph: {
      title: 'Properties in Chennai | Super Chennai',
      description: 'Explore top verified properties in Chennai.',
      url: 'https://www.superchennai.com/properties',
      siteName: 'Super Chennai',
      type: 'website',
    },
  }
}
