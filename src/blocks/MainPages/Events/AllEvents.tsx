'use client'

import { Media } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import './style.css'

type EventType = {
  id?: string | number
  title?: string
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
  content?: string
  event?: {
    description?: string
    category?: string
    address?: string
    image?: { url?: string }
    eventDate?: string
    title?: string
  }
  link?: string
}

type Props = {
  title: string
  description: string
}

export const EventsHomeBlock = ({ title, description }: Props) => {
  const [events, setAllEvents] = useState<EventType[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const itemsPerPage = 10

  const totalPages = Math.ceil(events.length / itemsPerPage)
  const currentEvents = events.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
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

  const parseEventDate = (eventDateStr?: string) => {
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
            id: item.id || item._id,
            title: item.title || item.event?.title || 'Untitled Event',
            description: item.event?.description || '',
            category: item.event?.category || 'General',
            address: item.event?.address || '',
            image: item.event?.image?.url || '',
            isFeatured: item.isFeatured,
            eventDate: item.event?.eventDate,
            content: item.content || item.event?.description,
            ...dateParts,
            event: item.event,
            link: item.slug ? `/events/${item.slug}` : '#',
          }
        })

        setAllEvents(enrichedEvents)
      } catch (error) {
        console.error('Failed to fetch events:', error)
      }
    }

    fetchEvents()
  }, [])

  return (
    <section className="EventsListSec SecPadblock12">
      <div className="container max-w-7xl mx-auto">
        <div className="Eventitlesec mb-[50px] text-center">
          <h2 className="text-[#a44294]">{title}</h2>
          <p>{description}</p>
        </div>

        <div className="EventsListboxs flex flex-wrap gap-6">
          {currentEvents?.map((card, index) => (
            <div key={index} className="EventsItems bg-white w-full md:w-[32%] shadow-md">
              <div className="relative w-full h-[200px] EventsItemImg overflow-hidden">
                <Link href={card.link || '#'}>
                  <Image
                    src={
                      typeof card.image === 'string'
                        ? card.image
                        : (card.image as Media)?.url || '/placeholder.png'
                    }
                    alt={card.title || 'Event Image'}
                    fill
                    className="object-cover"
                  />
                </Link>
                <div className="absolute top-3 right-3 evntechnolg bg-white px-2 py-1 text-sm rounded">
                  {card.category}
                </div>
              </div>
              <div className="EventsIteCont flex flex-col items-start p-4">
                <div className="datimeContbox flex items-center mb-2 text-sm text-gray-500">
                  <div className="dtDaymonth capitalize">{card.month}</div>
                  <div className="dtLines mx-2">|</div>
                  <div className="dtTimess">{card.time}</div>
                </div>
                <h3 className="EveItemtitles font-semibold text-lg mb-2">
                  <Link href={card.link || '#'}>{card.title}</Link>
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="pagination flex justify-center mt-8 gap-2 flex-wrap">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNum = index + 1
              const isActive = currentPage === pageNum
              return (
                <button
                  key={pageNum}
                  className={`px-4 py-2 rounded border ${
                    isActive
                      ? 'bg-[#a44294] text-white border-[#a44294]'
                      : 'bg-white text-[#a44294] border-[#ccc]'
                  }`}
                  onClick={() => handlePageChange(pageNum)}
                >
                  {pageNum}
                </button>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
