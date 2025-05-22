'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import './style.css'
import Link from 'next/link'
import NoData from '@/components/NoData'

type Slide = {
  title: string
  subtitle?: string
  description?: string
  link?: string
  image?: {
    url: string
    alt?: string
  }
}

type Props = {
  heading: string
  title: string
  description: string
  volunteerSlidesRef: {
    title: string
    slides: Slide[]
  }
}
export default function BecameAVolunteer({
  heading,
  title,
  description,
  volunteerSlidesRef,
}: Props) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {

  }, [heading, volunteerSlidesRef])

  const slides = volunteerSlidesRef?.slides || []

  const nextSlide = () => {
    if (slides.length > 0) {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }
  }

  const prevSlide = () => {
    if (slides.length > 0) {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }
  }

    const current = slides[currentSlide]
    const imageUrl = current?.image?.url || '/placeholder.jpg'
    const imageAlt = current?.image?.alt || current?.title || 'Volunteer Slide'

    if (!slides.length) {
      return (
        <div className="Becameavolunteerbg">
          <div className="BecameavolunteerContent">
            <h4>{heading}</h4>
            <h2>{title}</h2>
            <h6>{description}</h6>
            <NoData message="No reels available" />
          </div>
        </div>
      )
    }



  return (
    <div className="Becameavolunteerbg">
      <div className="runningTextContainer">
            <p className="runningText">
              BECOME A <br /> VOLUNTEER{' '}
            </p>
          </div>
      <div className="BecameavolunteerContent">
        <h4>{heading}</h4>
        <h2>{title}</h2>
        <h6>{description}</h6>
      </div>

      <div className="volunteerSlider container max-w-7xl mx-auto px-4">
        <div className="volunteerContainer">
          <div className="volunteerSectionImage">
            <AnimatePresence mode="wait">
              <motion.div
                key={imageUrl}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="volunteerSectionContent">
            <AnimatePresence mode="wait">
              <motion.div
                key={current?.title || 'volunteer-slide'}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <h3>{current?.title}</h3>
                {current?.subtitle && <h4>{current.subtitle}</h4>}
                {current?.description && <p>{current.description}</p>}
                {current?.slug && (
                  <div className="linksContainer">
                    <Link href={`/volunteer/${current.slug}`} className="exploreMoreLink">
                      Explore More
                    </Link>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            <div className="sliderControlsVolunteer">
              <button
                aria-label="Previous slide"
                className="leftarrowVolunteer"
                onClick={prevSlide}
              />
              <button aria-label="Next slide" className="rightarrowVolunteer" onClick={nextSlide} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
