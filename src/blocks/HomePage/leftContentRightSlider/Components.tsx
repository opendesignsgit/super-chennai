'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './style.css'

type TrendingItem = {
  name: string
  subtitle?: string
  para?: string
  image: {
    url: string
    alt?: string
  }
  page?: { slug: string }
  customLink?: string
}

type Props = {
  heading: string
  description: string
  link?: string
  items: TrendingItem[]
}

export default function SpotlightGallerySection({ heading, description, link, items }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrollDir, setScrollDir] = useState<'left' | 'right'>('left')
  const lastScrollY = useRef(0)
  const bgTextRef = useRef<HTMLDivElement>(null)

  const visibleCount = 0
  const defaultWidth = 100
  const activeWidth = 450
  const margin = 10
  const totalPanes = items.length
  const maxIndex = totalPanes - visibleCount

  const getOffsetForIndex = (index: number) => {
    let offset = 0
    for (let i = 0; i < index; i++) {
      const isActive = i === currentIndex
      offset += isActive ? activeWidth + margin : defaultWidth + margin
    }
    return offset
  }

  const offset = getOffsetForIndex(currentIndex)

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : 0))
    }, 6000)

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollDir(currentScrollY > lastScrollY.current ? 'left' : 'right')
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearInterval(intervalId)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [maxIndex])

  return (
    <div className="tredingMainContainer">
      <div className="tredingChennaiRow">
        <div
          className={`TrendingTextBackground ${
            scrollDir === 'right' ? 'Trendingscroll-right' : 'Trendingscroll-left'
          }`}
          ref={bgTextRef}
        >
          <p>Trending &nbsp; Chennai &nbsp; Trending &nbsp; Chennai</p>
        </div>
      </div>

      <section className="TrendCheniSec">
        <div className="container max-w-7xl mx-auto flex mainContainerFlexTrending">
          <div className="trendccol trendcLeft">
            <h2>{heading}</h2>
            <p className="trendingChennaiText">{description}</p>
            {link && (
              <p className="trendingChennaiLink">
                <Link href={link}>Discover Experiences</Link>
              </p>
            )}
          </div>

          <div className="trendccol trendcRight">
            <div className="relative w-full">
              <div
                className="sliders-container h-[60vh]"
                style={{
                  width: '100%',
                  overflow: 'hidden',
                  margin: '0 auto',
                  boxSizing: 'border-box',
                }}
              >
                <div
                  className="accordion-track"
                  style={{
                    display: 'flex',
                    transition: 'transform 0.4s ease',
                    transform: `translateX(-${offset}px)`,
                  }}
                >
                  {items.map((item, index) => {
                    const isActive = index === currentIndex
                    const isHidden = index >= items.length - 0

                    const href =
                      item.customLink || (item.page?.slug ? `/visits/${item.page.slug}` : null)

                    const cardContent = (
                      <div
                        className={`panes ${isActive ? 'active' : ''} ${isHidden ? 'hide' : ''}`}
                        style={{
                          flex: '0 0 auto',
                          width: isActive ? activeWidth : defaultWidth,
                          height: isActive ? '60vh' : '50vh',
                          margin: '0 5px',
                          fontWeight: isActive ? 'bold' : 'normal',
                          boxSizing: 'border-box',
                          opacity: isHidden ? 0 : 1,
                          visibility: isHidden ? 'hidden' : 'visible',
                          transition: 'all 0.9s ease',
                        }}
                      >
                        <div className="relative h-full">
                          <div className="hbintimg relative h-full">
                            <Image
                              src={item.image.url}
                              alt={item.image.alt || item.name}
                              fill
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                          <div
                            className="hbintCont absolute bottom-0 left-0 w-full h-full flex items-end"
                            style={{ opacity: isActive ? 1 : 0 }}
                          >
                            <div className="hbintContin">
                              <h3>{item.name}</h3>
                              <h4>{item.subtitle}</h4>
                              <p>{item.para}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )

                    return href ? (
                      <Link href={href} key={index}>
                        {cardContent}
                      </Link>
                    ) : (
                      <div key={index}>{cardContent}</div>
                    )
                  })}
                </div>
              </div>

              <div className="arrows absolute left-[60%] bottom-0 flex">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="sldArrow trendingChennaiPrev"
                  aria-label="Previous"
                ></button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex === maxIndex}
                  className="sldArrow trendingChennaiNext"
                  aria-label="Next"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
