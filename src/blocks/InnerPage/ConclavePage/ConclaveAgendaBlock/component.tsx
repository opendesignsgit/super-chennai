'use client'

import React, { useState } from 'react'

type AgendaSpeaker = {
  id?: string
  name: string
}

type AgendaItem = {
  id?: string
  displayId: string
  startTime: string
  endTime: string
  title: string
  speakers?: AgendaSpeaker[]
}

type ConclaveAgendaBlockProps = {
  sectionHeading?: string
  initialVisibleRows?: number
  agendaItems: AgendaItem[]
}

export default function ConclaveAgendaComponent({
  sectionHeading = 'OUR AGENDA',
  initialVisibleRows = 4,
  agendaItems,
}: ConclaveAgendaBlockProps) {
  const [showAll, setShowAll] = useState(false)

  if (!agendaItems || agendaItems.length === 0) return null

  // Payload structure layout mapping configuration checks
  const visibleData = showAll ? agendaItems : agendaItems.slice(0, initialVisibleRows)

  return (
    <section className="Becameavolunteerbg-conclves relative articlesmainpagesections ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="BecameavolunteerContent text-center mb-5">
          <h2>{sectionHeading}</h2>
        </div>

        <div className="space-y-5 divide-y divide-gray-400/40 text-white relative pt-10">
          {visibleData.map((item, index) => (
            <div
              key={item.id || index}
              className="
                flex 
                flex-col 
                md:grid 
                md:grid-cols-12 
                py-8 
                items-center 
                text-center 
                md:text-left 
                font-bold
                p-6
                md:p-0
                bg-gray-800/20
                md:bg-transparent
                rounded-lg
                md:rounded-none
                shadow-lg
                md:shadow-none
                mx-4
                md:mx-0
                space-y-4
                md:space-y-0
              "
            >
              {/* Dynamic Row ID / Tracking Segment */}
              <div className="autoinfonew flex justify-center md:justify-start mb-4 md:mb-0">
                <h3>{item.displayId}</h3>
              </div>

              {/* Timing Column block */}
              <div className="md:col-span-2 text-sm mb-4 md:mb-0">
                <p>{item.startTime} –</p>
                <p>{item.endTime}</p>
              </div>

              {/* Event Title Row Topic */}
              <p className="md:col-span-5 mb-4 md:mb-0">{item.title}</p>

              {/* Speakers Sub-Array Dynamic Loop mapping */}
              <div className="md:col-span-4 text-sm">
                {item.speakers?.map((spk, idx) => (
                  <p key={spk.id || idx} className="mb-1">
                    {spk.name}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Conditional pagination action button execution boundary */}
          {!showAll && agendaItems.length > initialVisibleRows && (
            <div className="flex justify-center mt-10">
              <button onClick={() => setShowAll(true)} className="conclave-button">
                Read More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
