'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
// Note: Keep your existing standard import Slider from "react-slick" here if using slick-carousel
import Slider from 'react-slick'

type PayloadMedia = {
  id: string
  url: string
  alt?: string
}

type SpeakerItem = {
  id?: string
  name: string
  designation: string
  image: PayloadMedia | string
  description: string
}

type ConclaveSpeakersBlockProps = {
  sectionHeading?: string
  speakers: SpeakerItem[]
}

export default function ConclaveSpeakersComponent({
  sectionHeading = 'Speakers',
  speakers,
}: ConclaveSpeakersBlockProps) {
  const [selectedCard, setSelectedCard] = useState<SpeakerItem | null>(null)

  if (!speakers || speakers.length === 0) return null

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div className="ExplorePageLeftButton" onClick={onClick} />
  )

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div className="ExplorePageRightButton" onClick={onClick} />
  )

  // Standard react-slick template settings fallback loop integration

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: speakers.length > 4,
    speed: 500,
    slidesToShow: Math.min(4, speakers.length),
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: Math.min(3, speakers.length),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, speakers.length),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className="NewsLetterPage articlesmainpagesections">
      <div className="exploreSldierBg">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="exploreMoreSectionContent">
            <h4>{sectionHeading}</h4>
          </div>

          <div className="exploreSldierSection">
            <Slider {...settings}>
              {speakers.map((card, index) => {
                const imageUrl = typeof card.image === 'object' ? card.image.url : card.image
                const imageAlt =
                  typeof card.image === 'object' ? card.image.alt || card.name : card.name

                return (
                  <div
                    key={card.id || index}
                    className="ExplorePageSliderImage cursor-pointer px-2"
                    onClick={() => setSelectedCard(card)}
                  >
                    <div className="relative rounded-lg overflow-hidden">
                      {imageUrl && (
                        <img
                          src={imageUrl}
                          alt={imageAlt}
                          className="w-full h-[320px] object-cover"
                        />
                      )}

                      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h5 className="text-lg font-semibold leading-tight">{card.name}</h5>
                        <p className="text-sm opacity-90">{card.designation}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>

      {/* ================= POPUP ANIMATION BOUNDARY ================= */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-lg w-full relative p-6"
              initial={{ scale: 0.85, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 40, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedCard(null)}
                className="absolute cursor-pointer bg-[#a44294] text-[#fff] top-2 right-2 h-8 w-8 flex items-center justify-center rounded-full"
              >
                ✕
              </button>

              {(() => {
                const modalImgUrl =
                  typeof selectedCard.image === 'object'
                    ? selectedCard.image.url
                    : selectedCard.image
                const modalImgAlt =
                  typeof selectedCard.image === 'object'
                    ? selectedCard.image.alt || selectedCard.name
                    : selectedCard.name

                return modalImgUrl ? (
                  <img
                    src={modalImgUrl}
                    alt={modalImgAlt}
                    className="w-full h-[260px] object-cover rounded-lg mb-4"
                  />
                ) : null
              })()}

              <h3 className="text-xl font-semibold text-black">{selectedCard.name}</h3>
              <p className="text-sm font-semibold text-gray-600 mb-2">{selectedCard.designation}</p>

              <p className="text-sm text-gray-700 leading-relaxed max-h-[40vh] overflow-y-auto pr-2">
                {selectedCard.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
