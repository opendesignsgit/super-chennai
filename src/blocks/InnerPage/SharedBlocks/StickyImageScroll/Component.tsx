'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import arrowImage from '../../../../assets/images/LinkArrowRightIcon.svg'
import './style.css'

type Card = {
  image: {
    url: string
    alt?: string
    width: number
    height: number
  }
  title: string
  description: string
  customLink?: string
  page?: {
    slug: string
  }
}

type ExtraContentItem = {
  imgs: {
    url: string
    alt?: string
  }
  title: string
  desc?: string
  para: {
    point: string
    mainHead: string
  }[]
}

type StickyImageScrollProps = {
  backgroundType: 'color' | 'none'
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
  extraContent?: ExtraContentItem[]
}

export default function StickyImageScroll({
  backgroundType,
  backgroundColor,
  smallText,
  leftImage,
  title,
  description,
  cards,
  extraContent = [],
}: StickyImageScrollProps) {
  const sectionStyle = backgroundType === 'color' ? { backgroundColor } : {}

  return (
    <section className="clcSecscrl flex flex-col" style={sectionStyle}>
      <div className="flex">
        <div className="clcscrlCol clcscrlLft relative">
          <div className="clcscrlinLBox sticky top-0">
            <Image
              src={leftImage.url}
              alt={leftImage.alt || ''}
              width={leftImage.width}
              height={leftImage.height}
              priority={true}
            />
            <div className="clcscrLtitle bg-[#672866] relative">
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
            {cards?.map((card, index) => {
              const link = card.customLink || (card.page?.slug ? `/visits/${card.page.slug}` : null)
              const isSVG = card.image.url.toLowerCase().endsWith('.svg')
              const imageClass = isSVG ? 'clcboxIImg' : 'clcboxIImg2'

              return (
                <div key={index} className="clcboxItemss flex">
                  <div className={imageClass}>
                    <Image
                      src={card.image.url}
                      alt={card.image.alt || card.title}
                      width={card.image.width}
                      height={card.image.height}
                    />
                  </div>
                  <div className="clcboxICont">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                    {link && (
                      <p className="linkpara">
                        <Link href={link}>
                          <Image
                            src={arrowImage?.src || ''}
                            alt="Link arrow"
                            width={24}
                            height={24}
                          />
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      {extraContent.length > 0 && extraContent.some((item) => item.para?.length > 0) && (
        <section className="clcSecscrl flex flex-wrap justify-center transition-colors duration-300">
          <div className="space-y-6 bg-white p-4 mt-[50px] rounded shadow bottomList">
            {extraContent.map((item, i) => (
              <div key={i}>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                {item.desc && <p className="text-sm text-gray-600 mb-2">{item.desc}</p>}
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {item.para.map((pointObj, j) => (
                    <li key={j}>
                      <strong>{pointObj.mainHead}</strong>: {pointObj.point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </section>
  )
}
