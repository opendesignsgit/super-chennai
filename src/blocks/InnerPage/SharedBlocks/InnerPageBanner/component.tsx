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
  bannerLink?: string
  title: string
  smallTitleText?: string
  breadcrumbs?: BreadcrumbItem[]
  enableSearch?: boolean
  SearchComponent?: React.ComponentType
}

export default function InnerPageHeroBannerComponent({
  bannerImage,
  bannerLink,
  title = 'FAQ',
  smallTitleText = 's',
  breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'FAQ', url: '/visit/events-in-chennai', smallText: 's' },
  ],
  enableSearch = true,
  SearchComponent,
}: InnerPageHeroProps) {
  const imageUrl = typeof bannerImage === 'object' ? bannerImage?.url : bannerImage

  const imageAlt =
    typeof bannerImage === 'object' ? bannerImage?.alt || 'Page Banner' : 'Page Banner'

  return (
    <section className="accaodomationBannerSection">
      <div>
        {imageUrl &&
          (bannerLink ? (
            <Link href={bannerLink}>
              <img src={imageUrl} alt={imageAlt} className="w-full cursor-pointer" />
            </Link>
          ) : (
            <img src={imageUrl} alt={imageAlt} className="w-full" />
          ))}
      </div>

      <div className="accodoamationBannerContainer">
        <div className="accodoamationBannerText">
          <h3>
            {title}
            {smallTitleText && <small>{smallTitleText}</small>}
          </h3>

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
