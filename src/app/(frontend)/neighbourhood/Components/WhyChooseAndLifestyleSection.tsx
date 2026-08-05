/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'

interface WhyChooseItem {
  id?: string | number
  reason: string
}

interface LifestyleScoreItem {
  id?: string | number
  label: string
  score: number | string
}

interface WhyChooseAndLifestyleSectionProps {
  locationData: {
    label?: string
    locality?: string
    whyChoose?: WhyChooseItem[]
    lifestyleScores?: LifestyleScoreItem[]
    image?: {
      url?: string
      alt?: string
    }
  }
  apiBaseUrl?: string
}

const StarRating = ({ score }: { score: number }) => {
  const roundedScore = Math.min(Math.max(score, 0), 5)
  return (
    <div className="flex items-center gap-1 text-amber-400 text-sm">
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star}>
          {star <= Math.round(roundedScore) ? '★' : '☆'}
        </span>
      ))}
      <span className="text-xs text-gray-600 font-semibold ml-1">
        ({roundedScore})
      </span>
    </div>
  )
}

export function WhyChooseAndLifestyleSection({
  locationData,
  apiBaseUrl = '',
}: WhyChooseAndLifestyleSectionProps) {
  const location = locationData
  const whyChoose = location?.whyChoose || []
  const lifestyleScores = location?.lifestyleScores || []

  if (whyChoose.length === 0 && lifestyleScores.length === 0) {
    return null
  }

  const imageUrl = location?.image?.url
    ? `${apiBaseUrl}${location.image.url}`
    : '/images/no-image.png'

  const locationLabel = location?.label || location?.locality || ''

  return (
    <div className="container max-w-7xl mx-auto px-8 pb-10">
      <div className="flex gap-8 items-start">
        <div className="sneighflex113">
          <div className="flex-1 neighflex111">
            <h3 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
              WHY CHOOSE {locationLabel} ?
            </h3>
            <ul className="space-y-3">
              {whyChoose.length > 0 ? (
                whyChoose.map((item, i) => (
                  <li
                    key={item.id || i}
                    className="flex items-start gap-2 text-[#000] !text-[15px] "
                  >
                    <span className="text-purple-600 mt-0.5">✅</span>
                    {item.reason}
                  </li>
                ))
              ) : (
                <li className="text-gray-400 text-sm italic">
                  Highlights coming soon.
                </li>
              )}
            </ul>
          </div>
          <div className="neighflex112">
            <img
              src={imageUrl}
              alt={location?.image?.alt || locationLabel || 'Location image'}
            />
          </div>
        </div>

        <div className="flex-1 sneighflex113">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
              LIFESTYLE SCORE
            </h3>
          </div>
          <p className="mb-4 text-[#000] neighbourtwoparagraph">
            Rated based on neighborhood core living convenience factors
          </p>
          <div className="grid grid-cols-3 gap-x-6 gap-y-4">
            {lifestyleScores.length > 0 ? (
              lifestyleScores.map((ls, i) => (
                <div className="sectionsssss" key={ls.id || i}>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-sm text-[#000]">{ls.label}</span>
                  </div>
                  <StarRating score={Number(ls.score) || 0} />
                </div>
              ))
            ) : (
              <div className="text-gray-400 text-sm italic col-span-3">
                No scores compiled yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}