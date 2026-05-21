/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useRef, useState } from 'react'
import './style.css'
type TrendingEvent = {
  id: number
  title: string
  slug: string

  trendingChennai?: {
    description?: string

    image?: {
      url?: string
    }
  }
}

type Props = {
  title?: string
  description?: string

  events: TrendingEvent[]
}

export default function TrendingChennaiClient({ title, description, events }: Props) {
  console.log('trending data 1', events)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [scrollDir, setScrollDir] = useState('left')

  const lastScrollY = useRef(0)

  const visibleCount = 3
  const defaultWidth = 100
  const activeWidth = 450
  const margin = 10

  const maxIndex = events.length - visibleCount

  const getOffset = (index: number) => {
    let offset = 0

    for (let i = 0; i < index; i++) {
      const isActive = i === currentIndex

      offset += isActive ? activeWidth + margin : defaultWidth + margin
    }

    return offset
  }

  const offset = getOffset(currentIndex)

  const next = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY

      setScrollDir(y > lastScrollY.current ? 'left' : 'right')

      lastScrollY.current = y
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="tredingMainContainer">
      {/* HEADER TEXT ################################ */}
      <div className="tredingChennaiRow">
        <div
          className={`TrendingTextBackground ${
            scrollDir === 'right' ? 'Trendingscroll-right' : 'Trendingscroll-left'
          }`}
        >
          <p>
            {title || 'Trending Chennai'} {title || 'Trending Chennai'}
          </p>
        </div>
      </div>

      {/* SECTION ################################ */}
      <section className="TrendCheniSec">
        <div className="container mx-auto flex mainContainerFlexTrending">
          {/* LEFT CONTENT ######################## */}
          <div className="trendccol trendcLeft">
            <h2>{title || 'Trending Chennai'}</h2>

            <p className="trendingChennaiText">{description}</p>
          </div>

          {/* RIGHT SLIDER ######################## */}
<div className="trendccol trendcRight relative">
              <div className="overflow-hidden h-[60vh]">
              <div
                className="flex transition-transform duration-500"
                style={{
                  transform: `translateX(-${offset}px)`,
                }}
              >
                {events.map((item, index) => {
                  const isActive = index === currentIndex

                  return (
                    <div
                      key={item.id}
                      style={{
                        flex: '0 0 auto',
                        width: isActive ? activeWidth : defaultWidth,

                        height: isActive ? '60vh' : '50vh',

                        margin: '0 5px',
                        transition: '0.6s ease',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <a href={`/trendingChennai/${item.slug}`}>
                        <img
                          src={item.trendingChennai?.image?.url || '/images/placeholder.png'}
                          className="w-full h-full object-cover"
                          alt={item.title}
                        />

                        {isActive && (
                          <div className="hbintCont absolute bottom-0 left-0 w-full h-full flex items-end">
                            <div className="hbintContin">
                              <h3>{item.title}</h3>

                              <p>{item.trendingChennai?.description}</p>
                            </div>
                          </div>
                        )}
                      </a>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* BUTTONS ######################## */}
            <div className="arrows absolute left-[60%] bottom-[4%] flex buttonsTredingSections">
              <button
                onClick={prev}
                disabled={currentIndex === 0}
                className="sldArrow trendingChennaiPrev"
              ></button>

              <button
                onClick={next}
                disabled={currentIndex === maxIndex}
                className="sldArrow trendingChennaiNext"
              ></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
