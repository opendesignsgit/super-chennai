import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath, revalidateTag } from 'next/cache'
import type { WhatsApChennai } from '../../../payload-types'

export const revalidateWhatsApChennai: CollectionAfterChangeHook<WhatsApChennai> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/whats-ap-chennai/${doc.slug}`

      payload.logger.info(`Revalidating WhatsApChennai page at path: ${path}`)

      revalidatePath(path)
      revalidateTag('whats-ap-chennai-sitemap')
    }

    // Un-publish panna old path-a revalidate pannum
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = `/whats-ap-chennai/${previousDoc.slug}`

      payload.logger.info(`Revalidating old WhatsApChennai page at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('whats-ap-chennai-sitemap')
    }
  }
  return doc
}

export const revalidateWhatsApChennaiDelete: CollectionAfterDeleteHook<WhatsApChennai> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/whats-ap-chennai/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('whats-ap-chennai-sitemap')
  }

  return doc
}