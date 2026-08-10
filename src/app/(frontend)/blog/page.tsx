/* eslint-disable @next/next/no-html-link-for-pages */
import type { Metadata } from 'next/types'

import { getPayload } from 'payload'
import { PageRange } from 'src/components/PageRange'
import { Pagination } from 'src/components/Pagination'
import configPromise from 'src/payload.config'
import PageClient from './page.client'
import { CollectionArchive } from '@/components/CollectionArchive'
import Image from 'next/image'
import AccodomationBanner from '../../../assets/images/main-blog.jpg'

export const dynamic = 'force-static'
export const revalidate = 600

export default async function Page() {
  const payload = await getPayload({ config: configPromise })

  const posts = await payload.find({
    collection: 'posts',
    depth: 1,
    limit: 10000,
    overrideAccess: false,
    select: {
      title: true,
      heroImage: true,
      FeaturedImage: true,
      slug: true,
      categories: true,
      meta: true,
      content: true,
    },
  })

  return (
    <div>
      <div className="accaodomationBannerSection">
        <div>
          <Image src={AccodomationBanner} alt="Chennai Properties" priority />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Blogs</h3>
            <div className="breadCrum">
              <a href="/">Home</a> - <a href="#">Blogs</a>
            </div>
          </div>
        </div>
      </div>

      <CollectionArchive
        posts={posts.docs.map((post: any) => ({
          ...post,
          collection: 'posts',
          className: '',
        }))}
      />
    </div>
  )
}

export function generateMetadata(): Metadata {
  return {
    title: `Super Chennai EverthinkPost`,
  }
}
