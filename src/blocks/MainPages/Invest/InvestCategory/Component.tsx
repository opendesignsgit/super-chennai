// 'use client'

// import React from 'react'
// import './style.css'

// type CategoryItem = {
//   title: string
//   subtitle: string
//   description: string
//   image?: {
//     url?: string
//     alt?: string
//   }
//   link: string
// }

// type InvestmentCategoryListProps = {
//   items?: CategoryItem[]
//   backgroundImage?: {
//     url?: string
//     alt?: string
//   }
// }

// export default function InvestmentCategoryListSection({
//   items = [],
//   backgroundImage,
// }: InvestmentCategoryListProps) {
//   return (
//     <div className="BackgrounInvestImage">
//       <div className="BgInvestSections">
//         <div className="container max-w-7xl mx-auto px-4">
//           <div className="InvestFlexContainer">
//             {items.map((item, index) => (
//               <div
//                 className={`InvestMainDivFirstSection ${
//                   index % 2 === 0 ? 'InvestPagesection-odd' : 'InvestPagesection-even'
//                 }`}
//                 key={index}
//               >
//                 <div className="InvestMainDivFlexSection">
//                   {item.image?.url && (
//                     <img src={item.image.url} alt={item.image.alt || item.title} />
//                   )}
//                   <div className="InvestMainDivSection">
//                     <h3>{item.title}</h3>
//                     <h5>{item.subtitle}</h5>
//                     <p className={index % 2 === 0 ? 'odd-paragraph' : ''}>{item.description}</p>
//                     <div className="exploreMorebuttonInvestChennai">
//                       <a href={item.link}>Explore More</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {backgroundImage?.url && (
//         <div className="BgImageInvesetSection">
//           <div className="BgImageInvestRowImage">
//             <img src={backgroundImage.url} alt={backgroundImage.alt || 'Investment Background'} />
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

'use client'

import React, { useEffect } from 'react'
import './style.css'
import { InvestmentAPIItem } from 'src/models/investment'

type CategoryItem = {
  title: string
  subtitle: string
  description: string
  image?: {
    url?: string
    alt?: string
  }
  link: string
}

type InvestmentCategoryListProps = {
  items?: CategoryItem[]
  backgroundImage?: {
    url?: string
    alt?: string
  }
}

export default function InvestmentCategoryListSection({
  items = [],
  backgroundImage,
}: InvestmentCategoryListProps) {
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/investments')
        const data = await res.json()

        if (!data?.docs?.length) {
          console.warn('No data found')
          return
        }
        if (Array.isArray(data.docs)) {
          const extracted = data.docs.map((doc: InvestmentAPIItem) => ({
            id: doc.id,
            title: doc.title,
            sectionTitle: '',
            sectionDescription: '',
            sectionImage: '',
            investmentItems: (doc.investments || []).flatMap((investment) =>
              (investment.investmentItems || []).map((item) => ({
                id: item.id,
                title: item.title,
                description: item.description,
                image: {
                  url: item.image?.url || '',
                  alt: item.image?.alt || '',
                },
                link: `/investments/${doc.slug}`,
              })),
            ),
          }))
          
        }
      } catch (error) {
        console.error('Failed to fetch events:', error)
      }
    }
    fetchEvents()
  }, [])
  return (
    <div className="BackgrounInvestImage">
      <div className="BgInvestSections">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="InvestFlexContainer">
            {items.map((item, index) => (
              <div
                className={`InvestMainDivFirstSection ${
                  index % 2 === 0 ? 'InvestPagesection-odd' : 'InvestPagesection-even'
                }`}
                key={index}
              >
                <div className="InvestMainDivFlexSection">
                  {item.image?.url && (
                    <img src={item.image.url} alt={item.image.alt || item.title} />
                  )}
                  <div className="InvestMainDivSection">
                    <h3>{item.title}</h3>
                    <h5>{item.subtitle}</h5>
                    <p className={index % 2 === 0 ? 'odd-paragraph' : ''}>{item.description}</p>
                    <div className="exploreMorebuttonInvestChennai">
                      <a href={item.link}>Explore More</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {backgroundImage?.url && (
        <div className="BgImageInvesetSection">
          <div className="BgImageInvestRowImage">
            <img src={backgroundImage.url} alt={backgroundImage.alt || 'Investment Background'} />
          </div>
        </div>
      )}
    </div>
  )
}
