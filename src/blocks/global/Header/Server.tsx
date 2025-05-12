import config from '@payload-config'
import React from 'react'
import Image from 'next/image'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import Link from 'next/link'

export default async function HeaderServer() {
  const payload = await getPayloadHMR({ config })
  const header = await payload.findGlobal({ slug: 'header' })

  const imageUrl = typeof header.logo === 'object' && 'url' in header.logo ? header.logo.url : ''

  return (
    <header
      className="flex items-center justify-center py-5 px-6 text-white"
      style={{ backgroundColor: '#3c4099' }}
    >
      <div style={{ width: '100px', height: '100px', position: 'relative' }}>
        {imageUrl && <Image src={imageUrl} alt="Header Logo" layout="fill" objectFit="contain" />}
      </div>
      <nav className="flex gap-3 items-center justify-center font-semibold">
        {header.nav?.map((item, index) => (
          <Link key={index} href={item.link} className="text-decoration-none text-dark">
            {item.label || 'Link'}
          </Link>
        ))}
      </nav>
    </header>
  )
}
