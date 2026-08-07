/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react'
import { formatLabel } from '../utils/formatLabel'
import { useFiltersData } from '../hooks/useFilters'
import FiltersSidebarSkeleton from '../Components/FiltersSidebarSkeleton'

export const propertyTypeFiltersMap = {
  apartment: ['bhk', 'furnishing', 'amenities', 'interiors', 'appliances', 'parking', 'facing'],
  villa: ['bhk', 'furnishing', 'amenities', 'interiors', 'appliances', 'parking', 'facing'],
  plot: ['plotDimensions', 'facing'],
  commercial: ['furnishing', 'parking', 'amenities', 'facing'],
}

// Collapsible Filter Accordion
const FilterSection = ({ title, children, defaultExpanded = true }: any) => {
  const [expanded, setExpanded] = useState(defaultExpanded)

  return (
    <div className="filter-section border-b border-gray-100 pb-4 mb-4">
      <div
        className="filter-section-header cursor-pointer flex justify-between items-center py-1 select-none"
        onClick={() => setExpanded(!expanded)}
      >
        <h4 className="font-semibold text-xs uppercase tracking-wider text-gray-700">{title}</h4>
        <img
          className="cursor-pointer transition-transform duration-300 w-3 h-3 opacity-60"
          src="/images/icons/down-arrow-filter.svg"
          alt="Toggle"
          style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </div>
      {expanded && <div className="filter-section-content mt-2.5">{children}</div>}
    </div>
  )
}

// Show More List Component
const ShowMoreList = ({ items = [], renderItem, initialCount = 5 }: any) => {
  const [showMoreList, setShowMoreList] = useState(false)
  const visibleItems = showMoreList ? items : items.slice(0, initialCount)

  return (
    <div className="show-more-list space-y-2">
      {visibleItems.map(renderItem)}
      {items.length > initialCount && (
        <span
          className="more-badge text-[11px] font-bold text-[#a44294] cursor-pointer inline-block mt-1 hover:underline"
          onClick={() => setShowMoreList((prev) => !prev)}
        >
          {showMoreList ? 'Show Less ↑' : `+ ${items.length - initialCount} More Locality ↓`}
        </span>
      )}
    </div>
  )
}

