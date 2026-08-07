'use client'

import React from 'react'

type Media = {
  url?: string
  alt?: string
}

type BenefitItem = {
  id?: string
  title: string
  para?: string
  imgs?: Media | string
  linkUrl?: string
}

type BenefitSection = {
  id?: string
  sectionTitleLine1?: string
  sectionTitleLine2?: string
  sectionDesc?: string
  label?: string
  image?: Media | string
  benefits?: BenefitItem[]
}

type BenefitSectionsProps = {
  benefitSections?: BenefitSection[]
}

export default function ({ benefitSections = [] }: BenefitSectionsProps) {
  // Helper to safely extract image URLs
  const getImageUrl = (img?: Media | string) => {
    if (!img) return ''
    return typeof img === 'object' ? img.url || '' : img
  }

  const getImageAlt = (img?: Media | string, fallback = '') => {
    if (!img) return fallback
    return typeof img === 'object' ? img.alt || fallback : fallback
  }

  return (
    <>
      {benefitSections &&
        benefitSections.map((section, index) => {
          const mainImgUrl = getImageUrl(section.image)
          const mainImgAlt = getImageAlt(
            section.image,
            section.sectionTitleLine2 || 'Benefit visual',
          )

          return (
            <section
              className={`clcSecscrl flex flex-wrap justify-center transition-colors duration-300 
                ${index % 2 === 0 ? 'bg-white whitebgsec' : 'bg-[#7d377d] colorbgsec'} 
                ${index % 3 === 0 ? 'pattern-a' : index % 3 === 1 ? 'pattern-b' : 'pattern-c'}`}
              key={section.id || index}
            >
              {/* Left Column */}
              <div className="clcscrlCol clcscrlLft relative">
                <div className="clcscrlinLBox sticky top-0">
                  {mainImgUrl && <img src={mainImgUrl} alt={mainImgAlt} />}
                  <div className="clcscrLtitle bg-[#682865] relative">
                    <h2 className="flex flex-col text-white">
                      {section.sectionTitleLine1 && <small>{section.sectionTitleLine1}</small>}
                      {section.sectionTitleLine2}
                    </h2>
                    {section.sectionDesc && <p>{section.sectionDesc}</p>}
                    {/* {section.label && <div className="boxttlsec">{section.label}</div>} */}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="clcscrlCol clcscrlRight padbtm">
                <div className="clcscrlinRBox MainSectionHovered">
                  {section.benefits &&
                    section.benefits.map((item, itemIdx) => {
                      const iconUrl = getImageUrl(item.imgs)
                      const iconAlt = getImageAlt(item.imgs, item.title)

                      return (
                        <div key={item.id || itemIdx} className="clcboxItemss flex">
                          <div className="clcboxIImg">
                            {iconUrl && <img src={iconUrl} alt={iconAlt} />}
                          </div>
                          <div className="clcboxICont">
                            <h3>{item.title}</h3>
                            {item.para && <p>{item.para}</p>}
                            <p className="linkpara">
                              <a href={item.linkUrl || '#'}>
                                <img
                                  src="/images/Work-Images/SubPages/LinkArrowRightIcon.svg"
                                  alt=""
                                />
                              </a>
                            </p>
                          </div>
                        </div>
                      )
                    })}
                </div>
              </div>
            </section>
          )
        })}
    </>
  )
}
