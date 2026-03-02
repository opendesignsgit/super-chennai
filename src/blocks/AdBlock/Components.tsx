'use client'

import React from 'react'

type AdBlockProps = {
  ad: any
  position?: 'inline' | 'left' | 'right' | 'top' | 'bottom'
}

const positionClasses: Record<string, string> = {
  inline: 'my-6 flex justify-center',
  top: 'mb-6 flex justify-center',
  bottom: 'mt-6 flex justify-center',
  left: 'float-left mr-6 my-4 max-w-[300px]',
  right: 'float-right ml-6 my-4 max-w-[300px]',
}

const AdBlockComponent: React.FC<AdBlockProps> = ({ ad, position = 'inline' }) => {
  if (!ad || ad.status !== 'active') return null

  // Date validation
  const now = new Date()
  if (ad.startDate && new Date(ad.startDate) > now) return null
  if (ad.endDate && new Date(ad.endDate) < now) return null

  const wrapperClass = positionClasses[position]

  // === IMAGE / GIF ===
  if (ad.mediaType === 'image' || ad.mediaType === 'gif') {
    return (
      <div className={wrapperClass}>
        <a href={ad.targetUrl} target="_blank" rel="noreferrer">
          <img src={ad.media?.url} alt={ad.altText || ad.title} className="w-full" />
        </a>
      </div>
    )
  }

  // === VIDEO ===
  if (ad.mediaType === 'video') {
    return (
      <div className={wrapperClass}>
        <video src={ad.mediaUrl} autoPlay muted loop playsInline className="w-full" />
      </div>
    )
  }

  // === HTML / ADSENSE ===
  if (ad.mediaType === 'html') {
    return <div className={wrapperClass} dangerouslySetInnerHTML={{ __html: ad.mediaUrl }} />
  }

  return null
}

export default AdBlockComponent
