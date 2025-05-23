import React, { Fragment } from 'react'
import type { Page } from '@/payload-types'
import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { VisitBanner } from './PageBanners/VisitBanner/Component'
import { ExploreBlockServer } from './HomePage/Explore/Components'
import { FunChennaiBlockServer } from './HomePage/funChennai/Component'
import { StartupChennaiBlockServer } from './HomePage/StartupChennai/Component'
import ChennaiInvestments from './HomePage/Investments/Components'
import SocialChennai from './HomePage/SocialChennai/Component'
import BecameAVolunteer from './HomePage/Volunteer/Component'
import EventsCalendarBlock from './HomePage/EventsCalendar/Component'
import GlobalSearch from './HomePage/GlobalSearch/Component'
import HeroSliderBlock from './PageBanners/Home/Component'
import { VisitIntroText } from './MainPages/Visit/VisitIntro/Component'
import { VisitCategory } from './MainPages/Visit/VisitCategory/Component'
import HotelsInChennaiSection from './InnerPage/SharedBlocks/Hotels/Component'
import mainPageBanner from './MainPages/SharedBlocks/Banner/Component'

const blockComponents: {
  [key: string]: React.FC<any>
} = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  visitBanner: VisitBanner,
  explore: ExploreBlockServer,
  funChennai: FunChennaiBlockServer,
  startupChennai: StartupChennaiBlockServer,
  chennaiInvestments: ChennaiInvestments,
  socialChennai: SocialChennai,
  becameAVolunteer: BecameAVolunteer,
  eventsCalendar: EventsCalendarBlock,
  globalSearch: GlobalSearch,
  heroSliderBlock: HeroSliderBlock,
  visitIntroText: VisitIntroText,

  visitcategory: VisitCategory,

  ZigZagContent: HotelsInChennaiSection,

  mainPageBanner: mainPageBanner,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          console.log('blockType:', blockType)
          console.log('block:', block)

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  <Block {...block} disableInnerContainer={true} />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
