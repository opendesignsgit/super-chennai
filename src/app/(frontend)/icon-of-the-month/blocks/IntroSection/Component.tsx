'use client'

import React, { useRef, useState } from 'react'
import dotedImage from '@/assets/images/doted.png'

type IntroTextProps = {
  title?: string
  description?: string
  marqueeText?: string
  showMarquee?: boolean
  backgroundType?: 'none' | 'background'
}

export default function IntroTextLisingPage({
  title,
  description,
  marqueeText,
  backgroundType = 'none',
  showMarquee = true,
}: IntroTextProps) {
  const [scrollDir] = useState('left')
  const bgTextRef = useRef(null)
  const bgImageUrl = backgroundType === 'background' ? dotedImage.src : undefined

  return (
    <div className="mt-20">
      <section
        className="visitIntroParaSection detailIntro py-20"
        style={{
          backgroundImage: bgImageUrl ? `url(${bgImageUrl})` : undefined,
          paddingBottom: '0',
        }}
      >
        <div className="container max-w-7xl mx-auto px-4 ">
          {showMarquee && marqueeText && (
            <div
              className={`CostOflivingBackground ${
                scrollDir === 'right' ? 'scroll-rightCostofLiving' : 'scroll-leftCostofLiving'
              }`}
              ref={bgTextRef}
            >
              <p>{marqueeText.repeat(3)}</p>
            </div>
          )}

          <div className="workIntro ">
            {title && <h3>{title}</h3>}

            {description && (
              <div
                className="introDescriptionLines"
                dangerouslySetInnerHTML={{
                  __html: description
                    .split('\n')
                    .filter((line) => line.trim() !== '')
                    .map((line) => `<p>${line.trim()}</p>`)
                    .join(''),
                }}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
