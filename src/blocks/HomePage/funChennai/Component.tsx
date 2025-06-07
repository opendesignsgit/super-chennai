/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import Slider from 'react-slick'
import Link from 'next/link'
import { Media } from 'src/payload-types'
import './style.css'
import parachuteImg from '@/assets/images/HomePage-Images/parachute.png'

type Card = {
  title: string
  place: string
  image: Media | string
  customLink?: string
  page?: {
    slug?: string
  }
}

type Props = {
  heading: string
  subheading: string
  cards: Card[]
}

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="slick-next" onClick={onClick} />
)

const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="slick-prev" onClick={onClick} />
)

export const FunChennaiBlockServer: React.FC<Props> = ({ heading, subheading, cards }) => {
  const settings = {
    autoplay: true,
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  }

  const getImageUrl = (img: Media | string) =>
    typeof img === 'object' && img?.url
      ? img.url
      : typeof img === 'string'
        ? img
        : '/images/placeholder.png'

  const getCardLink = (card: Card): string | null => {
    if (card.customLink) {
      return card.customLink.startsWith('http') ? card.customLink : `${card.customLink}`
    } else if (card.page?.slug) {
      return `/visits/${card.page.slug}`
    }
    return null
  }

  return (
    <div className="funchennaiBg">
      <div className="funchennaimainSection">
        <div className="container">
          <div className="funchennaiContainer max-w-6xl mx-auto px-4 space-y-10 funchennaiMainConatiner">
            <div className="funchennaiText">
              <h3>{heading}</h3>
              <h4 dangerouslySetInnerHTML={{ __html: subheading }} />
            </div>
          </div>
        </div>

        <div className="relative px-4 py-10 max-w-6xl mx-auto FunchennaiSliderSection">
          <Slider {...settings}>
            {cards.map((card, index) => {
              const imageUrl = getImageUrl(card.image)
              const href = getCardLink(card)

              const cardContent = (
                <div className="cardImageSection">
                  <img src={imageUrl} alt={card.title} />
                  <div className="titleFunChennaiDiv">
                    <p className="titleFunChennai">{card.title}</p>
                  </div>
                </div>
              )

              return (
                <div key={index}>
                  {href ? (
                    href.startsWith('http') ? (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {cardContent}
                      </a>
                    ) : (
                      <Link href={href}>{cardContent}</Link>
                    )
                  ) : (
                    cardContent
                  )}
                </div>
              )
            })}
          </Slider>
        </div>

        <div className="parachuteSection">
          <img src={parachuteImg.src} alt="parachute" width={400} height={300} />
        </div>
      </div>
    </div>
  )
}
