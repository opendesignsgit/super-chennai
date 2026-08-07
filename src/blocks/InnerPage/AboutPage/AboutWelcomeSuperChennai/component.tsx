'use client'

import React from 'react'

type PayloadMedia = {
  id: string
  url: string
  alt?: string
}

type ColumnItem = {
  id?: string
  paragraphs?: string
}

type WelcomeSuperChennaiProps = {
  heading?: string
  subheading?: string
  image?: PayloadMedia | string | null
  columns?: ColumnItem[]
}

export default function AboutWelcomeSuperChennaiComponentNew({
  heading = '',
  subheading = '',
  image = null,
  columns = [],
}: WelcomeSuperChennaiProps) {
  const imageUrl =
    typeof image === 'object' && image !== null ? image.url : typeof image === 'string' ? image : ''

  const imageAlt =
    typeof image === 'object' && image !== null
      ? image.alt || 'Welcome Super Chennai'
      : 'Welcome Super Chennai'

  // Early return protection if CMS has no content
  if (!heading && !subheading && !imageUrl && columns.length === 0) {
    return null
  }

  return (
    <section className="welcome-super-chennai">
      <div className="welcomesuperIn">
        {imageUrl && (
          <div className="welcome-images">
            <img src={imageUrl} alt={imageAlt} />
          </div>
        )}

        <div className="welcome-text">
          {heading && <h2 dangerouslySetInnerHTML={{ __html: heading }} />}

          {subheading && <h4>{subheading}</h4>}

          {columns.length > 0 && (
            <div className="welcome-columns">
              {columns.map((col, colIndex) => {
                const paragraphList = col.paragraphs
                  ? col.paragraphs.split('\n').filter((p) => p.trim())
                  : []

                return (
                  <div className="welcome-column" key={col.id || colIndex}>
                    {paragraphList.map((text, textIndex) => (
                      <p key={textIndex}>{text}</p>
                    ))}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
