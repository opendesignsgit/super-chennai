'use client'

import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import dotedImage from '@/assets/images/doted.png'

type VisitIntroTextProps = {
  marqueeText?: string
  marqueeTextSize?: 'sm' | 'lg'
  showMarquee?: boolean
  title: string
  highlightedText: string
  description: string
  backgroundType?: 'none' | 'background'
}

const getTextSizeClass = (size: string) => {
  switch (size) {
    case 'sm':
      return 'VolunteeerTextBackground scroll-left'
    case 'lg':
      return 'InvestTextBackground scroll-rightInvestPage'
  }
}

export const PageIntroText = ({
  marqueeText,
  title,
  highlightedText,
  description,
  backgroundType = 'none',
  marqueeTextSize,
  showMarquee = true,
}: VisitIntroTextProps) => {
  const bgTextRef = useRef<HTMLDivElement>(null)
  const [scrollDir, setScrollDir] = useState<'right' | 'left'>('right')

  const bgImageUrl = backgroundType === 'background' ? dotedImage.src : undefined

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollDir((prev) => (prev === 'right' ? 'left' : 'right'))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div
        className="InvestChennaiContainerFlex"
        style={{ backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : undefined }}
      >
        <div className="InvestChennaiContent">
          <h3>{title}</h3>
          <p>
            <strong>{highlightedText}</strong>
          </p>
          <p>{description}</p>
        </div>

        {showMarquee && marqueeText && (
          <div className={getTextSizeClass(marqueeTextSize ?? '')} ref={bgTextRef}>
            <p>{marqueeText}</p>
          </div>
        )}
      </div>
    </div>
  )
}
