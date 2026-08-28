'use client'

import React from 'react'
import Link from 'next/link'

type Media = {
  url?: string
  alt?: string
}

type PointItem = {
  id?: string
  title: string
  para?: string | string[]
  imgs?: Media | string
  imgAlt?: string
  link?: string
}

type TenantItem = {
  id?: string
  points?: PointItem[]
}

type SectionItem = {
  id?: string
  sectionTitle?: string
  sectionDesc?: string
  image?: Media | string
  imgAlt?: string
  tenants?: TenantItem[]
}

export default function ThingsToDoComponent(props: any) {
  console.log('🚀 ThingsToDo Props Data:', props)

  const sectionsList: SectionItem[] = props?.sections || props?.imageSections || []

  const getImageUrl = (img?: Media | string) => {
    if (!img) return ''
    return typeof img === 'object' ? img.url || '' : img
  }

  const getImageAlt = (img?: Media | string, fallback = '') => {
    if (!img) return fallback
    return typeof img === 'object' ? img.alt || fallback : fallback
  }

  if (!sectionsList || sectionsList.length === 0) {
    return (
      <div className="p-4 my-4 text-center border border-dashed border-gray-300 rounded text-gray-500">
        ThingsToDoComponent: No section data found.
      </div>
    )
  }

  return (
    <div className="foodlistsec">
      {sectionsList.map((section, index) => {
        const tenantCount = section.tenants?.length ?? 0
        const parentClass = tenantCount % 2 === 0 ? 'even-count' : 'odd-count'

        const mainImgUrl = getImageUrl(section.image)
        const mainImgAlt = section.imgAlt || getImageAlt(section.image, section.sectionTitle)

        return (
          <section
            key={section.id || index}
            className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
              ${index % 2 === 0 ? 'bg-white whitebgsec' : 'bg-[#f7f7f7] colorbgsec'} 
              ${index === 0 ? 'pattern-a' : index % 2 === 0 ? 'pattern-b' : 'pattern-c'}`}
          >
            {/* Left Image */}
            <div className="imgLeft">{mainImgUrl && <img src={mainImgUrl} alt={mainImgAlt} />}</div>

            {/* Title & Description Header */}
            <div className="imgText flex items-center">
              <div className="imgcolTitle bg-[#682865] relative">
                <h2 className="flex flex-col text-white">
                  <small>{section.sectionTitle}</small>
                </h2>
                {section.sectionDesc && <p>{section.sectionDesc}</p>}
              </div>
            </div>

            {/* Feature Icon Cards Grid */}
            {/* {section.tenants && section.tenants.length > 0 && (
              <div
                className={`space-y-4 p-4 mt-[50px] foodListIcon w-full flex flex-wrap ${parentClass}`}
              >
                {section.tenants.map((tenant, i) => (
                  <>
                    {tenant.points &&
                      tenant.points.map((item, j) => {
                        const iconUrl = getImageUrl(item.imgs)
                        const iconAlt = item.imgAlt || getImageAlt(item.imgs, item.title)
                        const paraContent = Array.isArray(item.para)
                          ? item.para.join(' ')
                          : item.para

                        return (
                          <div key={item.id || j}>
                            <div className="clcboxItemss flex mb-4">
                              <div className="clcboxIImg">
                                {iconUrl && <img src={iconUrl} alt={iconAlt} />}
                              </div>
                              <div className="clcboxICont">
                                <h3>{item.title}</h3>
                                {paraContent && <p>{paraContent}</p>}

                                <div className="exploreMorebuttonVisitChennai mt-2">
                                  <Link
                                    href={item.link || '#'}
                                    className="text-blue-600 hover:underline text-sm font-medium"
                                  >
                                    Explore More
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                  </>
                ))}
              </div>
            )} */}

            {section.tenants && section.tenants.length > 0 && (
              <div
                className={`space-y-4 p-4 mt-[50px] foodListIcon w-full flex flex-wrap ${parentClass}`}
              >
                {section.tenants.map((tenant, i) => (
                  <React.Fragment key={tenant.id || i}>
                    {tenant.points &&
                      tenant.points.map((item, j) => {
                        const iconUrl = getImageUrl(item.imgs)
                        const iconAlt = item.imgAlt || getImageAlt(item.imgs, item.title)
                        const paraContent = Array.isArray(item.para)
                          ? item.para.join(' ')
                          : item.para

                        return (
                          <div key={item.id || j}>
                            <div className="clcboxItemss flex mb-4">
                              <div className="clcboxIImg">
                                {iconUrl && <img src={iconUrl} alt={iconAlt} />}
                              </div>
                              <div className="clcboxICont">
                                <h3>{item.title}</h3>
                                {paraContent && <p>{paraContent}</p>}

                                {item.link && (
                                  <div className="exploreMorebuttonVisitChennai mt-2">
                                    <Link
                                      href={item.link || '#'}
                                      className="text-blue-600 hover:underline text-sm font-medium"
                                    >
                                      Explore More
                                    </Link>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )
                      })}
                  </React.Fragment>
                ))}
              </div>
            )}
          </section>
        )
      })}
    </div>
  )
}
