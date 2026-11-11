'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type MediaType = {
  id?: string | number
  url?: string
  alt?: string
  filename?: string
}

type GalleryItem = {
  id?: string | number
  title?: string
  image?: MediaType | string | null
}

type Props = {
  sectionTitle?: string
  sectionSubtitle?: string
  galleryItems?: GalleryItem[]
  [key: string]: any
}

export default function ArrataiGalleryBlockComponent({
  sectionTitle = 'Media Highlights',
  sectionSubtitle = 'A collection of stage highlights, speaker sessions, interactions, and memento-giving moments from the conclave.',
  galleryItems = [],
}: Props) {
  const [scrollDir, setScrollDir] = useState<'left' | 'right'>('right')
  const [x, setX] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState<string>('')

  const carouselRef = useRef<HTMLDivElement>(null)
  const items = Array.isArray(galleryItems) ? galleryItems : []

  const getMediaUrl = (imgField: MediaType | string | null | undefined) => {
    if (!imgField) return ''
    if (typeof imgField === 'object' && imgField !== null && 'url' in imgField) {
      return (imgField as MediaType).url || ''
    }
    if (typeof imgField === 'string') {
      return imgField
    }
    return ''
  }

  const openModal = (imgUrl: string) => {
    if (!imgUrl) return
    setModalImage(imgUrl)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalImage('')
  }

  const slide = (direction: 'left' | 'right') => {
    setScrollDir(direction)
    const scrollAmount = 340
    if (direction === 'left') {
      setX((prev) => Math.min(prev + scrollAmount, 0))
    } else {
      const maxScroll = -(
        items.length * 340 -
        (typeof window !== 'undefined' ? window.innerWidth : 1200)
      )
      setX((prev) => Math.max(prev - scrollAmount, maxScroll < 0 ? maxScroll : -500))
    }
  }

  return (
    <div className="EventsCalendarMainSection mb-10">
      <div
        className={`EventsCalenderBackground ${
          scrollDir === 'right' ? 'Utilitiesscroll-right' : 'Utilitiesscroll-left'
        }`}
      >
        <p>Gallery &nbsp; Gallery &nbsp; Gallery &nbsp;</p>
        <p>Gallery &nbsp; Gallery &nbsp; Gallery &nbsp;</p>
      </div>

      {/* Title */}
      <div className="container max-w-7xl mx-auto px-4 flex flex-col items-center justify-center text-center EventsCalendarTitleMain">
        <h2>{sectionTitle}</h2>
        <p>{sectionSubtitle}</p>
      </div>

      <div className="overflow-hidden py-17 cardMobileSection">
        <div className="relative">
          <div className="absolute top-0 left-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>

          <motion.div
            ref={carouselRef}
            className="flex gap-10 cursor-grab active:cursor-grabbing cardsMobileSection"
            drag="x"
            dragConstraints={{
              right: 0,
              left: -(
                items.length * 340 -
                (typeof window !== 'undefined' ? window.innerWidth : 1200)
              ),
            }}
            animate={{ x }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {items.map((card, index) => {
              const imageUrl = getMediaUrl(card.image)

              return (
                <div
                  key={card.id || index}
                  className="EventsCalendarCardSection min-w-[300px] h-[350px] bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer"
                  onClick={() => openModal(imageUrl)}
                >
                  {imageUrl ? (
                    <Image
                      src={imageUrl}
                      alt={card.title || 'Gallery'}
                      width={300}
                      height={350}
                      className="w-full h-[350px] object-cover rounded-t-md"
                    />
                  ) : (
                    <div className="w-full h-[350px] bg-gray-100 flex items-center justify-center text-gray-400 text-xs">
                      No Image
                    </div>
                  )}
                </div>
              )
            })}
          </motion.div>

          <div className="EventsCalenderButtons flex justify-center mt-6">
            <button
              onClick={() => slide('left')}
              className="EventsCalenderLeftButton rounded mr-2 hover:bg-gray-300 transition"
              aria-label="Slide Left"
            ></button>
            <button
              onClick={() => slide('right')}
              className="EventsCalenderRightButton rounded hover:bg-gray-300 transition"
              aria-label="Slide Right"
            ></button>
          </div>
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 z-[9999]"
            onClick={closeModal}
          >
            <div className="relative max-h-[90%] max-w-[90%] flex items-center justify-center">
              {modalImage && (
                <img
                  src={modalImage}
                  alt="Full view"
                  className="max-h-[85vh] max-w-[85vw] object-contain rounded-lg shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              )}
              <button
                className="absolute -top-10 right-0 text-white text-3xl font-bold bg-black/50 px-3 py-1 rounded-full hover:bg-black transition"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
