// 'use client'

// import React from 'react'

// type InfraBoom2026Props = {
//   title?: string
//   description?: string
//   buttonText?: string
//   buttonLink?: string
// }

// export default function InfraBoom2026Component({
//   title = 'Chennai Infrastructure Boom 2026',
//   description = 'Chennai is undergoing a massive transformation with ₹90,000+ crore infrastructure projects across metro, roads, and smart city developments. From mobility to water security, the city is rapidly evolving into a future-ready urban hub.',
//   buttonText = 'Chennai Infrastructure Intelligence Report',
//   buttonLink = '/pdfs/infrastructure-intelligence-report.pdf',
// }: InfraBoom2026Props) {
//   const formatAssetUrl = (url?: string) => {
//     if (!url) return '#'
//     if (url.startsWith('http') || url.startsWith('/')) {
//       return url
//     }
//     return `/${url}`
//   }

//   const ctaHref = formatAssetUrl(buttonLink)

//   return (
//     <section className="bg-white py-8">
//       <div className="container mx-auto px-6 lg:px-0">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="InvestChennaiContent-conclaves">
//             <h1 className="text-center hidden"></h1>
//             <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h3>

//             <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
//           </div>

//           <div className="flex flex-col items-center text-center space-y-4 py-10">
//             <div className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500/90 to-rose-600/90 text-white font-semibold tracking-wide rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-rose-400/50 backdrop-blur-sm animate-pulse-slow">
//               <a href={ctaHref} target="_blank" rel="noopener noreferrer">
//                 <span className="relative z-10 flex items-center gap-2">
//                   <div className="w-3 h-3 bg-white/20 rounded-full animate-ping"></div>
//                   {buttonText}
//                 </span>
//               </a>
//               <div className="absolute inset-0 bg-gradient-to-r from-rose-400/50 to-pink-400/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 animate-pulse"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import React from 'react'

type MediaAsset2026 = {
  url?: string
  filename?: string
}

type InfraBoom2026Props = {
  title?: string
  description?: string
  buttonText?: string
  pdfFile?: MediaAsset2026 | string
}

export default function InfraBoom2026Component({
  title = 'Chennai Infrastructure Boom 2026',
  description = 'Chennai is undergoing a massive transformation with ₹90,000+ crore infrastructure projects across metro, roads, and smart city developments. From mobility to water security, the city is rapidly evolving into a future-ready urban hub.',
  buttonText = 'Chennai Infrastructure Intelligence Report',
  pdfFile = '/pdfs/infrastructure-intelligence-report.pdf',
}: InfraBoom2026Props) {
  // Dynamic PDF Asset Resolver
  const extractPdfUrl = (asset: MediaAsset2026 | string | any) => {
    if (!asset) return '#'

    // Payload CMS Upload relation object
    if (typeof asset === 'object' && asset !== null) {
      if (asset.url) {
        return asset.url
      }
    }

    // Direct String fallback path
    if (typeof asset === 'string') {
      return asset.startsWith('http') || asset.startsWith('/') ? asset : `/${asset}`
    }

    return '#'
  }

  const pdfUrl = extractPdfUrl(pdfFile)

  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-6 lg:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <div className="InvestChennaiContent-conclaves">
            <h1 className="text-center hidden"></h1>
            <h3 className="">{title}</h3>

            <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 py-10">
            <div className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500/90 to-rose-600/90 text-white font-semibold tracking-wide rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-rose-400/50 backdrop-blur-sm animate-pulse-slow">
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                <span className="relative z-10 flex items-center gap-2">
                  <div className="w-3 h-3 bg-white/20 rounded-full animate-ping"></div>
                  {buttonText}
                </span>
              </a>
              <div className="absolute inset-0 bg-gradient-to-r from-rose-400/50 to-pink-400/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
