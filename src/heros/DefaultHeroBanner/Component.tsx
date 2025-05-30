import React from 'react'
import Image from 'next/image'
import type { Page } from '@/payload-types'
import './style.css'

type Props = Page['hero']

export const DefaultHeroBanner: React.FC<Props> = ({ heading, image, backgroundColor }) => {
  const imageUrl =
    typeof image === 'object' && image?.url
      ? image.url
      : typeof image === 'string'
        ? `/api/media/${image}`
        : ''
  const bgClass = [backgroundColor || 'gradient-1']

  return (
    <div className={`InvestBgSection ${bgClass}`}>
      <div className="InvestMainContainer">
        <div className="InvestSectionBanner">
          <div className="InvestBannerImage">
            <img src={imageUrl} alt={imageUrl || 'Banner'} />
             {/* <Image
                src={imageUrl}
                alt={heading || 'Banner'}
                fill
                sizes="100vw"
              /> */}
          </div>
          {heading && <h1 className="InvestContent">{heading}</h1>}
        </div>
      </div>
    </div>
  )
}
