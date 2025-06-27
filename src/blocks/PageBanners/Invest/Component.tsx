'use client'

import React from 'react'
import './style.css'

type InvestBannerProps = {
  heading?: string
  image?: {
    url?: string
    alt?: string
    filename?: string
  }
}

export default function InvestBannerSection({ heading, image }: InvestBannerProps) {
  if (!heading || !image?.url) {
    return (
      <div className="InvestBgSection notHome">
        <div className="InvestMainContainer">
          <div className="InvestSectionBanner">
            <p style={{ color: 'red' }}>Error: Missing invest banner heading or image data.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="InvestBgSection notHome">
      <div className="InvestMainContainer">
        <div className="InvestSectionBanner">
          <div className="InvestBannerImage">
            <img src={image.url} alt={image.alt || 'Invest Banner'} />
          </div>
          <h3 className="InvestContent">{heading}</h3>
        </div>
      </div>
    </div>
  )
}
