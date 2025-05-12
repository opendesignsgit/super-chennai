'use client'
import React from 'react'
import './style.css'

type LiveBannerProps = {
  heading?: string
  image?: {
    url?: string
    alt?: string
    filename?: string
  }
}

export default function LiveBannerSection({ heading, image }: LiveBannerProps) {
  if (!heading || !image?.url) {
    return (
      <div className="LiveBgSection notHome">
        <div className="VolunteerMainContainer">
          <div className="volunteerSectionBanner">
            <p style={{ color: 'red' }}>Error: Missing live banner heading or image data.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="LiveBgSection notHome">
      <div className="VolunteerMainContainer">
        <div className="volunteerSectionBanner">
          <div className="VolunteerBannerImage">
            <img src={image.url} alt={image.alt || 'Live Banner'} />
          </div>
          <h3 className="voluntterContent">{heading}</h3>
        </div>
      </div>
    </div>
  )
}
