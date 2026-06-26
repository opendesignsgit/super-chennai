import { MonthCard } from './Card'

export const IconOfTheMonth = ({ events }: { events: any[] }) => {
  if (!events?.length) return null

  return (
    <section className="container py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, i) => (
          <MonthCard key={i} doc={event} />
        ))}
      </div>
    </section>
  )
}
