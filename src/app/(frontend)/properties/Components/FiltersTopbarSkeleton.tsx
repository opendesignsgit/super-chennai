'use client'

import React from 'react'

export default function FiltersTopbarSkeleton() {
  return (
    <div className="w-full bg-white p-4 rounded-xl border border-gray-100 shadow-sm mb-6 animate-pulse">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((col) => (
          <div key={col} className="p-2 border-r border-gray-50 last:border-0">
            <div className="h-4 w-24 bg-gray-200 rounded mb-3"></div>
            <div className="flex flex-wrap gap-2">
              <div className="h-6 w-16 bg-gray-100 rounded-full"></div>
              <div className="h-6 w-20 bg-gray-100 rounded-full"></div>
              <div className="h-6 w-14 bg-gray-100 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}