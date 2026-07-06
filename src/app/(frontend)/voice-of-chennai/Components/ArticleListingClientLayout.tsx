/* eslint-disable @next/next/no-img-element */
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import '../styles/style.css'

/* =========================================================
   SUB-COMPONENTS (ADS DISPLAY RENDERING ENGINES)
========================================================= */

const AdMedia = ({ ad, className = '' }: { ad: any; className?: string }) => {
  if (ad.mediaType === 'video' && ad.mediaUrl) {
    let videoId = ''
    if (ad.mediaUrl.includes('youtube.com/watch')) {
      videoId = new URL(ad.mediaUrl).searchParams.get('v') || ''
    } else if (ad.mediaUrl.includes('youtu.be/')) {
      videoId = ad.mediaUrl.split('youtu.be/')[1] || ''
    }
    const embedUrl = videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&rel=0`
      : ''

    return (
      <div className={`aspect-video w-full ${className}`}>
        <iframe
          className="w-full h-full rounded-lg border-0"
          src={embedUrl}
          title={ad.title}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    )
  }

  if (ad.media?.url) {
    return (
      <img
        src={ad.media.url}
        alt={ad.altText || ad.title}
        className={`w-full rounded-lg object-cover ${className}`}
      />
    )
  }
  return null
}

const SingleAdCard = ({ ad, onClose }: { ad: any; onClose?: () => void }) => {
  return (
    <div className="border border-slate-200 bg-white rounded-xl p-3 relative shadow-sm">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 h-7 w-7 flex items-center justify-center rounded-full bg-white/90 shadow text-gray-500 hover:text-gray-900 z-10"
        >
          ✕
        </button>
      )}
      <AdMedia ad={ad} className="mb-2" />
      <p className="font-semibold text-sm text-slate-800">{ad.Adstitle || ad.title}</p>
      {ad.targetUrl && (
        <a
          href={ad.targetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 text-xs font-medium block mt-1"
        >
          Learn More →
        </a>
      )}
    </div>
  )
}

const AdBox = ({ ads }: { ads: any[] }) => {
  const [visibleAds, setVisibleAds] = useState(ads || [])
  if (!visibleAds.length) return null

  return (
    <div className="sticky top-6 space-y-4">
      {visibleAds.map((ad) => (
        <SingleAdCard
          key={ad.id}
          ad={ad}
          onClose={() => setVisibleAds((prev) => prev.filter((a) => a.id !== ad.id))}
        />
      ))}
    </div>
  )
}

const TopAdCard = ({ ad }: { ad: any }) => {
  const [show, setShow] = useState(true)
  if (!show) return null

  return (
    <div className="relative border border-slate-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setShow(false)}
        className="absolute top-2 right-2 h-7 w-7 flex items-center justify-center rounded-full bg-white/90 backdrop-blur shadow-sm text-gray-500 hover:text-gray-900 z-10"
      >
        ✕
      </button>
      <AdMedia ad={ad} />
    </div>
  )
}

const BottomAdBox = ({ ads }: { ads: any[] }) => {
  const [show, setShow] = useState(true)
  if (!show || !ads?.length) return null
  const ad = ads[0]

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white border-t border-slate-200 shadow-xl z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center gap-4 justify-between">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <AdMedia ad={ad} className="h-14 w-24 object-cover rounded hidden sm:block" />
          <p className="font-semibold text-sm text-slate-800 truncate">{ad.Adstitle || ad.title}</p>
        </div>
        <div className="flex gap-3 items-center shrink-0">
          {ad.targetUrl && (
            <a
              href={ad.targetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
            >
              Learn More
            </a>
          )}
          <button
            onClick={() => setShow(false)}
            className="h-8 w-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 border border-slate-200"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  )
}

/* =========================================================
   MAIN CLIENT DIRECTORY LAYOUT ENGINE
========================================================= */
interface ClientProps {
  articles: any[]
  ads: any[]
}

export default function ArticleListingClientLayout({ articles, ads }: ClientProps) {
  const [page, setPage] = useState(1)
  const [mostViewedPage, setMostViewedPage] = useState(1)
  const [popularPage, setPopularPage] = useState(1)

  const ARTICLES_PER_PAGE = 3
  const POPULAR_PER_PAGE = 3
  const MOST_VIEWED_PER_PAGE = 3

  // Separate Side Ads
  const leftAds = ads.filter((a) => a.position === 'left')
  const rightAds = ads.filter((a) => a.position === 'right')
  const topAds = ads.filter((a) => a.position === 'top')
  const bottomAds = ads.filter((a) => a.position === 'bottom')
  const inlineEmbeddedAds = ads.filter((a) => a.position === 'inline')

  const hasLeft = leftAds.length > 0
  const hasRight = rightAds.length > 0
  const hasSideAds = hasLeft || hasRight

  // Extract featured post block
  const featuredEventArticle = articles.find((a) => a.isFeatured === true)
  const normalArticles = articles.filter((a) => a.id !== featuredEventArticle?.id)

  // Primary loop pagination execution
  const totalPages = Math.ceil(normalArticles.length / ARTICLES_PER_PAGE)
  const paginatedArticles = normalArticles.slice(
    (page - 1) * ARTICLES_PER_PAGE,
    page * ARTICLES_PER_PAGE,
  )

  // Sorting arrays logic rules
  const mostViewedSorted = [...articles].sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
  const popularSorted = [...articles].sort((a, b) => {
    const scoreA = (a.views ?? 0) + (a.readingTime ?? 0) * 5
    const scoreB = (b.views ?? 0) + (b.readingTime ?? 0) * 5
    return scoreB - scoreA
  })

  const totalMostViewedPages = Math.ceil(mostViewedSorted.length / MOST_VIEWED_PER_PAGE)
  const totalPopularPages = Math.ceil(popularSorted.length / POPULAR_PER_PAGE)

  const mostViewedArticles = mostViewedSorted.slice(
    (mostViewedPage - 1) * MOST_VIEWED_PER_PAGE,
    mostViewedPage * MOST_VIEWED_PER_PAGE,
  )
  const popularArticles = popularSorted.slice(
    (popularPage - 1) * POPULAR_PER_PAGE,
    popularPage * POPULAR_PER_PAGE,
  )

  const inlineAdIndex = inlineEmbeddedAds.length > 0 ? (page - 1) % inlineEmbeddedAds.length : 0

  const handleScrollReset = (setter: (p: number) => void, targetPage: number) => {
    setter(targetPage)
    window.scrollTo({ top: 350, behavior: 'smooth' })
  }

  return (
    <div className="w-full pb-20">
      {/* Top Billboard Row */}
      {topAds.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {topAds.map((ad) => (
              <TopAdCard key={ad.id} ad={ad} />
            ))}
          </div>
        </div>
      )}

      {/* Main Container Layout */}
      <div className={`mx-auto px-4 mt-10 mb-10 ${hasSideAds ? 'max-w-[1400px]' : 'max-w-6xl'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT SIDEBAR ADS BAR */}
          {hasLeft && (
            <div className="col-span-1 lg:col-span-2">
              <AdBox ads={leftAds} />
            </div>
          )}

          {/* MAIN COLUMN WORKSPACE */}
          <div
            className={`col-span-1 ${hasSideAds ? (hasLeft && hasRight ? 'lg:col-span-8' : 'lg:col-span-10') : 'lg:col-span-12'}`}
          >
            {/* HERO POST CONTAINER FEATURED BLOCK */}
            {featuredEventArticle && (
              <Link
                href={`/articles/${featuredEventArticle.slug}`}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 items-center bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition"
              >
                <div className="space-y-3">
                  <p className="text-pink-600 text-xs font-bold uppercase tracking-wider">
                    {featuredEventArticle.Articlecategory?.name || 'Featured'}
                  </p>
                  <h1 className="text-2xl font-extrabold text-slate-900 leading-tight">
                    {featuredEventArticle.title}
                  </h1>
                  <p className="text-sm text-slate-600 line-clamp-3 font-light leading-relaxed">
                    {featuredEventArticle.excerpt}
                  </p>
                </div>
                <div className="h-[280px] w-full overflow-hidden rounded-lg">
                  <img
                    src={
                      featuredEventArticle.heroImage?.url ||
                      featuredEventArticle.thumbnailImage?.url ||
                      '/images/placeholder.jpg'
                    }
                    alt={featuredEventArticle.title}
                    className="w-full h-full object-cover hover:scale-101 transition-transform duration-300"
                  />
                </div>
              </Link>
            )}

            {/* MAIN PAGINATED ARTICLES GRID FRAME */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {paginatedArticles.map((a, i) => {
                const imgSource =
                  a.thumbnailImage?.url || a.heroImage?.url || '/images/placeholder.jpg'
                return (
                  <React.Fragment key={a.id}>
                    <Link
                      href={`/articles/${a.slug}`}
                      className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition flex flex-col h-full"
                    >
                      <div className="h-48 w-full overflow-hidden">
                        <img src={imgSource} alt={a.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                          <p className="text-pink-600 text-xs font-bold tracking-wider uppercase mb-1">
                            {a.Articlecategory?.name}
                          </p>
                          <h2 className="text-base font-bold text-slate-900 line-clamp-2 mb-2">
                            {a.title}
                          </h2>
                          <p className="text-xs text-slate-600 line-clamp-3 font-light leading-relaxed">
                            {a.excerpt}
                          </p>
                        </div>
                      </div>
                    </Link>

                    {/* Inline Responsive Middle Ad Frame Trigger */}
                    {i === 2 && inlineEmbeddedAds.length > 0 && (
                      <div className="col-span-1 md:hidden my-4">
                        <SingleAdCard ad={inlineEmbeddedAds[inlineAdIndex]} />
                      </div>
                    )}
                  </React.Fragment>
                )
              })}
            </div>

            {/* Pagination Controls Row */}
            {totalPages > 1 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleScrollReset(setPage, i + 1)}
                    className={`px-3 py-1.5 rounded text-xs font-bold border transition ${page === i + 1 ? 'bg-pink-600 border-pink-600 text-white' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}

            {/* MOST VIEWED SECTION BLOCK */}
            {mostViewedArticles.length > 0 && (
              <div className="mt-16 space-y-6">
                <h3 className="text-xl font-extrabold text-slate-900 border-b pb-2 border-slate-100">
                  Most Viewed Articles
                </h3>
                <div className="space-y-4">
                  {mostViewedArticles.map((a) => (
                    <Link
                      key={a.id}
                      href={`/articles/${a.slug}`}
                      className="flex flex-col md:flex-row gap-4 bg-white p-3 rounded-xl border border-slate-100 hover:shadow-sm transition"
                    >
                      <img
                        src={a.thumbnailImage?.url || a.heroImage?.url || '/images/placeholder.jpg'}
                        alt={a.title}
                        className="w-full md:w-48 h-32 object-cover rounded-lg shrink-0"
                      />
                      <div className="flex-1 space-y-1 py-1">
                        <p className="text-pink-600 text-xs font-bold uppercase">
                          {a.Articlecategory?.name}
                        </p>
                        <h4 className="text-base font-bold text-slate-900">{a.title}</h4>
                        <p className="text-xs text-slate-600 line-clamp-2 font-light">
                          {a.excerpt}
                        </p>
                        {a.views > 0 && (
                          <span className="text-[11px] text-slate-400 block pt-1">
                            👁 {a.views} views
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {totalMostViewedPages > 1 && (
              <div className="flex justify-center gap-1.5 mt-6">
                {Array.from({ length: totalMostViewedPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setMostViewedPage(i + 1)}
                    className={`w-7 h-7 text-xs rounded border flex items-center justify-center font-semibold ${mostViewedPage === i + 1 ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-500 hover:bg-slate-50'}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}

            {/* POPULAR ARTICLES CARDS MATRIX */}
            {popularArticles.length > 0 && (
              <div className="mt-16 space-y-6">
                <h3 className="text-xl font-extrabold text-slate-900 border-b pb-2 border-slate-100">
                  Popular Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {popularArticles.map((a) => (
                    <Link
                      key={a.id}
                      href={`/articles/${a.slug}`}
                      className="bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-sm transition flex flex-col justify-between h-full"
                    >
                      <div>
                        <img
                          src={
                            a.thumbnailImage?.url || a.heroImage?.url || '/images/placeholder.jpg'
                          }
                          alt={a.title}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                          <p className="text-pink-600 text-xs font-bold uppercase mb-1">
                            {a.Articlecategory?.name}
                          </p>
                          <h4 className="text-sm font-bold text-slate-900 line-clamp-2">
                            {a.title}
                          </h4>
                          <p className="text-xs text-slate-600 line-clamp-2 font-light mt-1">
                            {a.excerpt}
                          </p>
                        </div>
                      </div>

                      {/* Spring Framer Motion Like Counter animation row */}
                      {a.likes > 0 && (
                        <div className="px-4 pb-4 pt-1 flex items-center gap-1.5 text-xs font-bold text-rose-500">
                          <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
                          >
                            ❤️
                          </motion.span>
                          <span>{a.likes} Likes</span>
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {totalPopularPages > 1 && (
              <div className="flex justify-center gap-1.5 mt-6">
                {Array.from({ length: totalPopularPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPopularPage(i + 1)}
                    className={`w-7 h-7 text-xs rounded border flex items-center justify-center font-semibold ${popularPage === i + 1 ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-500 hover:bg-slate-50'}`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR ADS BAR */}
          {hasRight && (
            <div className="col-span-1 lg:col-span-2">
              <AdBox ads={rightAds} />
            </div>
          )}
        </div>
      </div>

      {/* Persistent Bottom Overlay Sticker */}
      {bottomAds.length > 0 && <BottomAdBox ads={bottomAds} />}
    </div>
  )
}
