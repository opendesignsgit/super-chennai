'use client'

import React from 'react'

type MediaObject = {
  url?: string
  alt?: string
}

type VisionMissionCard = {
  id?: string
  title: string
  description: string
  icon?: MediaObject | string
}

type VisionMissionProps = {
  cards?: VisionMissionCard[]
}

export default function VisionMissionComponent({
  cards = [
    {
      title: 'Vision',
      description:
        "To position Chennai as one of the world's most liveable, lovable, and future-ready cities - where innovation, culture, and community thrive together.",
      icon: '/images/mission-icon.png',
    },
    {
      title: 'Mission',
      description:
        "To showcase Chennai's identity, connect people to opportunities, and build a platform that inspires pride, progress, and participation.",
      icon: '/images/vission-icon.png',
    },
  ],
}: VisionMissionProps) {
  if (!cards || cards.length === 0) return null

  return (
    <div className="flex flex-col container max-w-7xl mx-auto px-4 vissionMission">
      <div className="vision-mission-container">
        {cards.map((card, idx) => {
          // Extract image URL whether Payload passes a Media object or static string path
          const iconUrl =
            typeof card.icon === 'object' && card.icon?.url
              ? card.icon.url
              : (card.icon as string) || ''

          const iconAlt =
            typeof card.icon === 'object' && card.icon?.alt ? card.icon.alt : `${card.title} Icon`

          return (
            <div key={card.id || idx} className="vision-mission-card">
              {iconUrl && <img src={iconUrl} alt={iconAlt} className="vision-mission-icon" />}
              <h2 className="vision-mission-title">{card.title}</h2>
              <p className="vision-mission-text">{card.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
