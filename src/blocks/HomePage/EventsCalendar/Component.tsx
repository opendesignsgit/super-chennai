'use client'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Media } from '@/payload-types'
import './style.css'

type Props = {
  heading: string
  description: string
  eventGroupRef: {
    title: string
    events: {
      title: string
      content: string
      month: string
      time: string
      category: string
      image: Media
    }[]
  }
}
export default function EventsCalendarBlock({ heading, description, eventGroupRef }: Props) {
  const carouselRef = useRef(null)
  const [x, setX] = useState(0)
  const events = eventGroupRef.events || []
  const slide = (direction: 'left' | 'right') => {
    const distance = 300
    if (direction === 'left') {
      setX((prevX) => Math.min(prevX + distance, 0))
    } else {
      setX((prevX) => Math.max(prevX - distance, -(events.length * 300 - 1200)))
    }
  }

  const hasEvents = events && events.length > 0
  useEffect(() => {
    console.log('eventseventseventsevents:', events)
  }, [events])

  return (
    <div className="EventsCalendarMainSection">
      <div className="container max-w-7xl mx-auto px-4 EventsCalendarTitleMain">
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>

      {hasEvents ? (
        <div className="overflow-hidden py-15">
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
              {events.map((event, index) => (
                <motion.div
                  key={index}
                  className="EventsCalendarCardSection min-w-[300px] h-[400px] bg-white"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative w-full h-[250px]">
                    <img
                      src={typeof event.image === 'object' ? event.image.url : '/fallback.jpg'}
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
            <div className="EventsCalenderLeftButton" onClick={() => slide('left')}></div>
            <div className="EventsCalenderRightButton" onClick={() => slide('right')}></div>
          </div>
        </div>
      ) : (
        <div className="text-center py-20 text-white bg-red-600 font-medium text-lg">
          No upcoming events at the moment. Please check back later.
        </div>
      )}
    </div>
  )
}
