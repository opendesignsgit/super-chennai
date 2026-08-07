'use client'

import React, { useState } from 'react'

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

type NetworkCategoryItem = {
  id?: string
  category: string
  places?: PlaceItem[]
}

type NetworkCardsProps = {
  mainTitle?: string
  networkData?: NetworkCategoryItem[]
}

// Inline Expandable List Helper Component
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
    <div className="mt-3 pt-3 border-t border-gray-100">
      <div className="flex flex-wrap gap-2">
        {visibleItems.map((loc, idx) =>
          loc.link ? (
            <a
              key={idx}
              href={loc.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs font-medium bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full hover:bg-blue-100 transition"
            >
              📍 {loc.label.trim()}
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
          className="text-xs font-semibold text-[#682865] hover:underline mt-2 inline-block focus:outline-none cursor-pointer"
        >
          {isExpanded ? 'Show Less ↑' : `+${items.length - maxVisible} More Locations ↓`}
        </button>
      )}
    </div>
  )
}

export default function WorkNetworkSectionComponent({
  mainTitle = 'Networking & Communities',
  networkData = [
    {
      category: 'Professional Communities & Co-Working Spaces',
      places: [
        {
          name: 'Co-working Hubs',
          desc: 'Workafella, The Hive, WeWork, and Spaces host regular networking events',
          locations: [
            { name: 'Teynampet', link: 'https://maps.app.goo.gl/CrsiU47yey5LdimX7' },
            { name: 'Alwarpet', link: 'https://maps.app.goo.gl/nVVQbMxj3KiavMpj7' },
            { name: 'OMR', link: 'https://maps.app.goo.gl/HKDj6pLg1bNKkjYz5' },
          ],
        },
      ],
    },
  ],
}: NetworkCardsProps) {
  if (!networkData || networkData.length === 0) return null

  return (
    <div className="container max-w-7xl mx-auto px-4 nightlife investchennaisec cmssectionss my-8">
      {/* Main Section Title */}
      {mainTitle && <h1 className="text-3xl font-bold mb-10 text-center">{mainTitle}</h1>}

      {networkData.map((section, sectionIdx) => (
        <div key={section.id || sectionIdx} className="nightlifesecIn mb-8">
          <h2 className="text-2xl font-semibold mb-6">{section.category}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.places?.map((place, idx) => (
              <div
                key={place.id || idx}
                className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white flex flex-col justify-between"
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
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
