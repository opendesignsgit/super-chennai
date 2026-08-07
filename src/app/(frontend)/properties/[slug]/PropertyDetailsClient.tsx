/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
'use client'

import {
    ArrowLeftIcon,
    ArrowRight,
    ArrowRightIcon,
    Banknote,
    Bath,
    Battery,
    Bed,
    BookOpen,
    Boxes,
    Building,
    Building2,
    Car,
    ChevronDown,
    ChevronUp,
    CreditCard,
    DoorClosed,
    Droplet,
    Flame,
    HandCoins,
    Handshake,
    HelpCircle,
    Home,
    Layers,
    Layout,
    MapPin,
    Microwave,
    Palette,
    ShowerHead,
    Sofa,
    Sparkles,
    Sun,
    Tv,
    User,
    Users,
    UtensilsCrossed,
    Wallet,
    WashingMachine,
    Wind,
    Wrench,
    Zap
} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { ContactForm } from '../Components/ContactForm'
// import ContactForm from '../Components/ContactForm'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || ''
const defaultImage = '/images/default-hero.jpg'

const formatPrice = (val: number) => val?.toLocaleString('en-IN') || val
const formatLabel = (str: string) =>
  str ? str.replace(/([A-Z])/g, ' $1').replace(/^./, (s) => s.toUpperCase()) : ''

const AutoShrinkText = ({ text, className }: { text: string; [key: string]: any }) => (
  <h1 className={className}>{text}</h1>
)

interface PropertyDetailsProps {
  property: Record<string, any>
}

