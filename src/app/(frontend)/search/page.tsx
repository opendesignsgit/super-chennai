
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
