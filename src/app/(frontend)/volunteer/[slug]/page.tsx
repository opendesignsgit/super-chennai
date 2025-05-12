import { getPayload } from 'payload'
import config from '@/payload.config'
import React from 'react'

interface PageProps {
  params: {
    slug: string
  }
}

export default async function Page({ params }: PageProps) {
  const slug = params?.slug
  console.log('params', slug)

  const payload = await getPayload({ config })

  const volunteer = await payload.find({
    collection: 'volunteerSlides',
    where: {
      slug: {
        slug: { equals: params.slug },
      },
    },
  })

  const data = volunteer?.docs?.[0]
  console.log(data)
  if (!data) {
    return <div>No volunteer found.</div>
  }

  return (
    <div>
      <h1>{data.title}</h1>
    </div>
  )
}
