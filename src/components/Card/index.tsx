'use client'

import Link from 'next/link'
import React from 'react'
import { Media } from 'src/components/Media'
import { cn } from 'src/utilities/ui'
import useClickableCard from 'src/utilities/useClickableCard'

export type CardPostData = {
  collection: string
  className: string
  slug: string
  title?: string
  categories?: any[]
  meta?: {
    title?: string
    description?: string
    image?: any
  }
}

export const Card: React.FC<{ doc?: CardPostData }> = ({ doc }) => {
  const { card, link } = useClickableCard({})
  if (!doc) return null

  const { slug, collection, categories, meta, title } = doc
  const description = meta?.description?.replace(/\s+/g, ' ') || ''
  const metaImage = meta?.image
  const hasCategories = Array.isArray(categories) && categories.length > 0

  const noPrefixCollections = ['pages']

  const href = !noPrefixCollections.includes(collection) ? `/${collection}/${slug}` : `/${slug}`

  return (
    <article
      className={cn(
        'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-gray-200',
        'flex flex-col',
      )}
      ref={card.ref}
    >
      <div className="relative w-full aspect-[16/9] bg-gray-100 flex items-center justify-center text-gray-400">
        {!metaImage && <span className="text-sm select-none">No image available</span>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media resource={metaImage} size="100vw" className="object-cover w-full h-full" />
        )}
      </div>
      <div className="p-5 flex flex-col flex-grow">
        {hasCategories && (
          <div className="mb-3 flex flex-wrap gap-2">
            {categories?.map((category, i) => (
              <span
                key={i}
                className="text-xs font-semibold uppercase tracking-wide text-indigo-600 bg-indigo-100 rounded-full px-2 py-0.5 select-none"
              >
                {(typeof category === 'object' ? category.title : category) || 'Untitled'}
              </span>
            ))}
          </div>
        )}
        {title && (
          <h3 className="text-lg font-semibold leading-snug mb-2 line-clamp-2">
            <Link
              href={href}
              className="not-prose text-gray-900 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
              ref={link.ref}
            >
              {title}
            </Link>
          </h3>
        )}
        {description && (
          <p className="text-gray-700 text-sm flex-grow line-clamp-3">{description}</p>
        )}
      </div>
    </article>
  )
}
