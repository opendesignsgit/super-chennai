'use client'

import React from 'react'

type MediaObject = {
  url?: string
  alt?: string
}

type PointItem = {
  id?: string
  text: string
}

type FoundationsProps = {
  title?: string
  image?: MediaObject | string
  paragraph1?: string
  paragraph2?: string
  highlightText?: string
  points?: PointItem[]
}

export default function AboutFoundationsComponent({
  title = 'Foundations of Modern Chennai',
  image = '/images/foundations-img.jpg',
  paragraph1 = 'The modern foundations of Chennai were laid on August 22, 1639, a date now proudly celebrated as Chennai Day. This moment marked the formal recognition of the region’s growth into an organized urban centre with expanding civic and economic importance.',
  paragraph2 = "By 1640, key developments had begun to shape the city's layout and identity. Chennai steadily grew by integrating nearby villages, evolving into a connected and planned cityscape.",
  highlightText = 'In the decades that followed, the city laid the groundwork for many firsts',
  points = [
    {
      text: 'India’s first municipal corporation was established here in 1688, and the second oldest in the world after London.',
    },
    {
      text: 'The country’s first railway terminal was set up at Royapuram in 1856.',
    },
  ],
}: FoundationsProps) {
  // Handle image URL whether it's a Payload Media object or string path
  const imageUrl = typeof image === 'object' && image?.url ? image.url : (image as string) || ''

  const imageAlt = typeof image === 'object' && image?.alt ? image.alt : 'foundations'

  return (
    <section className="foundations-section">
      <div className="container">
        {/* Left Side: Image */}
        <div className="image-container">{imageUrl && <img src={imageUrl} alt={imageAlt} />}</div>

        {/* Right Side: Content */}
        <div className="content">
          {title && <h2>{title}</h2>}
          {paragraph1 && <p>{paragraph1}</p>}
          {paragraph2 && <p>{paragraph2}</p>}
          {highlightText && <p className="bold">{highlightText}</p>}

          {/* Bullet Points */}
          {points && points.length > 0 && (
            <ul>
              {points.map((point, index) => (
                <li key={point.id || index}>{point.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}
