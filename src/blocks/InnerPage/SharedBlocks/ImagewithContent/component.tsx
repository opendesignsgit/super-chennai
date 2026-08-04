'use client'

import React from 'react'

type Media = {
  url?: string
  alt?: string
}

type ListItem = {
  id?: string
  itemText: string
}

type ContentBlock = {
  id?: string
  type: 'paragraph' | 'list'
  paragraphText?: string
  listItems?: ListItem[]
}

type ImagewithContentProps = {
  sectionTitle?: string
  mainImage?: Media | string
  contentBlocks?: ContentBlock[]
}

export default function ImagewithContentComponent({
  sectionTitle = 'Key Highlights',
  mainImage,
  contentBlocks = [
    {
      type: 'paragraph',
      paragraphText:
        "Chennai is not just about culture and coastlines—it's one of India's leading technology and software hubs. The city hosts a thriving IT ecosystem catering to global markets.",
    },
    {
      type: 'list',
      listItems: [
        { itemText: '<strong>4th largest IT exporter</strong> in India.' },
        { itemText: '<strong>600+ IT parks</strong> across the metro region.' },
        { itemText: '<strong>$21+ billion annually</strong> in software exports.' },
      ],
    },
    {
      type: 'paragraph',
      paragraphText:
        'With continuous infrastructure expansions in <strong>OMR & Guindy</strong>, Chennai remains a premier destination for tech talent.',
    },
  ],
}: ImagewithContentProps) {
  const imageUrl = typeof mainImage === 'object' ? mainImage?.url : mainImage

  return (
    <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec cmssectionss">
      <section
        className="imgcontent flex flex-wrap justify-center transition-colors duration-300 
    bg-white whitebgsec"
      >
        <div className="space-y-6 bg-white p-4  rounded bottomListIcon w-full">
          <section className="clcboxItemss flex mb-4">
            {/* Single Main Image Box */}
            <div className="clcboxIImg">
              {imageUrl ? (
                <img src={imageUrl} alt={sectionTitle || 'Section Visual'} className="" />
              ) : (
                <svg
                  className="w-16 h-16 text-[#6b3064]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H9"
                  />
                </svg>
              )}
            </div>

            {/* Dynamic Content Area */}
            <div className="clcboxICont">
              {/* Key Highlights Title */}
              {sectionTitle && <h3 className="text-lg font-semibold !mb-3">{sectionTitle}</h3>}

              {/* Mixed Order Blocks: Paragraph -> List -> Paragraph -> List */}
              {contentBlocks &&
                contentBlocks.map((block, idx) => {
                  if (block.type === 'paragraph' && block.paragraphText) {
                    return (
                      <p
                        key={block.id || idx}
                        className="text-gray-700 mb-2"
                        dangerouslySetInnerHTML={{ __html: block.paragraphText }}
                      />
                    )
                  }

                  if (block.type === 'list' && block.listItems) {
                    return (
                      <ul
                        key={block.id || idx}
                        className="list-disc list-inside text-gray-600 space-y-1 mb-2"
                      >
                        {block.listItems.map((li, lIdx) => (
                          <li key={li.id || lIdx} className="">
                            <span dangerouslySetInnerHTML={{ __html: li.itemText }} />
                          </li>
                        ))}
                      </ul>
                    )
                  }

                  return null
                })}
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
