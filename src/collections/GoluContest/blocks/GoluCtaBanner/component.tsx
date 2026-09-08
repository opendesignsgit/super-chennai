'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight, Image as ImageIcon } from 'lucide-react'

type MediaType = {
  id?: string | number
  url?: string
  alt?: string
  filename?: string
}

type Props = {
  title?: string
  buttonLabel?: string
  buttonUrl?: string
  flowerImage?: MediaType | number | string | null
}

export default function GoluCtaBannerBlockComponent({
  title = 'READY TO CREATE YOUR GOLU?',
  buttonLabel = 'REGISTER NOW',
  buttonUrl = '#register',
  flowerImage,
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

  const flowerImgUrl = getMediaUrl(flowerImage)

  return (
    <section className="max-w-7xl mx-auto my-8 p-6 md:p-8 bg-white rounded-3xl border border-gray-100 shadow-sm font-sans">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-[10%] px-4 md:px-12">
        <div className="text-pink-400 opacity-80">
          {flowerImgUrl ? (
            <Image
              src={flowerImgUrl}
              alt="flower decoration"
              width={56}
              height={56}
              className="w-14 object-contain"
            />
          ) : (
            <img src="/images/golu/flower-image.png" alt="flower decoration" className="w-14" />
          )}
        </div>

        <div className="flex flex-col items-center text-center space-y-4">
          <h2 className="text-xl md:text-2xl font-black text-indigo-950 uppercase font-bold">
            {title}
          </h2>

          <a
            href={buttonUrl}
            className="cursor-pointer flex items-center justify-center gap-3 bg-pink-600 hover:bg-pink-700 text-white font-black text-sm px-8 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            <span>{buttonLabel}</span>
            <span className="bg-white text-pink-600 rounded-full p-1 flex items-center justify-center">
              <ArrowRight size={16} strokeWidth={3} />
            </span>
          </a>
        </div>

        <div className="text-pink-400 opacity-80">
          {flowerImgUrl ? (
            <Image
              src={flowerImgUrl}
              alt="flower decoration"
              width={56}
              height={56}
              className="w-14 object-contain"
            />
          ) : (
            <img src="/images/golu/flower-image.png" alt="flower decoration" className="w-14" />
          )}
        </div>
      </div>
    </section>
  )
}