/* eslint-disable @next/next/no-img-element */
import GlobalSearch from '@/blocks/HomePage/GlobalSearch/Component'
import { getPayload } from 'payload'
import { Suspense } from 'react'
import { Card, CardPostData } from 'src/components/Card'
import configPromise from 'src/payload.config'
import SearchBanner from '../../../assets/images/AccodomationBannerr.jpg'
import './style.css'

type Args = {
  searchParams: Promise<{ q?: string }>
}

export default async function Page({ searchParams: searchParamsPromise }: Args) {
  const { q: query } = await searchParamsPromise
  const payload = await getPayload({ config: configPromise })

  const collectionsToSearch = [
    'pages',
    'posts',
    'visits',
    'work',
    'events',
    'live',
    'innovate',
    'investments',
    'volunteer',
  ]

  const results = await Promise.all(
    collectionsToSearch.map(async (collection: any) => {
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
                  { title: { like: `%${query}%` } },
                  { 'meta.title': { like: `%${query}%` } },
                  { 'meta.description': { like: `%${query}%` } },
                  { slug: { like: `%${query}%` } },
                ],
              },
            }
          : {}),
      })

      return res.docs.map(
        (doc): CardPostData => ({
          collection,
          className: '',
          slug: String(doc.slug ?? ''),
          title: String(doc.title ?? ''),
          categories: Array.isArray(doc.categories) ? doc.categories : [],
          meta: doc.meta ?? {},
        }),
      )
    }),
  )

  const allDocs = results.flat()

  const normalizeString = (str: string) => {
    return str.toLowerCase().trim().replace(/\s+/g, ' ')
  }

  const calculateSpecificityScore = (
    doc: CardPostData,
    query: string | null | undefined,
  ): number => {
    const safeQuery = normalizeString(query ?? '')
    let score = 0

    const normalizedTitle = normalizeString(doc.title ?? '')
    const normalizedSlug = normalizeString(doc.slug ?? '')
    const normalizedMetaTitle = normalizeString(doc.meta?.title ?? '')
    const normalizedMetaDescription = normalizeString(doc.meta?.description ?? '')

    // Exact matches
    if (normalizedTitle === safeQuery) {
      score += 150
    } else if (normalizedTitle.startsWith(safeQuery)) {
      score += 120
    } else if (normalizedTitle.includes(safeQuery)) {
      score += 70
    }

    if (normalizedSlug === safeQuery) {
      score += 130
    } else if (normalizedSlug.startsWith(safeQuery)) {
      score += 100
    } else if (normalizedSlug.includes(safeQuery)) {
      score += 60
    }

    if (normalizedMetaTitle === safeQuery) {
      score += 90
    } else if (normalizedMetaTitle.startsWith(safeQuery)) {
      score += 80
    } else if (normalizedMetaTitle.includes(safeQuery)) {
      score += 50
    }

    if (normalizedMetaDescription === safeQuery) {
      score += 80
    } else if (normalizedMetaDescription.startsWith(safeQuery)) {
      score += 70
    } else if (normalizedMetaDescription.includes(safeQuery)) {
      score += 40
    }

    // Fuzzy matching: Check for similar words
    const queryWords = safeQuery.split(' ')
    const titleWords = normalizedTitle.split(' ')
    const slugWords = normalizedSlug.split(' ')

    queryWords.forEach((queryWord) => {
      if (titleWords.some((titleWord) => titleWord.includes(queryWord))) {
        score += 30 // Add score for partial matches in title
      }
      if (slugWords.some((slugWord) => slugWord.includes(queryWord))) {
        score += 25 // Add score for partial matches in slug
      }
    })

    return score
  }

  const sortedDocs = allDocs.sort((a, b) => {
    const safeQuery = query ?? ''
    const scoreA = calculateSpecificityScore(a, safeQuery)
    const scoreB = calculateSpecificityScore(b, safeQuery)
    return scoreB - scoreA
  })

  return (
    <div>
      <Suspense fallback={null}>
        <div className="accaodomationBannerSection">
          <div>
            <img src={SearchBanner.src} alt="" />
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Search Results for &quot;{query}&quot;</h3>
              <div className="breadCrum">
                <a href=""></a> - <a href="">Search Results for &quot;{query}&quot;</a>{' '}
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <GlobalSearch placeholderText={'Explore Chennai '} buttonText={'Search'} />
          </div>
        </div>
      </Suspense>
      <div>
        {sortedDocs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 container mt-10 ">
            {sortedDocs.map((doc) => (
              <Card key={`${doc.collection}-${doc.slug}`} doc={doc} />
            ))}
          </div>
        ) : (
          <div className="workIntro mt-10">
            <h3>No results found {query ? `for "${query}"` : ''}</h3>
            <p>Try using different keywords or check your spelling and try again.</p>
          </div>
        )}
      </div>
    </div>
  )
}
