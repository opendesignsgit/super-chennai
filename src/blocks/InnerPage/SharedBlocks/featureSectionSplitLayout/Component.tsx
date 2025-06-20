/* eslint-disable @next/next/no-img-element */
'use client'
import React from 'react'
import { Media } from 'src/payload-types'
import Link from 'next/link'

export interface IconItem {
  icon: Media
  heading: string
  body: string
  url?: string
}

export interface TenantInfo {
  pts: IconItem[]
}

export interface ImageSection {
  img: Media
  title: React.ReactNode
  desc: React.ReactNode
  tenantInfo: TenantInfo[]
}

export default function FeatureSectionSplit({ imgSec }: { imgSec: ImageSection[] }) {
  return (
    <div className="foodlistsec">
      {imgSec.map((section, index: number) => {
        const tenantCount = section.tenantInfo?.length ?? 0
        const parentClass = tenantCount % 1 === 0 ? 'even-count' : 'odd-count'
        return (
          <div className="detailIconSec" key={index}>
            <div className="detailIconSections">
              <section
                id={
                  typeof section.title === 'string' ? section.title.replace(/\s+/g, '') : undefined
                }
                className={`imgcontent flex flex-wrap justify-center transition-colors duration-300
                ${index % 2 === 0 ? 'bg-white whitebgsec' : 'bg-[#f7f7f7] colorbgsec'}
                ${index % 3 === 0 ? 'pattern-a' : index % 3 === 1 ? 'pattern-b' : 'pattern-c'}`}
              >
                <div className="imgLeft">
                  {section.img && (
                    <img src={section.img.url || ''} alt={String(section.title) || ''} />
                  )}
                </div>

                <div className="imgText flex items-center">
                  <div className="imgcolTitle bg-[#682865] relative">
                    <h2 className="flex flex-col text-white">
                      <small>{section.title}</small>
                    </h2>
                    <p>{section.desc}</p>
                  </div>
                </div>

                <div
                  className={`space-y-4 p-4 mt-[50px] foodListIcon w-full flex flex-wrap even-count  ${parentClass}`}
                >
                  {section.tenantInfo?.map((tenant, i) => (
                    <div key={i}>
                      {tenant.pts?.map((item, j) => (
                        <div key={j} className="clcboxItemss flex mb-4">
                          <div className="clcboxIImg">
                            {item.icon && (
                              <img src={item.icon.url || ''} alt={item.heading || ''} />
                            )}
                          </div>
                          <div className="clcboxICont">
                            <h3>{item.heading}</h3>
                            <p>{item.body}</p>
                            {item.url && (
                              <div className="exploreMorebuttonVisitChennai">
                                <Link
                                  href={item.url}
                                  className="text-blue-600 hover:underline text-sm font-medium"
                                >
                                  Explore More
                                </Link>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        )
      })}
    </div>
  )
}
