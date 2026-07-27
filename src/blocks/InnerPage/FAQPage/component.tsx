'use client'

import React, { useState } from 'react'

type FaqItem = {
  id?: string
  question: string
  answer: string
}

type FaqSectionProps = {
  title?: string
  smallTitleText?: string
  description?: string
  faqList?: FaqItem[]
}

export default function FaqSectionComponent({
  title = 'FAQ',
  smallTitleText = 's',
  description = "Learn everything about Super Chennai and how it's shaping the city's future.",
  faqList = [],
}: FaqSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  if (!faqList || faqList.length === 0) return null

  return (
    <section className="EventsListSec SecPadblock12">
      <div className="container max-w-7xl mx-auto">
        <div className="Eventitlesec mb-[50px] text-center">
          <h1 className="text-[#a44294]">
            {title}
            {smallTitleText && <small>{smallTitleText}</small>}
          </h1>
          {description && <p>{description}</p>}
        </div>

        <div className="mx-auto p-4 faqIn">
          {faqList.map((faq, index) => (
            <div
              key={faq.id || index}
              className={`border-b border-gray-300 transition-all duration-300 overflow-hidden ${
                activeIndex === index ? 'bg-gray-50 active' : ''
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="flex justify-between items-center w-full py-4 text-left font-semibold text-gray-800 focus:outline-none"
                aria-expanded={activeIndex === index}
              >
                <h4 className="faqTitle">{faq.question}</h4>
                <span className="plus transition-colors duration-300 text-[#a44294]">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>

              <div
                className={`transition-max-height answer duration-500 ease-in-out ${
                  activeIndex === index ? 'max-h-screen p-4' : 'max-h-0 p-0'
                }`}
              >
                {/* Render HTML tags like <p>, <ul>, <li> dynamically */}
                <div
                  className="text-gray-600 space-y-2 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
