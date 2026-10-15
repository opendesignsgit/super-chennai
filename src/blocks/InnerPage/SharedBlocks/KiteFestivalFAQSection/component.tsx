'use client'

import React, { useState } from 'react'

type FAQItem = {
  id?: string
  question?: string
  answer?: string
  q?: string
  a?: string
}

type KiteFestivalFAQProps = {
  tagText?: string
  mainHeading?: string
  description?: string
  faqsList?: FAQItem[]
}

export default function KiteFestivalFAQComponent({
  tagText = 'Got Questions?',
  mainHeading = 'Frequently Asked Questions',
  description = 'Everything you need to know before heading to the 5th Tamil Nadu International Kite Festival 2026.',
  faqsList = [
    {
      question: 'What are the dates and timings of the festival?',
      answer:
        'The festival takes place over three days in August, typically welcoming visitors from morning until evening with special night glow kite shows.',
    },
    {
      question: 'Is there an entry fee for the Kite Festival?',
      answer:
        'Please check the registration details for specific entry passes or VIP viewing zones. General entry guidelines are updated prior to the event.',
    },
    {
      question: 'How do I reach TTDC Ocean View, Mamallapuram ECR?',
      answer:
        'You can easily drive down along the scenic East Coast Road (ECR) from Chennai or Pondicherry. Ample parking spaces are available near the venue grounds.',
    },
    {
      question: 'Can we bring our own kites to fly?',
      answer:
        'While professional international flyers handle the main display and stunt kites, designated amateur areas or visitor zones may allow basic kite flying depending on safety rules.',
    },
  ],
}: KiteFestivalFAQProps) {
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

                    {/* Chevron Icon */}
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
