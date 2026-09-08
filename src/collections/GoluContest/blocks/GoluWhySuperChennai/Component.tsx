'use client'

import React from 'react'
import Image from 'next/image'
import { Image as ImageIcon } from 'lucide-react'

type MediaType = {
  id?: string | number
  url?: string
  alt?: string
  filename?: string
}

type FeatureItem = {
  id?: string | number
  title?: string
  description?: string
  bgColor?: string
  numColor?: string
  iconText?: string
  icon?: MediaType | number | string | null
}

type Props = {
  headerTitle?: string
  decorImage?: MediaType | number | string | null
  media?: {
    src?: MediaType | number | string | null
    altText?: string
    placeholderText?: string
  }
  features?: FeatureItem[]
}

export default function GoluWhyCornerBlockComponent({
  headerTitle = 'WHY A SUPER CHENNAI CORNER?',
  decorImage,
  media,
  features = [],
}: Props) {
  const getMediaUrl = (imgField: MediaType | number | string | null | undefined) => {
    if (typeof imgField === 'object' && imgField !== null && 'url' in imgField) {
      return (imgField as MediaType).url
    }
    if (typeof imgField === 'string') {
      return imgField
    }
    return null
  }

  const decorImageUrl = getMediaUrl(decorImage)
  const mainMediaUrl = getMediaUrl(media?.src)

  return (
    <section className="max-w-7xl mx-auto my-8 p-6 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm font-sans">
      <div className="flex items-center justify-center space-x-3 mb-10">
        <span className="text-pink-500 text-lg">
          {decorImageUrl ? (
            <Image
              src={decorImageUrl}
              alt="decoration"
              width={56}
              height={56}
              className="w-14 object-contain"
            />
          ) : (
            <img className="w-14" src="/images/golu/golu-second.png" alt="" />
          )}
        </span>
        <h2 className="text-xl md:text-2xl font-black text-indigo-950 uppercase text-center">
          {headerTitle}
        </h2>
        <span className="text-pink-500 text-lg">
          {decorImageUrl ? (
            <Image
              src={decorImageUrl}
              alt="decoration"
              width={56}
              height={56}
              className="w-14 object-contain"
            />
          ) : (
            <img className="w-14" src="/images/golu/golu-second.png" alt="" />
          )}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 w-full h-[320px] md:h-[460px] bg-gray-100 rounded-2xl border border-gray-200 flex flex-col items-center justify-center text-gray-400 relative overflow-hidden">
          {mainMediaUrl ? (
            <Image
              src={mainMediaUrl}
              alt={media?.altText || 'Why Super Chennai Corner'}
              fill
              className="h-[100%] w-full object-cover"
            />
          ) : (
            <>
              <ImageIcon className="w-16 h-16 mb-2 opacity-50" />
              <span className="text-xs font-semibold uppercase text-gray-400">
                {media?.placeholderText || 'Add Image'}
              </span>
            </>
          )}
        </div>

        <div className="lg:col-span-7 space-y-5 heighgolli">
          {features.map((feature, index) => {
            const iconUrl = getMediaUrl(feature.icon)

            return (
              <div key={feature.id || index} className="group parafirstsectionn">
                <div className="flex items-start space-x-4 gap-2 golumaincon">
                  <div
                    className={`w-14 h-14 rounded-full ${feature.bgColor || 'bg-pink-100 text-pink-600'} flex items-center justify-center shrink-0 shadow-sm overflow-hidden`}
                  >
                    {iconUrl ? (
                      <img src={iconUrl} alt="icon" className="w-14 h-14 object-cover" />
                    ) : (
                      <span className="text-lg font-bold">{feature.iconText || '🌟'}</span>
                    )}
                  </div>

                  <div className="mr-0">
                    <span
                      className={`text-lg font-black ${feature.numColor || 'text-pink-600'} shrink-0 numberfontt`}
                    >
                      {feature.id}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-[#000] tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mt-0.5 paragolorr">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {index < features.length - 1 && (
                  <div className="border-b border-gray-100 mt-4 ml-14"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}