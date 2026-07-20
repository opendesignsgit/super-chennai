import { MonthCard } from './Card'

export const IconOfTheMonth = ({ events }: { events: any[] }) => {
  if (!events?.length) return null

  return (
    // <section className="container max-w-7xl mx-auto ">
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //     {events.map((event, i) => (
    //       <MonthCard key={i} doc={event} />
    //     ))}
    //   </div>
    // </section>

    <section className="EventsListSec SecPadblock12 nammaStoriesNewsLtter !pt-7">
      <div className="container max-w-7xl mx-auto ">
        <div className="flex superchennaiEventsMainContainer">
          {events.map((event, i) => (
            <MonthCard key={i} doc={event} />
          ))}
        </div>
      </div>
    </section>
  )
}
