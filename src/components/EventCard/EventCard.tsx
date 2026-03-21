'use client'

import { Media } from '@/components/Media'
import Link from 'next/link'
import React from 'react'

export type EventCardData = {
  slug?: string
  title?: string
  heroImage?: any
  event?: {
    title?: string
    description?: string
    image?: any
    eventDates?: {
      date?: string
    }[]
    details?: {
      eventTime?: string
    }
  }
}

export const EventCard: React.FC<{ doc: EventCardData }> = ({ doc }) => {
  const { slug, title, heroImage, event } = doc || {}

  const firstEvent = event
  const imageToUse = firstEvent?.image || heroImage

  const eventDate = firstEvent?.eventDates?.[0]?.date

  const href = `/events/${slug}`

  return (
    <article className="bg-white shadow hover:shadow-lg transition-all w-full max-w-[300px] rounded-lg"
>
      {/* Image */}
      <div className="relative w-full aspect-[16/9]">
        {imageToUse && (
          <Media resource={imageToUse} className="object-cover w-full h-full" />
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {eventDate && (
          <p className="text-sm text-primary font-medium">
            {new Date(eventDate).toLocaleDateString()}
          </p>
        )}

        <h3 className="font-semibold text-lg">
          <Link href={href}>{title}</Link>
        </h3>

        {firstEvent?.description && (
          <p className="text-sm text-muted-foreground line-clamp-3">
            {firstEvent.description}
          </p>
        )}

        <Link
          href={href}
          className="text-primary font-medium text-sm"
        >
          View Event →
        </Link>
      </div>
    </article>
  )
}