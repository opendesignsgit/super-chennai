'use client'

import { Media } from '@/components/Media'
import Link from 'next/link'
import React, { useState } from 'react'

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

  const href = `/events-in-chennai/${slug}`

  const [showAll, setShowAll] = useState(false)

  const formattedTime = eventTime
    ? new Date(`1970-01-01T${eventTime}`).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    : null

  return (
    <div className="bg-white shadow hover:shadow-lg transition-all w-full max-w-[300px] rounded-lg">
      {/* Image */}
      <Link href={href}>
        <div className="relative w-full h-[200px] overflow-hidden">
          {imageToUse && (
            <img
              src={typeof imageToUse === 'string' ? imageToUse : imageToUse?.url}
              // alt={eventData?.title || title || 'Event'}
              className="h-full w-full object-cover rounded-tl-[10px] rounded-tr-[10px] transition-transform duration-500 ease-out hover:scale-110"
            />
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 space-y-2 eventsinglecard">
        {eventDate && (
          <span className="datimeContbox flex items-center text-sm text-gray-600 mb-2">
            {new Date(eventDate).toLocaleDateString()}
            {formattedTime && ` | ${formattedTime}`}
          </span>
        )}

        <h3 className="font-semibold text-lg eventheadingstyle">{title}</h3>

        {/* {firstEvent?.description && (
          <h4 className="EveItemDescrip text-gray-600 text-sm">{firstEvent.description}</h4>
        )} */}

        {firstEvent?.description && (
          <h4 className="EveItemDescrip text-gray-600 text-sm">
            {showAll || firstEvent.description.length <= 100
              ? firstEvent.description
              : firstEvent.description.substring(0, 100) + '...'}

            {firstEvent.description.length > 100 && (
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="ml-1 text-sm text-[#a44294] hover:underline cursor-pointer"
              >
                {showAll ? 'Show less' : 'Read more'}
              </button>
            )}
          </h4>
        )}

        {/* <Link href={href} className="text-primary font-medium text-sm viewwwwalll">
          View Event →
        </Link> */}
      </div>
    </div>
  )
}
