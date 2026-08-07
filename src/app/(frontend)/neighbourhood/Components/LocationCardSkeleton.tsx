'use client'

export default function LocationCardSkeleton() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="relative h-40 bg-gray-200">
        <div className="absolute top-2 left-2 bg-gray-300 h-4 w-20 rounded" />
      </div>

      <div className="p-4 cardssspadddingss">
        {/* Title Skeleton */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-4 h-4 rounded-full bg-gray-200" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
        </div>

        {/* Description Skeleton */}
        <div className="space-y-1.5 mb-3">
          <div className="h-3 bg-gray-200 rounded w-full" />
          <div className="h-3 bg-gray-200 rounded w-3/4" />
        </div>

        {/* Tags / Details Skeleton */}
        <div className="flex items-center gap-3 mb-3">
          <div className="h-6 bg-gray-200 rounded w-16" />
          <div className="h-6 bg-gray-200 rounded w-16" />
          <div className="h-6 bg-gray-200 rounded w-16" />
        </div>

        {/* Footer Link Skeleton */}
        <div className="flex justify-center pt-3 border-t border-gray-100">
          <div className="h-3 bg-gray-200 rounded w-24" />
        </div>
      </div>
    </div>
  )
}
