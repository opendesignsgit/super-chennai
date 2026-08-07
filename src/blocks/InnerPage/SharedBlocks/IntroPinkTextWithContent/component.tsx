'use client'

import React from 'react'

type ParagraphItem = {
  id?: string
  text: string
}

type WorkIntroProps = {
  backgroundWatermarkText?: string
  title?: string
  paragraphs?: ParagraphItem[]
}

export default function IntroPinkTextWithComponent({
  backgroundWatermarkText = 'Work   in Chennai   Work   in Chennai',
  title = 'Working in Chennai',
  paragraphs = [
    {
      text: "In Chennai, striking a work-life balance can be challenging. However, you may work on it in peace if you've learned how to handle it. Setting limits and making time a priority will be crucial for family folks. Hobbies and social connections will help bacheolors and spinsters unwind. Everyone should prioritize their well-being in order to succeed both personally and professionally.",
    },
  ],
}: WorkIntroProps) {
  return (
    <div className="visitIntroParaSection detailIntro paddingbottommmm">
      <div className="container max-w-7xl mx-auto px-4">
        {backgroundWatermarkText && (
          <div className="CostOflivingBackground scroll-leftCostofLiving">
            <p>{backgroundWatermarkText}</p>
          </div>
        )}
        <div className="workIntro">
          {title && <h1>{title}</h1>}
          {paragraphs && paragraphs.map((item, index) => <p key={item.id || index}>{item.text}</p>)}
        </div>
      </div>
    </div>
  )
}
