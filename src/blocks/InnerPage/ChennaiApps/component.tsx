'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Media = {
  url?: string
  alt?: string
}

type FeatureItem = {
  id?: string
  featureItem?: string
}

type ServiceItem = {
  id?: string
  serviceItem?: string
}

type AssignedTabItem = {
  id?: string
  assignedTabName?: string
}

type AppItem = {
  id?: string
  company: string
  appDescription?: string
  appImage?: Media | string
  appImageAlt?: string
  assignedTabs?: AssignedTabItem[]
  features?: FeatureItem[]
  services?: ServiceItem[]
  websiteLink?: string
  androidLink?: string
  iosLink?: string
}

type TabItem = {
  id?: string
  tabLabel: string
  tabIcon?: Media | string
}

type ChennaiAppsProps = {
  tabs?: TabItem[]
  allApps?: AppItem[]
}

export default function ChennaiAppsComponent(props: ChennaiAppsProps) {
  console.log('🚀 Dynamic Chennai Apps Props Data:', props)

  // UPDATED: Config key names matching block schema
  const tabsList = props?.tabs || []
  const allAppsList = props?.allApps || []

  const [activeTabIdx, setActiveTabIdx] = useState<number>(0)
  const [selectedCard, setSelectedCard] = useState<AppItem | null>(null)
  const topRef = useRef<HTMLDivElement | null>(null)

  const getImageUrl = (img?: Media | string) => {
    if (!img) return ''
    return typeof img === 'object' ? img.url || '' : img
  }

  const getImageAlt = (img?: Media | string, fallback = '') => {
    if (!img) return fallback
    return typeof img === 'object' ? img.alt || fallback : fallback
  }

  if (!tabsList || tabsList.length === 0) {
    return (
      <div className="p-4 my-4 text-center border border-dashed border-gray-300 rounded text-gray-500">
        ChennaiAppsComponent: No app tabs found. Add tabs and apps in Payload Admin.
      </div>
    )
  }

  const activeTab = tabsList[activeTabIdx] || tabsList[0]

  // UPDATED: Matching tabs with short property names
  const activeCards = allAppsList.filter((app) => {
    const currentTabLabel = activeTab?.tabLabel?.trim()
    if (!currentTabLabel || !Array.isArray(app?.assignedTabs)) return false

    return app.assignedTabs.some(
      (tabObj) => tabObj?.assignedTabName?.trim().toLowerCase() === currentTabLabel.toLowerCase(),
    )
  })

  return (
    <div className="container max-w-7xl mx-auto chennaiappscontainer my-10 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow rounded overflow-hidden">
        {/* LEFT: Dynamic Tabs List */}
        <div className="w-full md:w-1/5 border-r border-gray-200 p-4">
          <ul className="flex flex-col space-y-2">
            {tabsList.map((tab, idx) => {
              const iconUrl = getImageUrl(tab.tabIcon)
              return (
                <li key={tab.id || idx}>
                  <button
                    onClick={() => {
                      setActiveTabIdx(idx)
                      topRef.current?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`w-full text-left px-4 py-2 flex items-center gap-2 font-medium rounded transition-all cursor-pointer ${
                      activeTabIdx === idx
                        ? 'bg-[#995098] text-white'
                        : 'hover:bg-[#995098] hover:text-white text-gray-700'
                    }`}
                  >
                    {iconUrl ? (
                      <img
                        src={iconUrl}
                        alt={tab.tabLabel}
                        className="w-5 h-5 object-contain inline-block"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 inline-block"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    )}
                    <span>{tab.tabLabel}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

        {/* RIGHT: Dynamic Cards Grid */}
        <div className="w-full md:w-4/5 p-4" ref={topRef}>
          {activeCards.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              No apps assigned to "{activeTab?.tabLabel}" tab yet.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activeCards.map((card, cardIdx) => {
                const cardImgUrl = getImageUrl(card.appImage)
                const cardImgAlt = card.appImageAlt || getImageAlt(card.appImage, card.company)

                return (
                  <div
                    key={card.id || cardIdx}
                    className="bg-white border border-gray-100 shadow rounded overflow-hidden flex flex-col cursor-pointer hover:shadow-md transition"
                    onClick={() => setSelectedCard(card)}
                  >
                    {cardImgUrl && (
                      <img src={cardImgUrl} alt={cardImgAlt} className="w-full h-48 object-cover" />
                    )}
                    <div className="p-4 flex flex-col flex-1">
                      <h2 className="font-semibold text-lg">{card.company}</h2>
                      {card.appDescription && (
                        <p className="text-gray-700 mt-2 flex-1">{card.appDescription}</p>
                      )}
                      <button
                        className="mt-4 bg-[#a44294] text-white px-4 py-2 rounded font-medium cursor-pointer text-center"
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedCard(card)
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-xl w-full max-w-4xl relative max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold cursor-pointer"
              >
                ×
              </button>

              <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedCard.company}</h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Features */}
                {selectedCard.features && selectedCard.features.length > 0 && (
                  <div>
                    <h3 className="text-[#a44294] font-semibold text-lg mb-2">Features</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-800">
                      {selectedCard.features.map((f, i) => (
                        <li key={f.id || i}>{f.featureItem}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Services */}
                {selectedCard.services && selectedCard.services.length > 0 && (
                  <div>
                    <h3 className="text-[#a44294] font-semibold text-lg mb-2">Services</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-800">
                      {selectedCard.services.map((s, i) => (
                        <li key={s.id || i}>{s.serviceItem}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* External Links */}
              <div className="mt-6 flex flex-wrap gap-3">
                {selectedCard.websiteLink && (
                  <a
                    href={selectedCard.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#a44294] text-white rounded font-medium hover:opacity-90"
                  >
                    Website
                  </a>
                )}
                {selectedCard.androidLink && (
                  <a
                    href={selectedCard.androidLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#a44294] text-white rounded font-medium hover:opacity-90"
                  >
                    Android
                  </a>
                )}
                {selectedCard.iosLink && (
                  <a
                    href={selectedCard.iosLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[#a44294] text-white rounded font-medium hover:opacity-90"
                  >
                    iOS
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
