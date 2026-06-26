// /* eslint-disable @next/next/no-img-element */
// import React from 'react'
// // import './styles.scss'

// type Award = {
//   title: string
// }

// type Props = {
//   title?: string
//   subtitle?: string
//   image?: any
//   awards?: Award[]
// }

// export default function AwardsAchievementsBlockComponent({ title, subtitle, image, awards = [] }: Props) {
//   return (
//     <section className="awards-section">
//       <h2 className="awards-title">{title}</h2>

//       {subtitle && <p className="awards-subtitle">{subtitle}</p>}

//       <div className="awards-container">
//         {image?.url && <img src={image.url} alt={title} className="awards-image" />}

//         <div
//           className="awards-list max-h-[560px] overflow-y-auto"
//           style={{
//             scrollbarWidth: 'thin',
//           }}
//         >
//           {awards.map((award, index) => (
//             <div key={index} className="awards-item">
//               {award.title}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
