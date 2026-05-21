'use client'

import React from 'react'
import { motion } from 'framer-motion'
import './style.css'

type Point = {
  highlight: string
  content: string
}

type Props = {
  heading: string
  subHeading: string
  firstColumn: Point[]
  secondColumn: Point[]
  buttonText?: string
  buttonLink?: string
  icon?: {
    url?: string
    alt?: string
  }
}

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}

const SecondSection: React.FC<Props> = ({
  heading,
  subHeading,
  firstColumn,
  secondColumn,
  buttonText,
  buttonLink,
  icon,
}) => {
  return (
    <section className="welcometochennaibanner">
      <div className="ChennaiInvestMents welcometosuperchennairow container max-w-7xl mx-auto px-4">
        {/* LEFT CONTENT ################################## */}
        <div className="welcomePagefirst">
          <h1 className="chennaiInvestmentsHeading">{heading}</h1>

          <h5 className="chennaiInvestmentsHeadingSub" style={{ textAlign: 'left' }}>
            {subHeading}
          </h5>
        </div>

        {/* RIGHT CONTENT ################################## */}
        <div className="welcomePageSecond">
          <div className="welcomeSecondPageDesign">
            {/* FIRST COLUMN ################################## */}
            <div className="welcomePageseconddesign">
              {firstColumn?.map((item, i) => (
                <motion.h5
                  key={i}
                  className="chennaiInvestmentsHeadingSub"
                  variants={textVariants as any}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                >
                  {icon?.url && (
                    <motion.img
                      src={icon.url}
                      alt={icon.alt || 'Icon'}
                      className="heartWelcomesvg"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatDelay: 0.3,
                        ease: 'easeInOut',
                      }}
                    />
                  )}
                  <span
                    style={{
                      color: '#a44294',
                      fontWeight: 600,
                    }}
                  >
                    {item.highlight}
                  </span>{' '}
                  {item.content}
                </motion.h5>
              ))}
            </div>

            {/* SECOND COLUMN ################################## */}
            <div className="welcomePageseconddesign">
              {secondColumn?.map((item, i) => (
                <motion.h5
                  key={i}
                  className="chennaiInvestmentsHeadingSub"
                  variants={textVariants as any}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + firstColumn.length}
                >
                  {icon?.url && (
                    <motion.img
                      src={icon.url}
                      alt={icon.alt || 'Icon'}
                      className="heartWelcomesvg"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        repeatDelay: 0.3,
                        ease: 'easeInOut',
                      }}
                    />
                  )}
                  <span
                    style={{
                      color: '#a44294',
                      fontWeight: 600,
                    }}
                  >
                    {item.highlight}
                  </span>{' '}
                  {item.content}
                </motion.h5>
              ))}
            </div>
          </div>

          {/* BUTTON ################################## */}
          <div className="volunteerSectionContent">
            <a href={buttonLink || '#'} className="exploreMoreLink">
              {buttonText || 'Explore More'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondSection
