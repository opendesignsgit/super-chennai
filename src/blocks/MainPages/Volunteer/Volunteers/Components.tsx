/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useEffect, useState } from 'react'
import { FormPopupComponent } from '../../SharedBlocks/FormPopup/Components'
import { usePathname } from 'next/navigation'

type VolunteerSection = {
  title: string
  description: string
  image: {
    url: string
    alt?: string
  }
  linkText: string
  linkUrl: string
  slug: string
}

type Props = {
  sectionTitle: string
  sectionDescription: string
  buttonText?: string
  volunteerSections: VolunteerSection[]
}

export default function VolunteerBecameSection({
  sectionTitle,
  sectionDescription,
  buttonText = 'Explore More',
}: Props) {
  const defaultImage = '/images/default-placeholder.png'

  const [volunteerSections, setvolunteers] = useState<VolunteerSection[]>([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/volunteer')
        const data = await res.json()

        if (!data?.docs?.length) {
          console.warn('No data found')
          return
        }
        const allvolunteers = data.docs.map((item: any) => ({
          id: item.id || item._id,
          title: item['Voluenteer title'] || item.title || 'Untitled',
          subtitle: item.subtitle || '',
          description: item.description || '',
          slug: item.slug || '',
          image: item.image || {},
        }))

        setvolunteers(allvolunteers)
      } catch (error) {
        console.error('Failed to fetch events:', error)
      }
    }

    fetchEvents()
  }, [])
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (volunteerSections.length === 0) return

    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100) // Slight delay to ensure elements are mounted
    }
  }, [pathname, volunteerSections])

  return (
    <div className="VolunterPageBecameVolunteerBg">
      <div className="VolunteerBecameavolunteer">
        <h3>{sectionTitle}</h3>
        <p>{sectionDescription}</p>
      </div>

      <div>
        <div className="container max-w-7xl mx-auto px-4">
          {volunteerSections.map((section, index) => {
            const imageUrl = section.image?.url || defaultImage
            const imageAlt = section.image?.alt || section.title

            const ImageComponent = (
              <img
                src={imageUrl}
                alt={imageAlt}
                style={{ objectFit: 'cover' }}
                onError={(e) => {
                  e.currentTarget.src = defaultImage
                }}
              />
            )

            return (
              <div className="DigitalSectionFLex" key={index} id={section.slug}>
                {index % 2 === 0 ? (
                  <>
                    {ImageComponent}
                    <div className="BecamaAVolunterContentsSection">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      <div className="exploreVolunteerPage">
                        <FormPopupComponent
                          heading="VOLUNTEER FOR SUPER CHENNAI"
                          buttonText={buttonText}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="BecamaAVolunterContentsSection1">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      <div className="exploreVolunteerPage1">
                        <FormPopupComponent
                          heading="VOLUNTEER FOR SUPER CHENNAI"
                          buttonText={buttonText}
                        />
                      </div>
                    </div>
                    {ImageComponent}
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
