'use client'

import React from 'react'
import Image from 'next/image'

type MediaType = {
  id?: string | number
  url?: string
  alt?: string
  filename?: string
}

type CreateItem = {
  id?: string | number
  title?: string
  description?: string
  circleBorder?: string
  color?: string
  icon?: MediaType | number | string | null
}

type Props = {
  headerTitle?: string
  items?: CreateItem[]
}

export default function GoluCreateBlockComponent({ headerTitle = '', items = [] }: Props) {
  const getMediaUrl = (imgField: MediaType | number | string | null | undefined) => {
    if (typeof imgField === 'object' && imgField !== null && 'url' in imgField) {
      return (imgField as MediaType).url
    }
    if (typeof imgField === 'string') {
      return imgField
    }
    return null
  }

  return (
    <section className="max-w-7xl mx-auto my-8 p-6 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm font-sans">
      <div className="flex items-center justify-center space-x-4 mb-10">
        <span className="h-[2px] w-12 bg-pink-500 rounded-full"></span>
        <h2 className="text-xl md:text-2xl font-black text-indigo-950 uppercase text-center">
          {headerTitle}
        </h2>
        <span className="h-[2px] w-12 bg-pink-500 rounded-full"></span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 items-start relative">
        {items.map((item, index) => {
          const iconUrl = getMediaUrl(item.icon)

          return (
            <div
              key={item.id || index}
              className="flex flex-col items-center text-center relative group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-18 h-18 rounded-full ${item.circleBorder || 'border-indigo-300 bg-indigo-50/20'} flex items-center justify-center shadow-sm shrink-0 overflow-hidden`}
                >
                  {iconUrl ? (
                    <Image
                      src={iconUrl}
                      alt={item.title || 'Create icon'}
                      width={72}
                      height={72}
                      className="w-18 h-18 object-cover"
                    />
                  ) : (
                    <span className="text-xl">⭐</span>
                  )}
                </div>

                <div className="text-left">
                  <span
                    className={`text-xl font-black ${item.color || 'text-indigo-900'} block leading-none`}
                  >
                    {item.id}
                  </span>
                  <h3
                    className={`text-xs font-black ${item.color || 'text-indigo-900'} uppercase font-bold mt-0.5`}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#000] leading-relaxed max-w-[150px] text-left">
                {item.description}
              </p>

              {index < items.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-6 text-purple-900 opacity-60">
                  →
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}