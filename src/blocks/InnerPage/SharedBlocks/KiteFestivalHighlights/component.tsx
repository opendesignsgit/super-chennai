'use client'

import React from 'react'

type HighlightItem = {
  id?: string
  title: string
  desc: string
  svgCode: string
}

type KiteFestivalHighlightsProps = {
  tagText?: string
  mainHeading?: string
  description?: string
  highlightsList?: HighlightItem[]
  bannerTitle?: string
  bannerDescription?: string
  badgeText?: string
  badgeSvgCode?: string
}

export default function KiteFestivalHighlightsComponent({
  tagText = 'Festival Attractions',
  mainHeading = 'More Than Just A Kite Show',
  description = 'Explore the array of entertainment, culinary delights, and artistic exhibits planned across the three-day carnival.',
  highlightsList = [
    {
      title: 'International Masters',
      desc: 'Watch professional flyers from across the globe showcase massive stunt and display kites.',
      svgCode:
        '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>',
    },
    {
      title: 'Giant Show Kites',
      desc: 'Breathtaking large-scale inflatable showpieces filling up the coastal skyline.',
      svgCode:
        '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h10a4 4 0 004-4M7 9l5-5 5 5M12 4v12"/></svg>',
    },
    {
      title: 'Food & Flea Markets',
      desc: 'Exciting food trucks, coastal local delicacies, and vibrant lifestyle stalls.',
      svgCode:
        '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>',
    },
    {
      title: 'Family Entertainment',
      desc: 'Music, kids workshops, photo booths, and evening beachside light displays.',
      svgCode:
        '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
    },
  ],
  bannerTitle = "Ready to experience Mamallapuram's sky?",
  bannerDescription = 'Plan your family outing from 14 to 16 August at TTDC Ocean View grounds, ECR.',
  badgeText = '14–16 August',
  badgeSvgCode,
}: KiteFestivalHighlightsProps) {
  return (
    <section
      id="highlights"
      className="py-16 md:py-24 bg-white border-y border-slate-200 poppinsfamilyyy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          {tagText && (
            <span className="inline-block text-[#a44294] font-extrabold text-xs uppercase tracking-widest bg-[#a44294]/10 px-3 py-1 border border-[#a44294]/20 rounded-md mb-0">
              {tagText}
            </span>
          )}

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#100f9a] tracking-tight">
            {mainHeading}
          </h2>

          {description && (
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">{description}</p>
          )}
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlightsList?.map((item, idx) => (
            <div
              key={item.id || idx}
              className="group relative bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#a44294] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-white border border-slate-200 group-hover:bg-[#a44294]/10 transition-colors shadow-sm text-[#100f9a] group-hover:text-[#a44294]">
                    <div className="" dangerouslySetInnerHTML={{ __html: item.svgCode }} />

                    {/* {item.svgCode} */}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#100f9a] group-hover:text-[#a44294] transition-colors mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Event Callout Banner */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#100f9a] to-[#a44294] p-8 md:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            {bannerTitle && (
              <h3 className="text-2xl font-extrabold tracking-tight">{bannerTitle}</h3>
            )}
            {bannerDescription && (
              <p className="text-indigo-100 text-sm max-w-xl leading-relaxed">
                {bannerDescription}
              </p>
            )}
          </div>

          <div className="flex-shrink-0">
            <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl shadow-lg">
              {badgeSvgCode ? (
                <div
                  className="w-5 h-5 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:fill-current"
                  dangerouslySetInnerHTML={{ __html: badgeSvgCode }}
                />
              ) : (
                <svg
                  className="w-5 h-5 text-slate-950"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              )}
              <span>{badgeText}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
