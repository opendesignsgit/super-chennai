/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @next/next/no-img-element */
'use client'

import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Globe,
  IndianRupee,
  Layers,
  Map as MapIcon,
  MapPin,
  Milestone,
  Phone,
  Sparkles,
  Tag,
  X,
} from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState, useMemo } from 'react'

import NeighbourhoodSearchBar from '../../../Components/NeighbourhoodSearchBar'
import { PropertiesBanner } from '../../../Components/PropertiesBanner'
import { MapPinIcon, StarIcon } from '../../../ui/Icons'

// Helper Function Imports
import {
  getMediaUrl,
  normalizeText,
  parseGalleryImages,
  formatWebsiteUrl,
  formatBusinessHours,
  getRelatedItems,
} from '../../../utils/neighbourhoodHelpers'

interface ClientProps {
  item: any
  allNeighbourhoodData?: any[]
  locations?: any[]
  locationId: string
  category: string
  subcategory: string
  slug: string
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
        className="bg-[#a44294] text-white px-4 py-2 rounded-lg text-sm font-medium cursor-pointer"
      >
        Go Back
      </button>
    </div>
  )
}

export default function NeighbourhoodItemDetailClient({
  item,
  allNeighbourhoodData = [],
  locations = [],
  locationId,
  category,
  subcategory,
  slug,
}: ClientProps) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!item) {
    return (
      <EmptyState
        title="Invalid Location"
        message="We couldn't find details for this location."
        onReset={() => router.push('/neighbourhood')}
      />
    )
  }

  const safeCategory = category?.toLowerCase()
  const safeSubcategory = subcategory && subcategory !== 'undefined' ? subcategory : safeCategory

  // Helpers utilization via useMemo

  const relatedItems = useMemo(() => {
    if (!allNeighbourhoodData || !Array.isArray(allNeighbourhoodData)) return []

    const result = getRelatedItems({
      items: allNeighbourhoodData,
      currentSlug: slug || item?.slug || '',
      category: category || item?.category?.slug || item?.category?.title || '',
      subcategory: subcategory !== 'undefined' ? subcategory : '',
    })

    if (result.length === 0) {
      const currentCatSlug = (
        typeof item?.category === 'object'
          ? item?.category?.slug || item?.category?.title
          : item?.category || category
      )
        ?.toString()
        ?.toLowerCase()
        ?.trim()

      return allNeighbourhoodData.filter((i: any) => {
        if (i.slug === slug || i.slug === item?.slug) return false

        const iCat = (
          typeof i?.category === 'object' ? i?.category?.slug || i?.category?.title : i?.category
        )
          ?.toString()
          ?.toLowerCase()
          ?.trim()

        return iCat === currentCatSlug
      })
    }

    return result
  }, [allNeighbourhoodData, slug, category, subcategory, item])

