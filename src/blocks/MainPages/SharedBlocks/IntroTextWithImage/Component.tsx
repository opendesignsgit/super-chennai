/* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useRef, useState } from 'react'
type LivingInChennaiBannerProps = {
  heading?: string
  image?: {
    url?: string
    alt?: string
    filename?: string
  }
  paraZeroLiveSection?: string
  paraoneLiveSection?: string
  paraTwoLiveSection?: string
  imagePosition?: 'left' | 'right'
  marqueeText?: string
  marqueeTextSize?: 'sm' | 'lg'
  showMarquee?: boolean
}

export default function LiveIntroTextSection({
  heading,
  image,
  paraZeroLiveSection,
  paraoneLiveSection,
  paraTwoLiveSection,
  imagePosition = 'right',
  marqueeTextSize,
  showMarquee = true,
  marqueeText,
}: LivingInChennaiBannerProps) {
  const [scrollDir, setScrollDir] = useState<'left' | 'right'>('right')
  const lastScrollY = useRef(0)
  const bgTextRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY.current) {
        setScrollDir('left')
      } else {
        setScrollDir('right')
      }
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getTextSizeClass = (size?: 'sm' | 'lg'): string => {
    if (size === 'lg') return 'LiveTextBackground scroll-right '
    return 'VolunteeerTextBackground scroll-right'
  }

  if (!heading || !image?.url) {
    return (
      <div className="LivingInChennaiBanner">
        <div className="LiveParaSection container max-w-7xl mx-auto px-4">
          <p style={{ color: 'red' }}>Error: Missing banner heading or image data.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="DootedBannerSectionLive">
      <div className="LivingInChennaiBanner">
        <div className="LiveParaSection container max-w-7xl mx-auto px-4">
          {showMarquee && marqueeText && (
            <div className={getTextSizeClass(marqueeTextSize)} ref={bgTextRef}>
              <p>
                {marqueeTextSize === 'lg' && marqueeText
                  ? marqueeText.split(' ').map((word, index, arr) =>
                      index === Math.floor(arr.length / 2) ? (
                        <React.Fragment key={index}>
                          <br />
                          {word + ' '}
                        </React.Fragment>
                      ) : (
                        word + ' '
                      ),
                    )
                  : marqueeText}
              </p>
            </div>
          )}
          <div className={`LiveRow ${imagePosition === 'left' ? 'image-left' : 'image-right'}`}>
            {imagePosition === 'left' && (
              <img src={image.url} alt={image.alt || 'Living in Chennai Banner'} />
            )}
            <div className="LiveMainContent">
              <h3>{heading}</h3>
              <p className="paraZeroLiveSection">{paraZeroLiveSection}</p>
              <p className="paraoneLiveSection">{paraoneLiveSection}</p>
              <p className="paraTwoLiveSection">{paraTwoLiveSection}</p>
            </div>
            {imagePosition === 'right' && (
              <img src={image.url} alt={image.alt || 'Living in Chennai Banner'} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
