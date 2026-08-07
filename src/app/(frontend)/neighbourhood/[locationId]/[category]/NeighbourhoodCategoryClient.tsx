/* eslint-disable @next/next/no-img-element */

'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'
import { PropertiesBanner } from '../../Components/PropertiesBanner'
import { NeighbourhoodSearchBar } from '../../Components/NeighbourhoodSearchBar'
import { ChevronDown, MapPinIcon, StarIcon } from '../../ui/Icons'

interface ClientProps {
  data?: any[]
  locations?: any[]
  locationId: string
  category: string
}

const getMediaUrl = (imageField: any, fallbackUrl = '/images/no-image.png') => {
  if (!imageField) return fallbackUrl

  if (typeof imageField === 'string') {
    return imageField.trim() || fallbackUrl
  }

  if (imageField?.url && typeof imageField.url === 'string') {
    return imageField.url.trim() || fallbackUrl
  }

  return fallbackUrl
}

/**
 * Clean URL Helper - Fixes Empty Slug & Subcategory route conflict
 */
const getItemDetailUrl = ({
  locationId,
  category,
  subcategory,
  slug,
}: {
  locationId?: string
  category?: string
  subcategory?: string
  slug?: string
}) => {
  const normalize = (text?: string) => text?.toLowerCase().trim().replace(/\s+/g, '-') || ''
  const safeLoc = normalize(locationId) || 'chennai'
  const safeCat = normalize(category) || 'all'
  const safeSubCat = subcategory ? normalize(subcategory) : ''
  const safeSlug = normalize(slug)
  if (safeSubCat && safeSubCat !== safeCat) {
    return `/neighbourhood/${safeLoc}/${safeCat}/${safeSubCat}/${safeSlug}`
  }
  return `/neighbourhood/${safeLoc}/${safeCat}/${safeSlug}`
}

function EmptyState({
  title,
  message,
  onReset,
}: {
  title: string
  message: string
  onReset: () => void
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-6 max-w-sm">{message}</p>
      <button
        onClick={onReset}
        className="bg-[#a44294] text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer hover:bg-[#88327a] transition-colors"
      >
        Go Back
      </button>
    </div>
  )
}

