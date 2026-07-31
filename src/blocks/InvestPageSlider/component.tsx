'use client'

import React from 'react'
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
  category?: string
  description: string
  image: PayloadMedia | string
  imgAlt?: string
  link: string
}

type InvestmentSliderProps = {
  slides?: SlideItem[]
  sliderSettings?: Settings
}

// Custom Arrow Components with proper TS types
interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div onClick={onClick} className="ExplorePageLeftButton" />
)

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <div onClick={onClick} className="ExplorePageRightButton" />
)

export default function InvestPageSliderComponent({
  slides = [
    {
      title: 'Startups',
      category: 'Real Estate',
      description:
        'If you have expertise in any service or product, you can start your own business in an area where your target market is present and you can begin making money from the service you offer.',
      image: '/images/Invest-Images/SubPages/startup.jpg',
      imgAlt: 'startup chennai',
      link: '/investstartupschennai#InvestId',
    },
    {
      title: 'Franchise',
      category: 'Real Estate',
      description:
        'To increase their brand recognition, several brands open franchise across Chennai. In Chennai, several businesses are seeking investors to build franchises and offer training to operate them.',
      image: '/images/Invest-Images/SubPages/Food-and-Beverage/coffee-shops.jpg',
      imgAlt: 'coffee shop',
      link: '/investfranchisechennai#InvestId',
    },
    {
      title: 'Renewable Energy',
      category: 'Real Estate',
      description:
        'Chennai offers a wealth of Renewable Energy investment prospects. Investigate wind energy along the shore. Study up on waste-to-energy.',
      image: '/images/Invest-Images/SubPages/solar/rooftop.jpg',
      imgAlt: 'solar companies in chennai',
      link: '/investrenewableenergychennai#InvestId',
    },
    {
      title: 'Real Estate',
      category: 'Real Estate',
      description: 'Since Chennai is a big metropolis, real estate values have skyrocketed.',
      image: '/images/Invest-Images/SubPages/real.jpg',
      imgAlt: 'realestate chennai',
      link: '/chennairealestate#InvestId',
    },
    {
      title: 'Retirement',
      category: 'Startups',
      description:
        'Every older individual plans to spend their retirement in a contented and tranquil setting. For older folks, Chennai will be the ideal destination for relaxation and exploration.',
      image: '/images/Visit-Images/SubPages/Retirement-img.jpg',
      imgAlt: 'retirement community in chennai',
      link: '/investretirementchennai#InvestId',
    },
  ],
  sliderSettings,
}: InvestmentSliderProps) {
  // Default Settings including your Custom Arrows
  const defaultSettings: Settings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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

  const settings = { ...defaultSettings, ...sliderSettings }

  if (!slides || slides.length === 0) return null

  return (
    <div className="InvestMainSliderSection">
      <div className="container max-w-7xl mx-auto px-4">
        <Slider {...settings}>
          {slides.map((item, index) => {
            const imageUrl = typeof item.image === 'object' ? item.image?.url : item.image
            const imageAlt =
              item.imgAlt || (typeof item.image === 'object' ? item.image?.alt : '') || item.title

            return (
              <div key={item.id || index} className="px-2">
                <Link
                  href={item.link}
                  className="bulidingSection cursor-pointer"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                >
                  {(index % 4) % 2 === 0 ? (
                    <>
                      <div className="builidngContent">
                        <h3>{item.title}</h3>
                        <h5>{item.description}</h5>
                      </div>
                      {imageUrl && <img className="buildingImage" src={imageUrl} alt={imageAlt} />}
                    </>
                  ) : (
                    <>
                      {imageUrl && <img className="buildingImage1" src={imageUrl} alt={imageAlt} />}
                      <div className="builidngContent1">
                        <h3>{item.title}</h3>
                        <h5>{item.description}</h5>
                      </div>
                    </>
                  )}
                </Link>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}
