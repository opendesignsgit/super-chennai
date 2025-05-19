'use client'
import './style.css'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Loader from '@/components/Loader/loader'

type Props = {
  placeholderText: string
  buttonText: string
  enableFilters?: boolean
  filters?: {
    label: string
    options: {
      value: string
      label: string
    }[]
  }[]
}

export default function GlobalSearch({
  placeholderText,
  buttonText,
  enableFilters = false,
  filters = [],
}: Props) {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)


  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value)
  }

  function handleFilterChange(e: React.ChangeEvent<HTMLSelectElement>, label: string) {
    setSelectedFilters((prev) => ({
      ...prev,
      [label]: e.target.value,
    }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const params = new URLSearchParams()

    if (searchTerm.trim()) {
      params.append('q', searchTerm.trim())
    }
    if (enableFilters) {
      Object.entries(selectedFilters).forEach(([key, value]) => {
        if (value) {
          params.append(key, value)
        }
      })
    }

    router.push(`/search?${params.toString()}`)
  }

  return (
    <div className="formsSection">
      <form className="searchInputForm" onSubmit={handleSubmit}>
        <input placeholder={placeholderText} value={searchTerm} onChange={handleInputChange} />

        {enableFilters && filters.length > 0 && (
          <div className="filtersContainer">
            {filters.map((filter, index) => (
              <div key={index} className="filterGroup">
                <label>{filter.label}</label>
                <select
                  value={selectedFilters[filter.label] || ''}
                  onChange={(e) => handleFilterChange(e, filter.label)}
                >
                  <option value="">All</option>
                  {filter.options.map((option, i) => (
                    <option key={i} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}
        <button type="submit" disabled={loading}>
          {loading ? <Loader /> : buttonText}
        </button>
      </form>
    </div>
  )
}
