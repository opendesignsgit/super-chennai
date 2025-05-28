'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'
import './style.css'
import DelightImage from '../../../assets/images/DeliciousFood.png'

export default function InfographySection({ heading, description, foodItems }: Props) {
  const [activeImage, setActiveImage] = useState<string>(
    (foodItems?.[0]?.image as Media)?.url || '',
  )
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [activeAccordionIndex, setActiveAccordionIndex] = useState<number | null>(null)
  const [fade, setFade] = useState(false)
  const [scrollDir, setScrollDir] = useState<'left' | 'right'>('left')
  const lastScrollY = useRef(0)
  const bgTextRef = useRef<HTMLDivElement | null>(null)

  const handleHover = (newImage: string, index: number) => {
    if (newImage === activeImage && index === activeIndex) return
    setFade(true)
    setActiveIndex(index)
    setTimeout(() => {
      setActiveImage(newImage)
      setFade(false)
    }, 300)
  }

  const toggleAccordion = (index: number) => {
    setActiveAccordionIndex(activeAccordionIndex === index ? null : index)
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollDir(currentScrollY > lastScrollY.current ? 'left' : 'right')
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <div className="DiverseDelightsSectionContainer">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="DiverseDelightsTextDiv">
          <h3 className="DiverseDelightsText">{heading}</h3>
          <Image src={DelightImage} alt="Delight" />

          <h3 className="DiverseDelightsText">Delights</h3>
        </div>

        <div className="paragarphTextDiverseFood">
          <p>{description}</p>
        </div>

        {isMobile ? (
          <div className="accordionContainer">
            {foodItems.map((item, index) => {
              const isOpen = activeAccordionIndex === index
              return (
                <div key={index} className={`accordionItem ${isOpen ? 'activeAccordion' : ''}`}>
                  <div className="accordionTitle" onClick={() => toggleAccordion(index)}>
                    <h4>{item.title}</h4>
                    <span className="accordionIcon">{isOpen ? '−' : '+'}</span>
                  </div>
                  <div
                    className={`accordionContent ${isOpen ? 'open' : ''}`}
                    style={{ maxHeight: isOpen ? '500px' : '0px' }}
                  >
                    <div className="accordionInnerContent">
                      <p>{item.description}</p>
                      <Image
                        src={(item.image as Media).url || ''}
                        alt={item.title}
                        width={400}
                        height={300}
                      />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="FoodSectionDesignContainer">
            <div className="foodSectionFirst">
              {foodItems.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  className={`foodSectionConatiner ${
                    activeIndex === index ? 'activeDiverseSection' : ''
                  }`}
                  onMouseEnter={() => handleHover((item.image as Media)?.url || '', index)}
                >
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <div className="foodSectionSecond">
              <Image
                className={`dishImage ${fade ? 'fade-out' : ''}`}
                src={activeImage}
                alt="Active Dish"
                width={500}
                height={400}
              />
            </div>

            <div className="foodSectionThird">
              {foodItems.slice(5, 10).map((item, index) => {
                const actualIndex = index + 5
                return (
                  <div
                    key={actualIndex}
                    className={`foodSectionConatiner ${
                      activeIndex === actualIndex ? 'activeDiverseSection' : ''
                    }`}
                    onMouseEnter={() => handleHover((item.image as Media)?.url || '', actualIndex)}
                  >
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>

      <div
        className={`DelightPageText ${
          scrollDir === 'right' ? 'scroll-right' : 'DelightPageTextscroll-left'
        }`}
        ref={bgTextRef}
      >
        <p>Foodie &nbsp; Foodie &nbsp; Foodie &nbsp; Foodie</p>
      </div>
    </div>
  )
}
