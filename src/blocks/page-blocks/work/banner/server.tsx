'use client'

import React from 'react'
import '../../work/style.css'

type WorkBannerProps = {
  heading?: string
  image?: {
    url?: string
    alt?: string
    filename?: string
  }
}

export default function WorkBannerBlock({ heading, image }: WorkBannerProps) {
  console.log('Work Banner Block:')
  console.log('Heading:', heading)
  console.log('Image URL:', image?.url)
  console.log('Image Alt:', image?.alt)
  console.log('Image Filename:', image?.filename)

  if (!heading || !image?.url) {
    return (
      <div className="VolunteerBgSection">
        <div className="VolunteerMainContainer">
          <div className="volunteerSectionBanner">
            <p style={{ color: 'red' }}>Error: Missing work banner heading or image data.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="VolunteerBgSection">
      <div className="VolunteerMainContainer">
        <div className="volunteerSectionBanner">
          <div className="VolunteerBannerImage">
            <img src={image.url} alt={image.alt || 'Work Banner'} />
          </div>
          <h3 className="voluntterContent">{heading}</h3>
        </div>
      </div>
    </div>
  )
}
