/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Media } from 'src/payload-types'
import './style.css'

type LinkType = {
  url?: string
  page?: {
    slug?: string
  }
}

type Props = {
  techImage: Media
  techTitle: string
  techDescription: string
  eduImage: Media
  eduTitle: string
  eduDescription: string
  techLink?: LinkType
  eduLink?: LinkType
}

const TwoColumnFeatureBlock: React.FC<Props> = ({
  techImage,
  techTitle,
  techDescription,
  eduImage,
  eduTitle,
  eduDescription,
  techLink,
  eduLink,
}) => {
  const getFinalLink = (link?: LinkType) =>
    link?.page?.slug ? `/pages/${link.page.slug}` : link?.url || null

  const techHref = getFinalLink(techLink)
  const eduHref = getFinalLink(eduLink)

  return (
    <div className="techEduMainRow">
      <div className="techEduImage1">
        {techHref ? (
          <Link href={techHref}>
            <div>
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
          </Link>
        ) : (
          <>
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
          </>
        )}
      </div>

      <div className="techEduImage2">
        {eduHref ? (
          <Link href={eduHref}>
            <div>
              {eduImage?.url && <img src={eduImage.url} alt={eduImage.alt || 'Education Image'} />}
              <div className="techEdu1Content2">
                <h4>{eduTitle}</h4>
                <p>{eduDescription}</p>
              </div>
            </div>
          </Link>
        ) : (
          <>
            {eduImage?.url && <img src={eduImage.url} alt={eduImage.alt || 'Education Image'} />}
            <div className="techEdu1Content2">
              <h4>{eduTitle}</h4>
              <p>{eduDescription}</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default TwoColumnFeatureBlock
