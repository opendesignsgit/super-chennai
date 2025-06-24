/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import './style.css'
import { Slide } from '@/models/innerpage/ExploreMoreChennai'

// COMPONENTS ####################################################
const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div onClick={onClick} className="ExplorePageLeftButton"></div>
)

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="ExplorePageRightButton" onClick={onClick}></div>
)

// SETTINGS #######################################################
const settings = {
  dots: false,
  arrows: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
}

const ExploreMoreChennai: React.FC<Props> = ({ heading, description, apiEndpoint }) => {
  // STATE VARIABLES ################################################
  const [slides, setSlides] = useState<Slide[]>([])

  // HOOKS // #######################################################

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/${apiEndpoint}`)
        const data = await res.json()

        if (!data?.docs?.length) {
          console.warn('No data found')
          return
        }

        const formattedSlides = data.docs.map((item: any) => ({
          title: item.title,
          link: item.slug ? `/${apiEndpoint}/${item.slug}` : '#',

          image: {
            url: item.FeaturedImage?.url ?? '',
            alt: item.FeaturedImage?.alt ?? item.title,
          },
        }))

        setSlides(formattedSlides)
      } catch (error) {
        console.error('Failed to fetch events:', error)
      }
    }

    fetchData()
  }, [apiEndpoint])

  return (
    <div className="exploreSldierBg">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="exploreMoreSectionContent">
          <h4>{heading}</h4>
          {description && <p>{description}</p>}
        </div>
        <div className="exploreSldierSection">
          <Slider {...settings}>
            {slides.map((img, index) => (
              <div key={index} className="ExplorePageSliderImage">
                <a href={img.link || '#'} style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '8px',
                      overflow: 'hidden',
                    }}
                  >
                    {img.image?.url && (
                      <img src={img.image.url} alt={img.image.alt || `Slide ${index + 1}`} />
                    )}
                    <div
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '60px',
                        background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent)',
                      }}
                    ></div>
                    <div className="titleTextExploreChennai">{img.title}</div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default ExploreMoreChennai
