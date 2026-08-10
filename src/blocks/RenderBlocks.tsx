import React, { Fragment } from 'react'
import { FormBlock } from 'src/blocks/Form/Component'
import { MediaBlock } from 'src/blocks/MediaBlock/Component'
import type { Page } from 'src/payload-types'
import MargazhiEventsSectionComponent from './Contest/Component'
import ContestFoodBlockComponent from './Contest/FoodBlock/Component'
import { ContentZoneCarousel } from './HomePage/ContentZoneCarousel/Component'
import CricketScoreBlock from './HomePage/CricketScoreBlock/server'
import { EventsCalendarBlock } from './HomePage/EventsCalendar/Component'
import { ExploreBlockServer } from './HomePage/Explore/Components'
import { FunChennaiBlockServer } from './HomePage/funChennai/Component'
import GlobalSearch from './HomePage/GlobalSearch/Component'
import InfographySection from './HomePage/infography/Component'
import ChennaiInvestments from './HomePage/Investments/Components'
import SpotlightGallerySection from './HomePage/leftContentRightSlider/Components'
import socialReelSlider from './HomePage/SocialChennai/Component'
import { StartupChennaiBlockServer } from './HomePage/StartupChennai/Component'
import TrendingChennaiBlock from './HomePage/TrendingChennaiSlider/server'
import TwoColumnFeatureBlock from './HomePage/TwoColumnFeatureBlock/Components'
import Utilities from './HomePage/Utilities/Component'
import BecameAVolunteer from './HomePage/Volunteer/Component'
import SecondSection from './HomePage/WelcomeSction/component'
import IntroText from './InnerPage/SharedBlocks/IntroText/Components'
import InvestCategory from './InnerPage/SharedBlocks/InvestCategory/Components'
import RestaurantsCategoriesComponent from './InnerPage/SharedBlocks/Restaurants/Components'
import StickyImageScroll from './InnerPage/SharedBlocks/StickyImageScroll/Component'
import FeatureSections from './InnerPage/SharedBlocks/VisualAndKeyPoints/Components'
import ZigZagContentSection from './InnerPage/SharedBlocks/ZigZagContent/Component'
import { EventsHomeBlock } from './MainPages/Events/AllEvents'
import { InnovateSliderBlock } from './MainPages/Innovate/TabWithSlider/Component'
import InvestmentCategoryListSection from './MainPages/Invest/InvestCategory/Component'
import ChennaiLifeEssentials from './MainPages/Live/ChennaiLifeEssentials/Components'
import mainPageBanner from './MainPages/SharedBlocks/Banner/Component'
import { FormPopupComponent } from './MainPages/SharedBlocks/FormPopup/Components'
import { PageIntroText } from './MainPages/SharedBlocks/IntroText/Component'
import LiveIntroTextSection from './MainPages/SharedBlocks/IntroTextWithImage/Component'
import { VisitCategory } from './MainPages/Visit/VisitCategory/Component'
import VolunteerBecameSection from './MainPages/Volunteer/Volunteers/Components'
import { TextHoverImageSection } from './MainPages/Work/Works/Components'
import GalleryBlockComponent from './MediaHighlights/Component'
import HeroSliderBlock from './PageBanners/Home/Component'
import { VisitBanner } from './PageBanners/VisitBanner/Component'
import PopupBanner from './Popup/component'
import { VideoBlockComponent } from './VideoBlock/Component'
import ArattaiBlockComponent from '@/collections/Arrattai/components/RegistrationForm/coponents'
import ConclaveSuperChennaiBlockComponent from './InnerPage/ConclavePage/ConclaveSuperchennaiBlock/component'
import ConclaveAboutComponent from './InnerPage/ConclavePage/ConclaveAboutBlock/component'
import ConclaveAgendaComponent from './InnerPage/ConclavePage/ConclaveAgendaBlock/component'
import ConclaveSpeakersComponent from './InnerPage/ConclavePage/ConclaveSpeakersBlock/component'
import ConclaveFivePillarsComponent from './InnerPage/ConclavePage/ConclaveFivePillarsBlock/component'
import ConclaveCtaComponent from './InnerPage/ConclavePage/ConclaveCtaBlock/component'
import ConclavePartnersComponent from './InnerPage/ConclavePage/ConclavePartnersBlock/component'
import ConclaveGalleryComponent from './InnerPage/ConclavePage/ConclaveGalleryBlock/component'
import Banner from './InnerPage/SharedBlocks/Banners/Components'
import InnerPageHeroBannerComponent from './InnerPage/SharedBlocks/InnerPageBanner/component'
import FaqSectionComponent from './InnerPage/FAQPage/component'
import AboutIntroBlockComponent from './InnerPage/AboutPage/AboutIntroBlock/component'
import AboutWelcomeSuperChennaiComponent from './InnerPage/AboutPage/AboutWelcomeSection/component'
import InvestPageBorderSectionComponent from './InvestPageBorderSection/component'
import InvestPageTabComponent from './InvestPageTabSection/component'
import InvestPageSliderComponent from './InvestPageSlider/component'
import InnovatePageSliderComponent from './InnovatePage/MainPage/InnovateMainPageSlider/component'
import InnovateInfoSectionComponent from './InnovatePage/MainPage/InnovateInfoSection/component'
import ImagewithContentComponent from './InnerPage/SharedBlocks/ImagewithContent/component'
import ImageWithoutComponent from './InnerPage/SharedBlocks/ImageWithoutContent/component'
import TableSectionComponent from './InnerPage/SharedBlocks/TableSection/component'
import InnerPageSliderComponent from './InnerPage/SharedBlocks/InnerPageSlider/component'
import VisionMissionComponent from './InnerPage/AboutPage/AboutVissionMisson/component'
import AboutFoundationsComponent from './InnerPage/AboutPage/AboutFoundations/component'
import AboutNammaChennaiComponent from './InnerPage/AboutPage/AboutNammaChennaiSection/component'
import GallerySliderWithPopupComponent from './InnerPage/SharedBlocks/GallerySliderWithPopup/component'
import AboutWhyChennaiComponent from './InnerPage/AboutPage/AboutWhyChennai/component'
import AboutWelcomeSuperChennaiComponentNew from './InnerPage/AboutPage/AboutWelcomeSuperChennai/component'
import LeftImageRightSectionComponent from './InnerPage/SharedBlocks/LeftImageRightSection/component'
import ImageOverlaySectionWithPointsComponent from './InnerPage/SharedBlocks/ImageOverlaySectionWithPoints/component'
import BenefitSectionsComponent from './InnerPage/SharedBlocks/BenefitSection/component'
import BenefitSectionsRoseComponent from './InnerPage/SharedBlocks/BenefitSectionRoseBg/component'
import IntroPinkTextWithComponent from './InnerPage/SharedBlocks/IntroPinkTextWithContent/component'
import VisitImageListSectionComponent from './InnerPage/SharedBlocks/VisitImageListSection/component'
import WorkNetworkSectionComponent from './InnerPage/SharedBlocks/WorkNetworkSection/component'
import WorkPageImageSectionComponent from './InnerPage/SharedBlocks/WorkPageImageSection/component'
import HealthcareInChennaiComponent from './InnerPage/SharedBlocks/HealthCareBlocks/component'
import ChennaiHealthCareComponent from './InnerPage/SharedBlocks/ChennaiHealthCareSection/component'
import EyeHospitals from './InnerPage/SharedBlocks/ChennaiHospitals/component'
import HealthCareHospitalsComponent from './InnerPage/SharedBlocks/HealthCareHospitals/component'
import LiveSplitImageFeatureComponent from './InnerPage/SharedBlocks/LiveSplitImageFeatureBlock/component'
import ChennaiLivingSectionComponent from './InnerPage/SharedBlocks/LiveSplitImageFeatureBlock/component'
import ThingsToDoComponent from './InnerPage/SharedBlocks/ThingsToDo/component'

