/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import LexicalRenderer from '@/components/lexical/LexicalRenderer'
import { Article } from '@/payload-types'

interface ArticleDetailsProps {
  data: Article
}

const ArticleDetails: React.FC<ArticleDetailsProps> = ({ data }) => {
  if (!data) return null

  const {
    title,
    heroImage,
    content,
    excerpt,
    location,
    Articlecategory,
    language,
    thumbnailType,
    thumbnailImage,
    thumbnailVideoUrl,
    thumbnailGifUrl,
    readingTime,
    publishedAt,
    populatedAuthors,
    views,
    likes,
  } = data

  const heroMedia = typeof heroImage === 'object' && heroImage !== null ? heroImage : undefined

  const articleCategory =
    typeof Articlecategory === 'object' && Articlecategory !== null ? Articlecategory : undefined

  const locations =
    location?.filter(
      (loc): loc is Exclude<typeof loc, number> => typeof loc === 'object' && loc !== null,
    ) ?? []

  const articleLanguage = typeof language === 'object' && language !== null ? language : undefined

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <div className="relative bg-slate-900 text-white overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {heroMedia?.url && (
          <div className="absolute inset-0 opacity-20 z-0">
            <img
              src={heroMedia.url}
              alt={title}
              className="w-full h-full object-cover filter blur-sm"
            />
          </div>
        )}

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            {articleCategory?.name && (
              <span className="bg-[#a44294] text-white px-2.5 py-1 rounded-md shadow-sm">
                {articleCategory.name}
              </span>
            )}

            {locations.map((loc) => (
              <span
                key={loc.id}
                className="bg-slate-800 text-slate-200 px-2.5 py-1 rounded-md border border-slate-700"
              >
                📍 {loc.locality || loc.title || ''}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {title}
          </h1>

          {excerpt && (
            <p className="text-base sm:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
              {excerpt}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 text-xs text-slate-400 border-t border-slate-800">
            {populatedAuthors && populatedAuthors.length > 0 && (
              <div>
                By{' '}
                <strong className="text-white">
                  {populatedAuthors.map((a) => a.name).join(', ')}
                </strong>
              </div>
            )}
            {publishedAt && (
              <div>
                📅
                {new Date(publishedAt).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                })}
              </div>
            )}
            {readingTime && <div>⏱️ {readingTime} min read</div>}
            {articleLanguage?.name && <div>🌐 {articleLanguage.name}</div>}
            <div className="flex gap-4 ml-auto">
              <span>👁️ {views || 0} Views</span>
              <span>❤️ {likes || 0} Likes</span>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 gap-10">
          {thumbnailType && thumbnailType !== 'none' && (
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              {thumbnailType === 'image' && thumbnailImage?.url && (
                <img
                  src={thumbnailImage.url}
                  alt={title}
                  className="w-full h-auto max-h-[450px] object-cover rounded-lg"
                />
              )}
              {thumbnailType === 'video' && thumbnailVideoUrl && (
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={thumbnailVideoUrl}
                    className="w-full h-full border-none"
                    allowFullScreen
                  />
                </div>
              )}
              {thumbnailType === 'gif' && thumbnailGifUrl && (
                <img
                  src={thumbnailGifUrl}
                  alt="Animation Preview"
                  className="w-full h-auto rounded-lg"
                />
              )}
            </div>
          )}

          {/* Lexical Engine Output Frame */}
          <section className="bg-white p-6 sm:p-10 rounded-xl border border-slate-200 shadow-sm prose max-w-none">
            {/* @ts-ignore -- Passing down raw contextual fields into Lexical engine */}
            <LexicalRenderer content={content} articleData={data} />
          </section>
        </div>
      </main>
    </div>
  )
}

export default ArticleDetails
