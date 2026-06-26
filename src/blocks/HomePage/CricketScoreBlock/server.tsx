import { getPayload } from 'payload'
import configPromise from '@/payload.config'

import CricketScoreBlockComponent from './Component'

type Props = {
  title?: string
  description?: string

  IPLimage?: {
    url?: string
  }

  pointsTable?: any[]
}

export default async function CricketScoreBlock({
  title,
  description,
  IPLimage,
  pointsTable,
}: Props) {
  const payload = await getPayload({
    config: configPromise,
  })

  const cricketRes = await payload.find({
    collection: 'cricketScore',
    limit: 20,
    sort: '-createdAt',
    depth: 2,
  })

  const cricketData = cricketRes.docs || []

  return (
    <CricketScoreBlockComponent
      title={title}
      description={description}
      IPLimage={IPLimage} // FROM BLOCK
      sliderItems={cricketData} // FROM COLLECTION
      pointsTable={pointsTable || []} // FROM BLOCK
    />
  )
}
