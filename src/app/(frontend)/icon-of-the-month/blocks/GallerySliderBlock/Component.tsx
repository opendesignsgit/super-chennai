'use client'

import React, { useState } from 'react'
import Slider from 'react-slick'
import { motion, AnimatePresence } from 'framer-motion'

// CSS files setup
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type PayloadMedia = {
  id: string
  url: string
  alt?: string
}

type BulkGallerySliderProps = {
  heading?: string
  images: (PayloadMedia | string)[] // array of uploaded media
}

export default function GallerySliderComponent({
  heading = 'Gallery',
  images,
}: BulkGallerySliderProps) {
  // Pop-up handle panna select aagura dynamic image state structure
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  if (!images || images.length === 0) return null

  // Custom Slider navigation arrows layout
  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  )

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div className="ExplorePageRightButton" onClick={onClick}></div>
  )

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(4, images.length),
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: Math.min(3, images.length) },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: Math.min(2, images.length) },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  // Payload object check helper function
  const getImageUrl = (img: PayloadMedia | string): string => {
    return typeof img === 'object' ? img.url : img
  }

  const getImageAlt = (img: PayloadMedia | string, index: number): string => {
    return typeof img === 'object'
      ? img.alt || `Gallery Image ${index + 1}`
      : `Gallery Image ${index + 1}`
  }

  return (
    <div className="NewsLetterPage">
      {/* Slider Layout Component */}
      <div className="exploreSldierBg">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="exploreMoreSectionContent">
            <h4>{heading}</h4>
          </div>
          <div className="exploreSldierSection">
            <Slider {...settings}>
              {images.map((img, index) => {
                const imgUrl = getImageUrl(img)
                const imgAlt = getImageAlt(img, index)

                return (
                  <div
                    key={typeof img === 'object' ? img.id : index}
                    className="ExplorePageSliderImage cursor-pointer"
                  >
                    <a onClick={() => setSelectedImage(imgUrl)} style={{ textDecoration: 'none' }}>
                      <div
                        style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden' }}
                      >
                        {imgUrl && (
                          <img
                            src={imgUrl}
                            alt={imgAlt}
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                          />
                        )}
                        <div
                          style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '160px',
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
                          }}
                        ></div>
                      </div>
                    </a>
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>

      {/* Dynamic Pop-up Lightbox Window */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="bg-white p-6 rounded-xl w-auto max-w-5xl relative popupSection"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-black text-xl font-bold cursor-pointer"
                onClick={() => setSelectedImage(null)}
                style={{
                  fontSize: '29px',
                  lineHeight: '5px',
                  background: '#995098',
                  height: '40px',
                  width: '40px',
                  borderRadius: '50%',
                  paddingLeft: '1px',
                  marginTop: '0',
                  color: '#fff',
                }}
              >
                ×
              </button>

              <img
                src={selectedImage}
                alt="Enlarged gallery view"
                className="w-full mb-4 rounded popupSection paddingSection"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
