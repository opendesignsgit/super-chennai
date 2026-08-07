/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react'
import { formatLabel } from '../utils/formatLabel'
import { propertyTypeFiltersMap } from './FiltersSidebar'
// import '../../Styles/FiltersTopbar.css'
import { useFiltersData } from '../hooks/useFilters'
import FiltersTopbarSkeleton from '../Components/FiltersTopbarSkeleton'

const FilterSection = ({ title, children, defaultExpanded = false }: any) => {
  const [expanded, setExpanded] = useState(defaultExpanded)

  return (
    <div className="filter-section topbar-filter-section">
      <div
        className="filter-section-header cursor-pointer"
        onClick={() => setExpanded(!expanded)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h4>{title}</h4>
        <img
          className="cursor-pointer"
          src="/images/icons/down-arrow-filter.svg"
          alt="Toggle"
          style={{
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s',
          }}
        />
      </div>
      {expanded && <div className="filter-section-contentTopBar">{children}</div>}
    </div>
  )
}

const getActiveFilterKeys = (selectedPropertyTypes: string[]) => {
  const keys = (selectedPropertyTypes || []).reduce((acc: string[], type: string) => {
    const mapKeys = (propertyTypeFiltersMap as any)[type]
    if (mapKeys) acc.push(...mapKeys)
    return acc;
  }, [])
  return [...new Set(keys)]
}

const FiltersTopbar = ({
  filters,
  onCheckboxChange,
  onBudgetChange,
  onClearAll,
  setUseTopFilter,
}: any) => {
  const { propertylocations, propertyTypes, bhkOptions, purposes, furnishings, loading } =
    useFiltersData()

  const activeFilterKeys = getActiveFilterKeys(filters.propertyTypes)

  const [showMore, setShowMore] = useState(false)
  const [showMorePropertyTypes, setShowMorePropertyTypes] = useState(false)

  const visiblePropertyTypes = showMorePropertyTypes
    ? propertyTypes
    : propertyTypes.slice(0, 3)

  const togglePropertyType = (val: string) => onCheckboxChange('propertyTypes', val)

  const ShowMoreList = ({ items, renderItem, initialCount = 5 }: any) => {
    const [showMoreList, setShowMoreList] = useState(false)
    const visibleItems = showMoreList ? items : items.slice(0, initialCount)

    return (
      <div className="show-more-list topbar-show-more">
        {visibleItems.map(renderItem)}
        {items.length > initialCount && (
          <span
            className="more-badge"
            onClick={() => setShowMoreList((prev) => !prev)}
          >
            {showMoreList ? 'Show Less' : `+${items.length - initialCount} more`}
          </span>
        )}
      </div>
    )
  }

  if (loading) return <FiltersTopbarSkeleton />

  return (
    <>
      <div className="filters-topbar flex flex-wrap gap-4 items-start bg-white shadow rounded">
        {/* Property Types */}
        <FilterSection title="Looking For">
          <div className="property-types-badges flex flex-wrap gap-2">
            {visiblePropertyTypes.map((type: any) => {
              const isSelected = filters.propertyTypes.includes(type.value)
              return (
                <span
                  key={type.value}
                  className={`badge ${isSelected ? 'selected' : ''}`}
                  onClick={() => togglePropertyType(type.value)}
                >
                  {formatLabel(type.label || type.value)}
                </span>
              )
            })}
            {propertyTypes.length > 3 && !showMorePropertyTypes && (
              <span
                className="more-badge"
                onClick={() => setShowMorePropertyTypes(true)}
              >
                +{propertyTypes.length - 3} more
              </span>
            )}
          </div>
        </FilterSection>

        {/* Locations */}
        <FilterSection title="Locations">
          <ShowMoreList
            items={propertylocations}
            initialCount={5}
            renderItem={(loc: any) => (
              <label key={loc.id} className="filter-checkbox mr-2">
                <input
                  type="checkbox"
                  checked={filters.propertylocations.includes(loc.id)}
                  onChange={() => onCheckboxChange('propertylocations', loc.id)}
                />
                <span>{formatLabel(loc.label)}</span>
              </label>
            )}
          />
        </FilterSection>

        {/* Bedrooms / BHK */}
        <FilterSection title="Bedrooms">
          <ShowMoreList
            items={bhkOptions}
            initialCount={4}
            renderItem={(bhk: any) => (
              <label key={bhk.id} className="filter-checkbox mr-2">
                <input
                  type="checkbox"
                  checked={filters.bhk.includes(bhk.value)}
                  onChange={() => onCheckboxChange('bhk', bhk.value)}
                />
                <span>{formatLabel(bhk.label)}</span>
              </label>
            )}
          />
        </FilterSection>

        {/* Purpose */}
        <FilterSection title="Purpose">
          {purposes.map((p: any) => (
            <label key={p.value} className="filter-checkbox mr-2">
              <input
                type="checkbox"
                checked={filters.purpose.includes(p.value)}
                onChange={() => onCheckboxChange('purpose', p.value)}
              />
              <span>{formatLabel(p.label)}</span>
            </label>
          ))}
        </FilterSection>

        <div className="filter-checkbox mr-2">
          <span
            className="badge cursor-pointer text-purple-600 hidden md:inline-flex"
            onClick={() => setUseTopFilter(false)}
            style={{ gap: '4px' }}
          >
            Side Bar
          </span>

          <span
            className="badge cursor-pointer text-red-600 hidden md:inline-flex"
            onClick={onClearAll}
            style={{ gap: '4px' }}
          >
            Clear All
          </span>
        </div>
      </div>

      {/* Advanced Filters */}
      {showMore && activeFilterKeys.length > 0 && (
        <div className="advanced-filters flex flex-wrap gap-4 mt-4">
          {/* Possession Status */}
          <FilterSection title="Possession Status">
            {['Ready', 'Under Construction'].map((status) => {
              const val = status.toLowerCase().replace(' ', '_')
              return (
                <label key={val} className="filter-checkbox mr-2">
                  <input
                    type="checkbox"
                    checked={filters.possessionStatus.includes(val)}
                    onChange={() => onCheckboxChange('possessionStatus', val)}
                  />
                  <span>{formatLabel(status)}</span>
                </label>
              )
            })}
          </FilterSection>

          {/* Furnishing */}
          {activeFilterKeys.includes('furnishing') && (
            <FilterSection title="Furnishing">
              {furnishings.map((f: any) => (
                <label key={f.value} className="filter-checkbox mr-2">
                  <input
                    type="checkbox"
                    checked={filters.furnishing.includes(f.value)}
                    onChange={() => onCheckboxChange('furnishing', f.value)}
                  />
                  <span>{formatLabel(f.label)}</span>
                </label>
              ))}
            </FilterSection>
          )}

          {/* Age of Property */}
          {activeFilterKeys.includes('ageOfProperty') && (
            <FilterSection title="Age of Property">
              {[
                { label: 'New Years', value: 'new years' },
                { label: '0-5 Years', value: '0-5' },
                { label: '5-10 Years', value: '5-10' },
                { label: '10-20 Years', value: '10plus' },
              ].map((age) => (
                <label key={age.value} className="filter-checkbox mr-2">
                  <input
                    type="radio"
                    name="ageOfProperty"
                    checked={filters.ageOfProperty === age.value}
                    onChange={() => onCheckboxChange('ageOfProperty', age.value)}
                  />
                  <span>{formatLabel(age.label)}</span>
                </label>
              ))}
            </FilterSection>
          )}

          {/* Plot Dimensions */}
          {activeFilterKeys.includes('plotDimensions') && (
            <FilterSection title="Plot Dimensions (ft)">
              <div className="plot-dimensions-inputs flex gap-2">
                <label>
                  Length:
                  <input
                    type="number"
                    value={filters.plotDimensions?.length || ''}
                    onChange={(e) =>
                      onCheckboxChange('plotDimensions', {
                        ...filters.plotDimensions,
                        length: Number(e.target.value),
                      })
                    }
                  />
                </label>
                <label>
                  Width:
                  <input
                    type="number"
                    value={filters.plotDimensions?.width || ''}
                    onChange={(e) =>
                      onCheckboxChange('plotDimensions', {
                        ...filters.plotDimensions,
                        width: Number(e.target.value),
                      })
                    }
                  />
                </label>
              </div>
            </FilterSection>
          )}

          {/* Parking */}
          {activeFilterKeys.includes('parking') && (
            <FilterSection title="Parking / Outdoor">
              {[
                { label: 'Covered Parking Slots', value: 'coveredParking' },
                { label: 'Open Parking Slots', value: 'openParking' },
                { label: 'Visitor Parking', value: 'visitorParking' },
                { label: 'EV Charging Point', value: 'evCharging' },
              ].map((p) => (
                <label key={p.value} className="filter-checkbox mr-2">
                  <input
                    type="checkbox"
                    checked={filters.parking.includes(p.value)}
                    onChange={() => onCheckboxChange('parking', p.value)}
                  />
                  <span>{formatLabel(p.label)}</span>
                </label>
              ))}
            </FilterSection>
          )}

          {/* Amenities */}
          {activeFilterKeys.includes('amenities') && (
            <FilterSection title="Building / Amenities">
              {[
                'Elevator',
                'Security',
                'Swimming Pool',
                'Gym',
                'Play Area',
                'Clubhouse',
                'Garden',
                'Intercom',
                'Fire Safety',
              ].map((amenity) => {
                const key = amenity.toLowerCase().replace(/\s+/g, '')
                return (
                  <label key={key} className="filter-checkbox mr-2">
                    <input
                      type="checkbox"
                      checked={filters.amenities.includes(key)}
                      onChange={() => onCheckboxChange('amenities', key)}
                    />
                    <span>{formatLabel(amenity)}</span>
                  </label>
                )
              })}
            </FilterSection>
          )}

          {/* Interiors */}
          {activeFilterKeys.includes('interiors') && (
            <FilterSection title="Interiors / Furnishings">
              {[
                'Modular Kitchen',
                'Wardrobes',
                'False Ceiling',
                'Curtains / Blinds',
                'Wooden Flooring',
              ].map((item) => {
                const key = item.toLowerCase().replace(/\s+|\/+/g, '')
                return (
                  <label key={key} className="filter-checkbox mr-2">
                    <input
                      type="checkbox"
                      checked={filters.interiors.includes(key)}
                      onChange={() => onCheckboxChange('interiors', key)}
                    />
                    <span>{formatLabel(item)}</span>
                  </label>
                )
              })}
            </FilterSection>
          )}

          {/* Appliances */}
          {activeFilterKeys.includes('appliances') && (
            <FilterSection title="Appliances / Electronics">
              {[
                'AC Units',
                'Fridge',
                'Washing Machine',
                'Dishwasher',
                'Microwave',
                'TV',
                'Geyser',
                'Power Backup',
                'Solar',
                'Water Purifier',
              ].map((appliance) => {
                const key = appliance.toLowerCase().replace(/\s+/g, '')
                return (
                  <label key={key} className="filter-checkbox mr-2">
                    <input
                      type="checkbox"
                      checked={filters.appliances.includes(key)}
                      onChange={() => onCheckboxChange('appliances', key)}
                    />
                    <span>{formatLabel(appliance)}</span>
                  </label>
                )
              })}
            </FilterSection>
          )}

          {/* Bathroom Features */}
          {activeFilterKeys.includes('bathroomFeatures') && (
            <FilterSection title="Bathroom Features">
              {[
                { label: 'Jacuzzi', key: 'jacuzzi' },
                { label: 'Bathtubs', key: 'bathtubs' },
                { label: 'Heated Flooring', key: 'heatedFlooring' },
              ].map((feature) => (
                <label key={feature.key} className="filter-checkbox mr-2">
                  <input
                    type="checkbox"
                    checked={filters.bathroomFeatures[feature.key]}
                    onChange={() =>
                      onCheckboxChange('bathroomFeatures', {
                        ...filters.bathroomFeatures,
                        [feature.key]: !filters.bathroomFeatures[feature.key],
                      })
                    }
                  />
                  <span>{formatLabel(feature.label)}</span>
                </label>
              ))}
            </FilterSection>
          )}

          {/* Facing */}
          {activeFilterKeys.includes('facing') && (
            <FilterSection title="Facing">
              {['North', 'East', 'West', 'South'].map((dir) => {
                const val = dir.toLowerCase()
                return (
                  <label key={val} className="filter-checkbox mr-2">
                    <input
                      type="checkbox"
                      checked={filters.facing.includes(val)}
                      onChange={() => onCheckboxChange('facing', val)}
                    />
                    <span>{formatLabel(dir)}</span>
                  </label>
                )
              })}
            </FilterSection>
          )}
        </div>
      )}
    </>
  )
}

export default FiltersTopbar