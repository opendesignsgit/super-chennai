/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatPrice } from '../utils/filterHelpers'
import PropertyCardSkeleton from '../Components/PropertyCardSkeleton'
import FiltersSidebar from '../Components/FiltersSidebar'

export default function PropertiesList({
  properties = [],
  loading = false,
  sortBy = '-createdAt',
  onSortChange,
  filters,
  totalResults = 0,
  onCheckboxChange,
  onBudgetChange,
  onClearAll,
  setUseTopFilter,
  showMobileFilter,
  setShowMobileFilter,
}: any) {
  // 1. Image Resolution Helper
  const getImageUrl = (item: any): string => {
    const rawUrl =
      item?.heroImage?.sizes?.small?.url ||
      item?.heroImage?.url ||
      item?.images?.[0]?.image?.sizes?.small?.url ||
      item?.images?.[0]?.image?.url ||
      item?.featuredImage?.url ||
      item?.media?.[0]?.url

    if (!rawUrl) return '/images/property-placeholder.jpg'
    if (rawUrl.startsWith('/')) {
      const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || ''
      return `${serverUrl}${rawUrl}`
    }

    return rawUrl
  }

  // 2. Location Name Helper
  const getLocationName = (item: any): string => {
    const loc = item?.propertyLocation || item?.location
    if (!loc) return 'Chennai'
    if (typeof loc === 'string') return loc
    if (typeof loc === 'object') {
      return loc.label || loc.locality || loc.city || loc.name || loc.value || 'Chennai'
    }
    return 'Chennai'
  }

  // 3. BHK Display Helper (Handles Array or Single Field)
  const getBhkText = (item: any): string => {
    if (Array.isArray(item?.bhk) && item.bhk.length > 0) {
      return item.bhk.map((b: any) => b.label || b.value).join(', ')
    }
    if (item?.bedrooms) return `${item.bedrooms} BHK`
    if (typeof item?.bhk === 'object') return item.bhk?.label || item.bhk?.value || '-'
    return item?.bhk ? String(item.bhk) : '-'
  }

  // 4. Area Range Helper
  const getAreaText = (item: any): string => {
    if (item?.squareFeetRange?.minSqft && item?.squareFeetRange?.maxSqft) {
      return `${item.squareFeetRange.minSqft} - ${item.squareFeetRange.maxSqft}`
    }
    if (typeof item?.area === 'object') {
      return item.area?.minSqft || item.area?.value || '-'
    }
    return item?.area || '-'
  }

  return (
    <div className="properties-list-container w-full">
      {/* Header Controls */}
      <div className="flex flex-wrap items-center justify-between bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-6">
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="md:hidden flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-lg text-sm font-medium text-gray-700"
            onClick={() => setShowMobileFilter(!showMobileFilter)}
          >
            <img src="/images/icons/filter-icon.svg" alt="Filter" className="w-4 h-4" />
            Filters
          </button>
          <span className="text-sm font-semibold text-gray-700">
            Showing <span className="text-[#a44294]">{totalResults}</span> Properties
          </span>
        </div>

        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <label className="text-xs font-medium text-gray-500">Sort By:</label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-gray-50 border border-gray-200 text-gray-700 text-xs rounded-lg p-2 focus:outline-none focus:border-[#a44294]"
          >
            <option value="-createdAt">Newest First</option>
            <option value="createdAt">Oldest First</option>
            <option value="price">Price: Low to High</option>
            <option value="-price">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      {showMobileFilter && (
        <div className="fixed inset-0 z-50 bg-black/50 flex justify-end md:hidden">
          <div className="w-[80%] max-w-[320px] bg-white h-full overflow-y-auto p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-800">Filters</h3>
              <button
                type="button"
                className="text-gray-500 text-xl font-bold"
                onClick={() => setShowMobileFilter(false)}
              >
                ✕
              </button>
            </div>
            <FiltersSidebar
              filters={filters}
              onCheckboxChange={onCheckboxChange}
              onBudgetChange={onBudgetChange}
              onClearAll={onClearAll}
              setUseTopFilter={setUseTopFilter}
            />
          </div>
        </div>
      )}

      {/* Property Cards Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((n) => (
            <PropertyCardSkeleton key={n} />
          ))}
        </div>
      ) : properties.length === 0 ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center my-6">
          
          <h3 className="text-lg font-bold text-gray-800 mb-1">No Properties Found</h3>
          <p className="text-xs text-gray-500 mb-4">
            Try adjusting your search or resetting your filters to view more listings.
          </p>
          <button
            type="button"
            onClick={onClearAll}
            className="bg-[#a44294] text-white text-xs px-4 py-2 rounded-lg font-medium hover:bg-[#8b357d] transition-colors"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {properties.map((item: any) => {
            const imageUrl = getImageUrl(item)
            const locationName = getLocationName(item)
            const purposeText = item.purpose ? String(item.purpose).toUpperCase() : 'FOR SALE'
            const bhkText = getBhkText(item)
            const areaText = getAreaText(item)
            const builderName = item.society?.builder || item.society?.name

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Top Image Section */}
                <div>
                  <div className="relative h-52 w-full bg-gray-100">
                    <Image
                      src={imageUrl}
                      alt={item.title || 'Property'}
                      fill
                      unoptimized={imageUrl.startsWith('/api/')}
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Purpose Tag */}
                    <span className="absolute top-3 left-3 bg-[#a44294] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {purposeText}
                    </span>

                    {/* Builder Badge */}
                    {builderName && (
                      <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-md">
                        By {builderName}
                      </span>
                    )}

                    {/* Possession Status */}
                    {item.society?.possessionStatus && (
                      <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-800 text-[10px] font-bold px-2 py-0.5 rounded capitalize shadow-sm">
                        {item.society.possessionStatus}
                      </span>
                    )}
                  </div>

                  {/* Card Main Body */}
                  <div className="p-4">
                    {/* Price & Per Sqft */}
                    <div className="flex justify-between items-baseline mb-1">
                      <div className="text-xl font-black text-gray-900">
                        {formatPrice(item.price)}
                      </div>
                      {item.pricePerSqft && (
                        <span className="text-[11px] text-gray-400 font-medium">
                          ₹{item.pricePerSqft}/sq.ft
                        </span>
                      )}
                    </div>

                    {/* Title & Location */}
                    <h3 className="font-bold text-gray-800 text-sm line-clamp-1 mb-1 group-hover:text-[#a44294] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mb-3">
                      <span className="text-red-500">📍</span> {locationName}
                    </p>

                    {/* Quick Specs Box */}
                    <div className="grid grid-cols-3 gap-2 bg-gray-50 p-2.5 rounded-xl text-center mb-3 border border-gray-100">
                      <div>
                        <span className="block text-gray-400 text-[10px] font-semibold uppercase">BHK</span>
                        <span className="font-bold text-gray-800 text-xs line-clamp-1">{bhkText}</span>
                      </div>
                      <div>
                        <span className="block text-gray-400 text-[10px] font-semibold uppercase">Area</span>
                        <span className="font-bold text-gray-800 text-xs line-clamp-1">{areaText} sq.ft</span>
                      </div>
                      <div>
                        <span className="block text-gray-400 text-[10px] font-semibold uppercase">Furnishing</span>
                        <span className="font-bold text-gray-800 text-xs capitalize line-clamp-1">
                          {item.furnishing || 'N/A'}
                        </span>
                      </div>
                    </div>

                    {/* Feature Chips */}
                    {item.features && item.features.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {item.features.slice(0, 3).map((feat: any) => (
                          <span
                            key={feat.id || feat.feature}
                            className="bg-purple-50 text-[#a44294] text-[10px] font-medium px-2 py-0.5 rounded-md border border-purple-100"
                          >
                            ✓ {feat.feature}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-4 pb-4 border-t border-gray-100 pt-3 flex items-center justify-between text-xs">
                  <div className="text-gray-500">
                    Posted by: <span className="font-bold text-gray-700 capitalize">{item.listedBy || 'Owner'}</span>
                  </div>
                  <Link
                    href={`/properties/${item.slug || item.id}`}
                    className="bg-[#a44294] hover:bg-[#8b357d] text-white font-semibold text-xs px-3.5 py-1.5 rounded-lg transition-colors shadow-sm"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}