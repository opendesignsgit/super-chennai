/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import './style.css'
import { FeatureSectionsProps } from 'src/models/innerpage/businessModels'
import { Media } from 'src/payload-types'

export default function FeatureSections({ sections }: FeatureSectionsProps) {
  return (
    <>
      {sections?.map((section, index) => (
        <section
          key={index}
          className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
            ${index % 2 === 0 ? 'bg-white whitebgsec' : 'bg-[#f7f7f7] colorbgsec'} 
            ${index % 3 === 0 ? 'pattern-a' : index % 3 === 1 ? 'pattern-b' : 'pattern-c'}`}
        >
          <div className="imgLeft">
            <img src={(section.image as Media)?.url ?? ''} alt={section.sectionTitle} />
          </div>
          <div className="imgText flex items-center">
            <div className="imgcolTitle bg-[#682865] relative">
              <h2 className="flex flex-col text-white">
                <small>{section.sectionTitle}</small>
              </h2>
              <p>{section.sectionDesc}</p>
            </div>
          </div>

          <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
            {section.tenantInfoSections?.map((tenant, i) => (
              <div key={i}>
                <h4 className="text-lg font-semibold mb-4">{tenant.title}</h4>
                {tenant.points?.map((item, j) => (
                  <div key={j} className="clcboxItemss flex mb-4">
                    <div className="clcboxIImg">
                      <img
                        src={(item.imgs as Media)?.url ?? '/fallback-image.jpg'}
                        alt={item.title}
                      />
                    </div>
                    <div className="clcboxICont">
                      <h3>{item.title}</h3>
                      <h5>{item.desc}</h5>
                      {/* <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {item.para?.map((point, k) => <li key={k}>{point.point}</li>)}
                      </ul>                       */}
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {item.para?.map((point, k) => {
                          const [title, ...rest] = point.point.split(':')
                          const desc = rest.join(':').trim()
                          return (
                            <li key={k}>
                              <strong>{title}:</strong> {desc}
                            </li>
                          )
                        })}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  )
}
