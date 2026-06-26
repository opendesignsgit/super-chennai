'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useRef, useState } from 'react'

type Props = {
  title?: string
  description?: string

  galleryImages?: {
    image?: {
      url?: string
      alt?: string
    }
  }[]
}

const GalleryBlockComponent: React.FC<Props> = ({
  title,
  description,
  galleryImages,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [modalImage, setModalImage] = useState<string | null>(null)

  const [x, setX] = useState(0)

  const carouselRef = useRef<HTMLDivElement>(null)

  const openModal = (image: string) => {
    setModalImage(image)

    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)

    setModalImage(null)
  }

  const slide = (direction: 'left' | 'right') => {
    const cardWidth = 320

    const gap = 24

    const visibleWidth = window.innerWidth

    const totalCardsWidth = (galleryImages?.length || 0) * (cardWidth + gap)

    const maxX = -(totalCardsWidth - visibleWidth + gap)

    setX((prevX) => {
      if (direction === 'left') {
        return Math.min(prevX + (cardWidth + gap), 0)
      }

      return Math.max(prevX - (cardWidth + gap), maxX)
    })
  }

  return (
    <section className="relative overflow-hidden py-20 bg-white">
      {/* BACKGROUND TEXT */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
        <div className="whitespace-nowrap text-[120px] md:text-[180px] font-black text-slate-100 opacity-70 animate-[marquee_25s_linear_infinite]">
          Gallery • Gallery • Gallery • Gallery • Gallery •
        </div>
      </div>

      <div className="relative z-10">
        {/* TITLE */}
        <div className="container max-w-7xl mx-auto px-4 mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-5">
            {title}
          </h2>

          <p className="max-w-3xl mx-auto text-slate-500 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden">
          {/* LEFT FADE */}
          <div className="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />

          {/* RIGHT FADE */}
          <div className="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          <motion.div
            ref={carouselRef}
            className="flex gap-6 px-6 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{
              right: 0,
              left: -(
                (galleryImages?.length || 0) * 340 -
                window.innerWidth
              ),
            }}
            animate={{ x }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 30,
            }}
          >
            {galleryImages?.map((item, index) => {
              const image = item?.image

              if (!image?.url) return null

              return (
                <div
                  key={index}
                  onClick={() => openModal(image.url!)}
                  className="group relative min-w-[320px] h-[420px] overflow-hidden rounded-[32px] bg-slate-100 shadow-xl cursor-pointer"
                >
                  <Image
                    src={image.url}
                    alt={image.alt || 'Gallery'}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* ICON */}
                  <div className="absolute bottom-6 left-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="h-14 w-14 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center border border-white/30">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10l4.553-4.553a2.121 2.121 0 00-3-3L12 7m0 0L7.447 2.447a2.121 2.121 0 00-3 3L9 10m3-3v10"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )
            })}
          </motion.div>

          {/* BUTTONS */}
          <div className="flex items-center justify-center gap-5 mt-12">
            <button
              onClick={() => slide('left')}
              className="h-14 w-14 rounded-full border border-slate-200 bg-white shadow-lg hover:scale-105 transition"
            >
              ←
            </button>

            <button
              onClick={() => slide('right')}
              className="h-14 w-14 rounded-full border border-slate-200 bg-white shadow-lg hover:scale-105 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && modalImage && (
        <div
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/90 p-6"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl w-full h-[90vh]">
            <Image
              src={modalImage}
              alt="Gallery"
              fill
              className="object-contain"
            />

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 h-12 w-12 rounded-full bg-white text-black text-2xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default GalleryBlockComponent