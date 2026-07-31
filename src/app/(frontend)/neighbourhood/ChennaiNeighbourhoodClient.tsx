'use client'

import React, { useMemo, useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

// UI Utilities & Helper Functions
function normalize(str = '') {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '')
    .replace(/aa|ah/g, 'a')
    .replace(/ee|eh/g, 'e')
    .replace(/oo|oh/g, 'o')
    .replace(/th/g, 't')
    .replace(/dh/g, 'd')
}

function getDistance(a = '', b = '') {
  const matrix = []
  for (let i = 0; i <= b.length; i++) matrix[i] = [i]
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      matrix[i][j] =
        b[i - 1] === a[j - 1]
          ? matrix[i - 1][j - 1]
          : Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
    }
  }
  return matrix[b.length][a.length]
}

export default function ChennaiNeighbourhoodClient({
  locations = [],
  neighbourhoodData = [],
}: {
  locations: any[]
  neighbourhoodData?: any[]
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const qParam = searchParams.get('q') || ''
  const alphaParam = searchParams.get('alpha') || ''

  const [value, setValue] = useState(qParam)

  // Sync state if URL search query changes
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

  // Exact Scoring Algorithm from your React JS Code
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

  // Extract Popular Search Tags dynamically
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
    <div id="poppinsssFamily" className="w-full">
      {/* Banner Section */}
      <section
        className="relative min-h-[550px] flex items-center overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #1a0a2e 0%, #2d1155 40%, #3b1a6b 60%, #1a1a4e 100%)',
        }}
      >
        <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
          <Image
            src="/images/neighbourhood-main-image.jpeg"
            alt="Chennai Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full">
          <div className="text-xs text-white/60 mb-4">
            <div className="flex gap-2">
              <Link href="/">
                <span className="cursor-pointer hover:underline">Home</span>
              </Link>
              <span>-</span>
              <span className="cursor-pointer">Neighbourhood</span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
            <div className="text-white lg:w-[40%]">
              <h1 className="text-3xl sm:text-4xl font-semibold leading-tight mb-3">
                Explore Chennai
                <br />
                <span className="text-[#a44294]">Neighbourhoods</span>
              </h1>
              <p className="text-white/70 text-sm leading-relaxed">
                Discover the best localities in Chennai. Find schools, hospitals, transport,
                lifestyle, food, real estate trends and everything you need to know about your
                neighbourhood.
              </p>
            </div>

            {/* Inline Search Bar */}
            <div className="bg-white rounded-2xl shadow-2xl p-5 w-full lg:w-[60%]">
              <div className="flex border-b border-gray-200 mb-4">
                <button className="px-5 py-2 text-sm font-bold text-[#a44294] border-b-2 border-[#a44294] -mb-px">
                  Search
                </button>
              </div>

              <div className="flex gap-2">
                <div className="flex-1 flex items-center border border-gray-300 rounded-lg px-3 py-3 gap-2 relative">
                  <span className="text-gray-400 text-base">📍</span>
                  <input
                    type="text"
                    placeholder="Search by Area, Locality, Landmark or Pincode"
                    className="flex-1 text-sm outline-none text-gray-700 placeholder-gray-400 bg-transparent pr-6"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        updateFilters({ q: value, alpha: '' })
                      }
                    }}
                  />

                  {value && (
                    <button
                      onClick={() => {
                        setValue('')
                        updateFilters({ q: '', alpha: '' })
                      }}
                      className="absolute right-3 text-gray-400 hover:text-gray-600 cursor-pointer p-0.5 text-xs font-bold rounded-full hover:bg-gray-100 flex items-center justify-center w-5 h-5"
                    >
                      ✕
                    </button>
                  )}
                </div>

                <button
                  onClick={() => updateFilters({ q: value, alpha: '' })}
                  className="bg-[#a44294] hover:bg-[#974189] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                >
                  Search
                </button>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="text-xs text-[#000] font-semibold">Popular Searches:</span>
                {displayTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => {
                      setValue(tag)
                      updateFilters({ q: tag, alpha: '' })
                    }}
                    className="cursor-pointer text-[#000] font-bold text-xs border border-[#00000040] hover:bg-purple-100 hover:text-[#a44294] px-3 py-1 rounded-full transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alphabet Filter */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
            <div>
              <h2 className="text-base font-bold text-gray-900">Search by Alphabet</h2>
              <p className="text-xs text-gray-500 mt-0.5">
                Find your neighbourhood by selecting the first letter
              </p>
            </div>

            <button
              onClick={() => updateFilters({ alpha: '' })}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors border cursor-pointer ${
                !alphaParam
                  ? 'bg-[#a44294] text-white border-[#a44294]'
                  : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-purple-50'
              }`}
            >
              Reset
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter) => (
              <button
                key={letter}
                onClick={() => updateFilters({ alpha: letter, q: '' })}
                className={`w-9 h-9 text-xs font-semibold rounded transition-colors border cursor-pointer ${
                  alphaParam === letter
                    ? 'bg-[#a44294] text-white border-[#a44294]'
                    : 'bg-gray-50 text-gray-700 border-gray-100 hover:bg-purple-50'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Area Cards Result List */}
      <section className="py-10 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Popular Neighbourhoods</h2>

          {filteredLocations.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-800">No Locations Found</h3>
              <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
                No results available for your search. We’re continuously adding new neighbourhoods.
              </p>
              <button
                onClick={() => updateFilters({ q: '', alpha: '', location: '' })}
                className="mt-4 px-4 py-2 bg-[#a44294] text-white rounded-lg text-sm font-semibold"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredLocations.map((loc: any) => {
                const imageUrl = loc?.image?.url || '/images/locationdefult.png'
                const metro =
                  loc?.hasMetro !== undefined && loc?.hasMetro !== null && loc?.hasMetro !== ''
                    ? loc.hasMetro === true || loc.hasMetro === 'true'
                      ? 'Available'
                      : 'Connecting'
                    : null

                return (
                  <div
                    key={loc.id || loc.locality}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group flex flex-col"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={loc.locality || 'Locality'}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <span className="absolute top-2 left-2 bg-[#a44294] text-white text-[10px] font-bold px-2 py-0.5 rounded">
                        {loc.locality}
                      </span>
                    </div>

                    <div className="p-4 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{loc.label || loc.locality}</h3>
                        <p className="text-xs text-gray-600 line-clamp-2 mb-3">
                          {loc.about ? loc.about : 'No Description'}
                        </p>

                        <div className="flex items-center gap-3 mb-3 text-xs text-gray-500 flex-wrap">
                          {loc.schoolCount && (
                            <span className="flex items-center gap-1">
                              <span>🏫</span>
                              <div>
                                Schools <strong className="text-black block">{loc.schoolCount}</strong>
                              </div>
                            </span>
                          )}
                          {loc.hospitalCount && (
                            <span className="flex items-center gap-1">
                              <span>🏥</span>
                              <div>
                                Hospitals <strong className="text-black block">{loc.hospitalCount}</strong>
                              </div>
                            </span>
                          )}
                          {metro && (
                            <span className="flex items-center gap-1">
                              <span>🚇</span>
                              <div>
                                Metro <strong className="text-black block">{metro}</strong>
                              </div>
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-3 text-center">
                        <Link
                          href={`/neighbourhood/${encodeURIComponent(loc.locality)}`}
                          className="text-xs font-semibold text-[#a44294] hover:text-purple-900"
                        >
                          Explore Area →
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}