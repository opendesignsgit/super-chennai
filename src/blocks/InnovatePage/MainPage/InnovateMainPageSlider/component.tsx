'use client'

import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type PayloadMedia = {
  id?: string
  url: string
  alt?: string
}

type SlideItem = {
  id?: string
  title: string
  content: string
  image: PayloadMedia | string
  imgAlt?: string
  link: string
}

type InnovateSliderProps = {
  slides?: SlideItem[]
}

export default function InnovatePageSliderComponent({
  slides = [
    {
      image: '/images/Innovate-Images/IT-Software-thum-big.jpg',
      imgAlt: 'it software chennai',
      title: 'IT & Software Development ',
      content:
        'Using state-of-the-art products and services to drive global digital transformation.',
      link: '/innovate/it-companies-in-chennai',
    },
    {
      image: '/images/Innovate-Images/Artificial-Intelligence-thum-big.jpg',
      imgAlt: 'AI companies in Chennai',
      title: 'Artificial Intelligence & Machine Learning ',
      content: 'Join us in exploring exciting opportunities and breakthroughs.',
      link: '/innovate/ai-companies-in-chennai',
    },
    {
      image: '/images/Innovate-Images/Electric-Vehicles-thum-big.jpg',
      imgAlt: 'ev vehicles in chennai',
      title: 'Electric Vehicles (EVs) & Clean Technology ',
      content: 'Discover how we’re revolutionizing industries across the globe.',
      link: '/innovate/ev-vehicles-in-chennai',
    },
    {
      image: '/images/Innovate-Images/Smart-City-thum-big.jpg',
      imgAlt: 'smart city chennai',
      title: 'Smart City Initiatives ',
      content: 'Learn more about the latest trends and innovations in technology.',
      link: '/innovate/smart-city-chennai',
    },
    {
      image: '/images/Innovate-Images/Healthcare-Tech-thum-big.jpg',
      imgAlt: 'chennai healthcare services',
      title: 'Healthcare Tech Innovations ',
      content: 'Join us in exploring exciting opportunities and breakthroughs.',
      link: '/innovate/health-tech-in-chennai',
    },
    {
      image: '/images/Innovate-Images/Robotics-Automation-thum-big.jpg',
      imgAlt: 'robotics in chennai',
      title: 'Robotics and Automation ',
      content: 'Discover how we’re revolutionizing industries across the globe.',
      link: '/innovate/robotics-in-chennai',
    },
    {
      image: '/images/Innovate-Images/Blockchain-Fintech-thum-big.jpg',
      imgAlt: 'blockchain course in chennai',
      title: 'Blockchain and Fintech',
      content: 'Discover how we’re revolutionizing industries across the globe.',
      link: '/innovate/blockchain-course-in-chennai',
    },
    {
      image: '/images/Innovate-Images/Automotive-Tech-thum-big.jpg',
      imgAlt: 'auto tech chennai',
      title: 'Automotive Tech and R&D ',
      content: 'Learn more about the latest trends and innovations in technology.',
      link: '/innovate/autotech-chennai',
    },
    {
      image: '/images/Innovate-Images/Education-Tech-thum-big.jpg',
      imgAlt: 'edutech chennai',
      title: 'Education Tech',
      content: 'Join us in exploring exciting opportunities and breakthroughs.',
      link: '/innovate/edutech-chennai',
    },
    {
      image: '/images/Innovate-Images/3D-Printing-Additive-Manufacturing-thum-big.jpg',
      imgAlt: '3d printing chennai',
      title: '3D Printing and Additive Manufacturing',
      content: 'Discover how we’re revolutionizing industries across the globe.',
      link: '/innovate/3d-printing-in-chennai',
    },
    {
      image: '/images/Innovate-Images/Augmented-Reality-Virtual-Reality-thum-thum-big.jpg',
      imgAlt: 'ar vr companies in chennai',
      title: 'Augmented Reality (AR)',
      content: 'Learn more about the latest trends and innovations in technology.',
      link: '/innovate/ar-vr-companies-in-chennai',
    },
    {
      image: '/images/Innovate-Images/Agriculture-Tech-thum-big.jpg',
      imgAlt: 'agri tech companies in chennai',
      title: 'Agriculture Tech',
      content: 'Join us in exploring exciting opportunities and breakthroughs.',
      link: '/innovate/agri-tech-companies-in-chennai',
    },
  ],
}: InnovateSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef<Slider | null>(null)

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    appendDots: (dots: React.ReactNode) => <ul className="InnovateSlidercustom-dots">{dots}</ul>,
    customPaging: (i: number) => <button>{`Slide ${i + 1}`}</button>,
    beforeChange: (_oldIndex: number, newIndex: number) => {
      setActiveIndex(newIndex)
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
        },
      },
    ],
  }

  const handleButtonClick = (index: number) => {
    sliderRef.current?.slickGoTo(index)
    setActiveIndex(index)
  }

  if (!slides || slides.length === 0) return null

  return (
    <div className="InnovateSliderSectionBg">
      <section className="InnovateSliderslick-section">
        <div className="InnovateSliderslick-container">
          <div className="InnovateSliderslick-wrap">
            <Slider ref={sliderRef} {...settings}>
              {slides.map((slide, index) => {
                const imageUrl = typeof slide.image === 'object' ? slide.image?.url : slide.image
                const imageAlt =
                  slide.imgAlt ||
                  (typeof slide.image === 'object' ? slide.image?.alt : '') ||
                  slide.title

                return (
                  <div className="InnovateSliderslick-item" key={slide.id || index}>
                    <Link href={slide.link}>
                      <div className="image-wrapper">
                        {imageUrl && <img src={imageUrl} alt={imageAlt} />}
                        <div className="text-overlay innovateSlideTxt">
                          <h2>{slide.title}</h2>
                          <p>{slide.content}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )
              })}
            </Slider>
          </div>

          <div className="InnovateSlidernav-buttons">
            <button
              className="leftButtonInnovateSliders"
              onClick={() => sliderRef.current?.slickPrev()}
              aria-label="Previous Slide"
            />
            <button
              className="rightButtonInnovateSliders"
              onClick={() => sliderRef.current?.slickNext()}
              aria-label="Next Slide"
            />
          </div>
        </div>
      </section>

      {/* Dynamic buttons below the slider */}
      <div className="InnovateSlider-buttons-container">
        <div className="container max-w-9xl mx-auto px-4 space-y-10 InnovateSliderFLex">
          {slides.map((slide, index) => (
            <button
              key={slide.id || index}
              className={`InnovateSlider-button ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleButtonClick(index)}
            >
              <div className="InnovateSliderButtonTitle">{slide.title}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
