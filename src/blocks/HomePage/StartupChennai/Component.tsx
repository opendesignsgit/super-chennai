// 'use client'
// import React from 'react'
// import { Media } from 'src/payload-types'
// import './style.css'

// type Props = {
//   heading: string
//   description: string
//   images: {
//     image: Media | string
//   }[]
// }

// export const StartupChennaiBlockServer: React.FC<Props> = ({ heading, description, images }) => {
//   const getImageUrl = (img: Media | string) => {
//     if (typeof img === 'object' && img.url) return img.url
//     if (typeof img === 'string') return img
//     return '/images/placeholder.png'
//   }

//   return (
//     <div className="starupchennaiSection">
//       <div className="container max-w-7xl mx-auto px-4">
//         <div className="startupChennaiMainContainer">
//           <h3>{heading}</h3>
//           <p>{description}</p>
//         </div>

//         <div className="startupChennaiImageSection">
//           <div className="firstStarupSection">
//             <img src={getImageUrl(images[0]?.image)} alt="" />
//             <div className="itsectorSection">
//               <h4>IT Sector</h4>
//               <p>The IT Hub of South India, Expanding Quickly.</p>
//             </div>
//           </div>

//           <div className="STarupChennaiSections">
//             <div className="rightSideSectionSTarup">
//               <img src={getImageUrl(images[1]?.image)} alt="" />

//               <div>
//                 <img src={getImageUrl(images[2]?.image)} alt="" />
//               </div>
//             </div>
//             <div className="rightSideSectionSTarup">
//               <div className="StarupForBorder">
//                 <img src={getImageUrl(images[3]?.image)} alt="" />
//               </div>
//               <div className="StarupForBorder">
//                 <img src={getImageUrl(images[4]?.image)} alt="" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
'use client'
import React from 'react'
import Image from 'next/image'
import { Media } from 'src/payload-types'
import './style.css'

type Props = {
  heading: string
  description: string
  images: {
    image: Media | string
  }[]
}

export const StartupChennaiBlockServer: React.FC<Props> = ({ heading, description, images }) => {
  const getImageUrl = (img: Media | string): string => {
    if (typeof img === 'object' && img?.url) return img.url
    if (typeof img === 'string') return img
    return '/images/placeholder.png'
  }

  const safeImage = (index: number): Media | string => {
    return images[index]?.image ?? '/images/placeholder.png'
  }

  return (
    <div className="starupchennaiSection">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="startupChennaiMainContainer">
          <h3>{heading}</h3>
          <p>{description}</p>
        </div>

        <div className="startupChennaiImageSection">
          <div className="firstStarupSection">
            <Image src={getImageUrl(safeImage(0))} alt="" width={600} height={400} />
            <div className="itsectorSection">
              <h4>IT Sector</h4>
              <p>The IT Hub of South India, Expanding Quickly.</p>
            </div>
          </div>

          <div className="STarupChennaiSections">
            <div className="rightSideSectionSTarup">
              <Image src={getImageUrl(safeImage(1))} alt="" width={300} height={200} />
              <div>
                <Image src={getImageUrl(safeImage(2))} alt="" width={300} height={200} />
              </div>
            </div>
            <div className="rightSideSectionSTarup">
              <div className="StarupForBorder">
                <Image src={getImageUrl(safeImage(3))} alt="" width={300} height={200} />
              </div>
              <Image
                src={getImageUrl(safeImage(4))}
                alt=""
                width={300}
                height={200}
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
