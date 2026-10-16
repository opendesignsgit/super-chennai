'use client'

import React from 'react'

type PayloadMedia = {
  url: string
  alt?: string
}

type KiteFestivalAboutProps = {
  featuredImage?: PayloadMedia | string
  tagText?: string
  mainHeading?: string
  paragraph1?: string
  paragraph2?: string
  paragraph3?: string
  boxTitle?: string
  boxDescription?: string
  boxSvgCode?: string
}

export default function KiteFestivalAboutComponent({
  featuredImage = 'images/Kite-festiva.jpeg',
  tagText = 'About The Event',
  mainHeading = 'A Weekend of Kites, Colours & International Artistry',
  paragraph1 = 'For three days in August, the skies above Mamallapuram ECR will turn into a colorful spectacle as the <strong class="text-[#100f9a] font-semibold">5th Tamil Nadu International Kite Festival 2026</strong> brings together breathtaking kite creations, master flyers, giant installations, and vibrant family entertainment.',
  paragraph2 = 'Taking place at <strong class="text-[#100f9a]">TTDC Ocean View, Mamallapuram ECR</strong>, the festival features renowned participants from Thailand, Vietnam, Singapore, Malaysia, Indonesia, India, and beyond, creating an energetic international celebration along the coastline.',
  paragraph3 = 'With the open coastline of Mamallapuram as the backdrop, these larger-than-life kites create countless memorable moments for families, sightseers, and photography enthusiasts. The <strong class="text-[#100f9a]">World of Inflatable Show Kites</strong> further transforms the skyline into an airborne fantasy.',
  boxTitle = 'A Perfect ECR Day Out',
  boxDescription = "Located along Mamallapuram's popular East Coast Road (ECR), the drive itself forms a pleasant weekend getaway for residents of Chennai and neighboring areas.",
  boxSvgCode,
}: KiteFestivalAboutProps) {
  const imageUrl = typeof featuredImage === 'object' ? featuredImage?.url : featuredImage

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50 font-sans poppinsfamilyyy ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Narrative Box (Image on Left) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[420px] sm:h-[480px] w-full border-4 border-white">
              <img
                src={imageUrl || 'images/Kite-festiva.jpeg'}
                alt={tagText || 'Tamil Nadu International Kite Festival'}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Narrative Content (Right Side) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            {/* Tag */}
            {tagText && (
              <div className="inline-flex items-center gap-2 text-[#a44294] font-extrabold text-xs uppercase tracking-widest bg-[#a44294]/10 px-3 py-1 rounded-md">
                {tagText}
              </div>
            )}

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#100f9a] tracking-tight leading-tight">
              {mainHeading}
            </h2>

            {/* Paragraph 1 */}
            {paragraph1 && (
              <p
                className="text-slate-600 text-base sm:text-lg leading-relaxed"
                dangerouslySetInnerHTML={{ __html: paragraph1 }}
              />
            )}

            {/* Paragraphs 2 & 3 */}
            <div className="space-y-4 text-slate-600 leading-relaxed text-base">
              {paragraph2 && <p dangerouslySetInnerHTML={{ __html: paragraph2 }} />}
              {paragraph3 && <p dangerouslySetInnerHTML={{ __html: paragraph3 }} />}
            </div>

            {/* Bottom Highlight Box */}
            {(boxTitle || boxDescription) && (
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                <div className="p-3 rounded-xl bg-[#100f9a]/10 text-[#100f9a] shrink-0">
                  {boxSvgCode ? (
                    <div
                      className="w-6 h-6 [&>svg]:w-6 [&>svg]:h-6 [&>svg]:fill-current"
                      dangerouslySetInnerHTML={{ __html: boxSvgCode }}
                    />
                  ) : (
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  {boxTitle && (
                    <h3 className="font-bold text-[#100f9a] text-sm sm:text-base">{boxTitle}</h3>
                  )}
                  {boxDescription && (
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      {boxDescription}
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
