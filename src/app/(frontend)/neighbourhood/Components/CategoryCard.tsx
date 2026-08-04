import React from 'react'
import { StarIcon, MapPinIcon } from '../ui/Icons'

interface CategoryCardProps {
  item: any
  locationId: string
  safeCat: string
  // apiBaseUrl: string
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  item,
  locationId,
  safeCat,
  // apiBaseUrl,
}) => {
  const imageUrl = item?.FeaturedImage?.url
    ? `${item.FeaturedImage.url}`
    : 'https://www.superchennai.com/images/restaurants-banner.jpg'

  return (
    <div className="group cursor-pointer bg-white rounded-lg overflow-hidden border border-gray-100 shadow-xs">
      <a href={`/neighbourhood/${locationId}/${safeCat}/${safeCat}/${item.slug}`}>
        <div className="w-full h-72 overflow-hidden">
          <img
            src={imageUrl}
            onError={(e: any) => {
              e.target.onerror = null
              e.target.src = 'https://www.superchennai.com/images/restaurants-banner.jpg'
            }}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
        <div className="p-3">
          <h3 className="font-semibold text-gray-900 leading-tight mb-2">{item.name}</h3>
          <p className="text-gray-500 mb-2 text-[14px] line-clamp-2">
            {item.description
              ? `${item.description.slice(0, 70)}...`
              : 'No description available'}
          </p>
          <div className="flex items-center gap-3 text-gray-500">
            <span className="flex items-center gap-0.5">
              <StarIcon />
              <span className="font-medium text-gray-700 text-xs">
                {item?.googleData?.googleRating || 'N/A'}
              </span>
            </span>
            <span className="flex items-center gap-0.5 text-xs">
              <MapPinIcon className="w-3.5 h-3.5" />
              {item?.locations?.city || 'Unknown'}
            </span>
          </div>
        </div>
      </a>
    </div>
  )
}