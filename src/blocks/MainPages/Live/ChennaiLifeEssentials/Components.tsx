'use client'

import React from 'react'
import './style.css'

type EssentialItem = {
  text: string
  link: string
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
            {essentials.map((item, index) => (
              <a
                href={item.link}
                key={index}
                className="ChennaiEssentialimagecontainer"
              >
                {item.image?.url && (
                  <img src={item.image.url} alt={item.image.alt || item.text} />
                )}
                <div className="ChennaiEssentialOverlay">
                  <div className="ChennaiEssentialImageText">{item.text}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
