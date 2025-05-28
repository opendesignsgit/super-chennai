


'use client'

import React, { useEffect, useRef, useState } from 'react'
import './style.css'

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
}

export default function LiveIntroTextSection({
  heading,
  image,
  paraZeroLiveSection,
  paraoneLiveSection,
  paraTwoLiveSection,
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
          <div
            className={`LiveTextBackground ${
              scrollDir === 'right' ? 'scroll-right' : 'scroll-left'
            }`}
            ref={bgTextRef}
          >
            <p>
              Living in &nbsp; &nbsp; Living in <br /> Chennai &nbsp; &nbsp; Chennai
            </p>
          </div>
          <div className="LiveRow">
            <div className="LiveMainContent">
              <h3>{heading}</h3>
              <p className="paraZeroLiveSection">{paraZeroLiveSection}</p>
              <p className="paraoneLiveSection">{paraoneLiveSection}</p>
              <p className="paraTwoLiveSection">{paraTwoLiveSection}</p>
            </div>
            <img src={image.url} alt={image.alt || 'Living in Chennai Banner'} />
          </div>
        </div>
      </div>
    </div>
  )
}


