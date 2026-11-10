'type client'

import React from 'react'

type MediaType = {
  id?: string | number
  url?: string
  alt?: string
  filename?: string
}

type TickerItem = {
  id?: string | number
  text?: string
  icon?: MediaType | string | null
}

type Props = {
  items?: TickerItem[]
  [key: string]: any
}

export default function GoluMarqueeTickerBlockComponent(props: Props) {
  const rawItems = Array.isArray(props.items) ? props.items : []

  const getMediaUrl = (imgField: MediaType | string | null | undefined) => {
    if (!imgField) return ''
    if (typeof imgField === 'object' && 'url' in imgField) {
      return (imgField as MediaType).url || ''
    }
    if (typeof imgField === 'string') {
      return imgField
    }
    return ''
  }

  const items = rawItems
    .map((item, index) => ({
      id: item.id || index,
      text: item.text || '',
      icon: getMediaUrl(item.icon),
    }))
    .filter((item) => item.text !== '')

  // Fallback items if CMS is empty
  const displayItems =
    items.length > 0
      ? items
      : [{ id: 1, text: 'Super Chennai Golu Contest', icon: '/images/golu-logo/akshayakalapa.png' }]

  return (
    <div className="marquee-section">
      <div className="marquee-container">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="marquee-content">
            {displayItems.map((item, index) => (
              <React.Fragment key={index}>
                <div className="marquee-item">
                  <img src={item.icon} alt={item.text} className="marquee-icon-img" />
                  <span className="marquee-text">{item.text}</span>
                </div>
                <span className="marquee-dot">•</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
