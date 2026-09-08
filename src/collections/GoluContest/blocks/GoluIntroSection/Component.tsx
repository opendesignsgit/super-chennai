'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight, Image as ImageIcon } from 'lucide-react'

type MediaType = {
  id?: string | number
  url?: string
  alt?: string
  filename?: string
}

type SegmentType = {
  text?: string
  highlight?: boolean
}

type FeatureType = {
  id?: string | number
  text?: string
  segments?: SegmentType[]
}

type SectionItem = {
  title?: {
    primary?: string
    highlight?: string
    subtitle?: string
  }
  description?: string
  cta?: {
    label?: string
    url?: string
    showIcon?: boolean
  }
  media?: {
    src?: MediaType | number | string | null
    altText?: string
    placeholderText?: string
  }
  features?: FeatureType[]
}

type Props = {
  firstSection?: SectionItem[]
}

export default function GoluFirstSectionBlockComponent({ firstSection = [] }: Props) {
  return (
    <section className="max-w-7xl mx-auto my-8 p-6 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm font-sans goluufirstsectionmainn">
      {firstSection.map((item, index) => {
        const mediaUrl =
          typeof item?.media?.src === 'object' &&
          item?.media?.src !== null &&
          'url' in item.media.src
            ? (item.media.src as MediaType).url
            : typeof item?.media?.src === 'string'
              ? item.media.src
              : null

        return (
          <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-4 space-y-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-indigo-950 tracking-tight leading-tight uppercase">
                  {item?.title?.primary}
                </h1>
                <h1 className="text-3xl md:text-4xl font-black text-pink-600 tracking-tight leading-tight uppercase">
                  {item?.title?.highlight}
                </h1>
                <h3 className="text-xs font-bold text-indigo-950 uppercase mt-2">
                  {item?.title?.subtitle}
                </h3>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed max-w-xs">{item?.description}</p>

              {item?.cta?.label && item?.cta?.url && (
                <div className="pt-2">
                  <a
                    href={item.cta.url}
                    className="inline-flex items-center justify-center gap-3 bg-indigo-900 hover:bg-indigo-950 text-white font-black text-xs px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                  >
                    <span>{item.cta.label}</span>
                    {item.cta.showIcon && (
                      <span className="bg-white text-indigo-900 rounded-full p-1 flex items-center justify-center">
                        <ArrowRight size={14} strokeWidth={3} />
                      </span>
                    )}
                  </a>
                </div>
              )}
            </div>

            {/* MIDDLE MEDIA IMAGE */}
            <div className="lg:col-span-4 w-full h-[280px] md:h-[340px] bg-gray-100 rounded-2xl border border-gray-200 flex flex-col items-center justify-center p-0 text-gray-400 relative overflow-hidden">
              {mediaUrl ? (
                <Image
                  src={mediaUrl}
                  alt={item?.media?.altText || 'Golu image'}
                  fill
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <>
                  <ImageIcon className="w-16 h-16 mb-2 opacity-50" />
                  <span className="text-xs font-semibold uppercase text-gray-400">
                    {item?.media?.placeholderText || 'Add Image'}
                  </span>
                </>
              )}
            </div>

            {/* RIGHT FEATURES */}
            <div className="lg:col-span-4 space-y-6 golufirstsectionheight">
              {item?.features?.map((feature, featureIdx) => (
                <React.Fragment key={feature.id || featureIdx}>
                  <div className="flex items-start space-x-4 parafirstsectionn">
                    <p className="text-xs text-gray-700 leading-relaxed pt-1">
                      {feature.segments
                        ? feature.segments.map((seg, segIdx) =>
                            seg.highlight ? (
                              <span key={segIdx} className="font-bold text-pink-600">
                                {seg.text}
                              </span>
                            ) : (
                              seg.text
                            ),
                          )
                        : feature.text}
                    </p>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        )
      })}
    </section>
  )
}