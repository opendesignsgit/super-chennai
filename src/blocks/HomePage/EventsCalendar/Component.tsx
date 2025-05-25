'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import './style.css'
import NoData from '@/components/NoData'
import { RichText } from '@payloadcms/richtext-lexical/react'

type RichContent = {
  fields?: {
    about?: any
  }
}

type EventType = {
  id?: string | number
  event?: {
    description?: string
    category?: string
    address?: string
    image?: { url?: string }
  }
  title?: string
  content?: string | RichContent
  description?: string
  category?: string
  address?: string
  image?: string
  eventDate?: string
  isFeatured?: boolean | string | number
  year?: number
  month?: string
  date?: number
  time?: string
}

type Props = {
  heading: string
  description: string
}

export const EventsCalendarBlock: React.FC<Props> = ({ heading, description }) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [x, setX] = useState(0)

  const [allEvents, setAllEvents] = useState<EventType[]>([])
  const [isFeaturedEvent, setIsFeaturedEvent] = useState<EventType | null>(null)

  const slide = (direction: 'left' | 'right') => {
    const cardWidth = 300
    const visibleWidth = 1200
    const maxSlide = -(allEvents.length * cardWidth - visibleWidth)

    setX((prevX) =>
      direction === 'left' ? Math.min(prevX + cardWidth, 0) : Math.max(prevX - cardWidth, maxSlide),
    )
  }

  const getWeekday = (year?: number, monthStr?: string, date?: number) => {
    if (!year || !monthStr || !date) return ''
    const months = [
      'january',
      'february',
      'march',
      'april',
      'may',
      'june',
      'july',
      'august',
      'september',
      'october',
      'november',
      'december',
    ]
    const monthIndex = months.indexOf(monthStr.toLowerCase())
    if (monthIndex < 0) return ''
    const eventDate = new Date(year, monthIndex, date)
    return eventDate.toLocaleDateString('default', { weekday: 'long' })
  }

  function parseEventDate(eventDateStr?: string) {
    if (!eventDateStr) return null
    const parsedTimestamp = Date.parse(eventDateStr)
    if (isNaN(parsedTimestamp)) {
      console.warn('Invalid eventDate:', eventDateStr)
      return null
    }

    const dateObj = new Date(parsedTimestamp)
    const month = dateObj.toLocaleString('default', { month: 'long' }).toLowerCase()

    const time = dateObj.toLocaleTimeString(undefined, {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })

    return {
      year: dateObj.getFullYear(),
      month,
      date: dateObj.getDate(),
      time,
    }
  }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/events')
        const data = await res.json()

        if (!data?.docs?.length) {
          console.warn('No data found')
          return
        }

        const enrichedEvents: EventType[] = data.docs.map((item: any) => {
          const dateParts = parseEventDate(item.event?.eventDate)
          return {
            id: item.id || item._id || undefined,
            title: item.title || item.event?.title || 'Untitled Event',
            description: item.event?.description || '',
            category: item.event?.category || 'General',
            address: item.event?.address || '',
            image: item.event?.image?.url || '',
            isFeatured: item.isFeatured,
            eventDate: item.event?.eventDate,
            content: item.content,
            ...dateParts,
            event: item.event, // keep original event object for detailed access
          }
        })

        setAllEvents(enrichedEvents)

        const featured = enrichedEvents.find(
          (e) => e.isFeatured === true || e.isFeatured === 'true' || e.isFeatured === 1,
        )
        setIsFeaturedEvent(featured || null)
      } catch (error) {
        console.error('Failed to fetch events:', error)
      }
    }

    fetchEvents()
  }, [])

  return (
    <div className="EventsCalendarMainSection">
      <div className="container max-w-7xl mx-auto px-4 EventsCalendarTitleMain">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>

      <div className="eventsCalendarMainSectionConatiner container max-w-7xl mx-auto px-4">
        {isFeaturedEvent ? (
          <div className="CalendarEventsFirst">
            {isFeaturedEvent.event?.image?.url && (
              <img
                src={isFeaturedEvent.event.image.url}
                alt={isFeaturedEvent.title || 'Featured event'}
              />
            )}

            <div className="MainCalendarSectionEvent">
              {isFeaturedEvent.month && isFeaturedEvent.year && (
                <h4>
                  <span>
                    {isFeaturedEvent.month.charAt(0).toUpperCase() + isFeaturedEvent.month.slice(1)}{' '}
                    - {isFeaturedEvent.year}
                  </span>
                  {isFeaturedEvent.address?.trim() && <div>{isFeaturedEvent.address.trim()}</div>}
                </h4>
              )}

              <div className="secondSectionEventsCalendar">
                <div className="EventsCalendarDateandTime">
                  <p className="dateEvents">{isFeaturedEvent.date}</p>
                  <p className="dayEvents">
                    {getWeekday(isFeaturedEvent.year, isFeaturedEvent.month, isFeaturedEvent.date)}
                  </p>
                </div>

                <div>
                  <p className="eventsNAME">{isFeaturedEvent.title}</p>
                  <p className="eventspLACE">{isFeaturedEvent.category || 'General'}</p>
                </div>
              </div>

              <div className="thirdSectionCalendarContent">
                <div>
                  {isFeaturedEvent.event?.description ? (
                    <p>{isFeaturedEvent.event.description}</p>
                  ) : (
                    <p>No description available.</p>
                  )}
                </div>
              </div>

              <div className="eventsCalendarLinks">
                {isFeaturedEvent.category && <a href="#">{isFeaturedEvent.category}</a>}
              </div>

              <p
                onClick={() => {
                  window.location.href = '/eventsmain'
                  window.scrollTo({ top: 0 })
                }}
                className="FindOutMore"
              >
                Find Out More
              </p>
            </div>
          </div>
        ) : (
          <NoData message="No featured events available for this period." />
        )}
      </div>

      {allEvents.length > 0 ? (
        <div className="overflow-hidden py-17 p-10 cardMobileSection">
          <div className="relative">
            <div className="absolute top-0 left-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute top-0 right-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>

            <motion.div
              ref={carouselRef}
              className="flex gap-10 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ right: 0, left: -1200 }}
              animate={{ x }}
            >
              {allEvents.map((event, index) => (
                <motion.div
                  key={index}
                  className="EventsCalendarCardSection min-w-[300px] h-[400px] bg-white"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-full h-[250px]">
                    <Image
                      src={
                        typeof event.image === 'string'
                          ? event.image
                          : event.image?.url || '/fallback.jpg'
                      }
                      alt={event.title || 'Event image'}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-md"
                    />
                    <div className="absolute top-3 right-3 CalenderCategoryOverlay">
                      {event.category}
                    </div>
                  </div>
                  <div className="EventsCalendarMonthtime">
                    <div className="EventsCalendarMonthStyle">{event.month}</div>
                    <div className="EventsCalendarMonthStyle">|</div>
                    <div className="EventsCalendarMonthStyle">{event.time}</div>
                  </div>
                  <h3 className="EventsCalendarTitlecss">{event.title}</h3>

                  <h4 className="EventsCalendarContent">
                    {typeof event.content === 'string' ? (
                      <p>{event.content}</p>
                    ) : event.content?.fields?.about ? (
                      <RichText data={event.content.fields.about} />
                    ) : (
                      <p>{event.description || 'No details available.'}</p>
                    )}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="EventsCalenderButtons flex justify-center gap-8 mt-8">
            <div className="EventsCalenderLeftButton" onClick={() => slide('left')} />
            <div className="EventsCalenderRightButton" onClick={() => slide('right')} />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default EventsCalendarBlock
