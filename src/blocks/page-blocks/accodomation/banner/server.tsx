'use client'

import React from 'react'
import './style.css'

type AccodomationBannerProps = {
  heading?: string
  image?: {
    url?: string
    alt?: string
    filename?: string
  }
  breadcrumb?: {
    label: string
    url: string
  }[]
}

export default function AccodomationBannerSection({
  heading,
  image,
  breadcrumb = [],
}: AccodomationBannerProps) {
  if (!heading || !image?.url) {
    return (
      <div className="accaodomationBannerSection">
        <p style={{ color: 'red' }}>Error: Missing heading or image</p>
      </div>
    )
  }

  return (
    <div className="accaodomationBannerSection">
      <div>
        <img src={image.url} alt={image.alt || 'Accodomation Banner'} />
      </div>
      <div className="accodoamationBannerContainer">
        <div className="accodoamationBannerText">
          <h3>{heading}</h3>
          <div className="breadCrum">
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                <a href={item.url}>{item.label.toUpperCase()}</a>
                {index < breadcrumb.length - 1 && ' - '}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
