'use client'

import React from 'react'

type Media = {
  url?: string
  alt?: string
}

type PointItem = {
  id?: string
  title?: string
  para?: string
  imgs?: Media | string
  link?: string
}

type TenantSection = {
  id?: string
  points?: PointItem[]
}

type ImageSectionItem = {
  id?: string
  sectionTitle?: string
  sectionDesc?: string
  image?: Media | string
  tenantInfoSections?: TenantSection[]
}

type ImageOverlayWithPointsProps = {
  imageSections?: ImageSectionItem[]
}

export default function ImageOverlaySectionWithPointsComponent({
  imageSections = [],
}: ImageOverlayWithPointsProps) {
  if (!imageSections || imageSections.length === 0) {
    return null
  }

  const getImageUrl = (img?: Media | string): string => {
    if (typeof img === 'object' && img !== null) {
      return img.url || ''
    }
    return typeof img === 'string' ? img : ''
  }

  return (
    <div className="foodlistsec cmssectionss">
      {imageSections.map((section, index) => {
        const mainImageUrl = getImageUrl(section.image)
        const tenantCount = section.tenantInfoSections?.length ?? 0
        const parentClass = tenantCount % 2 === 0 ? 'even-count' : 'odd-count'

        return (
          <section
            key={section.id || index}
            className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 ${
              index % 2 === 0 ? 'bg-white whitebgsec' : 'bg-[#f7f7f7] colorbgsec'
            } ${index % 3 === 0 ? 'pattern-a' : index % 3 === 1 ? 'pattern-b' : 'pattern-c'}`}
          >
            {/* Section Main Image */}
            {mainImageUrl && (
              <div className="imgLeft">
                <img src={mainImageUrl} alt={section.sectionTitle || 'Section Visual'} />
              </div>
            )}

            {/* Section Header & Subtitle */}
            {(section.sectionTitle || section.sectionDesc) && (
              <div className="imgText flex items-center">
                <div className="imgcolTitle bg-[#682865] relative">
                  {section.sectionTitle && (
                    <h2 className="flex flex-col text-white">
                      <small>{section.sectionTitle}</small>
                    </h2>
                  )}
                  {section.sectionDesc && (
                    <p dangerouslySetInnerHTML={{ __html: section.sectionDesc }} />
                  )}
                </div>
              </div>
            )}

            {/* Tenant / Point Info Grid */}
            {section.tenantInfoSections && section.tenantInfoSections.length > 0 && (
              <div
                className={`space-y-4 p-4 mt-[50px] foodListIcon w-full flex flex-wrap ${parentClass}`}
              >
                {section.tenantInfoSections.map((tenant, tIdx) => (
                  <div key={tenant.id || tIdx}>
                    {tenant.points?.map((item, pIdx) => {
                      const iconUrl = getImageUrl(item.imgs)

                      return (
                        <div key={item.id || pIdx} className="clcboxItemss flex mb-4">
                          {iconUrl && (
                            <div className="clcboxIImg">
                              <img src={iconUrl} alt={item.title || 'Icon'} />
                            </div>
                          )}
                          <div className="clcboxICont">
                            {item.title && <h3>{item.title}</h3>}
                            {item.para && <p dangerouslySetInnerHTML={{ __html: item.para }} />}
                            {item.link && (
                              <div className="exploreMorebuttonVisitChennai">
                                <a
                                  href={item.link}
                                  className="text-blue-600 hover:underline text-sm font-medium"
                                >
                                  Explore More
                                </a>
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}
