'use client'

import React from 'react'

type HighlightPoint = {
  id?: string
  text: string
}

type MetroExperienceProps = {
  leftTitle?: string
  highlights?: HighlightPoint[]
  checkSvgCode?: string
  rightTitle?: string
  whoCanJoinParagraph1?: string
  whoCanJoinParagraph2?: string
  enableButton?: boolean
  buttonText?: string
  buttonTargetId?: string
}

export default function MetroExperienceComponent({
  leftTitle = 'THE EXPERIENCE',
  highlights = [
    { text: 'A 90-minute live musical ride across Chennai Metro.' },
    { text: 'Interactive sing-along sessions with local musicians.' },
    { text: 'Unfiltered energy, Madras culture, and community vibes.' },
    { text: 'Special surprises and exclusive Madras Day goodies.' },
  ],
  checkSvgCode,
  rightTitle = 'WHO CAN JOIN?',
  whoCanJoinParagraph1 = 'Anyone who loves Chennai, music and a good sing-along!',
  whoCanJoinParagraph2 = "Limited Slots only, REGISTER NOW and don't miss the chance to be part of this exclusive Madras Day celebration",
  enableButton = false,
  buttonText = 'REGISTER NOW',
  buttonTargetId = 'registration-form',
}: MetroExperienceProps) {
  const scrollToForm = () => {
    if (buttonTargetId) {
      const element = document.getElementById(buttonTargetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 font-sans poppinsfamilyyy">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Highlights / The Experience */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-[#0A1B3D] mb-4 flex items-center gap-2 uppercase tracking-wide">
              {leftTitle}
            </h3>
            <ul className="space-y-3">
              {highlights?.map((point, index) => (
                <li key={point.id || index} className="flex items-start gap-3 text-gray-700">
                  {checkSvgCode ? (
                    <div
                      className="w-5 h-5 text-[#01236a] shrink-0 mt-0.5 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:fill-current"
                      dangerouslySetInnerHTML={{ __html: checkSvgCode }}
                    />
                  ) : (
                    <svg
                      className="w-5 h-5 text-[#01236a] shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                  <span className="leading-relaxed">{point.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Who Can Join & Action */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-bold text-[#0A1B3D] mb-4 uppercase tracking-wide">
              {rightTitle}
            </h3>
            {whoCanJoinParagraph1 && (
              <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                {whoCanJoinParagraph1}
              </p>
            )}
            {whoCanJoinParagraph2 && (
              <p className="text-gray-700 leading-relaxed font-medium">{whoCanJoinParagraph2}</p>
            )}
          </div>

          {enableButton && (
            <div className="mt-6">
              <button
                type="button"
                onClick={scrollToForm}
                className="w-full bg-[#01236a] hover:bg-[#0A1B3D] text-white font-bold py-3 px-6 rounded-xl transition duration-300 shadow-md uppercase tracking-wider text-sm"
              >
                {buttonText}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
