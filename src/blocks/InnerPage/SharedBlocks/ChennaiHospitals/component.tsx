'use client'

import React, { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

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

type EyeHospitalSection = {
  id?: string
  category: string
  categoryParaGraph?: string
  places?: PlaceItem[]
}

type EyeHospitalsProps = {
  sections?: EyeHospitalSection[]
}

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
    <div>
      <div className="space-y-1">
        {visibleItems.map((loc, idx) =>
          loc.link ? (
            <a
              key={idx}
              href={loc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-gray-700 hover:text-[#995098]"
            >
              📍 {loc.label.trim()}
            </a>
          ) : (
            <span key={idx} className="block text-sm text-gray-700">
              📍 {loc.label.trim()}
            </span>
          ),
        )}
      </div>

      {hasMore && (
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="text-xs font-semibold text-[#995098] hover:underline mt-2 inline-block cursor-pointer"
        >
          {isExpanded ? 'Show Less ↑' : `+${items.length - maxVisible} More Locations ↓`}
        </button>
      )}
    </div>
  )
}

function EyeHospitalCategory({ section }: { section: EyeHospitalSection }) {
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const places = section.places || []
  const visiblePlaces = showAll ? places : places.slice(0, 6)

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
    <div ref={sectionRef} className="nightlifesecIn mb-8">
      <h2 className="text-2xl font-semibold mb-6">{section.category}</h2>

      {section.categoryParaGraph && <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {visiblePlaces.map((place, idx) => (
            <motion.div
              key={place.id || idx}
              className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white flex flex-col justify-between"
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

      {places.length > 6 && (
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

export default function EyeHospitals(props: EyeHospitalsProps) {
  // Support both direct sections array or block object props

  console.log('🔥 EyeHospitals Component Received Props:', props)
  const activeSections = props?.sections || []

  if (!activeSections || activeSections.length === 0) {
    return (
      <div className="p-4 my-4 text-center border border-dashed border-gray-300 rounded text-gray-500">
        No Eye Hospital Sections Found (Check Payload Admin Data)
      </div>
    )
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
      {activeSections.map((section, sectionIdx) => (
        <EyeHospitalCategory key={section.id || sectionIdx} section={section} />
      ))}
    </div>
  )
}
