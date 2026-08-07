'use client'

import React from 'react'

type PayloadMedia = {
  id: string
  url: string
  alt?: string
}

type LeftImageRightSectionProps = {
  title?: string
  description?: string
  image?: PayloadMedia | string | null
  imageAlt?: string
  themePattern?: string
}

export default function LeftImageRightSectionComponent({
  title = '',
  description = '',
  image = null,
  imageAlt = '',
  themePattern = 'pattern-a',
}: LeftImageRightSectionProps) {
  const imageUrl =
    typeof image === 'object' && image !== null ? image.url : typeof image === 'string' ? image : ''

  const finalAlt =
    imageAlt ||
    (typeof image === 'object' && image !== null ? image.alt : '') ||
    title ||
    'SEZ Section'

  if (!title && !description && !imageUrl) {
    return null
  }

  return (
    <section
      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 bg-white whitebgsec ${themePattern}`}
    >
      {imageUrl && (
        <div className="imgLeft">
          <img src={imageUrl} alt={finalAlt} />
        </div>
      )}

      {(title || description) && (
        <div className="imgText flex items-center">
          <div className="imgcolTitle bg-[#682865] relative">
            {title && (
              <h2 className="flex flex-col text-white">
                <small>{title}</small>
              </h2>
            )}
            {description && <p>{description}</p>}
          </div>
        </div>
      )}
    </section>
  )
}
