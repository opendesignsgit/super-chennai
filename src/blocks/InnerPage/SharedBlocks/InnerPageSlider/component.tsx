'use client'

import React from 'react'
import Slider from 'react-slick'
import Link from 'next/link'

// Slick Carousel CSS Imports
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type MediaObject = {
  url?: string
  alt?: string
}

type SlideItem = {
  id?: string
  title: string
  link: string
  image?: MediaObject | string
}

type InnerPageSliderProps = {
  mainTitle?: string
  subTitle?: string
  slides?: SlideItem[]
}

// Custom Arrow Components
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div onClick={onClick} className="ExplorePageLeftButton cursor-pointer"></div>
)

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div onClick={onClick} className="ExplorePageRightButton cursor-pointer"></div>
)

export default function InnerPageSliderComponent({
  mainTitle = 'Chennai’s tech pulse',
  subTitle = "Chennai's software development industry is drawing individuals from all over the world for work and business. With a knowledgeable staff, it positions itself as a major center for a range of IT solutions.",
  slides = [
    {
      image: '/images/Innovate-Images/SubPages/IT-Software-thum.jpg',
      title: 'IT and Software Development',
      link: '/innovate/it-companies-in-chennai',
    },
    {
      image: '/images/Innovate-Images/SubPages/Artificial-Intelligence-thum.jpg',
      title: 'Artificial Intelligence and Machine Learning',
      link: '/innovate/ai-companies-in-chennai',
    },
    {
      image: '/images/Innovate-Images/SubPages/Electric-Vehicles-thum.jpg',
      title: 'Electric Vehicles (EV)',
      link: '/innovate/ev-vehicles-in-chennai',
    },
    {
      image: '/images/Innovate-Images/SubPages/Smart-City-thum.jpg',
      title: 'Smart City Initiatives',
      link: '/innovate/smart-city-chennai',
    },
  ],
}: InnerPageSliderProps) {
  const settings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  return (
    <section className="exploreSldierBg">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header Content */}
        <div className="exploreMoreSectionContent">
          {mainTitle && <h4 className="">{mainTitle}</h4>}
          {subTitle && <p className="">{subTitle}</p>}
        </div>

        {/* Slick Slider Section */}
        {slides && slides.length > 0 && (
          <div className="exploreSldierSection">
            <Slider {...settings}>
              {slides.map((slide, index) => {
                // Extract Image URL whether it's Payload Media Object or String Path
                const imageUrl =
                  typeof slide.image === 'object' && slide.image?.url
                    ? slide.image.url
                    : (slide.image as string) || ''

                return (
                  <div key={slide.id || index} className="ExplorePageSliderImage px-2">
                    <Link href={slide.link || '#'} className="no-underline block">
                      <div className="relative rounded-lg overflow-hidden">
                        <img
                          src={imageUrl}
                          alt={slide.title || `Slide ${index + 1}`}
                          className="w-full h-auto block object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

                        {/* Title Text */}
                        <div className="titleTextExploreChennai">{slide.title}</div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </Slider>
          </div>
        )}
      </div>
    </section>
  )
}
