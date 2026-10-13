'use client'

import React from 'react'
import Link from 'next/link'

type MediaAsset2026 = {
  url?: string
  alt?: string
  filename?: string
}

type EventCardItem = {
  id?: string
  title: string
  linkUrl: string
  cardMedia: MediaAsset2026 | string
  altText?: string
}

type EventsList2026Props = {
  eventsCards2026?: EventCardItem[]
}

export default function EventsList2026Component({
  eventsCards2026 = [
    {
      title: 'Majaa quiz',
      linkUrl: 'contest/majaa-quiz',
      cardMedia: '/images/maja-quiz-card-contest-card.jpeg',
      altText: 'Majaa quiz card',
    },
    {
      title: 'Summer Clicks - photography contest',
      linkUrl: 'contest/chennai-summer-photography-contest',
      cardMedia: '/images/summer-contest-card.jpeg',
      altText: 'Summer photography contest',
    },
    {
      title: 'Gen Z Content Creator',
      linkUrl: 'contest/gen-z-content-creators',
      cardMedia: '/images/event-genz-create.png',
      altText: 'Gen Z Content Creator',
    },
    {
      title: 'Hotshots Contest',
      linkUrl: 'contest/hotshots-photography-contest',
      cardMedia: '/images/events/contest-main.jpg',
      altText: 'Hotshots Contest',
    },
    {
      title: 'Photography Contest',
      linkUrl: 'contest/margazhi-month-photography-contest',
      cardMedia: '/images/events/margazhi-photography-c.jpg',
      altText: 'Margazhi Photography Contest',
    },
    {
      title: 'SuperChennai Quiz',
      linkUrl: 'contests/chennai-quiz',
      cardMedia: '/images/events/quiz-superchennai-inner.jpg',
      altText: 'SuperChennai Quiz',
    },
    {
      title: 'AI REIMAGINE',
      linkUrl: '/reimagine-chennai-AI-art-challenge',
      cardMedia: '/images/events/ai-art-challenge-thumbnail.jpg',
      altText: 'AI REIMAGINE',
    },
    {
      title: 'CAR TREASURE HUNT',
      linkUrl: '/car-treasure-hunt',
      cardMedia: '/images/events/car-rally.jpg',
      altText: 'CAR TREASURE HUNT',
    },
    {
      title: 'NAMMA STORIES',
      linkUrl: '/namma-stories',
      cardMedia: '/images/events/namma-stories-detail.jpg',
      altText: 'NAMMA STORIES',
    },
  ],
}: EventsList2026Props) {
  // Safe Image URL Resolution (Payload Upload Object vs Static Asset path)
  const extractAssetUrl = (asset: MediaAsset2026 | string | any) => {
    if (!asset) return ''

    if (typeof asset === 'object' && asset !== null) {
      if (asset.url) {
        return asset.url
      }
    }

    if (typeof asset === 'string') {
      return asset
    }

    return ''
  }

  // Safe Link URL Resolver
  const formatLinkUrl = (url?: string) => {
    if (!url) return '#'
    if (url.startsWith('http') || url.startsWith('/')) {
      return url
    }
    return `/${url}`
  }

  return (
    <section className="EventsListSec SecPadblock12 nammaStoriesNewsLtter !pt-7">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap gap-6 justify-center superchennaiEventsMainContainer">
          {eventsCards2026?.map((card, idx) => {
            const imageSrc = extractAssetUrl(card.cardMedia)
            const targetHref = formatLinkUrl(card.linkUrl)

            return (
              <Link
                key={card.id || idx}
                className="superchennaiEventsSection group block transition-transform duration-300 hover:-translate-y-1"
                href={targetHref}
              >
                <div
                  className="flex flex-col items-center text-center"
                  style={{ overflow: 'hidden' }}
                >
                  <img
                    src={imageSrc}
                    alt={card.altText || card.title}
                    className="rounded-xl mb-3 object-cover shadow-sm group-hover:shadow-md transition-shadow"
                  />
                  <p className="text-lg font-medium text-gray-800 group-hover:text-[#a44294] transition-colors">
                    {card.title}
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
