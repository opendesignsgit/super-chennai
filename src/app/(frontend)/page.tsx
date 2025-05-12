
import { getPayload } from 'payload'
import React from 'react'
import config from '@/payload.config'
import './styles.css'
import HeaderServer from '@/blocks/global/Header/Server'
import { RenderBlock } from '@/utils/RenderBlocks'
import FooterServer from '@/blocks/global/Footer/Server'

export default async function HomePage() {
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })

  const page = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: 'home',
      },
    },
    depth: 2,
  })

  const homePage = page.docs?.[0]

  return (
    <div className="home">
      <HeaderServer />

      {homePage?.layout && <RenderBlock blocks={homePage.layout} />}

      <FooterServer />
    </div>
  )
}
