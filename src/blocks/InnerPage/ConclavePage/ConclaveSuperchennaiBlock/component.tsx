'use client'

import React from 'react'

type PayloadMedia = {
  id: string
  url: string
  alt?: string
}

type MetaItem = {
  id?: string
  icon: PayloadMedia | string
  label: string
  value: string
}

type ConclaveSuperchennaiProps = {
  title: string
  description: string
  metaItems: MetaItem[]
}

export default function ConclaveSuperChennaiBlockComponent({
  title,
  description,
  metaItems,
}: ConclaveSuperchennaiProps) {
  return (
    <section className="relative bg-white py-16 articlesmainpagesections">
      <div className="mx-auto px-6 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="InvestChennaiContent-conclaves">
            <h1 className="hidden">{title}</h1>
            <h3>{title}</h3>

            <p
              className="text-gray-700 text-lg leading-relaxed [&>strong]:font-bold [&>b]:font-bold"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>

          {metaItems && metaItems.length > 0 && (
            <div className="flex flex-wrap justify-center gap-8 mb-10 text-gray-700 mt-5">
              {metaItems.map((item, index) => {
                const iconUrl = typeof item.icon === 'object' ? item.icon.url : item.icon
                const iconAlt =
                  typeof item.icon === 'object' ? item.icon.alt || item.label : item.label

                return (
                  <div key={item.id || index} className="text-center">
                    <div className="flex items-center justify-center gap-2 text-sm uppercase text-gray-500">
                      {iconUrl && <img src={iconUrl} alt={iconAlt} className="w-10 h-10" />}
                      <span>{item.label}</span>
                    </div>
                    <span className="font-semibold block mt-1">{item.value}</span>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
