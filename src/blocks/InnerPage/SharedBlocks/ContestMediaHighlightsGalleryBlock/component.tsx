'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

type GalleryItem = {
  id?: string
  image?: { url?: string } | string
}

type GalleryProps = {
  sectionTitle?: string
  tickerText?: string
  galleryItems?: GalleryItem[]
}

export default function MediaHighlightsGallerySection(props: GalleryProps) {
  const [scrollDir, setScrollDir] = useState<'left' | 'right'>('right')
  const [x, setX] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('')

  const carouselRef = useRef<HTMLDivElement>(null)

  const rawEvents = props.galleryItems || []
  const mockUpcomingEvents = rawEvents.map((item, idx) => ({
    id: item.id || idx + 1,
    image:
      typeof item.image === 'object' && item.image?.url
        ? item.image.url
        : typeof item.image === 'string'
          ? item.image
          : '/images/bharathi1 (6).JPG',
  }))

  const openModal = (imgSrc: string) => {
    setModalImage(imgSrc)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalImage('')
  }

  const slide = (direction: 'left' | 'right') => {
    setScrollDir(direction)
    const cardWidth = 340
    if (carouselRef.current) {
      const maxScroll = -(mockUpcomingEvents.length * cardWidth - window.innerWidth + 100)
      if (direction === 'right') {
        setX((prev) => Math.max(prev - 340, maxScroll))
      } else {
        setX((prev) => Math.min(prev + 340, 0))
      }
    }
  }

  return (
    <div className="EventsCalendarMainSection mb-10 overflow-hidden">
      <div
        className={`EventsCalenderBackground ${
          scrollDir === 'right' ? 'Utilitiesscroll-right' : 'Utilitiesscroll-left'
        }`}
      >
        <p>{(props.tickerText || 'Gallery') + ' &nbsp; '.repeat(3)}</p>
        <p>{(props.tickerText || 'Gallery') + ' &nbsp; '.repeat(3)}</p>
      </div>

      {/* Title */}
      <div className="container max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center EventsCalendarTitleMain mb-6">
        <h2 className="text-3xl lg:text-4xl font-extrabold">
          {props.sectionTitle || 'Media Highlights'}
        </h2>
      </div>

      <div className="overflow-hidden py-6 cardMobileSection relative">
        <div className="relative">
          <div className="absolute top-0 left-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>

          <motion.div
            ref={carouselRef}
            className="flex gap-10 cursor-grab active:cursor-grabbing cardsMobileSection px-4"
            drag="x"
            dragConstraints={{
              right: 0,
              left: -(
                mockUpcomingEvents.length * 340 -
                (typeof window !== 'undefined' ? window.innerWidth : 1200)
              ),
            }}
            animate={{ x }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {mockUpcomingEvents.map((card) => (
              <div
                key={card.id}
                className="EventsCalendarCardSection min-w-[300px] h-[350px] bg-white rounded-md shadow-md overflow-hidden shrink-0 cursor-pointer"
                onClick={() => openModal(card.image)}
              >
                <img
                  src={card.image}
                  alt="Gallery"
                  className="w-full h-[350px] object-cover rounded-t-md hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </motion.div>

          <div className="EventsCalenderButtons flex justify-center gap-4 mt-6">
            <button
              onClick={() => slide('left')}
              className="EventsCalenderLeftButton px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded font-semibold cursor-pointer"
            >
              Prev
            </button>
            <button
              onClick={() => slide('right')}
              className="EventsCalenderRightButton px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded font-semibold cursor-pointer"
            >
              Next
            </button>
          </div>
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-70"
            onClick={closeModal}
          >
            <img
              src={modalImage}
              alt="Full view"
              className="max-h-[90%] max-w-[90%] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-5 right-5 text-white text-3xl font-bold cursor-pointer"
              onClick={closeModal}
            >
              ×
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
