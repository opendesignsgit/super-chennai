'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import './style.css'
import NoData from '@/components/NoData'

export default function EventsCalendarBlock() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [x, setX] = useState(0)
  const [eventsToShow, setEventsToShow] = useState<any[]>([])
  const [featuredEvent, setFeaturedEvent] = useState<any | null>(null)
  const [heading, setHeading] = useState('')
  const [description, setDescription] = useState('')

  const slide = (direction: 'left' | 'right') => {
    const cardWidth = 300
    const visibleWidth = 1200
    const maxSlide = -(eventsToShow.length * cardWidth - visibleWidth)

    setX((prevX) =>
      direction === 'left' ? Math.min(prevX + cardWidth, 0) : Math.max(prevX - cardWidth, maxSlide),
    )
  }

  const getWeekday = (year: number, monthStr: string, date: number) => {
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

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/events')
        const data = await res.json()

        if (!data?.docs?.length) {
          console.warn('No data found')
          return
        }

        const pageContent = data.docs[0]
        setHeading(pageContent.heading || '')
        setDescription(pageContent.description || '')

        const children = pageContent?.content?.root?.children || []
        const block = children.find(
          (child: any) => child.type === 'block' && child.fields?.blockType === 'eventsList',
        )

        if (!block?.fields?.events?.length) return

        const currentDate = new Date()
        const currentMonth = currentDate.toLocaleString('default', { month: 'long' }).toLowerCase()
        const currentYear = currentDate.getFullYear()

        const filteredEvents = block.fields.events.filter(
          (event: any) => event.month?.toLowerCase() === currentMonth && event.year === currentYear,
        )

        setEventsToShow(filteredEvents)

        const featuredIndex = block.fields.featuredEventIndex ?? 0
        setFeaturedEvent(filteredEvents[featuredIndex] ?? filteredEvents[0] ?? null)
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
        <div className="CalendarEventsFirst">
          {featuredEvent ? (
            <div className="CalendarEventsFirst">
              <img
                className="eventsCalenderIamge"
                src={featuredEvent?.image?.url || '/fallback.jpg'}
                alt={featuredEvent.title}
              />

              <div className="MainCalendarSectionEvent">
                <h4>
                  <span>
                    {featuredEvent.month.charAt(0).toUpperCase() + featuredEvent.month.slice(1)} -{' '}
                    {featuredEvent.year}
                  </span>
                  {featuredEvent.address?.trim() && <div>{featuredEvent.address.trim()}</div>}
                </h4>

                <div className="secondSectionEventsCalendar">
                  <div className="EventsCalendarDateandTime">
                    <p className="dateEvents">{featuredEvent.date}</p>
                    <p className="dayEvents">
                      {getWeekday(featuredEvent.year, featuredEvent.month, featuredEvent.date)}
                    </p>
                  </div>

                  <div>
                    <p className="eventsNAME">{featuredEvent.title}</p>
                    <p className="eventspLACE">{featuredEvent.category || 'General'}</p>
                  </div>
                </div>

                <div className="thirdSectionCalendarContent">
                  <p>
                    {featuredEvent.description ||
                      featuredEvent.content ||
                      'No description available.'}
                  </p>
                </div>

                <div className="eventsCalendarLinks">
                  {featuredEvent.category && <a href="#">{featuredEvent.category}</a>}
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
            <p>
             {/* <NoData message="  No featured events available for this period.."/> */}
            </p>
          )}
        </div>
      </div>

      {eventsToShow.length > 0 ? (
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
              {eventsToShow.map((event, index) => (
                <motion.div
                  key={index}
                  className="EventsCalendarCardSection min-w-[300px] h-[400px] bg-white"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-full h-[250px]">
                    <img
                      src={event?.image?.url || '/fallback.jpg'}
                      alt={event.title}
                      className="w-full h-full object-cover rounded-t-md"
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
                  <h4 className="EventsCalendarContentcss">{event.content}</h4>
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
        <div >
         <NoData message=" No upcoming events to display."/>
        </div>
      )}
    </div>
  )
}
