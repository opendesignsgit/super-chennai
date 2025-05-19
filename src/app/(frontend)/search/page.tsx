// import type { Metadata } from 'next/types'

// import { CollectionArchive } from '@/components/CollectionArchive'
// import configPromise from '@payload-config'
// import { getPayload } from 'payload'
// import React from 'react'
// // import { Search } from '@/search/Component'
// import PageClient from './page.client'
// import { CardPostData } from '@/components/Card'
// import GlobalSearch from '@/blocks/HomePage/GlobalSearch/Component'

// type Args = {
//   searchParams: Promise<{
//     q: string
//   }>
// }
// export default async function Page({ searchParams: searchParamsPromise }: Args) {
//   const { q: query } = await searchParamsPromise
//   const payload = await getPayload({ config: configPromise })

//   const posts = await payload.find({
//     collection: 'search',
//     depth: 1,
//     limit: 12,
//     select: {
//       title: true,
//       slug: true,
//       categories: true,
//       meta: true,
//     },
//     // pagination: false reduces overhead if you don't need totalDocs
//     pagination: false,
//     ...(query
//       ? {
//           where: {
//             or: [
//               {
//                 title: {
//                   like: query,
//                 },
//               },
//               {
//                 'meta.description': {
//                   like: query,
//                 },
//               },
//               {
//                 'meta.title': {
//                   like: query,
//                 },
//               },
//               {
//                 slug: {
//                   like: query,
//                 },
//               },
//             ],
//           },
//         }
//       : {}),
//   })

//   const pages = await payload.find({
//     collection: 'pages',
//     depth: 1,
//     limit: 12,
//     select: {
//       title: true,
//       slug: true,
//       meta: true,
//     },
//     pagination: false,
//     ...(query
//       ? {
//           where: {
//             or: [
//               { title: { like: query } },
//               { 'meta.title': { like: query } },
//               { 'meta.description': { like: query } },
//               { slug: { like: query } },
//             ],
//           },
//         }
//       : {}),
//   })

//   console.log('📄 Pages Search Result:', pages)

//   // const collectionsToSearch = ['pages', 'posts', 'visits']
//   // const results = await Promise.all(
//   //   collectionsToSearch.map(async (collection) => {
//   //     const res = await payload.find({
//   //       collection,
//   //       depth: 1,
//   //       limit: 10,
//   //       select: {
//   //         title: true,
//   //         slug: true,
//   //         meta: true,
//   //       },
//   //       pagination: false,
//   //       ...(query
//   //         ? {
//   //             where: {
//   //               or: [
//   //                 { title: { like: query } },
//   //                 { 'meta.title': { like: query } },
//   //                 { 'meta.description': { like: query } },
//   //                 { slug: { like: query } },
//   //               ],
//   //             },
//   //           }
//   //         : {}),
//   //     })

//   //     return {
//   //       collection,
//   //       docs: res.docs,
//   //     }
//   //   }),
//   // )

// const allCollections = Object.values(payload.config.collections)
//   .map((col) => col.slug)
//   .filter(Boolean)
// console.log('🔍 Searching in collections:', allCollections)

//   return (
//     <div className="pt-24 pb-24">
//       <PageClient />
//       <div className="container mb-16">
//         <div className="prose dark:prose-invert max-w-none text-center">
//           <h1 className="mb-8 lg:mb-16">Search</h1>

//           <div className="max-w-[50rem] mx-auto">
//             {/* <Search /> */}
//             <GlobalSearch placeholderText={'Explore chennai'} buttonText={'Search'} />
//           </div>
//         </div>
//       </div>

//       {posts.totalDocs > 0 ? (
//         <CollectionArchive posts={posts.docs as CardPostData[]} />
//       ) : (
//         <div className="container">No results found.</div>
//       )}
//     </div>
//   )
// }

// export function generateMetadata(): Metadata {
//   return {
//     title: `Payload Website Template Search`,
//   }
// }

// import type { Metadata } from 'next/types'

// import { CollectionArchive } from '@/components/CollectionArchive'
// import configPromise from '@payload-config'
// import { getPayload } from 'payload'
// import React from 'react'
// import PageClient from './page.client'
// import { CardPostData } from '@/components/Card'
// import GlobalSearch from '@/blocks/HomePage/GlobalSearch/Component'

// type Args = {
//   searchParams: Promise<{
//     q: string
//   }>
// }

