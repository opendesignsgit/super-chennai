'use client'
import React, { useRef, useEffect, useState } from 'react'
import './style.css'
import { FormPopupComponent } from '@/blocks/MainPages/SharedBlocks/FormPopup/Components'

type Section = {
  title: string
  description: string
  image: { url: string }
  linkUrl?: string
  linkText?: string
}

type Props = {
  sections: Section[]
}

const HotelsInChennaiSection: React.FC<Props> = ({ sections }) => {
  const bgTextRef = useRef<HTMLDivElement>(null)
  const [scrollDir, setScrollDir] = useState<'left' | 'right'>('left')

  useEffect(() => {
    let lastScrollX = window.scrollX
    const handleScroll = () => {
      const currentX = window.scrollX
      setScrollDir(currentX > lastScrollX ? 'right' : 'left')
      lastScrollX = currentX
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="AccodomationPageBecameVolunteerBg">
      <div
        className={`AccodomationTextBackground ${
          scrollDir === 'right' ? 'scroll-rightAccomodation' : 'scroll-leftAccomodation'
        }`}
        ref={bgTextRef}
      >
        <p>Visit &nbsp; Chennai &nbsp; Visit &nbsp; Chennai</p>
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        {sections.map((section, index) => (
          <div className="AccodoSectionFLex" key={index}>
            {index % 2 === 0 ? (
              <>
                <img src={section.image?.url} alt={section.title} />
                <div className="AccodContentsSection">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                  <div className="AccomoddationPage">
                    <a href={section.linkUrl}>{section.linkText}</a>
                  </div>
                
                </div>
              </>
            ) : (
              <>
                <div className="AccodContentsSection1">
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                  <div className="AccomoddationPage1">
                    <a href={section.linkUrl}>{section.linkText}</a>
                  </div>
                </div>
                <img src={section.image?.url} alt={section.title} />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HotelsInChennaiSection

// CuSTOME API RENDER WORKING VERSION ################

// 'use client'
// import React, { useRef, useEffect, useState } from 'react'
// import './style.css'

// type Section = {
//   title: string
//   description: string
//   image: { url: string }
//   linkUrl?: string
//   linkText?: string
// }

// const HotelsInChennaiSection: React.FC = () => {
//   const [sections, setSections] = useState<Section[]>([])
//   const bgTextRef = useRef<HTMLDivElement>(null)
//   const [scrollDir, setScrollDir] = useState<'left' | 'right'>('left')

//   useEffect(() => {
//     let lastScrollX = window.scrollX
//     const handleScroll = () => {
//       const currentX = window.scrollX
//       setScrollDir(currentX > lastScrollX ? 'right' : 'left')
//       lastScrollX = currentX
//     }
//     const fetchData = async () => {
//       try {
//         const res = await fetch('/api/visits')
//         const data = await res.json()

//         if (!data || !data.docs || data.docs.length === 0) {
//           alert('No data found')
//           return
//         }

//         const children = data?.docs?.[0]?.content?.root?.children || []
//         const block = children.find((child: any) => child.type === 'block' && child.fields?.items)
//         console.log(
//           'Children   ----------------------------------:',
//           data.docs[0]?.content?.root?.children,
//         )

//         const mapped =
//           block?.fields?.items?.map((item: any) => ({
//             title: item.heading,
//             description:
//               item?.description?.root?.children?.[0]?.children?.[0]?.text ??
//               item?.description?.root?.children?.[0]?.text ??
//               '',
//             image: item.image,
//             linkUrl: item.buttonLink,
//             linkText: item.buttonLink || 'Learn More',
//           })) || []
//         console.log('Fetched doc:', data.docs[0])

//         setSections(mapped)
//       } catch (error) {
//         console.error('Error fetching or mapping data:', error)
//       }
//     }
//     window.addEventListener('scroll', handleScroll)
//     fetchData()

//     return () => {
//       window.removeEventListener('scroll', handleScroll)
//     }
//   }, [])

//   return (
//     <div className="AccodomationPageBecameVolunteerBg">
//       <div
//         className={`AccodomationTextBackground ${
//           scrollDir === 'right' ? 'scroll-rightAccomodation' : 'scroll-leftAccomodation'
//         }`}
//         ref={bgTextRef}
//       >
//         <p>Visit &nbsp; Chennai &nbsp; Visit &nbsp; Chennai</p>
//       </div>

//       <div className="container max-w-7xl mx-auto px-4">
//         {sections.map((section, index) => (
//           <div className="AccodoSectionFLex" key={index}>
//             {index % 2 === 0 ? (
//               <>
//                 <img src={section.image?.url} alt={section.title} />
//                 <div className="AccodContentsSection">
//                   <h3>{section.title}</h3>
//                   <p>{section.description}</p>
//                   <div className="AccomoddationPage">
//                     <a href={section.linkUrl}>{section.linkText}</a>
//                   </div>
//                 </div>
//               </>
//             ) : (
//               <>
//                 <div className="AccodContentsSection1">
//                   <h3>{section.title}</h3>
//                   <p>{section.description}</p>
//                   <div className="AccomoddationPage1">
//                     <a href={section.linkUrl}>{section.linkText}</a>
//                   </div>
//                 </div>
//                 <img src={section.image?.url} alt={section.title} />
//               </>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default HotelsInChennaiSection
