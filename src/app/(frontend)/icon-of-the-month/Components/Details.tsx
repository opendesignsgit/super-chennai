/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'

import LexicalRenderer from '@/components/lexical/LexicalRenderer'
import { motion } from 'framer-motion'
import Image from 'next/image'

/* =========================================================
   TYPES
========================================================= */

interface Media {
  id?: number
  url?: string
  alt?: string | null
}

interface IconOfTheMonthDetailsProps {
  data: any
}

/* =========================================================
   COMPONENT
========================================================= */

const IconOfTheMonthDetails: React.FC<IconOfTheMonthDetailsProps> = ({ data }) => {
  if (!data) return null
  // console.log('data-icons data', data)

  /* =========================================================
     EVENT DATA
  ========================================================= */

  const eventFields = data?.eventFields || {}
  const title = eventFields?.title || data?.title || 'Event'
  const mobileImage: Media = data?.mobileImage
  const heroImage: Media = data?.heroImage

  return (
    <>
      <div
        className="VolunteerBgSection InvestBgSection notHome aboutBan"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="VolunteerMainContainer">
          <div className="volunteerSectionBanner">
            <div className="VolunteerBannerImage">
              <img src={heroImage?.url} />
            </div>
            <h3 className="voluntterContent"></h3>
          </div>
        </div>
        <div className="notHomePageSearch"></div>
      </div>

      <section className="bg-white">
        <div>
          <div className="">
            {/* @ts-ignore -- Quick fix for dynamic context payload prop transfer */}
            <LexicalRenderer content={data?.content} iconOfMonthData={data} />
          </div>
        </div>
      </section>
    </>
  )
}

export default IconOfTheMonthDetails
