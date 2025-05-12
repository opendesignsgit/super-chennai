'use client'

import React from 'react'
import './style.css'

type VisitBannerProps = {
  title: string
  bannerImage?: {
    url?: string
  }
}

export const VisitBanner = ({ title, bannerImage }: VisitBannerProps) => {
  return (
    <div className="visitBgSection">
      <div className="VolunteerMainContainer">
        <div className="volunteerSectionBanner">
          <div className="VolunteerBannerImage">
            {bannerImage?.url && <img src={bannerImage.url} alt="Banner" />}
          </div>
          <h3 className="voluntterContent">{title}</h3>
        </div>
      </div>
    </div>
  )
}
