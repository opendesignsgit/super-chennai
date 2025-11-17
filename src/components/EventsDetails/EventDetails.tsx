import React from 'react'
import Image from 'next/image'
import './style.css'
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
  if (!data || !data.event) return null

  const formatDate = (dateStr: string) => {
    if (!dateStr) return ''
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'short',
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    }
    const date = new Date(dateStr)
    return date.toLocaleDateString(undefined, options)
  }

  const formatTime = (dateStr: string) => {
    if (!dateStr) return ''
    const date = new Date(dateStr)
    return date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })
  }

  const eventDetailsBlock = data.content?.root?.children?.find(
    (child: any) => child.type === 'block' && child.fields?.blockType === 'eventDetails',
  )
  const aboutParagraphs =
    eventDetailsBlock?.fields?.about?.root?.children?.filter(
      (child: any) => child.type === 'paragraph',
    ) || []

  const {
    title,
    image,
    category,
    artistRole,
    eventDate,
    singerName,
    artistDesignation,
    artistImage,
    details: { duration, ageLimit, language, genre, location } = {},
  } = data.event

  // const eventDescription =
  //   data.content?.root?.children
  //     ?.find((child: any) => child.type === 'block' && child.fields?.blockType === 'content')
  //     ?.fields?.columns?.[0]?.richText?.root?.children?.map((para: any) =>
  //       para.children.map((textNode: any) => textNode.text).join(''),
  //     )
  //     .join('\n') || ' not available.'

  return (
    <section className="EventsBanSec SecPadblock12">
      <div className="container max-w-7xl mx-auto">
        <div className="EventContBox flex">
          <div className="EventLeft">
            <h2>{title}</h2>
            <div className="EventBanImg">
              <Image
                src={image?.url || '/fallback-event.jpg'}
                alt={image?.alt || 'Event Image'}
                width={600}
                height={400}
                priority={false}
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div className="ebanimgbtn flex justify-between items-center mb-[5vh]">
              <div className="ebbmgiL flex">
                <h5>{category || 'Uncategorized'}</h5>
              </div>
            </div>

            <div className="event-about">
              <h3>About the Event</h3>
              {aboutParagraphs.map((para: any, index: number) => (
                <p key={index}>
                  {para.children.map((child: any, i: number) => child.text).join('')}
                </p>
              ))}
            </div>

            <div className="EventContBox">
              <h3>{artistRole || 'Artist Role'}</h3>
              <div className="ArtistsImg">
                <Image
                  src={artistImage?.url || '/fallback-artistImage.jpg'}
                  alt={artistRole || 'Artist'}
                  width={200}
                  height={200}
                  style={{ borderRadius: '8px' }}
                />
              </div>
              <h4 className="flex flex-col">
                <strong>{singerName}</strong>
                <small>{artistDesignation}</small>
              </h4>
            </div>
          </div>

          <div className="EventRight">
            <div className="evderibox">
              <div className="evderListbox">
                <div className="evderViewbox">
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image src={calendar.src} alt="Calendar" width={24} height={24} />
                    </div>
                    <p>{formatDate(eventDate)}</p>
                  </a>
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image src={time.src} alt="Time" width={24} height={24} />
                    </div>
                    <p>{formatTime(eventDate)}</p>
                  </a>
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image src={Eveduration.src} alt="Duration" width={24} height={24} />
                    </div>
                    <p>{duration || 'Duration not specified'}</p>
                  </a>

                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image src={age.src} alt="Duration" width={24} height={24} />
                    </div>
                    <p>{ageLimit || 'Duration not specified'}</p>
                  </a>

                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image src={lang.src} alt="Duration" width={24} height={24} />
                    </div>
                    <p>{language || 'Duration not specified'}</p>
                  </a>
                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image src={genres.src} alt="Duration" width={24} height={24} />
                    </div>
                    <p>{genre || 'Duration not specified'}</p>
                  </a>

                  <a className="evderlinks flex items-center">
                    <div className="iconsssec flex items-center">
                      <Image src={loc.src} alt="Duration" width={24} height={24} />
                    </div>
                    {/* <p>{location?.label || 'Location not specified'}</p> */}
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
