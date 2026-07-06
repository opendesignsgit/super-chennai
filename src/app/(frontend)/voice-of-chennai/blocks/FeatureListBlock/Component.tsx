// /* eslint-disable @next/next/no-img-element */
// import React from 'react'
// import Image from 'next/image'

// interface FeatureItem {
//   id?: string
//   title?: string
//   desc: string
//   icon?: any
// }

// interface FeatureListBlockProps {
//   sectionTitle: string
//   sideImage: any
//   features: FeatureItem[]
// }

// export default function FeatureListBlockComponent({
//   sectionTitle,
//   sideImage,
//   features,
// }: FeatureListBlockProps) {
//   const mainImageUrl = sideImage && typeof sideImage === 'object' ? sideImage.url : ''
//   const mainImageAlt = sideImage && typeof sideImage === 'object' ? sideImage.alt : sectionTitle

//   return (
//     <div className="newupdatewhychennai" data-aos="fade-up" data-aos-delay="400">
//       <div className="workIntro">
//         <h3 className="newupdatewhychennai">{sectionTitle}</h3>

//         <div className="section-container container max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8">

//           <div className="section-left-image relative w-full md:w-1/2 h-[450px]">
//             {mainImageUrl && (
//               <Image
//                 src={mainImageUrl}
//                 alt={mainImageAlt || 'Visionary banner'}
//                 fill
//                 className="object-cover rounded"
//                 priority
//               />
//             )}
//           </div>

//           <div className="section-right-content w-full md:w-1/2 flex flex-col gap-6">
//             {features?.map((item) => {

//               const itemIconUrl =
//                 item.icon && typeof item.icon === 'object'
//                   ? item.icon.url
//                   : '/images/icons/Points-svg.svg'

//               return (
//                 <div className="info-item-block flex gap-4 items-start" key={item.id}>
//                   <div className="relative w-6 h-6 flex-shrink-0 mt-1">
//                     <img src={itemIconUrl} alt="icon" className="info-icon object-contain" />
//                   </div>

//                   <div className="info-text-block">
//                     {item.title && <h3 className="text-xl font-semibold mb-1">{item.title}</h3>}
//                     <p className="text-gray-700 leading-relaxed whitespace-pre-line">{item.desc}</p>
//                   </div>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
import React from 'react'

interface FeatureItem {
  id?: string
  title?: string
  desc: string
  icon?: any 
}

interface FeatureListBlockProps {
  sectionTitle: string
  sideImage: any
  features: FeatureItem[]
}

export default function FeatureListBlock({
  sectionTitle,
  sideImage,
  features,
}: FeatureListBlockProps) {
  const mainImageUrl = sideImage && typeof sideImage === 'object' ? sideImage.url : ''

  return (
    <div className="newupdatewhychennai" data-aos="fade-up" data-aos-delay="400">

        
      <div className="workIntro">
        <h3 className="newupdatewhychennai">{sectionTitle}</h3>
        <div className="section-container container max-w-7xl mx-auto px-4">
          {/* Left Side Image */}
          <div className="section-left-image">
            {mainImageUrl && <img src={mainImageUrl} alt="Main Side Visual" />}
          </div>

          {/* Right Side Content List */}
          <div className="section-right-content">
            {features?.map((item) => {
              // Context check if uploaded in Payload, else falls back to your static route path string
              const iconUrl =
                item.icon && typeof item.icon === 'object'
                  ? item.icon.url
                  : '/images/icons/Points-svg.svg'

              return (
                <div className="info-item-block" key={item.id}>
                  <img src={iconUrl} alt="icon" className="info-icon" />
                  <div className="info-text-block">
                    {item.title && <h3>{item.title}</h3>}
                    <p>{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
