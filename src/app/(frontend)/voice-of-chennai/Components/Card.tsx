/* eslint-disable @next/next/no-img-element */
'use client'

import Link from 'next/link'
import React from 'react'

type Media = {
  id: string | number
  url: string
  alt?: string | null
}

export type ArticleCardData = {
  slug: string
  title: string
  excerpt?: string
  thumbnailType?: 'image' | 'video' | 'gif' | 'none'
  thumbnailImage?: Media
  thumbnailVideoUrl?: string
  thumbnailGifUrl?: string
  publishedAt?: string
  Articlecategory?: { id: string; name: string }
  readingTime?: number
}

export const ArticleCard: React.FC<{ doc: ArticleCardData }> = ({ doc }) => {
  const { 
    slug, 
    title, 
    excerpt, 
    thumbnailType, 
    thumbnailImage, 
    thumbnailVideoUrl, 
    thumbnailGifUrl, 
    publishedAt, 
    Articlecategory, 
    readingTime 
  } = doc

  const formattedDate = publishedAt 
    ? new Date(publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : ''

  return (
    <Link
      href={`/articles/${slug}`}
      className="group block overflow-hidden rounded-[24px] border border-[#a34493]/20 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Media Window Container */}
      <div className="relative h-[230px] w-full overflow-hidden bg-slate-900">
        {(!thumbnailType || thumbnailType === 'image') && thumbnailImage?.url && (
          <img
            src={thumbnailImage.url}
            alt={thumbnailImage.alt || title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}

        {thumbnailType === 'gif' && thumbnailGifUrl && (
          <img
            src={thumbnailGifUrl}
            alt={title}
            className="h-full w-full object-cover"
          />
        )}

        {thumbnailType === 'video' && thumbnailVideoUrl && (
          <div className="w-full h-full pointer-events-none relative">
            <iframe 
              src={`${thumbnailVideoUrl}?autoplay=1&mute=1&loop=1&controls=0`} 
              className="w-full h-full scale-125 object-cover border-0" 
            />
          </div>
        )}

        {/* Floating Category Badge Overlay */}
        {Articlecategory?.name && (
          <div className="absolute top-4 left-4 z-10">
            <div className="rounded-full bg-[#8b3c82]/90 px-3 py-1 backdrop-blur-md">
              <span className="text-[9px] font-bold uppercase tracking-wider text-white">
                {Articlecategory.name}
              </span>
            </div>
          </div>
        )}

        {/* Dynamic Publish Date Overlay */}
        {formattedDate && (
          <div className="absolute bottom-4 left-4 z-10">
            <div className="rounded-md bg-black/60 px-2.5 py-0.5 backdrop-blur-sm">
              <span className="text-[10px] text-slate-200 font-medium">{formattedDate}</span>
            </div>
          </div>
        )}
      </div>

      {/* Typography Elements Plate */}
      <div className="p-5">
        <div className="mb-2 flex items-center gap-2">
          <div className="h-[2px] w-6 bg-[#8b3c82]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8b3c82]">
            {readingTime ? `${readingTime} Min Read` : 'Guide & Story'}
          </span>
        </div>

        <h3 className="text-xl line-clamp-2 font-bold text-[#8b3c82] capitalize">{title}</h3>

        {excerpt && (
          <p className="mt-2 line-clamp-2 text-sm text-gray-600 font-light">{excerpt}</p>
        )}

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-sm font-medium uppercase tracking-wider text-[#8b3c82]">
            Read Full Article
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f9ebf7] text-[#8b3c82] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#a34493] group-hover:text-white">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}