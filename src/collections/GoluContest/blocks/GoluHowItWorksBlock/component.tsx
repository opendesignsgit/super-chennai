'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

type MediaType = {
  id?: string | number
  url?: string
  alt?: string
  filename?: string
}

type StepType = {
  id: string
  title: string
  description: string
  icon?: MediaType | number | string | null
  circleBorder?: string
  color?: string
}

type Props = {
  headerTitle?: string
  steps?: StepType[]
}

export default function GoluHowItWorksBlockComponent({
  headerTitle = 'HOW IT WORKS',
  steps = [],
}: Props) {
  const getMediaUrl = (imgField: MediaType | number | string | null | undefined) => {
    if (typeof imgField === 'object' && imgField !== null && 'url' in imgField) {
      return (imgField as MediaType).url
    }
    if (typeof imgField === 'string') {
      return imgField
    }
    return null
  }

  return (
    <section className="max-w-7xl mx-auto my-8 p-6 md:p-10 bg-white rounded-3xl border border-gray-100 shadow-sm font-sans">
      <div className="flex items-center justify-center space-x-4 mb-10">
        <span className="h-[2px] w-12 bg-pink-500 rounded-full"></span>
        <h2 className="text-xl md:text-2xl font-black text-indigo-950 font-bold uppercase text-center">
          {headerTitle}
        </h2>
        <span className="h-[2px] w-12 bg-pink-500 rounded-full"></span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 items-start relative">
        {steps.map((step, index) => {
          const iconUrl = getMediaUrl(step.icon)

          return (
            <div
              key={step.id || index}
              className="flex flex-col items-center text-center relative group"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className={`w-18 h-18 rounded-full ${
                    step.circleBorder || 'border-indigo-300 bg-indigo-50/20'
                  } flex items-center justify-center shadow-sm shrink-0 overflow-hidden`}
                >
                  {iconUrl ? (
                    <Image
                      src={iconUrl}
                      alt={step.title || 'Step icon'}
                      width={72}
                      height={72}
                      className="w-18 h-18 object-cover text-white"
                    />
                  ) : (
                    <span className="text-xl">⭐</span>
                  )}
                </div>

                <div className="text-left">
                  <span
                    className={`text-xl font-black ${
                      step.color || 'text-indigo-900'
                    } block leading-none`}
                  >
                    {step.id}
                  </span>
                  <h3
                    className={`text-xs font-black ${
                      step.color || 'text-indigo-900'
                    } uppercase font-bold mt-0.5`}
                  >
                    {step.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#000] leading-relaxed max-w-[150px] text-left">
                {step.description}
              </p>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -right-3 top-6 text-purple-900 opacity-60">
                  <ArrowRight size={18} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}