'use client'

import React, { useEffect, useRef, useState } from 'react'

type VisitIntroTextProps = {
  marqueeText?: string
  title: string
  highlightedText: string
  description: string
  showInstagramReels?: boolean
}

export const VisitIntroText = ({
  marqueeText,
  title,
  highlightedText,
  description,
  showInstagramReels,
}: VisitIntroTextProps) => {
  const bgTextRef = useRef<HTMLDivElement>(null)
  const [scrollDir, setScrollDir] = useState<'right' | 'left'>('right')

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollDir((prev) => (prev === 'right' ? 'left' : 'right'))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="visitIntroParaSection">
      <div className="container max-w-7xl mx-auto px-4">
        <div
          className={`VolunteeerTextBackground ${
            scrollDir === 'right' ? 'scroll-right' : 'scroll-left'
          }`}
          ref={bgTextRef}
        >
          <p>{marqueeText}</p>
        </div>

        <div className="workIntro">
          <h3>{title}</h3>
          <p>
            <strong>{highlightedText}</strong>
          </p>
          <p>{description}</p>
        </div>
      </div>

      {showInstagramReels}
    </div>
  )
}
