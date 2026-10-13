'use client'

import React, { useState } from 'react'

type PayloadMedia = {
  url: string
  alt?: string
}

type SliderImageItem = {
  id?: string
  image: PayloadMedia | string
  altText?: string
}

type ManifestoSectionProps = {
  topHeaderTitle?: string
  mainHeading?: string
  paragraph1?: string
  subHeading?: string
  paragraph2?: string
  highlightText?: string
  buttonText?: string
  sliderImages?: SliderImageItem[]
  onDownloadClick?: () => void
}

export default function ManifestoSectionComponent({
  topHeaderTitle = 'Manifesto in Your Hands',
  mainHeading = 'DELIVERING THE MANIFESTO IS NOW IN YOUR HANDS',
  paragraph1 = 'The future of Chennai is shaped by the aspirations of its people. Reason why, Super Chennai organised a day-long Conclave that brought together industry leaders, urban planners, administrators, thought leaders and citizens. The Conclave discussed and curated ideas across five defining pillars: Live, Work, Visit, Innovate and Invest.',
  subHeading = 'Live, Work, Visit, Innovate and Invest',
  paragraph2 = 'Suffice to say, incredible insights were collated. And they have been put together as a Manifesto on what the people wish for, from Super Chennai.',
  highlightText = 'Register your details to access and download the full manifesto.',
  buttonText = 'Download',
  sliderImages = [
    { image: '/images/wireImages/Visit.jpg', altText: 'visit' },
    { image: '/images/wireImages/work.jpg', altText: 'work' },
    { image: '/images/wireImages/innovate.jpg', altText: 'innovate' },
    { image: '/images/wireImages/live.jpg', altText: 'live' },
    { image: '/images/wireImages/Invest.jpg', altText: 'invest' },
  ],
  onDownloadClick,
}: ManifestoSectionProps) {
  const [activeSlide, setActiveSlide] = useState(0)

  const handleDownload = () => {
    if (onDownloadClick) {
      onDownloadClick()
    }
  }

  return (
    <section className="mt-10 manifestoSection pb-20 relative manifestopage font-sans">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Top Header */}
        <div className="InvestChennaiContent-conclaves mb-8">
          <h3 className="text-center text-2xl md:text-3xl font-bold text-[#0A1B3D]">
            {topHeaderTitle}
          </h3>
        </div>

        <div className="items-center relative">
          {/* Content Block */}
          <div className="text-center lg:text-left mb-8 lg:mb-0 relative md:absolute top-0 right-0 w-full md:w-[50%] z-[40] manifestowidth">
            <h2 className="themelink-color formheadingtheme-menifesto mb-6 text-xl sm:text-2xl md:text-3xl font-extrabold text-[#01236a] uppercase tracking-wide">
              {mainHeading}
            </h2>

            {paragraph1 && (
              <p className="paraZeroVolunteerSection mb-4 text-gray-700 leading-relaxed text-sm sm:text-base manifestopara font-medium">
                {paragraph1}
              </p>
            )}

            {subHeading && (
              <h2 className="themelink-color formheadingtheme-menifesto mb-6 text-xl sm:text-2xl md:text-3xl font-bold text-[#01236a]">
                {subHeading}
              </h2>
            )}

            {paragraph2 && (
              <p className="text-gray-600 leading-relaxed mb-2 text-sm sm:text-base manifestopara font-medium">
                {paragraph2}
              </p>
            )}

            {highlightText && (
              <p
                className="themelink-color text-gray-600 leading-relaxed mb-6 text-sm sm:text-base manifestopara font-semibold"
                style={{
                  fontFamily: 'NewAmsterdam, sans-serif',
                  fontSize: '25px',
                  marginBottom: '12px',
                }}
              >
                {highlightText}
              </p>
            )}

            <button
              type="button"
              onClick={handleDownload}
              className="bg-purple-700 hover:bg-purple-800 text-white py-3 px-8 rounded-lg font-semibold theme-button transition duration-300 shadow-md uppercase tracking-wider"
            >
              {buttonText}
            </button>
          </div>

          {/* Image Showcase / Slider Container */}
          <div className="bulbRectContainer relative w-full hidden md:block">
            {sliderImages && sliderImages.length > 0 && (
              <div className="relative overflow-hidden rounded-2xl shadow-sm border border-gray-100 max-w-[45%]">
                <div className="bulbimg">
                  {(() => {
                    const currentImg = sliderImages[activeSlide]?.image
                    const imgUrl = typeof currentImg === 'object' ? currentImg?.url : currentImg
                    return (
                      <img
                        src={imgUrl || '/images/wireImages/Visit.jpg'}
                        alt={sliderImages[activeSlide]?.altText || 'manifesto image'}
                        className="w-full h-auto object-cover transition-all duration-500"
                      />
                    )
                  })()}
                </div>

                {/* Optional Dots for Navigation */}
                {sliderImages.length > 1 && (
                  <div className="flex justify-center gap-2 my-3">
                    {sliderImages.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveSlide(idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          activeSlide === idx ? 'bg-purple-700 w-6' : 'bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
