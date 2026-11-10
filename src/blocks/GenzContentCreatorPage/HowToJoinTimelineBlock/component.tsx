'use client'

import React from 'react'

type JoinStep = {
  id?: string
  stepNumber: string
  stepIcon?: { url?: string } | string
  stepDescription: string
  themeColor?: 'blue' | 'pink'
}

type HowToJoinProps = {
  sectionTitle?: string
  steps?: JoinStep[]
}

export default function HowToJoinTimelineSection(props: HowToJoinProps) {
  const joinSteps = props.steps || []

  const getImageUrl = (imgObj: any, fallback: string) => {
    if (!imgObj) return fallback
    if (typeof imgObj === 'object' && imgObj?.url) return imgObj.url
    if (typeof imgObj === 'string') return imgObj
    return fallback
  }

  return (
    <section className="sc-join-section py-16 bg-white">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Main Title */}
        <h2 className="sc-join-title text-3xl lg:text-4xl font-extrabold text-center mb-16">
          HOW TO <span className="sc-join-accent text-pink-500">JOIN?</span>
        </h2>

        {/* Timeline Container */}
        <div className="sc-join-timeline">
          {/* Connecting Line (Visible on Desktop) */}
          <div className="sc-join-line"></div>

          {joinSteps.map((step, index) => {
            const isPink = step.themeColor === 'pink'
            const fallbackIcon =
              index === 0
                ? '/images/genz/Group12-new.svg'
                : index === 1
                  ? '/images/genz/Group14.svg'
                  : index === 2
                    ? '/images/genz/Group15.svg'
                    : '/images/genz/Group13.svg'

            const iconUrl = getImageUrl(step.stepIcon, fallbackIcon)

            return (
              <div key={step.id || index} className="sc-join-step">
                {/* Circle Icon Wrapper */}
                <div
                  className={`sc-join-circle ${
                    isPink
                      ? 'sc-join-bg-pink bg-pink-50 text-pink-600'
                      : 'sc-join-bg-blue bg-blue-50 text-blue-600'
                  }`}
                >
                  <img src={iconUrl} alt={step.stepNumber} className="" />
                </div>

                {/* Step Number */}
                <h4
                  className={`sc-join-step-num ${
                    isPink ? 'sc-join-text-pink' : 'sc-join-text-blue'
                  }`}
                >
                  {step.stepNumber}
                </h4>

                {/* Step Description */}
                <p className="sc-join-step-desc">{step.stepDescription}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
