'use client'

import React from 'react'

type VolunteerItem = {
  id?: string
  title: string
  description: string
  image?: { url?: string } | string
  linkText?: string
  linkUrl?: string
}

type BecomeAVolunteerProps = {
  mainTitle?: string
  mainDescription?: string
  volunteerSections?: VolunteerItem[]
}

export default function BecomeAVolunteerSection(props: BecomeAVolunteerProps) {
  const sections = props.volunteerSections || []

  const getImageUrl = (imgObj: any, fallback: string) => {
    if (!imgObj) return fallback
    if (typeof imgObj === 'object' && imgObj?.url) return imgObj.url
    if (typeof imgObj === 'string') return imgObj
    return fallback
  }

  return (
    <div className="VolunterPageBecameVolunteerBg">
      <div className="VolunteerBecameavolunteer">
        <h3 className="">{props.mainTitle || 'Become a Volunteer'}</h3>
        <p className="text-gray-600 leading-relaxed text-lg">
          {props.mainDescription ||
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
        </p>
      </div>

      <div>
        <div className="container max-w-7xl mx-auto px-4 space-y-12">
          {sections.map((section, index) => {
            const isEven = index % 2 === 0
            const imgSrc = getImageUrl(section.image, '/images/volunteer-placeholder.jpg')

            return (
              <div
                className="DigitalSectionFLex flex flex-col md:flex-row items-center gap-8"
                key={section.id || index}
              >
                {isEven ? (
                  <>
                    <img src={imgSrc} alt={section.title} className="" />
                    <div className="BecamaAVolunterContentsSection flex-1">
                      <h3 className="">{section.title}</h3>
                      <p className="">{section.description}</p>
                      <div className="exploreVolunteerPage">
                        <a href={section.linkUrl || '#'} className="cursor-pointer">
                          {section.linkText || 'Explore'}
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="BecamaAVolunterContentsSection1 flex-1">
                      <h3 className="">{section.title}</h3>
                      <p className="">{section.description}</p>
                      <div className="exploreVolunteerPage1">
                        <a href={section.linkUrl || '#'} className="cursor-pointer">
                          {section.linkText || 'Explore'}
                        </a>
                      </div>
                    </div>
                    <img src={imgSrc} alt={section.title} className="" />
                  </>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
