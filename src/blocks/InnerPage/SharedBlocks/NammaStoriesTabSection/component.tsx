'use client'

import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

type EPaperItem = {
  id?: string
  company?: string
  title: string
  thumbnail?: { url?: string } | string
  popupImage?: { url?: string } | string
}

type ArticleItem = {
  id?: string
  company?: string
  title: string
  content?: string
  thumbnail?: { url?: string } | string
  externalLink: string
}

type NammaStoriesNewsProps = {
  sectionTitle?: string
  sectionSubtitle?: string
  ePaperItems?: EPaperItem[]
  newsArticlesItems?: ArticleItem[]
}

export default function NammaStoriesNewsArticleSection(props: NammaStoriesNewsProps) {
  const [tab, setTab] = useState<'active' | ''>('active')
  const [tab1, setTab1] = useState<'active' | ''>('')
  const [selectedCard, setSelectedCard] = useState<EPaperItem | null>(null)

  const ePaperList = props.ePaperItems || []
  const articlesList = props.newsArticlesItems || []

  const getImageUrl = (imgObj: any, fallback: string) => {
    if (!imgObj) return fallback
    if (typeof imgObj === 'object' && imgObj?.url) return imgObj.url
    if (typeof imgObj === 'string') return imgObj
    return fallback
  }

  return (
    <div className="NewsLetterPage">
      <div
        className="cmssection NammaStoriesVideoDiv1 "
        style={{ marginTop: '0', background: '#fff', paddingTop: '0' }}
      >
        <section className="EventsListSec SecPadblock12 nammaStoriesNewsLtter py-12">
          <div className="container max-w-7xl mx-auto px-4">
            {/* Header Section */}
            <div className="Eventitlesec mb-[50px] text-center">
              <h2 className="text-[#a44294]">{props.sectionTitle || 'Namma Stories'}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {props.sectionSubtitle ||
                  'Stay updated with the latest images, videos, and highlights from SuperChennai’s events, announcements, and developments.'}
              </p>
            </div>

            {/* Tab Buttons */}
            <div className="flex justify-center mb-8 gap-4 newsLetterSection">
              <button
                className={`newsLetterButton px-6 py-2 rounded-lg font-semibold transition ${
                  tab === 'active'
                    ? 'active bg-[#a44294] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => {
                  setTab('active')
                  setTab1('')
                }}
              >
                News - E Paper
              </button>
              <button
                className={`newsLetterButton px-6 py-2 rounded-lg font-semibold transition ${
                  tab1 === 'active'
                    ? 'active bg-[#a44294] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700'
                }`}
                onClick={() => {
                  setTab1('active')
                  setTab('')
                }}
              >
                News Articles
              </button>
            </div>

            {/* Tab 1: News - E Paper */}
            {tab === 'active' && (
              <div className="EventsListboxs flex flex-wrap justify-center gap-6">
                {ePaperList.map((card, index) => {
                  const thumbUrl = getImageUrl(
                    card.thumbnail,
                    '/images/NewsLetter/thumbnail9Pic.jpg',
                  )
                  return (
                    <div
                      key={card.id || index}
                      className="EventsItems bg-white cursor-pointer newsLetterImage rounded-xl overflow-hidden w-full sm:w-[350px] flex flex-col justify-between"
                      onClick={() => setSelectedCard(card)}
                      style={{ transition: 'transform 0.3s' }}
                    >
                      <div
                        className="relative w-full EventsItemImg"
                        style={{
                          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                        }}
                      >
                        <img
                          src={thumbUrl}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="EventsIteCont flex flex-col items-start">
                        <h3 className="EveItemtitles w-full">
                          <span className="block font-medium text-gray-900 mb-4 line-clamp-2">
                            {card.title}
                          </span>
                          <div className="readMoreMainDiv mt-2">
                            <span className="ReadmoreNewArticles text-[#a44294] font-semibold cursor-pointer hover:underline">
                              Click to View
                            </span>
                          </div>
                        </h3>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Tab 2: News Articles */}
            {tab1 === 'active' && (
              <div className="EventsListboxs flex flex-wrap justify-center gap-6 nammaStoriesNewsLtter">
                {articlesList.map((card, index) => {
                  const thumbUrl = getImageUrl(
                    card.thumbnail,
                    '/images/NewsandArticles/TheHinduImage.jpg',
                  )
                  return (
                    <div
                      key={card.id || index}
                      className="EventsItems bg-white rounded-xl overflow-hidden shadow-md w-full sm:w-[350px] flex flex-col justify-between"
                    >
                      <div className="relative w-full EventsItemImg h-[220px] overflow-hidden">
                        <Link href={card.externalLink || '#'} target="_blank">
                          <img
                            src={thumbUrl}
                            alt={card.title}
                            className="w-full h-full object-cover"
                          />
                        </Link>
                      </div>
                      <div className="EventsIteCont flex flex-col items-start p-5">
                        <h2 className="titlePublished text-xs font-semibold text-purple-600 mb-2 uppercase tracking-wider">
                          {card.company}
                        </h2>
                        <h3 className="EveItemtitles w-full">
                          <Link
                            style={{ fontFamily: `'Poppins', 'Noto Sans Tamil', sans-serif` }}
                            href={card.externalLink || '#'}
                            target="_blank"
                            className="font-medium text-gray-900 block mb-4 line-clamp-2 hover:text-[#a44294] transition"
                          >
                            {card.title}
                          </Link>
                          <div className="readMoreMainDiv">
                            <Link
                              target="_blank"
                              href={card.externalLink || '#'}
                              className="ReadmoreNewArticles text-[#a44294] font-semibold hover:underline"
                            >
                              Readmore
                            </Link>
                          </div>
                        </h3>
                      </div>
                    </div>
                  )
                })}
              </div>
            )}

            {/* Popup Modal for E-Paper View */}
            <AnimatePresence>
              {selectedCard && (
                <motion.div
                  className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="bg-white p-6 rounded-xl w-auto relative popupSection"
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <button
                      className="absolute top-2 right-2 text-black text-xl font-bold cursor-pointer"
                      onClick={() => setSelectedCard(null)}
                    >
                      ×
                    </button>
                    <img
                      src={getImageUrl(
                        selectedCard.popupImage,
                        '/images/NewsLetter/thumbnail9.jpeg',
                      )}
                      alt={selectedCard.title}
                      className="w-full mb-4 rounded popupSection paddingSection"
                    />
                    {/* <h2 className="text-2xl font-bold mb-2 text-gray-900">{selectedCard.title}</h2>
                    <p className="text-gray-600">{selectedCard.company}</p> */}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </div>
  )
}
