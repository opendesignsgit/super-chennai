'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { CategoriesSection } from '../Components/CategoriesSection'
import { WhatsNearbySection } from '../Components/WhatsNearbySection'
import { PropertiesBanner } from '../Components/PropertiesBanner'
import { FaqSection } from '../Components/FaqSection'
import { NearbyLocalitiesSection } from '../Components/NearbyLocalitiesSection'
import { NeighbourhoodSearchBar } from '../Components/NeighbourhoodSearchBar'

const API_BASE_URL = 'http://localhost:3000/'

interface NeighbourhoodDetailClientProps {
  locationData: any
  allLocations?: any[]
  neighbourhoodDocs?: any[]
  locationId: string
  faqDataProps?: any
}

export default function NeighbourhoodDetailClient({
  locationData,
  allLocations = [],
  neighbourhoodDocs = [],
  locationId,
  faqDataProps,
}: NeighbourhoodDetailClientProps) {
  const router = useRouter()

  if (!locationData) {
    return (
      <div className="text-center py-20 bg-white">
        <h2 className="text-2xl font-bold text-gray-800">Invalid Location</h2>
        <p className="text-gray-500 mt-2">We couldnt find details for this location.</p>
        <button
          onClick={() => router.push('/neighbourhood')}
          className="mt-4 px-5 py-2 bg-[#a44294] text-white rounded-lg text-sm cursor-pointer"
        >
          Back to Neighbourhoods
        </button>
      </div>
    )
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

          {/* Search Bar Integration inside Hero Header */}
          <div className="mt-6">
            <NeighbourhoodSearchBar 
              data={neighbourhoodDocs} 
              locations={allLocations} 
              locationId={locationId} 
            />
          </div>
        </div>
      </div>

      {/* 2. CATEGORIES SECTION */}
      <CategoriesSection
        locationId={locationId}
        data={neighbourhoodDocs}
        location={locationData}
        apiBaseUrl={API_BASE_URL}
      />

      {/* 3. WHAT'S NEARBY SECTION */}
      <WhatsNearbySection data={neighbourhoodDocs} apiBaseUrl={API_BASE_URL} />

      {/* 4. PROPERTIES PROMO BANNER */}
      <PropertiesBanner />

      {/* 5. FAQ SECTION */}
      <FaqSection faqDataProps={faqDataProps} />

      {/* 6. NEARBY LOCALITIES CAROUSEL */}
      <NearbyLocalitiesSection
        currentLocality={locationData?.locality}
        allLocations={allLocations}
      />
    </div>
  )
}