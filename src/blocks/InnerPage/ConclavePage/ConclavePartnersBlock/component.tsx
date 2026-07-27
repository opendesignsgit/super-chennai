'use client'

import React, { useState, useEffect } from 'react'

// Keep your existing standard import Slider from "react-slick" here if using slick-carousel
import Slider from 'react-slick'

type PayloadMedia = {
  id: string
  url: string
  alt?: string
}

type PartnerItem = {
  id?: string
  image: PayloadMedia | string
  description?: PayloadMedia | string
}

type ConclavePartnersBlockProps = {
  sectionHeading?: string
  partners: PartnerItem[]
  onSelectPartner?: (partner: PartnerItem) => void
}

export default function ConclavePartnersComponent({
  sectionHeading = 'Partner',
  partners,
  onSelectPartner,
}: ConclavePartnersBlockProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [selectedCard, setSelectedCard] = useState<PartnerItem | null>(null)

  // Track viewport width for mobile layout switching
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!partners || partners.length === 0) return null

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
    infinite: partners.length > 4,
    speed: 500,
    slidesToShow: Math.min(4, partners.length),
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: Math.min(3, partners.length),
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: Math.min(2, partners.length),
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
  const handleCardClick = (partner: PartnerItem) => {
    setSelectedCard(partner)
    if (onSelectPartner) {
      onSelectPartner(partner)
    }
  }

  const showSlider = (isMobile && partners.length >= 3) || (!isMobile && partners.length > 3)

  return (
    <div className="NewsLetterPage articlesmainpagesections">
      <div className="exploreSldierBg">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="exploreMoreSectionContent">
            <h4>{sectionHeading}</h4>
          </div>

          <div className="exploreSldierSection">
            {showSlider ? (
              <Slider {...settings}>
                {partners.map((card, index) => {
                  const imageUrl = typeof card.image === 'object' ? card.image.url : card.image
                  const imageAlt =
                    typeof card.image === 'object'
                      ? card.image.alt || 'Partner Image'
                      : 'Partner Image'

                  return (
                    <div
                      key={card.id || index}
                      className="ExplorePageSliderImage cursor-pointer px-2"
                      onClick={() => handleCardClick(card)}
                    >
                      <div className="relative rounded-lg overflow-hidden flex justify-center">
                        {imageUrl && (
                          <img
                            src={imageUrl}
                            alt={imageAlt}
                            className="h-[200px] object-contain partnercardimage"
                          />
                        )}
                      </div>
                    </div>
                  )
                })}
              </Slider>
            ) : (
              <div className="flex justify-center gap-8 flex-wrap">
                {partners.map((card, index) => {
                  const imageUrl = typeof card.image === 'object' ? card.image.url : card.image
                  const imageAlt =
                    typeof card.image === 'object'
                      ? card.image.alt || 'Partner Image'
                      : 'Partner Image'

                  return (
                    <div
                      key={card.id || index}
                      className="ExplorePageSliderImage cursor-pointer"
                      // onClick={() => handleCardClick(card)}
                    >
                      <div className="relative rounded-lg overflow-hidden flex justify-center">
                        {imageUrl && (
                          <img
                            src={imageUrl}
                            alt={imageAlt}
                            className="h-[200px] object-contain partnercardimage"
                          />
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
