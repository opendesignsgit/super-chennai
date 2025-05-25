'use client'

import React, { useEffect, useState } from 'react'
import './style.css'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'

type BannerProps = {
  heading?: string
  image?: {
    url?: string
    alt?: string
    filename?: string
  }
  breadcrumb?: {
    label: string
    url: string
  }[]
}

export default function Banner({ heading, image, breadcrumb = [] }: BannerProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [fullUrl, setFullUrl] = useState('')

  useEffect(() => {
    const query = searchParams.toString()
    const full = `${pathname}${query ? '?' + query : ''}`
    setFullUrl(full)
  }, [pathname, searchParams])

  if (!heading || !image?.url) {
    return (
      <div className="accaodomationBannerSection">
        <p style={{ color: 'red' }}>Error: Missing heading or image</p>
      </div>
    )
  }

  const pathSegments = pathname.split('/').filter(Boolean)

  const breadcrumbLinks = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/')
    return { name: segment.toUpperCase(), href }
  })

  return (
    <div className="accaodomationBannerSection">
      <div>
        <img src={image.url} alt={image.alt || 'Accodomation Banner'} />
      </div>
      <div className="accodoamationBannerContainer">
        <div className="accodoamationBannerText">
          <h3>{heading}</h3>
          <div className="breadCrum">
            {breadcrumbLinks.map((crumb, index) => (
              <React.Fragment key={crumb.href}>
                <Link href={crumb.href} legacyBehavior>
                  <a>{crumb.name}</a>
                </Link>
                {index < breadcrumbLinks.length - 1 && ' - '}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
