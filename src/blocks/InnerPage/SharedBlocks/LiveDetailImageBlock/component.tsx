// 'use client'

// import React from 'react'
// import Image from 'next/image'

// type MediaType = {
//   id?: string | number
//   url?: string
//   alt?: string
//   filename?: string
// }

// type PointItem = {
//   id?: string | number
//   title?: string
//   desc?: string
//   imgs?: MediaType | string | null
//   para?: string | { bulletText?: string }[] | string[] // Supports both newline strings & legacy arrays safely
//   location?: string
// }

// type TenantSection = {
//   id?: string | number
//   title?: string
//   points?: PointItem[]
// }

// type ImageSection = {
//   id?: string | number
//   tenantInfoSections?: TenantSection[]
// }

// type Props = {
//   imageSections?: ImageSection[]
//   [key: string]: any
// }

// export default function LiveDetailImageSectionComponent({ imageSections = [] }: Props) {
//   const sections = Array.isArray(imageSections) ? imageSections : []

//   const getMediaUrl = (imgField: MediaType | string | null | undefined) => {
//     if (!imgField) return ''
//     if (typeof imgField === 'object' && imgField !== null && 'url' in imgField) {
//       return (imgField as MediaType).url || ''
//     }
//     if (typeof imgField === 'string') {
//       return imgField
//     }
//     return ''
//   }

//   return (
//     <div className="container max-w-7xl mx-auto px-4 nightlife investchennaisec funchennai">
//       {sections.map((section, index) => {
//         const bgClass = index % 2 === 0 ? 'bg-white whitebgsec' : 'bg-[#f7f7f7] colorbgsec'
//         const patternClass =
//           index % 3 === 0 ? 'pattern-a' : index % 3 === 1 ? 'pattern-b' : 'pattern-c'

//         return (
//           <section
//             className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 ${bgClass} ${patternClass}`}
//             key={section.id || index}
//           >
//             <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
//               {section.tenantInfoSections?.map((tenant, i) => (
//                 <div key={tenant.id || i}>
//                   <h2 className="text-2xl font-semibold text-indigo-700 mb-6 text-center">
//                     {tenant.title || 'Popular Horror Houses & Haunted Attractions in Chennai'}
//                   </h2>

//                   {tenant.points?.map((item, j) => {
//                     const imageUrl = getMediaUrl(item.imgs)

//                     // Safely parse bullet points from newline-separated string OR array
//                     let bulletList: string[] = []
//                     if (typeof item.para === 'string') {
//                       bulletList = item.para.split('\n').filter((str) => str.trim().length > 0)
//                     } else if (Array.isArray(item.para)) {
//                       bulletList = item.para.map((p) =>
//                         typeof p === 'object' && p !== null && 'bulletText' in p
//                           ? p.bulletText || ''
//                           : String(p || ''),
//                       )
//                     }

//                     return (
//                       <div key={item.id || j} className="clcboxItemss flex mb-4 gap-4">
//                         <div className="clcboxIImg relative w-48 h-36 shrink-0 bg-gray-100 rounded-lg overflow-hidden">
//                           {imageUrl ? (
//                             <Image
//                               src={imageUrl}
//                               alt={item.title || 'Attraction image'}
//                               fill
//                               className="object-cover"
//                             />
//                           ) : (
//                             <div className="flex items-center justify-center h-full text-xs text-gray-400">
//                               No Image
//                             </div>
//                           )}
//                         </div>

//                         <div className="clcboxICont flex-1">
//                           <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
//                           <h5 className="text-sm text-gray-600 mt-1 mb-2">{item.desc}</h5>

//                           <ul className="list-disc list-inside text-gray-600 space-y-1">
//                             {bulletList.map((pointText, k) => {
//                               if (!pointText) return null

//                               if (pointText.includes(':')) {
//                                 const [prefix, ...rest] = pointText.split(':')
//                                 return (
//                                   <li key={k}>
//                                     <strong>{prefix}:</strong> {rest.join(':').trim()}
//                                   </li>
//                                 )
//                               }

