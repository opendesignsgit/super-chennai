/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

export interface AboutTrendingProps {
  badgeText?: string
  heading?: string
  paragraphs?: { text: string }[]
  quote?: string
  cta?: {
    label?: string
    url?: string
  }
  imageGroup?: {
    image?: any // Payload Media Object or ID
    caption?: string
    imageLink?: string
  }
}

export const AboutTrendingComponent: React.FC<AboutTrendingProps> = (props) => {
  const { badgeText, heading, paragraphs = [], quote, cta, imageGroup } = props

  // Get image URL from Payload media object
  const imageUrl =
    typeof imageGroup?.image === 'object' && imageGroup?.image?.url
      ? imageGroup.image.url
      : typeof imageGroup?.image === 'string'
        ? imageGroup.image
        : null

  const imageAlt =
    typeof imageGroup?.image === 'object' && imageGroup?.image?.alt
      ? imageGroup.image.alt
      : heading || ''

  const ImageWrapper = imageGroup?.imageLink ? Link : 'div'

  return (
    <section className="bg-stone-50 border border-stone-200/70 rounded-3xl p-6 sm:p-10 lg:p-14 shadow-sm relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#A34493]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        {/* Left Column - Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {badgeText && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A34493]/10 border border-[#A34493]/20 text-[#8B3C82] text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A34493]" />
              {badgeText}
            </div>
          )}

          {heading && (
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-normal tracking-wide text-stone-900 font-['New_Amsterdam'] uppercase leading-tight mb-2">
              {heading}
            </h1>
          )}

          {heading && <div className="w-16 h-1 bg-[#A34493] rounded-full mb-6" />}

          {/* Paragraphs */}
          {paragraphs.length > 0 && (
            <div className="space-y-4 text-stone-600 text-base sm:text-lg leading-relaxed font-normal">
              {paragraphs.map((item, index) => (
                <p key={index}>{item.text}</p>
              ))}
            </div>
          )}

          {/* Highlight Quote */}
          {quote && (
            <blockquote className="my-6 pl-4 border-l-2 border-[#A34493] text-stone-900 font-medium italic text-lg sm:text-xl">
              {quote}
            </blockquote>
          )}

          {/* CTA Button */}
          {cta?.label && cta?.url && (
            <Link
              href={cta.url}
              className="mt-2 inline-flex items-center justify-center gap-3 bg-[#A34493] hover:bg-[#8B3C82] text-white px-8 py-4 rounded-full font-medium tracking-wide transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 group"
            >
              <span>{cta.label}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          )}
        </div>

        {/* Right Column - Image */}
        {imageUrl && (
          <div className="lg:col-span-5 w-full h-[360px] sm:h-[460px] lg:h-[500px]">
            <ImageWrapper
              href={imageGroup?.imageLink || '#'}
              className="relative block w-full h-full rounded-2xl overflow-hidden shadow-md border border-stone-200 group"
            >
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {imageGroup?.caption && (
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-white/80 backdrop-blur-md rounded-xl border border-white/50 text-stone-800 text-xs sm:text-sm font-medium">
                  {imageGroup.caption}
                </div>
              )}
            </ImageWrapper>
          </div>
        )}
      </div>
    </section>
  )
}
