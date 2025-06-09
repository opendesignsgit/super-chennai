'use client'
import React from 'react'
import Link from 'next/link'

type PageReference = {
  slug?: string
}

type EssentialItem = {
  text: string
  page?: PageReference | string
  image?: {
    url?: string
    alt?: string
  }
}

type ChennaiLifeEssentialsProps = {
  heading?: string
  description?: string
  essentials?: EssentialItem[]
}

export default function ChennaiLifeEssentials({
  heading,
  description,
  essentials = [],
}: ChennaiLifeEssentialsProps) {
  return (
    <div className="ChennaiEssentisalMainContainer">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="chennaiLifeEssentialHeading">
          <h3>{heading}</h3>
          <p>{description}</p>
        </div>

        <div className="ChennaiContainerLiveEssential">
          <div className="ImageConatinerLiveEssential">
            {essentials.map((item, index) => {
              let href = '#'
              if (typeof item.page === 'object' && item.page?.slug) {
                href = `/visits/${item.page.slug}`
              }

              return (
                <Link href={href} key={index} className="ChennaiEssentialimagecontainer">
                  {item.image?.url && (
                    <img src={item.image.url} alt={item.image.alt || item.text} />
                  )}
                  <div className="ChennaiEssentialOverlay">
                    <div className="ChennaiEssentialImageText">{item.text}</div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
