import type { Metadata } from 'next/types'
import PageClient from './page.client'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { EventArchive } from '@/components/EventCard/EventArchive'
import Image from 'next/image'
import Link from 'next/link'
import AccodomationBanner from '../../../assets/images/AccodomationBannerr.jpg'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const eventsRes = await payload.find({
    collection: 'cricketScore',
    limit: 100,
    sort: '-createdAt',
  })

  return (
    <div className="pt-24 pb-24">
      <PageClient />

      {/* Banner */}
      <section className="accaodomationBannerSection relative">
        <div className="relative w-full h-[300px]">
          <Image
            src={AccodomationBanner}
            alt="cricketScore"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="accodoamationBannerContainer absolute inset-0 flex items-center">
          <div className="accodoamationBannerText container mx-auto">
            <h3>Trending Chennai Events</h3>

            <div className="breadCrum">
              <Link href="/">Home</Link> - <Link href="/cricketScore">cricketScore</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ONLY CARDS */}
      <div className="container mx-auto mt-10">
        <EventArchive events={eventsRes.docs} />
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Trending Chennai Events | Super Chennai',
  }
}
