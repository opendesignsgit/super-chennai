/* eslint-disable @next/next/no-img-element */

'use client'

import Link from 'next/link'
import React from 'react'

type Media = {
  id: number
  url: string
  alt?: string | null
  filename?: string
}

export type MonthCardData = {
  slug: string
  title: string
  shortDescription?: string
  profileImage?: Media
  month?: string
  year?: number
}

export const MonthCard: React.FC<{
  doc: MonthCardData
}> = ({ doc }) => {
  const { slug, title, profileImage, shortDescription, month, year } = doc

  const displayDate =
    month && year ? `${month.charAt(0).toUpperCase() + month.slice(1)} ${year}` : ''

  const href = `/icon-of-the-month/${slug}`

  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-[24px] border border-[#a34493]/20 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-[230px] w-full overflow-hidden">
        <img
          src={profileImage?.url}
          alt={profileImage?.alt || title}
          title={title}
          className="h-full w-full  transition-transform duration-700 group-hover:scale-105"
        />

        {/* Date */}
        <div className="absolute bottom-4 left-4 z-10">
          <div className="rounded-full bg-[#8b3c82]/90 px-3 py-1 backdrop-blur-md">
            <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
              {displayDate}
            </span>
          </div>
        </div>
      </div>

      {/* Content Below Image */}
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-[2px] w-6 bg-[#8b3c82]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b3c82]">
            Icon of The Month
          </span>
        </div>

        <h3 className="text-xl line-clamp-2 font-bold text-[#8b3c82] capitalize ">{title}</h3>

        {shortDescription && (
          <p className="mt-2 line-clamp-2 text-sm text-gray-600">{shortDescription}</p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm font-medium uppercase tracking-wider text-[#8b3c82]">
            Read Full Story
          </span>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f9ebf7] text-[#8b3c82] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#a34493] group-hover:text-white">
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
