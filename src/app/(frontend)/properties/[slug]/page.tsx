import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from 'src/payload.config'
import PropertyDetailsClient from './PropertyDetailsClient'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface PageProps {
  params: Promise<{ slug?: string }>
}

async function fetchPropertyDataBySlug(slug: string | undefined) {
  if (!slug) return null

  try {
    const payload = await getPayload({ config: configPromise })
    
    const res = await payload.find({
      collection: 'properties', 
      where: {
        slug: {
          equals: slug,
        },
      },
      limit: 1,
      depth: 2,
    })

    return res.docs[0] || null
  } catch (error) {
    console.error('Payload fetch error:', error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const property = await fetchPropertyDataBySlug(slug)

  const imageUrl =
    property?.heroImage && typeof property.heroImage === 'object' && 'url' in property.heroImage
      ? (property.heroImage.url as string)
      : '/images/default-hero.jpg'

  return {
    title: property?.meta?.title || property?.title || 'Property Details',
    description: property?.meta?.description || 'View details for this property listing.',
    openGraph: {
      images: [imageUrl],
    },
  }
}

export default async function PropertyPage({ params }: PageProps) {
  const { slug } = await params
  const property = await fetchPropertyDataBySlug(slug)

  if (!property) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <p className="text-gray-500 font-medium">Property not found.</p>
      </div>
    )
  }

  return <PropertyDetailsClient property={property} />
}