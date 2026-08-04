'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'
import AlphabetFilter from './Components/AlphabetFilter'
import NeighbourhoodBanner from './Components/NeighbourhoodBanner'
import { getDistance, normalize } from './utils/neighbourhoodHelpers'
import LocationCard from './Components/LocationCard'
import LocationCardSkeleton from './Components/LocationCardSkeleton'

export default function ChennaiNeighbourhoodMainPage({
  locations = [],
  isLoading = false,
}: {
  locations: any[]
  neighbourhoodData?: any[]
  isLoading?: boolean
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const qParam = searchParams.get('q') || ''
  const alphaParam = searchParams.get('alpha') || ''

  const [value, setValue] = useState(qParam)

  useEffect(() => {
    setValue(qParam)
  }, [qParam])

  const updateFilters = (newParams: { q?: string; alpha?: string; location?: string }) => {
    const params = new URLSearchParams(searchParams.toString())

    Object.entries(newParams).forEach(([key, val]) => {
      if (val !== undefined) {
        if (val) {
          params.set(key, val)
        } else {
          params.delete(key)
        }
      }
    })

    router.push(`?${params.toString()}`, { scroll: false })
  }

  const filteredLocations = useMemo(() => {
    let result = locations || []

    if (alphaParam) {
      result = result.filter((loc) =>
        loc.locality?.toUpperCase().startsWith(alphaParam.toUpperCase()),
      )
    }

    if (qParam) {
      const q = normalize(qParam)

      result = result
        .map((loc) => {
          const name = normalize(loc.locality || loc.title || '')
          const pin = (loc.pincode || '').toString()

          let score = 0

          if (name === q) score += 100
          if (name.startsWith(q)) score += 80
          if (name.includes(q)) score += 60

          const dist = getDistance(name, q)
          if (dist <= 2) score += 50

          if (pin === qParam) score += 120
          if (pin.startsWith(qParam)) score += 90
          if (pin.includes(qParam)) score += 70

          return { loc, score }
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((item) => item.loc)
    }

    return result
  }, [locations, qParam, alphaParam])

  const displayTags = useMemo(() => {
    const fallbackTags = ['T Nagar', 'Anna Nagar', 'OMR', 'Velachery', 'Adyar']
    if (!locations || locations.length === 0) return fallbackTags

    const uniqueTags = new Set<string>()
    locations.forEach((item) => {
      if (item?.locality) uniqueTags.add(item.locality)
    })

    return uniqueTags.size > 0 ? Array.from(uniqueTags).slice(0, 6) : fallbackTags
  }, [locations])

  return (
    <div id="poppinsssFamily">
      <div className="neighbourhoodcontiner">
        {/* Banner Component */}
        <NeighbourhoodBanner
          value={value}
          setValue={setValue}
          onSearch={(q) => updateFilters({ q, alpha: '' })}
          displayTags={displayTags}
        />

        <div>
          {/* Alphabet Filter Component */}
          <AlphabetFilter
            alphaParam={alphaParam}
            onSelectAlpha={(letter) => updateFilters({ alpha: letter, q: '' })}
            onReset={() => updateFilters({ alpha: '' })}
          />

          {/* Area Filter Cards Section */}
          <section className="py-10 cardssneightwosec">
            <div className="container max-w-7xl mx-auto px-4 !mb-0">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 neighbourtwosecondheading">
                  Popular Neighbourhoods
                </h2>
              </div>

              {isLoading ? (
                <div className="mb-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 neighbiurnewcards">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <LocationCardSkeleton key={i} />
                    ))}
                  </div>
                </div>
              ) : filteredLocations.length === 0 ? (
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">No Locations Found</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    No results available for your search. We’re continuously adding new
                    neighbourhoods—please check back soon.
                  </p>
                  <button
                    onClick={() => updateFilters({ q: '', alpha: '', location: '' })}
                    className="bg-[#a44294] text-white px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="mb-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 neighbiurnewcards">
                    {filteredLocations.map((loc: any) => (
                      <LocationCard key={loc.id || loc.locality} loc={loc} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
