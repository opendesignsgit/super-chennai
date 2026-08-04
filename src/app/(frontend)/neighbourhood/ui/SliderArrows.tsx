import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    aria-label="Next slide"
    className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-800 shadow hover:bg-white z-20 transition-opacity text-lg"
  >
    <ChevronRight className="w-5 h-5 text-[#a44294]" strokeWidth={3} />
  </button>
)

export const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    aria-label="Previous slide"
    className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-800 shadow hover:bg-white z-20 transition-opacity text-lg"
  >
    <ChevronLeft className="w-5 h-5 text-[#a44294]" strokeWidth={3} />
  </button>
)