'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ==========================================
// 1. INTERNAL EXPANDABLE LIST COMPONENT
// ==========================================
type LocationItem = {
  id?: string
  name: string
  link?: string
}

type InlineExpandableListProps = {
  items?: LocationItem[]
  maxVisible?: number
}

function InlineExpandableList({ items = [], maxVisible = 2 }: InlineExpandableListProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  // Safe check for undefined / empty array
  const safeItems = items || []
  if (safeItems.length === 0) return null

  const visibleItems = isExpanded ? safeItems : safeItems.slice(0, maxVisible)
  const remainingCount = safeItems.length - maxVisible

  return (
    <div className="mt-3 pt-3 border-t border-gray-100">
      <div className="flex flex-wrap gap-2 items-center">
        {visibleItems.map((item, idx) => (
          <React.Fragment key={item.id || idx}>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center text-xs font-medium text-[#995098] bg-[#995098]/10 hover:bg-[#995098] hover:text-white px-2.5 py-1 rounded-md transition-all duration-200"
              >
                📍 {item.name}
              </a>
            ) : (
              <span className="inline-flex items-center text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-md">
                📍 {item.name}
              </span>
            )}
          </React.Fragment>
        ))}

        {safeItems.length > maxVisible && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsExpanded(!isExpanded)
            }}
            className="text-xs font-semibold text-gray-500 hover:text-[#995098] underline ml-1 cursor-pointer transition-colors"
          >
            {isExpanded ? 'Show less' : `+${remainingCount} more`}
          </button>
        )}
      </div>
    </div>
  )
}

// ==========================================
// 2. MAIN DYNAMIC SECTION COMPONENT
// ==========================================
type PlaceItem = {
  id?: string
  name: string
  desc?: string
  locations?: LocationItem[]
}

type CategoryItem = {
  id?: string
  categoryName: string
  categoryDesc?: string
  places?: PlaceItem[]
}

type RegionItem = {
  id?: string
  regionName: string
  heroImage?: { url?: string } | string
  categories?: CategoryItem[]
}

type PlacesSectionProps = {
  regions?: RegionItem[]
}

export default function PlacesSectionComponent({ regions = [] }: PlacesSectionProps) {
  const [activeTab, setActiveTab] = useState<string>('')

  // Safe fallback for undefined regions prop
  const safeRegions = regions || []

  useEffect(() => {
    if (safeRegions.length > 0 && !activeTab) {
      setActiveTab(safeRegions[0]?.regionName || '')
    }
  }, [safeRegions, activeTab])

  if (safeRegions.length === 0) return null

  // Optional chaining & default fallback added
  const currentRegion = safeRegions.find((r) => r.regionName === activeTab) || safeRegions[0]

  if (!currentRegion) return null

  const getImageUrl = (img?: { url?: string } | string) => {
    if (!img) return ''
    return typeof img === 'object' ? img.url || '' : img
  }

  return (
    <div className="w-full">
      {/* Dynamic Tab Buttons Header */}
      <div className="flex flex-wrap justify-center gap-3 py-6 bg-white border-b sticky top-0 z-10 shadow-sm">
        {safeRegions.map((region, idx) => (
          <button
            key={region.id || idx}
            onClick={() => setActiveTab(region.regionName)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              activeTab === region.regionName
                ? 'bg-[#682865] text-white shadow-md scale-105'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {region.regionName}
          </button>
        ))}
      </div>

      {/* Dynamic Content Body */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentRegion.regionName}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
        >
          {/* Hero Banner Section */}
          <div className="foodlistsec">
            <section
              style={{ paddingBottom: '50px' }}
              className="imgcontent flex flex-wrap justify-center transition-colors duration-300 bg-white whitebgsec pattern-a"
            >
              {currentRegion.heroImage && (
                <div className="imgLeft">
                  <img src={getImageUrl(currentRegion.heroImage)} alt={currentRegion.regionName} />
                </div>
              )}
              <div className="imgText flex items-center">
                <div className="imgcolTitle bg-[#682865] relative">
                  <h2 className="flex flex-col text-white">
                    <small>{currentRegion.regionName}</small>
                  </h2>
                </div>
              </div>
            </section>
          </div>

          {/* Categories & Cards */}
          <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
            {currentRegion.categories?.map((cat, catIdx) => (
              <div key={cat.id || catIdx} className="nightlifesecIn mb-12">
                <h2 className="text-2xl font-semibold mb-2">{cat.categoryName}</h2>

                {cat.categoryDesc && (
                  <p className="mx-0 my-3 mb-8 text-gray-600">{cat.categoryDesc}</p>
                )}

                {/* Grid of Places */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.places?.map((place, pIdx) => (
                    <motion.div
                      key={place.id || pIdx}
                      className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                      layout
                    >
                      <h3 className="text-xl font-semibold mb-2">{place.name}</h3>

                      {place.desc && <p className="text-gray-700 mb-3">{place.desc}</p>}

                      {/* Locations */}
                      {place.locations && place.locations.length > 0 && (
                        <InlineExpandableList items={place.locations} maxVisible={2} />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
