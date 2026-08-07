/* eslint-disable @next/next/no-img-element */
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
import { WhyChooseAndLifestyleSection } from '../Components/WhyChooseAndLifestyleSection'
import { QuickAccessSection } from '../Components/QuickAccessSection'

interface NeighbourhoodDetailClientProps {
  locationData: any
  allLocations?: any[]
  neighbourhoodDocs?: any[]
  locationId: string
  faqDataProps?: any
}
export default function NeighbourhoodLocationDetailPage({
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
  const mapSearchQuery = locationData?.locality || locationData?.value || locationId || 'Chennai'
  return (
    <div id="poppinsssFamily">
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
      {/* 2. MAP & OVERVIEW SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          {/* Embedded Map */}
          <div className="flex-1 h-[320px] rounded-xl overflow-hidden border border-gray-200 shadow-sm detailsecondneightbourhood">
            <iframe
              title="Location Detail Map Side"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                mapSearchQuery,
              )}&output=embed`}
            />
          </div>
          {/* Overview Panel */}
          {(locationData?.overviewDescription ||
            (locationData?.overviewPoints && locationData.overviewPoints.length > 0)) && (
            <div className="w-full lg:w-80 flex flex-col justify-center detailsecondneightbourhoodsecond">
              <h3 className="text-[#a44294] font-semibold mb-3 neighbourtwoparagraph text-lg">
                OVERVIEW
              </h3>
              <p className="text-gray-900 leading-relaxed mb-4 neighbourtwoparagraph text-base">
                {locationData?.overviewDescription ||
                  'Discover everything this vibrant neighborhood has to offer, from its bustling streets to its peaceful residential zones.'}
              </p>
              <ul className="space-y-2.5">
                {locationData?.overviewPoints && locationData.overviewPoints.length > 0 ? (
                  locationData.overviewPoints.map((item: any, i: number) => (
                    <li
                      key={item.id || i}
                      className="flex items-start gap-2.5 text-gray-900 text-sm"
                    >
                      <span className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center">
                        {item?.icon ? (
                          <img
                            src={getMediaUrl(item.icon)}
                            alt={item.icon?.alt || 'icon'}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-gray-800 neighbourtwoparagraph">🏙️</span>
                        )}
                      </span>
                      <span className="leading-tight font-medium">{item.point}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400 text-sm italic">
                    No overview highlights available.
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </section>
      {/* 3. CATEGORIES SECTION */}
      <CategoriesSection locationId={locationId} data={neighbourhoodDocs} location={locationData} />
      {/* 3. QUICK ACCESS SECTION */}
      <QuickAccessSection quickAccess={locationData?.quickAccess} />
      {/* 4. WHY CHOOSE US & LIFESTYLE SCORE SECTION */}
      <WhyChooseAndLifestyleSection locationData={locationData} />
      {/* 4. WHAT'S NEARBY SECTION */}
      <WhatsNearbySection data={neighbourhoodDocs} />
      {/* 6. FAQ SECTION */}
      <FaqSection faqDataProps={faqDataProps} />
      {/* 7. NEARBY LOCALITIES CAROUSEL */}
      <NearbyLocalitiesSection
        currentLocality={locationData?.locality}
        allLocations={allLocations}
      />
      {/* 5. PROPERTIES PROMO BANNER */}
      <PropertiesBanner />
    </div>
  )
}
