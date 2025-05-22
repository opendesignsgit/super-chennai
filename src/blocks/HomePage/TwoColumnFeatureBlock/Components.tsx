'use client'

import React from 'react'
import Image from 'next/image'
import { Media } from '@/payload-types'
import './style.css'

type Props = {
  techImage: Media
  techTitle: string
  techDescription: string
  eduImage: Media
  eduTitle: string
  eduDescription: string
}

const TwoColumnFeatureBlock: React.FC<Props> = ({
  techImage,
  techTitle,
  techDescription,
  eduImage,
  eduTitle,
  eduDescription,
}) => {
  return (
    <div className="techEduMainRow">
      <div className="techEduImage1">
        {techImage?.url && (
          <Image
            src={techImage.url}
            alt={techImage.alt || 'Tech Image'}
            width={1000}
            height={1000}
          />
        )}
        <div className="techEdu1Content1">
          <h4>{techTitle}</h4>
          <p>{techDescription}</p>
        </div>
      </div>

      <div className="techEduImage2">
        {eduImage?.url && (
          <Image
            src={eduImage.url}
            alt={eduImage.alt || 'Education Image'}
            width={1000}
            height={1000}
          />
        )}
        <div className="techEdu1Content2">
          <h4>{eduTitle}</h4>
          <p>{eduDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default TwoColumnFeatureBlock