export default function NeighbourhoodCategoryClient({
  data = [],
  locations = [],
  locationId,
  category,
}: ClientProps) {
  const params = useParams()
  const router = useRouter()
  const [sortBy, setSortBy] = useState('highToLow')
  const subcategory = (params?.subcategory as string) || ''

  const normalize = (text?: string) => text?.toLowerCase().trim().replace(/\s+/g, '-') || ''
  const filtered =
    data?.filter((item) => {
      const matchCategory = normalize(item?.category?.title) === normalize(category)
      if (!subcategory) return matchCategory
      const matchSubCategory = item?.subCategories?.some(
        (sub: any) => normalize(sub?.slug) === normalize(subcategory),
      )
      return matchCategory && matchSubCategory
    }) || []

  const grouped =
    data?.reduce((acc: Record<string, any[]>, item: any) => {
      const cat = item?.category?.title || 'Others'
      if (!acc[cat]) acc[cat] = []
      acc[cat].push(item)
      return acc
    }, {}) || {}

  const categoriesList = Object.keys(grouped)
  const sortedAndFiltered = [...filtered].sort((a, b) => {
    const ratingA = parseFloat(a?.googleData?.googleRating) || 0
    const ratingB = parseFloat(b?.googleData?.googleRating) || 0
    return sortBy === 'highToLow' ? ratingB - ratingA : ratingA - ratingB
  })
  const locationDetails = filtered[0]?.locations || data?.[0]?.locations

  if (!locationDetails && data.length === 0) {
    return (
      <EmptyState
        title="No Details Found"
        message="We couldn't retrieve any details for this category or location."
        onReset={() => router.push('/neighbourhood')}
      />
    )
  }

  const currentCategoryTitle = filtered[0]?.category?.title || category || 'Explore'
  const currentLocality = locationDetails?.locality || locationId || 'Chennai'

  return (
    <div id="poppinsssFamily" className="w-full">
      {/* 1. HERO BANNER */}
      <section className="relative min-h-[500px] bg-gray-900 overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img
            src={getMediaUrl(
              filtered[0]?.category?.FeaturedImage,
              'https://www.superchennai.com/images/restaurants-banner.jpg',
            )}
            alt="Category Background"
            className="w-full h-full object-cover opacity-0"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-300/95 via-gray-900/70 to-gray-900/40" /> */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-8 pb-10 w-full flex flex-col justify-center">
          <nav className="text-gray-400 text-xs mb-5">
            <div className="flex flex-wrap gap-2 items-center">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>›</span>
              <Link href="/neighbourhood" className="hover:text-white transition-colors">
                Neighbourhood
              </Link>
              <span>›</span>
              <Link
                href={`/neighbourhood/${normalize(currentLocality)}`}
                className="hover:text-white transition-colors capitalize"
              >
                {currentLocality}
              </Link>
              <span>›</span>
              <span className="text-white font-medium capitalize">{currentCategoryTitle}</span>
            </div>
          </nav>

          <div>
            <h1 className="text-3xl text-white sm:text-4xl font-semibold leading-tight mb-4 capitalize">
              {currentCategoryTitle} in <br /> {currentLocality}
            </h1>
            <p className="text-gray-300 text-sm max-w-2xl mb-7 leading-relaxed">
              {filtered[0]?.category?.description ||
                `Explore top recommended ${currentCategoryTitle.toLowerCase()} spots and local options around ${currentLocality}.`}
            </p>

            <NeighbourhoodSearchBar data={data} locations={locations} locationId={locationId} />

            <div className="flex flex-wrap gap-4 mb-6 mt-10">
              {filtered[0]?.neighborhoodStats && filtered[0].neighborhoodStats.length > 0 ? (
                filtered[0].neighborhoodStats.map((s: any, i: number) => (
                  <div
                    key={s.label || i}
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/5"
                  >
                    <span className="w-6 h-6 flex items-center justify-center">
                      {s?.icon ? (
                        <img
                          src={getMediaUrl(s.icon)}
                          alt={s.label || 'Stat icon'}
                          className="w-full h-full object-contain"
                        />
                      ) : (
                        <span className="text-white text-sm">📍</span>
                      )}
                    </span>
                    <div>
                      <div className="text-white text-base font-bold leading-tight">{s.value}</div>
                      <div className="text-gray-300 text-xs mt-0.5">{s.label}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-white/40 text-xs italic">
                  Local neighborhood parameters loading...
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
        {/* 2. BROWSE BY CATEGORY */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categoriesList.map((cat) => (
              <Link
                key={cat}
                href={`/neighbourhood/${normalize(currentLocality)}/${normalize(cat)}`}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  normalize(category) === normalize(cat)
                    ? 'bg-[#a44294] text-white shadow-md shadow-violet-200'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </section>

        {/* 3. FEATURED PLACES */}
        {filtered.length > 0 && (
          <section>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-900">Featured Places</h2>
              <p className="text-sm text-gray-500">
                Handpicked must-visit spots in {currentLocality}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {filtered.slice(0, 1).map((item: any) => {
                const itemDetailPath = getItemDetailUrl({
                  locationId,
                  category,
                  subcategory,
                  slug: item.slug,
                })

                return (
                  <div
                    key={item.id || item.slug}
                    onClick={() => router.push(itemDetailPath)}
                    className="md:col-span-2 relative rounded-xl min-h-[320px] overflow-hidden bg-stone-800 cursor-pointer group transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                  >
                    <Image
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      src={getMediaUrl(item?.FeaturedImage)}
                      alt={item.name || 'Featured place'}
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                      <h3 className="text-2xl text-white sm:text-3xl font-semibold leading-tight mb-3">
                        {item.name}
                      </h3>
                      <p className="text-gray-300 mb-2 text-sm line-clamp-2 max-w-xl">
                        {item.description || 'No description available'}
                      </p>
                      <div className="flex items-center gap-3 text-gray-300 text-sm">
                        <span className="flex items-center gap-1">
                          <StarIcon />
                          <span className="text-white font-semibold">
                            {item.googleData?.googleRating || 'N/A'}
                          </span>
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPinIcon className="w-3 h-3" />
                          {item.locations?.city || 'Chennai'}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}

              <div className="col-span-1 flex flex-col gap-3">
                {filtered.slice(1, 3).map((item: any) => {
                  const itemDetailPath = getItemDetailUrl({
                    locationId,
                    category,
                    subcategory,
                    slug: item.slug,
                  })

                  return (
                    <div
                      key={item.id || item.name}
                      onClick={() => router.push(itemDetailPath)}
                      className="flex-1 relative rounded-xl min-h-[150px] overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-lg"
                    >
                      <Image
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        src={getMediaUrl(item?.FeaturedImage)}
                        alt={item.name || 'Featured sub-place'}
                        fill
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-bold text-sm leading-tight">{item.name}</h3>
                        <p className="text-gray-300 text-xs line-clamp-1 mb-1">
                          {item.description}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-gray-300">
                          <span className="flex items-center gap-0.5">
                            <StarIcon />
                            {item.googleData?.googleRating || 'N/A'}
                          </span>
                          <span>·</span>
                          <span>{item.locations?.city || 'Chennai'}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* 4. ALL PLACES */}
        <section>
          <div className="flex flex-wrap items-end justify-between mb-6 mt-10 gap-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900 capitalize">
                All {currentCategoryTitle} Places
              </h2>
              <p className="text-sm text-gray-500">Discover your options cleanly plotted</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-bold text-black">Sort by:</span>
              <div className="relative border border-gray-200 rounded-lg p-1 bg-white shadow-sm">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 pl-1 py-1 font-medium text-gray-800 cursor-pointer focus:outline-none"
                >
                  <option value="highToLow">Popular (Rating: High to Low)</option>
                  <option value="lowToHigh">Rating: Low to High</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-800">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {sortedAndFiltered.map((item: any) => {
              const itemDetailPath = getItemDetailUrl({
                locationId,
                category,
                subcategory,
                slug: item.slug,
              })

              return (
                <div key={item.name || item.id} className="group cursor-pointer">
                  <Link href={itemDetailPath}>
                    <div className="relative w-full h-72 overflow-hidden rounded-xl bg-gray-100">
                      <Image
                        src={getMediaUrl(
                          item?.FeaturedImage,
                          'https://www.superchennai.com/images/restaurants-banner.jpg',
                        )}
                        alt={item.name || 'Place image'}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="mt-3">
                      <h3 className="font-semibold text-gray-900 leading-tight mb-2 text-base">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 mb-2 text-sm line-clamp-2">
                        {item.description || 'No description available'}
                      </p>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-0.5">
                          <StarIcon />
                          <span className="font-medium text-gray-700">
                            {item?.googleData?.googleRating || 'N/A'}
                          </span>
                        </span>
                        <span className="flex items-center gap-0.5">
                          <MapPinIcon className="w-4 h-4" />
                          {item?.locations?.city || 'Unknown'}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div>
        </section>

        {/* 5. EXPLORE MAP */}
        <section className="mt-10">
          <div className="flex flex-col md:flex-row bg-[#f5f5f5] rounded-xl overflow-hidden">
            <div className="p-8 md:w-[30%] flex flex-col justify-center">
              <h2 className="text-lg font-bold text-gray-900 mb-1">Explore on Map</h2>
              <p className="text-sm text-gray-500 font-medium mb-5 w-[90%]">
                View all localized parameters mapped directly across {currentLocality}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  `${currentCategoryTitle} in ${currentLocality}, Chennai`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#a44294] hover:bg-[#3a0066] text-white px-4 py-2 rounded-lg text-sm font-medium w-fit flex items-center gap-2 shadow-lg transition-colors"
              >
                Open Map
              </a>
            </div>
            <div className="md:w-[70%] h-[350px]">
              <iframe
                className="w-full h-full border-0"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(
                  `${currentLocality}, Chennai`,
                )}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* 6. PROMOTIONAL PROPERTIES BANNER */}
        <PropertiesBanner />
      </div>
    </div>
  )
}
