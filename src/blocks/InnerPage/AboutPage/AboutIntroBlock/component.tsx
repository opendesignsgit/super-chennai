'use client'

import React from 'react'

type ParagraphItem = {
  id?: string
  text: string
}

type AboutIntroProps = {
  title?: string
  paragraphs?: ParagraphItem[]
  marqueeText?: string
  scrollDir?: 'left' | 'right'
  bgTextRef?: React.RefObject<HTMLDivElement | null>
}

export default function AboutIntroBlockComponent({
  title = 'About Chennai City',
  paragraphs = [
    {
      text: 'Chennai is India’s healthcare capital, SaaS capital, fintech capital, and automobile capital. Home to 7.5 million people, <br /> it is a 386-year-old city alive with heritage and vibing to the march of the future.',
    },
    {
      text: 'A city where ideas thrive, businesses grow, and communities flourish. This is not just Chennai. <br /> This is Super Chennai.',
    },
  ],
  marqueeText = 'Super Chennai',
  scrollDir = 'left',
  bgTextRef,
}: AboutIntroProps) {
  return (
    <div data-aos="fade-up" data-aos-delay="400">
      <div className="InvestChennaiContainerFlex aboutIntro">
        <div className="InvestChennaiContent">
          <h1>{title}</h1>
          {paragraphs.map((item, index) => (
            <p key={item.id || index} dangerouslySetInnerHTML={{ __html: item.text }} />
          ))}
        </div>

        <div
          className={`InvestTextBackground ${
            scrollDir === 'right' ? 'scroll-rightInvestPage' : 'scroll-leftInvestPage'
          }`}
          ref={bgTextRef}
        >
          <p>
            {marqueeText} &nbsp; {marqueeText} &nbsp; {marqueeText} &nbsp; {marqueeText}
          </p>
        </div>
      </div>
    </div>
  )
}
