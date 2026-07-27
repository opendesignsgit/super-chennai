'use client'

import React from 'react'

type PayloadMedia = {
  id: string
  url: string
  alt?: string
}

type PillarParagraph = {
  id?: string
  text: string
}

type PillarItem = {
  id?: string
  icon: PayloadMedia | string
  title: string
  paragraphs: PillarParagraph[]
}

type ConclavePillarsBlockProps = {
  sectionHeading?: string
  sectionSubheading?: string
  pillars: PillarItem[]
}

export default function ConclaveFivePillarsComponent({
  sectionHeading = 'FIVE PILLARS OF SUPER CHENNAI',
  sectionSubheading,
  pillars,
}: ConclavePillarsBlockProps) {
  if (!pillars || pillars.length === 0) return null

  return (
    <section className="visitIntroParaSection detailIntro articlesmainpagesections">
      <div className="workIntro">
        <h3 className="newupdatewhychennai">{sectionHeading}</h3>
        {sectionSubheading && <p>{sectionSubheading}</p>}

        <div className="section-container container max-w-7xl mx-auto px-4">
          <div className="section-right-content-pillers">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pillars.map((item, index) => {
                const iconUrl = typeof item.icon === 'object' ? item.icon.url : item.icon
                const iconAlt =
                  typeof item.icon === 'object' ? item.icon.alt || item.title : item.title

                return (
                  <div className="info-item-block" key={item.id || index}>
                    <div className="info-text-block">
                      <div className="info-header flex items-center gap-3 mb-2">
                        {iconUrl && <img src={iconUrl} alt={iconAlt} className="info-icon" />}
                        <h3 className="info-title text-lg">{item.title}</h3>
                      </div>

                      {/* Content mapping layer handling your multiple desc tags perfectly */}
                      {item.paragraphs?.map((para, idx) => (
                        <p
                          key={para.id || idx}
                          className="[&>strong]:font-bold [&>b]:font-bold"
                          dangerouslySetInnerHTML={{ __html: para.text }}
                        />
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
