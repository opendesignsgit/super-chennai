// import type { Metadata } from 'next/types'
// import PageClient from './page.client'
// import { Pagination } from '@/components/Pagination'
// import { PageRange } from '@/components/PageRange'
// import { getEvents } from '@/lib/getEvents'
// import FilterTopbar from '@/components/EventCard/FilterTopbar'
// import SortBy from '@/components/EventCard/SortDropdown'
// import { EventArchive } from '@/components/EventCard/EventArchive'
// import { EventFiltersSidebar } from '@/components/EventCard/EventFilters'
// import { getPayload } from 'payload'
// import configPromise from '@/payload.config'
// import Image from 'next/image'
// import Link from 'next/link'
// import AccodomationBanner from '../../../assets/images/AccodomationBannerr.jpg'

// export const dynamic = 'force-dynamic'
// export const revalidate = 0

// type Props = {

//   searchParams: {
//     category?: string
//     language?: string
//     location?: string
//     free?: string
//     family?: string
//     startDate?: string
//     endDate?: string
//     sort?: string
//     page?: string
//   }
// }

// export default async function Page({ searchParams }:
  
  
//   Props) {
 
 
 
//   const payload = await getPayload({ config: configPromise })
//   const categoriesRes = await payload.find({
//     collection: 'eventsCategories',
//     limit: 100,
//   })
//   const categories = categoriesRes.docs
//   const filters = {
//     categories: searchParams?.category?.split(','),
//     languages: searchParams?.language?.split(','),
//     locations: searchParams?.location?.split(','),
//     freeEntry: searchParams?.free === 'true',
//     familyFriendly: searchParams?.family === 'true',
//     startDate: searchParams?.startDate,
//     endDate: searchParams?.endDate,
//   }
//   const events = await getEvents(filters, searchParams?.sort)

//   return (
//     <div className="pt-24 pb-24">
//       <PageClient />
//       <section className="accaodomationBannerSection relative">
//         <div className="relative w-full h-[300px]">
//           <Image
//             src={AccodomationBanner}
//             alt="Chennai Events"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>

//         <div className="accodoamationBannerContainer absolute inset-0 flex items-center">
//           <div className="accodoamationBannerText container mx-auto">
//             <h3>Chennai Events</h3>

//             <div className="breadCrum">
//               <Link href="/">Home</Link> - <Link href="/events">Events</Link>
//             </div>
//           </div>
//         </div>

//         <div className="notHomePageSearch"></div>
//       </section>

//       <div className="container mx-auto mt-10">
//         <FilterTopbar categories={categories} />
//         <div className="grid grid-cols-12 gap-6">
//           {/* sidebar filter */}
//           <div className="col-span-3 hidden lg:block">
//             <EventFiltersSidebar
//               categories={categories}
//               languages={[
                // { label: 'Tamil', value: 'tamil' },
                // { label: 'Telugu', value: 'telugu' },
                // { label: 'Malayalam', value: 'malayalam' },
                // { label: 'Kannada', value: 'kannada' },
                // { label: 'Hindi', value: 'hindi' },
                // { label: 'Bengali', value: 'bengali' },
                // { label: 'Marathi', value: 'marathi' },
                // { label: 'Gujarati', value: 'gujarati' },
                // { label: 'Punjabi', value: 'punjabi' },
                // { label: 'Odia', value: 'odia' },
                // { label: 'Urdu', value: 'urdu' },
                // { label: 'Sanskrit', value: 'sanskrit' },
                // { label: 'English', value: 'english' },
                // { label: 'German', value: 'german' },
//               ]}
//             />
//           </div>

//           {/* right content */}
//           <div className="col-span-12 lg:col-span-9">
//             {/* top bar */}
//             <div className="flex justify-between mb-6">
//               <PageRange
//                 collection="events"
//                 currentPage={events.page}
//                 limit={12}
//                 totalDocs={events.totalDocs}
//               />

//               <SortBy />
//             </div>

//             {/* cards */}
//             <EventArchive events={events.docs} />

//             {/* pagination */}
//             <div className="mt-10">
//               {events.totalPages > 1 && events.page && (
//                 <Pagination page={events.page} totalPages={events.totalPages} />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export function generateMetadata(): Metadata {
//   return {
//     title: 'Chennai Events | Super Chennai',
//   }
// }
import type { Metadata } from 'next/types'
import PageClient from './page.client'
import { Pagination } from '@/components/Pagination'
import { PageRange } from '@/components/PageRange'
import { getEvents } from '@/lib/getEvents'
import FilterTopbar from '@/components/EventCard/FilterTopbar'
import SortBy from '@/components/EventCard/SortDropdown'
import { EventArchive } from '@/components/EventCard/EventArchive'
import { EventFiltersSidebar } from '@/components/EventCard/EventFilters'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import Image from 'next/image'
import Link from 'next/link'
import AccodomationBanner from '../../../assets/images/AccodomationBannerr.jpg'

export const dynamic = 'force-dynamic'
export const revalidate = 0

type SearchParams = {
  category?: string
  language?: string
  location?: string
  free?: string
  family?: string
  startDate?: string
  endDate?: string
  sort?: string
  page?: string
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const params = await searchParams

  const payload = await getPayload({ config: configPromise })

  const categoriesRes = await payload.find({
    collection: 'eventsCategories',
    limit: 100,
  })

  const categories = categoriesRes.docs

  const filters = {
    categories: params?.category?.split(','),
    languages: params?.language?.split(','),
    locations: params?.location?.split(','),
    freeEntry: params?.free === 'true',
    familyFriendly: params?.family === 'true',
    startDate: params?.startDate,
    endDate: params?.endDate,
  }

  const events = await getEvents(filters, params?.sort)

  return (
    <div className="pt-24 pb-24">
      <PageClient />

      <section className="accaodomationBannerSection relative">
        <div className="relative w-full h-[300px]">
          <Image
            src={AccodomationBanner}
            alt="Chennai Events"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="accodoamationBannerContainer absolute inset-0 flex items-center">
          <div className="accodoamationBannerText container mx-auto">
            <h3>Chennai Events</h3>

            <div className="breadCrum">
              <Link href="/">Home</Link> - <Link href="/events">Events</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto mt-10">
        <FilterTopbar categories={categories} />

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3 hidden lg:block">
            <EventFiltersSidebar
              categories={categories}
              languages={[
                { label: 'Tamil', value: 'tamil' },
                { label: 'Telugu', value: 'telugu' },
                { label: 'Malayalam', value: 'malayalam' },
                { label: 'Kannada', value: 'kannada' },
                { label: 'Hindi', value: 'hindi' },
                { label: 'Bengali', value: 'bengali' },
                { label: 'Marathi', value: 'marathi' },
                { label: 'Gujarati', value: 'gujarati' },
                { label: 'Punjabi', value: 'punjabi' },
                { label: 'Odia', value: 'odia' },
                { label: 'Urdu', value: 'urdu' },
                { label: 'Sanskrit', value: 'sanskrit' },
                { label: 'English', value: 'english' },
                { label: 'German', value: 'german' },
              ]}
            />
          </div>

          <div className="col-span-12 lg:col-span-9">
            <div className="flex justify-between mb-6">
              <PageRange
                collection="events"
                currentPage={events.page}
                limit={12}
                totalDocs={events.totalDocs}
              />

              <SortBy />
            </div>

            <EventArchive events={events.docs} />

            <div className="mt-10">
              {events.totalPages > 1 && events.page && (
                <Pagination page={events.page} totalPages={events.totalPages} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: 'Chennai Events | Super Chennai',
  }
}