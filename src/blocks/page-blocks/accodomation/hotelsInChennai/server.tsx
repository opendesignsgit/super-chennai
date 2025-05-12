'use client'
import React, { useRef, useEffect, useState } from 'react'
import './style.css'


type Section = {
  title: string
  description: string
  image: { url: string }
  linkUrl?: string
  linkText?: string
}

type Props = {
  sections: Section[]
}

const HotelsInChennaiSection: React.FC<Props> = ({ sections }) => {
  const bgTextRef = useRef<HTMLDivElement>(null)
  const [scrollDir, setScrollDir] = useState<'left' | 'right'>('left')

  useEffect(() => {
    let lastScrollX = window.scrollX
    const handleScroll = () => {
      const currentX = window.scrollX
      setScrollDir(currentX > lastScrollX ? 'right' : 'left')
      lastScrollX = currentX
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="AccodomationPageBecameVolunteerBg">
      <div
        className={`AccodomationTextBackground ${
          scrollDir === 'right' ? 'scroll-rightAccomodation' : 'scroll-leftAccomodation'
        }`}
        ref={bgTextRef}
      >
        <p>Visit &nbsp; Chennai &nbsp; Visit &nbsp; Chennai</p>
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        {sections.map((section, index) => (
          <div className="AccodoSectionFLex" key={index}>
            {index % 2 === 0 ? (
              <>
                <img src={section.image?.url} alt={section.title} />
                <div className="AccodContentsSection">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                  <div className="AccomoddationPage">
                    <a href={section.linkUrl}>{section.linkText}</a>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="AccodContentsSection1">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                  <div className="AccomoddationPage1">
                    <a href={section.linkUrl}>{section.linkText}</a>
                  </div>
                </div>
                <img src={section.image?.url} alt={section.title} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HotelsInChennaiSection