const itemTitle = item.name || item.title || 'Neighbourhood Detail'
  const galleryImages = useMemo(
    () => parseGalleryImages(item?.gallery, itemTitle),
    [item?.gallery, itemTitle],
  )

  const hoursConfig = item?.businessHours?.[0]
  const itemLocality = item?.locations?.locality || locationId || 'Local Area'
  const itemCity = item?.locations?.city || 'Chennai'
  const categoryTitle = item?.category?.title || category

  const handlePrevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1,
    )
  }

  const handleNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1,
    )
  }

  return (
    <div id="poppinsssFamily" className="w-full">
      {/* 1. HERO BANNER */}
      <div className="relative h-[600px] flex flex-col justify-center pb-10 px-8 overflow-hidden bg-gray-900">
        <img
          src={getMediaUrl(
            item?.FeaturedImage,
            'https://www.superchennai.com/images/restaurants-banner.jpg',
          )}
          alt={itemTitle}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-40"
        />

        <div className="absolute inset-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full pb-0">
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
                href={`/neighbourhood/${normalizeText(itemLocality)}`}
                className="hover:text-white transition-colors capitalize"
              >
                {itemLocality}
              </Link>
              <span>›</span>
              <span className="text-white font-medium capitalize">{categoryTitle}</span>
            </div>
          </nav>

          <div className="relative z-10">
            {item.isFeatured && (
              <div className="mb-3">
                <span className="bg-[#a44294] text-white font-semibold px-5 py-2 rounded-[5px] text-sm tracking-wide select-none">
                  Premium Verified
                </span>
              </div>
            )}
            <h1 className="text-3xl text-[#fff] sm:text-4xl font-semibold leading-tight mb-4 capitalize">
              {itemTitle}
            </h1>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              {item.googlePlaceId && (
                <a
                  href={item.googlePlaceId}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#a44294] hover:bg-[#4c278a] text-white px-5 py-3 rounded-[10px] font-medium text-sm transition-colors shadow-sm"
                >
                  <MapPin className="w-4 h-4 stroke-[2]" />
                  <span>Get Directions</span>
                </a>
              )}

              {item?.contactInfo?.primaryPhone && (
                <a
                  href={`tel:${item.contactInfo.primaryPhone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#a44294] px-5 py-3 rounded-[10px] font-semibold text-sm transition-colors shadow-sm border border-transparent"
                >
                  <Phone className="w-4 h-4 stroke-[2.5] text-[#a44294]" />
                  <span>Call Store</span>
                </a>
              )}

              {item?.contactInfo?.website && (
                <a
                  href={formatWebsiteUrl(item.contactInfo.website)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#a44294] px-5 py-3 rounded-[10px] font-semibold text-sm transition-colors shadow-sm border border-transparent"
                >
                  <Globe className="w-4 h-4 stroke-[2.5] text-[#a44294]" />
                  <span>Visit Website</span>
                </a>
              )}
            </div>

            <NeighbourhoodSearchBar
              data={allNeighbourhoodData}
              locations={locations}
              locationId={locationId}
            />
          </div>
        </div>
      </div>

      {/* 2. HIGHLIGHT QUICK INFO BAR */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-10 pt-0 mt-[-50px] relative z-10 pb-0">
        <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between px-6 py-4 gap-y-4 md:gap-y-0">
          <div className="flex items-start gap-3 flex-1 min-w-[180px]">
            <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#5d32a8]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-400 text-xs font-medium tracking-wide">Location</span>
              <span className="text-[#1a2332] text-sm font-semibold leading-snug">
                {itemLocality}, <br /> {itemCity}
              </span>
            </div>
          </div>

          <div className="hidden md:block h-10 w-[1px] bg-gray-200/80 mx-2" />

          <div className="flex items-start gap-3 flex-1 min-w-[180px]">
            <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
              <MapIcon className="w-5 h-5 text-[#5d32a8]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-400 text-xs font-medium tracking-wide">Reviews</span>
              <span className="text-[#1a2332] text-sm font-semibold leading-snug">
                {item?.totalReviews || item?.googleData?.totalGoogleReviews || 0}+ Reviews
              </span>
            </div>
          </div>

          <div className="hidden md:block h-10 w-[1px] bg-gray-200/80 mx-2" />

          <div className="flex items-start gap-3 flex-1 min-w-[180px]">
            <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
              <Tag className="w-5 h-5 text-[#5d32a8]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-400 text-xs font-medium tracking-wide">Category</span>
              <span className="text-[#1a2332] text-sm font-semibold leading-snug">
                {categoryTitle}
              </span>
            </div>
          </div>

          <div className="hidden md:block h-10 w-[1px] bg-gray-200/80 mx-2" />

          <div className="flex items-start gap-3 flex-1 min-w-[180px]">
            <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
              <IndianRupee className="w-5 h-5 text-[#5d32a8]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-400 text-xs font-medium tracking-wide">
                Pricing / Cost
              </span>
              <span className="text-[#1a2332] text-sm font-semibold leading-snug">
                {item?.priceInfo?.priceRange || ''}
                {item?.priceInfo?.averageCost || 'N/A'}
              </span>
            </div>
          </div>

          <div className="hidden md:block h-10 w-[1px] bg-gray-200/80 mx-2" />

          <div className="flex items-start gap-3 flex-1 min-w-[180px]">
            <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#5d32a8]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-400 text-xs font-medium tracking-wide">Timing Block</span>
              <span className="text-[#1a2332] text-sm font-semibold leading-snug">
                {hoursConfig?.openTime || 'Open 24 hrs'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CONTENT SECTION (LEFT DETAILS + RIGHT LOCATION MAP) */}
      <div className="p-4 md:p-8 flex justify-center items-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
          {/* LEFT COLUMN (7/12) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-8">
            <div>
              <h2 className="text-[#a44294] font-semibold mb-3 text-[18px]">About {itemTitle}</h2>
              <p className="mb-4 text-gray-800 text-sm leading-relaxed">
                {item.description || 'No description available for this place.'}
              </p>
            </div>

            <hr className="border-gray-100" />

            <div>
              <h2 className="text-[#a44294] font-semibold mb-3 text-[18px]">Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                {item?.quickAccessHighlights && item.quickAccessHighlights.length > 0
                  ? item.quickAccessHighlights.map((hl: any) => (
                      <div
                        key={hl.id || hl.title}
                        className="flex items-start space-x-3 bg-gray-50/60 p-3 rounded-xl border border-gray-100"
                      >
                        <div className="p-2 bg-[#F5F3FF] text-[#a44294] rounded-lg flex-shrink-0">
                          {hl?.icon?.url ? (
                            <img
                              src={getMediaUrl(hl.icon)}
                              alt=""
                              className="w-[18px] h-[18px] object-contain"
                            />
                          ) : (
                            <Layers size={18} />
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-0.5">{hl.title}</h4>
                          <p className="text-xs text-gray-600 leading-normal">
                            {hl.desc} {hl.sub && `• ${hl.sub}`}
                          </p>
                        </div>
                      </div>
                    ))
                  : item?.serviceOptions?.map((opt: any) => (
                      <div key={opt.id || opt.label} className="flex items-center space-x-3">
                        <div className="p-2.5 bg-[#F5F3FF] text-[#a44294] rounded-xl">
                          <Sparkles size={18} />
                        </div>
                        <span className="text-sm font-medium text-gray-800">{opt.label}</span>
                      </div>
                    ))}
              </div>
            </div>

            <hr className="border-gray-100" />

            {item?.subCategories && item.subCategories.length > 0 && (
              <div>
                <h2 className="text-[#a44294] font-semibold mb-3 text-[18px]">
                  Related Categories
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {item.subCategories.map((s: any) => (
                    <Link
                      href={`/neighbourhood/${normalizeText(locationId)}/${normalizeText(
                        category,
                      )}/${normalizeText(s.slug)}`}
                      key={s.id || s.slug}
                      className="inline-flex items-center bg-[#F5F3FF] text-[#a44294] px-4 py-2.5 rounded-full text-xs font-medium hover:bg-[#a44294] hover:text-white transition-colors"
                    >
                      <span>{s.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <hr className="border-gray-100" />

            <div>
              <h2 className="text-[#a44294] font-semibold mb-3 text-[18px]">Timings</h2>

              <div className="flex flex-col gap-3 mt-3">
                {item?.businessHours && item.businessHours.length > 0 ? (
                  item.businessHours.map((hours: any, index: number) => {
                    const formattedTime = formatBusinessHours(hours)

                    return (
                      <div
                        key={hours.id || index}
                        className="inline-flex items-center space-x-4 bg-[#F5F3FF] text-[#a44294] px-4 py-2.5 rounded-full text-xs font-medium w-max"
                      >
                        <div className="flex items-center space-x-1.5">
                          <Clock size={15} />
                          <span className="text-gray-900">{hours?.day || 'Operating Hours'}</span>
                        </div>
                        <span className="text-gray-300">|</span>
                        <span className="font-bold text-gray-900">
                          {formattedTime}{' '}
                          {hours?.isClosed && (
                            <span className="text-red-500 font-semibold ml-1">(Closed)</span>
                          )}
                        </span>
                      </div>
                    )
                  })
                ) : (
                  <div className="inline-flex items-center space-x-4 bg-[#F5F3FF] text-[#a44294] px-4 py-2.5 rounded-full text-xs font-medium w-max">
                    <Clock size={15} />
                    <span className="text-gray-900 font-bold">10:00 AM - 9:30 PM</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (5/12) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-[#a44294] font-semibold mb-3 text-[18px]">Location</h2>
              <div className="relative w-full h-[240px] bg-[#E8ECEF] rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src={`https://www.google.com/maps?q=${
                    item?.location?.latitude || 13.0827
                  },${item?.location?.longitude || 80.2707}&z=15&output=embed`}
                  width="100%"
                  height="270"
                  style={{ border: '0', borderRadius: '8px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {item?.amenities && item.amenities.length > 0 && (
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h2 className="text-[#a44294] font-semibold mb-3 text-[18px]">Amenities</h2>

                <div className="space-y-5">
                  {item.amenities.map((amenity: any) => (
                    <div
                      key={amenity.id || amenity.label}
                      className="flex items-start space-x-4 bg-gray-50/50 p-3 rounded-xl"
                    >
                      <div className="p-2.5 bg-white text-[#a44294] rounded-xl shadow-sm mt-0.5 border border-gray-100">
                        <Milestone size={18} />
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-0.5">
                          {amenity.label}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 4. GALLERY SECTION */}
      {galleryImages.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <section className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[#a44294] font-semibold text-[18px]">Store Gallery</h2>
              <button
                onClick={() => {
                  setCurrentImageIndex(0)
                  setIsModalOpen(true)
                }}
                className="flex items-center gap-1 text-[14px] font-semibold text-[#a44294] hover:text-purple-900 transition-colors"
              >
                View All Photos <ArrowRight size={16} />
              </button>
            </div>

            <div className="flex gap-4 pb-2 flex-wrap">
              {galleryImages.map((img: any, idx: number) => (
                <div
                  key={idx}
                  onClick={() => {
                    setCurrentImageIndex(idx)
                    setIsModalOpen(true)
                  }}
                  className="min-w-[200px] md:min-w-[200px] flex-1 snap-start group overflow-hidden rounded-xl cursor-pointer"
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-40 object-cover rounded-xl border border-gray-100 transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                  {img.caption && (
                    <p className="text-xs text-gray-500 mt-1 px-1 italic">{img.caption}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* RELATED ITEMS SECTION */}
      {relatedItems && relatedItems.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
          <section className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[#a44294] font-semibold text-[18px]">
                Explore More {item?.category?.title || categoryTitle} in {itemLocality}
              </h2>
              <Link
                href={`/neighbourhood/${normalizeText(itemLocality)}/${safeCategory}`}
                className="flex items-center gap-1 text-[14px] font-semibold text-[#a44294] hover:text-purple-900 transition-colors"
              >
                View All <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedItems.map((store: any) => {
                // Flexible Image URL Handler (Works for both Payload Media & API Test URL)
                const storeImg = getMediaUrl(
                  store?.FeaturedImage || store?.heroImage,
                  'https://www.superchennai.com/images/restaurants-banner.jpg',
                )

                return (
                  <Link
                    key={store.id || store.slug}
                    href={`/neighbourhood/${normalizeText(locationId)}/${safeCategory}/${store.slug}`}
                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-between group cursor-pointer hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                      <img
                        src={storeImg}
                        alt={store.name || store.title || 'Store Image'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-4 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-bold text-gray-900 text-base mb-1">
                          {store.name || store.title}
                        </h3>
                        <p className="mb-2 text-gray-600 text-sm line-clamp-2">
                          {store.description ? `${store.description.slice(0, 80)}...` : ''}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-50">
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                          <span className="flex items-center gap-1 text-amber-500">
                            <StarIcon />
                            <span className="text-gray-800">
                              {store?.googleData?.totalGoogleReviews || store?.totalReviews || 0}
                            </span>
                          </span>
                          <span className="flex items-center gap-1 text-gray-500">
                            <MapPinIcon className="w-3 h-3" />
                            <span className="text-gray-800">
                              {store?.locations?.city || itemCity}
                            </span>
                          </span>
                        </div>

                        <button className="p-2 bg-purple-100 text-purple-700 rounded-full group-hover:bg-[#a44294] group-hover:text-white transition-colors duration-200">
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>

          <PropertiesBanner />
        </div>
      )}

      {/* 6. FULL-VIEW SLIDER GALLERY MODAL */}
      {isModalOpen && galleryImages.length > 0 && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          <div className="relative w-full max-w-5xl aspect-[16/10] flex items-center justify-center px-4">
            <button
              onClick={handlePrevSlide}
              className="absolute left-2 md:left-6 z-10 p-3 bg-white/10 hover:bg-[#a44294] text-white rounded-full border border-white/10 transition-all duration-200 focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="w-full h-full flex items-center justify-center select-none">
              <img
                src={galleryImages[currentImageIndex]?.url || '/images/no-image.png'}
                alt={galleryImages[currentImageIndex]?.alt || 'Gallery Image'}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300"
              />
            </div>

            <button
              onClick={handleNextSlide}
              className="absolute right-2 md:right-6 z-10 p-3 bg-white/10 hover:bg-[#a44294] text-white rounded-full border border-white/10 transition-all duration-200 focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          <div className="mt-4 text-center text-white/80 max-w-xl px-4">
            <p className="text-sm font-medium tracking-wide">
              {galleryImages[currentImageIndex]?.caption || galleryImages[currentImageIndex]?.alt}
            </p>
            <span className="text-xs text-white/40 block mt-1">
              {currentImageIndex + 1} / {galleryImages.length}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
