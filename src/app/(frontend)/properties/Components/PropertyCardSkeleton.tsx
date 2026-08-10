'use client'

import React from 'react'

export default function PropertyCardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden animate-pulse flex flex-col">
      {/* Top Image Container Skeleton */}
      <div className="relative h-48 w-full bg-gray-200">
        {/* Purpose Badge Skeleton */}
        <div className="absolute top-3 left-3 h-5 w-12 bg-gray-300 rounded-full"></div>
      </div>

      {/* Content Container Skeleton */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Price Skeleton */}
          <div className="h-6 w-28 bg-gray-200 rounded mb-2"></div>

          {/* Title Skeleton */}
          <div className="h-4 w-5/6 bg-gray-200 rounded mb-2"></div>

          {/* Location Line Skeleton */}
          <div className="flex items-center gap-2 mb-3">
            <div className="h-3 w-3 bg-gray-200 rounded-full"></div>
            <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Card Footer Specs Skeleton */}
        <div className="border-t border-gray-100 pt-3 mt-2 flex items-center justify-between">
          <div className="h-4 w-12 bg-gray-200 rounded"></div>
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
          <div className="h-4 w-14 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  )
}