/* eslint-disable @next/next/no-html-link-for-pages */





'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import './style.css'

interface EventDetailsProps {
  data: any
}

const API_URL = process.env.NEXT_PUBLIC_SERVER_URL || ''
const EventDetails: React.FC<EventDetailsProps> = ({ data }) => {
  const [showDatesModal, setShowDatesModal] = useState(false)
  if (!data) return null

  console.log("event detail data",data)
  const main = data.event || data
  const {
    title,
    description,
    image,
    singerName,
    artistDesignation,
    eventDates = [],
    link,
    address,
    details = {},
    eventsCategory = [],
    content,
    linkbutton,
  } = main

  console.log('FULL PAYLOAD EVENT:', data)
  console.log('MAIN EVENT:', main)
  console.log('EVENT DETAILS:', details)

  // Image URL
  const getImageUrl = (media: any) => {
    if (!media?.url) return '/fallback-event.jpg'

    if (media.url.startsWith('http')) {
      return media.url
    }

    return `${API_URL}${media.url}`
  }
  const imageUrl = getImageUrl(image)
  const locationLabel = details?.location?.label || null
  const ageLimit = details?.ageLimit || null
  const languages = Array.isArray(details?.language)? details.language.join(', ')  : details?.language || null
  const genre = details?.genre || null
  const duration = details?.duration || null
  const eventTime = details?.eventTime || null
  const isFree = details?.isFree ? 'Free Entry' : null
  const familyFriendly = details?.familyFriendly  ? 'Family Friendly'   : null
  const categories = Array.isArray(eventsCategory)
    ? eventsCategory
        .map((category: any) =>
          typeof category === 'object'
            ? category?.title?.trim()
            : category,
        )
        .filter(Boolean)
        .join(', ')
    : ''
  const formatDate = (date: string) => {
    if (!date) return ''
    return new Date(date).toLocaleString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  }
  const formatTime = (time: string) => {
    if (!time) return ''
    const date = new Date(time)
    if (!Number.isNaN(date.getTime())) {
      return date.toLocaleTimeString('en-IN', {
        hour: 'numeric',
        minute: '2-digit',
      })
    }
    return time
  }
  const sortedDates = Array.isArray(eventDates)
    ? [...eventDates].sort(
        (a: any, b: any) =>
          new Date(a.date).getTime() - new Date(b.date).getTime(),
      )
    : []
  const getRichText = (node: any): string => {
    if (!node) return ''
    if (node.type === 'text') {
      return node.text || ''
    }

    if (Array.isArray(node.children)) {
      return node.children.map(getRichText).join('')
    }

    return ''
  }

  const contentChildren = content?.root?.children || []

  const renderContent = (node: any, index: number) => {
    if (node.type === 'paragraph') {
      return (
        <p key={index}>
          {getRichText(node)}
        </p>
      )
    }

    if (node.type === 'heading') {
      return (
        <h4 key={index}>
          {getRichText(node)}
        </h4>
      )
    }

    if (node.type === 'list') {
      const ListTag = node.listType === 'number' ? 'ol' : 'ul'

      return (
        <ListTag key={index}>
          {node.children?.map((item: any, i: number) => (
            <li key={i}>{getRichText(item)}</li>
          ))}
        </ListTag>
      )
    }

    return null
  }

  return (
    <>
      {/* EVENT BANNER */}

      <section className="accaodomationBannerSection">
        <div>
          <Image
            src={imageUrl}
            alt={title || 'Event'}
            width={1600}
            height={500}
            className="w-full h-[400px] object-cover"
          />
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText z-10">
            <h1>{title || 'Super Chennai Events'}</h1>
            <div className="breadCrum z-10">
              <a href="/">Home</a> -{' '}
              <a href="/chennai-events">Events</a>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT CONTENT */}

      <section className="EventsBanSec py-12 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4 md:px-8">
          <div className="EventContBox flex flex-col lg:flex-row gap-8">
            <div className="EventLeft flex-1">
              <h2>{title}</h2>
              {(singerName || artistDesignation) && (
                <p className="text-pink-700 text-sm mb-2">
                  {singerName}
                  {artistDesignation && ` – ${artistDesignation}`}
                </p>
              )}
              <div className="EventBanImg mb-6">
                <Image
                  src={imageUrl}
                  alt={title || 'Event Image'}
                  width={900}
                  height={550}
                  className="w-full rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {categories && (
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-md text-sm">
                    {categories}
                  </span>
                )}
                {isFree && (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-md text-sm">
                    {isFree}
                  </span>
                )}
                {familyFriendly && (
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-md text-sm">
                    {familyFriendly}
                  </span>
                )}

              </div>
              <div className="EventContBox mb-10">
                <h3 className="text-lg font-semibold mb-2">
                  About The Event
                </h3>
                <div className="text-gray-700 text-sm">
                  {contentChildren.map(renderContent)}
                </div>

                {description && (
                  <p className="mt-3">{description}</p>
                )}

              </div>
            </div>

            <div className="EventRight w-full lg:w-[320px] bg-white rounded-lg shadow p-5 h-max">

              <h4 className="text-lg font-semibold mb-3">
                Event Details
              </h4>

              <div className="space-y-3">

              

                {sortedDates.length > 0 && (
                  <>
                    <InfoRow
                      icon="/images/events/calendar.png"
                      label={formatDate(sortedDates[0].date)}
                    />

                    {sortedDates.length > 1 && (
                      <button
                        onClick={() => setShowDatesModal(true)}
                        className="text-sm text-[#a44294] underline ml-8"
                      >
                        View More Dates ({sortedDates.length - 1} more)
                      </button>
                    )}
                  </>
                )}

              
                {eventTime && (
                  <InfoRow
                    icon="/images/events/time.png"
                    label={formatTime(eventTime)}
                  />
                )}

            

                {duration && (
                  <InfoRow
                    icon="/images/events/duration.png"
                    label={`Duration: ${duration}`}
                  />
                )}

                {ageLimit && (
                  <InfoRow
                    icon="/images/events/age_limit.png"
                    label={`Age Limit: ${ageLimit}`}
                  />
                )}

                {/* LANGUAGE */}

                {languages && (
                  <InfoRow
                    icon="/images/events/language.png"
                    label={`Languages: ${languages}`}
                  />
                )}

                {/* GENRE */}

                {genre && (
                  <InfoRow
                    icon="/images/events/genre.png"
                    label={genre}
                  />
                )}

                {/* LOCATION */}

                {locationLabel && (
                  <InfoRow
                    icon="/images/events/location.png"
                    label={locationLabel}
                  />
                )}

                {/* ADDRESS */}

                {address && (
                  <InfoRow
                    icon="/images/events/location.png"
                    label={address}
                  />
                )}

              </div>

              {/* EXTERNAL BOOKING LINK */}

              {link && (
                <div className="flex justify-center mt-6">

                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-medium transition capitalize"
                  >
                    {linkbutton?.trim() || 'View More'}
                  </a>

                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* MULTIPLE DATES MODAL */}

      {showDatesModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[999]">

          <div className="bg-white p-5 rounded-lg shadow-lg w-[90%] max-w-md">

            <h3 className="text-lg font-semibold mb-3">
              Event Dates
            </h3>

            <div className="max-h-[300px] overflow-y-auto space-y-2">

              {sortedDates.map((date: any, index: number) => (
                <p
                  key={index}
                  className="text-gray-700 text-sm border-b pb-2"
                >
                  {formatDate(date.date)}
                </p>
              ))}

            </div>

            <button
              onClick={() => setShowDatesModal(false)}
              className="w-full bg-[#a44294] text-white mt-4 py-2 rounded-lg font-medium"
            >
              Close
            </button>

          </div>
        </div>
      )}

    </>
  )
}

function InfoRow({
  icon,
  label,
}: {
  icon: string
  label: string
}) {
  if (!label) return null

  return (
    <div className="flex items-center gap-3 border-b border-gray-100 pb-2">
      <Image
        src={icon}
        alt=""
        width={20}
        height={20}
        className="object-contain"
      />

      <p className="text-gray-700 text-sm">
        {label}
      </p>

    </div>
  )
}

export default EventDetails