const blockComponents: {
  [key: string]: React.FC<any>
} = {
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  visitBanner: VisitBanner,
  explore: ExploreBlockServer,
  funChennai: FunChennaiBlockServer,
  startupChennai: StartupChennaiBlockServer,

  // InnerPageBanner: Banner,
  // InnerPageHeroBannerBlock: InnerPageHeroBannerComponent,
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
  RestaurantsCategories: RestaurantsCategoriesComponent,
  MargazhiEventsBlock: MargazhiEventsSectionComponent,
  ContestFoodBlock: ContestFoodBlockComponent,
  VideoBlock: VideoBlockComponent,
  secondSection: SecondSection,
  trendingChennaiSlider: TrendingChennaiBlock,
  popupBanner: PopupBanner,
  cricketScoreBlock: CricketScoreBlock,
  GalleryBlock: GalleryBlockComponent,
  eventRegistrationFormBlock: ArattaiBlockComponent,

  // Conclave Page-------------------

  ConclaveSuperChennaiBlock: ConclaveSuperChennaiBlockComponent,
  ConclaveAboutBlock: ConclaveAboutComponent,
  ConclaveAgendaBlock: ConclaveAgendaComponent,
  ConclaveSpeakersBlock: ConclaveSpeakersComponent,
  ConclaveFivePillarsBlock: ConclaveFivePillarsComponent,
  ConclaveCtaBlock: ConclaveCtaComponent,
  ConclavePartnersBlock: ConclavePartnersComponent,
  ConclaveGalleryBlock: ConclaveGalleryComponent,

  // Conclave Page-------------------

  // Faq Page-----------------

  FaqSectionBlock: FaqSectionComponent,

  // Faq Page-----------------

  // About Page-----------------

  AboutIntroBlock: AboutIntroBlockComponent,
  AboutWelcomeSuperChennaiBlock: AboutWelcomeSuperChennaiComponent,
  VisionMissionBlock: VisionMissionComponent,
  AboutFoundationsBlock: AboutFoundationsComponent,
  AboutNammaChennaiBlock: AboutNammaChennaiComponent,
  AboutWhyChennaiBlock: AboutWhyChennaiComponent,
  AboutWelcomeSuperChennaiBlockNew: AboutWelcomeSuperChennaiComponentNew,

  // About Page-----------------

  // Invest Page-----------------

  InvestPageBorderSection: InvestPageBorderSectionComponent,
  InvestPageTabBlock: InvestPageTabComponent,
  InvestPageSliderBlock: InvestPageSliderComponent,

  // Invest Page-----------------

  InnovatePageSliderBlock: InnovatePageSliderComponent,
  InnovateInfoSectionBlock: InnovateInfoSectionComponent,
  ImagewithContent: ImagewithContentComponent,
  ImageWithoutContentBlock: ImageWithoutComponent,
  TableSectionBlock: TableSectionComponent,
  InnerPageSliderBlock: InnerPageSliderComponent,

  // common Blocks

  GallerySliderWithPopupBlock: GallerySliderWithPopupComponent,
  LeftImageRightSectionBlock: LeftImageRightSectionComponent,
  BenefitSectionsBlock: BenefitSectionsComponent,
  // BenefitSectionsRoseBlock: BenefitSectionsRoseComponent,
  IntroPinkTextWithContentBlock: IntroPinkTextWithComponent,

  VisitImageListSectionBlock: VisitImageListSectionComponent,

  WorkNetworkSectionBlock: WorkNetworkSectionComponent,
  WorkPageImageSectionBlock: WorkPageImageSectionComponent,

  // HealthcareInChennaiBlock: HealthcareInChennaiComponent,

  ChennaiHealthCareSectionBlock: ChennaiHealthCareComponent,
  EyeHospitalsBlock: EyeHospitals,

  HealthCareHospitalsBlock: HealthCareHospitalsComponent,
  chnLivBlock: ChennaiLivingSectionComponent,
  thingstodoPage: ThingsToDoComponent,
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
