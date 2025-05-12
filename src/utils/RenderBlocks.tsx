import React, { Fragment } from 'react'
import BecameAVolunteer from '@/blocks/becameAVolunteer/Server'
import ChennaiInvestments from '@/blocks/ChennaiInvestments/server'
import { ExploreBlockServer } from '@/blocks/explore/server'
import { FunChennaiBlockServer } from '@/blocks/funChennai/server'
import GlobalSearch from '@/blocks/Globalsearch/server'
import SocialChennaiBlock from '@/blocks/socialChennai/server'
import { StartupChennaiBlockServer } from '@/blocks/startupChennai/server'
import EventsCalendarBlock from '@/blocks/eventsCalendar/server'

import { Page } from '@/payload-types'
import VolunteerBanner from '@/blocks/page-blocks/volunteer/banner/Server'
import VolunteerContentLife from '@/blocks/page-blocks/volunteer/Volunteer-life-content/server'
import VolunteerBecameList from '@/blocks/page-blocks/volunteer/became-a-volunteer/server'
import WorkBannerSection from '@/blocks/page-blocks/work/banner/server'
import WorkInChennaiSection from '@/blocks/page-blocks/work/work-in-chennai/server'
import InvestBannerSection from '@/blocks/page-blocks/invest/banner/server'
import InvestChennaiSection from '@/blocks/page-blocks/invest/InvestChennai/server'
import InvestmentCategoryListSection from '@/blocks/page-blocks/invest/invest-category/server'
import LiveBannerSection from '@/blocks/page-blocks/live/banner/server'
import LiveInfoSection from '@/blocks/page-blocks/live/living-in-chennai/server'
import ChennaiLifeEssentials from '@/blocks/page-blocks/live/chennaiLifeEssentials/server'
import AccodomationBannerSection from '@/blocks/page-blocks/accodomation/banner/server'
import HotelsInChennaiSection from '@/blocks/page-blocks/accodomation/hotelsInChennai/server'
import ExploreMoreChennai from '@/blocks/page-blocks/accodomation/exploreMore/server'
import { VisitIntroText } from '@/blocks/page-blocks/visit/visit-intro/server'
import { VisitBanner } from '@/blocks/page-blocks/visit/visit-banner/server'
import { VisitCategory } from '@/blocks/page-blocks/visit/visit-catogory/server'

const blockComponents: Record<string, React.FC<any>> = {
  //################## HOME PAGE##########
  becameAVolunteer: BecameAVolunteer,
  explore: ExploreBlockServer,
  startupChennai: StartupChennaiBlockServer,
  funChennai: FunChennaiBlockServer,
  socialChennai: SocialChennaiBlock,
  globalSearch: GlobalSearch,
  chennaiInvestments: ChennaiInvestments,
  eventsCalendarBlock: EventsCalendarBlock,
  //############  VOLUNTEER ###############
  volunteerBanner: VolunteerBanner,
  volunteerContentBlock: VolunteerContentLife,
  volunteerBecameSection: VolunteerBecameList,
  //############  WORK   ##################
  workBanner: WorkBannerSection,
  workinchennai: WorkInChennaiSection,
  //############  INVEST   ##################

  investBanner: InvestBannerSection,
  investChennai: InvestChennaiSection,
  investmentCategoryList: InvestmentCategoryListSection,

  //############  LIVE   ##################
  liveBanner: LiveBannerSection,
  livingInChennai: LiveInfoSection,
  chennaiLifeEssentials: ChennaiLifeEssentials,

  //################ ACCOMODATION ##############
  accodomationBanner: AccodomationBannerSection,
  HotelInChennai: HotelsInChennaiSection,
  exploreMoreChennai: ExploreMoreChennai,
  //################ VISIT ##############

  visitCategory: VisitCategory,
  visitIntroText: VisitIntroText,
  visitBanner: VisitBanner,
}

//########### HELPERS    ###########
const normalizeBlockType = (type: string) =>
  type.replace(/-([a-z])/g, (_, char) => char.toUpperCase())

type RenderBlockProps = {
  blocks: Page['layout']
}

export const RenderBlock: React.FC<RenderBlockProps> = ({ blocks }) => {
  if (!Array.isArray(blocks) || blocks.length === 0) return null

  return (
    <Fragment>
      {blocks.map((block, index) => {
        //########### HELPERS    ###########
        const normalizedType = normalizeBlockType(block.blockType)
        const BlockComponent = blockComponents[normalizedType]

        console.log('block', block)
        // console.log('BlockCompnormalizedTypeonent', normalizedType)

        //########### BASE CHECK   ###########
        if (!BlockComponent) {
          console.error(`No component found for block type: ${normalizedType}`)
          return null
        }
        //########### VOLENDER SECTION   ###########
        if (normalizedType === 'becameAVolunteer' && block.volunteerSlidesRef) {
          const slides = block.volunteerSlidesRef?.slides || []

          return (
            <div key={index}>
              <BlockComponent {...block} slides={slides} />
            </div>
          )
        }
        //########### CHENNAI INVERSMENT  ###########

        if (normalizedType === 'chennaiInvestments') {
          const investmentItems = block.categorySource || []
          if (investmentItems.length === 0) {
            return (
              <div key={index}>
                <p>No investment opportunities available.</p>
              </div>
            )
          }
          return (
            <div key={index}>
              <BlockComponent {...block} />
            </div>
          )
        }
        //########### EVENT CALENDAR ###########

        if (normalizedType === 'eventsCalendarBlock') {
          const events =
            typeof block.eventGroupRef === 'object' &&
            block.eventGroupRef !== null &&
            'events' in block.eventGroupRef
              ? block.eventGroupRef.events
              : []

          return (
            <div key={index}>
              <BlockComponent {...block} events={events} />
            </div>
          )
        }

        //########### SOCIAL IN CHENNAI ###########
        if (normalizedType === 'socialChennai') {
          const reelsGroup = block.reelsRef
          const reels = reelsGroup?.reels || []
          return (
            <div key={index}>
              <BlockComponent {...block} reels={reels} />
            </div>
          )
        }

        //########### GENTRAL BLOCKS  ###########

        return (
          <div key={index}>
            <BlockComponent {...block} />
          </div>
        )
      })}
    </Fragment>
  )
}
