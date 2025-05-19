'use client'
import { useState, useEffect } from 'react'
import { Media } from '@/payload-types'
import './style.css'

type Slide = {
  image: string | Media
  title?: string
  description?: string
}

export default function HeroSliderBlock({ slides = [] }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="herobannerSection">
      <div className="relative w-full h-[90vh] overflow-hidden">
        {slides.map((slide, index) => {
          const imageUrl =
            typeof slide.image === 'string' ? slide.image : slide.image?.url || '/fallback.jpg'

          return (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img src={imageUrl} alt={slide.title || ''} className="w-full h-full object-cover" />
              {/* <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center p-4">
                {slide.title && <h3 className="text-3xl font-bold mb-2">{slide.title}</h3>}
                {slide.description && <p className="max-w-md">{slide.description}</p>}
              </div> */}
            </div>
          )
        })}

        {/* Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-[32px] h-[7px] rounded-full transition-colors duration-300 ${
                current === i ? 'bg-[#995098]' : 'bg-[#b6bec5] hover:bg-[#995098]'
              }`}
              style={{ border: 'none' }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}