// export default async function Page({ searchParams: searchParamsPromise }: Args) {
//   const { q: query } = await searchParamsPromise
//   const payload = await getPayload({ config: configPromise })

//   // Search posts collection
//   const posts = await payload.find({
//     collection: 'posts',
//     depth: 1,
//     limit: 12,
//     select: {
//       title: true,
//       slug: true,
//       categories: true,
//       meta: true,
//     },
//     pagination: false,
//     ...(query
//       ? {
//           where: {
//             or: [
//               { title: { like: query } },
//               { 'meta.description': { like: query } },
//               { 'meta.title': { like: query } },
//               { slug: { like: query } },
//             ],
//           },
//         }
//       : {}),
//   })

//   // Search visits collection
//   const visits = await payload.find({
//     collection: 'visits',
//     depth: 1,
//     limit: 12,
//     select: {
//       title: true,
//       slug: true,
//       meta: true,
//     },
//     pagination: false,
//     ...(query
//       ? {
//           where: {
//             or: [
//               { title: { like: query } },
//               { 'meta.title': { like: query } },
//               { 'meta.description': { like: query } },
//               { slug: { like: query } },
//             ],
//           },
//         }
//       : {}),
//   })

//   return (
//     <div className="pt-24 pb-24">
//       <PageClient />
//       <div className="container mb-16">
//         <div className="prose dark:prose-invert max-w-none text-center">
//           <h1 className="mb-8 lg:mb-16">Search</h1>

//           <div className="max-w-[50rem] mx-auto">
//             <GlobalSearch placeholderText={'Explore chennai'} buttonText={'Search'} />
//           </div>
//         </div>
//       </div>

//       {posts.totalDocs > 0 && (
//         <CollectionArchive
//           posts={posts.docs.map((doc) => ({ ...doc, collection: 'posts' })) as CardPostData[]}
//         />
//       )}

//       {visits.totalDocs > 0 && (
//         <CollectionArchive
//           posts={visits.docs.map((doc) => ({ ...doc, collection: 'visits' })) as CardPostData[]}
//         />
//       )}

//       {posts.totalDocs === 0 && visits.totalDocs === 0 && (
//         <div className="container">No results found.</div>
//       )}
//     </div>
//   )
// }

// export function generateMetadata(): Metadata {
//   return {
//     title: `Payload Website Template Search`,
//   }
// }

import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Card } from '@/components/Card'
import GlobalSearch from '@/blocks/HomePage/GlobalSearch/Component'

type Args = {
  searchParams: Promise<{ q?: string }>
}
export default async function Page({ searchParams: searchParamsPromise }: Args) {
  const { q: query } = await searchParamsPromise
  const payload = await getPayload({ config: configPromise })

  // const collectionsToSearch = Object.values(payload.config.collections)
  //   .filter((col) => {
  //     const fieldNames = col.fields
  //       ?.filter((f) => 'name' in f)
  //       .map((f) => (f as { name: string }).name)
  //     return (
  //       fieldNames?.includes('title') &&
  //       fieldNames?.includes('slug') &&
  //       fieldNames?.includes('description') &&
  //       fieldNames?.includes('meta')
  //     )
  //   })
  //   .map((col) => col.slug)
  
  const collectionsToSearch = ['pages', 'posts', 'visits', 'work']
  const results = await Promise.all(
    collectionsToSearch.map(async (collection) => {
      const res = await payload.find({
        collection,
        limit: 12,
        depth: 1,
        select: {
          title: true,
          slug: true,
          categories: true,
          meta: true,
        },
        pagination: false,
        ...(query
          ? {
              where: {
                or: [
                  { title: { like: query } },
                  { 'meta.title': { like: query } },
                  { 'meta.description': { like: query } },
                  { slug: { like: query } },
                ],
              },
            }
          : {}),
      })

      return res.docs.map((doc) => ({ ...doc, collection }))
    }),
  )
  const allDocs = results.flat()
  return (
    <div className="pt-24 pb-24">
      <div className="container mb-16">
        <h1 className="text-center text-3xl mb-8">Search Results</h1>
        <div className="max-w-[50rem] mx-auto">
          <GlobalSearch placeholderText={'Explore chennai'} buttonText={'Search'} />
        </div>
        {allDocs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allDocs.map((doc) => (
              <Card key={`${doc.collection}-${doc.slug}`} doc={doc} />
            ))}
          </div>
        ) : (
          <div className="text-center">No results found.</div>
        )}
      </div>
    </div>
  )
}
