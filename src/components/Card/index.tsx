/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/utilities/ui'
import useClickableCard from '@/utilities/useClickableCard'

export type CardPostData = {
  id?: string
  slug?: string
  categories?: any[]
  meta?: any
  title?: string
  heroImage?: any
  FeaturedImage?: any
  content?: any
  views?: number
  likes?: number
}

export const Card: React.FC<{
  className?: string
  doc?: CardPostData
  relationTo?: string
  title?: string
}> = ({ className, doc, relationTo = 'blog', title: titleFromProps }) => {
  const { card, link } = useClickableCard({})
  const { slug, meta, title, heroImage, FeaturedImage, content, views = 0, likes = 0 } = doc || {}

  const titleToUse = titleFromProps || title

  // 1. EXACT IMAGE RESOLUTION LOGIC (Fixes Image Mismatch/Broken Image)
  const getImageUrl = (imageSource: any): string | null => {
    if (!imageSource) return null

    // If it's a direct string URL
    if (typeof imageSource === 'string') {
      if (imageSource.startsWith('http')) return imageSource
      return `${process.env.NEXT_PUBLIC_SERVER_URL || ''}${imageSource}`
    }

    // If populated Media object
    const targetUrl =
      imageSource?.sizes?.card?.url || imageSource?.sizes?.thumbnail?.url || imageSource?.url
    if (!targetUrl) return null

    if (targetUrl.startsWith('http')) return targetUrl
    return `${process.env.NEXT_PUBLIC_SERVER_URL || ''}${targetUrl}`
  }

  const imageUrl = getImageUrl(heroImage || FeaturedImage || meta?.image)

  // 2. PARAGRAPH TEXT EXTRACTION (From Payload Lexical Tree)
  const extractExcerpt = (contentRoot: any): string => {
    if (!contentRoot?.children) return ''
    const firstParagraph = contentRoot.children.find((node: any) => node.type === 'paragraph')
    if (!firstParagraph?.children) return ''

    return firstParagraph.children
      .map((child: any) => child.text || '')
      .join(' ')
      .trim()
  }

  const rawExcerpt = extractExcerpt(content?.root)
  const sanitizedExcerpt = rawExcerpt.length > 80 ? `${rawExcerpt.substring(0, 80)}...` : rawExcerpt

  const href = `/${relationTo}/${slug}`

  return (
    <article
      ref={card.ref}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900',
        className,
      )}
    >
      {/* Blog Image Section */}
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
        <Link href={href} className="block h-full w-full">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={titleToUse || 'Blog image'}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
              No Image
            </div>
          )}
        </Link>

        {/* Floating Views & Likes Badge (From React Component) */}
        <div className="absolute right-2 top-2 z-10 flex items-center gap-3 rounded-full bg-[#a34493]/90 px-3 py-1 text-xs text-white backdrop-blur-sm shadow-md">
          <div className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
            </svg>
            <span>{views}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>{likes}</span>
          </div>
        </div>
      </div>

      {/* Blog Content Section */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          {/* Title */}
          {titleToUse && (
            <h3 className="line-clamp-2 text-base font-bold text-slate-900 group-hover:text-[#a34493] dark:text-slate-100 transition-colors">
              <Link href={href} ref={link.ref}>
                {titleToUse}
              </Link>
            </h3>
          )}

          {/* Description */}
          {sanitizedExcerpt && (
            <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              {sanitizedExcerpt}
            </p>
          )}
        </div>

        {/* Read More Link */}
        <div className="mt-4">
          <Link
            href={href}
            className="inline-flex items-center text-xs font-semibold text-[#a34493] hover:underline"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  )
}
