'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'

type MediaType = {
  id?: string | number
  url?: string
  alt?: string
  filename?: string
}

type Props = {
  titlePrimary?: string
  titleHighlight?: string
  subtitle?: string
  buttonLabel?: string
  buttonUrl?: string
  backgroundImage?: MediaType | number | string | null
}

export default function GoluHeroBannerBlockComponent({
  titlePrimary = '.',
  titleHighlight = '.',
  subtitle = '.',
  buttonLabel = '',
  buttonUrl = '#register',
  backgroundImage,
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

  const bgImgUrl = getMediaUrl(backgroundImage)

  const sectionStyle = bgImgUrl
    ? { backgroundImage: `url(${bgImgUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {}

  return (
    <section
      style={sectionStyle}
      className="max-w-7xl mx-auto my-8 relative overflow-hidden rounded-3xl shadow-xl font-sans backgoungoloimage text-white"
    >
      <div className="relative z-10 py-10 px-6 md:px-12 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-4xl font-black text-white tracking-tight leading-none uppercase">
          {titlePrimary}
        </h2>
        <h2 className="text-2xl md:text-4xl font-black text-amber-400 tracking-tight leading-none uppercase mt-1">
          {titleHighlight}
        </h2>

        <p className="text-xs md:text-sm font-bold text-gray-200 uppercase mt-3 mb-6">{subtitle}</p>

        <a
          href={buttonUrl}
          className="cursor-pointer flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-300 text-indigo-950 font-black text-sm px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          <span>{buttonLabel}</span>
          <span className="bg-indigo-950 text-amber-400 rounded-full p-1 flex items-center justify-center">
            <ArrowRight size={16} strokeWidth={3} />
          </span>
        </a>
      </div>
    </section>
  )
}
