'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

type MediaAsset = {
  url?: string
  alt?: string
}

type NewsArticleItem = {
  id?: number | string
  Company: string
  EventsCalendarTitle: string
  image: MediaAsset | string
  link: string
}

type NewsPhotoItem = {
  id?: number | string
  Company: string
  EventsCalendarTitle: string
  title?: string
  description?: string
  image: MediaAsset | string
  image1: MediaAsset | string
}

type YoutubeChannelItem = {
  id?: number | string
  Company: string
  EventsCalendarTitle: string
  title?: string
  image: MediaAsset | string
  image1?: MediaAsset | string
  link: string
}

export type MediaCoverageBlockMainPageProps = {
  sectionTitle?: string
  sectionDescription?: string
  newsArticle?: NewsArticleItem[]
  newsPhotos?: NewsPhotoItem[]
  youtubeChannel?: YoutubeChannelItem[]
}

export default function MediaCoverageBlockMainPageComponent({
  sectionTitle = 'MEDIA COVERAGE',
  sectionDescription = 'Stay updated with the latest images, videos, and highlights from SuperChennai’s events, announcements, and developments.',
  newsArticle = [],
  newsPhotos = [],
  youtubeChannel = [],
}: MediaCoverageBlockMainPageProps) {
  const [activeTab, setActiveTab] = useState<'epaper' | 'newspaper' | 'youtube'>('epaper')
  const [selectedCard, setSelectedCard] = useState<NewsPhotoItem | null>(null)

  // Safe image URL resolver (handles both dynamic Payload Media objects & static string paths)
  const getImageUrl = (image: MediaAsset | string | any) => {
    if (!image) return ''
    if (typeof image === 'object' && image.url) return image.url
    if (typeof image === 'string') return image
    return ''
  }

  // Sorted Youtube channels by date (latest first)
  const sortedYoutube = [...youtubeChannel].sort((a, b) => {
    const parseDate = (item: YoutubeChannelItem) => {
      const rawDate = item.Company?.replace('Published On: ', '').trim() || ''
      return new Date(rawDate).getTime() || 0
    }
    return parseDate(b) - parseDate(a)
  })

  return (
    <div className="EventsListSec SecPadblock12 !pb-0" id="poppinsssFamily">
      <div className="NewsLetterPage newsectionpayload">
        <div className="container max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="Eventitlesec mb-[50px] text-center">
            <h1 className="text-[#a44294]">{sectionTitle}</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">{sectionDescription}</p>
          </div>

          {/* Dynamic Sub Tabs */}
          <div className="flex justify-center mb-8 newsLetterSection">
            <button
              className={`newsLetterButton ${
                activeTab === 'epaper'
                  ? 'active bg-[#a44294] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('epaper')}
            >
              News Articles - E paper
            </button>

            <button
              className={`newsLetterButton transition-colors ${
                activeTab === 'newspaper'
                  ? 'active bg-[#a44294] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('newspaper')}
            >
              News Paper - Articles
            </button>

            <button
              className={`newsLetterButton px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'youtube'
                  ? 'active bg-[#a44294] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveTab('youtube')}
            >
              News Channel
            </button>
          </div>

          {/* 1. News Articles - E paper */}
          {activeTab === 'epaper' && (
            <div className="EventsListboxs flex flex-wrap">
              {newsArticle.map((card, index) => {
                const imgUrl = getImageUrl(card.image)
                const titleText = card.EventsCalendarTitle || ''
                const truncatedTitle =
                  titleText.length > 60 ? `${titleText.slice(0, 60)}...` : titleText

                return (
                  <motion.div key={card.id || index} className="EventsItems bg-white">
                    <div className="relative w-full EventsItemImg">
                      <Link href={card.link || '#'} target="_blank" rel="noopener noreferrer">
                        <img src={imgUrl} alt={titleText} className="w-full object-cover" />
                      </Link>
                    </div>
                    <div className="EventsIteCont flex flex-col items-start">
                      <h2 className="titlePublished text-xs text-gray-500 mb-1">{card.Company}</h2>
                      <h3 className="EveItemtitles">
                        <Link
                          href={card.link || '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          // className="hover:text-[#a44294] transition-colors"
                          style={{
                            fontFamily: `'Poppins', 'Noto Sans Tamil', sans-serif`,
                            fontWeight: 500,
                          }}
                        >
                          {truncatedTitle}
                        </Link>
                        <div className="readMoreMainDiv">
                          <Link
                            href={card.link || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ReadmoreNewArticles text-[#a44294] font-semibold text-sm hover:underline"
                          >
                            Readmore
                          </Link>
                        </div>
                      </h3>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          )}

          {/* 2. News Paper - Articles */}
          {activeTab === 'newspaper' && (
            <div className="EventsListboxs flex flex-wrap">
              {newsPhotos.map((card, index) => {
                const imgUrl = getImageUrl(card.image)
                const titleText = card.EventsCalendarTitle || ''
                const truncatedTitle =
                  titleText.length > 60 ? `${titleText.slice(0, 60)}...` : titleText

                return (
                  <div
                    key={card.id || index}
                    className="EventsItems bg-white cursor-pointer newsLetterImage"
                    onClick={() => setSelectedCard(card)}
                  >
                    <div
                      className="relative w-full EventsItemImg"
                      style={{
                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                      }}
                    >
                      <img src={imgUrl} alt={titleText} className="w-full object-cover" />
                    </div>
                    <div className="EventsIteCont flex flex-col items-start">
                      <h2 className="titlePublished text-xs text-gray-500 mb-1">{card.Company}</h2>
                      <h3 className="EveItemtitles font-semibold text-[#434343] mb-2">
                        {truncatedTitle}

                        <div className="readMoreMainDiv">
                          <a className="ReadmoreNewArticles">Click to View</a>
                        </div>
                        {card.title && (
                          <h4 className="text-sm font-medium text-gray-700">{card.title}</h4>
                        )}
                      </h3>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* 3. News Channel (YouTube) */}
          {activeTab === 'youtube' && (
            <div className="EventsListboxs flex flex-wrap newsYoutubeSection">
              {sortedYoutube.map((card, index) => {
                const imgUrl = getImageUrl(card.image)
                const titleText = card.EventsCalendarTitle || ''
                const truncatedTitle =
                  titleText.length > 60 ? `${titleText.slice(0, 60)}...` : titleText

                return (
                  <Link
                    key={card.id || index}
                    href={card.link || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="EventsItems bg-white cursor-pointer newsLetterImage"
                  >
                    <div
                      className="relative w-full EventsItemImg"
                      style={{
                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                      }}
                    >
                      <img src={imgUrl} alt={titleText} className="w-full object-cover" />
                    </div>
                    <div className="EventsIteCont flex flex-col items-start">
                      <h2 className="titlePublished text-xs text-gray-500 mb-1">{card.Company}</h2>
                      <h3 className="EveItemtitles youtubevideoSection font-medium mb-2">
                        {truncatedTitle}

                        <div className="readMoreMainDiv mb-2">
                          <span className="ReadmoreNewArticles text-[#a44294] font-semibold text-sm">
                            Watch Now
                          </span>
                        </div>
                      </h3>
                      {card.title && (
                        <h4 className="text-sm font-semibold text-gray-800">{card.title}</h4>
                      )}
                    </div>
                  </Link>
                )
              })}
            </div>
          )}

          {/* Lightbox Modal for News Clippings */}
          <AnimatePresence>
            {selectedCard && (
              <motion.div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCard(null)}
              >
                <motion.div
                  className="bg-white p-6 rounded-xl w-max relative popupSection"
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 50 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="absolute top-2 right-2 text-black text-xl font-bold cursor-pointer"
                    onClick={() => setSelectedCard(null)}
                  >
                    ×
                  </button>
                  <img
                    src={getImageUrl(selectedCard.image1 || selectedCard.image)}
                    alt={selectedCard.EventsCalendarTitle || 'Newspaper Clipping'}
                    // className="w-full mb-4 rounded max-h-[65vh] object-contain"
                    className="w-full mb-4 rounded popupSection paddingSection"
                  />
                  {selectedCard.EventsCalendarTitle && (
                    <h2 className="text-xl font-bold mb-2 text-gray-800">
                      {selectedCard.EventsCalendarTitle}
                    </h2>
                  )}
                  {selectedCard.description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {selectedCard.description}
                    </p>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
