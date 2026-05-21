'use client'

import React from 'react'
import Image from 'next/image'

import calendar from '../../assets/images/events/calendar.png'
import time from '../../assets/images/events/time.png'
import Eveduration from '../../assets/images/events/duration.png'
import age from '../../assets/images/events/language.png'
import genres from '../../assets/images/events/genre.png'
import lang from '../../assets/images/events/language.png'
import loc from '../../assets/images/events/location.png'

interface EventDetailsProps {
  data: any
}

const EventDetails: React.FC<EventDetailsProps> = ({ data }) => {
  if (!data || !data.cricketScore) return null

  const formatDate = (dateStr: string) => {
    if (!dateStr) return ''

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }

    return new Date(dateStr).toLocaleDateString(undefined, options)
  }

  const formatTime = (dateStr: string) => {
    if (!dateStr) return ''

    return new Date(dateStr).toLocaleTimeString(undefined, {
      hour: 'numeric',
      minute: '2-digit',
    })
  }

  // CONTENT PARAGRAPHS
  const aboutParagraphs =
    data?.content?.root?.children?.filter(
      (child: any) => child.type === 'paragraph',
    ) || []

  // CRICKET SCORE DATA
  const cricketData = data.cricketScore

  const {
    title,
    description,
    IPLimage,
    matchDetails,
  } = cricketData

  const {
    duration,
    matchTime,
    ageLimit,
    languages,
    matchType,
    stadiumLocation,
  } = matchDetails || {}

  return (
    <section className="EventsBanSec SecPadblock12">
      <div className="container max-w-7xl mx-auto">
        <div className="EventContBox flex">
          {/* LEFT SIDE */}
          <div className="EventLeft">
            <h2>{title}</h2>

            <div className="EventBanImg">
              <Image
                src={IPLimage?.url || '/fallback-event.jpg'}
                alt={title || 'IPL Match'}
                width={700}
                height={450}
                priority={false}
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="ebanimgbtn flex justify-between items-center mb-[5vh]">
              <div className="ebbmgiL flex">
                <h5>{matchType || 'IPL Match'}</h5>
              </div>
            </div>

            {/* ABOUT */}
            <div className="event-about">
              <h3>About the Match</h3>

              {aboutParagraphs.length > 0 ? (
                aboutParagraphs.map((para: any, index: number) => (
                  <p key={index}>
                    {para.children
                      ?.map((child: any) => child.text)
                      .join('')}
                  </p>
                ))
              ) : (
                <p>{description}</p>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="EventRight">
            <div className="evderibox">
              <div className="evderListbox">
                <div className="evderViewbox">

                  {/* DATE */}
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image
                        src={calendar.src}
                        alt="Calendar"
                        width={24}
                        height={24}
                      />
                    </div>

                    <p>{formatDate(matchTime)}</p>
                  </a>

                  {/* TIME */}
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image
                        src={time.src}
                        alt="Time"
                        width={24}
                        height={24}
                      />
                    </div>

                    <p>{formatTime(matchTime)}</p>
                  </a>

                  {/* DURATION */}
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image
                        src={Eveduration.src}
                        alt="Duration"
                        width={24}
                        height={24}
                      />
                    </div>

                    <p>{duration || 'Not specified'}</p>
                  </a>

                  {/* AGE LIMIT */}
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image
                        src={age.src}
                        alt="Age Limit"
                        width={24}
                        height={24}
                      />
                    </div>

                    <p>{ageLimit || 'No age limit'}</p>
                  </a>

                  {/* LANGUAGES */}
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image
                        src={lang.src}
                        alt="Languages"
                        width={24}
                        height={24}
                      />
                    </div>

                    <p>
                      {languages?.length
                        ? languages.map((lang: any) => lang.name).join(', ')
                        : 'Language not specified'}
                    </p>
                  </a>

                  {/* MATCH TYPE */}
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image
                        src={genres.src}
                        alt="Match Type"
                        width={24}
                        height={24}
                      />
                    </div>

                    <p>{matchType || 'IPL Match'}</p>
                  </a>

                  {/* LOCATION */}
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image
                        src={loc.src}
                        alt="Location"
                        width={24}
                        height={24}
                      />
                    </div>

                    <p>
                      {stadiumLocation?.label ||
                        stadiumLocation?.city ||
                        'Location not specified'}
                    </p>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventDetails