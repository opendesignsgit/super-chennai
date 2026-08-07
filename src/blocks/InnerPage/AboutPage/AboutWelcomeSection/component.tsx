// 'use client'

// import React from 'react'

// type PayloadMedia = {
//   id: string
//   url: string
//   alt?: string
// }

// type ImageItem = {
//   id?: string
//   image: PayloadMedia | string
// }

// type TextItem = {
//   id?: string
//   text: string
// }

// type ColumnItem = {
//   id?: string
//   items: TextItem[] // updated field name
// }

// type WelcomeSuperChennaiProps = {
//   heading?: string
//   subheading?: string
//   images?: ImageItem[]
//   columns?: ColumnItem[]
// }

// export default function AboutWelcomeSuperChennaiComponent({
//   heading = 'Welcome to <br /> Super Chennai',
//   subheading = 'Super Chennai is a citizen-led initiative to showcase Chennai as a truly global city',
//   images = [],
//   columns = [
//     {
//       items: [
//         { text: 'It is a movement born from pride and purpose.' },
//         { text: 'It is home to the best colleges and a thriving startup ecosystem.' },
//         { text: 'A city connected to the world through trade, talent, and culture.' },
//       ],
//     },
//     {
//       items: [
//         { text: 'We aim to inspire every Chennaite to celebrate the city we call home.' },
//         { text: 'A place to live, visit, work, invest, and innovate.' },
//         { text: 'We are here to tell and sell the story of Chennai with conviction.' },
//       ],
//     },
//     {
//       items: [
//         { text: 'Chennai ranks among India’s safest, most inclusive metros.' },
//         { text: 'A vibrant hub where ideas thrive and businesses grow.' },
//         { text: 'So that anyone ready to build their future can proudly belong here.' },
//       ],
//     },
//   ],
// }: WelcomeSuperChennaiProps) {
//   return (
//     <section className="welcome-super-chennai">
//       <div className="welcomesuperIn">
//         {/* Images List */}
//         <div className="welcome-images">
//           {images && images.length > 0 ? (
//             images.map((item, index) => {
//               const imageUrl = typeof item.image === 'object' ? item.image.url : item.image
//               const imageAlt =
//                 typeof item.image === 'object' ? item.image.alt || 'About Us' : 'About Us'

//               return <img key={item.id || index} src={imageUrl} alt={imageAlt} />
//             })
//           ) : (
//             <img src="/images/about-intro-img.png" alt="About Us" />
//           )}
//         </div>

//         {/* Text Content */}
//         <div className="welcome-text">
//           <h2 dangerouslySetInnerHTML={{ __html: heading }} />
//           <h4>{subheading}</h4>

//           {/* Dynamic Grid Columns */}
//           <div className="welcome-columns">
//             {columns.map((column, colIndex) => (
//               <div className="welcome-column" key={column.id || colIndex}>
//                 {column.items?.map((para, textIndex) => (
//                   <p key={para.id || textIndex}>{para.text}</p>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import React from 'react'

type PayloadMedia = {
  id: string
  url: string
  alt?: string
}

type ImageItem = {
  id?: string
  image: PayloadMedia | string
}

type ColumnItem = {
  id?: string
  col1?: string
  col2?: string
  col3?: string
}

type WelcomeSuperChennaiProps = {
  heading?: string
  subheading?: string
  images?: ImageItem[]
  columns?: ColumnItem[]
}

export default function AboutWelcomeSuperChennaiComponent({
  heading = 'Welcome to <br /> Super Chennai',
  subheading = 'Super Chennai is a citizen-led initiative to showcase Chennai as a truly global city',
  images = [],
  columns = [
    {
      col1: 'It is a movement born from pride and purpose.\n\nIt is home to the best colleges and a thriving startup ecosystem.\n\nA city connected to the world through trade, talent, and culture.',
      col2: 'We aim to inspire every Chennaite to celebrate the city we call home.\n\nA place to live, visit, work, invest, and innovate.\n\nWe are here to tell and sell the story of Chennai with conviction.',
      col3: 'Chennai ranks among India’s safest, most inclusive metros.\n\nA vibrant hub where ideas thrive and businesses grow.\n\nSo that anyone ready to build their future can proudly belong here.',
    },
  ],
}: WelcomeSuperChennaiProps) {
  return (
    <section className="welcome-super-chennai">
      <div className="welcomesuperIn">
        {/* Images List */}
        <div className="welcome-images">
          {images && images.length > 0 ? (
            images.map((item, index) => {
              const imageUrl = typeof item.image === 'object' ? item.image.url : item.image
              const imageAlt =
                typeof item.image === 'object' ? item.image.alt || 'About Us' : 'About Us'

              return <img key={item.id || index} src={imageUrl} alt={imageAlt} />
            })
          ) : (
            <img src="/images/about-intro-img.png" alt="About Us" />
          )}
        </div>

        {/* Text Content */}
        <div className="welcome-text">
          <h2 dangerouslySetInnerHTML={{ __html: heading }} />
          <h4>{subheading}</h4>

          {/* Dynamic Grid Columns */}
          {columns && columns.length > 0 && (
            <div className="welcome-columns">
              {columns.map((column, colIndex) => {
                // Collect col1, col2, col3 into array
                const colTexts = [column.col1, column.col2, column.col3].filter(Boolean)

                return (
                  <React.Fragment key={column.id || colIndex}>
                    {colTexts.map((text, idx) => (
                      <div className="welcome-column" key={idx}>
                        {text
                          ?.split('\n')
                          .map((para, pIdx) => (para.trim() ? <p key={pIdx}>{para}</p> : null))}
                      </div>
                    ))}
                  </React.Fragment>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
