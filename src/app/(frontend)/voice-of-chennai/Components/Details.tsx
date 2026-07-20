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
      <div className="relative w-full h-[600px] overflow-hidden">
        {heroMedia?.url && (
          <img
            src={heroMedia.url}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-black/50"> </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1
              className="autoShrinkText accodoamationBannerText"
              style={{
                width: '80%',
                lineHeight: '0.9',
                margin: '0 auto',
                textAlign: 'center',
              }}
            >
              {title}
            </h1>
          </div>
        </div>
      </div>

      <main className="mx-auto px-4 mt-10 mb-10 max-w-6xl articlesmainpagesections">
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
          <section className="">
            {/* @ts-ignore -- Passing down raw contextual fields into Lexical engine */}
            <LexicalRenderer content={content} articleData={data} />
          </section>
        </div>
      </main>
    </div>
  )
}

export default ArticleDetails
