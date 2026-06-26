import { getPayload } from 'payload'
import configPromise from '@/payload.config'

import TrendingChennaiClient from './component'

type Props = {
  title?: string
  description?: string
}

export default async function TrendingChennaiBlock({
  title,
  description,
}: Props) {
  const payload = await getPayload({
    config: configPromise,
  })

  const eventsRes = await payload.find({
    collection: 'trendingChennai',
    limit: 100,
    sort: '-createdAt',
  })

  return (
    <TrendingChennaiClient
      title={title}
      description={description}
      events={eventsRes.docs as any}
    />
  )
}