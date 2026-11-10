'use client'

import React from 'react'

type ParagraphItem = {
  id?: string
  text: string
}

type GenZStageProps = {
  mainTitle?: string
  columnOneParagraphs?: ParagraphItem[]
  columnTwoParagraphs?: ParagraphItem[]
}

export default function NammaStoriesGenZStageSection(props: GenZStageProps) {
  const col1 = props.columnOneParagraphs || []
  const col2 = props.columnTwoParagraphs || []

  return (
    <section className="newsectionnambaaagenx py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <h2 className="sc-main-title text-4xl lg:text-5xl font-bold mb-10">
          Chennai, <span className="sc-text-blue text-blue-500">This is </span>
          <span className="sc-text-pink text-pink-500">Your Stage.</span>
        </h2>

        <div className="newflexconatinerrrr grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Column 1 */}
          <div className="space-y-6">
            {col1.map((p, index) => (
              <p key={p.id || index} className="sc-description">
                {p.text}
              </p>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {col2.map((p, index) => {
              // Highlight the last line or specific text if needed matching your styling
              const isLast = index === col2.length - 1
              if (isLast) {
                return (
                  <p key={p.id || index} className="sc-description">
                    <span className="sc-text-blue text-blue-500 font-medium">
                      This is your chance to be seen,{' '}
                      <span className="sc-text-pink text-pink-500 font-bold">
                        heard, and featured
                      </span>
                    </span>
                  </p>
                )
              }
              return (
                <p key={p.id || index} className="sc-description">
                  {p.text}
                </p>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
