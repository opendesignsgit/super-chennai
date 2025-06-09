
'use client'
import React from 'react'
import Slider from 'react-slick'
import { Media } from 'src/payload-types'
import './style.css'
import ArrowImage from '@/assets/images/icons/rightArrowsvg.svg'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  cards: {
    title: string
    place: string
    image: Media | string
    page?: { slug: string }
    customLink?: string
  }[]
}

export const ExploreBlockServer: React.FC<Props> = ({ cards }) => {
  const firstRow = cards.slice(0, 4)
  const secondRow = cards.slice(4, 8)

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 1.1 } },
      { breakpoint: 440, settings: { slidesToShow: 1.3 } },
      { breakpoint: 390, settings: { slidesToShow: 1.2 } },
      { breakpoint: 380, settings: { slidesToShow: 1.1 } },
    ],
  }

  const renderCard = (card: any, index: number) => {
    const imageUrl =
      typeof card.image === 'object' && card.image?.url ? card.image.url : '/images/placeholder.png'

    const href = card.customLink || (card.page?.slug ? `/visits/${card.page.slug}` : null)

    const content = (
      <div className="exploreSectionFlex p-4" key={index}>
        <Image src={imageUrl} alt={card.title} width={0} height={0} />
        <div>
          <h3>{card.title}</h3>
          <h5>{card.place}</h5>
        </div>
        <Image className="arrowIcons" src={ArrowImage.src} alt="arrow" width={0} height={0} />
      </div>
    )

    return href ? (
      <Link href={href} key={index}>
        {content}
      </Link>
    ) : (
      <div key={index}>{content}</div>
    )
  }

  return (
    <div className="relative w-full px-4 py-10 ExploreChennaiContainer">
      <div className="container exploreChennaiContiner max-w-7xl mx-auto px-4 space-y-10">
        <div className="space-y-4">
          <Slider {...settings}>{firstRow.map(renderCard)}</Slider>
          <Slider {...settings}>{secondRow.map(renderCard)}</Slider>
        </div>
      </div>
    </div>
  )
}
