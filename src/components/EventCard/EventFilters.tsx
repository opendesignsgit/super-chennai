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
    <div className="space-y-6 p-4 border rounded-lg fildeeerrr">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Filters</h3>
        <button className="text-sm font-medium text-pink-600 hover:text-pink-700">Clear All</button>
      </div>

      {/* Categories */}
      <div className="bg-[#f5f5f5] rounded-2xl p-4 mb-3 shadow-sm">
        {/* <p className="font-bold mb-2">Categories</p> */}
        <div className="flex justify-between items-center mb-3">
          <button className="flex items-center gap-2 font-medium text-gray-700">
            <p className="font-bold categoryname">Categories</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-up w-4 h-4 text-gray-500"
              aria-hidden="true"
            >
              <path d="m18 15-6-6-6 6"></path>
            </svg>
          </button>
          <button className="text-sm text-pink-600 hover:text-pink-700 font-medium">Clear</button>
        </div>

        {categories.map((cat) => (
          <label key={cat.id} className="flex items-center gap-2 text-sm text-gray-700 mb-2">
            <input
              type="checkbox"
              className="accent-pink-600 cursor-pointer"
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
      <div className="bg-[#f5f5f5] rounded-2xl p-4 mb-3 shadow-sm">
        <div className="flex justify-between items-center mb-3">
          <button className="flex items-center gap-2 font-medium text-gray-700">
            <p className="font-bold categoryname">Languages</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-up w-4 h-4 text-gray-500"
              aria-hidden="true"
            >
              <path d="m18 15-6-6-6 6"></path>
            </svg>
          </button>
          <button className="text-sm text-pink-600 hover:text-pink-700 font-medium">Clear</button>
        </div>

        {languages.map((lang) => (
          <label key={lang.value} className="flex items-center gap-2 text-sm text-gray-700  mb-2">
            <input
              type="checkbox"
              className="accent-pink-600 cursor-pointer"
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
      <div className="bg-[#f5f5f5] rounded-2xl p-4 mb-3 shadow-sm">
        <label className="flex items-center gap-2 text-sm text-gray-700  mb-2">
          <input
            type="checkbox"
            className="accent-pink-600 cursor-pointer"
            checked={free}
            onChange={(e) => {
              setFree(e.target.checked)
              applyFilter({ free: e.target.checked })
            }}
          />
          Free Entry
        </label>
      </div>

      {/* Family Friendly */}

      <div className="bg-[#f5f5f5] rounded-2xl p-4 mb-3 shadow-sm">
        <label className="flex items-center gap-2 text-sm text-gray-700  mb-2">
          <input
            type="checkbox"
            className="accent-pink-600 cursor-pointer"
            checked={family}
            onChange={(e) => {
              setFamily(e.target.checked)
              applyFilter({ family: e.target.checked })
            }}
          />
          Family Friendly
        </label>
      </div>

      {/* Date */}
      <div className="bg-[#f5f5f5] rounded-2xl p-4 mb-3 shadow-sm">
        {/* <p className="font-bold mb-2">Date Range</p> */}

        <div className="flex justify-between items-center mb-3">
          <button className="flex items-center gap-2 font-medium text-gray-700">
            <p className="font-bold categoryname">Date Range</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-up w-4 h-4 text-gray-500"
              aria-hidden="true"
            >
              <path d="m18 15-6-6-6 6"></path>
            </svg>
          </button>
          <button className="text-sm text-pink-600 hover:text-pink-700 font-medium">Clear</button>
        </div>

        <input
          type="date"
          onChange={(e) => applyFilter({ startDate: e.target.value })}
          className="border p-2 w-full mb-2 rounded-[5px]"
        />

        <input
          type="date"
          onChange={(e) => applyFilter({ endDate: e.target.value })}
          className="border p-2 w-full rounded-[5px]"
        />
      </div>

      <button
        className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 capitalize cursor-pointer text-white shadow-md"
        style={{ background: 'rgb(164, 66, 148)', borderColor: 'rgb(164, 66, 148)' }}
        onClick={() => router.push('/events')}
      >
        Reset Filters
      </button>
    </div>
  )
}
