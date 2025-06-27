/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import './style.css'

type VisitItem = {
  id: string
  label: string
  description?: string
  image: {
    url: string
  }
  customLink?: string
  page?: {
    slug?: string
  }
}

type VisitGroupRef = {
  title: string
  description?: string
  items: VisitItem[]
}

export const VisitCategory = ({ title, description, items }: VisitGroupRef) => {
  const mainSlider = useRef<Slider | null>(null)
  const thumbSlider = useRef<Slider | null>(null)

  const [nav1, setNav1] = useState<Slider | undefined>()
  const [nav2, setNav2] = useState<Slider | undefined>()

  useEffect(() => {
    setNav1(mainSlider.current ?? undefined)
    setNav2(thumbSlider.current ?? undefined)
  }, [])

  const mainSettings = {
    asNavFor: nav2,
    arrows: true,
    fade: true,
    infinite: false,
  }

  const thumbSettings = {
    asNavFor: nav1,
    slidesToShow: 11,
    focusOnSelect: true,
    infinite: false,
    vertical: true,
    arrows: false,
    verticalSwiping: false,
  }

  const resolveLink = (item: VisitItem): string | null => {
    if (item.customLink) return item.customLink
    if (item.page?.slug) return `/visits/${item.page.slug}`
    return null
  }

  return (
    <div className="visitslideOut">
      <div className="visitslideTop container max-w-7xl mx-auto px-4">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="sliderSection">
        {/* Main Image Slider */}
        <div className="visitslideImg">
          <Slider {...mainSettings} ref={mainSlider}>
            {items.map((item) => (
              <div key={item.id} style={{ textAlign: 'center' }}>
                <img src={item.image?.url} alt={item.label} />
                <div className="titleOut">
                  <h4>{item.label}</h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Thumbnails + Description */}
        <div className="visitContSlide">
          <Slider {...thumbSettings} ref={thumbSlider}>
            {items.map((item) => {
              const link = resolveLink(item)

              return (
                <div key={item.id}>
                  {link ? (
                    <Link href={link}>
                      <img
                        src={item.image?.url}
                        alt={item.label}
                        style={{
                          width: '100%',
                          height: 'auto',
                          cursor: 'pointer',
                          borderRadius: '4px',
                        }}
                      />
                    </Link>
                  ) : (
                    <img
                      src={item.image?.url}
                      alt={item.label}
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '4px',
                      }}
                    />
                  )}

                  <h3>{link ? <Link href={link}>{item.label}</Link> : item.label}</h3>

                  <p>
                    {item.description} {link && <Link href={link}>Learn more</Link>}
                  </p>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}
