import React from 'react'
import Image from 'next/image'
// import './style.css'

import calendar from '../../assets/images/events/calendar.png'
import time from '../../assets/images/events/time.png'
import Eveduration from '../../assets/images/events/duration.png'
import age from '../../assets/images/events/language.png'
import genres from '../../assets/images/events/genre.png'
import lang from '../../assets/images/events/language.png'
import loc from '../../assets/images/events/location.png'

interface TrendingChennaiDetailsProps {
  data: any
}

const TrendingChennaiDetails: React.FC<TrendingChennaiDetailsProps> = ({ data }) => {

    console.log("trendingdata",data)
  // ✅ trendingChennai collection check
  if (!data || !data.trendingChennai) return null

  const trendingData = data.trendingChennai

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

  // ✅ About content from lexical editor
  const aboutParagraphs =
    data?.content?.root?.children?.filter((child: any) => child.type === 'paragraph') || []

  // ✅ Extract fields from trendingChennai
  const {
    title,
    image,
    description,
    singerName,
    artistDesignation,
    performerRole,
    eventDates,
    details,
    address,
    trendingChennaiCategory,
  } = trendingData

  // ✅ first event date
  const firstEventDate = eventDates?.[0]?.date

  // ✅ languages
  const languagesText =
    details?.languages?.map((lang: any) => lang?.name).join(', ') || 'Language not specified'

  // ✅ categories
  const categoryText =
    trendingChennaiCategory?.map((cat: any) => cat?.title).join(', ') || 'Uncategorized'

  return (
    <section className="EventsBanSec SecPadblock12">
      <div className="container max-w-7xl mx-auto">
        <div className="EventContBox flex">
          {/* LEFT */}
          <div className="EventLeft">
            <h2>{title}</h2>
            

            <div className="EventBanImg">
              <Image
                src={image?.url || '/fallback-event.jpg'}
                alt={title || 'Trending Chennai'}
                width={600}
                height={400}
                priority={false}
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="ebanimgbtn flex justify-between items-center mb-[5vh]">
              <div className="ebbmgiL flex">
                <h5>{categoryText}</h5>
              </div>
            </div>

            {/* ABOUT */}
            <div className="event-about">
              <h3>About the Event</h3>

              {/* Rich text content */}
              {aboutParagraphs.length > 0 ? (
                aboutParagraphs.map((para: any, index: number) => (
                  <p key={index}>{para.children?.map((child: any) => child.text).join('')}</p>
                ))
              ) : (
                <p>{description}</p>
              )}
            </div>

            {/* ARTIST */}
            {(singerName || performerRole) && (
              <div className="EventContBox">
                <h3>{performerRole || 'Performer'}</h3>

                <h4 className="flex flex-col mt-4">
                  <strong>{singerName}</strong>

                  <small>{artistDesignation}</small>
                </h4>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="EventRight">
            <div className="evderibox">
              <div className="evderListbox">
                <div className="evderViewbox">
                  {/* DATE */}
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image src={calendar.src} alt="Calendar" width={24} height={24} />
                    </div>

                    <p>{formatDate(firstEventDate)}</p>
                  </a>

                  {/* TIME */}
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image src={time.src} alt="Time" width={24} height={24} />
                    </div>

                    <p>{formatTime(details?.eventTime)}</p>
                  </a>

                  {/* DURATION */}
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image src={Eveduration.src} alt="Duration" width={24} height={24} />
                    </div>

                    <p>{details?.duration || 'Duration not specified'}</p>
                  </a>

                  {/* AGE */}
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image src={age.src} alt="Age Limit" width={24} height={24} />
                    </div>

                    <p>{details?.ageLimit || 'Age limit not specified'}</p>
                  </a>

                  {/* LANGUAGE */}
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image src={lang.src} alt="Language" width={24} height={24} />
                    </div>

                    <p>{languagesText}</p>
                  </a>

                  {/* GENRE */}
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image src={genres.src} alt="Genre" width={24} height={24} />
                    </div>

                    <p>{details?.genre || 'Genre not specified'}</p>
                  </a>

                  {/* LOCATION */}
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image src={loc.src} alt="Location" width={24} height={24} />
                    </div>

                    <p>{details?.location?.label || address || 'Location not specified'}</p>
                  </a>

                  {/* FREE ENTRY */}
                  {details?.isFree && (
                    <a className="evderlinks flex items-center">
                      <div className="iconsssec flex items-center">🎟️</div>

                      <p>Free Entry Available</p>
                    </a>
                  )}

                  {/* FAMILY FRIENDLY */}
                  {details?.familyFriendly && (
                    <a className="evderlinks flex items-center">
                      <div className="iconsssec flex items-center">👨‍👩‍👧‍👦</div>

                      <p>Family Friendly Event</p>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrendingChennaiDetails
