'use client'

import React from 'react'

type PayloadMedia = {
  url: string
  alt?: string
}

type MetroRegistrationProps = {
  sectionId?: string
  featuredImage?: PayloadMedia | string
  status?: 'closed' | 'open'
  badgeText?: string
  title?: string
  description?: string
  infoBoxTitle?: string
  infoBoxDescription?: string
  buttonText?: string
  statusSvgCode?: string
}

export default function MetroRegistrationComponent({
  sectionId = 'registration-form',
  featuredImage = '/images/singlealone/form-metro.jpeg',
  status = 'closed',
  badgeText = 'Closed',
  title = 'REGISTRATION IS CLOSED',
  description = 'Thank you for the overwhelming response! All available slots for Sing Along Metro have been completely filled.',
  infoBoxTitle = 'Missed your spot?',
  infoBoxDescription = 'Stay tuned to our social media channels for updates on upcoming slots, next editions, and live event announcements!',
  buttonText = 'REGISTRATIONS FULL',
  statusSvgCode,
}: MetroRegistrationProps) {
  const imageUrl = typeof featuredImage === 'object' ? featuredImage?.url : featuredImage

  return (
    <section
      id={sectionId}
      className="max-w-7xl mx-auto px-4 py-8 font-sans paddingsectionntop paddingbtoomm poppinsfamilyyy"
    >
      <div className="flex flex-col md:flex-row items-stretch bg-[#fff] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        {/* Left Side - Image */}
        <div className="w-full md:w-5/12 min-h-[350px] relative">
          <img
            src={imageUrl || '/images/singlealone/form-metro.jpeg'}
            alt="People singing in metro"
            className="w-full h-full object-cover grayscale-[20%]"
          />
          {/* Overlay Badge */}
          {badgeText && (
            <div
              className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md ${status === 'closed' ? 'bg-red-600' : 'bg-green-600'}`}
            >
              {badgeText}
            </div>
          )}
        </div>

        {/* Right Side - Registration Content */}
        <div className="w-full md:w-7/12 p-8 md:p-12 flex flex-col justify-center items-center text-center contactssssform bg-slate-50/50">
          {/* Status Badge Icon */}
          <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 shadow-sm border border-red-200 shrink-0">
            {statusSvgCode ? (
              <div
                className="w-8 h-8 [&>svg]:w-8 [&>svg]:h-8 [&>svg]:fill-current"
                dangerouslySetInnerHTML={{ __html: statusSvgCode }}
              />
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m0 0v2m0-2h2m-2 0H10m0-6h4m-2-4a9 9 0 110 18 9 9 0 010-18z"
                />
              </svg>
            )}
          </div>

          {/* Main Headings */}
          <h2 className="headingsection text-2xl md:text-3xl font-extrabold text-[#01236a] tracking-tight uppercase">
            {title}
          </h2>

          <p className="mt-2 text-gray-600 text-base md:text-lg max-w-md font-medium leading-relaxed">
            {description}
          </p>

          {/* Divider */}
          <div className="w-16 h-1 bg-[#01236a] my-6 rounded-full opacity-30" />

          {/* Sub Message / Call to Action */}
          {(infoBoxTitle || infoBoxDescription) && (
            <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm max-w-lg w-full text-left space-y-2">
              {infoBoxTitle && (
                <p className="text-sm text-gray-700 font-semibold flex items-center gap-2">
                  <span className="text-amber-500 text-base">✨</span> {infoBoxTitle}
                </p>
              )}
              {infoBoxDescription && (
                <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
                  {infoBoxDescription}
                </p>
              )}
            </div>
          )}

          {/* Disabled Button Placeholder */}
          <div className="mt-6 w-full max-w-lg">
            <button
              type="button"
              disabled
              className="w-full bg-gray-300 text-gray-500 font-bold py-3.5 px-6 rounded-lg text-sm tracking-wide uppercase cursor-not-allowed flex items-center justify-center gap-2"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
