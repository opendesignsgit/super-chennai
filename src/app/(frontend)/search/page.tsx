import GlobalSearch from '@/blocks/HomePage/GlobalSearch/Component'
import { CollectionSlug, getPayload } from 'payload'
import { Suspense } from 'react'
import { Card, CardPostData } from 'src/components/Card'
import configPromise from 'src/payload.config'
import SearchBanner from '../../../assets/images/AccodomationBannerr.jpg'
import './style.css'
import { distance } from 'fastest-levenshtein'

/* ------------------------------------------------ */
/* 🔥 UNIVERSAL DEEP TEXT EXTRACTOR (PRODUCTION)   */
/* ------------------------------------------------ */

const extractDeepText = (data: any): string => {
  if (!data) return ''

  let text = ''

  if (typeof data === 'string') {
    return data + ' '
  }

  if (Array.isArray(data)) {
    data.forEach((item) => {
      text += extractDeepText(item)
    })
    return text
  }

  if (typeof data === 'object') {
    Object.values(data).forEach((value) => {
      text += extractDeepText(value)
    })
  }

  return text
}

/* ------------------------------------------------ */

type Args = {
  searchParams: Promise<{ q?: string }>
}

export default async function Page({ searchParams }: Args) {
  const { q: query } = await searchParams
  const payload = await getPayload({ config: configPromise })

  if (!query || query.trim().length < 2) {
    return <div className="container mt-10">Search query too short</div>
  }

  const collectionsToSearch: CollectionSlug[] = [
    'pages',
    'posts',
    'visits',
    'work',
    'events',
    'live',
    'innovate',
    'investments',
    'volunteer',
    'neighbourhood',
  ]

  const results = await Promise.all(
    collectionsToSearch.map(async (collection) => {
      const res = await payload.find({
        collection,
        limit: 50,
        depth: 2,
        pagination: false,
        select: {
          title: true,
          slug: true,
          categories: true,
          meta: true,
          content: true,
          layout: true,
        },
      })

      return res.docs.map(
        (doc: any): CardPostData => ({
          collection,

          slug: 'slug' in doc ? String(doc.slug ?? '') : '',
          title: 'title' in doc ? String(doc.title ?? '') : '',

          categories: 'categories' in doc && Array.isArray(doc.categories) ? doc.categories : [],

          meta: 'meta' in doc ? (doc.meta ?? {}) : {},

          content: 'content' in doc ? (doc.content ?? null) : null,

          layout: 'layout' in doc ? (doc.layout ?? null) : null,
        }),
      )
    }),
  )

  const allDocs = results.flat()

  const normalize = (str: string) => str.toLowerCase().trim().replace(/\s+/g, ' ')

  const calculateScore = (doc: any, searchQuery: string) => {
    const safeQuery = normalize(searchQuery)
    let score = 0

    const title = normalize(doc.title ?? '')
    const slug = normalize(doc.slug ?? '')
    const metaTitle = normalize(doc.meta?.title ?? '')
    const metaDesc = normalize(doc.meta?.description ?? '')

    /* ---------- Rich Text Scan ---------- */
    let deepText = ''
    deepText += extractDeepText(doc.content)
    deepText += extractDeepText(doc.layout)
    deepText = normalize(deepText)

    if (deepText.includes(safeQuery)) score += 80

    /* ---------- Title ---------- */
    if (title === safeQuery) score += 200
    else if (title.startsWith(safeQuery)) score += 140
    else if (title.includes(safeQuery)) score += 100

    /* ---------- Slug ---------- */
    if (slug === safeQuery) score += 150
    else if (slug.startsWith(safeQuery)) score += 110
    else if (slug.includes(safeQuery)) score += 80

    /* ---------- Meta ---------- */
    if (metaTitle.includes(safeQuery)) score += 70
    if (metaDesc.includes(safeQuery)) score += 50

    /* ---------- Smart Fuzzy Matching ---------- */

    const queryWords = safeQuery.split(' ')
    const titleWords = title.split(' ')
    const contentWords = deepText.split(' ')

    queryWords.forEach((qWord) => {
      // Skip very small words
      if (qWord.length < 3) return

      const allowedDistance = qWord.length <= 4 ? 1 : qWord.length <= 7 ? 2 : 3

      // Check title words
      titleWords.forEach((tWord) => {
        if (distance(qWord, tWord) <= allowedDistance) {
          score += 40 // title fuzzy strong
        }
      })

      // Check content words
      contentWords.forEach((cWord) => {
        if (distance(qWord, cWord) <= allowedDistance) {
          score += 15 // content fuzzy weaker
        }
      })
    })

    queryWords.forEach((qWord) => {
      titleWords.forEach((tWord) => {
        if (distance(qWord, tWord) <= 1) {
          score += 25
        }
      })
    })

    return score
  }

  const sortedDocs = allDocs
    .map((doc) => ({
      doc,
      score: calculateScore(doc, query),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((item) => item.doc)

  return (
    <div>
      <Suspense fallback={null}>
        <div className="accaodomationBannerSection">
          <div>
            <img src={SearchBanner.src} alt="" />
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Search Results for{query}</h3>
            </div>
          </div>
          <div className="notHomePageSearch">
            <GlobalSearch placeholderText={'Explore Chennai'} buttonText={'Search'} />
          </div>
        </div>
      </Suspense>

      <div>
        {sortedDocs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 container mt-10">
            {sortedDocs.map((doc) => (
              <Card key={`${doc.collection}-${doc.slug}`} doc={doc} />
            ))}
          </div>
        ) : (
          <div className="workIntro mt-10">
            <h3>No results found for{query}</h3>
            <p>Try different keywords.</p>
          </div>
        )}
      </div>
    </div>
  )
}
