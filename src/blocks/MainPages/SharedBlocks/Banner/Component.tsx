import React from 'react'
import './style.css'
import GlobalSearch from 'src/blocks/HomePage/GlobalSearch/Component'

type InvestBannerProps = {
  heading?: string
  image?: {
    url?: string
    alt?: string
    filename?: string
  }
  backgroundColor?: string
}

export default function MainPageBanner({
  heading,
  image,
  backgroundColor = 'gradient-1',
}: InvestBannerProps) {
  return (
    <div className={`InvestBgSection ${backgroundColor}`}>
      <div className="InvestMainContainer">
        <div className="InvestSectionBanner">
          <div className="InvestBannerImage">
            <img src={image?.url} alt={image?.alt || 'Banner'} />
          </div>
          <h3 className="InvestContent">{heading}</h3>
        </div>
      </div>
      {/* <GlobalSearch placeholderText={''} buttonText={'Search'} /> */}
    </div>
  )
}
