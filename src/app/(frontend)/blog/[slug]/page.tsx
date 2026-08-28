/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from 'next'
import { PayloadRedirects } from 'src/components/PayloadRedirects'
import configPromise from 'src/payload.config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from 'src/components/RichText'
import { generateMeta } from 'src/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from 'src/components/LivePreviewListener'
import Image from 'next/image'
import Link from 'next/link'
import { BlogStats } from '../components/BlogStats'
import AutoShrinkText from '@/components/Text/AutoShrinkText'

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/blog/' + slug
  const post = await queryPostBySlug({ slug })

  if (!post) return <PayloadRedirects url={url} />

  const authorObj =
    post.populatedAuthors?.[0] || (typeof post.authors?.[0] === 'object' ? post.authors[0] : null)
  const authorName = authorObj?.name || 'Admin'
const authorProfile = authorObj && typeof authorObj === 'object' ? (authorObj as Record<string, any>) : null

const authorImage =
  authorProfile?.profileImage &&
  typeof authorProfile.profileImage === 'object' &&
  authorProfile.profileImage.url
    ? authorProfile.profileImage.url
    : null
  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        timeZone: 'Asia/Kolkata',
      })
    : ''

  const heroImage =
    typeof post.heroImage === 'object' && post.heroImage?.url
      ? post.heroImage.url
      : typeof post.meta?.image === 'object' && post.meta?.image?.url
      ? post.meta.image.url
      : null

  return (
    <article className="min-h-screen bg-white dark:bg-slate-950 pb-20">
      <PageClient />

      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      {/* ----------------- ACCOMMODATION / BLOG HERO BANNER SECTION ----------------- */}
      <div className="BlogDetailPageId">
        <div className="accaodomationBannerSection relative w-full h-[380px] md:h-[480px] overflow-hidden bg-slate-900">
          {heroImage && (
            <div className="bLogDetailBanner absolute inset-0">
              <Image
                src={heroImage}
                alt={post.title || 'Blog Banner'}
                fill
                priority
                className="object-cover opacity-60"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-black/10" />
            </div>
          )}

          <div className="accodoamationBannerContainer absolute inset-0 flex items-center justify-center">
            <div className="accodoamationBannerText text-center text-white">
              <AutoShrinkText
                text={post.title}
                baseSize={80}
                minSize={44}
                maxChars={2}
                className="accodoamationBannerText text-3xl sm:text-5xl drop-shadow-md"
              />

              <div className="breadCrum mt-3 text-sm text-gray-300 font-medium">
                <a href="/" className="hover:text-white transition-colors">
                  Home
                </a>{' '}
                <span className="text-gray-500 mx-1">•</span>{' '}
                <a href="/properties" className="hover:text-white transition-colors">
                  Blog
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------- MAIN CONTENT & AUTHOR CONTAINER ----------------- */}
        <div className="container max-w-5xl mx-auto px-4 pt-12">
          {/* Author Details & Interactive Stats */}
          <div className="flex items-center gap-4 mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
            {authorImage ? (
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-slate-200 shrink-0">
                <Image src={authorImage} alt={authorName} fill className="object-cover" />
              </div>
            ) : (
              <div className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-600 dark:text-slate-300 text-xl shrink-0">
                {authorName.charAt(0).toUpperCase()}
              </div>
            )}

            <div>
              <p className="font-semibold text-slate-900 dark:text-slate-100 text-base">
                {authorName}
              </p>
              {publishedDate && <p className="text-xs text-slate-500 mt-0.5">{publishedDate}</p>}
            </div>

            {/* Interactive Likes & Views Component */}
            <BlogStats
              postId={String(post.id)}
              initialViews={Number(post.views || 0)}
              initialLikes={Number(post.likes || 0)}
            />
          </div>

          {/* Blog Article Body with Lexical Richtext */}
          <div className="blog">
            <RichText data={post.content} enableGutter={false} />
          </div>

          {/* Back to Blog List Footer Link */}
          <div className="mt-14 pt-6 border-t border-slate-100 dark:border-slate-800">
            <Link
              href="/blog"
              className="inline-flex items-center text-[#232b91ff] dark:text-indigo-400 font-semibold hover:underline"
            >
              ← Back to Blog List
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })
  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })
  const result = await payload.find({
    collection: 'posts',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})