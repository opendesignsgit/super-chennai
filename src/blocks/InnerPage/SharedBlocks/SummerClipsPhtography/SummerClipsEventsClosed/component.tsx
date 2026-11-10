'use client'

import React from 'react'
import Link from 'next/link'

type EventClosedNoticeProps = {
  badgeText?: string
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
  bgDecorationImage?: { url?: string } | string
}

export default function EventClosedNoticeComponent(props: EventClosedNoticeProps) {
  const getImageUrl = (imgObj: any) => {
    if (!imgObj) return '/images/events/dev-bg.jpg'
    if (typeof imgObj === 'object' && imgObj?.url) return imgObj.url
    if (typeof imgObj === 'string') return imgObj
    return '/images/events/dev-bg.jpg'
  }

  const bgImgUrl = getImageUrl(props.bgDecorationImage)

  return (
    <div className="cmssection NammaStoriesVideoDiv lg:!mt-0 !pt-0 !pb-0 !mb-0">
      <section className="relative py-16 bg-gradient-to-br from-[#f6f0f7] via-[#faf7fb] to-[#f1e6f3] overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="p-10 text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-700 font-semibold text-sm mb-4">
              {props.badgeText || 'Event Closed'}
            </span>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {props.title || 'This Event Has Ended'}
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
              {props.description ||
                'Thank you for your interest! Registration for this event has now closed. Stay tuned for upcoming events and exciting opportunities from SuperChennai.'}
            </p>

            {props.buttonText && props.buttonLink && (
              <div className="mt-8">
                <Link
                  href={props.buttonLink || '/superchennai-contest'}
                  className="inline-flex items-center rounded-xl bg-[#a44294] px-6 py-3 text-white font-semibold hover:bg-[#8f3681] transition shadow-md"
                >
                  {props.buttonText}
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Decorative Background Image */}
        <img
          src={bgImgUrl}
          alt="Background Decoration"
          className="pointer-events-none select-none absolute bottom-0 right-0 w-80 md:w-96 opacity-20 object-contain"
        />
      </section>
    </div>
  )
}
