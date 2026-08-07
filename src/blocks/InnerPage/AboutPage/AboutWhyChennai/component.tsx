'use client'

import React, { useState } from 'react'

type PayloadMedia = {
  id: string
  url: string
  alt?: string
}

type TabItem = {
  id?: string
  tabPrefix?: string
  tabTitle?: string
  image?: PayloadMedia | string | null
  points?: string
}

type WhyChennaiProps = {
  heading?: string
  subheading?: string
  description?: string
  tabs?: TabItem[]
}

export default function AboutWhyChennaiComponent({
  heading = '',
  subheading = '',
  description = '',
  tabs = [],
}: WhyChennaiProps) {
  const [activeTab, setActiveTab] = useState<number>(0)

  // Avoid rendering anything if CMS has no tabs input yet
  if (!tabs || tabs.length === 0) {
    return null
  }

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  return (
    <div className="utilities1-main-wrapper whyChennaiTab">
      <section className="py-[10vh] utilities1-section">
        <div className="flex flex-col container max-w-7xl mx-auto px-4">
          {/* Section Header */}
          {(heading || subheading || description) && (
            <div className="utilities1-title mb-[5vh] text-center">
              {heading && <h2>{heading}</h2>}
              {subheading && (
                <p>
                  <strong>{subheading}</strong>
                </p>
              )}
              {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
            </div>
          )}

          <div className="utilities1-column">
            <div className="utilities1-tabs-container flex">
              {/* Desktop Left Side Tab Buttons */}
              <ul className="utilities1-tabs flex flex-col items-start justify-center">
                {tabs.map((tab, index) => (
                  <li
                    key={tab.id || index}
                    className={`utilities1-tab ${
                      activeTab === index ? 'utilities1-tab-active' : ''
                    } ${index === tabs.length - 1 ? 'utilities1-tab-last' : ''}`}
                    onClick={() => handleTabClick(index)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    {tab.tabPrefix && <small>{tab.tabPrefix}</small>} {tab.tabTitle || ''}
                  </li>
                ))}
              </ul>

              {/* Right Side Content & Mobile Accordion */}
              <div className="utilities1-content-container">
                {tabs.map((tab, index) => {
                  const imageUrl =
                    typeof tab.image === 'object' && tab.image !== null
                      ? tab.image.url
                      : typeof tab.image === 'string'
                        ? tab.image
                        : ''

                  const imageAlt =
                    typeof tab.image === 'object' && tab.image !== null
                      ? tab.image.alt || tab.tabTitle
                      : tab.tabTitle || ''

                  const pointsList = tab.points
                    ? tab.points.split('\n').filter((p) => p.trim())
                    : []

                  return (
                    <React.Fragment key={tab.id || index}>
                      {/* Mobile Accordion Header */}
                      <h3
                        className={`utilities1-tab-heading ${
                          activeTab === index ? 'utilities1-heading-active' : ''
                        }`}
                        onClick={() => handleTabClick(index)}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <span>
                          {tab.tabPrefix && <small>{tab.tabPrefix}</small>} {tab.tabTitle || ''}
                        </span>
                        <span className="utilities1-toggle-symbol">
                          {activeTab === index ? '−' : '+'}
                        </span>
                      </h3>

                      {/* Tab Body Content */}
                      <div
                        className="utilities1-tab-content"
                        style={{
                          display: activeTab === index ? 'block' : 'none',
                        }}
                      >
                        <div className="InvestMainDivSection TabInvestSection">
                          {imageUrl && <img src={imageUrl} alt={imageAlt || 'Tab Image'} />}
                          {pointsList.length > 0 && (
                            <ul className="home-city-points">
                              {pointsList.map((point, pIdx) => (
                                <li key={pIdx}>{point}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </React.Fragment>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
