'use client'

import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import { MapPin } from 'lucide-react'
import { NextArrow, PrevArrow } from '../ui/SliderArrows'
import { calculateDistance, formatDistance, formatTravelTime } from '../lib/distanceUtils'

interface WhatsNearbySectionProps {
  data: any[]
}

export const WhatsNearbySection: React.FC<WhatsNearbySectionProps> = ({ data}) => {
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

        setSortedPlaces(withDistance.sort((a, b) => a.computedDistance - b.computedDistance))
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
              ? `${place.FeaturedImage.url}`
              : 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=400&auto=format&fit=crop'

            const categoryIconUrl = place.category?.icon?.url
              ? `${place.category.icon.url}`
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