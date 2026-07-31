// 'use client'

// import React from 'react'

// type BulletPoint = {
//   id?: string
//   pointText: string
// }

// type PuzzleCard = {
//   id?: string
//   cardTitle: string
//   bulletPoints?: BulletPoint[]
// }

// type ImageWithoutComponentProps = {
//   mainTitle?: string
//   cards?: PuzzleCard[]
// }

// export default function ImageWithoutComponent({
//   mainTitle = '',
//   cards = [],
// }: ImageWithoutComponentProps) {
//   if (!cards || cards.length === 0) return null

//   return (
//     <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
//       <section className="mx-auto p-6 text-gray-800 cards">
//         {/* Main Section Heading */}
//         {mainTitle && <h2 className="text-2xl font-bold text-center mb-6">{mainTitle}</h2>}

//         {/* Puzzle Cards Container */}

//         {cards.map((card, idx) => (
//           <div key={card.id || idx} className="card rounded-2xl p-4 mb-4 shadow">
//             {/* Card Subtitle */}
//             {card.cardTitle && <h3 className="text-lg font-semibold mb-2">{card.cardTitle}</h3>}

//             {/* Bullet Points List */}
//             {card.bulletPoints && card.bulletPoints.length > 0 && (
//               <ul className="list-disc pl-5 space-y-1">
//                 {card.bulletPoints.map((pt, pIdx) => (
//                   <li
//                     key={pt.id || pIdx}
//                     className=""
//                     dangerouslySetInnerHTML={{ __html: pt.pointText }}
//                   />
//                 ))}
//               </ul>
//             )}
//           </div>
//         ))}
//       </section>
//     </div>
//   )
// }

'use client'

import React from 'react'

type BulletPoint = {
  id?: string
  pointText: string
}

type PuzzleCard = {
  id?: string
  cardTitle: string
  bulletPoints?: BulletPoint[]
}

type ParagraphBlock = {
  id?: string
  text: string
}

type ImageWithoutComponentProps = {
  mainTitle?: string
  paragraphBlocks?: ParagraphBlock[]
  cards?: PuzzleCard[]
}

export default function ImageWithoutComponent({
  mainTitle = '',
  paragraphBlocks = [],
  cards = [],
}: ImageWithoutComponentProps) {
  if (!cards || cards.length === 0) return null

  return (
    <div className="container max-w-7xl mx-auto px-4 nightlife investchennaisec">
      <section className="mx-auto p-6 text-gray-800 cards listdatacontent">
        {/* Main Section Heading */}
        {mainTitle && <h2 className="text-2xl font-bold text-center !mb-4">{mainTitle}</h2>}

        {/* Optional Sub-Paragraphs under Heading */}
        {paragraphBlocks && paragraphBlocks.length > 0 && (
          <div className="text-center mb-6 space-y-2 max-w-4xl mx-auto">
            {paragraphBlocks.map((p, idx) => (
              <p key={p.id || idx} className="" dangerouslySetInnerHTML={{ __html: p.text }} />
            ))}
          </div>
        )}

        {/* Puzzle Cards Container */}
        {cards.map((card, idx) => (
          <div key={card.id || idx} className="card rounded-2xl p-4 mb-4 shadow">
            {/* Card Subtitle */}
            {card.cardTitle && <h3 className="text-lg font-semibold mb-2">{card.cardTitle}</h3>}

            {/* Bullet Points List */}
            {card.bulletPoints && card.bulletPoints.length > 0 && (
              <ul className="list-disc pl-5 space-y-1">
                {card.bulletPoints.map((pt, pIdx) => (
                  <li
                    key={pt.id || pIdx}
                    className=""
                    dangerouslySetInnerHTML={{ __html: pt.pointText }}
                  />
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
    </div>
  )
}
