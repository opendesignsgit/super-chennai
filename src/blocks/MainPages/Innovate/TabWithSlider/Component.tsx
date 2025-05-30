'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import './style.css'
import SectionLoader from '@/components/SectionLoader/component'

type Slide = {
  image: { url?: string } | string
  title: string
  description: string
  link: string
}

export const InnovateSliderBlock = () => {
  const [slides, setSlides] = useState<Slide[]>([])
  const [loading, setLoading] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef<any>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/innovate')
        const data = await res.json()

        if (!data?.docs?.length) {
          console.warn('No data found')
          return
        }

        const allSlides = data.docs.map((item: any) => ({
          title: item['Innovate Title'] || item.title || 'Untitled',
          description: item.description || '',
          link: item.slug ? `/${item.slug}` : '#',
          image: item.innovationImage || {},
        }))

        setSlides(allSlides)
      } catch (error) {
        console.error('Failed to fetch innovate:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const settings = {
    dots: true,
    infinite: slides.length > 1,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    appendDots: (dots: any) => <ul className="InnovateSlidercustom-dots">{dots}</ul>,
    customPaging: (i: number) => <button>{`Slide ${i + 1}`}</button>,
    beforeChange: (_: number, next: number) => setActiveIndex(next),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, variableWidth: false } },
      { breakpoint: 768, settings: { slidesToShow: 1, variableWidth: false } },
      { breakpoint: 480, settings: { slidesToShow: 1, variableWidth: false } },
    ],
  }

  const handleButtonClick = (index: number) => {
    sliderRef.current?.slickGoTo(index)
    setActiveIndex(index)
  }

  if (loading) return <SectionLoader message="Loading Ennovates..." />

  return (
    <div className="InnovateSliderSectionBg">
      <section className="InnovateSliderslick-section">
        <div className="InnovateSliderslick-container">
          <div className="InnovateSliderslick-wrap">
            <Slider ref={sliderRef} {...settings}>
              {slides.map((slide, index) => {
                const imgUrl =
                  typeof slide.image === 'object' && slide.image?.url
                    ? slide.image.url
                    : typeof slide.image === 'string'
                      ? `/api/media/${slide.image}`
                      : '/fallback.jpg'

                return (
                  <div className="InnovateSliderslick-item" key={index}>
                    <Link href={`/innovate/${slide.link}`}>
                      <div className="image-wrapper">
                        <Image
                          src={imgUrl}
                          alt={slide.title}
                          width={800}
                          height={500}
                          className="your-css-class"
                        />
                        <div className="text-overlay innovateSlideTxt">
                          <h2>{slide.title}</h2>
                          <p>{slide.description}</p>
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
            />
            <button
              className="rightButtonInnovateSliders"
              onClick={() => sliderRef.current?.slickNext()}
            />
          </div>
        </div>
      </section>

      <div className="InnovateSlider-buttons-container">
        <div className="container max-w-9xl mx-auto px-4 space-y-10 InnovateSliderFLex">
          {slides.map((slide, index) => (
            <button
              key={index}
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
