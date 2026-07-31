'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import NeighbourhoodSearchBar from '../Components/NeighbourhoodSearchBar'

const API_BASE_URL_API_TEST_DEV = 'http://localhost:3000/'

// --- HAVERSINE & DISTANCE UTILS ---
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function formatDistance(distanceInKM: number) {
  if (!distanceInKM || distanceInKM === Infinity) return '500 m away'
  if (distanceInKM < 1) {
    const meters = Math.round(distanceInKM * 1000)
    return `${meters < 50 ? 50 : meters} m away`
  }
  return `${distanceInKM.toFixed(1)} km away`
}

function formatTravelTime(distanceInKM: number) {
  if (!distanceInKM || distanceInKM === Infinity) return '2 mins walk'
  let durationInMinutes = 0
  let mode = ''

  if (distanceInKM <= 1.5) {
    durationInMinutes = Math.round(distanceInKM * 12)
    mode = 'walk'
  } else {
    durationInMinutes = Math.round(distanceInKM * 3)
    mode = 'drive'
  }

  if (durationInMinutes < 1) durationInMinutes = 1

  if (durationInMinutes >= 60) {
    const hours = Math.floor(durationInMinutes / 60)
    const mins = durationInMinutes % 60
    return mins > 0 ? `${hours} hr ${mins} mins ${mode}` : `${hours} hr ${mode}`
  }

  return `${durationInMinutes} mins ${mode}`
}

// --- ARROWS ---
const NextArrow1 = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-white/100 rounded-full w-8 h-8 flex items-center justify-center text-gray-800 font-bold shadow hover:bg-white z-20 opacity-100 transition-opacity text-lg"
  >
    <ChevronRight className="w-5 h-5 text-[#a44294]" strokeWidth={3} />
  </button>
)

const PrevArrow1 = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-white/100 rounded-full w-8 h-8 flex items-center justify-center text-gray-800 font-bold shadow hover:bg-white z-20 opacity-100 transition-opacity text-lg"
  >
    <ChevronLeft className="w-5 h-5 text-[#a44294]" strokeWidth={3} />
  </button>
)

const NextArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-white/100 rounded-full w-8 h-8 flex items-center justify-center text-gray-800 font-bold shadow hover:bg-white z-20 opacity-100 transition-opacity text-lg"
  >
    <ChevronRight className="w-5 h-5 text-[#a44294]" strokeWidth={3} />
  </button>
)

const PrevArrow = ({ onClick }: any) => (
  <button
    onClick={onClick}
    className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-white/100 rounded-full w-8 h-8 flex items-center justify-center text-gray-800 font-bold shadow hover:bg-white z-20 opacity-100 transition-opacity text-lg"
  >
    <ChevronLeft className="w-5 h-5 text-[#a44294]" strokeWidth={3} />
  </button>
)

function StarIcon() {
  return (
    <svg className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function MapPinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  )
}

