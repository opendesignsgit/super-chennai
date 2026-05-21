/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useRef, useState } from 'react'

type Props = {
  title?: string
  description?: string

  IPLimage?: {
    url?: string
  }

  sliderItems?: any[]
  pointsTable?: any[]
}

export default function CricketScoreBlockComponent({
  title,
  description,
  IPLimage,
  sliderItems = [],
  pointsTable = [],
}: Props) {
  const [scrollDir, setScrollDir] = useState('left')
  const [currentIndex, setCurrentIndex] = useState(0)

  const lastScrollY = useRef(0)

  const visibleCount = 3
  const defaultWidth = 100
  const activeWidth = 450
  const margin = 10

  const maxIndex = Math.max(sliderItems.length - visibleCount, 0)

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
      setCurrentIndex((prev) => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1)
    }
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

  return (
    <div className="tredingMainContainer">
      {/* HEADER */}
      <div className="tredingChennaiRow">
        <div
          className={`TrendingTextBackground ${
            scrollDir === 'right' ? 'Trendingscroll-right' : 'Trendingscroll-left'
          }`}
        >
          <p>{title}</p>
        </div>
      </div>

      {/* MAIN SECTION */}
      <section className="TrendCheniSec">
        <div className="container max-w-7xl mx-auto flex mainContainerFlexTrending">
          {/* LEFT */}
          <div className="trendccol trendcLeft">
            <img
              className="iplimageee"
              src={IPLimage?.url || '/images/ipl/ipl-logo.png'}
              alt="IPL"
            />

            <p className="trendingChennaiText">{description}</p>
          </div>

          {/* RIGHT */}
          <div className="trendccol trendcRight">
            <div className="relative">
              <div
                className="sliders-container h-[60vh] TrendingChennaiSliderContainer"
                style={{
                  width: '100%',
                  overflow: 'hidden',
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
                  {sliderItems.map((item, index) => {
                    const isActive = index === currentIndex

                    return (
                      <div
                        key={item.id || index}
                        className={`trendingChennaiCard panes ${isActive ? 'active' : ''}`}
                        style={{
                          flex: '0 0 auto',
                          width: isActive ? activeWidth : defaultWidth,
                          height: isActive ? '60vh' : '50vh',
                          margin: '0 5px',
                          transition: 'all 0.9s ease',
                          overflow: 'hidden',
                        }}
                      >
                        <a href={`/CricketScores/${item.slug || ''}`}>
                          <div className="relative h-full">
                            <img
                              src={item?.cricketScore?.IPLimage?.url || '/images/placeholder.png'}
                              alt={item?.title}
                              className="w-full h-full object-cover"
                            />

                            {isActive && (
                              <div className="hbintCont absolute bottom-0 left-0 w-full h-full flex items-end">
                                <div className="hbintContin">
                                  <h3>{item?.cricketScore?.title || item?.title}</h3>

                                  <p>{item?.cricketScore?.description}</p>
                                </div>
                              </div>
                            )}
                          </div>
                        </a>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* ARROWS */}
              <div className="arrows absolute left-[60%] bottom-[4%] flex buttonsTredingSections">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="sldArrow trendingChennaiPrev"
                />

                <button
                  onClick={handleNext}
                  disabled={currentIndex === maxIndex}
                  className="sldArrow trendingChennaiNext"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POINTS TABLE */}
      <section className="container max-w-5xl mx-auto pointsTableSection mt-10 p-6">
        <div className="bg-white rounded-xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#19398a] text-white">
                <tr>
                  <th className="px-4 py-3 text-left">Team</th>
                  <th className="px-3 py-3 text-center">P</th>
                  <th className="px-3 py-3 text-center">W</th>
                  <th className="px-3 py-3 text-center">L</th>
                  <th className="px-3 py-3 text-center">NR</th>
                  <th className="px-3 py-3 text-center">NRR</th>
                  <th className="px-4 py-3 text-right">Pts</th>
                </tr>
              </thead>

              <tbody>
                {pointsTable.map((team, index) => {
                  const position = index + 1

                  return (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <span>{position}</span>

                          <img
                            src={team?.teamLogo?.url || '/images/placeholder.png'}
                            alt={team?.teamName}
                            className="w-7 h-7 object-contain"
                          />

                          <span>{team?.teamName}</span>
                        </div>
                      </td>

                      <td className="text-center">{team?.played}</td>

                      <td className="text-center">{team?.won}</td>

                      <td className="text-center">{team?.loss}</td>

                      <td className="text-center">{team?.noResult}</td>

                      <td className="text-center">{team?.netRunRate}</td>

                      <td className="text-center font-bold">{team?.points}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  )
}
