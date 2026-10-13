'use client'

import React from 'react'

type GuidelinePoint = {
  id?: string
  text: string
}

type MetroGuidelinesProps = {
  sectionTitle?: string
  guidelines?: GuidelinePoint[]
  checkSvgCode?: string
}

export default function MetroGuidelinesComponent({
  sectionTitle = 'IMPORTANT INFORMATION',
  guidelines = [
    { text: 'Entry is strictly based on prior registration confirmation.' },
    { text: 'Please carry a valid Govt photo ID for verification.' },
    { text: 'Be present at Alandur Metro Station by 10:30 PM sharp.' },
    { text: 'Alcohol, smoking, and dangerous substances are strictly prohibited.' },
    { text: 'Follow all CMRL safety rules and instructions inside the train.' },
    { text: 'Limited seat availability — first come, first served basis.' },
  ],
  checkSvgCode,
}: MetroGuidelinesProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6 font-sans pb-0 poppinsfamilyyy">
      <div className="bg-[#EDF4FC] border border-[#EDF4FC] p-6 rounded-2xl">
        <h3 className="text-xl font-bold text-[#0A1B3D] mb-4 flex items-center gap-2 uppercase tracking-wide">
          {sectionTitle}
        </h3>

        <ul className="space-y-3 grid grid-cols-1 md:grid-cols-2 gap-0 mt-4">
          {guidelines?.map((point, index) => (
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
    </section>
  )
}
