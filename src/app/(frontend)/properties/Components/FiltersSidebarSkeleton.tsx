'use client'

import React from 'react'

export default function FiltersSidebarSkeleton() {
  return (
    <div className="filters-sidebar bg-white p-4 rounded-xl border border-gray-100 shadow-sm animate-pulse">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center mb-6 pb-3 border-b border-gray-100">
        <div className="h-5 w-24 bg-gray-200 rounded"></div>
        <div className="h-4 w-12 bg-gray-200 rounded"></div>
      </div>

      {/* Section 1 Skeleton */}
      <div className="mb-6">
        <div className="h-4 w-32 bg-gray-200 rounded mb-3"></div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-100 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
        </div>
      </div>

      {/* Section 2 Skeleton (Budget) */}
      <div className="mb-6">
        <div className="h-4 w-28 bg-gray-200 rounded mb-3"></div>
        <div className="flex gap-2 mb-2">
          <div className="h-8 w-1/2 bg-gray-100 rounded"></div>
          <div className="h-8 w-1/2 bg-gray-100 rounded"></div>
        </div>
        <div className="h-7 w-full bg-gray-200 rounded"></div>
      </div>

      {/* Section 3 Skeleton (Checkboxes) */}
      <div className="mb-6">
        <div className="h-4 w-24 bg-gray-200 rounded mb-3"></div>
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-100 rounded"></div>
          <div className="h-4 w-4/5 bg-gray-100 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-100 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
        </div>
      </div>
    </div>
  )
}