//                               return <li key={k}>{pointText}</li>
//                             })}
//                           </ul>

//                           {item.location && (
//                             <div className="mt-2 exploreMorebuttonVisitChennai">
//                               <a
//                                 className="text-blue-600 hover:underline text-sm font-medium inline-block"
//                                 href={item.location}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 data-discover="true"
//                               >
//                                 View on Map
//                               </a>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     )
//                   })}
//                 </div>
//               ))}
//             </div>
//           </section>
//         )
//       })}
//     </div>
//   )
// }

'use client'

import React from 'react'
import Image from 'next/image'

type MediaType = {
  id?: string | number
  url?: string
  alt?: string
  filename?: string
}

type PointItem = {
  id?: string | number
  title?: string
  desc?: string
  imgs?: MediaType | string | null
  para?: string | { bulletText?: string }[] | string[]
  location?: string
}

type Props = {
  sectionTitle?: string
  points?: PointItem[]
  [key: string]: any
}

export default function LiveDetailImageSectionComponent(props: Props) {
  // Single Main Title for Section
  const sectionTitle =
    props.sectionTitle || 'Popular Horror Houses & Haunted Attractions in Chennai'
  const points = Array.isArray(props.points) ? props.points : []

  const getMediaUrl = (imgField: MediaType | string | null | undefined) => {
    if (!imgField) return ''
    if (typeof imgField === 'object' && imgField !== null && 'url' in imgField) {
      return (imgField as MediaType).url || ''
    }
    if (typeof imgField === 'string') {
      return imgField
    }
    return ''
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 nightlife investchennaisec funchennai">
      <section className="imgcontent flex flex-wrap justify-center transition-colors duration-300 bg-white whitebgsec">
        <div className="space-y-6 bg-white p-4 my-8 rounded bottomListIcon w-full">
          {/* Main Title - Renders ONCE */}
          <h2 className="text-2xl font-semibold text-indigo-700 mb-8 text-center">
            {sectionTitle}
          </h2>

          {/* Multiple Attraction Items (Images + Points + Details) */}
          {points.length > 0 ? (
            points.map((item, j) => {
              const imageUrl = getMediaUrl(item.imgs)

              // Safely parse bullet points from newline-separated string OR array
              let bulletList: string[] = []
              if (typeof item.para === 'string') {
                bulletList = item.para.split('\n').filter((str) => str.trim().length > 0)
              } else if (Array.isArray(item.para)) {
                bulletList = item.para.map((p) =>
                  typeof p === 'object' && p !== null && 'bulletText' in p
                    ? p.bulletText || ''
                    : String(p || ''),
                )
              }

              return (
                <div key={item.id || j} className="clcboxItemss flex mb-4">
                  {/* Attraction Image */}
                  <div className="clcboxIImg">
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={item.title || 'Attraction image'}
                        // className="object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-xs text-gray-400">
                        No Image
                      </div>
                    )}
                  </div>

                  {/* Attraction Details */}
                  <div className="clcboxICont">
                    {item.title && (
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                    )}
                    {item.desc && <h5 className="text-sm text-gray-600 mb-2">{item.desc}</h5>}

                    {/* Multiple Bullet Points */}
                    {bulletList.length > 0 && (
                      <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                        {bulletList.map((pointText, k) => {
                          if (!pointText) return null

                          if (pointText.includes(':')) {
                            const [prefix, ...rest] = pointText.split(':')
                            return (
                              <li key={k}>
                                <strong>{prefix}:</strong> {rest.join(':').trim()}
                              </li>
                            )
                          }

                          return <li key={k}>{pointText}</li>
                        })}
                      </ul>
                    )}

                    {/* Location Link */}
                    {item.location && (
                      <div className="mt-3 exploreMorebuttonVisitChennai">
                        <a
                          className="text-blue-600 hover:underline text-sm font-medium inline-block"
                          href={item.location}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-discover="true"
                        >
                          View on Map
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )
            })
          ) : (
            <p className="text-center text-gray-400 py-4">No attractions added yet.</p>
          )}
        </div>
      </section>
    </div>
  )
}