export default function FiltersSidebar({
  filters,
  onCheckboxChange,
  onBudgetChange,
  onClearAll,
  setUseTopFilter,
}: any) {
  const {
    propertylocations = [],
    propertyTypes = [],
    bhkOptions = [],
    purposes = [],
    furnishings = [],
    loading,
  } = useFiltersData()

  const [minPriceInput, setMinPriceInput] = useState(filters.minBudget || '')
  const [maxPriceInput, setMaxPriceInput] = useState(filters.maxBudget || '')
  const [locationSearch, setLocationSearch] = useState('')

  if (loading) return <FiltersSidebarSkeleton />

  // 1. Clean Locality Name (Removes redundant City / State names)
  const formatLocalityName = (loc: any) => {
    const rawName = loc.locality || loc.label || loc.value || loc.name || ''
    // "Manapakkam, Chennai" -> "Manapakkam"
    const cleanName = rawName.split(',')[0].trim()
    return cleanName || rawName
  }

  // 2. Location Search Filtering
  const filteredLocations = propertylocations.filter((loc: any) =>
    formatLocalityName(loc).toLowerCase().includes(locationSearch.toLowerCase()),
  )

  const getActiveKeys = () => {
    if (!filters.propertyTypes || filters.propertyTypes.length === 0) return []
    const keys = filters.propertyTypes.reduce((acc: string[], type: string) => {
      const mapped = (propertyTypeFiltersMap as any)[type]
      if (mapped) acc.push(...mapped)
      return acc
    }, [])
    return [...new Set(keys)]
  }

  const activeKeys = getActiveKeys()

  const handleApplyBudget = () => {
    onBudgetChange([Number(minPriceInput) || 0, Number(maxPriceInput) || 100000000])
  }

  // Helper to display formatted Indian price helper
  const formatPricePreview = (val: any) => {
    const num = Number(val)
    if (!num) return ''
    if (num >= 10000007) return `₹${(num / 10000000).toFixed(2)} Cr`
    if (num >= 100000) return `₹${(num / 100000).toFixed(2)} Lakhs`
    return `₹${num.toLocaleString('en-IN')}`
  }

  return (
    <div className="filters-sidebar bg-white p-4 rounded-2xl border border-gray-100 shadow-sm text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
        <h3 className="font-bold text-gray-900 text-base">Filters</h3>
        <div className="flex gap-3 text-xs font-semibold">
          <button
            type="button"
            className="text-[#a44294] hover:underline"
            onClick={() => setUseTopFilter(true)}
          >
            Top View
          </button>
          <button type="button" className="text-red-500 hover:underline" onClick={onClearAll}>
            Clear All
          </button>
        </div>
      </div>

      {/* Property Types */}
      <FilterSection title="Property Type">
        <ShowMoreList
          items={propertyTypes}
          initialCount={4}
          renderItem={(type: any) => {
            const isChecked = filters.propertyTypes.includes(type.value)
            return (
              <label
                key={type.value}
                className="filter-checkbox flex items-center justify-between text-xs text-gray-700 cursor-pointer p-1 hover:bg-gray-50 rounded-md transition-colors"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onCheckboxChange('propertyTypes', type.value)}
                    className="rounded text-[#a44294] focus:ring-[#a44294] w-3.5 h-3.5 accent-[#a44294]"
                  />
                  <span>{formatLabel(type.label || type.value)}</span>
                </div>
              </label>
            )
          }}
        />
      </FilterSection>

      {/* Budget Filter */}
      <FilterSection title="Budget Range">
        <div className="flex flex-col gap-2.5 text-xs">
          <div className="flex gap-2">
            <div className="w-1/2">
              <input
                type="number"
                placeholder="Min Price"
                className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:border-[#a44294] text-xs"
                value={minPriceInput}
                onChange={(e) => setMinPriceInput(e.target.value)}
              />
              {minPriceInput && (
                <span className="text-[10px] text-gray-400 mt-0.5 block font-medium">
                  {formatPricePreview(minPriceInput)}
                </span>
              )}
            </div>
            <div className="w-1/2">
              <input
                type="number"
                placeholder="Max Price"
                className="w-full border border-gray-200 rounded-lg p-2 focus:outline-none focus:border-[#a44294] text-xs"
                value={maxPriceInput}
                onChange={(e) => setMaxPriceInput(e.target.value)}
              />
              {maxPriceInput && (
                <span className="text-[10px] text-gray-400 mt-0.5 block font-medium">
                  {formatPricePreview(maxPriceInput)}
                </span>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={handleApplyBudget}
            className="w-full bg-[#a44294] text-white py-2 rounded-lg font-semibold hover:bg-[#8b357d] transition-colors shadow-sm text-xs mt-1"
          >
            Apply Budget
          </button>
        </div>
      </FilterSection>

      {/* Locations with Search Bar */}
      <FilterSection title="Locality / Area">
        <div className="mb-2">
          <input
            type="text"
            placeholder="Search locality (e.g. Nandanam)"
            className="w-full border border-gray-200 rounded-lg p-1.5 text-xs focus:outline-none focus:border-[#a44294] bg-gray-50"
            value={locationSearch}
            onChange={(e) => setLocationSearch(e.target.value)}
          />
        </div>
        <ShowMoreList
          items={filteredLocations}
          initialCount={5}
          renderItem={(loc: any) => {
            const cleanLocality = formatLocalityName(loc)
            const isChecked = filters.propertylocations.includes(loc.id)

            return (
              <label
                key={loc.id}
                className="filter-checkbox flex items-center justify-between text-xs text-gray-700 cursor-pointer p-1 hover:bg-gray-50 rounded-md transition-colors"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onCheckboxChange('propertylocations', loc.id)}
                    className="rounded text-[#a44294] focus:ring-[#a44294] w-3.5 h-3.5 accent-[#a44294]"
                  />
                  <span className="font-medium">{cleanLocality}</span>
                </div>
              </label>
            )
          }}
        />
      </FilterSection>

      {/* BHK / Bedrooms - Pill Style Buttons */}
      {(!activeKeys.length || activeKeys.includes('bhk')) && (
        <FilterSection title="Bedrooms (BHK)">
          <div className="flex flex-wrap gap-2">
            {bhkOptions.map((bhk: any) => {
              const isChecked = filters.bhk.includes(bhk.value)
              return (
                <button
                  key={bhk.id}
                  type="button"
                  onClick={() => onCheckboxChange('bhk', bhk.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    isChecked
                      ? 'bg-[#a44294] text-white border-[#a44294] shadow-sm'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {formatLabel(bhk.label)}
                </button>
              )
            })}
          </div>
        </FilterSection>
      )}

      {/* Purpose - Toggle Pills */}
      <FilterSection title="Purpose">
        <div className="flex gap-2">
          {purposes.map((p: any) => {
            const isChecked = filters.purpose.includes(p.value)
            return (
              <button
                key={p.value}
                type="button"
                onClick={() => onCheckboxChange('purpose', p.value)}
                className={`flex-1 py-1.5 rounded-lg text-xs font-semibold border text-center capitalize transition-all ${
                  isChecked
                    ? 'bg-[#a44294] text-white border-[#a44294] shadow-sm'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
                }`}
              >
                {p.label || p.value}
              </button>
            )
          })}
        </div>
      </FilterSection>

      {/* Furnishing */}
      {(!activeKeys.length || activeKeys.includes('furnishing')) && (
        <FilterSection title="Furnishing">
          <div className="space-y-1.5">
            {furnishings.map((f: any) => {
              const isChecked = filters.furnishing.includes(f.value)
              return (
                <label
                  key={f.value}
                  className="filter-checkbox flex items-center gap-2 text-xs text-gray-700 cursor-pointer p-1 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onCheckboxChange('furnishing', f.value)}
                    className="rounded text-[#a44294] focus:ring-[#a44294] w-3.5 h-3.5 accent-[#a44294]"
                  />
                  <span>{formatLabel(f.label)}</span>
                </label>
              )
            })}
          </div>
        </FilterSection>
      )}
    </div>
  )
}
