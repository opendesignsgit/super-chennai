'use client'

import React from 'react'

type PrizeItem = {
  id?: string | number
  badge?: string
  title?: string
  description?: string
  iconEmoji?: string
  cardBgColor?: string
}

type Props = {
  headerTitle?: string
  subTitle?: string
  prizesList?: PrizeItem[]
  [key: string]: any
}

export default function GoluPrizesBlockComponent(props: Props) {
  const headerTitle = props.headerTitle || 'EXCITING PRIZES & CATEGORIES'
  const subTitle = props.subTitle || 'Celebrate creativity with wonderful rewards'
  const prizesList = Array.isArray(props.prizesList) ? props.prizesList : []

  return (
    <section className="max-w-7xl mx-auto my-12 p-6 md:p-12 bg-white rounded-3xl border border-gray-100 shadow-sm font-sans">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <div className="flex items-center justify-center space-x-4 mb-2">
          <span className="h-[2px] w-12 bg-pink-500 rounded-full"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-[#4B1F8A]">
            Rewards & Recognition
          </span>
          <span className="h-[2px] w-12 bg-pink-500 rounded-full"></span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black uppercase bg-gradient-to-r from-[#4B1F8A] to-[#F82763] bg-clip-text text-transparent">
          {headerTitle}
        </h2>
        <p className="text-stone-600 text-sm md:text-base">{subTitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {prizesList.length > 0 ? (
          prizesList.map((prize, index) => (
            <div
              key={prize.id || index}
              className={`p-8 rounded-2xl border ${prize.cardBgColor || 'bg-purple-50/50 border-purple-100'} flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 shadow-sm`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl">{prize.iconEmoji || '🏆'}</span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs font-bold text-[#4B1F8A] shadow-xs uppercase tracking-wider">
                    {prize.badge}
                  </span>
                </div>

                <h3 className="text-lg font-black text-[#312c85] uppercase mb-3">{prize.title}</h3>

                <p className="text-stone-600 text-sm leading-relaxed">{prize.description}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200/50 flex items-center text-xs font-bold text-[#F82763] uppercase tracking-wider">
                <span>Super Chennai Golu Award</span>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-stone-400 py-6">No prizes configured yet.</p>
        )}
      </div>
    </section>
  )
}
