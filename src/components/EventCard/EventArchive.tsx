import React from 'react'
import { EventCard } from './EventCard'

export const EventArchive = ({ events }: { events: any[] }) => {
  if (!events?.length) return null

  return (
    <section className="container py-5 evenetscontainer">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 eventscardflex">
        {events.map((event, i) => (
          <EventCard key={i} doc={event} />
        ))}
      </div>
    </section>
  )
}
