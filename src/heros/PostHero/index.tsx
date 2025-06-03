'use client'

import Link from 'next/link'
import './style.css'

import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'
import { Media } from 'src/components/Media'
import type { Post } from 'src/payload-types'
import { formatAuthors } from 'src/utilities/formatAuthors'
import GlobalSearch from '@/blocks/HomePage/GlobalSearch/Component'

export const PostHero: React.FC<{
  post: Post
}> = ({ post }) => {
  const { heroImage, populatedAuthors, publishedAt, title } = post

  const hasAuthors =
    populatedAuthors && populatedAuthors.length > 0 && formatAuthors(populatedAuthors) !== ''

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const pathSegments = pathname.split('/').filter(Boolean)

  const breadcrumbLinks = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/')
    return { name: segment.toUpperCase(), href }
  })

  return (
    <div className="accaodomationBannerSection relative  min-h-[60vh]">
      {heroImage && typeof heroImage !== 'string' && (
        <Media fill priority imgClassName="-z-10 object-cover" resource={heroImage} />
      )}

      <div className="accodoamationBannerContainer relative z-10">
        <div className="accodoamationBannerText">
          <h3>{title}</h3>

          <div className="breadCrum">
            {breadcrumbLinks.map((crumb, index) => (
              <React.Fragment key={crumb.href}>
                <Link href={crumb.href}>{crumb.name}</Link>
                {index < breadcrumbLinks.length - 1 && ' - '}
              </React.Fragment>
            ))}
          </div>

          {/* <div className="authorDetails">
            {hasAuthors && (
              <div>
                <p className="text-sm">Author</p>
                <p>{formatAuthors(populatedAuthors)}</p>
              </div>
            )}
            {publishedAt && (
              <div>
                <p className="text-sm">Date Published</p>
                <time dateTime={publishedAt}>{new Date(publishedAt).toLocaleDateString()}</time>
              </div>
            )}
          </div> */}
        </div>
      </div>
      <GlobalSearch placeholderText={'Experience Chennai'} buttonText={'Search'} />
    </div>
  )
}
