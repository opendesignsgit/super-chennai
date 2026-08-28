'use client'

import React from 'react'

type Media = {
  url?: string
  alt?: string
}

type SectionItem = {
  id?: string
  title: string
  title1?: string
  description: string
  image?: Media | string
  imgAlt?: string
  buttonText?: string
  buttonLink?: string
}

export default function QualityOfLifeComponent(props: any) {
  console.log('🚀 QualityOfLife Props Data:', props)

  const sectionsList: SectionItem[] = props?.sections || []

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
        QualityOfLifeComponent: No section data found.
      </div>
    )
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 mt-[50px] !mb-[60px]">
      <div className="flex flex-col gap-12">
        {sectionsList.map((section, index) => {
          const imgUrl = getImageUrl(section.image)
          const imgAlt = section.imgAlt || getImageAlt(section.image, section.title)

          return (
            <div
              key={section.id || index}
              className="flex flex-col lg:flex-row items-stretch bg-white overflow-hidden"
            >
              <div className="lg:w-1/2 w-full h-[300px] lg:h-auto">
                {imgUrl && <img src={imgUrl} alt={imgAlt} className="w-full h-full object-cover" />}
              </div>

              <div className="lg:w-1/2 w-full bg-[#005B83] text-white p-8 flex flex-col justify-center RoundedSection">
                <h2 className="text-2xl font-bold mb-2 text-[rgba(255,255,255,0.9)] qualityoflifeheading">
                  {section.title}
                </h2>
                {section.title1 && (
                  <h4 className="text-[1.20rem] font-medium mb-1 text-[#fff]">{section.title1}</h4>
                )}
                <p className="mb-6 !text-base text-[#fff]">{section.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
