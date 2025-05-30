'use client'
import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'
import './style.css'
import { FoodListSectionType } from '@/models/visitModels'

type Props = {
  block: FoodListSectionType
}

export default function FoodListSection({ block }: Props) {

const imageSections = block?.imageSections || []
  console.log(imageSections)
  

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
              {section.image && (
                <Image
                  src={(section.image as Media)?.url || ''}
                  alt={section.sectionTitle || ''}
                  width={500}
                  height={300}
                />
              )}
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
                        {item.imgs && (
                          <Image
                            src={(item.imgs as Media)?.url || ''}
                            alt={item.title || ''}
                            width={60}
                            height={60}
                          />
                        )}
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
