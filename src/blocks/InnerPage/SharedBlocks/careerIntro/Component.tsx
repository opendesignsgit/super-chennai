'use client'

import React from 'react'
import Marquee from 'react-fast-marquee'
import '../style.css'
type CareerIntroProps = {
  title?: string
  description?: string
  marqueeText?: string
}

export default function CareerIntro({ title, description, marqueeText }: CareerIntroProps) {
  return (
    <section className="costlcIntrosec Secpadblock bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="SecTitletb text-center mb-[8vh]">
          {title && <h2>{title}</h2>}
          {description && (
            <p dangerouslySetInnerHTML={{ __html: description.replace(/\n/g, '<br/>') }} />
          )}
        </div>
      </div>
      {marqueeText && (
        <div className="marqueetag">
          <Marquee>{marqueeText.repeat(3)}</Marquee>
        </div>
      )}
    </section>
  )
}
