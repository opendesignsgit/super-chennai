/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'

interface LocationCardProps {
  loc: any
}

export default function LocationCard({ loc }: LocationCardProps) {
  const imageUrl = loc?.image?.url
    ? loc.image.url.startsWith('http')
      ? loc.image.url
      : `${process.env.NEXT_PUBLIC_SERVER_URL || ''}${loc.image.url}`
    : '/images/locationdefult.png'

  const schools = loc?.schoolCount
  const hospitals = loc?.hospitalCount

  let metro = null
  if (loc?.hasMetro !== undefined && loc?.hasMetro !== null && loc?.hasMetro !== '') {
    metro = loc.hasMetro === true || loc.hasMetro === 'true' ? 'Available' : 'Connecting'
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
      <div className="relative h-40 overflow-hidden">
        <img
          src={imageUrl}
          alt={loc.locality || ''}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        <span className="absolute top-2 left-2 text-white !text-[10px] neighbourtwoparagraph font-bold px-2 py-0.5 rounded red">
          {loc.locality}
        </span>
      </div>

      <div className="p-4 cardssspadddingss">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-purple-600 text-sm neighebbbbbbbsss">
            <img src="/images/icons/rose-location-output-neighbourhood.svg" alt="" />
          </span>
          <h3 className="!font-bold text-[#000] neighbourtwoheaidngssparagraph">
            {loc.label || loc.locality}
          </h3>
        </div>

        {loc.about ? (
          <p className="text-xs text-[#000] leading-relaxed mb-3 neighbourtwoparagraph">
            {loc.about.slice(0, 80)}...
          </p>
        ) : (
          <p className="text-xs text-[#000] leading-relaxed mb-3 neighbourtwoparagraph">
            No Description
          </p>
        )}

        <div className="flex items-center gap-3 mb-3 text-xs text-gray-500 flex-wrap">
          {schools && (
            <span className="flex items-center gap-1">
              <span>🏫</span>
              <div>
                Schools
                <strong className="text-[#000]">
                  <br />
                  {schools}
                </strong>
              </div>
            </span>
          )}

          {hospitals && (
            <span className="flex items-center gap-1">
              <span>🏥</span>
              <div>
                Hospitals
                <strong className="text-[#000]">
                  <br />
                  {hospitals}
                </strong>
              </div>
            </span>
          )}

          {metro && (
            <span className="flex items-center gap-1">
              <span>🚇</span>
              <div>
                Metro
                <strong className="text-[#000]">
                  <br />
                  {metro}
                </strong>
              </div>
            </span>
          )}
        </div>

        <div className="flex justify-center mt-3 border-t border-[#d1d5dc] py-3">
          <Link
            href={`/neighbourhood/${encodeURIComponent(loc.locality)}`}
            className="text-xs !font-semibold text-[#a44294] hover:text-purple-900 transition-colors neighbourtwoparagraph"
          >
            Explore Area →
          </Link>
        </div>
      </div>
    </div>
  )
}
