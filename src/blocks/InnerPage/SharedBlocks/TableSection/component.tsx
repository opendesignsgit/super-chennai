'use client'

import React from 'react'

type HeaderItem = {
  id?: string
  title: string
}

type ColumnCell = {
  id?: string
  text: string
}

type RowItem = {
  id?: string
  columns?: ColumnCell[]
}

type EVTableProps = {
  mainTitle?: string
  subTitle?: string
  headers?: HeaderItem[]
  rows?: RowItem[]
}

export default function TableSectionComponent({
  mainTitle = 'EV ZONES & SMART CORRIDORS',
  subTitle = 'These companies have made Chennai their technology fortress:',
  headers = [{ title: 'Zone' }, { title: 'Focus' }],
  rows = [
    {
      columns: [
        { text: 'TIDCO EV Park (Pillaipakkam)' },
        { text: 'Full-stack EV ecosystem (OEMs, battery, testing)' },
      ],
    },
    {
      columns: [{ text: 'OMR Tech Belt' }, { text: 'Charging hubs, software for EV telematics' }],
    },
    {
      columns: [
        { text: 'Ennore Port–Sriperumbudur Corridor' },
        { text: 'Export & logistics zone for EVs' },
      ],
    },
    {
      columns: [
        { text: 'Tambaram–Chengalpattu Belt' },
        { text: 'EV component suppliers & logistics EV testing' },
      ],
    },
  ],
}: EVTableProps) {
  const columnCount = Math.min(Math.max(headers.length, 1), 4)

  // Dynamic grid class based on column count (1 to 4 columns equal width)
  const gridColClass =
    {
      1: 'grid-cols-1',
      2: 'grid-cols-1 md:grid-cols-2',
      3: 'grid-cols-1 md:grid-cols-3',
      4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    }[columnCount] || 'grid-cols-1'

  return (
    <section className="container max-w-7xl mx-auto px-4 py-10 nightlife investchennaisec">
      {/* Section Header */}
      <div className="text-center space-y-3">
        {mainTitle && <h2 className="text-2xl font-bold !mb-3">{mainTitle}</h2>}
        {subTitle && <p className="mb-5">{subTitle}</p>}
      </div>

      {/* Custom Table Container */}
      {headers && headers.length > 0 && (
        <div className="w-full border border-gray-200 rounded-sm overflow-hidden shadow-sm !mt-10">
          {/* Table Header Row */}
          <div className={`grid ${gridColClass} bg-[#a24298] text-white border-b border-gray-200`}>
            {headers.map((header, idx) => (
              <div
                key={header.id || idx}
                className="p-4 font-bold text-lg md:text-xl border-r border-white/20 last:border-r-0 flex items-center"
              >
                {header.title}
              </div>
            ))}
          </div>

          {/* Table Body Rows */}
          {rows && rows.length > 0 && (
            <div className="divide-y divide-gray-200">
              {rows.map((row, rIdx) => (
                <div
                  key={row.id || rIdx}
                  className={`grid ${gridColClass} hover:bg-gray-50/80 transition-colors`}
                >
                  {headers.map((_, cIdx) => {
                    const cell = row.columns?.[cIdx]
                    return (
                      <div
                        key={cIdx}
                        className="p-4 text-gray-700 text-base leading-relaxed border-r border-gray-200 last:border-r-0 flex items-center"
                        dangerouslySetInnerHTML={{ __html: cell?.text || '' }}
                      />
                    )
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  )
}
