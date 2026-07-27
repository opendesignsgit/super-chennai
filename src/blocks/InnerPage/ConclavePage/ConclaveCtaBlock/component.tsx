'use client'

import React from 'react'

type PayloadMedia = {
  id: string
  url: string
  alt?: string
}

type ConclaveCtaBlockProps = {
  backgroundImage: PayloadMedia | string
  logoImage: PayloadMedia | string
  dateText: string
  timeText: string
  venueText?: string
  enableRegisterButton?: boolean
  buttonText?: string
  onRegisterClick?: () => void
}

export default function ConclaveCtaComponent({
  backgroundImage,
  logoImage,
  dateText,
  timeText,
  venueText,
  enableRegisterButton = false,
  buttonText = 'Register Now',
  onRegisterClick,
}: ConclaveCtaBlockProps) {
  const bgUrl = typeof backgroundImage === 'object' ? backgroundImage.url : backgroundImage
  const logoUrl = typeof logoImage === 'object' ? logoImage.url : logoImage
  const logoAlt = typeof logoImage === 'object' ? logoImage.alt || 'Conclave Logo' : 'Conclave Logo'

  return (
    <section
      className="relative w-full overflow-hidden min-h-[550px] flex items-center bg-cover bg-center articlesmainpagesections"
      style={{
        backgroundImage: bgUrl ? `url('${bgUrl}')` : undefined,
      }}
    >
      <div className="container mx-auto px-6 lg:px-0 z-10">
        <div
          className="
            max-w-2xl
            flex flex-col
            items-center text-center
            lg:items-start lg:text-left
          "
        >
          {logoUrl && (
            <div className="relative mb-6 flex justify-center lg:justify-start">
              <img
                src={logoUrl}
                alt={logoAlt}
                className="h-32 md:h-48 lg:h-64 w-auto object-contain"
              />
            </div>
          )}

          <p className="text-slate-800 text-base md:text-lg lg:text-xl font-medium mb-8">
            {dateText} <span className="mx-2 text-slate-300">|</span>
            {timeText}
            {venueText && (
              <>
                <br />
                <span className="mx-2 text-slate-300">|</span>
                {venueText}
              </>
            )}
          </p>

          {enableRegisterButton && (
            <button
              onClick={onRegisterClick}
              className="border-2 border-rose-400 text-rose-500 font-semibold px-10 py-2.5 rounded-full hover:bg-rose-50 transition-colors duration-300"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
