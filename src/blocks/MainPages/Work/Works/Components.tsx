'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import './style.css'
export type Media = {
  id: string
  url: string
  alt?: string
  mimeType?: string
  filename?: string
}

export type WorkHoverCardItem = {
  label: string
  link: string
  image: Media
}

export type WorkHoverCardsBlock = {
  blockType: 'workHoverCards'
  blockName?: string
  title: string
  items: WorkHoverCardItem[]
}

type Item = {
  label: string
  link: string
  image:
    | {
        url: string
      }
    | Media
}

export const TextHoverImageSection = ({ title, items }: { title: string; items: Item[] }) => {
  const [previewSrc, setPreviewSrc] = useState(items?.[0]?.image?.url || '')
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const tooltipRef = useRef<HTMLSpanElement>(null)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    setFade(false)
    const timeout = setTimeout(() => setFade(true), 50)
    return () => clearTimeout(timeout)
  }, [previewSrc])

  return (
    <>
      {/* Desktop Hover Version */}
      <div className="hidden md:block workImageSection">
        <h4 dangerouslySetInnerHTML={{ __html: title.replace(' ', '<br />') }} />
        <div className="container max-w-7xl mx-auto px-4">
          <div className="workimgIn flex">
            <div className="flex-4">
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li
                    key={index}
                    onMouseEnter={() => {
                      setPreviewSrc(item.image.url)
                      setHoverIndex(index)
                      tooltipRef.current!.style.display = 'block'
                    }}
                    onMouseLeave={() => {
                      setHoverIndex(null)
                      tooltipRef.current!.style.display = 'none'
                    }}
                    className={
                      hoverIndex === index || (hoverIndex === null && index === 0) ? 'active' : ''
                    }
                  >
                    <Link
                      href={item.link}
                      className={`text-white font-bold text-lg transition-opacity ${
                        hoverIndex === index || (hoverIndex === null && index === 0)
                          ? 'opacity-100'
                          : 'opacity-20'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <span
                ref={tooltipRef}
                id="tooltip"
                className="fixed z-50 bg-black text-white text-xs px-2 py-1 rounded hidden md:block pointer-events-none"
                style={{ transition: 'opacity 0.2s ease' }}
              >
                <button>Explore More</button>
              </span>
            </div>

            <div className="flex-2 flex items-center justify-center hoverRightimg">
              <img
                src={previewSrc}
                alt="Category preview"
                className="hoverRightimg"
                style={{ opacity: fade ? 1 : 0, transition: 'opacity 0.3s' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Cards Version */}
      <div className="block md:hidden my-8 px-4 mobileCardsWorkMainContainer">
        <div className="overflow-x-auto flex space-x-4 pb-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 mobileCardsWork"
            >
              <img
                src={item.image.url}
                alt={item.label}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold text-gray-800 mb-2 CardTitleWork">
                  {item.label}
                </h5>
                <Link
                  href={item.link}
                  className="text-blue-500 hover:underline text-sm CardLinkWork"
                >
                  Explore →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
