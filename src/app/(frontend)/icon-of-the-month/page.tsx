import configPromise from '@/payload.config'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next/types'
import { getPayload } from 'payload'
import PageClient from './page.client'
import { IconOfTheMonth } from './Components/CardArchive'
import LexicalRenderer from '@/components/lexical/LexicalRenderer'

export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const eventsRes = await payload.find({
    collection: 'iconOfMonth',
    limit: 100,
    sort: '-createdAt',
  })

  const pageSettings = await payload.findGlobal({
    slug: 'iconOfMonthLandingPage',
    depth: 1,
  })

  console.log('pageSettings', pageSettings)

  const desktopImage =
    pageSettings?.desktopImage && typeof pageSettings.desktopImage === 'object'
      ? pageSettings.desktopImage
      : null

  const mobileImage =
    pageSettings?.mobileImage && typeof pageSettings.mobileImage === 'object'
      ? pageSettings.mobileImage
      : null

  console.log(JSON.stringify(pageSettings?.content, null, 2))

  return (
    <div className="pb-24">
      <PageClient />

      <section className="accaodomationBannerSection relative">
        <div className="relative w-full h-[400px]">
         
          {desktopImage && typeof desktopImage !== 'string' && (
            <Image
              src={desktopImage.url || ''}
              alt={desktopImage.alt || pageSettings.title}
              fill
              priority
              className="hidden md:block object-cover"
            />
          )}
      
          {mobileImage && typeof mobileImage !== 'string' && (
            <Image
              src={mobileImage.url || ''}
              alt={mobileImage.alt || pageSettings.title}
              fill
              priority
              className="block md:hidden object-cover"
            />
          )}

        </div>

        <div className="accodoamationBannerContainer absolute flex items-center">
          <div className="accodoamationBannerText container mx-auto">
            <h3>{pageSettings?.title}</h3>
            <div className="breadCrum">
              <Link href="/">Home</Link> -{' '}
              <Link href="/icon-of-the-month">{pageSettings?.title}</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="">
        <LexicalRenderer content={pageSettings?.content} />
      </div>

      <div className="mx-auto ">
        <IconOfTheMonth events={eventsRes.docs} />
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Icon of the Month Events | Super Chennai',
  }
}
