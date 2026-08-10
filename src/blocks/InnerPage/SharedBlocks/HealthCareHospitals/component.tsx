'use client'

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type LocationItem = {
  id?: string
  name: string
  link?: string
}

type PlaceItem = {
  id?: string
  name: string
  desc?: string
  locations?: LocationItem[]
}

type CategoryItem = {
  id?: string
  category: string
  categoryParaGraph?: string
  places?: PlaceItem[]
}

type HealthCareHospitalsProps = {
  mainTitle?: string
  categories?: CategoryItem[]
  // Support if payload passes full block object or direct array
  blockType?: string
}

// Inline Expandable Location Badges
function ExpandableList({
  items,
  maxVisible = 2,
}: {
  items: { label: string; link?: string }[]
  maxVisible?: number
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (!items || items.length === 0) return null

  const visibleItems = isExpanded ? items : items.slice(0, maxVisible)
  const hasMore = items.length > maxVisible

  return (
    <div className="">
      <div className="flex flex-wrap gap-2 mt-2 overflow-y-auto transition-all duration-300 max-h-20 custom-scrollbar">
        {visibleItems.map((loc, idx) =>
          loc.link ? (
            <a
              key={idx}
              href={loc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm bg-blue-50 px-2 py-1 rounded locicon"
            >
              {loc.label.trim()}
            </a>
          ) : (
            <span
              key={idx}
              className="inline-flex items-center text-xs font-medium bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
            >
              📍 {loc.label.trim()}
            </span>
          ),
        )}
      </div>

      {hasMore && (
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="view-more-button mt-2 text-sm text-blue-600 hover:underline"
        >
          {`View Less Locations`}
        </button>
      )}
    </div>
  )
}

// Category Section Block
function HospitalCategoryBlock({ section }: { section: CategoryItem }) {
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const placesList = section.places || []
  const visiblePlaces = showAll ? placesList : placesList.slice(0, 6)

  const handleToggle = () => {
    if (showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setShowAll((prev) => !prev)
  }

  return (
    <div ref={sectionRef} className="nightlifesecIn mb-10">
      <h2 className="text-2xl font-semibold mb-6">{section.category}</h2>

      {section.categoryParaGraph && (
        <p className="mx-0 my-5 mb-9 text-gray-600">{section.categoryParaGraph}</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {visiblePlaces.map((place, idx) => (
            <motion.div
              key={place.id || idx}
              className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              layout
            >
              <div>
                <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                {place.desc && <p className="text-gray-700 mb-2">{place.desc}</p>}
              </div>

              {place.locations && place.locations.length > 0 && (
                <ExpandableList
                  items={place.locations.map((loc) => ({
                    label: loc.name,
                    link: loc.link,
                  }))}
                  maxVisible={2}
                />
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {placesList.length > 6 && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={handleToggle}
            className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  )
}

export default function HealthCareHospitalsComponent(props: HealthCareHospitalsProps) {
  console.log('🚀 HealthCareHospitalsComponent Props Data:', props)

  const activeCategories = props.categories || []

  if (!activeCategories || activeCategories.length === 0) {
    return (
      <div className="p-4 my-4 text-center border border-dashed border-gray-300 rounded text-gray-500">
        HealthCareHospitalsComponent: No category data found.
      </div>
    )
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife cmssectionss my-8">
      {props.mainTitle && <h1 className="text-3xl font-bold mb-8">{props.mainTitle}</h1>}

      {activeCategories.map((section, sectionIdx) => (
        <HospitalCategoryBlock key={section.id || sectionIdx} section={section} />
      ))}
    </div>
  )
}
