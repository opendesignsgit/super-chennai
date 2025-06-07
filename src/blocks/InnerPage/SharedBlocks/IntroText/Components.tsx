'use client'

import React, { useRef, useState } from 'react'
import dotedImage from '@/assets/images/doted.png'
import '../css/style.css'
import './style.css'

type IntroTextProps = {
  title?: string
  description?: string
  marqueeText?: string
  showMarquee?: boolean
  backgroundType?: 'none' | 'background'
}

export default function IntroText({
  title,
  description,
  marqueeText,
  backgroundType = 'none',
  showMarquee = true,
}: IntroTextProps) {
  const [scrollDir, setScrollDir] = useState('left')
  const bgTextRef = useRef(null)
  const bgImageUrl = backgroundType === 'background' ? dotedImage.src : undefined

  return (
    <section
      className="visitIntroParaSection detailIntro"
      style={{ backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : undefined }}
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div
          className={`CostOflivingBackground ${
            scrollDir === 'right' ? 'scroll-rightCostofLiving' : 'scroll-leftCostofLiving'
          }`}
          ref={bgTextRef}
        >
          {showMarquee && marqueeText && <p>{marqueeText.repeat(3)}</p>}
        </div>

        <div className="workIntro">
          {title && <h2>{title}</h2>}
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br/>') }} />
          )}
        </div>
      </div>
    </section>
  )
}
