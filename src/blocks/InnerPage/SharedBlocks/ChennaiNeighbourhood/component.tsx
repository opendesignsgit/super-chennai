'use client'

import React from 'react'
import Link from 'next/link'

type Media = {
  url?: string
  alt?: string
}

type BenefitItem = {
  id?: string
  title: string
  para?: string
  imgs?: Media | string
  imgAlt?: string
  link?: string
}

type SectionItem = {
  id?: string
  sectionTitle?: string
  sectionDesc?: string
  image?: Media | string
  imgAlt?: string
  benefits?: BenefitItem[]
}

export default function ChennaiNeighbourhoodComponent(props: any) {
  console.log('🚀 ChennaiNeighbourhood Props Data:', props)

  const benefitSections: SectionItem[] = props?.sections || props?.benefitSections || []

  const getImageUrl = (img?: Media | string) => {
    if (!img) return ''
    return typeof img === 'object' ? img.url || '' : img
  }

  const getImageAlt = (img?: Media | string, fallback = '') => {
    if (!img) return fallback
    return typeof img === 'object' ? img.alt || fallback : fallback
  }

  if (!benefitSections || benefitSections.length === 0) {
    return (
      <div className="p-4 my-4 text-center border border-dashed border-gray-300 rounded text-gray-500">
        ChennaiNeighbourhoodComponent: No neighbourhood section data found.
      </div>
    )
  }

  return (
    <>
      <div className="iconImgdev">
        {benefitSections.map((section, index) => {
          const mainImgUrl = getImageUrl(section.image)
          const mainImgAlt = section.imgAlt || getImageAlt(section.image, section.sectionTitle)

          return (
            <section
              className={`clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
              ${index % 2 === 0 ? 'bg-white whitebgsec' : 'bg-[#7d377d] colorbgsec'} 
              ${index % 3 === 0 ? 'pattern-a' : index % 3 === 1 ? 'pattern-b' : 'pattern-c'}`}
              key={section.id || index}
            >
              {/* Sticky Left Box */}
              <div className="clcscrlCol clcscrlLft relative">
                <div className="clcscrlinLBox sticky top-0">
                  {mainImgUrl && <img src={mainImgUrl} alt={mainImgAlt} />}
                  <div
                    className={`clcscrLtitle relative ${
                      index % 2 === 0 ? 'bg-[#7d377c]' : 'bg-[#672866]'
                    }`}
                  >
                    <h2 className="flex flex-col text-white">
                      <small>{section.sectionTitle}</small>
                    </h2>
                    {section.sectionDesc && <p>{section.sectionDesc}</p>}
                  </div>
                </div>
              </div>

              {/* Right Side Scrollable Cards */}
              <div className="clcscrlCol clcscrlRight padbtm">
                <div className="clcscrlinRBox MainSectionHovered">
                  {section.benefits &&
                    section.benefits.map((item, itemIdx) => {
                      const cardImgUrl = getImageUrl(item.imgs)
                      const cardImgAlt = item.imgAlt || getImageAlt(item.imgs, item.title)

                      return (
                        <Link
                          key={item.id || itemIdx}
                          href={item.link || '#'}
                          className="clcboxItemss linkIcon flex hover:shadow-lg transition rounded-xl"
                        >
                          <div className="clcboxIImg">
                            {cardImgUrl && <img src={cardImgUrl} alt={cardImgAlt} />}
                          </div>
                          <div className="clcboxICont">
                            <h3>{item.title}</h3>
                            {item.para && <p>{item.para}</p>}
                          </div>
                        </Link>
                      )
                    })}
                </div>
              </div>
            </section>
          )
        })}
      </div>
    </>
  )
}
