/* eslint-disable @next/next/no-img-element */
'use client'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import './style.css'

interface ImageData {
  url: string
  thumbnailURL?: string
  filename: string
}

interface Card {
  image: ImageData
  title: string
  description: string
  url?: string
  page?: {
    slug?: string
  }
}

interface ContentZoneCarouselBlockProps {
  heading: string
  subheading: string
  description: string
  cards: Card[]
}

export const ContentZoneCarousel = ({
  heading,
  subheading,
  description,
  cards,
}: ContentZoneCarouselBlockProps) => {
  const carouselRef = useRef(null)
  const [x, setX] = useState(0)
  const [cardWidth, setCardWidth] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768 ? window.innerWidth : 320,
  )

  const maxX = -(cards.length - 1) * cardWidth

  const slide = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setX((prev) => Math.min(prev + cardWidth, 0))
    } else {
      setX((prev) => Math.max(prev - cardWidth, maxX))
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768
      const newWidth = isMobile ? window.innerWidth : 320
      setCardWidth(newWidth)
      setX(0)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="chillZoneMainContainer">
      <div className="carousel-section-container">
        <div className="chillZonecarousel-static-content">
          <h2>{heading}</h2>
          <h3>{subheading}</h3>
          <p>{description}</p>
          <div className="chillZonecarousel-buttons DesktopButtons">
            <button className="chilloutZoneButtonsleft" onClick={() => slide('left')} />
            <button className="chilloutZoneButtonsRight" onClick={() => slide('right')} />
          </div>
        </div>

        <div className="chillZonecarousel-container">
          <motion.div
            ref={carouselRef}
            className="carousel-track"
            drag="x"
            dragConstraints={{ left: maxX, right: 0 }}
            animate={{ x }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {cards.map((card, idx) => {
              const link = card.page?.slug ? `/visits/${card.page.slug}` : card.url || null

              const content = (
                <>
                  <img
                    className="chillZoneImage"
                    src={card.image?.url || card.image?.thumbnailURL || '/fallback-image.jpg'}
                    alt={card.title}
                  />
                  <div className="chillzoneContentSection">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </>
              )

              return (
                <motion.div
                  className="chillZoneImageCard cursor-pointer"
                  key={idx}
                  style={{ width: `${cardWidth}px` }}
                >
                  {link ? (
                    link.startsWith('http') ? (
                      <a href={link} target="_blank" rel="noopener noreferrer">
                        {content}
                      </a>
                    ) : (
                      <Link href={link}>{content}</Link>
                    )
                  ) : (
                    content
                  )}
                </motion.div>
              )
            })}
          </motion.div>

          <div className="chillZonecarousel-buttons">
            <button className="chilloutZoneButtonsleft" onClick={() => slide('left')} />
            <button className="chilloutZoneButtonsRight" onClick={() => slide('right')} />
          </div>
        </div>
      </div>
    </div>
  )
}
