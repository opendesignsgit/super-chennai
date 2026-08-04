'use client'

import React from 'react'

type PayloadMedia = {
  id?: string
  url: string
  alt?: string
}

type InfoItem = {
  id?: string
  title: string
  desc: string
  icon: PayloadMedia | string
}

type InfoSectionProps = {
  mainImage?: PayloadMedia | string
  imgAlt?: string
  imagePosition?: 'left' | 'right'
  infoData?: InfoItem[]
}

export default function InnovateInfoSectionComponent({
  mainImage = '/images/Innovate-Images/Smart-City-thum-big.jpg',
  imgAlt = 'smart city chennai',
  imagePosition = 'left',
  infoData = [
    {
      title: 'Chennai Innovation Centre: A Thriving Ecosystem',
      desc: 'The rise of <strong> Chennai innovation centres </strong>—both public and private—has enabled the city to push boundaries in sectors like IT, EVs, fintech, life sciences, and aerospace. These centres foster collaboration between academia, corporates, and startups, fueling scalable breakthroughs.',
      icon: '/images/Visit-Images/icons/Scenic-Relaxing.svg',
    },
    {
      title: 'Home to Breakthroughs and Bold Ideas',
      desc: 'From AI-driven SaaS solutions to green energy projects and deep-tech research, <strong> Chennai innovations </strong> are transforming lives and industries. The city is a preferred destination for R&D thanks to institutions like IIT Madras and a strong startup support network.',
      icon: '/images/Visit-Images/icons/Buzzing-City-Life.svg',
    },
    {
      title: 'Powering a Future-First Economy',
      desc: "Chennai’s commitment to innovation goes beyond technology—it’s about reimagining how industries operate, cities function, and people live. Whether you're investing in research, launching a startup, or expanding operations, Chennai offers a future-focused platform like no other.",
      icon: '/images/Visit-Images/icons/Where-Flavour-Meets-Culture.svg',
    },
    {
      title: 'A Hotspot for Startup Disruption',
      desc: 'With state-backed policies and a growing number of incubators, Chennai empowers entrepreneurs building disruptive tech across healthtech, edtech, climate-tech, and more. Its startup culture is marked by creativity, resilience, and access to top talent.',
      icon: '/images/Visit-Images/icons/Weekend-Getaways-Chennai-Style.svg',
    },
  ],
}: InfoSectionProps) {
  const mainImageUrl = typeof mainImage === 'object' ? mainImage?.url : mainImage
  const finalAlt =
    imgAlt || (typeof mainImage === 'object' ? mainImage?.alt : '') || 'Section image'

  // Dynamic layout alignment based on Admin dropdown selection
  const isRight = imagePosition === 'right'

  return (
    <section className="info-section-wrapper">
      <div
        className={`section-container container max-w-7xl mx-auto px-4 ${
          isRight ? 'md:flex-row-reverse' : ''
        }`}
      >
        {/* Main Image Block */}
        <div className="section-left-image">
          {mainImageUrl && <img src={mainImageUrl} alt={finalAlt} className="" />}
        </div>

        {/* Content Block */}
        <div className="section-right-content">
          {infoData &&
            infoData.map((item, index) => {
              const iconUrl = typeof item.icon === 'object' ? item.icon?.url : item.icon

              return (
                <div className="info-item-block" key={item.id || index}>
                  {iconUrl && (
                    <img src={iconUrl} alt="icon" className="info-icon w-8 h-8 flex-shrink-0" />
                  )}
                  <div className="info-text-block">
                    <h3 className="">{item.title}</h3>
                    <p
                      className="text-gray-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    />
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </section>
  )
}
