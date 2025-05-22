'use client'
import React from 'react'
import Slider from 'react-slick'
import { Media } from '@/payload-types'
import './style.css'
import ArrowImage from '../../../assets/images/icons/rightArrowsvg.svg'

type Props = {
  cards: {
    title: string
    place: string
    image: Media | string
  }[]
}

export const ExploreBlockServer: React.FC<Props> = ({ cards }) => {
  const firstRow = cards.slice(0, 5)
  const secondRow = cards.slice(5)

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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

  const renderCard = (card: any, index: number) => {
    const imageUrl =
      typeof card.image === 'object' && card.image.url ? card.image.url : '/images/placeholder.png'

    return (
      <div className="exploreSectionFlex p-4" key={index}>
        <img src={imageUrl} alt={card.title} />
        <div>
          <h3>{card.title}</h3>
          <h5>{card.place}</h5>
        </div>
        <img className="arrowIcons" src={ArrowImage.src} alt="arrow" />
      </div>
    )
  }

  return (
    <div className="relative w-full px-4 py-10 ExploreChennaiContainer">
      <div className="max-w-7xl mx-auto space-y-10">
        <Slider {...settings}>{firstRow.map(renderCard)}</Slider>
        <Slider {...settings}>{secondRow.map(renderCard)}</Slider>
      </div>
    </div>
  )
}
