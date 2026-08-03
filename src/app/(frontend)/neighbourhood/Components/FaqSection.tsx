'use client'

import React, { useState } from 'react'

interface FaqSectionProps {
  faqDataProps?: {
    subHeading?: string
    heading?: string
    description?: string
    faqs?: Array<{ question: string; answer: string }>
  }
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqDataProps }) => {
  const subHeading = faqDataProps?.subHeading || 'Frequently Asked Questions'
  const heading = faqDataProps?.heading || 'Frequently Asked Questions About This Area'
  const description = faqDataProps?.description || 'Quick answers to the most common questions.'
  const dynamicFaqs = faqDataProps?.faqs || []

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  if (!dynamicFaqs.length) return null

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  const halfLength = Math.ceil(dynamicFaqs.length / 2)
  const leftColumn = dynamicFaqs.slice(0, halfLength)
  const rightColumn = dynamicFaqs.slice(halfLength)

  const renderCard = (item: { question: string; answer: string }, relIdx: number) => {
    const isOpen = openIndex === relIdx
    return (
      <div
        key={relIdx}
        className="bg-[#FAF9FF] border border-slate-100 rounded-lg shadow-xs overflow-hidden transition-all duration-200"
      >
        <button
          onClick={() => toggleFAQ(relIdx)}
          className="w-full text-left px-6 py-4 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
        >
          <span className="text-[#1d1d1d] font-semibold text-sm sm:text-base">{item.question}</span>
          <span className="text-xl font-bold text-[#a44294]">{isOpen ? '−' : '+'}</span>
        </button>

        {isOpen && (
          <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">{item.answer}</div>
        )}
      </div>
    )
  }

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-8 max-w-2xl">
          <span className="text-[#a44294] font-semibold text-base">{subHeading}</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-1 mb-2">{heading}</h2>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {leftColumn.map((item, idx) => renderCard(item, idx))}
          </div>
          <div className="flex flex-col gap-4">
            {rightColumn.map((item, idx) => renderCard(item, idx + halfLength))}
          </div>
        </div>
      </div>
    </section>
  )
}