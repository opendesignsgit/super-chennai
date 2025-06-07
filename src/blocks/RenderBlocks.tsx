// import { ArchiveBlock } from 'src/blocks/ArchiveBlock/Component'
// import { CallToActionBlock } from 'src/blocks/CallToAction/Component'
// import { ContentBlock } from 'src/blocks/Content/Component'
import { FormBlock } from 'src/blocks/Form/Component'
import { MediaBlock } from 'src/blocks/MediaBlock/Component'
import type { Page } from 'src/payload-types'
import React, { Fragment } from 'react'
import { ContentZoneCarousel } from './HomePage/ContentZoneCarousel/Component'
import { EventsCalendarBlock } from './HomePage/EventsCalendar/Component'
import { ExploreBlockServer } from './HomePage/Explore/Components'
import { FunChennaiBlockServer } from './HomePage/funChennai/Component'
import GlobalSearch from './HomePage/GlobalSearch/Component'
import InfographySection from './HomePage/infography/Component'
import ChennaiInvestments from './HomePage/Investments/Components'
import SpotlightGallerySection from './HomePage/leftContentRightSlider/Components'
import socialReelSlider from './HomePage/SocialChennai/Component'
import { StartupChennaiBlockServer } from './HomePage/StartupChennai/Component'
import TwoColumnFeatureBlock from './HomePage/TwoColumnFeatureBlock/Components'
import Utilities from './HomePage/Utilities/Component'
import BecameAVolunteer from './HomePage/Volunteer/Component'
import IntroText from './InnerPage/SharedBlocks/IntroText/Components'
import InvestCategory from './InnerPage/SharedBlocks/InvestCategory/Components'
import StickyImageScroll from './InnerPage/SharedBlocks/StickyImageScroll/Component'
import FeatureSections from './InnerPage/SharedBlocks/VisualAndKeyPoints/Components'
import ZigZagContentSection from './InnerPage/SharedBlocks/ZigZagContent/Component'
import { EventsHomeBlock } from './MainPages/Events/AllEvents'
import { InnovateSliderBlock } from './MainPages/Innovate/TabWithSlider/Component'
import InvestmentCategoryListSection from './MainPages/Invest/InvestCategory/Component'
import ChennaiLifeEssentials from './MainPages/Live/ChennaiLifeEssentials/Components'
import LiveIntroTextSection from './MainPages/SharedBlocks/IntroTextWithImage/Component'
import mainPageBanner from './MainPages/SharedBlocks/Banner/Component'
import { FormPopupComponent } from './MainPages/SharedBlocks/FormPopup/Components'
import { PageIntroText } from './MainPages/SharedBlocks/IntroText/Component'
import { VisitCategory } from './MainPages/Visit/VisitCategory/Component'
import VolunteerBecameSection from './MainPages/Volunteer/Volunteers/Components'
import HeroSliderBlock from './PageBanners/Home/Component'
import { VisitBanner } from './PageBanners/VisitBanner/Component'
import { TextHoverImageSection } from './MainPages/Work/Works/Components'

const blockComponents: {
  [key: string]: React.FC<any>
} = {
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  visitBanner: VisitBanner,
  explore: ExploreBlockServer,
  funChennai: FunChennaiBlockServer,
  startupChennai: StartupChennaiBlockServer,
  chennaiInvestments: ChennaiInvestments,
  socialReelSlider: socialReelSlider,
  becameAVolunteer: BecameAVolunteer,
  eventsCalendar: EventsCalendarBlock,
  globalSearch: GlobalSearch,
  heroSliderBlock: HeroSliderBlock,
  infography: InfographySection,
  twoColumnFeatureBlock: TwoColumnFeatureBlock,
  utilities: Utilities,
  spotlightGallery: SpotlightGallerySection,
  introTextBlock: PageIntroText,
  visitcategory: VisitCategory,
  ZigZagContent: ZigZagContentSection,
  mainPageBanner: mainPageBanner,
  formPopup: FormPopupComponent,
  volunteerBecameSection: VolunteerBecameSection,
  contentZoneCarousel: ContentZoneCarousel,
  allevents: EventsHomeBlock,
  InvestCategoryBlock: InvestCategory,
  liveIntrorSection: LiveIntroTextSection,
  chennaiLifeEssentials: ChennaiLifeEssentials,
  featureSections: FeatureSections,
  StickyImageScroll: StickyImageScroll,
  introText: IntroText,
  investmentCategoryList: InvestmentCategoryListSection,
  innovateSlider: InnovateSliderBlock,
  textHoverImageSection: TextHoverImageSection,
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
