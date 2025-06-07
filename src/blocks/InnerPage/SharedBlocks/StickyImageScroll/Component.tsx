'use client'
import React from 'react'
import Image from 'next/image'
import arrowImage from '@/assets/icons/LinkArrowRightIcon.svg'
// import './style.css'

type Card = {
  image: {
    url: string
    alt?: string
    width: number
    height: number
  }
  title: string
  description: string
  link?: string
}

type StickyImageScrollProps = {
  backgroundType: 'color' | 'image'
  backgroundColor?: string
  leftImage: {
    url: string
    alt?: string
    width: number
    height: number
  }
  smallText?: string
  title: string
  description: string
  cards: Card[]
}

export default function StickyImageScroll({
  backgroundType,
  backgroundColor = '#7d377c',
  smallText,
  leftImage,
  title,
  description,
  cards,
}: StickyImageScrollProps) {
  const sectionStyle =
    backgroundType === 'color'
      ? { backgroundColor: backgroundColor }
      : {
          backgroundImage: arrowImage,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }
  return (
    <section className="clcSecscrl flex" style={sectionStyle}>
      <div className="clcscrlCol clcscrlLft relative">
        <div className="clcscrlinLBox sticky top-0">
          <Image
            src={leftImage.url}
            alt={leftImage.alt || ''}
            width={leftImage.width}
            height={leftImage.height}
            priority={true}
          />

          <div className="clcscrLtitle bg-[#682865] relative">
            <h2 className="flex flex-col">
              <small>{smallText}</small> {title}
            </h2>
            <p>{description}</p>
            <div className="boxttlsec">{title}</div>
          </div>
        </div>
      </div>
      <div className="clcscrlCol clcscrlRight padbtm">
        <div className="clcscrlinRBox MainSectionHovered">
          {cards?.map((card, index) => (
            <div key={index} className="clcboxItemss flex">
              <div className="clcboxIImg">
                <Image
                  src={card.image.url}
                  alt={card.title}
                  width={card.image.width}
                  height={card.image.height}
                />
              </div>
              <div className="clcboxICont">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                {card.link && (
                  <p className="linkpara">
                    <a href={card.link}>
                      <Image src={arrowImage.src} alt="Link arrow" width={24} height={24} />
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
