// 'use client'

// import React, { useEffect, useRef } from 'react'
// import Image from 'next/image'

// type AwardItem = {
//   id?: string
//   title: string
// }

// type AwardsMilestonesProps = {
//   awardsTitle?: string
//   awardsSubtitle?: string
//   awardsImage?:
//     | {
//         url?: string
//         alt?: string
//       }
//     | string
//   awardsList?: AwardItem[]
//   awardsNote?: string
//   blockType?: string
// }

// export default function AwardsMilestonesComponent(props: AwardsMilestonesProps) {
//   const awards = props.awardsList || []

//   const listRef = useRef(null)

//   useEffect(() => {
//     const list = listRef.current
//     if (!list) return

//     let scrollAmount = 0
//     const speed = 0.9
//     let animationFrameId
//     let isPaused = false

//     const scrollList = () => {
//       if (!isPaused && list.scrollHeight > list.clientHeight) {
//         scrollAmount += speed

//         // Reset when reaching the bottom
//         if (scrollAmount >= list.scrollHeight - list.clientHeight) scrollAmount = 0

//         list.scrollTop = scrollAmount
//       }
//       animationFrameId = requestAnimationFrame(scrollList)
//     }

//     const handleMouseEnter = () => {
//       isPaused = true
//     }

//     const handleMouseLeave = () => {
//       isPaused = false
//     }

//     list.addEventListener('mouseenter', handleMouseEnter)
//     list.addEventListener('mouseleave', handleMouseLeave)

//     animationFrameId = requestAnimationFrame(scrollList)

//     return () => {
//       cancelAnimationFrame(animationFrameId)
//       list.removeEventListener('mouseenter', handleMouseEnter)
//       list.removeEventListener('mouseleave', handleMouseLeave)
//     }
//   }, [awardsData])

//   // Extract image URL safely whether it's populated object or string path
//   const imageUrl =
//     typeof props.awardsImage === 'object' && props.awardsImage?.url
//       ? props.awardsImage.url
//       : typeof props.awardsImage === 'string'
//         ? props.awardsImage
//         : '/images/award-milstone-img.jpg'

//   return (
//     <section className="awards-section poppinsfamilyyy">
//       <h2 className="awards-title">{props.awardsTitle || 'AWARDS & MILESTONES'}</h2>

//       {props.awardsSubtitle && <p className="awards-subtitle">{props.awardsSubtitle}</p>}

//       <p className="awards-subtitle"></p>

//       <div className="awards-container">
//         <img
//           alt={
//             typeof props.awardsImage === 'object' && props.awardsImage?.alt
//               ? props.awardsImage.alt
//               : 'foundations'
//           }
//           src={imageUrl}
//         />

//         <div className="awards-list max-h-140 overflow-y-auto">
//           {awards.map((award, index) => (
//             <div key={award.id || index} className="awards-item">
//               {award.title}
//             </div>
//           ))}

//           {props.awardsNote && <p className="awards-note">{props.awardsNote}</p>}
//         </div>
//       </div>
//     </section>
//   )
// }
'use client'

import React, { useEffect, useRef } from 'react'

type AwardItem = {
  id?: string
  title: string
}

type AwardsMilestonesProps = {
  awardsTitle?: string
  awardsSubtitle?: string
  awardsImage?:
    | {
        url?: string
        alt?: string
      }
    | string
  awardsList?: AwardItem[]
  awardsNote?: string
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

export default function AwardsMilestonesComponent(props: AwardsMilestonesProps) {
  const awards = props.awardsList || []
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const list = listRef.current
    if (!list || awards.length === 0) return

    let scrollAmount = list.scrollTop
    const speed = 0.9
    let animationFrameId: number
    let isPaused = false

    const scrollList = () => {
      if (!isPaused && list.scrollHeight > list.clientHeight) {
        scrollAmount += speed

        // Reset when reaching the bottom
        if (scrollAmount >= list.scrollHeight - list.clientHeight) {
          scrollAmount = 0
        }

        list.scrollTop = scrollAmount
      }
      animationFrameId = requestAnimationFrame(scrollList)
    }

    const handleMouseEnter = () => {
      isPaused = true
    }

    const handleMouseLeave = () => {
      isPaused = false
    }

    const handleScroll = () => {
      if (!isPaused) {
        scrollAmount = list.scrollTop
      }
    }

    list.addEventListener('mouseenter', handleMouseEnter)
    list.addEventListener('mouseleave', handleMouseLeave)
    list.addEventListener('scroll', handleScroll)

    animationFrameId = requestAnimationFrame(scrollList)

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
      list.removeEventListener('mouseenter', handleMouseEnter)
      list.removeEventListener('mouseleave', handleMouseLeave)
      list.removeEventListener('scroll', handleScroll)
    }
  }, [awards])

  // Extract image URL safely whether it's populated object or string path
  const imageUrl =
    typeof props.awardsImage === 'object' && props.awardsImage?.url
      ? props.awardsImage.url
      : typeof props.awardsImage === 'string'
        ? props.awardsImage
        : '/images/award-milstone-img.jpg'

  return (
    <section className="awards-section poppinsfamilyyy">
      <h2 className="awards-title whitespace-pre-line">
        {renderFormattedText(props.awardsTitle || 'AWARDS & MILESTONES')}
      </h2>

      {props.awardsSubtitle && (
        <p className="awards-subtitle whitespace-pre-line">
          {renderFormattedText(props.awardsSubtitle)}
        </p>
      )}

      <p className="awards-subtitle"></p>

      <div className="awards-container">
        <img
          alt={
            typeof props.awardsImage === 'object' && props.awardsImage?.alt
              ? props.awardsImage.alt
              : 'foundations'
          }
          src={imageUrl}
        />

        <div
          ref={listRef}
          className="awards-list max-h-140 overflow-y-auto"
          style={{ scrollbarWidth: 'thin' }}
        >
          {awards.map((award, index) => (
            <div key={award.id || index} className="awards-item whitespace-pre-line">
              {renderFormattedText(award.title)}
            </div>
          ))}

          {props.awardsNote && (
            <p className="awards-note whitespace-pre-line">
              {renderFormattedText(props.awardsNote)}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
