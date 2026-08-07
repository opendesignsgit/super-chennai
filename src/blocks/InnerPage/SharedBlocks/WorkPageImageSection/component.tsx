'use client'

import React from 'react'

type Media = {
  url?: string
  alt?: string
}

type BulletItem = {
  id?: string
  point: string
}

type PointItem = {
  id?: string
  title: string
  desc?: string
  para?: (BulletItem | string)[]
  imgs?: Media | string
  imgAlt?: string
}

type PermitSectionItem = {
  id?: string
  sectionTitle: string
  sectionDesc?: string
  image: Media | string
  imgAlt?: string
  points?: PointItem[]
  // Legacy fallbacks for safe migration
  tenantSections?: { points?: PointItem[] }[]
  tenantInfoSections?: { points?: PointItem[] }[]
}

type WorkPageImageSectionProps = {
  sections?: PermitSectionItem[]
  imageSections?: PermitSectionItem[]
}

export default function WorkPageImageSectionComponent({
  sections,
  imageSections,
}: WorkPageImageSectionProps) {
  const activeSections = sections || imageSections || []

  const getImageUrl = (img?: Media | string): string => {
    if (typeof img === 'object' && img !== null) return img.url || ''
    return typeof img === 'string' ? img : ''
  }

  const getImageAlt = (img?: Media | string, fallbackAlt?: string): string => {
    if (typeof img === 'object' && img !== null && img.alt) return img.alt
    return fallbackAlt || ''
  }

  if (!activeSections || activeSections.length === 0) return null

  return (
    <div className="workPageImageSec">
      {activeSections.map((section, index) => {
        // Fallback check: Direct points array OR legacy nested arrays
        const pointsList =
          section.points ||
          section.tenantSections?.[0]?.points ||
          section.tenantInfoSections?.[0]?.points ||
          []

        const mainImageUrl = getImageUrl(section.image)
        const mainImageAlt = getImageAlt(section.image, section.imgAlt)

        return (
          <section
            key={section.id || index}
            className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 payloadcmssswork ${
              index % 2 === 0 ? 'bg-white whitebgsec' : 'bg-[#f7f7f7] colorbgsec'
            } ${index % 3 === 0 ? 'pattern-a' : index % 3 === 1 ? 'pattern-b' : 'pattern-c'}`}
          >
            {/* Banner Image */}
            <div className="imgLeft">
              {mainImageUrl && <img src={mainImageUrl} alt={mainImageAlt} />}
            </div>

            {/* Title Block */}
            <div className="imgText flex items-center">
              <div className="imgcolTitle bg-[#682865] relative">
                <h2 className="flex flex-col text-white">
                  <small>{section.sectionTitle}</small>
                </h2>
                {section.sectionDesc && <p>{section.sectionDesc}</p>}
              </div>
            </div>

            {/* Points Section */}
            {pointsList.length > 0 && (
              <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
                {pointsList.map((item, j) => {
                  const iconUrl = getImageUrl(item.imgs)
                  const iconAlt = getImageAlt(item.imgs, item.imgAlt)

                  return (
                    <div key={item.id || j} className="clcboxItemss flex mb-4">
                      {iconUrl && (
                        <div className="clcboxIImg">
                          <img src={iconUrl} alt={iconAlt} />
                        </div>
                      )}

                      <div className="clcboxICont">
                        <h3>{item.title}</h3>
                        {item.desc && <h5>{item.desc}</h5>}

                        {item.para && item.para.length > 0 && (
                          <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                            {item.para.map((pointObj, k) => {
                              const textVal =
                                typeof pointObj === 'object' && pointObj !== null
                                  ? pointObj.point
                                  : pointObj

                              if (!textVal) return null

                              const splitIndex = textVal.indexOf(':')
                              if (splitIndex !== -1) {
                                const label = textVal.slice(0, splitIndex + 1)
                                const rest = textVal.slice(splitIndex + 1)

                                return (
                                  <li key={k}>
                                    <strong>{label}</strong>
                                    {rest}
                                  </li>
                                )
                              }

                              return <li key={k}>{textVal}</li>
                            })}
                          </ul>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}
