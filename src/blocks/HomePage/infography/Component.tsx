/* eslint-disable @next/next/no-img-element */
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Media } from 'src/payload-types'
import DelightImage from '@/assets/images/DeliciousFood.png'
import './style.css'

export default function InfographySection({ heading, headingSpan, description, foodItems }: Props) {
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

  const getLink = (item: FoodItem) => {
    if (item.customLink) return item.customLink

    const basePath = item.page?.slug ? `/visits/${item.page.slug}` : ''
    const anchor = item.foodSectionTitle ? `#${item.foodSectionTitle.replace(/\s+/g, '')}` : ''

    return basePath + anchor
  }

  return (
    <div className="DiverseDelightsSectionContainer">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="DiverseDelightsTextDiv">
          <h3 className="DiverseDelightsText">{heading}</h3>
          <img src={DelightImage.src} alt="Delight" />
          <h3 className="DiverseDelightsText">{headingSpan}</h3>
        </div>

        <div className="paragarphTextDiverseFood">
          <p>{description}</p>
        </div>

        {isMobile ? (
          <div className="accordionContainer">
            {foodItems.map((item, index) => {
              const isOpen = activeAccordionIndex === index
              const link = getLink(item)
              return (
                <div key={index} className={`accordionItem ${isOpen ? 'activeAccordion' : ''}`}>
                  <div className="accordionTitle" onClick={() => toggleAccordion(index)}>
                    {link ? (
                      <Link href={link}>
                        <h4>{item.title}</h4>
                      </Link>
                    ) : (
                      <h4>{item.title}</h4>
                    )}
                    <span className="accordionIcon">{isOpen ? '−' : '+'}</span>
                  </div>
                  <div
                    className={`accordionContent ${isOpen ? 'open' : ''}`}
                    style={{ maxHeight: isOpen ? '500px' : '0px' }}
                  >
                    <div className="accordionInnerContent">
                      <p>{item.description}</p>
                      <img src={(item.image as Media)?.url || ''} alt={item.title} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="FoodSectionDesignContainer">
            <div className="foodSectionFirst">
              {foodItems.slice(0, 5).map((item, index) => {
                const link = getLink(item)
                return (
                  <div
                    key={index}
                    className={`foodSectionConatiner ${activeIndex === index ? 'activeDiverseSection' : ''}`}
                    onMouseEnter={() => handleHover((item.image as Media)?.url || '', index)}
                  >
                    {link ? (
                      <Link href={link} className="foodItemLink">
                        <h4>{item.title}</h4>
                      </Link>
                    ) : (
                      <h4>{item.title}</h4>
                    )}
                    <p>{item.description}</p>
                  </div>
                )
              })}
            </div>

            <div className="foodSectionSecond">
              <img
                className={`dishImage ${fade ? 'fade-out' : ''}`}
                src={activeImage}
                alt="Active Dish"
              />
            </div>

            <div className="foodSectionThird">
              {foodItems.slice(5, 10).map((item, index) => {
                const actualIndex = index + 5
                const link = getLink(item)
                return (
                  <div
                    key={actualIndex}
                    className={`foodSectionConatiner ${activeIndex === actualIndex ? 'activeDiverseSection' : ''}`}
                    onMouseEnter={() => handleHover((item.image as Media)?.url || '', actualIndex)}
                  >
                    {link ? (
                      <Link href={link} className="foodItemLink">
                        <h4>{item.title}ssssss</h4>
                      </Link>
                    ) : (
                      <h4>{item.title}</h4>
                    )}
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
