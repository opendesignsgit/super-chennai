'use client'

import React from 'react'
import './style.css'

type VolunteerSection = {
  title: string
  description: string
  image: string
  linkText: string
  linkUrl: string
}

type Props = {
  sectionTitle: string
  sectionDescription: string
  volunteerSections: VolunteerSection[]
}

export default function VolunteerBecameSection({
  sectionTitle,
  sectionDescription,
  volunteerSections,
}: Props) {
  console.log('VolunteerBecameSection props:', {
    sectionTitle,
    sectionDescription,
    volunteerSections,
  })

  // ###########  THIS IS DEFULT IMAGE #################

  const defaultImage = '/images/default-placeholder.png'

  return (
    <div className="VolunterPageBecameVolunteerBg">
      <div className="VolunteerBecameavolunteer">
        <h3>{sectionTitle}</h3>
        <p>{sectionDescription}</p>
      </div>

      <div>
        <div className="container max-w-7xl mx-auto px-4">
          {volunteerSections.map((section, index) => (
            <div className="DigitalSectionFLex" key={index}>
              {index % 2 === 0 ? (
                <>
                  <img
                    src={section.image.url}
                    alt={section.image.alt || section.title}
                    onError={(e) => {
                      e.currentTarget.src = defaultImage
                    }}
                  />

                  <div className="BecamaAVolunterContentsSection">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                    <div className="exploreVolunteerPage">
                      <a href={section.linkUrl}>{section.linkText}</a>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="BecamaAVolunterContentsSection1">
                    <h3>{section.title}</h3>
                    <p>{section.description}</p>
                    <div className="exploreVolunteerPage1">
                      <a href={section.linkUrl}>{section.linkText}</a>
                    </div>
                  </div>
                   <img
                    src={section.image.url}
                    alt={section.image.alt || section.title}
                    onError={(e) => {
                      e.currentTarget.src = defaultImage
                    }}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
