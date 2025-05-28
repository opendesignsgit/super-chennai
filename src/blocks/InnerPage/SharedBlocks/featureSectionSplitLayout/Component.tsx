'use client'
import { Media } from '@/components/Media'
import React from 'react'

type MediaType = {
  url: string
  alt?: string
}

export interface ImageTextPatternListType {
  imageSections?: {
    image?: MediaType | string
    sectionTitle?: string
    sectionDesc?: string
    tenantInfoSections?: {
      points?: {
        imgs?: MediaType | string
        title?: string
        para?: string
        link?: string
      }[]
    }[]
  }[]
}

export const HighlightedFeatureListSection: React.FC<ImageTextPatternListType> = ({
  imageSections,
}) => {
  return (
    <div className="foodlistsec">
      {imageSections?.map((section, index) => {
        const tenantCount = section.tenantInfoSections?.length ?? 0
        const parentClass = tenantCount % 2 === 0 ? 'even-count' : 'odd-count'

        return (
          <section
            key={index}
            className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
              ${index % 2 === 0 ? 'bg-white whitebgsec' : 'bg-[#f7f7f7] colorbgsec'} 
              ${index % 3 === 0 ? 'pattern-a' : index % 3 === 1 ? 'pattern-b' : 'pattern-c'}`}
          >
            <div className="imgLeft">
              <Media
                resource={
                  typeof section.image === 'string'
                    ? section.image
                    : section.image && 'url' in section.image
                      ? section.image.url
                      : undefined
                }
              />
            </div>

            <div className="imgText flex items-center">
              <div className="imgcolTitle bg-[#682865] relative">
                <h2 className="flex flex-col text-white">
                  <small>{section.sectionTitle}</small>
                </h2>
                <p>{section.sectionDesc}</p>
              </div>
            </div>

            <div
              className={`space-y-4 p-4 mt-[50px] foodListIcon w-full flex flex-wrap ${parentClass}`}
            >
              {section.tenantInfoSections?.map((tenant, i) => (
                <div key={i}>
                  {tenant.points?.map((item, j) => (
                    <div key={j} className="clcboxItemss flex mb-4">
                      <div className="clcboxIImg">
                        <Media
                          resource={
                            typeof item.imgs === 'string'
                              ? item.imgs
                              : item.imgs && 'url' in item.imgs
                                ? item.imgs.url
                                : undefined
                          }
                        />
                      </div>
                      <div className="clcboxICont">
                        <h3>{item.title}</h3>
                        <p>{item.para}</p>
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
                  ))}
                </div>
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
