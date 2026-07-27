'use client'

import React, { useEffect, useRef, useState } from 'react'

type PayloadMedia = {
  id: string
  url: string
  alt?: string
}

type ConclaveParagraph = {
  id?: string
  text: string
}

type ConclaveAboutBlockProps = {
  backgroundTickerText?: string
  image: PayloadMedia | string
  title: string
  paragraphs: ConclaveParagraph[]
}

export default function ConclaveAboutComponent({
  backgroundTickerText = 'CONCLAVE -',
  image,
  title,
  paragraphs,
}: ConclaveAboutBlockProps) {
  const bgTextRef = useRef<HTMLDivElement>(null)
  const [scrollDir, setScrollDir] = useState<'left' | 'right'>('left')
  const lastScrollY = useRef(0)

  // Client scroll listener optimization track
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current) {
        setScrollDir('left')
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDir('right')
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!paragraphs || paragraphs.length === 0) return null

  const imageUrl = typeof image === 'object' ? image.url : image
  const imageAlt = typeof image === 'object' ? image.alt || title : 'Conclave image description'

  // Repeating the background ticker string to match the original static layout feel
  const repeatedTicker = Array(4).fill(backgroundTickerText).join(' \u00A0 ')

  // Standard utility array mapping for paragraph classes if styling variations apply
  const paragraphClasses = [
    'paraZeroVolunteerSection',
    'paraoneVolunteerSection',
    'paraTwoVolunteerSection',
  ]

  return (
    <section className="accaodomationBannerSection carquizbanner relative overflow-hidden mb-20 articlesmainpagesections">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Dynamic Running / Ticker Text Overlay */}
        <div
          className={`VolunteeerTextBackground ${
            scrollDir === 'right' ? 'scroll-right' : 'scroll-left'
          }`}
          ref={bgTextRef}
        >
          <p>{repeatedTicker}</p>
        </div>

        <div className="volunteerRow">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-[150px] h-[500px] object-cover rounded-lg"
            />
          )}

          <div className="volunteeerMainContent">
            <h2 className="hidden">{title}</h2>
            <h3>{title}</h3>

            {/* Content Loop mapping correctly to your specific index-based class variables */}
            {paragraphs.map((item, index) => {
              const currentClass = paragraphClasses[index] || 'paraTwoVolunteerSection'
              return (
                <p
                  key={item.id || index}
                  className={`${currentClass} [&>strong]:font-bold [&>b]:font-bold`}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
