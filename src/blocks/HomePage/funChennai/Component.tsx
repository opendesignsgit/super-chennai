
'use client'
import React from 'react'
import Slider from 'react-slick'
import { Media } from '@/payload-types'
import './style.css'
import parachuteImg from '../../../public/images/parachute.png'

type Props = {
  heading: string
  subheading: string
  cards: {
    title: string
    place: string
    image: Media | string
  }[]
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
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  }

  const getImageUrl = (img: Media | string) =>
    typeof img === 'object' && img?.url
      ? img.url
      : typeof img === 'string'
        ? img
        : '/images/placeholder.png'

  return (
    <div className="funchennaiBg">
      <div className="funchennaimainSection">
        <div className="container">
          <div className="funchennaiContainer">
            <div className="funchennaiText">
              <h3>{heading}</h3>
              <h4 dangerouslySetInnerHTML={{ __html: subheading }} />
            </div>
          </div>
        </div>

        <div className="relative px-4 py-10 max-w-6xl mx-auto FunchennaiSliderSection">
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div key={index}>
                <div className="cardImageSection">
                  <img src={getImageUrl(card.image)} alt={card.title} />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="parachuteSection">
          <img src={parachuteImg.src} alt="parachute" width={400} height={300} />
        </div>
      </div>
    </div>
  )
}
