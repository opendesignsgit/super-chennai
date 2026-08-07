'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '../ui/SliderArrows'

interface NearbyLocalitiesSectionProps {
  currentLocality?: string
  allLocations?: any[]
}

export const NearbyLocalitiesSection: React.FC<NearbyLocalitiesSectionProps> = ({
  currentLocality,
  allLocations = [],
}) => {
  const filteredLocations = allLocations.filter((item) => item.locality !== currentLocality)

  if (filteredLocations.length === 0) return null

  const sliderSettings = {
    dots: false,
    infinite: filteredLocations.length > 3,
    speed: 500,
    slidesToShow: Math.min(4, Math.max(1, filteredLocations.length)),
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
          <div>
            <span className="text-[#a44294] font-semibold text-sm">Nearby Localities</span>
            <h2 className="text-2xl font-bold text-gray-900 mt-1">
              Explore Neighbourhoods Around {currentLocality}
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
          {filteredLocations.map((item, index) => (
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
  )
}