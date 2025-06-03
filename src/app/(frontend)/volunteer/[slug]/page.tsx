import type { Metadata } from 'next'

import { PayloadRedirects } from 'src/components/PayloadRedirects'
import RichText from 'src/components/RichText'
import configPromise from 'src/payload.config'
import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import { cache, Suspense } from 'react'

import { LivePreviewListener } from 'src/components/LivePreviewListener'
import { PostHero } from 'src/heros/PostHero'
import { generateMeta } from 'src/utilities/generateMeta'
import PageClient from './page.client'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const volunteer = await payload.find({
    collection: 'volunteer',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = volunteer.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const url = '/volunteer/' + slug
  const post = await queryPostBySlug({ slug })

  if (!post) return <PayloadRedirects url={url} />

  return (
    <div>
      <PageClient />

      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

    <Suspense fallback={null}>
      <PostHero
        post={{
          ...post,
          content: post.content ?? {
            root: {
              type: 'root',
              children: [],
              direction: null,
              format: '',
              indent: 0,
              version: 1,
            },
          },
        }}
      />
      </Suspense>

      <div>
        {/* <RichText data={post.content} enableGutter={false} /> */}

        <RichText
          data={
            post.content ?? {
              root: {
                type: 'root',
                children: [],
                direction: null,
                format: '',
                indent: 0,
                version: 1,
              },
            }
          }
          enableGutter={false}
        />
        {/* {post.relatedvolunteer && post.relatedvolunteer.length > 0 && (
          <Relatedvolunteer
            className=""
            docs={post.relatedvolunteer.filter((post) => typeof post === 'object')}
          />
        )} */}
      </div>
    </div>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'volunteer',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
