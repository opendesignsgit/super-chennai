// 'use client'

// import React from 'react'

// type BrandItem = {
//   id?: string
//   title: string
//   description?: string
// }

// type ExpandingBrandProps = {
//   mainTitle?: string
//   subTitle?: string
//   items?: BrandItem[]
//   blockType?: string
// }

// export default function ExpandingBrandComponent(props: ExpandingBrandProps) {
//   const brandItems = props.items || []

//   if (!brandItems || brandItems.length === 0) {
//     return null
//   }

//   return (
//     <section className="awards-section expandingBrand">
//       <div className="awards-container">
//         <h2>
//           {props.mainTitle ? (
//             props.mainTitle
//           ) : (
//             <>
//               Expanding <br /> the Brand
//             </>
//           )}
//         </h2>

//         <div className="awards-list">
//           {props.subTitle && <h5>{props.subTitle}</h5>}

//           {brandItems.map((award, index) => (
//             <div key={award.id || index} className="awards-item">
//               <strong>{award.title}</strong>
//               {award.description && <p className="award-description">{award.description}</p>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// 'use client'

// import React, { useEffect, useRef } from 'react'

// type BrandItem = {
//   id?: string
//   title: string
//   description?: string
// }

// type ExpandingBrandProps = {
//   mainTitle?: string
//   subTitle?: string
//   items?: BrandItem[]
//   blockType?: string
// }

// // Helper function to render text with <br> support safely
// const renderFormattedText = (text: string) => {
//   if (!text) return null
//   return text.split(/<br\s*\/?>/i).map((part, index, array) => (
//     <React.Fragment key={index}>
//       {part}
//       {index < array.length - 1 && <br />}
//     </React.Fragment>
//   ))
// }

// export default function ExpandingBrandComponent(props: ExpandingBrandProps) {
//   const brandItems = props.items || []

//   if (!brandItems || brandItems.length === 0) {
//     return null
//   }

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
//       cancelAnimationFrame()
//       list.removeEventListener('mouseenter', handleMouseEnter)
//       list.removeEventListener('mouseleave', handleMouseLeave)
//     }
//   }, [awardsData])

//   return (
//     <section className="awards-section expandingBrand poppinsfamilyyy">
//       <div className="awards-container">
//         {/* Title-la <br> pota automatic-ah new line varum */}
//         <h2 className="whitespace-pre-line">
//           {props.mainTitle ? (
//             renderFormattedText(props.mainTitle)
//           ) : (
//             <>
//               Expanding <br /> the Brand
//             </>
//           )}
//         </h2>

//         <div
//           ref={listRef}
//           className="awards-list max-h-140 overflow-y-auto"
//           style={{
//             scrollbarWidth: 'thin',
//           }}
//         >
//           {/* Subtitle-la <br> support */}
//           {props.subTitle && <h5>{renderFormattedText(props.subTitle)}</h5>}

//           {brandItems.map((award, index) => (
//             <div key={award.id || index} className="awards-item">
//               <p className="award-description">{renderFormattedText(award.title)}</p>
//               {award.description && (
//                 <p className="award-description whitespace-pre-line">
//                   {renderFormattedText(award.description)}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import React, { useEffect, useRef } from 'react'

type BrandItem = {
  id?: string
  title: string
  description?: string
}

type ExpandingBrandProps = {
  mainTitle?: string
  subTitle?: string
  items?: BrandItem[]
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

export default function ExpandingBrandComponent(props: ExpandingBrandProps) {
  const brandItems = props.items || []
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const list = listRef.current
    if (!list || brandItems.length === 0) return

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

    // Dynamic scroll sync if user manually scrolls
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
  }, [brandItems])

  if (!brandItems || brandItems.length === 0) {
    return null
  }

  return (
    <section className="awards-section expandingBrand poppinsfamilyyy">
      <div className="awards-container">
        {/* Title-la <br> pota automatic-ah new line varum */}
        <h2 className="whitespace-pre-line">
          {props.mainTitle ? (
            renderFormattedText(props.mainTitle)
          ) : (
            <>
              Expanding <br /> the Brand
            </>
          )}
        </h2>

        <div
          ref={listRef}
          className="awards-list max-h-140 overflow-y-auto"
          style={{
            scrollbarWidth: 'thin',
          }}
        >
          {/* Subtitle-la <br> support */}
          {props.subTitle && <h5>{renderFormattedText(props.subTitle)}</h5>}

          {brandItems.map((award, index) => (
            <div key={award.id || index} className="awards-item">
              <p className="award-description">{renderFormattedText(award.title)}</p>
              {award.description && (
                <p className="award-description whitespace-pre-line">
                  {renderFormattedText(award.description)}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
