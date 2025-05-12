import { getPayload } from 'payload'
import config from '@payload-config'
import { RenderBlock } from '@/utils/RenderBlocks'

import HeaderServer from '@/blocks/global/Header/Server'
import FooterServer from '@/blocks/global/Footer/Server'

type PageType = {
  slug: string
  layout: any[]
}

const queryPageBySlug = async ({ slug }: { slug: string }) => {
  const parsedSlug = decodeURIComponent(slug)
  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'pages',
    limit: 1,
    where: {
      slug: {
        equals: parsedSlug,
      },
    },
  })

  return result.docs?.[0] || null
}

export async function generateStaticParams() {
  const payload = await getPayload({ config })

  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
  })

  // return pages.docs
  //   ?.filter((doc) => doc.slug !== 'home')
  //   .map(({ slug }) => ({
  //     slug,
  //   }))
  return pages.docs
    ?.filter((doc) => doc.slug !== 'home')
    .map(({ slug }) => ({
      slug: slug.split('/'), // MUST be an array for [...slug]
    }))
}

export default async function Page({ params }: { params: { slug?: string } }) {
  // const slug = params?.slug || 'home'
  const slug = Array.isArray(params?.slug) ? params.slug.join('/') : params?.slug || 'home'

  const page: PageType | null = await queryPageBySlug({ slug })

  if (!page) {
    return <div>Page not found</div>
  }

  return (
    <div className="page font-[var(--font-family)]">
      <HeaderServer />

      <RenderBlock blocks={page.layout} />

      <FooterServer />
    </div>
  )
}
