'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

type AwardsBlockProps = {
  title: string
  image: any
  awardsList: { title: string; id?: string }[]
}

export default function AwardsBlockComponent({ title, image, awardsList }: AwardsBlockProps) {
  const listRef = useRef<HTMLDivElement>(null)
  const imageUrl = image && typeof image === 'object' ? image.url : ''

  useEffect(() => {
    const list = listRef.current
    if (!list || !awardsList || awardsList.length === 0) return

    let scrollAmount = 0
    const speed = 0.9
    let animationFrameId: number
    let isPaused = false

    const scrollList = () => {
      if (!isPaused && list.scrollHeight > list.clientHeight) {
        scrollAmount += speed
        if (scrollAmount >= list.scrollHeight - list.clientHeight) {
          scrollAmount = 0
        }
        list.scrollTop = scrollAmount
      }
      animationFrameId = requestAnimationFrame(scrollList)
    }

    const handleMouseEnter = () => { isPaused = true }
    const handleMouseLeave = () => { isPaused = false }

    list.addEventListener('mouseenter', handleMouseEnter)
    list.addEventListener('mouseleave', handleMouseLeave)
    animationFrameId = requestAnimationFrame(scrollList)

    return () => {
      cancelAnimationFrame(animationFrameId)
      list.removeEventListener('mouseenter', handleMouseEnter)
      list.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [awardsList])
  

  return (
    <section className="awards-section">
      <h2 className="awards-title">{title}</h2>
      <p className="awards-subtitle"></p>
      <div className="awards-container flex flex-col md:flex-row gap-6 items-center">
        <div className="relative w-full md:w-1/2 h-[350px]">
          {imageUrl && (
            <Image 
              src={imageUrl} 
              alt="Awards compilation" 
              fill 
              className="object-cover rounded"
            />
          )}
        </div>
        <div
          ref={listRef}
          className="awards-list max-h-140 overflow-y-auto w-full md:w-1/2"
          style={{ scrollbarWidth: 'thin' }}
        >
          {awardsList?.map((award) => (
            <div key={award.id} className="awards-item whitespace-pre-line">
              {award.title}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}