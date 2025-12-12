/* eslint-disable @next/next/no-img-element */
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

import { RichText } from '@payloadcms/richtext-lexical/react'
import NoData from 'src/components/NoData'
import './style.css'

type RichContent = {
  fields?: {
    about?: any
  }
}

type EventType = {
  id?: string | number
  event?: {
    link: string
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
  image?: string | { url?: string }
  eventDate?: string
  isFeatured?: boolean | string | number
  year?: number
  month?: string
  date?: number
  time?: string
  link: string
}

type Props = {
  heading: string
  description: string
  page?: {
    slug?: string
  }
}

export const EventsCalendarBlock: React.FC<Props> = ({ heading, description, page }) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [x, setX] = useState(0)

  const [allEvents, setAllEvents] = useState<EventType[]>([])
  const [isFeaturedEvent, setIsFeaturedEvent] = useState<EventType | null>(null)
  const [loading, setLoading] = useState(true)

  const slide = (direction: 'left' | 'right') => {
    const cardWidth = 300
    const visibleWidth = 40
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

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await fetch('/api/events')
//         const data = await res.json()

//         if (!data?.docs?.length) {
//           console.warn('No data found')
//           return
//         }
//  console.log('Raw API data-----------------------------------------   :', data) 
//         const enrichedEvents: EventType[] = data.docs.map((item: any) => {
//           const dateParts = parseEventDate(item.event?.eventDate)
//           return {
//             id: item.id || item._id || undefined,
//             title: item.title || item.event?.title || 'Untitled Event',
//             description: item.event?.description || '',
//             category: item.event?.category || 'General',
//             address: item.event?.address || '',
//             image: item.event?.image?.url || '',
//             isFeatured: item.isFeatured,
//             eventDate: item.event?.eventDate,
//             content: item.content,
//             ...dateParts,
//             event: item.event, // keep original event object for detailed access
//             link: item.slug ? `/events/${item.slug}` : '#',
//           }
//         })

//         setAllEvents(enrichedEvents)

//         const featured = enrichedEvents.find(
//           (e) => e.isFeatured === true || e.isFeatured === 'true' || e.isFeatured === 1,
//         )
//         setIsFeaturedEvent(featured || null)
//       } catch (error) {
//         console.error('Failed to fetch events:', error)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchEvents()
//   }, [])

useEffect(() => {
  const fetchEvents = async () => {
    try {
      const res = await fetch('/api/events')
      const data = await res.json()

      console.log('Raw API data:', data)

      if (!data?.docs?.length) {
        console.warn('No events found')
        setAllEvents([])
        setIsFeaturedEvent(null)
        return
      }

      const enrichedEvents: EventType[] = data.docs.map((item: any) => {
        // parse event date
        const eventDateStr = item.event?.eventDates?.[0]?.date || item.event?.details?.eventTime
        const dateParts = parseEventDate(eventDateStr)

        // pick the hero image first, fallback to event.image
        const imageUrl = item.heroImage?.url || item.event?.image?.url || ''

        return {
          id: item.id || item._id || undefined,
          title: item.title || item.event?.title || 'Untitled Event',
          description: item.description || item.event?.description || '',
          category: item.categories?.[0]?.title || item.event?.eventsCategory?.[0]?.title || 'General',
          address: item.event?.address || item.event?.details?.location?.label || '',
          image: imageUrl,
          isFeatured: item.isFeatured,
          eventDate: eventDateStr,
          content: item.content || { root: { children: [] } },
          ...dateParts,
          event: item.event, // keep original event object
          link: item.event?.link || `#`,
        }
      })

      console.log('Enriched events:', enrichedEvents)

      setAllEvents(enrichedEvents)

      const featured = enrichedEvents.find(
        (e) => e.isFeatured === true || e.isFeatured === 'true' || e.isFeatured === 1,
      )
      setIsFeaturedEvent(featured || null)
    } catch (error) {
      console.error('Failed to fetch events:', error)
      setAllEvents([])
      setIsFeaturedEvent(null)
    } finally {
      setLoading(false)
    }
  }

  fetchEvents()
}, [])

  const lastScrollY = useRef(0)
  const bgTextRef = useRef(null)
  const [scrollDir, setScrollDir] = useState('left')

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current) {
        setScrollDir('left')
      } else {
        setScrollDir('right')
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  const pageSlug = page?.slug ?? undefined
  return (
    <div className="EventsCalendarMainSection">
      <div
        className={`EventsCalenderBackground ${
          scrollDir === 'right' ? 'Utilitiesscroll-right' : 'Utilitiesscroll-left'
        }`}
        ref={bgTextRef}
      >
        <p>Events &nbsp; Events &nbsp; Events &nbsp; Events </p>
        <p>Calendar &nbsp; Calendar &nbsp; Calendar &nbsp; Calendar</p>
      </div>
      <div className="container max-w-7xl mx-auto px-4 EventsCalendarTitleMain">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>

      <div className="eventsCalendarMainSectionConatiner container max-w-7xl mx-auto px-4">
        {isFeaturedEvent ? (
          <div className="CalendarEventsFirst">
            {isFeaturedEvent.event?.image?.url && (
              <Link href={isFeaturedEvent.link || '#'}>
                <img
                  // className="eventsCalenderIamge"
                  src={isFeaturedEvent.event.image.url}
                  alt={isFeaturedEvent.title || 'Featured event'}
                />
              </Link>
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
                  <Link href={isFeaturedEvent.link || '#'}>
                    <p className="eventsNAME">{isFeaturedEvent.title}</p>
                  </Link>
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

              {pageSlug && (
                <Link href={`/${pageSlug}`} scroll={true}>
                  <p className="FindOutMore cursor-pointer">Find Out More</p>
                </Link>
              )}
            </div>
          </div>
        ) : (
          <NoData message="No featured events available for this period." />
        )}
      </div>

      {allEvents.length > 0 ? (
        <div className="overflow-hidden py-17 cardMobileSection">
          <div className="relative">
            <div className="absolute top-0 left-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
            <div className="absolute top-0 right-0 h-full w-16 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>

            <motion.div
              ref={carouselRef}
              className="flex gap-10 cursor-grab active:cursor-grabbing cardsMobileSection"
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
                    <Link href={event.link || '#'}>
                      <img
                        className="w-full h-full object-cover rounded-t-md"
                        src={
                          typeof event.image === 'string'
                            ? event.image
                            : event.image?.url || '/fallback.jpg'
                        }
                        alt={event.title || 'Event image'}
                      />
                    </Link>

                    <div className="absolute top-3 right-3 CalenderCategoryOverlay">
                      {event.category}
                    </div>
                  </div>
                  <Link href={event.link || '#'}>
                    <div className="EventsCalendarMonthtime">
                      <div className="EventsCalendarMonthStyle">{event.month}</div>
                      <div className="EventsCalendarMonthStyle">|</div>
                      <div className="EventsCalendarMonthStyle">{event.time}</div>
                    </div>
                    <h3 className="EventsCalendarTitlecss">{event.title}</h3>

                    <h4 className="EventsCalendarContentcss">
                      {typeof event.content === 'string' ? (
                        <p>{event.content}</p>
                      ) : event.content?.fields?.about ? (
                        <RichText data={event.content.fields.about} />
                      ) : (
                        <p>{event.description || 'No details available.'}</p>
                      )}
                    </h4>
                  </Link>
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
