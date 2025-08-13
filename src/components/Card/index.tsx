// 'use client'

// import { cn } from '@/utilities/ui'
// import useClickableCard from '@/utilities/useClickableCard'
// import Link from 'next/link'
// import React, { Fragment } from 'react'
// import type { Post } from '@/payload-types'
// import { Media } from '@/components/Media'

// export type CardPostData = Pick<Post, 'slug' | 'categories' | 'meta' | 'title'>

// export const Card: React.FC<{
//   alignItems?: 'center'
//   className?: string
//   doc?: CardPostData
//   relationTo?: 'posts'
//   showCategories?: boolean
//   title?: string
// }> = ({
//   alignItems = 'center',
//   className,
//   doc,
//   relationTo = 'posts',
//   showCategories = true,
//   title: titleFromProps,
// }) => {
//   const { card, link } = useClickableCard({})
//   const { slug, categories, meta, title } = doc || {}
//   const { description, image: metaImage } = meta || {}

//   const titleToUse = titleFromProps || title
//   const sanitizedDescription = description?.replace(/\s+/g, ' ') || ''
//   const href = `/${relationTo}/${slug}`
//   const hasCategories = categories && Array.isArray(categories) && categories.length > 0

//   return (
//     <article
//       ref={card.ref}
//       className={cn(
//         'group rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm transition-all hover:shadow-lg hover:border-primary-500',
//         className
//       )}
//     >
//       <div className="relative aspect-video w-full bg-gray-100 dark:bg-gray-800">
//         {metaImage && typeof metaImage !== 'string' ? (
//           <Media resource={metaImage} size="100vw" className="object-cover w-full h-full" />
//         ) : (
//           <div className="flex items-center justify-center w-full h-full text-gray-400 text-sm">
//             No image
//           </div>
//         )}
//       </div>

//       <div className="p-5 space-y-3">
//         {showCategories && hasCategories && (
//           <div className="flex flex-wrap gap-2 text-xs font-medium text-primary-600 dark:text-primary-400">
//             {categories.map((category, index) => {
//               if (typeof category === 'object') {
//                 return (
//                   <span
//                     key={index}
//                     className="bg-primary-50 dark:bg-primary-950 text-primary-700 dark:text-primary-300 px-2 py-1 rounded-full"
//                   >
//                     {category.title || 'Untitled'}
//                   </span>
//                 )
//               }
//               return null
//             })}
//           </div>
//         )}

//         {titleToUse && (
//           <h3 className="text-lg font-semibold leading-snug text-gray-900 dark:text-white">
//             <Link
//               href={href}
//               ref={link.ref}
//               className="hover:underline underline-offset-4"
//             >
//               {titleToUse}
//             </Link>
//           </h3>
//         )}

//         {sanitizedDescription && (
//           <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
//             {sanitizedDescription}
//           </p>
//         )}
//       </div>
//     </article>
//   )
// }


// 'use client'

// import Link from 'next/link'
// import React from 'react'
// import { cn } from 'src/utilities/ui'
// import useClickableCard from 'src/utilities/useClickableCard'
// import './style.css'

// export type CardPostData = {
//   collection: string
//   className: string
//   slug: string
//   title?: string
//   categories?: any[]
//   meta?: {
//     title?: string
//     description?: string
//     image?: any
//   }
// }

// export const Card: React.FC<{ doc?: CardPostData }> = ({ doc }) => {
//   const { card, link } = useClickableCard({})
//   if (!doc) return null

//   const { slug, collection, categories, meta, title } = doc
//   const description = meta?.description?.replace(/\s+/g, ' ') || ''
//   const metaImage = meta?.image
//   const hasCategories = Array.isArray(categories) && categories.length > 0
//   const noPrefixCollections = ['pages']
//   const href = !noPrefixCollections.includes(collection) ? `/${collection}/${slug}` : `/${slug}`

//   return (
//     <article className={cn('searchResultsContainer')} ref={card.ref}>
//       <div className="SearchCardGrid">
//         <div className="Searchcard">
//           {hasCategories && (
//             <div>
//               {categories?.map((category, i) => (
//                 <div className="Searchcard" key={i}>
//                   {(typeof category === 'object' ? category.title : category) || 'Untitled'}
//                 </div>
//               ))}
//             </div>
//           )}
//           {title && (
//             <h3>
//               <Link href={href} ref={link.ref}>
//                 {title}
//               </Link>
//             </h3>
//           )}
//           {description && <p>{description}</p>}
//         </div>
//       </div>
//     </article>
//   )
// }


'use client'

import Link from 'next/link'
import React from 'react'
import { cn } from 'src/utilities/ui'
import useClickableCard from 'src/utilities/useClickableCard'
import './style.css'

export type CardPostData = {
  collection: string
  className?: string
  slug: string
  title?: string
  categories?: any[]
  meta?: {
    title?: string
    description?: string
    image?: any
  }
}

export type CardProps = {
  alignItems?: 'center'
  className?: string
  doc?: CardPostData
  relationTo?: string
  showCategories?: boolean
  title?: string
}

export const Card: React.FC<CardProps> = ({
  alignItems = 'center',
  className,
  doc,
  relationTo = 'posts',
  showCategories = true,
  title: titleFromProps,
}) => {
  const { card, link } = useClickableCard({})
  if (!doc) return null

  const { slug, collection, categories, meta, title } = doc
  const description = meta?.description?.replace(/\s+/g, ' ') || ''
  const metaImage = meta?.image
  const hasCategories = Array.isArray(categories) && categories.length > 0
  const noPrefixCollections = ['pages']
  const href = !noPrefixCollections.includes(collection)
    ? `/${collection}/${slug}`
    : `/${slug}`

  const titleToUse = titleFromProps || title

  return (
    <article
      className={cn('searchResultsContainer', className)}
      ref={card.ref}
    >
      <div className="SearchCardGrid">
        <div className="Searchcard">
          {showCategories && hasCategories && (
            <div>
              {categories?.map((category, i) => (
                <div className="Searchcard" key={i}>
                  {(typeof category === 'object' ? category.title : category) ||
                    'Untitled'}
                </div>
              ))}
            </div>
          )}

          {titleToUse && (
            <h3>
              <Link href={href} ref={link.ref}>
                {titleToUse}
              </Link>
            </h3>
          )}

          {description && <p>{description}</p>}
        </div>
      </div>
    </article>
  )
}
