import { revalidatePath, revalidateTag } from 'next/cache'
import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import type { VisitDetail } from '../../../payload-types'
export const revalidatePost: CollectionAfterChangeHook<VisitDetail> = async ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (context?.disableRevalidate) return doc

  const parent =
    typeof doc.parent === 'object'
      ? doc.parent
      : await payload.findByID({
          collection: 'visits',
          id: doc.parent,
        })

  const parentSlug = parent?.slug
  const newPath = `/visits/${parentSlug}/${doc.slug}`

  if (doc._status === 'published') {
    payload.logger.info(`[visitDetails] Revalidating: ${newPath}`)
    revalidatePath(newPath)
    revalidateTag('visitDetails-sitemap')
  }

  if (previousDoc._status === 'published' && doc._status !== 'published') {
    const prevParent =
      typeof previousDoc.parent === 'object'
        ? previousDoc.parent
        : await payload.findByID({
            collection: 'visits',
            id: previousDoc.parent,
          })

    const oldPath = `/visits/${prevParent?.slug}/${previousDoc.slug}`
    payload.logger.info(`[visitDetails] Revalidating old path: ${oldPath}`)
    revalidatePath(oldPath)
    revalidateTag('visitDetails-sitemap')
  }

  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<VisitDetail> = async ({
  doc,
  req: { payload, context },
}) => {
  if (context?.disableRevalidate) return doc

  const parent =
    typeof doc.parent === 'object'
      ? doc.parent
      : await payload.findByID({
          collection: 'visits',
          id: doc.parent,
        })

  const path = `/visits/${parent?.slug}/${doc.slug}`
  payload.logger.info(`[visitDetails] Revalidating deleted path: ${path}`)
  revalidatePath(path)
  revalidateTag('visitDetails-sitemap')

  return doc
}
