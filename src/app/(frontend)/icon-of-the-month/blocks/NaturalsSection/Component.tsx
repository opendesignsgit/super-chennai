'use client'

import React from 'react'
import Image from 'next/image'

type SectionContentItem = {
  paragraph: string
  id?: string
}

type NaturalsSection = {
  title: string
  image:
    | {
        url: string
        alt?: string
      }
    | string
  content: SectionContentItem[]
  id?: string
}

type NaturalsBlockProps = {
  sections: NaturalsSection[]
}

export default function NaturalsBlockComponent({ sections }: NaturalsBlockProps) {
  if (!sections || sections.length === 0) return null

  return (
    <div className="naturals-container">
      {sections.map((section, index) => {
        // Resolve the image URL dynamically (handles both populated object and ID string cases)
        const imageUrl = section.image && typeof section.image === 'object' ? section.image.url : ''

        const imageAlt =
          section.image && typeof section.image === 'object'
            ? section.image.alt || section.title
            : 'Section image'

        return (
          <div className="naturals-section" key={section.id || index}>
            {/* Render title safely keeping any <br /> tags entered by the user */}
            <h2 dangerouslySetInnerHTML={{ __html: section.title }} />

            {/* Render optional section image if layout styling requires it */}
            {imageUrl && (
              <div className="relative w-full h-[250px] my-4">
                <Image src={imageUrl} alt={imageAlt} fill className="object-cover rounded" />
              </div>
            )}

            {/* Render content list */}
            {section.content?.map((item, idx) => (
              <p key={item.id || idx} dangerouslySetInnerHTML={{ __html: item.paragraph }} />
            ))}
          </div>
        )
      })}
    </div>
  )
}
