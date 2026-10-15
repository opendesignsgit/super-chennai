'use client'

import React, { useState } from 'react'

type FAQItem = {
  id?: string
  question?: string
  answer?: string
  q?: string
  a?: string
}

type KiteFestivalNewFaqProps = {
  tagText?: string
  mainHeading?: string
  description?: string
  faqsList?: FAQItem[]
}

export default function KiteFestivalNewFaqComponent({
  tagText = 'Got Questions?',
  mainHeading = 'Frequently Asked Questions',
  description = 'Everything you need to know before heading to the 5th Tamil Nadu International Kite Festival 2026.',
  faqsList = [
    {
      question: 'When and where is the festival taking place?',
      answer:
        'The festival takes place from 14 to 16 August 2026 at TTDC Ocean View, Mamallapuram ECR, right along the scenic coast.',
    },
    {
      question: 'Which countries are participating in the International Kite Show?',
      answer:
        'Flyers and master kite makers from Thailand, Vietnam, Singapore, Malaysia, Indonesia, India, and several other countries will be exhibiting their creations.',
    },
    {
      question: 'Is the event suitable for children and families?',
      answer:
        "Absolutely! The event is designed as a complete family carnival featuring dedicated kids' photo zones, live stage performances, interactive games, and beachside dining options.",
    },
    {
      question: 'Is parking available at TTDC Ocean View, ECR?',
      answer:
        'Yes, designated vehicle parking zones and traffic management will be available near the TTDC Ocean View grounds along the East Coast Road.',
    },
    {
      question: 'What should visitors bring along?',
      answer:
        'We recommend comfortable footwear for sand, sunscreen, sunglasses, hats, and cameras to capture the breathtaking visual displays.',
    },
  ],
}: KiteFestivalNewFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-slate-50 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          {tagText && (
            <span className="inline-block text-[#a44294] font-extrabold text-xs uppercase tracking-widest bg-[#a44294]/10 px-3 py-1 rounded-md border border-[#a44294]/20">
              {tagText}
            </span>
          )}

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#100f9a] tracking-tight">
            {mainHeading}
          </h2>

          {description && <p className="text-slate-600 text-base leading-relaxed">{description}</p>}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqsList && faqsList.length > 0 ? (
            faqsList.map((faq, index) => {
              const isOpen = openIndex === index
              const qText = faq.question || faq.q || ''
              const aText = faq.answer || faq.a || ''

              return (
                <div
                  key={faq.id || index}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:border-[#a44294]/50 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-[#100f9a] text-base sm:text-lg focus:outline-none cursor-pointer"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[#a44294] font-mono text-sm">
                        {String(index + 1).padStart(2, '0')}.
                      </span>
                      {qText}
                    </span>

                    <svg
                      className={`w-5 h-5 text-[#a44294] transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base border-t border-slate-100 leading-relaxed bg-slate-50/50">
                      {aText}
                    </div>
                  )}
                </div>
              )
            })
          ) : (
            <p className="text-center text-slate-400 text-sm">No FAQs available.</p>
          )}
        </div>
      </div>
    </section>
  )
}
