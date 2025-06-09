/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Media } from 'src/payload-types'
import './style.css'
import { ResponsiveHeading } from '@/components/TextAdjust/ResponsiveHeading'
import Link from 'next/link'

type Props = {
  heading: string
  description: string
  images: {
    image: Media | string
    title: string
    description?: string
    page?: {
      slug: string
    }
    customLink?: string
  }[]
}

export const StartupChennaiBlockServer: React.FC<Props> = ({ heading, description, images }) => {
  const [scrollDir, setScrollDir] = useState<'left' | 'right'>('left')
  const lastScrollY = useRef(0)
  const bgTextRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollDir(currentScrollY > lastScrollY.current ? 'left' : 'right')
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getImageUrl = (img: Media | string): string => {
    if (typeof img === 'object' && img?.url) return img.url
    if (typeof img === 'string') return img
    return '/images/placeholder.png'
  }

  const resolveLink = (img: Props['images'][number]): string => {
    if (img.customLink) return img.customLink
    if (img.page?.slug) return `/investments/${img.page.slug}`
    return '#'
  }

  return (
    <div className="starupchennaiSection">
      <div className="starupChennaiMainContainer">
        <div
          className={`StartupTextBackground ${
            scrollDir === 'right' ? 'StartupTextScrolright' : 'StartupTextScrollLeft'
          }`}
          ref={bgTextRef}
        >
          <p>Startup &nbsp; Chennai &nbsp; Startup &nbsp; Chennai</p>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        <div className="startupChennaiMainContainer">
          <ResponsiveHeading text={heading} />
          <p>{description}</p>
        </div>

        <div className="startupChennaiImageSection">
          {/* First image (larger block) */}
          {/* {images[0] && (
            <div className="firstStarupSection">
              <img src={getImageUrl(images[0].image)} alt={images[0].title || ''} />
              <div className="itsectorSection">
                <h4>{images[0].title}</h4>
                <p>{images[0].description}</p>
              </div>
            </div>
          )} */}
          {images[0] && (
            <Link href={resolveLink(images[0])} className="firstStarupSection">
              <img src={getImageUrl(images[0].image)} alt={images[0].title || ''} />
              <div className="itsectorSection">
                <h4>{images[0].title}</h4>
                <p>{images[0].description}</p>
              </div>
            </Link>
          )}

          {/* Remaining 4 images in two columns */}
          {/* <div className="STarupChennaiSections">
            <div className="rightSideSectionSTarup">
              {images.slice(1, 3).map((img, index) => (
                <div className="StartUpChennaiTextLayer" key={index}>
                  <img src={getImageUrl(img.image)} alt={img.title || ''} />
                  <section className="itsectorSectionOne">
                    <h4>{img.title}</h4>
                  </section>
                </div>
              ))}
            </div>

            <div className="rightSideSectionSTarup">
              {images.slice(3, 5).map((img, index) => (
                <div className="StarupForBorder StartUpChennaiTextLayer" key={index + 3}>
                  <img src={getImageUrl(img.image)} alt={img.title || ''} />
                  <section className="itsectorSectionOne ">
                    <h4>{img.title}</h4>
                  </section>
                </div>
              ))}
            </div>
          </div> */}
          <div className="STarupChennaiSections">
            <div className="rightSideSectionSTarup">
              {images.slice(1, 3).map((img, index) => (
                <div className="StartUpChennaiTextLayer relative" key={index}>
                  <img src={getImageUrl(img.image)} alt={img.title || ''} />
                  <section className="itsectorSectionOne">
                    <h4>{img.title}</h4>
                  </section>
                  <Link
                    href={resolveLink(img)}
                    className="absolute inset-0 z-10"
                    aria-label={img.title}
                  />
                </div>
              ))}
            </div>

            <div className="rightSideSectionSTarup">
              {images.slice(3, 5).map((img, index) => (
                <div className="StarupForBorder StartUpChennaiTextLayer relative" key={index + 3}>
                  <img src={getImageUrl(img.image)} alt={img.title || ''} />
                  <section className="itsectorSectionOne">
                    <h4>{img.title}</h4>
                  </section>
                  <Link
                    href={resolveLink(img)}
                    className="absolute inset-0 z-10"
                    aria-label={img.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
