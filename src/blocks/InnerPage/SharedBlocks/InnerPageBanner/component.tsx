// 'use client'

// import React from 'react'
// import Link from 'next/link'

// type PayloadMedia = {
//   id: string
//   url: string
//   alt?: string
// }

// type BreadcrumbItem = {
//   id?: string
//   label: string
//   url: string
//   smallText?: string
// }

// type InnerPageHeroProps = {
//   bannerImage: PayloadMedia | string
//   mobileBannerImage?: PayloadMedia | string
//   bannerLink?: string
//   bannerTarget?: '_self' | '_blank' | string
//   title: string
//   smallTitleText?: string
//   breadcrumbs?: BreadcrumbItem[]
//   enableSearch?: boolean
//   SearchComponent?: React.ComponentType
// }

// export default function InnerPageHeroBannerComponent({
//   bannerImage,
//   mobileBannerImage,
//   bannerLink,
//   bannerTarget = '_self',
//   title = 'FAQ',
//   smallTitleText = 's',
//   breadcrumbs = [
//     { label: 'Home', url: '/' },
//     { label: 'FAQ', url: '/visit/events-in-chennai', smallText: 's' },
//   ],
//   enableSearch = true,
//   SearchComponent,
// }: InnerPageHeroProps) {
//   // Desktop Image Extract
//   const desktopImageUrl = typeof bannerImage === 'object' ? bannerImage?.url : bannerImage
//   const desktopImageAlt =
//     typeof bannerImage === 'object'
//       ? bannerImage?.alt || 'Desktop Page Banner'
//       : 'Desktop Page Banner'

//   // Mobile Image Extract (Fallback to desktop image)
//   const mobileImageUrl = mobileBannerImage
//     ? typeof mobileBannerImage === 'object'
//       ? mobileBannerImage?.url
//       : mobileBannerImage
//     : desktopImageUrl

//   const mobileImageAlt = mobileBannerImage
//     ? typeof mobileBannerImage === 'object'
//       ? mobileBannerImage?.alt || 'Mobile Page Banner'
//       : 'Mobile Page Banner'
//     : desktopImageAlt

//   const renderBannerImages = () => (
//     <>
//       {/* Desktop Banner Image */}
//       {desktopImageUrl && (
//         <img
//           src={desktopImageUrl}
//           alt={desktopImageAlt}
//           className="eventsCalenderIamge hidden sm:block w-full cursor-pointer"
//         />
//       )}

//       {/* Mobile Banner Image */}
//       {mobileImageUrl && (
//         <img
//           src={mobileImageUrl}
//           alt={mobileImageAlt}
//           className="block sm:hidden w-full cursor-pointer"
//         />
//       )}
//     </>
//   )

//   const isExternal = bannerTarget === '_blank'

//   return (
//     <section className="accaodomationBannerSection">
//       <div>
//         {bannerLink ? (
//           <Link
//             href={bannerLink}
//             target={bannerTarget}
//             rel={isExternal ? 'noopener noreferrer' : undefined}
//           >
//             {renderBannerImages()}
//           </Link>
//         ) : (
//           renderBannerImages()
//         )}
//       </div>

//       <div className="accodoamationBannerContainer">
//         <div className="accodoamationBannerText">
//           <h3>
//             {title}
//             {smallTitleText && <small>{smallTitleText}</small>}
//           </h3>

//           {breadcrumbs && breadcrumbs.length > 0 && (
//             <div className="breadCrum">
//               {breadcrumbs.map((item, index) => (
//                 <React.Fragment key={item.id || index}>
//                   <Link href={item.url}>
//                     {item.label}
//                     {item.smallText && <small>{item.smallText}</small>}
//                   </Link>
//                   {index < breadcrumbs.length - 1 && ' - '}
//                 </React.Fragment>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       {enableSearch && (
//         <div className="notHomePageSearch">
//           {SearchComponent ? (
//             <SearchComponent />
//           ) : (
//             <div className="relative max-w-xl mx-auto">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
//               />
//             </div>
//           )}
//         </div>
//       )}
//     </section>
//   )
// }

'use client'

import React from 'react'
import Link from 'next/link'

type PayloadMedia = {
  id: string
  url: string
  alt?: string
}

type BreadcrumbItem = {
  id?: string
  label: string
  url: string
  smallText?: string
}

type InnerPageHeroProps = {
  bannerImage: PayloadMedia | string
  mobileBannerImage?: PayloadMedia | string
  bannerLink?: string
  openInNewTab?: boolean
  title?: string
  smallTitleText?: string
  breadcrumbs?: BreadcrumbItem[]
  enableSearch?: boolean
  SearchComponent?: React.ComponentType
}

export default function InnerPageHeroBannerComponent({
  bannerImage,
  mobileBannerImage,
  bannerLink,
  openInNewTab = false,
  title = '',
  smallTitleText = '',
  breadcrumbs = [],
  enableSearch = true,
  SearchComponent,
}: InnerPageHeroProps) {
  // Desktop Image Extract
  const desktopImageUrl = typeof bannerImage === 'object' ? bannerImage?.url : bannerImage
  const desktopImageAlt =
    typeof bannerImage === 'object'
      ? bannerImage?.alt || 'Desktop Page Banner'
      : 'Desktop Page Banner'

  // Mobile Image Extract (Fallback to desktop image)
  const mobileImageUrl = mobileBannerImage
    ? typeof mobileBannerImage === 'object'
      ? mobileBannerImage?.url
      : mobileBannerImage
    : desktopImageUrl

  const mobileImageAlt = mobileBannerImage
    ? typeof mobileBannerImage === 'object'
      ? mobileBannerImage?.alt || 'Mobile Page Banner'
      : 'Mobile Page Banner'
    : desktopImageAlt

  const renderBannerImages = () => (
    <>
      {/* Desktop Banner Image */}
      {desktopImageUrl && (
        <img
          src={desktopImageUrl}
          alt={desktopImageAlt}
          className="eventsCalenderIamge hidden sm:block w-full cursor-pointer"
        />
      )}

      {/* Mobile Banner Image */}
      {mobileImageUrl && (
        <img
          src={mobileImageUrl}
          alt={mobileImageAlt}
          className="block sm:hidden w-full cursor-pointer"
        />
      )}
    </>
  )

  return (
    <section className="accaodomationBannerSection">
      <div>
        {bannerLink ? (
          <Link
            href={bannerLink}
            target={openInNewTab ? '_blank' : '_self'}
            rel={openInNewTab ? 'noopener noreferrer' : undefined}
          >
            {renderBannerImages()}
          </Link>
        ) : (
          renderBannerImages()
        )}
      </div>

      <div className="accodoamationBannerContainer">
        <div className="accodoamationBannerText">
          {title && (
            <h3>
              {title}
              {smallTitleText && <small>{smallTitleText}</small>}
            </h3>
          )}

          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="breadCrum">
              {breadcrumbs.map((item, index) => (
                <React.Fragment key={item.id || index}>
                  <Link href={item.url}>
                    {item.label}
                    {item.smallText && <small>{item.smallText}</small>}
                  </Link>
                  {index < breadcrumbs.length - 1 && ' - '}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>

      {enableSearch && (
        <div className="notHomePageSearch">
          {SearchComponent ? (
            <SearchComponent />
          ) : (
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
              />
            </div>
          )}
        </div>
      )}
    </section>
  )
}
