'use client'

import React from 'react'

type ContentItem = {
  id?: string
  itemText: string
}

type CategoryItem = {
  id?: string
  title: string
  image?:
    | {
        url?: string
        alt?: string
      }
    | string
  contentList?: ContentItem[]
}

type SocialLeadershipProps = {
  categories?: CategoryItem[]
  blockType?: string
}

// Helper function to render text with <br> support safely
const renderFormattedText = (text: string) => {
  if (!text) return null
  return text.split(/<br\s*\/?>/i).map((part, index, array) => (
    <React.Fragment key={index}>
      {part}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ))
}

export default function SocialLeadershipComponent(props: SocialLeadershipProps) {
  const categories = props.categories || []

  if (!categories || categories.length === 0) {
    return null
  }

  return (
    <div className="naturals-container">
      {categories.map((section, index) => {
        // Extract image URL safely
        const imageUrl =
          typeof section.image === 'object' && section.image?.url
            ? section.image.url
            : typeof section.image === 'string'
              ? section.image
              : ''

        return (
          <div className="naturals-section" key={section.id || index}>
            {imageUrl && (
              <img
                src={imageUrl}
                alt={
                  typeof section.image === 'object' && section.image?.alt
                    ? section.image.alt
                    : 'Section Icon'
                }
                className="section-icon"
              />
            )}

            <h2 className="whitespace-pre-line">{renderFormattedText(section.title)}</h2>

            {section.contentList?.map((contentItem, idx) => (
              <p key={contentItem.id || idx}>
                {/* dangerouslySetInnerHTML allows <strong> tags stored in CMS to render properly */}
                <span dangerouslySetInnerHTML={{ __html: contentItem.itemText }} />
              </p>
            ))}
          </div>
        )
      })}
    </div>
  )
}