// --- CATEGORIES TABBED SECTION ---
function CategoriesSection({ locationId, data = [], location }: any) {
  const transformedSlides = Object.values(
    data.reduce((acc: any, item: any) => {
      const categoryName = item?.category?.title || 'Others'
      const categoryIcon = item?.category?.icon || '📍'

      if (!acc[categoryName]) {
        acc[categoryName] = {
          id: categoryName,
          category: categoryName,
          icon: categoryIcon,
          title: `${categoryName} Nearby`,
          count: ``,
          imagelist: [],
          lists: [],
          locations: item.locations || null,
        }
      }

      if (item?.heroImage?.url) {
        acc[categoryName].imagelist.push(item.heroImage.url)
      }

      acc[categoryName].lists.push({
        slug: item.slug || '',
        icon: categoryIcon,
        name: item.name || 'Unknown',
        type: item.type || '',
        dist: item.distance || 'Nearby',
        FeaturedImage: item.FeaturedImage || '',
        description: item.description || '',
        googleData: item.googleData || '',
        locations: item.locations || null,
      })

      return acc
    }, {}),
  ).map((slide: any) => {
    slide.count = `${slide.lists.length}+ ${slide.category} Nearby`

    if (slide.imagelist.length === 0) {
      slide.imagelist = ['https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80']
    }
    return slide
  })

  const [activeCategory, setActiveCategory] = useState<string>(() => {
    return transformedSlides[0]?.category || ''
  })

  useEffect(() => {
    if (transformedSlides.length > 0 && !activeCategory) {
      setActiveCategory(transformedSlides[0].category)
    }
  }, [data])

  const categoriesList = transformedSlides.map((item: any) => ({
    category: item.category,
    icon: item.icon,
  }))

  const filteredSlides = transformedSlides.filter((slide: any) => slide.category === activeCategory)

  const slickSettings = {
    dots: true,
    infinite: transformedSlides.length > 0,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow1 />,
    prevArrow: <PrevArrow1 />,
    appendDots: (dots: any) => (
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <ul className="flex gap-1.5 justify-center items-center m-0 p-0">{dots}</ul>
      </div>
    ),
    customPaging: () => <button className="w-1.5 h-1.5 bg-white/50 rounded-full transition-all" />,
  }

  const slickSettings2 = {
    dots: true,
    infinite: transformedSlides.length > 0,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: any) => (
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
        <ul className="flex gap-1.5 justify-center items-center m-0 p-0">{dots}</ul>
      </div>
    ),
    customPaging: () => <button className="w-1.5 h-1.5 bg-white/50 rounded-full transition-all" />,
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6 max-w-7xl mx-auto items-start">
      {/* Category Sidebar */}
      <div className="w-full md:w-60 space-y-2 flex-shrink-0">
        {categoriesList.map((cat: any) => (
          <button
            key={cat.category}
            onClick={() => setActiveCategory(cat.category)}
            className={`cursor-pointer w-full flex items-center justify-between px-4 py-3 rounded-lg text-[16px] transition-all ${
              activeCategory === cat.category
                ? 'bg-[#a44294] text-white font-medium shadow-md'
                : 'bg-white border border-gray-200 text-[#000] hover:bg-purple-50'
            }`}
          >
            <span className="flex items-center gap-2">
              {cat.icon && typeof cat.icon === 'object' && cat.icon.url ? (
                <img
                  src={`${API_BASE_URL_API_TEST_DEV || ''}${cat.icon.url}`}
                  alt={cat.icon.alt || cat.category}
                  className="w-5 h-5 object-contain"
                />
              ) : (
                <span>{cat.icon || '📍'}</span>
              )}
              {cat.category}
            </span>
            <span>›</span>
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 min-w-0 w-full">
        {filteredSlides.length > 0 ? (
          filteredSlides.map((slide: any) => {
            const safeCat = slide.category?.toLowerCase()
            return (
              <div key={slide.id} className="w-full">
                {/* Banner Slider */}
                <div className="relative rounded-xl overflow-hidden mb-4 h-[360px]">
                  <Slider {...slickSettings}>
                    {slide.imagelist.map((imgUrl: string, index: number) => (
                      <a key={index} href={`/neighbourhood/${locationId}/${safeCat}`}>
                        <div className="relative h-[360px] w-full overflow-hidden group">
                          <img
                            src={
                              imgUrl.startsWith('http')
                                ? imgUrl
                                : `${API_BASE_URL_API_TEST_DEV || ''}${imgUrl}`
                            }
                            alt={slide.title}
                            className="w-full h-[360px] object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                        </div>
                      </a>
                    ))}
                  </Slider>

                  <div className="absolute bottom-11 left-10 right-10 flex items-end justify-between pointer-events-none z-10">
                    <div>
                      <h3 className="text-white font-bold text-xl">{slide.title}</h3>
                      <p className="text-gray-300 text-sm">{slide.count}</p>
                    </div>
                    <a href={`/neighbourhood/${locationId}/${safeCat}`}>
                      <button className="cursor-pointer pointer-events-auto flex items-center gap-2 bg-white text-[#a44294] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#a44294] hover:text-white transition-colors duration-200 whitespace-nowrap">
                        Explore {slide.category} →
                      </button>
                    </a>
                  </div>
                </div>

                {/* Nearby Category Items */}
                <div>
                  <div className="flex items-center justify-between mb-5 mt-5">
                    <span className="font-semibold text-gray-800">
                      Popular Nearby {slide.category}
                    </span>
                    <a
                      href={`/neighbourhood/${locationId}/${safeCat}`}
                      className="text-[#a44294] font-medium hover:underline"
                    >
                      View All
                    </a>
                  </div>

                  <div className="border border-gray-200 shadow-sm rounded-lg p-4 bg-white">
                    {slide.lists.length > 3 ? (
                      <Slider {...slickSettings2}>
                        {slide.lists.map((item: any, i: number) => (
                          <div key={item.slug || item.name || i} className="outline-none px-3">
                            <div className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-gray-100 shadow-xs">
                              <a
                                href={`/neighbourhood/${locationId}/${safeCat}/${safeCat}/${item.slug}`}
                              >
                                <div className="w-full h-72 overflow-hidden">
                                  <img
                                    src={
                                      item?.FeaturedImage?.url
                                        ? (API_BASE_URL_API_TEST_DEV || '') + item.FeaturedImage.url
                                        : 'https://www.superchennai.com/images/restaurants-banner.jpg'
                                    }
                                    onError={(e: any) => {
                                      e.target.onerror = null
                                      e.target.src =
                                        'https://www.superchennai.com/images/restaurants-banner.jpg'
                                    }}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                  />
                                </div>
                                <div className="p-3">
                                  <h3 className="font-semibold text-gray-900 leading-tight mb-2">
                                    {item.name}
                                  </h3>
                                  <p className="text-gray-500 mb-2 text-[14px] line-clamp-2">
                                    {item.description
                                      ? `${item.description.slice(0, 70)}...`
                                      : 'No description available'}
                                  </p>
                                  <div className="flex items-center gap-3 text-gray-500">
                                    <span className="flex items-center gap-0.5">
                                      <StarIcon />
                                      <span className="font-medium text-gray-700 text-xs">
                                        {item?.googleData?.googleRating || 'N/A'}
                                      </span>
                                    </span>
                                    <span className="flex items-center gap-0.5 text-xs">
                                      <MapPinIcon className="w-3.5 h-3.5" />
                                      {item?.locations?.city || location?.city || 'Unknown'}
                                    </span>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        ))}
                      </Slider>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                        {slide.lists.map((item: any, i: number) => (
                          <div
                            key={item.slug || item.name || i}
                            className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-gray-100 shadow-xs"
                          >
                            <a
                              href={`/neighbourhood/${locationId}/${safeCat}/${safeCat}/${item.slug}`}
                            >
                              <div className="w-full h-72 overflow-hidden">
                                <img
                                  src={
                                    item?.FeaturedImage?.url
                                      ? (API_BASE_URL_API_TEST_DEV || '') + item.FeaturedImage.url
                                      : 'https://www.superchennai.com/images/restaurants-banner.jpg'
                                  }
                                  onError={(e: any) => {
                                    e.target.onerror = null
                                    e.target.src =
                                      'https://www.superchennai.com/images/restaurants-banner.jpg'
                                  }}
                                  alt={item.name}
                                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                                />
                              </div>
                              <div className="p-3">
                                <h3 className="font-semibold text-gray-900 leading-tight mb-2">
                                  {item.name}
                                </h3>
                                <p className="text-gray-500 mb-2 text-[14px] line-clamp-2">
                                  {item.description
                                    ? `${item.description.slice(0, 70)}...`
                                    : 'No description available'}
                                </p>
                                <div className="flex items-center gap-3 text-gray-500">
                                  <span className="flex items-center gap-0.5">
                                    <StarIcon />
                                    <span className="font-medium text-gray-700 text-xs">
                                      {item?.googleData?.googleRating || 'N/A'}
                                    </span>
                                  </span>
                                  <span className="flex items-center gap-0.5 text-xs">
                                    <MapPinIcon className="w-3.5 h-3.5" />
                                    {item?.locations?.city || 'Unknown'}
                                  </span>
                                </div>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <div className="w-full text-center py-24 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50">
            <span className="text-3xl block mb-2">📍</span>
            No nearby data available for this category yet.
          </div>
        )}
      </div>
    </div>
  )
}

// --- WHAT'S NEARBY COMPONENT ---
function WhatsNearbySection({ data }: { data: any[] }) {
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(
    null,
  )
  const [sortedPlaces, setSortedPlaces] = useState<any[]>([])

  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        },
        () => {
          setUserLocation({ latitude: 13.0827, longitude: 80.2707 })
        },
      )
    }
  }, [])

  useEffect(() => {
    if (data && Array.isArray(data)) {
      if (userLocation) {
        const withDistance = data.map((place) => {
          const itemLat = place.location?.latitude
          const itemLng = place.location?.longitude

          if (!itemLat || !itemLng) {
            return { ...place, computedDistance: Infinity }
          }

          const dist = calculateDistance(
            userLocation.latitude,
            userLocation.longitude,
            itemLat,
            itemLng,
          )

          return { ...place, computedDistance: dist }
        })

        const sorted = withDistance.sort((a, b) => a.computedDistance - b.computedDistance)
        setSortedPlaces(sorted)
      } else {
        setSortedPlaces(data)
      }
    }
  }, [data, userLocation])

  const settings = {
    dots: false,
    infinite: sortedPlaces.length > 4,
    speed: 500,
    slidesToShow: Math.min(5, Math.max(1, sortedPlaces.length)),
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  }

  if (!sortedPlaces || sortedPlaces.length === 0) return null

  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <span className="text-[#a44294] font-semibold text-lg">Getting Around</span>
          <h2 className="text-2xl font-bold text-gray-900 mb-1">What's Nearby?</h2>
          <p className="text-gray-500 text-sm">
            Everything you need is just minutes away. <br />
            Well-connected and easy to reach, always.
          </p>
        </div>

        <Slider {...settings}>
          {sortedPlaces.map((place, idx) => {
            const imageUrl = place.FeaturedImage?.url
              ? `${API_BASE_URL_API_TEST_DEV || ''}${place.FeaturedImage.url}`
              : 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=400&auto=format&fit=crop'

            const categoryIconUrl = place.category?.icon?.url
              ? `${API_BASE_URL_API_TEST_DEV || ''}${place.category.icon.url}`
              : null

            const readableDistance = formatDistance(place.computedDistance)
            const readableTime = formatTravelTime(place.computedDistance)

            return (
              <div key={`nearby-${place.id || idx}`} className="px-2">
                <div className="bg-white border border-slate-100 rounded-2xl p-4 flex flex-col items-center text-center shadow-xs relative h-full">
                  <div className="w-12 h-12 rounded-full bg-[#F8EDF6] border border-[#a44294] flex items-center justify-center overflow-hidden p-2.5">
                    {categoryIconUrl ? (
                      <img
                        src={categoryIconUrl}
                        alt="icon"
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <MapPin className="w-5 h-5 text-[#a44294]" />
                    )}
                  </div>

                  <div className="bg-white border border-[#a44294] px-4 py-0.5 rounded-full shadow-xs mt-3">
                    <span className="font-semibold text-[#a44294] text-xs whitespace-nowrap">
                      {readableTime}
                    </span>
                  </div>

                  <div className="w-full aspect-[4/2.5] rounded-lg overflow-hidden mb-3 relative bg-slate-100 mt-4">
                    <img
                      src={imageUrl}
                      alt={place.name || place.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-1 line-clamp-1">
                    {place.name || place.title}
                  </h3>
                  <p className="text-gray-500 text-xs mb-3 line-clamp-1">
                    {place.category?.title || place.category || 'Spot'}
                  </p>

                  <div className="mt-auto flex items-center justify-center gap-1 text-slate-500 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#a44294]" />
                    <span className="text-gray-500 text-xs">{readableDistance}</span>
                  </div>

                  <button
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/search/?api=1&query=${place.location?.latitude},${place.location?.longitude}`,
                        '_blank',
                      )
                    }
                    className="w-full py-1.5 border border-[#a44294] text-xs font-semibold rounded-md text-[#a44294] bg-white hover:bg-[#FAF9FF] transition-colors cursor-pointer"
                  >
                    View Location
                  </button>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </section>
  )
}

// --- PROPERTIES BANNER ---
function PropertiesNeighbourhood() {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#A44294] via-[#8D347D] to-[#752666] px-8 py-8 md:px-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-lg">
        <div className="flex-1 z-10">
          <span className="text-white/90 text-sm font-medium">Looking to Buy / Rent?</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1 mb-2">
            Explore properties in Chennai
          </h2>
          <p className="text-white/80 text-sm">
            Find homes near top schools, hospitals, metro & more.
          </p>
        </div>

        <div className="z-10 shrink-0">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.superchennai.com/properties"
            className="group inline-flex items-center justify-between bg-white text-[#a44294] font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md hover:bg-purple-50 transition-all"
          >
            <span>Explore Properties</span>
            <span className="ml-4 pl-4 border-l border-purple-100 group-hover:translate-x-1 transition-transform">
              ➔
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

// --- FAQ COMPONENT ---
function FaqNeighbourhoods({ faqDataProps }: { faqDataProps?: any }) {
  const subHeading = faqDataProps?.subHeading || 'Frequently Asked Questions'
  const heading = faqDataProps?.heading || 'Frequently Asked Questions About This Area'
  const description = faqDataProps?.description || 'Quick answers to the most common questions.'
  const dynamicFaqs = faqDataProps?.faqs || []

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!dynamicFaqs.length) return null

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  const halfLength = Math.ceil(dynamicFaqs.length / 2)
  const leftColumn = dynamicFaqs.slice(0, halfLength)
  const rightColumn = dynamicFaqs.slice(halfLength)

  const renderCard = (item: any, relIdx: number) => {
    const isOpen = openIndex === relIdx
    return (
      <div
        key={relIdx}
        className="bg-[#FAF9FF] border border-slate-100 rounded-lg shadow-xs overflow-hidden transition-all duration-200"
      >
        <button
          onClick={() => toggleFAQ(relIdx)}
          className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <span className="text-[#1d1d1d] font-semibold text-sm sm:text-base">{item.question}</span>
          <span className="text-xl font-bold text-[#a44294]">{isOpen ? '−' : '+'}</span>
        </button>

        {isOpen && (
          <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{item.answer}</div>
        )}
      </div>
    )
  }

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-8 max-w-2xl">
          <span className="text-[#a44294] font-semibold text-base">{subHeading}</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-1 mb-2">{heading}</h2>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {leftColumn.map((item: any, idx: number) => renderCard(item, idx))}
          </div>
          <div className="flex flex-col gap-4">
            {rightColumn.map((item: any, idx: number) => renderCard(item, idx + halfLength))}
          </div>
        </div>
      </div>
    </section>
  )
}

// --- MAIN PAGE CLIENT COMPONENT ---
export default function NeighbourhoodDetailClient({
  locationData,
  allLocations = [],
  neighbourhoodDocs = [],
  locationId,
  faqDataProps,
}: {
  locationData: any
  allLocations: any[]
  neighbourhoodDocs: any[]
  locationId: string
  faqDataProps?: any
}) {
  const router = useRouter()

  if (!locationData) {
    return (
      <div className="text-center py-20 bg-white">
        <h2 className="text-2xl font-bold text-gray-800">Invalid Location</h2>
        <p className="text-gray-500 mt-2">We couldn't find details for this location.</p>
        <button
          onClick={() => router.push('/neighbourhood')}
          className="mt-4 px-5 py-2 bg-[#a44294] text-white rounded-lg text-sm cursor-pointer"
        >
          Back to Neighbourhoods
        </button>
      </div>
    )
  }

  // Group Categories for Header Stats
  const grouped = neighbourhoodDocs.reduce((acc: any, item: any) => {
    const rawCat = item?.category?.title || item?.category || 'Others'
    const cat = typeof rawCat === 'string' ? rawCat.trim() : 'Others'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(item)
    return acc
  }, {})

  const categories = Object.keys(grouped)

  const sliderSettings = {
    dots: false,
    infinite: allLocations.length > 3,
    speed: 500,
    slidesToShow: Math.min(4, Math.max(1, allLocations.length - 1)),
    slidesToScroll: 1,
    prevArrow: <PrevArrow1 />,
    nextArrow: <NextArrow1 />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  }

  const bannerImg = locationData?.image?.url || '/images/locationdefult.png'

  return (
    <div className="w-full">
      {/* 1. HERO BANNER SECTION */}
      <div className="relative min-h-[500px] flex flex-col justify-center pb-10 px-4 sm:px-8 overflow-hidden bg-[#0a051e]">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src={bannerImg}
            alt={locationData?.locality || 'Neighbourhood Banner'}
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(10,5,30,0.5) 0%, rgba(10,5,30,0.75) 60%, rgba(10,5,30,0.92) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full">
          <nav className="text-gray-400 text-xs mb-5">
            <div className="flex gap-2 items-center">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>›</span>
              <Link href="/neighbourhood" className="hover:text-white transition-colors">
                Neighbourhood
              </Link>
              <span>›</span>
              <span className="text-white font-medium">{locationData?.locality}</span>
            </div>
          </nav>

          <div>
            <h1 className="text-3xl text-white sm:text-4xl font-semibold leading-tight mb-4">
              {locationData?.locality}
            </h1>
            <p className="text-gray-300 text-sm max-w-2xl sm:max-w-3xl mb-7 leading-relaxed">
              {locationData?.about || 'Explore facilities, hotspots, and highlights.'}
            </p>
          </div>

          <div className="text-white mt-8 pt-4">
            <div className="max-w-7xl mx-auto flex items-center justify-start gap-y-4 gap-x-6 flex-wrap">
              {categories.slice(0, 5).map((s, i) => {
                const totalCount = grouped[s]?.length || 0
                return (
                  <div key={`stat-cat-${s}-${i}`} className="flex items-center gap-3">
                    {i > 0 && <div className="hidden sm:block w-px h-8 bg-white/20 mr-3" />}
                    <span className="text-2xl">📍</span>
                    <div>
                      <div className="text-[#f9f9f9] text-xs font-medium">{s}</div>
                      <div className="text-white text-sm font-bold ml-[3px]">{totalCount}+</div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div>
              <h1 className="text-3xl text-[#fff] sm:text-4xl font-semibold leading-tight mb-4">
                {location?.label}
              </h1>
              <p className="text-gray-300 text-sm max-w-2xl sm:max-w-3xl mb-7 leading-relaxed neighbourtwoheaidngssparagraph">
                {location?.about}
              </p>
              <NeighbourhoodSearchBar locationId={undefined} onSearch={undefined} />
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAP & OVERVIEW SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 h-[300px] rounded-xl overflow-hidden border border-gray-200">
            <iframe
              title="Location Detail Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                locationData?.locality || '',
              )}&output=embed`}
            />
          </div>

          <div className="lg:w-80 flex flex-col justify-center">
            <h3 className="text-[#a44294] font-semibold mb-3 text-lg">OVERVIEW</h3>
            <p className="text-black leading-relaxed mb-4 text-sm">
              {locationData?.overviewDescription ||
                'Discover everything this vibrant neighborhood has to offer, from its bustling streets to its peaceful residential zones.'}
            </p>

            <ul className="space-y-2.5">
              {locationData?.overviewPoints && locationData.overviewPoints.length > 0 ? (
                locationData.overviewPoints.map((item: any, i: number) => (
                  <li
                    key={`overview-pt-${i}`}
                    className="flex items-start gap-2 text-black text-sm"
                  >
                    <span className="mt-0.5">🏙️</span>
                    <span>{item.point || item}</span>
                  </li>
                ))
              ) : (
                <li className="text-gray-400 text-sm italic">No overview highlights available.</li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* 3. CATEGORIES TABBED SECTION (ADDED FRONT & CENTER) */}
      <CategoriesSection locationId={locationId} data={neighbourhoodDocs} location={locationData} />

      {/* 6. NEARBY LOCALITIES CAROUSEL */}
      <section className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
            <div>
              <span className="text-[#a44294] font-semibold text-sm">Nearby Localities</span>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">
                Explore Neighbourhoods Around {locationData?.locality}
              </h2>
            </div>
            <Link
              href="/neighbourhood"
              className="bg-[#a44294] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-900 transition-colors w-fit"
            >
              View All Localities →
            </Link>
          </div>

          <Slider {...sliderSettings}>
            {allLocations
              .filter((item) => item.locality !== locationData?.locality)
              .map((item, index) => (
                <div key={`carousel-loc-${item.id || item.locality}-${index}`} className="px-2">
                  <div className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                    <div className="relative h-36 w-full rounded-lg overflow-hidden mb-3">
                      <Image
                        src={item.image?.url || '/images/locationdefult.png'}
                        alt={item.locality || 'Locality'}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-1">{item.locality}</h3>
                    <p className="text-gray-500 text-xs line-clamp-2 mb-4">
                      {item.about || 'Explore key details and essentials here.'}
                    </p>
                    <Link
                      href={`/neighbourhood/${encodeURIComponent(item.locality)}`}
                      className="mt-auto block text-center text-xs font-semibold text-[#a44294] border border-[#a44294] py-2 rounded-lg hover:bg-[#a44294] hover:text-white transition-colors"
                    >
                      View Neighbourhood →
                    </Link>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </section>

      {/* 4. WHAT'S NEARBY SLIDER (DISTANCE BASED) */}
      <WhatsNearbySection data={neighbourhoodDocs} />

      {/* 5. PROPERTIES BANNER */}
      <PropertiesNeighbourhood />

      {/* 7. FAQ SECTION */}
      <FaqNeighbourhoods faqDataProps={faqDataProps} />
    </div>
  )
}
