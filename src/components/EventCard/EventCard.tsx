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
  const eventTime = firstEvent?.details?.eventTime

  const href = `/events/${slug}`

  const formattedTime = eventTime
    ? new Date(`1970-01-01T${eventTime}`).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    : null

  return (
    <article className="eventsindividualcards bg-white shadow hover:shadow-lg transition-all w-full max-w-[300px] rounded-lg">
      {/* Image */}
      <div className="relative w-full aspect-[16/9]">
        {imageToUse && <Media resource={imageToUse} className="object-cover eventimageee" />}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2 eventsinglecard">
        {eventDate && (
          <span className="datimeContbox flex items-center text-sm text-gray-600 mb-2">
            {new Date(eventDate).toLocaleDateString()}
            {formattedTime && ` | ${formattedTime}`}
          </span>
        )}

        <h3 className="font-semibold text-lg eventheadingstyle">
          <Link href={href}>{title?.slice(0, 40)}....</Link>
        </h3>

        {firstEvent?.description && (
          <p className="text-sm text-muted-foreground line-clamp-3 eventpara">
            {firstEvent.description}
          </p>
        )}

        <Link href={href} className="text-primary font-medium text-sm viewwwwalll">
          View Event →
        </Link>
      </div>
    </article>
  )
}
