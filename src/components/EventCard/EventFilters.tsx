'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

type Category = {
  id: string | number
  title: string
}

type Props = {
  categories: Category[]
  languages: { label: string; value: string }[]
}

export const EventFiltersSidebar = ({ categories, languages }: Props) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [free, setFree] = useState(searchParams.get('free') === 'true')
  const [family, setFamily] = useState(searchParams.get('family') === 'true')

  const applyFilter = (newFilters: Record<string, string | boolean>) => {
    const params = new URLSearchParams(searchParams.toString())

    Object.entries(newFilters).forEach(([key, value]) => {
      if (!value) params.delete(key)
      else params.set(key, String(value))
    })

    router.push(`/events?${params}`)
  }

  return (
    <div className="space-y-6 p-4 border rounded-lg">
      <h3 className="font-semibold text-lg">Filters</h3>

      {/* Categories */}
      <div>
        <p className="font-medium mb-2">Categories</p>

        {categories.map((cat) => (
          <label key={cat.id} className="flex gap-2">
            <input
              type="checkbox"
              onChange={(e) =>
                applyFilter({
                  category: e.target.checked ? String(cat.id) : '',
                })
              }
            />
            {cat.title}
          </label>
        ))}
      </div>

      {/* Languages */}
      <div>
        <p className="font-medium mb-2">Languages</p>

        {languages.map((lang) => (
          <label key={lang.value} className="flex gap-2">
            <input
              type="checkbox"
              onChange={(e) =>
                applyFilter({
                  language: e.target.checked ? lang.value : '',
                })
              }
            />
            {lang.label}
          </label>
        ))}
      </div>

      {/* Free Entry */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={free}
          onChange={(e) => {
            setFree(e.target.checked)
            applyFilter({ free: e.target.checked })
          }}
        />
        Free Entry
      </label>

      {/* Family Friendly */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={family}
          onChange={(e) => {
            setFamily(e.target.checked)
            applyFilter({ family: e.target.checked })
          }}
        />
        Family Friendly
      </label>

      {/* Date */}
      <div>
        <p className="text-sm font-medium mb-2">Date Range</p>

        <input
          type="date"
          onChange={(e) => applyFilter({ startDate: e.target.value })}
          className="border p-2 w-full mb-2"
        />

        <input
          type="date"
          onChange={(e) => applyFilter({ endDate: e.target.value })}
          className="border p-2 w-full"
        />
      </div>

      <button onClick={() => router.push('/events')}>
        Reset Filters
      </button>
    </div>
  )
}