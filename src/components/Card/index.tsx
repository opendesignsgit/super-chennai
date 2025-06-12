'use client'

import Link from 'next/link'
import React from 'react'
import { cn } from 'src/utilities/ui'
import useClickableCard from 'src/utilities/useClickableCard'
import './style.css'

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
    <article className={cn('searchResultsContainer')} ref={card.ref}>
      <div className="SearchCardGrid">
        <div className="Searchcard">
          {hasCategories && (
            <div>
              {categories?.map((category, i) => (
                <div className="Searchcard" key={i}>
                  {(typeof category === 'object' ? category.title : category) || 'Untitled'}
                </div>
              ))}
            </div>
          )}
          {title && (
            <h3>
              <Link href={href} ref={link.ref}>
                {title}
              </Link>
            </h3>
          )}
          {description && <p>{description}</p>}
        </div>
      </div>
    </article>
  )
}
