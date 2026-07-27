'use client'

import React, { useRef, useState } from 'react'
import Slider, { CustomArrowProps } from 'react-slick'

// Import slick-carousel CSS files (or import them in your global CSS / layout)
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// ==========================================
// 1. TYPES & INTERFACES (Payload Compatible)
// ==========================================

export type PayloadMedia = {
  id: string
  url: string
  alt?: string
  width?: number
  height?: number
}

export type FeaturedEventProps = {
  linkUrl?: string
  image: PayloadMedia | string
  dateNumber?: string
  dayName?: string
  title?: string
  description?: string
  tag?: string
}

export type GalleryItemProps = {
  id?: string
  image: PayloadMedia | string
  title?: string
}

export type ConclaveGalleryBlockProps = {
  marqueeText?: string
  sectionTitle?: string
  sectionDescription?: string
  scrollDir?: 'left' | 'right'
  featuredEvent?: FeaturedEventProps
  galleryItems?: GalleryItemProps[]
}

// Helper to extract image URL safely
const getImageUrl = (media?: PayloadMedia | string): string => {
  if (!media) return ''
  if (typeof media === 'string') return media
  return media.url || ''
}

// ==========================================

// ==========================================
// 3. MAIN COMPONENT
// ==========================================

export default function ConclaveGalleryComponent({
  marqueeText = 'Gallery',
  sectionTitle = 'Chennai Conclave 2026',
  sectionDescription,
  scrollDir = 'left',
  featuredEvent,
  galleryItems = [],
}: ConclaveGalleryBlockProps) {
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const sliderRef = useRef<Slider | null>(null)

  // Featured Banner Image URL
  const featuredBgUrl = getImageUrl(featuredEvent?.image)

  // Lightbox Handlers
  const openModal = (imgUrl: string) => {
    setModalImage(imgUrl)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalImage(null)
  }

  // Slick Slider Settings adapted to galleryItems dynamic length
  const sliderSettings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 2500,
    infinite: galleryItems.length > 4,
    speed: 500,
    slidesToShow: Math.min(3, galleryItems.length || 1),
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: Math.min(3, galleryItems.length || 1),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, galleryItems.length || 1),
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
    <div className="EventsCalendarMainSection mb-10 articlesmainpagesections overflow-hidden">
      {/* -------------------------------------- */}
      {/* BACKGROUND MARQUEE TEXT                */}
      {/* -------------------------------------- */}
      <div
        className={`EventsCalenderBackground flex whitespace-nowrap ${
          scrollDir === 'right' ? 'Utilitiesscroll-right' : 'Utilitiesscroll-left'
        }`}
      >
        <p className="inline-block">
          {marqueeText} &nbsp; {marqueeText} &nbsp; {marqueeText} &nbsp;
        </p>
        <p className="inline-block">
          {marqueeText} &nbsp; {marqueeText} &nbsp; {marqueeText} &nbsp;
        </p>
      </div>

      {/* -------------------------------------- */}
      {/* SECTION HEADER                         */}
      {/* -------------------------------------- */}
      <div className="container max-w-7xl mx-auto px-4 EventsCalendarTitleMain my-6">
        <h2 className="text-3xl font-bold">{sectionTitle}</h2>
        {sectionDescription && <p className="text-gray-600 mt-2">{sectionDescription}</p>}
      </div>

      {/* -------------------------------------- */}
      {/* FEATURED EVENT HERO BANNER             */}
      {/* -------------------------------------- */}
      {featuredEvent && (
        <div className="eventsCalendarMainSectionConatiner container max-w-7xl mx-auto px-4 mb-10">
          <a
            href={featuredEvent.linkUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="CalendarEventsFirst">
              {featuredBgUrl && (
                <img
                  className="eventsCalenderIamge cursor-pointer w-[800px] h-[350px] object-cover"
                  src={featuredBgUrl}
                  alt={featuredEvent.title || 'Conclave Feature'}
                />
              )}

              <div className="MainCalendarSectionEvent">
                <div className="secondSectionEventsCalendar">
                  <div className="EventsCalendarDateandTime mb-4">
                    {featuredEvent.dateNumber && (
                      <p className="dateEvents text-4xl font-extrabold">
                        {featuredEvent.dateNumber}
                      </p>
                    )}
                    {featuredEvent.dayName && (
                      <p className="dayEvents text-gray-500 uppercase tracking-wider">
                        {featuredEvent.dayName}
                      </p>
                    )}
                  </div>

                  <div>
                    {featuredEvent.title && <p className="eventsNAME">{featuredEvent.title}</p>}
                  </div>
                </div>

                {featuredEvent.description && (
                  <div className="thirdSectionCalendarContent">
                    <p>{featuredEvent.description}</p>
                  </div>
                )}

                {featuredEvent.tag && (
                  <div className="eventsCalendarLinks">
                    <span>{featuredEvent.tag}</span>
                  </div>
                )}
              </div>
            </div>
          </a>
        </div>
      )}

      {/* -------------------------------------- */}
      {/* REACT SLICK GALLERY SLIDER             */}
      {/* -------------------------------------- */}
      {galleryItems.length > 0 && (
        <>
          <div className="container max-w-7xl mx-auto px-4 py-6 cardMobileSection relative">
            <Slider ref={sliderRef} {...sliderSettings}>
              {galleryItems.map((card, index) => {
                const imgUrl = getImageUrl(card.image)
                if (!imgUrl) return null

                return (
                  <div key={card.id || index} className="px-3">
                    <div
                      className="EventsCalendarCardSection h-[350px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform"
                      onClick={() => openModal(imgUrl)}
                    >
                      <img
                        src={imgUrl}
                        alt={card.title || `Gallery item ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )
              })}
            </Slider>
          </div>

          <div className="EventsCalenderButtons flex justify-center gap-4 !mt-10">
            <button
              type="button"
              className="EventsCalenderLeftButton"
              onClick={() => sliderRef.current?.slickPrev()}
            />

            <button
              type="button"
              className="EventsCalenderRightButton"
              onClick={() => sliderRef.current?.slickNext()}
            />
          </div>
        </>
      )}

      {/* -------------------------------------- */}
      {/* LIGHTBOX MODAL                         */}
      {/* -------------------------------------- */}
      {isModalOpen && modalImage && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] flex items-center justify-center">
            <img
              src={modalImage}
              alt="Expanded View"
              className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300 transition-colors"
              onClick={closeModal}
              aria-label="Close modal"
            ></button>
          </div>
        </div>
      )}
    </div>
  )
}
