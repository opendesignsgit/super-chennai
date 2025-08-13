import { BannerBlock } from '@/blocks/Banner/Component'
import SocialChennai from '@/blocks/HomePage/SocialChennai/Component'
import BecameAVolunteer from '@/blocks/HomePage/Volunteer/Component'
import { HotelDetailSectionBlock } from '@/blocks/InnerPage/SharedBlocks/InnerSubPageDetails/component'
import InvestCategory from '@/blocks/InnerPage/SharedBlocks/InvestCategory/Components'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import {
  DefaultNodeTypes,
  SerializedBlockNode,
  SerializedLinkNode,
  type DefaultTypedEditorState,
} from '@payloadcms/richtext-lexical'
import {
  RichText as ConvertRichText,
  JSXConvertersFunction,
  LinkJSXConverter,
} from '@payloadcms/richtext-lexical/react'

import { CodeBlock, CodeBlockProps } from 'src/blocks/Code/Component'

import GlobalSearch from 'src/blocks/HomePage/GlobalSearch/Component'
import Banner from 'src/blocks/InnerPage/SharedBlocks/Banners/Components'
import ExploreMoreChennai from 'src/blocks/InnerPage/SharedBlocks/Explore/Component'
import FeatureSectionList from 'src/blocks/InnerPage/SharedBlocks/featureSectionListLayout/Component'
import FeatureSectionSplit from 'src/blocks/InnerPage/SharedBlocks/featureSectionSplitLayout/Component'
import IntroText from 'src/blocks/InnerPage/SharedBlocks/IntroText/Components'
import { default as StickyImageScroll } from 'src/blocks/InnerPage/SharedBlocks/StickyImageScroll/Component'
import FeatureSections from 'src/blocks/InnerPage/SharedBlocks/VisualAndKeyPoints/Components'
import HotelsInChennaiSection from 'src/blocks/InnerPage/SharedBlocks/ZigZagContent/Component'
import { PageIntroText } from 'src/blocks/MainPages/SharedBlocks/IntroText/Component'
import { VisitBanner } from 'src/blocks/PageBanners/VisitBanner/Component'
import type {
  BannerBlock as BannerBlockProps,
  // CallToActionBlock as CTABlockProps,
  MediaBlock as MediaBlockProps,
} from 'src/payload-types'
import { cn } from 'src/utilities/ui'
// import { CallToActionBlock } from '@/blocks/CallToAction/Component'

type NodeTypes =
  | DefaultNodeTypes
  | SerializedBlockNode<
      // CTABlockProps | 
      MediaBlockProps | BannerBlockProps | CodeBlockProps | VisitBannerProps
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

const jsxConverters = ({ pageData }: { pageData?: any }): JSXConvertersFunction<NodeTypes> => {
  return ({ defaultConverters }) => {
    return {
      ...defaultConverters,
      ...LinkJSXConverter({ internalDocToHref }),
      blocks: {
        //###################### THIS IS POST RELATED BLOG #####################
        banner: ({ node }) => <BannerBlock className="col-start-2 mb-4" {...node.fields} />,
        mediaBlock: ({ node }) => (
          <MediaBlock
            className="col-start-1 col-span-3"
            imgClassName="m-0"
            {...node.fields}
            captionClassName="mx-auto max-w-[48rem]"
            enableGutter={false}
            disableInnerContainer={true}
          />
        ),

        //################# THIS IS POST RELATED BLOG #####

        code: ({ node }) => <CodeBlock className="" {...node.fields} />,
        // cta: ({ node }) => <CallToActionBlock {...node.fields} />,

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

        socialReelSlider: ({ node }: { node: SerializedBlockNode<any> }) => (
          <SocialChennai {...node.fields} />
        ),
        Banner: ({ node }: { node: SerializedBlockNode<any> }) => <Banner {...node.fields} />,
        introText: ({ node }: { node: SerializedBlockNode<any> }) => <IntroText {...node.fields} />,
        featureSections: ({ node }: { node: SerializedBlockNode<any> }) => (
          <FeatureSections {...node.fields} />
        ),

        introTextBlock: ({ node }: { node: SerializedBlockNode<any> }) => (
          <PageIntroText {...node.fields} />
        ),

        InvestCategoryBlock: ({ node }: { node: SerializedBlockNode<any> }) => (
          <InvestCategory data={pageData} {...node.fields} />
        ),

        StickyImageScroll: ({ node }: { node: SerializedBlockNode<any> }) => (
          <StickyImageScroll {...node.fields} />
        ),

        featureSectionSplit: ({ node }: { node: SerializedBlockNode<any> }) => (
          <FeatureSectionSplit {...node.fields} />
        ),

        featureSectionList: ({ node }: { node: SerializedBlockNode<any> }) => (
          <FeatureSectionList {...node.fields} />
        ),

        innerSubPageDetails: ({ node }: { node: SerializedBlockNode<any> }) => (
          <HotelDetailSectionBlock {...node.fields} />
        ),

        becameAVolunteer: ({ node }: { node: SerializedBlockNode<any> }) => (
          <BecameAVolunteer {...node.fields} />
        ),
      },
    }
  }
}

type Props = {
  data: DefaultTypedEditorState
  enableGutter?: boolean
  enableProse?: boolean
  pageData?: any
} & React.HTMLAttributes<HTMLDivElement>

export default function RichText(props: Props) {
  const { pageData, className, enableProse = true, enableGutter = true, ...rest } = props

  return (
    <ConvertRichText
      // converters={jsxConverters}
      converters={jsxConverters({ pageData })}
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
