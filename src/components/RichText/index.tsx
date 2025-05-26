import { MediaBlock } from '@/blocks/MediaBlock/Component'
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical'
import {
  JSXConvertersFunction,
  LinkJSXConverter,
  RichText as ConvertRichText,
} from '@payloadcms/richtext-lexical/react'

import { CodeBlock, CodeBlockProps } from '@/blocks/Code/Component'

import type {
  BannerBlock as BannerBlockProps,
  CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
} from '@/payload-types'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { cn } from '@/utilities/ui'
import { VisitBanner } from '@/blocks/PageBanners/VisitBanner/Component'
import HotelsInChennaiSection from '@/blocks/InnerPage/SharedBlocks/Hotels/Component'
import ExploreMoreChennai from '@/blocks/InnerPage/Accomodation/Explore/Component'
import SocialChennai from '@/blocks/HomePage/SocialChennai/Component'
import Banner from '@/blocks/InnerPage/SharedBlocks/Banners/Components'
import CareerIntro from '@/blocks/InnerPage/SharedBlocks/careerIntro/Component'
import FeatureSections from '@/blocks/InnerPage/SharedBlocks/VisualAndKeyPoints/Components'
import GlobalSearch from '@/blocks/HomePage/GlobalSearch/Component'
import IntroText from '@/blocks/InnerPage/SharedBlocks/IntroText/Components'
import FutureUnicorns from '@/blocks/InnerPage/SharedBlocks/StickyImageScroll/Component'
import { PageIntroText } from '@/blocks/MainPages/SharedBlocks/IntroText/Component'
import InvestCategory from '@/blocks/InnerPage/SharedBlocks/InvestCategory/Components'
// import EventDetailsBlock from '@/blocks/InnerPage/SharedBlocks/EventDetails/Components'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<
      CTABlockProps | MediaBlockProps | BannerBlockProps | CodeBlockProps | VisitBannerProps
    >
export type VisitBannerProps = {
  title: string
  bannerImage?: {
    url?: string
  }
}

export type VisitCategoryProps = {
  heading?: string
  description?: string
  categories?: Array<{
    label: string
    link: string
    image?: {
      url?: string
    }
  }>
}

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { value, relationTo } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug
  return relationTo === 'posts' ? `/posts/${slug}` : `/${slug}`
}

const jsxConverters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),
  blocks: {
    // banner: ({ node }) => <BannerBlock className="col-start-2 mb-4" {...node.fields} />,
    // mediaBlock: ({ node }) => (
    //   <MediaBlock
    //     className=""
    //     imgClassName=""
    //     {...node.fields}
    //     captionClassName=""
    //     enableGutter={false}
    //     disableInnerContainer={true}
    //   />
    // ),

    code: ({ node }) => <CodeBlock className="" {...node.fields} />,

    cta: ({ node }) => <CallToActionBlock {...node.fields} />,
    globalSearch: ({ node }: { node: SerializedBlockNode<any> }) => (
      <GlobalSearch {...node.fields} />
    ),
    visitBanner: ({ node }: { node: SerializedBlockNode<VisitBannerProps> }) => (
      <VisitBanner {...node.fields} />
    ),

    ZigZagContent: ({ node }: { node: SerializedBlockNode<any> }) => (
      <HotelsInChennaiSection {...node.fields} />
    ),
    exploreMoreChennai: ({ node }: { node: SerializedBlockNode<any> }) => (
      <ExploreMoreChennai {...node.fields} />
    ),

    socialChennai: ({ node }: { node: SerializedBlockNode<any> }) => (
      <SocialChennai {...node.fields} />
    ),
    Banner: ({ node }: { node: SerializedBlockNode<any> }) => <Banner {...node.fields} />,
    careerIntro: ({ node }: { node: SerializedBlockNode<any> }) => <CareerIntro {...node.fields} />,
    introText: ({ node }: { node: SerializedBlockNode<any> }) => <IntroText {...node.fields} />,
    featureSections: ({ node }: { node: SerializedBlockNode<any> }) => (
      <FeatureSections {...node.fields} />
    ),

    // WORK PAGE #####
    futureUnicorns: ({ node }: { node: SerializedBlockNode<any> }) => (
      <FutureUnicorns {...node.fields} />
    ),

    //    eventDetails: ({ node }: { node: SerializedBlockNode<any> }) => (
    //   <EventDetailsBlock {...node.fields} />
    // ),

    introTextBlock: ({ node }: { node: SerializedBlockNode<any> }) => (
      <PageIntroText {...node.fields} />
    ),

        // InvestCategory

      InvestCategoryBlock: ({ node }: { node: SerializedBlockNode<any> }) => (
      <InvestCategory {...node.fields} />
    ),


  },
})

type Props = {
  data: DefaultTypedEditorState
  enableGutter?: boolean
  enableProse?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { className, enableProse = true, enableGutter = true, ...rest } = props
  return (
    <ConvertRichText
      converters={jsxConverters}
      className={cn(
        {
          container: enableGutter,
          '': !enableGutter,
          '': enableProse,
        },
        className,
      )}
      {...rest}
    />
  )
}
