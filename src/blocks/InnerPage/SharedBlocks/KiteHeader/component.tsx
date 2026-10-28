'use client'

import React from 'react'

type KiteFestivalHeroProps = {
  announcementText?: string
  locationSubtitle?: string
  topBadge?: string
  mainHeading?: string
  description?: string
  dateText?: string
  locationText?: string
  primaryCtaText?: string
  primaryCtaUrl?: string
  secondaryCtaText?: string
  secondaryCtaUrl?: string
  cardBadge?: string
  nationsText?: string
  stat1Number?: string
  stat1Label?: string
  stat2Number?: string
  stat2Label?: string
  venueBoxTitle?: string
  venueBoxSubtitle?: string
}

export default function KiteFestivalHeroComponent({
  announcementText = 'Official Event Announcement • August 2026',
  locationSubtitle = 'TTDC Ocean View, East Coast Road (ECR)',
  topBadge = '5th Edition • Annual Coastal Celebration',
  mainHeading = 'Kite Festival 2026',
  description = 'When Mamallapuram takes to the skies. Experience three days of grand airborne art, international master flyers, giant inflatables, and coastal food carnivals.',
  dateText = '14 – 16 August 2026',
  locationText = 'TTDC Ocean View, Mamallapuram ECR',
  primaryCtaText = 'Explore Event Highlights',
  primaryCtaUrl = '#highlights',
  secondaryCtaText = 'About The Festival',
  secondaryCtaUrl = '#about',
  cardBadge = 'ECR Grand Weekend',
  nationsText = 'Thailand, Vietnam, Singapore, Malaysia, Indonesia & India',
  stat1Number = '3 Days',
  stat1Label = 'Non-Stop Sky Displays',
  stat2Number = '100+',
  stat2Label = 'Giant & Inflatable Kites',
  venueBoxTitle = 'Venue Location',
  venueBoxSubtitle = 'TTDC Beach Grounds, ECR',
}: KiteFestivalHeroProps) {
  return (
    <>
      {/* FULL PAGE FLYING KITES ANIMATION LAYER */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {/* Animated Flying Kite 1 (Large - Main) */}
        <div className="absolute animate-flyingKite1 opacity-90 filter drop-shadow-xl">
          <svg
            width="70"
            height="90"
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Kite Body */}
            <path d="M50 0 L95 45 L50 100 L5 45 Z" fill="#FFD54F" />
            <path d="M50 0 L5 45 L50 100 Z" fill="#a44294" />
            <path d="M50 0 L95 45 L50 50 Z" fill="#100f9a" />
            {/* Cross Struts */}
            <path d="M50 0 V100" stroke="#ffffff" strokeWidth="2" />
            <path d="M5 45 Q 50 25 95 45" stroke="#ffffff" strokeWidth="2" fill="none" />
            {/* Tail */}
            <path
              d="M50 100 C 30 115, 70 130, 40 150 C 20 165, 60 180, 50 200"
              stroke="#a44294"
              strokeWidth="3"
              fill="none"
              strokeDasharray="4 2"
            />
          </svg>
        </div>

        {/* Animated Flying Kite 2 (Medium - Top Right) */}
        <div className="absolute animate-flyingKite2 opacity-75 filter drop-shadow-md hidden sm:block">
          <svg
            width="45"
            height="60"
            viewBox="0 0 100 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M50 0 L95 45 L50 100 L5 45 Z" fill="#a44294" />
            <path d="M50 0 L5 45 L50 100 Z" fill="#FFD54F" />
            <path d="M50 0 V100" stroke="#ffffff" strokeWidth="2" />
            <path d="M5 45 Q 50 25 95 45" stroke="#ffffff" strokeWidth="2" fill="none" />
            <path
              d="M50 100 C 60 115, 30 130, 50 150"
              stroke="#FFD54F"
              strokeWidth="2.5"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* Embedded Animation CSS Keyframes */}
      <style>{`
        @keyframes flyingKite1 {
          0% {
            top: 85%;
            left: -10%;
            transform: rotate(15deg) scale(0.8);
          }
          25% {
            top: 55%;
            left: 25%;
            transform: rotate(-10deg) scale(1.1);
          }
          50% {
            top: 25%;
            left: 60%;
            transform: rotate(20deg) scale(0.9);
          }
          75% {
            top: 10%;
            left: 85%;
            transform: rotate(-5deg) scale(1);
          }
          100% {
            top: -15%;
            left: 110%;
            transform: rotate(15deg) scale(0.8);
          }
        }

        @keyframes flyingKite2 {
          0% {
            top: 105%;
            left: 40%;
            transform: rotate(-20deg) scale(0.7);
          }
          50% {
            top: 50%;
            left: 80%;
            transform: rotate(15deg) scale(1);
          }
          100% {
            top: -10%;
            left: 20%;
            transform: rotate(-10deg) scale(0.7);
          }
        }

        .animate-flyingKite1 {
          animation: flyingKite1 18s ease-in-out infinite;
        }

        .animate-flyingKite2 {
          animation: flyingKite2 24s ease-in-out infinite 6s;
        }
      `}</style>

      <header className="relative overflow-hidden bg-gradient-to-br from-[#100f9a] via-[#3b1975] to-[#a44294] text-white font-sans poppinsfamilyyy ">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#a44294]/30 blur-3xl pointer-events-none" />

        {/* Top Announcement Bar */}
        {announcementText && (
          <div className="border-b border-white/10 bg-black/10 backdrop-blur-md px-4 py-2 text-xs md:text-sm font-medium relative z-20">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {announcementText}
              </span>
              {locationSubtitle && (
                <span className="text-white/80 hidden sm:inline">{locationSubtitle}</span>
              )}
            </div>
          </div>
        )}

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 lg:pt-24 lg:pb-32 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center pt-10">
            {/* Left Column: Headlines & Call to Action */}
            <div className="lg:col-span-7 space-y-6">
              {topBadge && (
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-lg">
                  <svg
                    className="w-4 h-4 text-amber-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  <span>{topBadge}</span>
                </div>
              )}

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
                Tamil Nadu International <br className="hidden sm:inline" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-pink-100 to-white">
                  {mainHeading}
                </span>
              </h1>

              {description && (
                <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl font-light leading-relaxed">
                  {description}
                </p>
              )}

              {/* Event Meta Badges */}
              <div className="pt-2 flex flex-wrap gap-4 text-sm font-medium">
                {dateText && (
                  <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15">
                    <svg
                      className="w-5 h-5 text-amber-300"
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
                    <span>{dateText}</span>
                  </div>
                )}
                {locationText && (
                  <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15">
                    <svg
                      className="w-5 h-5 text-amber-300"
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
                    <span>{locationText}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                {primaryCtaText && (
                  <a
                    href={primaryCtaUrl}
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-[#100f9a] font-bold shadow-xl hover:bg-slate-100 transition-all duration-200 group"
                  >
                    <span>{primaryCtaText}</span>
                    <svg
                      className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )}
                {secondaryCtaText && (
                  <a
                    href={secondaryCtaUrl}
                    className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold backdrop-blur-md transition-all duration-200"
                  >
                    {secondaryCtaText}
                  </a>
                )}
              </div>
            </div>

            {/* Right Column: Key Event Card Showcase */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white">
                {cardBadge && (
                  <div className="absolute -top-3 -right-3 bg-amber-400 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                    {cardBadge}
                  </div>
                )}

                <div className="space-y-6">
                  <div className="border-b border-white/15 pb-4">
                    <span className="text-xs uppercase tracking-widest text-indigo-200 font-semibold">
                      Participating Nations
                    </span>
                    <p className="text-xl font-bold mt-1 text-white">{nationsText}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                      <span className="block text-2xl font-black text-amber-300">
                        {stat1Number}
                      </span>
                      <span className="text-xs text-indigo-100 font-medium">{stat1Label}</span>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/10">
                      <span className="block text-2xl font-black text-amber-300">
                        {stat2Number}
                      </span>
                      <span className="text-xs text-indigo-100 font-medium">{stat2Label}</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#100f9a] to-[#a44294] p-4 rounded-2xl border border-white/20 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-indigo-200 uppercase font-bold tracking-wider">
                        {venueBoxTitle}
                      </p>
                      <p className="text-sm font-semibold text-white">{venueBoxSubtitle}</p>
                    </div>
                    <svg
                      className="w-8 h-8 text-amber-300 opacity-90"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="w-full overflow-hidden leading-none text-slate-50 relative z-10">
          <svg
            className="relative block w-full h-12 md:h-16"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.1,130.83,121.6,200,115.8,241.1,112.3,281.3,88.4,321.39,56.44Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </header>
    </>
  )
}
