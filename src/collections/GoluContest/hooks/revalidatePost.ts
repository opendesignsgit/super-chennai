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
      const path = `/golu-contest/${doc.slug}`

      payload.logger.info(`Revalidating WhatsApChennai page at path: ${path}`)

      revalidatePath(path)
      revalidateTag('golu-contest-sitemap')
    }

    // Un-publish panna old path-a revalidate pannum
    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = `/golu-contest/${previousDoc.slug}`

      payload.logger.info(`Revalidating old WhatsApChennai page at path: ${oldPath}`)

      revalidatePath(oldPath)
      revalidateTag('golu-contest-sitemap')
    }
  }
  return doc
}

export const revalidateWhatsApChennaiDelete: CollectionAfterDeleteHook<WhatsApChennai> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    const path = `/golu-contest/${doc?.slug}`

    revalidatePath(path)
    revalidateTag('golu-contest-sitemap')
  }

  return doc
}