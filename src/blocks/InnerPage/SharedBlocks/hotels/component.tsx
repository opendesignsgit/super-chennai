'use client'

import { Media } from '@/payload-types'
import Image from 'next/image'

type DetailSectionProps = {
  sections: {
    id?: string
    title: string
    rating: number
    link1?: string
    link2?: string
    image: Media
  }[]
}

export const HotelDetailSectionBlock: React.FC<DetailSectionProps> = ({ sections }) => {
  return (
    <div className="container max-w-7xl mx-auto px-4 py-8">
      {sections.map((section) => {
        const fullStars = Math.floor(section.rating)
        const hasHalfStar = section.rating % 1 >= 0.5
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

        return (
          <div
            key={section.id}
            className="detailapiSec w-full bg-white shadow-md rounded-lg overflow-hidden mb-8"
          >
            <h2 className="text-2xl font-semibold text-gray-800 px-4 pt-4">{section.title}</h2>

            {typeof section.image === 'object' && (
              <Image
                src={section.image.url ?? '/placeholder.png'}
                alt={section.image.alt || section.title}
                width={1600}
                height={700}
                className="w-full h-[700px] object-cover mt-4"
              />
            )}

            <div className="detailtextbox px-4 pb-4">
              <h3 className="text-xl font-medium text-gray-700">{section.title}</h3>

              <div className="flex items-center space-x-1 mb-6 text-xl">
                {[...Array(fullStars)].map((_, i) => (
                  <span key={`full-${i}`} className="text-yellow-500">
                    ★
                  </span>
                ))}
                {hasHalfStar && <span className="text-yellow-500">⯪</span>}
                {[...Array(emptyStars)].map((_, i) => (
                  <span key={`empty-${i}`} className="text-gray-300">
                    ★
                  </span>
                ))}
                <span className="ml-2 text-sm text-gray-600">({section.rating} out of 5)</span>
              </div>

              <ul>
                <li className="flex space-x-6">
                  {section.link1 && (
                    <a
                      href={section.link1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Know More
                    </a>
                  )}
                  {section.link2 && (
                    <a
                      href={section.link2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      View Location
                    </a>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )
      })}
    </div>
  )
}
