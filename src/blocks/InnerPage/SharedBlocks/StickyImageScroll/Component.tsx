'use client'
import React from 'react'
import Image from 'next/image'

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

type FutureUnicornsProps = {
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

export default function FutureUnicorns({
  backgroundType,
  backgroundColor = '#7d377d',
  smallText,
  leftImage,
  title,
  description,
  cards,
}: FutureUnicornsProps) {
  const sectionStyle =
    backgroundType === 'color'
      ? { backgroundColor: backgroundColor }
      : {
          backgroundImage: `url('./doted.png')`,
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
                      {/* <Image
                        src="/images/Work-Images/SubPages/LinkArrowRightIcon.svg"
                        alt="Link arrow"
                        width={24}
                        height={24}
                      /> */}
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
