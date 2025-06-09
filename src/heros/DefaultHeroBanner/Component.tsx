import React from 'react'
import type { Page } from 'src/payload-types'
import './style.css'
import defaultImage from '../../assets/images/AccodomationBannerr.jpg'
import GlobalSearch from '@/blocks/HomePage/GlobalSearch/Component'
console.log(defaultImage)
interface ImageObject {
  url: string
}

interface Props {
  image?: string | ImageObject | null
  heading?: string | null
  backgroundColor?: string
}

export const DefaultHeroBanner: React.FC<Props> = ({ heading, image, backgroundColor }) => {
  const imageUrl =
    typeof image === 'object' && image?.url
      ? image.url
      : typeof image === 'string'
        ? `/api/media/${image}`
        : ''
  const bgClass = [backgroundColor || 'gradient-1']

  return (
    <div className={` VolunteerBgSection InvestBgSection notHome ${bgClass}`}>
      <div className="InvestMainContainer">
        <div className="InvestSectionBanner">
          <div className="InvestBannerImage">
            <img src={imageUrl || defaultImage.src} alt="Banner" />
          </div>
          <h3 className="InvestContent">{heading || 'Welcome'}</h3>
        </div>
      </div>
      <div className="notHomePageSearch">
        <GlobalSearch placeholderText={'Experience Chennai'} buttonText={'Search'} />
      </div>
    </div>
  )
}
