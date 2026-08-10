'use client'

import React from 'react'

type Media = {
  url?: string
  alt?: string
}

type DetailPoint = {
  id?: string
  name: string
  description?: string
  subDescription?: string
}

type DetailSection = {
  id?: string
  title?: string
  points?: DetailPoint[]
}

type TenantPoint = {
  id?: string
  title: string
  para?: string | string[]
  imgs?: Media | string
  link?: string
  altTitle?: string
}

type TenantInfoSection = {
  id?: string
  points?: TenantPoint[]
}

type ImageSectionItem = {
  id?: string
  sectionTitle?: string
  sectionDesc?: string
  image?: Media | string
  imageAlt?: string
  tntSecs?: TenantInfoSection[]
}

type ChennaiLivingProps = {
  imgSecs?: ImageSectionItem[]
  dtlSecs?: DetailSection[]
}

export default function ChennaiLivingSectionComponent({
  imgSecs = [],
  dtlSecs = [],
}: ChennaiLivingProps) {
  const getImageUrl = (img?: Media | string): string => {
    if (!img) return ''

    return typeof img === 'object' ? img.url || '' : img
  }

  const getImageAlt = (img?: Media | string, fallback = ''): string => {
    if (!img) return fallback

    return typeof img === 'object' ? img.alt || fallback : fallback
  }

  if (imgSecs.length === 0) return null

  return (
    <>
      {imgSecs.map((section, index) => {
        const tenantCount = section.tntSecs?.length ?? 0

        const parentClass = tenantCount % 2 === 0 ? 'even-count' : 'odd-count'

        const mainImgUrl = getImageUrl(section.image)

        const mainImgAlt = section.imageAlt || getImageAlt(section.image, section.sectionTitle)

        return (
          <div className="foodlistsec" key={section.id || index}>
            <section
              className={`
                imgcontent
                flex
                flex-wrap
                justify-center
                transition-colors
                duration-300
                ${index % 2 === 0 ? 'bg-white whitebgsec' : 'bg-[#f7f7f7] colorbgsec'}
                ${index === 0 ? 'pattern-a' : index % 2 === 0 ? 'pattern-b' : 'pattern-c'}
              `}
            >
              {/* Left Image Column */}
              <div className="imgLeft">
                {mainImgUrl && <img src={mainImgUrl} alt={mainImgAlt} />}
              </div>

              {/* Title & Description Banner */}
              <div className="imgText flex items-center">
                <div className="imgcolTitle bg-[#682865] relative">
                  <h2 className="flex flex-col text-white">
                    <small>{section.sectionTitle}</small>
                  </h2>

                  {section.sectionDesc && <p>{section.sectionDesc}</p>}
                </div>
              </div>

              {/* Optional Detail Grid Cards */}
              {dtlSecs &&
                dtlSecs.map((detailSec, sectionIdx) => (
                  <div
                    key={detailSec.id || sectionIdx}
                    className="nightlife mb-10 w-full"
                    style={{
                      paddingBottom: '0',
                      border: 'none',
                      margin: '0 auto',
                      marginTop: '90px',
                    }}
                  >
                    {detailSec.title && (
                      <h2 className="text-2xl font-semibold mb-6">{detailSec.title}</h2>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {detailSec.points?.map((point, idx) => (
                        <div
                          key={point.id || idx}
                          style={{ boxShadow: 'none' }}
                          className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                        >
                          <h3 className="text-xl font-semibold mb-2">{point.name}</h3>

                          {point.description && (
                            <p className="text-gray-700 mb-2">{point.description}</p>
                          )}

                          {point.subDescription && (
                            <p className="text-gray-500 text-sm mb-3">{point.subDescription}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

              {/* Tenant Info Section Cards */}
              {section.tntSecs && section.tntSecs.length > 0 && (
                <div
                  className={`
                      space-y-4
                      p-4
                      mt-[50px]
                      foodListIcon
                      w-full
                      flex
                      flex-wrap
                      ${parentClass}
                    `}
                  style={{ margin: '0' }}
                >
                  {section.tntSecs.map((tenant, i) =>
                    tenant.points?.map((item, j) => {
                      const iconUrl = getImageUrl(item.imgs)

                      const iconAlt = item.altTitle || getImageAlt(item.imgs, item.title)

                      const paraContent = Array.isArray(item.para) ? item.para.join(' ') : item.para

                      return (
                        <div key={item.id || `${tenant.id || i}-${j}`}>
                          <div className="clcboxItemss flex mb-4">
                            <div className="clcboxIImg">
                              {iconUrl && <img src={iconUrl} alt={iconAlt} />}
                            </div>

                            <div className="clcboxICont">
                              <h3>{item.title}</h3>

                              {paraContent && <p>{paraContent}</p>}
                            </div>
                          </div>
                        </div>
                      )
                    }),
                  )}
                </div>
              )}
            </section>
          </div>
        )
      })}
    </>
  )
}
