// 'use client'

// import React from 'react'
// import Image from 'next/image'
// import { Image as ImageIcon } from 'lucide-react'

// type MediaType = {
//   id?: string | number
//   url?: string
//   alt?: string
//   filename?: string
// }

// type DescriptionItem = {
//   text?: string
// }

// type StageItem = {
//   stageBadge?: string
//   badgeColor?: string
//   cardBgColor?: string
//   icon?: MediaType | number | string | null
//   title?: string
//   subtitle?: string
//   descriptions?: DescriptionItem[]
// }

// type Props = {
//   blockFields?: {
//     headerTitle?: string
//     stages?: StageItem[]
//   }
//   headerTitle?: string
//   stages?: StageItem[]
// }

// export default function GoluJudgingBlockComponent(props: Props) {
//   const fields = props.blockFields || props;
//   const headerTitle = fields.headerTitle || 'How Will Your Golu Be Judged?'
//   const stages = fields.stages || []

//   const getMediaUrl = (imgField: MediaType | number | string | null | undefined) => {
//     if (typeof imgField === 'object' && imgField !== null && 'url' in imgField) {
//       return (imgField as MediaType).url || null
//     }
//     if (typeof imgField === 'string') {
//       return imgField
//     }
//     return null
//   }

//   return (
//     <section className="max-w-7xl mx-auto my-8 p-6 md:p-10 bg-white rounded-3xl shadow-lg border border-gray-100 font-sans">
//       <div className="flex items-center justify-center gap-4 mb-8">
//         <span className="h-[2px] w-12 md:w-20 bg-pink-500"></span>
//         <h2 className="text-xl md:text-3xl font-bold text-indigo-950 text-center uppercase">
//           {headerTitle}
//         </h2>
//         <span className="h-[2px] w-12 md:w-20 bg-pink-500"></span>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
//         {stages.map((stage, index) => {
//           const iconUrl = getMediaUrl(stage.icon)

//           return (
//             <div key={index} className="relative pt-6">
//               <div
//                 className={`absolute top-2 left-1/2 -translate-x-1/2 z-10 font-bold text-xs px-6 py-1.5 rounded-full uppercase shadow-sm text-[15px] ${
//                   stage.badgeColor || 'bg-indigo-900 text-white'
//                 }`}
//               >
//                 {stage.stageBadge}
//               </div>

//               <div
//                 className={`border rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full shadow-sm hover:shadow-md transition-shadow ${
//                   stage.cardBgColor || 'bg-purple-50/50 border-purple-100'
//                 }`}
//               >
//                 <div className="w-full flex flex-col h-full">
//                   <div className="flex flex-col items-center">
//                     <div className="w-24 h-24 rounded-full border-purple-200 flex items-center justify-center mb-4 text-indigo-900 relative">
//                       {iconUrl ? (
//                         <Image
//                           src={iconUrl}
//                           alt={stage.title || 'Judging stage icon'}
//                           width={96}
//                           height={96}
//                           className="w-24 h-24 object-contain rounded-full"
//                         />
//                       ) : (
//                         <ImageIcon className="w-12 h-12 opacity-50" />
//                       )}
//                     </div>
//                     <div>
//                       <h3 className="text-xl md:text-2xl font-black text-indigo-950 uppercase font-bold">
//                         {stage.title}
//                       </h3>
//                       {stage.subtitle && (
//                         <p className="text-xs md:text-sm font-black text-black uppercase mt-1 mb-3 font-bold">
//                           {stage.subtitle}
//                         </p>
//                       )}
//                     </div>
//                   </div>

//                   <div className="space-y-4 mt-auto w-full">
//                     {stage.descriptions?.map((desc, descIdx) => (
//                       <p
//                         key={descIdx}
//                         className={`text-xs md:text-sm text-gray-600 font-medium max-w-full ${
//                           descIdx > 0 ? 'pt-[15px]' : ''
//                         }`}
//                       >
//                         {desc.text}
//                       </p>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </section>
//   )
// }