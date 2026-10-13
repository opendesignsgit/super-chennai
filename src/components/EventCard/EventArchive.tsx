import React from 'react'
import { EventCard } from './EventCard'

export const EventArchive = ({ events }: { events: any[] }) => {
  if (!events?.length) return null

  return (
    <section className="container py-5 evenetscontainer">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center">
        {events.map((event, i) => (
          <EventCard key={i} doc={event} />
        ))}
      </div>
    </section>
  )
}
