'use client'

import { useState, useEffect } from 'react'

export interface FilterOption {
  id?: string
  label: string
  value: string
}

export interface FiltersData {
  propertylocations: FilterOption[]
  propertyTypes: FilterOption[]
  bhkOptions: FilterOption[]
  purposes: FilterOption[]
  furnishings: FilterOption[]
  loading: boolean
  error: string | null
}

export function useFiltersData(): FiltersData {
  const [data, setData] = useState<FiltersData>({
    propertylocations: [],
    propertyTypes: [],
    bhkOptions: [],
    purposes: [],
    furnishings: [],
    loading: true,
    error: null,
  })

  useEffect(() => {
    let isMounted = true

    async function loadFilterOptions() {
      try {
        const [locRes, typeRes] = await Promise.allSettled([
          fetch('/api/propertylocations?limit=100000'),
          fetch('/api/property-types?limit=100000'),
        ])

        let fetchedLocations: FilterOption[] = []
        let fetchedTypes: FilterOption[] = []

        if (locRes.status === 'fulfilled' && locRes.value.ok) {
          const locJson = await locRes.value.json()
          fetchedLocations = (locJson.docs || []).map((item: any) => ({
            id: item.id,
            label: item.name || item.label || item.title,
            value: item.slug || item.id,
          }))
        }

        if (typeRes.status === 'fulfilled' && typeRes.value.ok) {
          const typeJson = await typeRes.value.json()
          fetchedTypes = (typeJson.docs || []).map((item: any) => ({
            id: item.id,
            label: item.name || item.label || item.title,
            value: item.slug || item.value || item.id,
          }))
        }

        if (!isMounted) return

        setData({
          propertylocations:
            fetchedLocations.length > 0
              ? fetchedLocations
              : [
                  { id: '1', label: 'Velachery', value: 'velachery' },
                  { id: '2', label: 'Adyar', value: 'adyar' },
                  { id: '3', label: 'Anna Nagar', value: 'anna-nagar' },
                  { id: '4', label: 'OMR', value: 'omr' },
                  { id: '5', label: 'T. Nagar', value: 't-nagar' },
                  { id: '6', label: 'Porur', value: 'porur' },
                ],
          propertyTypes:
            fetchedTypes.length > 0
              ? fetchedTypes
              : [
                  { id: '1', label: 'Apartment', value: 'apartment' },
                  { id: '2', label: 'Villa', value: 'villa' },
                  { id: '3', label: 'Plot / Land', value: 'plot' },
                  { id: '4', label: 'Commercial', value: 'commercial' },
                ],
          bhkOptions: [
            { id: '1', label: '1 BHK', value: '1' },
            { id: '2', label: '2 BHK', value: '2' },
            { id: '3', label: '3 BHK', value: '3' },
            { id: '4', label: '4 BHK', value: '4' },
            { id: '5', label: '5+ BHK', value: '5+' },
          ],
          purposes: [
            { label: 'Buy', value: 'buy' },
            { label: 'Rent', value: 'rent' },
            { label: 'Lease', value: 'lease' },
          ],
          furnishings: [
            { label: 'Unfurnished', value: 'unfurnished' },
            { label: 'Semi-Furnished', value: 'semi-furnished' },
            { label: 'Fully Furnished', value: 'fully-furnished' },
          ],
          loading: false,
          error: null,
        })
      } catch (err: any) {
        if (isMounted) {
          setData((prev) => ({
            ...prev,
            loading: false,
            error: err?.message || 'Failed to load filters',
          }))
        }
      }
    }

    loadFilterOptions()

    return () => {
      isMounted = false
    }
  }, [])

  return data
}
