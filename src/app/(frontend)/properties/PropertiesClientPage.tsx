/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { defaultFilters } from './utils/filterDefault'
import { fetchProperties } from './services/propertyService'
import { toggleArrayValue } from './utils/filterHelpers'
import FiltersSidebar from './Components/FiltersSidebar'
import FiltersTopbar from './Components/FiltersTopbar'
import PropertiesList from './Components/PropertiesList'
import Pagination from './Components/Pagination'
import AccodomationBanner from '../../../assets/images/neighbourhood-main-image.jpeg'
interface PropertiesClientPageProps {
  initialProperties: any[]
  totalResults: number
  totalPages: number
  currentPage: number
}
export default function PropertiesClientPage({
  initialProperties = [],
  totalResults: serverTotalResults = 0,
  totalPages: serverTotalPages = 1,
  currentPage: serverCurrentPage = 1,
}: PropertiesClientPageProps) {
  
  const [filters, setFilters] = useState(defaultFilters)
  const [sortBy, setSortBy] = useState('-createdAt')
  const [showMobileFilter, setShowMobileFilter] = useState(false)
  const [useTopFilter, setUseTopFilter] = useState(false)

  const [properties, setProperties] = useState(initialProperties)
  const [totalResults, setTotalResults] = useState(serverTotalResults)
  const [totalPages, setTotalPages] = useState(serverTotalPages)
  const [currentPage, setCurrentPage] = useState(serverCurrentPage)
  const [loading, setLoading] = useState(false)

  const ITEMS_PER_PAGE = 12
  const isInitialMount = useRef(true)
  useEffect(() => {
 
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }

    let isMounted = true
    const loadProperties = async () => {
      setLoading(true)
      try {
        const result = await fetchProperties(filters, sortBy, currentPage, ITEMS_PER_PAGE)
        if (isMounted) {
          setProperties(result.docs || [])
          setTotalResults(result.totalDocs || 0)
          setTotalPages(result.totalPages || Math.ceil((result.totalDocs || 0) / ITEMS_PER_PAGE) || 1)
        }
      } catch (err) {
        console.error('Failed to fetch properties from Payload:', err)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    loadProperties()
    return () => {
      isMounted = false
    }
  }, [filters, sortBy, currentPage])

  const handleCheckboxChange = (name: string, value: any, nestedKey: string | null = null) => {
    setFilters((prev: any) => {
      if (nestedKey) {
        return {
          ...prev,
          [name]: {
            ...prev[name],
            [nestedKey]: value,
          },
        }
      } else if (typeof prev[name] === 'boolean') {
        return { ...prev, [name]: value }
      } else if (Array.isArray(prev[name])) {
        return { ...prev, [name]: toggleArrayValue(prev[name], value) }
      } else {
        return { ...prev, [name]: value }
      }
    })

    setCurrentPage(1)
  }

  const handleBudgetChange = ([min, max]: [number, number]) => {
    setFilters((prev: any) => ({
      ...prev,
      minBudget: min,
      maxBudget: max,
    }))
    setCurrentPage(1)
  }

  const onClearAll = () => {
    setFilters(defaultFilters)
    setCurrentPage(1)
  }

  return (
    <>
      <div className="accaodomationBannerSection">
        <div>
          <Image src={AccodomationBanner} alt="Chennai Properties" priority />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Properties</h3>
            <div className="breadCrum">
              <a href="/">Home</a> - <a href="#">Properties</a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f4f5f7]">
        <div className="container max-w-7xl mx-auto px-4 mainConiatinerPropertyList py-6">
          <div className={`${useTopFilter ? 'flex flex-col gap-6' : 'flex flex-col md:flex-row gap-6'}`}>
            {/* Sidebar / Topbar Filter */}
            {!useTopFilter ? (
              <div className="w-[280px] shrink-0 hidden md:block">
                <FiltersSidebar
                  filters={filters}
                  onCheckboxChange={handleCheckboxChange}
                  onBudgetChange={handleBudgetChange}
                  onClearAll={onClearAll}
                  setUseTopFilter={setUseTopFilter}
                />
              </div>
            ) : (
              <FiltersTopbar
                filters={filters}
                onCheckboxChange={handleCheckboxChange}
                onBudgetChange={handleBudgetChange}
                onClearAll={onClearAll}
                setUseTopFilter={setUseTopFilter}
              />
            )}

            {/* Properties Listing */}
            <section className="flex-1 w-full">
              <div className="PropertiesCards">
                <PropertiesList
                  properties={properties}
                  loading={loading}
                  sortBy={sortBy}
                  onSortChange={(val: string) => {
                    setSortBy(val)
                    setCurrentPage(1)
                  }}
                  filters={filters}
                  totalResults={totalResults}
                  onCheckboxChange={handleCheckboxChange}
                  onBudgetChange={handleBudgetChange}
                  onClearAll={onClearAll}
                  setUseTopFilter={setUseTopFilter}
                  showMobileFilter={showMobileFilter}
                  setShowMobileFilter={setShowMobileFilter}
                />
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="pagination-wrapper mt-6">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      onPageChange={(page: number) => {
                        setCurrentPage(page)
                        window.scrollTo({ top: 400, behavior: 'smooth' })
                      }}
                    />
                  </div>
                )}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}