export default function PropertyDetailsClient({ property }: PropertyDetailsProps) {
  // State variables
  const [openSpec, setOpenSpec] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [openFeatures, setOpenFeatures] = useState(true)
  const [openLocationFeatre, setOpenLocationFeatre] = useState(false)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const TooltipProvider = ({ children }: { children: React.ReactNode }) => <>{children}</>
  const TooltipRoot = ({ children }: { children: React.ReactNode }) => (
    <div className="relative group inline-block">{children}</div>
  )
  const TooltipTrigger = ({
    children,
    asChild,
  }: {
    children: React.ReactNode
    asChild?: boolean
  }) => <>{children}</>
  const TooltipContent = ({
    children,
    className,
  }: {
    children: React.ReactNode
    className?: string
  }) => (
    <div
      className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center z-50 whitespace-nowrap ${className}`}
    >
      {children}
    </div>
  )
  const TooltipArrow = ({ className }: { className?: string }) => (
    <div className={`w-2 h-2 rotate-45 -mt-1 ${className}`}></div>
  )

  const interiorIcons: Record<string, any> = {
    doorType: DoorClosed,
    flooring: Layers,
    wallFinish: Palette,
    kitchenType: Layout,
    furnishingStatus: Sofa,
    lighting: Zap,
    interiors: Sparkles,
    default: Home,
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const specifications = property?.specifications || null
  const specEntries =
    typeof specifications === 'object' && specifications !== null
      ? Object.entries(specifications).filter(([_, value]) => value !== null && value !== '')
      : []

  const trueAmenities = property?.buildingAmenities
    ? Object.entries(property.buildingAmenities).filter(([_, value]) => Boolean(value))
    : []
  const visibleAmenities = showAll ? trueAmenities : trueAmenities.slice(0, 6)

  const getImageUrl = (imgObj: any) => {
    if (!imgObj) return defaultImage
    const url = typeof imgObj === 'string' ? imgObj : imgObj?.url || imgObj?.image?.url
    if (!url) return defaultImage
    if (url.startsWith('http') || url.startsWith('data:')) return url
    return `${API_BASE_URL}${url}`
  }

  const location = property?.location?.label || ''
  const status = property?.society?.possessionStatus || null
  const title = property?.title || 'Untitled Property'
  const ageOfProperty = property?.ageOfProperty || null
  const transactionType = property?.transactionType || null
  const agentReraId = property?.agentReraId || null
  const price = property?.price ? `₹${formatPrice(property.price)}` : 'Price on Request'
  const pricePerSqft = property?.pricePerSqft || null
  const MaxArea = property?.area?.maxSqft || null
  const MiniArea = property?.area?.minSqft || null
  const bathrooms = property?.washrooms ?? null
  const furnishing = property?.furnishing || null
  const heroImage = getImageUrl(property?.heroImage)
  const images = property?.images || []
  const allImages = [heroImage, ...images.map((img: any) => getImageUrl(img?.image || img))]

  const formatFurnishing = (value: string) => {
    const map: Record<string, string> = {
      semi: 'Semi Furnished',
      fully: 'Fully Furnished',
      unfurnished: 'Unfurnished',
    }
    return map[value] || 'Not Specified'
  }

  const rentDetails = property?.rentDetails || {}
  const monthlyRent = rentDetails?.monthlyRent ?? '-'
  const securityDeposit = rentDetails?.securityDeposit ?? '-'
  const maintenanceIncluded = rentDetails?.maintenanceIncluded ?? '-'
  const preferredTenants = rentDetails?.preferredTenants || []
  const faq: Array<{ question: string; answer: string }> = property?.faq || []
  const featured = property?.featured ?? false
  const urgentSale = property?.urgentSale ?? false
  const availabilityStatus = property?.availabilityStatus ?? null
  const validMoreAmenities = property?.moreAmenities?.filter((item: any) => item?.name) || []

  const applianceIcons = {
    acUnits: Wind,
    fridgeCount: Microwave,
    microwaveCount: Microwave,
    waterPurifier: Droplet,
    washingMachine: WashingMachine,
    dishwasher: UtensilsCrossed,
    tvCount: Tv,
    geyserCount: ShowerHead,
    powerBackup: Battery,
    solar: Sun,
  }

  const PropertyVideos = ({ property }: { property: any }) => {
    const getEmbedUrl = (url: string) => {
      if (!url) return ''
      // Converts YouTube watch links and short links to embed format
      if (url.includes('watch?v=')) {
        return url.replace('watch?v=', 'embed/').split('&')[0]
      }
      if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1]?.split('?')[0]
        return `https://www.youtube.com/embed/${id}`
      }
      return url
    }

    const videos = [
      { key: 'walkthroughVideo', title: 'Walkthrough Video', url: property?.walkthroughVideo },
      {
        key: 'topReasonsToBuyVideo',
        title: 'Top Reasons to Buy Video',
        url: property?.topReasonsToBuyVideo,
      },
      { key: 'homeTourVideo', title: 'Home Tour Video', url: property?.homeTourVideo },
      {
        key: 'modelHouseExplanationVideo',
        title: 'Model House Explanation Video',
        url: property?.modelHouseExplanationVideo,
      },
      {
        key: 'experienceCentreVideo',
        title: 'Experience Centre Video',
        url: property?.experienceCentreVideo,
      },
      { key: 'otherVideo', title: 'Other Video', url: property?.otherVideo },
    ].filter((v) => Boolean(v.url))

    if (videos.length === 0) return null

    return (
      <div className="border border-gray-200 rounded-xl p-5 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Property Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div
              key={video.key}
              className="rounded-xl border border-gray-200 p-4 hover:shadow-md transition-all duration-300 bg-white"
            >
              <h3 className="text-md font-semibold text-gray-700 mb-3">{video.title}</h3>
              <div className="w-full aspect-video rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  src={getEmbedUrl(video.url)}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }




  return (
    <>
      <div>
        {/* Hero Banner Section */}
        <div className="accaodomationBannerSection relative w-full h-[400px] overflow-hidden">
          <div>
            <img
              src={heroImage}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#a34493]/60 to-[#8b3c82]/90"></div>
          </div>
          <div className="accodoamationBannerContainer absolute inset-0 flex items-center justify-center">
            <div className="accodoamationBannerText text-center text-white">
              <AutoShrinkText
                text={title}
                baseSize={60}
                minSize={40}
                maxChars={40}
                className="accodoamationBannerText font-bold text-3xl sm:text-5xl"
              />
              <div className="breadCrum mt-2 text-sm text-gray-200">
                <a href="/" className="hover:underline">
                  Home
                </a>{' '}
                -{' '}
                <a href="/properties" className="hover:underline">
                  Properties
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Details Container */}
        <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-6 my-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl font-semibold text-[#a34493]">{title}</h2>
            <div className="flex gap-2">
              {availabilityStatus && (
                <span className="text-xs font-medium px-2 py-1 border border-green-500 text-green-600 rounded-full uppercase">
                  {availabilityStatus}
                </span>
              )}
              {urgentSale && (
                <span className="text-xs font-medium px-2 py-1 border border-yellow-500 text-yellow-600 rounded-full uppercase">
                  URGENT SALE
                </span>
              )}
              {featured && (
                <span className="text-xs font-medium px-2 py-1 border border-blue-500 text-blue-600 rounded-full uppercase">
                  FEATURED
                </span>
              )}
            </div>
          </div>

          <p className="text-gray-700 text-sm mb-4">
            {Array.isArray(property?.bhk) && property.bhk.length > 0
              ? property.bhk.map((b: any) => b.label || b.value).join(', ')
              : ''}{' '}
            for <span className="capitalize">{property?.purpose || 'sale'}</span> in
            <span className="font-semibold text-gray-900"> {title}</span>,
            <span className="text-gray-800"> {location}</span>
          </p>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="col-span-2">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-60 object-cover rounded-lg cursor-pointer hover:opacity-95 transition"
                onClick={() => {
                  setCurrentImageIndex(0)
                  setIsModalOpen(true)
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              {images.slice(0, 3).map((img: any, i: number) => {
                const isLastVisible = i === 2 && images.length > 3
                return (
                  <div key={i} className="relative w-full h-[73px]">
                    <img
                      src={getImageUrl(img?.image || img)}
                      alt=""
                      className="w-full h-full min-w-[120px] max-w-[300px] object-cover rounded-lg cursor-pointer hover:opacity-95 transition"
                      onClick={() => {
                        setCurrentImageIndex(i + 1)
                        setIsModalOpen(true)
                      }}
                    />
                    {isLastVisible && (
                      <div
                        className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center text-white font-bold text-lg cursor-pointer"
                        onClick={() => {
                          setCurrentImageIndex(i + 1)
                          setIsModalOpen(true)
                        }}
                      >
                        +{images.length - 3}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Lightbox Image Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-gray-300"
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
              <div className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-xl shadow-2xl overflow-hidden flex flex-col">
                <div className="flex items-center justify-center bg-black max-h-[80vh] p-4">
                  <img
                    src={allImages[currentImageIndex]}
                    alt={`Property ${currentImageIndex + 1}`}
                    className="max-w-full max-h-[75vh] object-contain rounded-lg transition-transform duration-300"
                  />
                </div>
                <button
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                  onClick={() =>
                    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length)
                  }
                >
                  <ArrowLeftIcon className="w-6 h-6" />
                </button>
                <button
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                  onClick={() => setCurrentImageIndex((prev) => (prev + 1) % allImages.length)}
                >
                  <ArrowRightIcon className="w-6 h-6" />
                </button>
                <div className="mt-3 mb-4 flex gap-2 overflow-x-auto px-2 select-none thin-scroll">
                  {allImages.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-12 h-12 rounded-md object-cover cursor-pointer border-2 ${
                        index === currentImageIndex
                          ? 'border-[#a34493]'
                          : 'border-transparent opacity-60'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Quick Stats Badges */}
          {(property?.bedrooms != null ||
            bathrooms != null ||
            property?.parking != null ||
            furnishing) && (
            <div className="flex flex-wrap gap-3 bg-gray-50 rounded-lg p-2 mb-4">
              {property?.bedrooms != null && (
                <div className="flex items-center gap-1 text-gray-700 text-sm px-2 py-1">
                  <Bed size={16} /> {property.bedrooms} Beds
                </div>
              )}
              {bathrooms != null && (
                <div className="flex items-center gap-1 text-gray-700 text-sm px-2 py-1">
                  <Bath size={16} /> {bathrooms} Baths
                </div>
              )}
              {property?.parking != null && (
                <div className="flex items-center gap-1 text-gray-700 text-sm px-2 py-1">
                  <Car size={16} /> {property.parking}
                </div>
              )}
              {furnishing && (
                <div className="flex items-center gap-1 text-gray-700 text-sm px-2 py-1">
                  <Building2 size={16} /> {formatFurnishing(furnishing)}
                </div>
              )}
            </div>
          )}

          {/* Area & Price Details Grid */}
          {(MiniArea ||
            MaxArea ||
            price ||
            pricePerSqft ||
            transactionType ||
            status ||
            furnishing ||
            property?.squareFeetRange) && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4 mt-6">
              {MiniArea && (
                <div>
                  <p className="text-xs text-gray-500">Minimum Area</p>
                  <p className="font-semibold text-gray-800">{MiniArea} sq.ft</p>
                </div>
              )}
              {MaxArea && (
                <div>
                  <p className="text-xs text-gray-500">Maximum Area</p>
                  <p className="font-semibold text-gray-800">{MaxArea} sq.ft</p>
                </div>
              )}
              {price && (
                <div>
                  <p className="text-xs text-gray-500">Price</p>
                  <p className="font-semibold text-gray-800">{price}</p>
                </div>
              )}
              {pricePerSqft && (
                <div>
                  <p className="text-xs text-gray-500">Price Per Sqft</p>
                  <p className="font-semibold text-gray-800">₹ {pricePerSqft}</p>
                </div>
              )}
              {transactionType && (
                <div>
                  <p className="text-xs text-gray-500">Transaction Type</p>
                  <p className="font-semibold text-gray-800 capitalize">
                    {formatLabel(transactionType)}
                  </p>
                </div>
              )}
              {status && (
                <div>
                  <p className="text-xs text-gray-500">Status</p>
                  <p className="font-semibold text-gray-800">{formatLabel(status)}</p>
                </div>
              )}
            </div>
          )}

          {/* Project Info Card */}
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex flex-wrap justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-gray-800">About Project</h2>
              {property?.society?.externalUrl && (
                <a
                  href={property.society.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline flex items-center text-sm font-medium"
                >
                  Explore Project
                  <ArrowRight size={16} className="ml-1" />
                </a>
              )}
            </div>
            <div className="flex flex-wrap gap-6 items-center">
              <img
                src={heroImage}
                alt={title}
                className="w-28 h-28 object-cover rounded-xl border"
              />
              <div className="flex flex-col sm:flex-row flex-wrap justify-between flex-1">
                <div>
                  {property?.society?.name && (
                    <h3 className="font-semibold text-gray-800 text-lg">{property.society.name}</h3>
                  )}
                  {property?.society?.builder && (
                    <p className="text-gray-500 text-sm">by {property.society.builder}</p>
                  )}
                </div>
                <div className="mt-3 sm:mt-0">
                  <p className="text-gray-500 text-sm">Price</p>
                  <p className="font-semibold text-gray-800 text-lg">{price} Onwards</p>
                </div>
              </div>
            </div>
          </div>

          {/* Building Amenities */}
          {trueAmenities.length > 0 && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Building Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                {visibleAmenities.map(([key]) => (
                  <div
                    key={key}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    <Building size={18} className="text-gray-400" />
                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                  </div>
                ))}
              </div>
              {trueAmenities.length > 6 && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-red-600 font-medium hover:underline focus:outline-none mt-3 text-sm"
                >
                  {showAll ? 'View Less' : `View all Amenities (${trueAmenities.length})`}
                </button>
              )}
            </div>
          )}

          {/* Additional Custom Amenities */}
          {validMoreAmenities.length > 0 && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                More Amenities
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {validMoreAmenities.map((item: any, idx: number) => (
                  <div key={item.id || idx} className="flex items-center gap-2">
                    <span className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xs font-bold text-gray-500">
                      ✓
                    </span>
                    <p className="text-gray-700 text-sm font-medium">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BATHROOM FEATURES SECTION */}
          {property?.bathroomFeatures &&
            Object.values(property.bathroomFeatures).some(
              (value) => value !== null && value !== false && value !== 0,
            ) && (
              <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Bathroom Features</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                    <Bath size={18} className="text-gray-600" />
                    <span className="text-gray-800">
                      Bathtubs: {property.bathroomFeatures.bathtubs || 0}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                    <Flame size={18} className="text-gray-600" />
                    <span className="text-gray-800">
                      Jacuzzi: {property.bathroomFeatures.jacuzzi ? 'Yes' : 'No'}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                    <Droplet size={18} className="text-gray-600" />
                    <span className="text-gray-800">
                      Heated Flooring: {property.bathroomFeatures.heatedFlooring ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>
            )}

          {/* RESTORED: APPLIANCES SECTION */}
          {property?.appliances &&
            Object.values(property.appliances).some(
              (value) => value !== null && value !== false && value !== 0,
            ) && (
              <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Appliances</h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                  {Object.entries(property.appliances).map(([key, value]) => {
                    if (value === null || value === false || value === 0) return null
                    const Icon = applianceIcons[key] || HelpCircle
                    return (
                      <div
                        key={key}
                        className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition"
                      >
                        <Icon size={18} className="text-gray-500" />
                        <span className="capitalize">
                          {key.replace(/([A-Z])/g, ' $1')}:{' '}
                          {typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value)}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

          {/* RENTAL DETAILS SECTION */}
          {property?.rentDetails &&
            Object.values(property.rentDetails).some(
              (value) =>
                value !== null &&
                value !== false &&
                value !== 0 &&
                !(Array.isArray(value) && value.length === 0),
            ) && (
              <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Rent Details</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  {property.rentDetails.monthlyRent != null && (
                    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                      <Banknote size={18} className="text-gray-400 shrink-0" />
                      <span className="text-gray-700">
                        <strong className="text-gray-900">Monthly Rent:</strong> ₹
                        {property.rentDetails.monthlyRent?.toLocaleString('en-IN') || 'N/A'}
                      </span>
                    </div>
                  )}

                  {property.rentDetails.securityDeposit != null && (
                    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                      <Wallet size={18} className="text-gray-400 shrink-0" />
                      <span className="text-gray-700">
                        <strong className="text-gray-900">Security Deposit:</strong> ₹
                        {property.rentDetails.securityDeposit?.toLocaleString('en-IN') || 'N/A'}
                      </span>
                    </div>
                  )}

                  {property.rentDetails.maintenanceIncluded !== undefined && (
                    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                      <Wrench size={18} className="text-gray-400 shrink-0" />
                      <span className="text-gray-700">
                        <strong className="text-gray-900">Maintenance Included:</strong>{' '}
                        {property.rentDetails.maintenanceIncluded ? 'Yes' : 'No'}
                      </span>
                    </div>
                  )}

                  {property.rentDetails.preferredTenants &&
                    property.rentDetails.preferredTenants.length > 0 && (
                      <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                        <Users size={18} className="text-gray-400 shrink-0" />
                        <span className="text-gray-700 capitalize">
                          <strong className="text-gray-900">Preferred Tenants:</strong>{' '}
                          {Array.isArray(property.rentDetails.preferredTenants)
                            ? property.rentDetails.preferredTenants.join(', ')
                            : property.rentDetails.preferredTenants}
                        </span>
                      </div>
                    )}
                </div>
              </div>
            )}

          {/* NEAR BY PLACES SECTION */}
          {Array.isArray(property?.nearby) && property.nearby.length > 0 && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Nearby Places</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                {property.nearby.map((place: any, index: number) => (
                  <div
                    key={place?.id || index}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition"
                  >
                    <MapPin size={18} className="text-gray-400 shrink-0" />
                    <span>
                      <strong>{place?.place}</strong>
                      {place?.distance ? ` - ${place.distance}` : ''}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SEMI ROOMS SECTION */}
          {property?.semiRooms &&
            Object.values(property.semiRooms).some(
              (value) => value !== null && value !== false,
            ) && (
              <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Semi Rooms</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                    <BookOpen size={18} className="text-gray-400" />
                    <span>
                      <strong>Study Room:</strong> {property.semiRooms.studyRoom ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                    <User size={18} className="text-gray-400" />
                    <span>
                      <strong>Servant Room:</strong> {property.semiRooms.servantRoom ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                    <Sparkles size={18} className="text-gray-400" />
                    <span>
                      <strong>Pooja Room:</strong> {property.semiRooms.poojaRoom ? 'Yes' : 'No'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                    <Boxes size={18} className="text-gray-400" />
                    <span>
                      <strong>Store Room:</strong> {property.semiRooms.storeRoom ? 'Yes' : 'No'}
                    </span>
                  </div>
                </div>
              </div>
            )}

          {/* PARKING DETAILS SECTION */}
          {property?.parkingOutdoor &&
            Object.values(property.parkingOutdoor).some(
              (value) => value !== null && value !== false && value !== 0,
            ) && (
              <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Parking Details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition border border-gray-100">
                    <Car size={18} className="text-[#a34493] shrink-0" />
                    <span>
                      <strong className="text-gray-700">Covered Parking:</strong>{' '}
                      <span className="text-gray-900 font-medium">
                        {property.parkingOutdoor.coveredParking ?? 0}
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition border border-gray-100">
                    <Car size={18} className="text-[#a34493] shrink-0" />
                    <span>
                      <strong className="text-gray-700">Open Parking:</strong>{' '}
                      <span className="text-gray-900 font-medium">
                        {property.parkingOutdoor.openParking ?? 0}
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition border border-gray-100">
                    <Car size={18} className="text-[#a34493] shrink-0" />
                    <span>
                      <strong className="text-gray-700">Visitor Parking:</strong>{' '}
                      <span className="text-gray-900 font-medium">
                        {property.parkingOutdoor.visitorParking ? 'Yes' : 'No'}
                      </span>
                    </span>
                  </div>

                  <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition border border-gray-100">
                    <Car size={18} className="text-[#a34493] shrink-0" />
                    <span>
                      <strong className="text-gray-700">EV Charging:</strong>{' '}
                      <span className="text-gray-900 font-medium">
                        {property.parkingOutdoor.evCharging ? 'Yes' : 'No'}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            )}

          {/* 🌟 INTERIORS / FURNISHINGS SECTION 🌟 */}
          {property?.interiors &&
            Object.values(property.interiors).some(
              (value) => value !== null && value !== false && value !== '',
            ) && (
              <TooltipProvider>
                <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Interiors / Furnishings
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    {Object.entries(property.interiors)
                      .filter(([key]) => key !== 'doorTypeDescription')
                      .map(([key, value]) => {
                        const Icon = interiorIcons[key] || interiorIcons.default || HelpCircle

                        let displayValue = ''
                        if (typeof value === 'boolean') displayValue = value ? 'Yes' : 'No'
                        else if (value === null || value === undefined) displayValue = 'N/A'
                        else displayValue = String(value)

                        const label = key
                          .replace(/([A-Z])/g, ' $1')
                          .replace(/^./, (str) => str.toUpperCase())

                        if (key === 'doorType' && property.interiors.doorTypeDescription) {
                          return (
                            <TooltipRoot key={key}>
                              <TooltipTrigger asChild>
                                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                                  <Icon size={18} className="text-gray-500" />
                                  <span>
                                    <strong>{label}:</strong> {displayValue}
                                  </span>
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="bg-gray-800 text-white text-xs px-2 py-1 rounded shadow">
                                {property.interiors.doorTypeDescription}
                                <TooltipArrow className="bg-gray-800" />
                              </TooltipContent>
                            </TooltipRoot>
                          )
                        }

                        return (
                          <div
                            key={key}
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition"
                          >
                            <Icon size={18} className="text-gray-500" />
                            <span>
                              <strong>{label}:</strong> {displayValue}
                            </span>
                          </div>
                        )
                      })}
                  </div>
                </div>
              </TooltipProvider>
            )}

          {/* FEATURES SECTION */}
          {property?.features?.length > 0 && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
              <div
                className="flex justify-between items-center cursor-pointer select-none"
                onClick={() => setOpenFeatures(!openFeatures)}
              >
                <h2 className="text-xl font-semibold text-gray-800">Features</h2>
                {openFeatures ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>

              {openFeatures && (
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-100 pt-4">
                  {property.features
                    .filter((f: any) => f.feature)
                    .map((f: any, idx: number) => (
                      <div key={f.id || idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#a34493]"></span>
                        <span className="text-gray-700 text-sm font-medium">{f.feature}</span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          )}

          {/* GREEN / LOCATION FEATURES */}
          {property?.greenFeatures?.length > 0 && property.greenFeatures[0]?.feature && (
            <div className="border border-gray-200 rounded-xl p-5 mb-6 transition-all duration-300">
              <div
                className="flex justify-between items-center cursor-pointer select-none"
                onClick={() => setOpenLocationFeatre(!openLocationFeatre)}
              >
                <h2 className="text-xl font-semibold text-gray-800">Location Features</h2>
                {openLocationFeatre ? (
                  <ChevronUp size={20} className="text-gray-600" />
                ) : (
                  <ChevronDown size={20} className="text-gray-600" />
                )}
              </div>

              {openLocationFeatre && (
                <ul className="list-disc ml-5 mt-4 space-y-1.5 text-gray-600 text-sm pt-3 border-t border-gray-100">
                  {property.greenFeatures.map((item: any, i: number) => (
                    <li key={i}>{item?.label || item?.feature}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* FINANCIAL DETAILS SECTION */}
          {(property?.maintenanceCharges ||
            property?.bookingAmount ||
            property?.negotiable !== undefined) && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Financial Details</h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                {property?.maintenanceCharges != null && (
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                    <CreditCard size={18} className="text-gray-400 shrink-0" />
                    <span>
                      <strong className="text-gray-600 block text-xs">Maintenance Charges</strong>₹
                      {property.maintenanceCharges.toLocaleString('en-IN')}
                    </span>
                  </div>
                )}

                {property?.bookingAmount != null && (
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                    <HandCoins size={18} className="text-gray-400 shrink-0" />
                    <span>
                      <strong className="text-gray-600 block text-xs">Booking Amount</strong>₹
                      {property.bookingAmount.toLocaleString('en-IN')}
                    </span>
                  </div>
                )}

                {property?.negotiable !== undefined && (
                  <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                    <Handshake size={18} className="text-gray-400 shrink-0" />
                    <span>
                      <strong className="text-gray-600 block text-xs">Price Negotiable</strong>
                      {property.negotiable ? 'Yes' : 'No'}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* FLOOR PLAN SECTION */}
          {property?.floorPlans &&
            property.floorPlans.length > 0 &&
            property.floorPlans.some((plan: any) => plan?.file?.url) && (
              <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300 relative">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Floor Plans</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {property.floorPlans.map((plan: any, index: number) => {
                    const imageUrl = getImageUrl(plan.file)
                    if (!imageUrl) return null

                    return (
                      <div
                        key={plan.id || index}
                        className="flex flex-col items-center rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                        onClick={() => setSelectedImage(imageUrl)}
                      >
                        <img
                          src={imageUrl}
                          alt={property.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-3 w-full text-center bg-gray-50">
                          <p className="text-sm font-medium text-gray-700">
                            {plan.caption || plan?.file?.alt || `Floor Plan ${index + 1}`}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

          {/* FLOOR PLAN LIGHTBOX MODAL */}
          {selectedImage && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 bg-black/50 p-2 rounded-full"
                onClick={() => setSelectedImage(null)}
              >
                {/* <X size={24} /> */}
              </button>
              <div className="max-w-4xl max-h-[90vh]">
                <img
                  src={selectedImage}
                  alt="Floor Plan Large View"
                  className="max-w-full max-h-[85vh] object-contain rounded-lg"
                />
              </div>
            </div>
          )}

          {/* ROUTE MAP SECTION */}
          {property.routeMap &&
            property.routeMap.length > 0 &&
            property.routeMap.some((map: any) => map?.file?.url || map?.file) && (
              <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300 relative z-10 mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Route Map</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {property.routeMap.map((map: any, index: number) => {
                    const imageUrl = getImageUrl(map.file)
                    if (!imageUrl) return null

                    return (
                      <div
                        key={map.id || index}
                        className="flex flex-col items-center rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
                        onClick={() => setSelectedImage(imageUrl)}
                      >
                        <img
                          src={imageUrl}
                          alt={map.caption || property.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-3 w-full text-center bg-gray-50">
                          <p className="text-sm font-medium text-gray-700">
                            {map.caption || map?.file?.alt || `Route Map ${index + 1}`}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

          <PropertyVideos property={property} />

          {/* MAP VIEW SECTION */}
          {property?.mapView && property?.mapView?.mapEmbed && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Location Map</h2>

              <div
                className="map-container w-full h-[400px] overflow-hidden rounded-lg [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:border-0"
                dangerouslySetInnerHTML={{ __html: property.mapView.mapEmbed }}
              />
            </div>
          )}

          {/* Rental & Extra Info Block */}
          {(ageOfProperty ||
            agentReraId ||
            monthlyRent !== '-' ||
            securityDeposit !== '-' ||
            maintenanceIncluded !== '-' ||
            preferredTenants?.length > 0) && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
              <div className="flex flex-wrap gap-6">
                {ageOfProperty && (
                  <div className="min-w-[120px]">
                    <p className="text-xs text-gray-500">Age of Property</p>
                    <p className="font-semibold text-gray-800">{ageOfProperty}</p>
                  </div>
                )}
                {agentReraId && (
                  <div className="min-w-[120px]">
                    <p className="text-xs text-gray-500">Agent RERA ID</p>
                    <p className="font-semibold text-gray-800">{agentReraId}</p>
                  </div>
                )}
                {monthlyRent !== '-' && (
                  <div className="min-w-[120px]">
                    <p className="text-xs text-gray-500">Monthly Rent</p>
                    <p className="font-semibold text-gray-800">₹ {monthlyRent}</p>
                  </div>
                )}
                {securityDeposit !== '-' && (
                  <div className="min-w-[120px]">
                    <p className="text-xs text-gray-500">Security Deposit</p>
                    <p className="font-semibold text-gray-800">₹ {securityDeposit}</p>
                  </div>
                )}
                {maintenanceIncluded !== '-' && (
                  <div className="min-w-[120px]">
                    <p className="text-xs text-gray-500">Maintenance Included</p>
                    <p className="font-semibold text-gray-800">
                      {maintenanceIncluded ? 'Yes' : 'No'}
                    </p>
                  </div>
                )}
                {preferredTenants?.length > 0 && (
                  <div className="min-w-[150px]">
                    <p className="text-xs text-gray-500">Preferred Tenants</p>
                    <p className="font-semibold text-gray-800 capitalize">
                      {preferredTenants.join(', ')}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Specifications Accordion Block */}
          {specEntries.length > 0 && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
              <div
                className="flex justify-between items-center cursor-pointer select-none"
                onClick={() => setOpenSpec(!openSpec)}
              >
                <h2 className="text-xl font-semibold text-gray-800">Specifications</h2>
                <span className="text-gray-500 font-bold text-lg">{openSpec ? '−' : '+'}</span>
              </div>
              {openSpec && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-gray-100 text-sm">
                  {specEntries.map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-gray-500 text-xs font-medium">{formatLabel(key)}</span>
                      <span className="text-gray-800 font-semibold">{String(value)}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* FAQ Accordion Section */}
          {faq.length > 0 && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faq.map((item, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                    <button
                      className="w-full flex justify-between items-center text-left text-gray-800 font-medium text-sm py-2 hover:text-[#a34493] transition"
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                      <span>{item.question}</span>
                      <span className="ml-2 font-bold">{openIndex === index ? '−' : '+'}</span>
                    </button>
                    {openIndex === index && (
                      <p className="text-gray-600 text-sm mt-1 leading-relaxed pl-2">
                        {item.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Floating Action CTA Bar */}
          <div className="sticky bottom-4 bg-white/90 backdrop-blur-md border border-gray-200 shadow-lg rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Starting Price</p>
              <p className="text-xl font-bold text-[#a34493]">{price}</p>
            </div>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="bg-[#a34493] hover:bg-[#8b3c82] text-white px-6 py-2.5 rounded-lg font-semibold text-sm transition shadow-md"
            >
              Contact Agent
            </button>
          </div>


          {/* 2. ADDED: Contact Form Modal Section */}
          {isContactModalOpen && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
              <div className="relative w-full max-w-lg bg-white rounded-xl shadow-xl">
                {/* Close Button */}
                <button
                  className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold z-10"
                  onClick={() => setIsContactModalOpen(false)}
                >
                  &times;
                </button>

                {/* Contact Form */}
                <ContactForm
                  entity={{
                    id: property?.id || property?._id,
                    slug: property?.slug,
                    type: property?.propertyType?.value || 'N/A',
                    purpose: property?.purpose || 'N/A',
                    title: property?.title || 'N/A',
                    societyName: property?.society?.name || 'N/A',
                    builderName: property?.society?.builder || 'N/A',
                    contactInfo: property?.contactInfo || {},
                    contactEmail: property?.contactInfo?.email || 'N/A',
                    publishedAt: property?.publishedAt || null,
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
