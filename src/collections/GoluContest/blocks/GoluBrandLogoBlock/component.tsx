// 'use client'

// import React from 'react'
// import { motion } from 'framer-motion'

// type MediaType = {
//   id?: string | number
//   url?: string
//   alt?: string
//   filename?: string
// }

// type LogoItem = {
//   id?: string | number
//   name?: string
//   src?: MediaType | string | null
// }

// type Props = {
//   sectionTitle?: string
//   logos?: LogoItem[]
//   [key: string]: any
// }

// export const GoluBrandLogoSection = (props: Props) => {
//   const sectionTitle = props.sectionTitle || 'Our Sponsors'
//   const rawLogos =
//     Array.isArray(props.logos) && props.logos.length > 0
//       ? props.logos
//       : [
//           { id: 1, name: 'Partner Logo 1', src: '/images/golu-logo/akshayakalapa.png' },
//           { id: 2, name: 'Partner Logo 2', src: '/images/golu-logo/credai.png' },
//           { id: 3, name: 'Partner Logo 3', src: '/images/golu-logo/giri.png' },
//         ]

//   const getMediaUrl = (imgField: MediaType | string | null | undefined) => {
//     if (!imgField) return ''
//     if (typeof imgField === 'object' && 'url' in imgField) {
//       return (imgField as MediaType).url || ''
//     }
//     if (typeof imgField === 'string') {
//       return imgField
//     }
//     return ''
//   }

//   const formattedLogos = rawLogos.map((logo, index) => ({
//     id: logo.id || index,
//     name: logo.name || `Partner Logo ${index + 1}`,
//     src: getMediaUrl(logo.src),
//   }))

//   const duplicatedLogos = [
//     ...formattedLogos,
//     ...formattedLogos,
//     ...formattedLogos,
//     ...formattedLogos,
//     ...formattedLogos,
//   ]

//   return (
//     <section className="max-w-7xl mx-auto my-10 p-8 md:p-10 bg-white border border-stone-100 rounded-3xl shadow-md font-sans overflow-hidden">
//       <div className="text-center mb-8">
//         <h3 className="text-sm font-black uppercase tracking-widest bg-gradient-to-r from-[#4B1F8A] to-[#F82763] bg-clip-text text-transparent">
//           {sectionTitle}
//         </h3>
//       </div>

//       <div className="relative w-full overflow-hidden flex items-center py-4">
//         {/* Left Blur Overlay */}
//         <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

//         {/* Moving Slider */}
//         <motion.div
//           className="flex items-center gap-10 md:gap-14 whitespace-nowrap"
//           animate={{ x: ['0%', '-50%'] }}
//           transition={{
//             ease: 'linear',
//             duration: 18,
//             repeat: Infinity,
//           }}
//         >
//           {duplicatedLogos.map((logo, idx) => (
//             <div
//               key={idx}
//               className="flex-shrink-0 flex items-center justify-center h-24 md:h-28 w-48 md:w-56 px-6 py-4 bg-white hover:bg-purple-50/40 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer"
//             >
//               <img
//                 src={logo.src}
//                 alt={logo.name}
//                 className="max-h-16 md:max-h-20 w-auto max-w-full object-contain"
//               />
//             </div>
//           ))}
//         </motion.div>

//         {/* Right Blur Overlay */}
//         <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
//       </div>
//     </section>
//   )
// }

'use client'

import React from 'react'
import { motion } from 'framer-motion'

type MediaType = {
  id?: string | number
  url?: string
  alt?: string
  filename?: string
}

type LogoItem = {
  id?: string | number
  name?: string
  logoImage?: MediaType | string | null
}

type Props = {
  sectionTitle?: string
  logos?: LogoItem[]
  [key: string]: any
}

export const GoluBrandLogoSection = (props: Props) => {
  const sectionTitle = props.sectionTitle || 'Our Sponsors'
  const rawLogos = Array.isArray(props.logos) ? props.logos : []

  const getMediaUrl = (imgField: MediaType | string | null | undefined) => {
    if (!imgField) return ''
    if (typeof imgField === 'object' && 'url' in imgField) {
      return (imgField as MediaType).url || ''
    }
    if (typeof imgField === 'string') {
      return imgField
    }
    return ''
  }

  const formattedLogos = rawLogos
    .map((logo, index) => ({
      id: logo.id || index,
      name: logo.name || `Partner Logo ${index + 1}`,
      src: getMediaUrl(logo.logoImage),
    }))
    .filter((logo) => logo.src !== '')

  // Fallback if no images uploaded yet
  const displayLogos =
    formattedLogos.length > 0
      ? formattedLogos
      : [{ id: 1, name: 'Partner Logo', src: '/images/golu-logo/akshayakalapa.png' }]

  const duplicatedLogos = [
    ...displayLogos,
    ...displayLogos,
    ...displayLogos,
    ...displayLogos,
    ...displayLogos,
  ]

  return (
    <section className="max-w-7xl mx-auto my-10 p-8 md:p-10 bg-white border border-stone-100 rounded-3xl shadow-md font-sans overflow-hidden">
      <div className="text-center mb-8">
        <h3 className="text-sm font-black uppercase tracking-widest bg-gradient-to-r from-[#4B1F8A] to-[#F82763] bg-clip-text text-transparent">
          {sectionTitle}
        </h3>
      </div>

      <div className="relative w-full overflow-hidden flex items-center py-4">
        {/* Left Blur Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

        {/* Moving Slider */}
        <motion.div
          className="flex items-center gap-10 md:gap-14 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            ease: 'linear',
            duration: 18,
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 flex items-center justify-center h-24 md:h-28 w-48 md:w-56 px-6 py-4 bg-white hover:bg-purple-50/40 rounded-2xl border border-stone-200/80 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-16 md:max-h-20 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* Right Blur Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  )
}
