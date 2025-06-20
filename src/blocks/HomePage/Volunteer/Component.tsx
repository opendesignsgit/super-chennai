/* eslint-disable @next/next/no-img-element */
'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import NoData from 'src/components/NoData'
import './style.css'

type Slide = {
  id: string
  title: string
  subtitle?: string
  description?: string
  image?: {
    url: string
    alt?: string
  }
  slug?: string
}

type Props = {
  heading?: string
  title?: string
  description?: string
  page?: {
    slug: string
  }
  customLink?: string
}

export default function BecameAVolunteer({ heading, title, description, page, customLink }: Props) {
  const [slides, setSlides] = useState<Slide[]>([])
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/volunteer')
        const data = await res.json()

        if (!data?.docs?.length) {
          console.warn('No data found')
          return
        }

        console.log('Fetched volunteer data:', data)

        const allSlides = data.docs.map((item: any) => ({
          id: item.id || item._id,
          title: item['Voluenteer title'] || item.title || 'Untitled',
          subtitle: item.subtitle || '',
          description: item.description || '',
          slug: item.slug || '',
          image: item.image || {},
        }))

        setSlides(allSlides)
      } catch (error) {
        console.error('Failed to fetch events:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  const nextSlide = () => {
    if (slides.length > 0) {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length)
    }
  }

  const prevSlide = () => {
    if (slides.length > 0) {
      setCurrentSlideIndex((prev) => (prev - 1 + slides.length) % slides.length)
    }
  }

  const current = slides[currentSlideIndex]
  const imageUrl = current?.image?.url || '/placeholder.jpg'
  const imageAlt = current?.image?.alt || current?.title || 'Volunteer Slide'

  const hash = current?.slug?.replace(/\s+/g, '-').toLowerCase()
  const finalLink = customLink || (page?.slug ? `/${page.slug}#${hash}` : '')
  console.log('Final hash:', hash)

  return (
    <div className="Becameavolunteerbg">
      <div className="runningTextContainer">
        <p className="runningText">
          BECOME A <br /> VOLUNTEER
        </p>
      </div>

      <div className="BecameavolunteerContent">
        {heading && <h4>{heading}</h4>}
        {title && <h2>{title}</h2>}
        {description && <h6>{description}</h6>}
      </div>

      <div className="volunteerSlider container max-w-7xl mx-auto px-4">
        {slides.length === 0 ? (
          <NoData message="Looks like there’s nothing to show right now. Please check back later!" />
        ) : (
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
                  <img src={imageUrl} alt={imageAlt} className="w-full h-auto object-cover" />
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
                  {current?.title && <h3>{current.title}</h3>}
                  {current?.subtitle && <h4>{current.subtitle}</h4>}
                  {current?.description && <p>{current.description}</p>}

                  {finalLink && (
                    <div className="linksContainer">
                      <Link href={finalLink} className="exploreMoreLink">
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
                <button
                  aria-label="Next slide"
                  className="rightarrowVolunteer"
                  onClick={nextSlide}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
