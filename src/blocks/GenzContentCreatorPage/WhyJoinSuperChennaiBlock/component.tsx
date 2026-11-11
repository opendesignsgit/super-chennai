'use client'

import React from 'react'

type BenefitCard = {
  id?: string
  cardIcon?: { url?: string } | string
  cardTitle: string
  cardText: string
  themeColor?: 'blue' | 'pink'
}

type WhyJoinProps = {
  mainTitle?: string
  sectionDescription?: string
  benefitsCards?: BenefitCard[]
}

export default function WhyJoinSuperChennaiSection(props: WhyJoinProps) {
  const cards = props.benefitsCards || []

  const getImageUrl = (imgObj: any, fallback: string) => {
    if (!imgObj) return fallback
    if (typeof imgObj === 'object' && imgObj?.url) return imgObj.url
    if (typeof imgObj === 'string') return imgObj
    return fallback
  }

  return (
    <section className="sc-benefits-section">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <header className="sc-header mb-12 text-center max-w-3xl mx-auto">
          <h2 className="sc-main-title text-3xl lg:text-4xl font-extrabold mb-4">
            WHY JOIN <span className="sc-text-blue text-blue-500">SUPER</span>{' '}
            <span className="sc-text-pink text-pink-500">CHENNAI?</span>
          </h2>
          <p className="sc-description text-gray-600 text-lg leading-relaxed">
            We&lsquo;re creating a fresh digital movement powered by Gen Z creators who{' '}
            <strong className="text-gray-900">genuinely live the city.</strong> Whether you love
            street culture, fashion, cinema, hidden places, memes, or storytelling - this platform
            is for you.
          </p>
        </header>

        {/* Cards Grid */}
        <div className="sc-cards-grid">
          {cards.map((card, index) => {
            const isPink = card.themeColor === 'pink'
            const fallbackIcon =
              index === 0
                ? '/images/genz/Group18.svg'
                : index === 1
                  ? '/images/genz/svg-img1.svg'
                  : index === 2
                    ? '/images/genz/Group16.svg'
                    : '/images/genz/location-icon.svg'

            const iconUrl = getImageUrl(card.cardIcon, fallbackIcon)

            return (
              <div
                key={card.id || index}
                className={`sc-card ${
                  isPink ? 'sc-border-pink border-pink-200' : 'sc-border-blue border-blue-200'
                }`}
              >
                <div className={`sc-icon-wrapper ${isPink ? 'sc-bg-pink ' : 'sc-bg-blue'}`}>
                  <img src={iconUrl} alt={card.cardTitle} className="" />
                </div>
                <h3
                  className={`sc-card-title text-xl font-bold mb-3 ${
                    isPink ? 'sc-text-pink text-pink-600' : 'sc-text-blue text-blue-600'
                  }`}
                >
                  {card.cardTitle}
                </h3>
                <p className="sc-card-text text-gray-600 leading-relaxed text-sm">
                  {card.cardText}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
